/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/config/i18n.js":
/*!****************************!*\
  !*** ./src/config/i18n.js ***!
  \****************************/
/*! exports provided: i18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/en */ "./src/locales/en.js");
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const i18n=function i18n(name){let language=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'en';return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(i18nText,"".concat(language,".").concat(name),{});};const i18nText={en:_objectSpread({},_locales_en__WEBPACK_IMPORTED_MODULE_1__["localesEn"])};

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: i18n, secret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "./src/config/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"]; });

/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secret */ "./src/config/secret.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secret", function() { return _secret__WEBPACK_IMPORTED_MODULE_1__["secret"]; });



/***/ }),

/***/ "./src/config/secret.js":
/*!******************************!*\
  !*** ./src/config/secret.js ***!
  \******************************/
/*! exports provided: secret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secret", function() { return secret; });
const secret="0213213";

/***/ }),

/***/ "./src/controller/userController.js":
/*!******************************************!*\
  !*** ./src/controller/userController.js ***!
  \******************************************/
/*! exports provided: getUsers, getUserById, addUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var boom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boom */ "boom");
/* harmony import */ var boom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/models/User */ "./src/db/models/User.js");
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}const getUsers=function(){var _ref=_asyncToGenerator(function*(req,reply){try{const users=yield _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"].find();return users;}catch(err){throw boom__WEBPACK_IMPORTED_MODULE_0___default.a.boomify(err);}});return function getUsers(_x,_x2){return _ref.apply(this,arguments);};}();const getUserById=function(){var _ref2=_asyncToGenerator(function*(req,reply){try{const id=req.params.id;const user=yield _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"].findById(id);return user;}catch(err){throw boom__WEBPACK_IMPORTED_MODULE_0___default.a.boomify(err);}});return function getUserById(_x3,_x4){return _ref2.apply(this,arguments);};}();const addUser=function(){var _ref3=_asyncToGenerator(function*(req,reply){try{const user=new _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"](req.body);return user.save();}catch(err){throw boom__WEBPACK_IMPORTED_MODULE_0___default.a.boomify(err);}});return function addUser(_x5,_x6){return _ref3.apply(this,arguments);};}();const updateUser=function(){var _ref4=_asyncToGenerator(function*(req,reply){try{const id=req.params.id;const user=req.body;const updateData=_extends({},user);const update=yield _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"].findByIdAndUpdate(id,updateData,{new:true});return update;}catch(err){throw boom__WEBPACK_IMPORTED_MODULE_0___default.a.boomify(err);}});return function updateUser(_x7,_x8){return _ref4.apply(this,arguments);};}();const deleteUser=function(){var _ref5=_asyncToGenerator(function*(req,reply){try{const id=req.params.id;const user=yield _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"].findByIdAndRemove(id);return user;}catch(err){throw boom__WEBPACK_IMPORTED_MODULE_0___default.a.boomify(err);}});return function deleteUser(_x9,_x10){return _ref5.apply(this,arguments);};}();

/***/ }),

/***/ "./src/db/config/index.js":
/*!********************************!*\
  !*** ./src/db/config/index.js ***!
  \********************************/
/*! exports provided: default, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Database; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swagger */ "./src/db/config/swagger.js");
/* harmony import */ var _swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "options", function() { return _swagger__WEBPACK_IMPORTED_MODULE_1__["options"]; });

const server='127.0.0.1:27017';const database='YalvDb';class Database{constructor(){this._connect();}_connect(){mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb://".concat(server,"/").concat(database),{useNewUrlParser:true,reconnectTries:Number.MAX_VALUE,reconnectInterval:500,poolSize:10,bufferMaxEntries:0,connectTimeoutMS:10000,family:4}).then(()=>{console.log('Database connection succesful');}).catch(err=>{console.error("Database connection error => ".concat(err));});}}

/***/ }),

/***/ "./src/db/config/swagger.js":
/*!**********************************!*\
  !*** ./src/db/config/swagger.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.options={routePrefix:'/documentation',exposeRoute:true,swagger:{info:{title:'Fastify API',description:'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',version:'1.0.0'},externalDocs:{url:'https://swagger.io',description:'Find more info here'},host:'localhost',schemes:['http'],consumes:['application/json'],produces:['application/json']}};

/***/ }),

/***/ "./src/db/constant/regexp.js":
/*!***********************************!*\
  !*** ./src/db/constant/regexp.js ***!
  \***********************************/
