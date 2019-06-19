(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/components/FirstComp.js");
})({
    "./assets/js/components/FirstComp.js": function(module, exports) {
        eval("throw new Error(\"Module build failed (from ./node_modules/prettier-loader/prettier-loader.js):\\nSyntaxError: Unexpected token (19:18)\\n  17 | const app = document.getElementById('app');\\n  18 | \\n> 19 | ReactDOM.render(</App>,App)\\n     |                  ^\\n  20 | \\n    at t (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/parser-babylon.js:1:326)\\n    at Object.parse (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/parser-babylon.js:1:214683)\\n    at Object.parse$2 [as parse] (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/index.js:10629:19)\\n    at coreFormat (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/index.js:13888:23)\\n    at format (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/index.js:14146:73)\\n    at formatWithCursor (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/index.js:14162:12)\\n    at /Users/AndrewMinai/projects/React-redux/node_modules/prettier/index.js:42756:15\\n    at Object.format (/Users/AndrewMinai/projects/React-redux/node_modules/prettier/index.js:42775:12)\\n    at getConfig.then.config (/Users/AndrewMinai/projects/React-redux/node_modules/prettier-loader/prettier-loader.js:69:33)\");\n\n//# sourceURL=webpack:///./assets/js/components/FirstComp.js?");
    }
});