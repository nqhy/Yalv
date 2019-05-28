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
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const i18nText={en:_objectSpread({},_locales_en__WEBPACK_IMPORTED_MODULE_1__["localesEn"])};const i18n=function i18n(name){let language=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'en';return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(i18nText,"".concat(language,".").concat(name),{});};

/***/ }),

/***/ "./src/db/config/index.js":
/*!********************************!*\
  !*** ./src/db/config/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/db/config/logger.js");
const connect=()=>{mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb://".concat(process.env.MLAB_USER,":").concat(process.env.MLAB_PASS,"@ds149146.mlab.com:49146/yalv"),{useNewUrlParser:true}).then(()=>{_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info('Database connection succesful');}).catch(err=>{_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].error("Database connection error => ".concat(err));});};/* harmony default export */ __webpack_exports__["default"] = (connect);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/db/config/logger.js":
/*!*********************************!*\
  !*** ./src/db/config/logger.js ***!
  \*********************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
const logger=winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({level:'info',format:winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.json(),transports:[new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({filename:'./tmp/log/error.log',level:'error'}),new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({filename:'./tmp/log/info.log',level:'info'}),new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({filename:'./tmp/log/debug.log',level:'debug'}),new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({filename:'./tmp/log/combined.log'})]});if(true){logger.add(new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({format:winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.simple()}));}

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
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/regexp */ "./src/db/constant/regexp.js");
/* harmony import */ var _config_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/i18n */ "./src/config/i18n.js");
const UserSchema=new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({username:{type:String,lowercase:true,required:[true,Object(_config_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.blank')],match:[_constant_regexp__WEBPACK_IMPORTED_MODULE_4__["nameRegExp"],Object(_config_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.invalid')],index:true},email:{type:String,lowercase:true,required:[true,Object(_config_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.blank')],match:[_constant_regexp__WEBPACK_IMPORTED_MODULE_4__["emailRegExp"],Object(_config_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.invalid')]},bio:String,image:String,hash:String,salt:String},{timestamps:true});UserSchema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default.a,{message:Object(_config_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"])('validate.taken')});const encryPassword=(password,salt)=>crypto__WEBPACK_IMPORTED_MODULE_2___default.a.pbkdf2Sync(password,salt,10000,512,'sha512').toString('hex');UserSchema.methods.setPassword=password=>{undefined.salt=crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(16).toString('hex');undefined.halt=encryPassword(password,undefined.salt);};UserSchema.methods.validPassword=password=>{const hash=encryPassword(password,undefined.salt);return undefined.hash===hash;};UserSchema.methods.generateJWT=()=>{const today=new Date();const exp=new Date(today);exp.setDate(today.getDate()+60);return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.sign({id:undefined._id,username:undefined.username,exp:parseInt(exp.getTime()/1000,10)},process.env.SECERET_JWT);};UserSchema.methods.toAuthJSON=()=>({username:undefined.username,email:undefined.email,token:undefined.generateJWT(),bio:undefined.bio,image:undefined.image});const User=mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User',UserSchema);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/graphql/index.js":
/*!******************************!*\
  !*** ./src/graphql/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _query_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query/User */ "./src/graphql/query/User.js");
/* harmony import */ var _mutation_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation/User */ "./src/graphql/mutation/User.js");
const RootQuery=new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({name:'RootQueryType',fields:{user: _query_User__WEBPACK_IMPORTED_MODULE_1__["user"],users: _query_User__WEBPACK_IMPORTED_MODULE_1__["users"]}});const Mutation=new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({name:'Mutation',fields:{addUser: _mutation_User__WEBPACK_IMPORTED_MODULE_2__["addUser"],updateUser: _mutation_User__WEBPACK_IMPORTED_MODULE_2__["updateUser"],deleteUser: _mutation_User__WEBPACK_IMPORTED_MODULE_2__["deleteUser"],deleteManyUser: _mutation_User__WEBPACK_IMPORTED_MODULE_2__["deleteManyUser"]}});/* harmony default export */ __webpack_exports__["default"] = (new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLSchema"]({query:RootQuery,mutation:Mutation}));

/***/ }),