/*! exports provided: nameRegExp, emailRegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameRegExp", function() { return nameRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRegExp", function() { return emailRegExp; });
const nameRegExp=/^[a-zA-Z0-9]+$/;const emailRegExp=/\S+@\S+\.\S+/;

/***/ }),

/***/ "./src/db/models/User.js":
/*!*******************************!*\
  !*** ./src/db/models/User.js ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/regexp */ "./src/db/constant/regexp.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
const UserSchema=new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({username:{type:String,lowercase:true,required:[true,Object(_config__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.blank')],match:[_constant_regexp__WEBPACK_IMPORTED_MODULE_4__["nameRegExp"],Object(_config__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.invalid')],index:true},email:{type:String,lowercase:true,required:[true,Object(_config__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.blank')],match:[_constant_regexp__WEBPACK_IMPORTED_MODULE_4__["emailRegExp"],Object(_config__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.invalid')]},bio:String,image:String,hash:String,salt:String},{timestamps:true});UserSchema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default.a,{message:Object(_config__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.taken')});const encryPassword=(password,salt)=>crypto__WEBPACK_IMPORTED_MODULE_2___default.a.pbkdf2Sync(password,salt,10000,512,'sha512').toString('hex');UserSchema.methods.setPassword=password=>{undefined.salt=crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(16).toString('hex');undefined.halt=encryPassword(password,undefined.salt);};UserSchema.methods.validPassword=password=>{const hash=encryPassword(password,undefined.salt);return undefined.hash===hash;};UserSchema.methods.generateJWT=()=>{const today=new Date();const exp=new Date(today);exp.setDate(today.getDate()+60);return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({id:undefined._id,username:undefined.username,exp:parseInt(exp.getTime()/1000)},_config__WEBPACK_IMPORTED_MODULE_5__["secret"]);};UserSchema.methods.toAuthJSON=()=>({username:undefined.username,email:undefined.email,token:undefined.generateJWT(),bio:undefined.bio,image:undefined.image});const User=mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User',UserSchema);

/***/ }),

/***/ "./src/locales/en.js":
/*!***************************!*\
  !*** ./src/locales/en.js ***!
  \***************************/
/*! exports provided: localesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localesEn", function() { return localesEn; });
const localesEn={validate:{blank:"Can not be blank",invalid:"is Invalid",taken:'is already taken. '}};

/***/ }),

/***/ "./src/routes/userRoute.js":
/*!*********************************!*\
  !*** ./src/routes/userRoute.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_userController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/userController */ "./src/controller/userController.js");
const routes=[{method:'GET',url:'/api/users',handler:_controller_userController__WEBPACK_IMPORTED_MODULE_0__["getUsers"]},{method:'GET',url:'/api/users/:id',handler:_controller_userController__WEBPACK_IMPORTED_MODULE_0__["getUserById"]},{method:'POST',url:'/api/users',handler:_controller_userController__WEBPACK_IMPORTED_MODULE_0__["addUser"]},{method:'PUT',url:'/api/users/:id',handler:_controller_userController__WEBPACK_IMPORTED_MODULE_0__["updateUser"]},{method:'DELETE',url:'/api/users/:id',handler:_controller_userController__WEBPACK_IMPORTED_MODULE_0__["deleteUser"]}];/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var fastify_swagger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-swagger */ "fastify-swagger");
/* harmony import */ var fastify_swagger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_swagger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/config/index */ "./src/db/config/index.js");
/* harmony import */ var _db_config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/config/swagger */ "./src/db/config/swagger.js");
/* harmony import */ var _db_config_swagger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_db_config_swagger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_userRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/userRoute */ "./src/routes/userRoute.js");
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}const fastify=__webpack_require__(/*! fastify */ "fastify")({logger:true});_routes_userRoute__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((route,index)=>[fastify.route(route)]);fastify.register(fastify_swagger__WEBPACK_IMPORTED_MODULE_0___default.a,_db_config_swagger__WEBPACK_IMPORTED_MODULE_2___default.a.options);const start=function(){var _ref=_asyncToGenerator(function*(){try{yield fastify.listen(3000);fastify.swagger();fastify.log.info("server listening on ".concat(fastify.server.address().port));const db=new _db_config_index__WEBPACK_IMPORTED_MODULE_1__["default"]();}catch(err){fastify.log.error(err);process.exit(1);}});return function start(){return _ref.apply(this,arguments);};}();start();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "boom":
/*!***********************!*\
  !*** external "boom" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fastify");

/***/ }),

/***/ "fastify-swagger":
/*!**********************************!*\
  !*** external "fastify-swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fastify-swagger");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map