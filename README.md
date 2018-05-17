# DDP Authentication

This package is useful if you have one app where your users log in
and one or multiple other apps where you need the user to be
authenticated as well.

The main concept is inspired by https://github.com/ozsay/cluster-accounts and https://github.com/vuhrmeister/meteor-ddp-auth
but this package can be used independendly.

> Note: this is the very first version, it isn't even in production yet.
But feel free to use it and contribute to it.

Usage:

Setup settings.json

for client app
{
    "DDPAuth": {
        "secret": "secretKeyForEncryptedComunicationClientServer",
        "type": "client",
        "serverURL": "http://your-login-provider-ip:3030"
    }
}

for login provider app
{
    "DDPAuth": {
        "secret": "secretKeyForEncryptedComunicationClientServer",
        "type": "provider",
        "serverURL": ""
    }
}

Calling remote methods authenticated

clientApp
import {DDPAuth} from 'meteor/tritrul:ddp-auth-plus'
Template.test.events({
  'click [name=button]' () {
    //Meteor.userId() loged user
    var param1 = "adrian moreno perez"
    var param2 = "36"
    var param3 = "developer"
    DDPAuth.remoteCall('methodName', [params1,params2,params3], function(){})
  }
})

remoteAPP
Meteor.methods({
  methodName: function (params){
    //Meteor.userId() same user loged in clientApp
    //your code here, you can use Meteor.userId() for validations if you wish
    var name = params[0]
    var age = params[1]
    var job = params[2]
  }
})