/***/ "./src/graphql/mutation/User.js":
/*!**************************************!*\
  !*** ./src/graphql/mutation/User.js ***!
  \**************************************/
/*! exports provided: addUser, updateUser, deleteUser, deleteManyUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteManyUser", function() { return deleteManyUser; });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema_UserSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema/UserSchema */ "./src/graphql/schema/UserSchema.js");
/* harmony import */ var _db_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db/models/User */ "./src/db/models/User.js");
/* harmony import */ var _db_config_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db/config/logger */ "./src/db/config/logger.js");
/* harmony import */ var _config_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/i18n */ "./src/config/i18n.js");
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const addUser={type:_schema_UserSchema__WEBPACK_IMPORTED_MODULE_1__["UserType"],args:{username:{type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])},email:{type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])},password:{type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])}},resolve(parent,args){const user=new _db_models_User__WEBPACK_IMPORTED_MODULE_2__["User"]({username:args.username,email:args.email});user.setPassword(args.password);return user.save();}};const updateUser={type:_schema_UserSchema__WEBPACK_IMPORTED_MODULE_1__["UserType"],args:{id:{type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLID"])},data:{type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])}},resolve(parent,args){const updateData=JSON.parse(args.data);return _db_models_User__WEBPACK_IMPORTED_MODULE_2__["User"].findByIdAndUpdate(args.id,_objectSpread({},updateData),{new:true});}};const deleteUser={type:_schema_UserSchema__WEBPACK_IMPORTED_MODULE_1__["UserType"],args:{id:{type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLID"])}},resolve(parent,args){return _db_models_User__WEBPACK_IMPORTED_MODULE_2__["User"].findByIdAndRemove(args.id);}};const deleteManyUser={type:_schema_UserSchema__WEBPACK_IMPORTED_MODULE_1__["UserType"],resolve(){return _db_models_User__WEBPACK_IMPORTED_MODULE_2__["User"].deleteMany({},()=>{_db_config_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].info(Object(_config_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"])('message.success.delete'));});}};

/***/ }),

/***/ "./src/graphql/query/User.js":
/*!***********************************!*\
  !*** ./src/graphql/query/User.js ***!
  \***********************************/
/*! exports provided: user, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/models/User */ "./src/db/models/User.js");
/* harmony import */ var _schema_UserSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schema/UserSchema */ "./src/graphql/schema/UserSchema.js");
const user={type:_schema_UserSchema__WEBPACK_IMPORTED_MODULE_2__["UserType"],args:{id:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLID"]}},resolve(parent,args){return _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"].findById(args.id);}};const users={type:new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLList"](_schema_UserSchema__WEBPACK_IMPORTED_MODULE_2__["UserType"]),resolve(){return _db_models_User__WEBPACK_IMPORTED_MODULE_1__["User"].find();}};

/***/ }),

/***/ "./src/graphql/schema/UserSchema.js":
/*!******************************************!*\
  !*** ./src/graphql/schema/UserSchema.js ***!
  \******************************************/
/*! exports provided: UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
const UserType=new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({name:'User',fields:()=>({id:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLID"]},username:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]},email:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]},bio:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]},image:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]},hash:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]},salt:{type:graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]}})});

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
const localesEn={validate:{blank:'Can not be blank',invalid:'is Invalid',taken:'is already taken. '},message:{success:{delete:'Delete Successfully'}}};

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-graphql */ "express-graphql");
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _db_config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db/config/index */ "./src/db/config/index.js");
/* harmony import */ var _db_config_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db/config/logger */ "./src/db/config/logger.js");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphql */ "./src/graphql/index.js");
const app=express__WEBPACK_IMPORTED_MODULE_0___default()();process.env=dotenv__WEBPACK_IMPORTED_MODULE_3___default.a.config().parsed;app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());app.use('/graphql',express_graphql__WEBPACK_IMPORTED_MODULE_1___default()({schema: _graphql__WEBPACK_IMPORTED_MODULE_6__["default"],graphiql:true}));const port=8000||false;app.listen(port,()=>{Object(_db_config_index__WEBPACK_IMPORTED_MODULE_4__["default"])();_db_config_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].info("Server is running at ".concat(port));});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

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

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map