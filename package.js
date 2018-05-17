/* global Package */

Package.describe({
  name: 'tritrul:ddp-auth-plus',
  version: '0.1.0',
  summary: '',
  git: 'https://github.com/tritrul/ddp-auth-plus.git',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.6')

  api.use([
    'ecmascript',
    'check',
    'mongo',
    'accounts-base',
    'ddp'
  ])

  api.mainModule('server/index.js', 'server')
  api.mainModule('client/index.js', 'client')
})
