angular = require 'angular'

app = require('angular').module('linkr', [
  require 'angular-ui-router'
])

app.config require './routes'

require './util'
require './entries'
require './main'
