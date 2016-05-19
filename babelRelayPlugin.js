
var getBabelRelayPlugin = require('babel-relay-plugin');

// load previously saved schema data (see "Schema JSON" below)
var schemaData = require('./schema.json').data;

// create a plugin instance
module.exports = getBabelRelayPlugin(schemaData);