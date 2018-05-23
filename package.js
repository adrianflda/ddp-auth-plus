/* global Package */

Package.describe({
  name: 'amoreno:ddp-auth-plus',
  version: '1.1.2',
  summary: 'This package is useful for multiple apps centralized login.',
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
