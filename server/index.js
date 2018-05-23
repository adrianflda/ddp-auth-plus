import { Meteor } from 'meteor/meteor'
import Provider from './Provider'
import Client from './Client'

__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = Meteor.settings.DDPAuth.providerLoginURL

export const providerLoginConnection = DDP.connect(__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL);

let providerInstance = null

const DDPAuth = {
  startProvider (additionalSelectCriteria) {
    if (providerInstance) {
      throw new Meteor.Error('DDPAuth provider can be started only once!')
    }

    providerInstance = new Provider(additionalSelectCriteria)
    providerInstance.start()
  },

  startClient (connection) {
    const instance = new Client(connection)
    instance.start()
  },
}

export {
  DDPAuth
}

Meteor.startup(function () {
  switch (Meteor.settings.DDPAuth.type) {
    case "client":{
      DDPAuth.startClient(providerLoginConnection)
      break;
    }
    case "provider":{
      DDPAuth.startProvider()
      break;
    }
    default:
  }
})

Meteor.methods({
  bridge: function(methodName, userId, params, callback) {
    check(userId, String)
    this.setUserId(userId)
    return Meteor.call(methodName, params, callback)
  }
})
