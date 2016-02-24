'use strict'

var Client = require('./lib/Client')
var SASL = require('./lib/sasl')
var core = require('node-xmpp-core')

var moduleExports = {}
core.exportCoreUtils(moduleExports)
moduleExports = Client
moduleExports.Client = Client
moduleExports.SASL = SASL
moduleExports.Element = moduleExports.Element
module.exports = moduleExports
