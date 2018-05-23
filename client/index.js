import LoginHandler from './LoginHandler'


const DDPAuth = {
  registerLoginHandler (connection) {
    const instance = new LoginHandler(connection)
    instance.start()
  },
  remoteCall (connection, methodName, params, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    return connection.call(bridge, methodName, Meteor.userId(), params, callback)
  }
}

export {
  DDPAuth
}
