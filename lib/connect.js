
/*!
 * Connect
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter
  , proto = require('./proto')
  , utils = require('./utils')
  , path = require('path')
  , basename = path.basename
  , fs = require('fs');

// node patches

require('./patch');

// expose createServer() as the module

exports = module.exports = createServer;

/**
 * Framework version.
 */

exports.version = '2.4.5';

/**
 * Expose mime module.
 */

exports.mime = require('./middleware/static').mime;

/**
 * Expose the prototype.
 */

exports.proto = proto;

/**
 * Auto-load middleware getters.
 */

exports.middleware = {};

/**
 * Expose utilities.
 */

exports.utils = utils;

/**
 * Create a new connect server.
 *
 * @return {Function}
 * @api public
 */

function createServer() {
  function app(req, res){ app.handle(req, res); }
  utils.merge(app, proto);
  utils.merge(app, EventEmitter.prototype);
  app.route = '/';
  app.stack = [];
  for (var i = 0; i < arguments.length; ++i) {
    app.use(arguments[i]);
  }
  return app;
};

/**
 * Support old `.createServer()` method.
 */

createServer.createServer = createServer;

/**
 * Auto-load bundled middleware with getters.
 */
var static = require('./middleware/static.js')
exports.middleware.static = static
exports.static = static
var multipart = require('./middleware/multipart.js')
exports.middleware.multipart = multipart
exports.multipart = multipart
var directory = require('./middleware/directory.js')
exports.middleware.directory = directory
exports.directory = directory
var staticCache = require('./middleware/staticCache.js')
exports.middleware.staticCache = staticCache
exports.staticCache = staticCache
var csrf = require('./middleware/csrf.js')
exports.middleware.csrf = csrf
exports.csrf = csrf
var cookieParser = require('./middleware/cookieParser.js')
exports.middleware.cookieParser = cookieParser
exports.cookieParser = cookieParser
var timeout = require('./middleware/timeout.js')
exports.middleware.timeout = timeout
exports.timeout = timeout
var limit = require('./middleware/limit.js')
exports.middleware.limit = limit
exports.limit = limit
var bodyParser = require('./middleware/bodyParser.js')
exports.middleware.bodyParser = bodyParser
exports.bodyParser = bodyParser
var responseTime = require('./middleware/responseTime.js')
exports.middleware.responseTime = responseTime
exports.responseTime = responseTime
var compress = require('./middleware/compress.js')
exports.middleware.compress = compress
exports.compress = compress
var cookieSession = require('./middleware/cookieSession.js')
exports.middleware.cookieSession = cookieSession
exports.cookieSession = cookieSession
var methodOverride = require('./middleware/methodOverride.js')
exports.middleware.methodOverride = methodOverride
exports.methodOverride = methodOverride
var urlencoded = require('./middleware/urlencoded.js')
exports.middleware.urlencoded = urlencoded
exports.urlencoded = urlencoded
var favicon = require('./middleware/favicon.js')
exports.middleware.favicon = favicon
exports.favicon = favicon
var query = require('./middleware/query.js')
exports.middleware.query = query
exports.query = query
var basicAuth = require('./middleware/basicAuth.js')
exports.middleware.basicAuth = basicAuth
exports.basicAuth = basicAuth
var json = require('./middleware/json.js')
exports.middleware.json = json
exports.json = json
var errorHandler = require('./middleware/errorHandler.js')
exports.middleware.errorHandler = errorHandler
exports.errorHandler = errorHandler
var logger = require('./middleware/logger.js')
exports.middleware.logger = logger
exports.logger = logger
var vhost = require('./middleware/vhost.js')
exports.middleware.vhost = vhost
exports.vhost = vhost
var session = require('./middleware/session.js')
exports.middleware.session = session
exports.session = session
