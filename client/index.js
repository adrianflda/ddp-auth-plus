import LoginHandler from './LoginHandler'


const DDPAuth = {
  registerLoginHandler (connection) {
    const instance = new LoginHandler(connection)
    instance.start()
  },
  remoteCall (connection, methodName, params, callback) {
    this.registerLoginHandler(connection)
    return connection.call(methodName, params, callback)
  }
}

export {
  DDPAuth
}
