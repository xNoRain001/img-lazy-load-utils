(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LazyLoad = factory());
})(this, (function () { 'use strict';

  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global._ = factory());
  })(undefined, (function () {
    var has = function has(target, prop) {
      return target.hasOwnProperty(prop);
    };

    var now = function now() {
      return Date.now();
    };

    var wait = function wait(time) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, time);
      });
    };

    var swap = function swap(target, a, b) {
      var temp = target[a];
      target[a] = target[b];
      target[b] = temp;
      return target;
    };

    var keys = function keys(target) {
      var stringKeys = Object.keys(target);
      var symbolKeys = Object.getOwnPropertySymbols(target);
      return stringKeys.concat(symbolKeys);
    };

    var isDef = function isDef(v) {
      return v != null;
    };

    var isNull = function isNull(v) {
      return v === null;
    };

    var isUndef = function isUndef(v) {
      return v == null;
    };

    function _typeof(obj) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    /**
     * ??????????????????????????????
     * 
     * @param {*} v - ????????????????????????
     * @returns {string} ????????????????????????????????????????????????
     */
    var getType = function getType(v) {
      if (v == null) {
        return "".concat(v);
      }

      var type = _typeof(v);

      return !/^(object|function)$/.test(type) ? type : Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
    };

    var isArray = function isArray(v) {
      return Array.isArray(v);
    };

    var isObject = function isObject(v) {
      return v !== null && _typeof(v) === 'object';
    };

    var isNumber = function isNumber(v) {
      return typeof v === 'number';
    };

    var isString = function isString(v) {
      return typeof v === 'string';
    };

    var isBoolean = function isBoolean(v) {
      return v === true || v === false;
    };

    var isPromise = function isPromise(v) {
      return v && typeof v === 'function';
    };

    var isFunction = function isFunction(v) {
      return typeof v === 'function';
    };

    var isUndefined = function isUndefined(v) {
      return v === undefined;
    };

    var isArrayLike = function isArrayLike(v) {
      return v != null && isLength(v.length) && !/^function$/.test(_typeof(v));
    };

    var isLength = function isLength(n) {
      return typeof n === 'number' && n > -1 && n % 1 === 0 && n <= Number.MAX_SAFE_INTEGER;
    };

    var isPrimitive = function isPrimitive(v) {
      return !isObject(v);
    };

    var isPlainObject = function isPlainObject(v) {
      return Object.prototype.toString.call(v).slice(8, -1) === 'Object';
    };

    /**
     * ??????????????????????????????
     * 
     * @param {(Array|Object)} target - ??????????????????
     * @param {Function} cb - ?????????????????????????????? key(index) ??? value????????????????????????
     *  ????????? false ?????????????????????
     */

    var each = function each(target, cb) {
      if (isArray(target) || isArrayLike(target)) {
        for (var i = 0, l = target.length; i < l; i++) {
          if (cb.call(target, i, target[i]) === false) {
            break;
          }
        }
      } else if (isObject(target)) {
        var _keys = keys(target);

        for (var _i = 0, _l = _keys.length; _i < _l; _i++) {
          var key = _keys[_i];

          if (cb.call(target, key, target[key]) === false) {
            break;
          }
        }
      }

      return target;
    };

    var last = function last(ary) {
      return ary[ary.length - 1];
    };

    var uniq = function uniq(ary) {
      var isMutation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (isMutation) {
        var set = new Set();

        for (var i = 0; i < ary.length; i++) {
          var value = ary[i];

          if (set.has(value)) {
            ary.splice(i, 1);
            i--;
          } else {
            set.add(value);
          }
        }

        console.log('@');
        return ary;
      }

      return _toConsumableArray(new Set(ary));
    };

    var strategies$2 = {
      replace: function replace(target, sources, key) {
        target[key] = sources;
      }
    };

    var merge = function merge(target, sources, prevTarget, key) {
      if (isObject(target) && isObject(sources) || isArray(target) && isArray(sources)) {
        for (var _key in sources) {
          var value1 = target[_key];
          var value2 = sources[_key];
          merge(value1, value2, target, _key);
        }
      } else {
        strategies$2.replace(prevTarget || target, sources, key);
      }

      return target;
    };

    var lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
    var upCaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    var letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var stragegies = {
      number: function number(range) {
        var isLeftOpen = range[0] === '(';
        var isRightOpen = range[range.length - 1] === '(';
        var parts = range.split(',');
        var a = +parts[0].slice(1);
        var b = +parts[1].slice(1, -1);
        isLeftOpen ? a++ : isRightOpen ? b-- : null;
        return Math.floor(Math.random() * (b - a)) + a;
      },
      lowerCaseLetter: function lowerCaseLetter(number) {
        var res = '';

        for (var i = 0; i < number; i++) {
          var index = this.number('[0, 25]');
          res += lowerCaseLetters[index];
        }

        return res;
      },
      upCaseLetter: function upCaseLetter(number) {
        var res = '';

        for (var i = 0; i < number; i++) {
          var index = this.number('[0, 25]');
          res += upCaseLetters[index];
        }

        return res;
      },
      letter: function letter(number) {
        var res = '';

        for (var i = 0; i < number; i++) {
          var index = this.number('[0, 51]');
          res += letters[index];
        }

        return res;
      }
    };
    /**
     * ??????????????????????????????
     * 
     * @param {string} type - ?????????????????????
     *  number | lowerCaseLetter | upCaseLetter | letter
     * @param {(string|number)} rangeOrNumber - ????????????????????????????????????????????????
     *  [3, 5] ?????????????????? 3???4???5 ???????????????
     *  (5, 8) ?????????????????? 6???7 ???????????????
     *  3 ????????????????????????
     * @returns {(string|number)} - ??????????????????????????????
     */

    var random = function random(type, rangeOrNumber) {
      return stragegies[type](rangeOrNumber);
    };

    var hasPub = function hasPub(target, prop) {
      return prop in target && !has(target, prop);
    };

    var strategies$1 = {
      object: function object(target, keys, isStrict, set) {
        each(keys, function (_, key) {
          var value = target[key];

          if (set.has(value)) {
            delete target[key];
            return;
          }

          if (!isStrict && isArray(value)) {
            target[key] = useless(value, undefined, isStrict, set);
          }

          if (isObject(value)) {
            useless(value, undefined, isStrict, set);
          }
        });
        return target;
      },
      array: function array(target, keys, isStrict, set) {
        var ary = [];
        each(keys, function (_, key) {
          var value = target[key];

          if (set.has(value)) {
            return;
          }

          if (!isStrict && isObject(value)) {
            ary.push(useless(value, undefined, isStrict, set));
          }

          if (isArray(value)) {
            ary.push(useless(value, undefined, isStrict, set));
          }
        });
        return ary;
      }
    };
    /**
     * ?????? value ????????????????????????????????? key????????????????????????????????????
     * 
     * @param {(Object|Array)} target - ?????????????????????
     * @param {Array} options - ????????????????????????????????????????????????????????????????????????????????????
     *  ??????????????????????????????
     * @param {boolean} [isStrict=true] - ??????????????????????????????????????????????????????????????????
     * ???????????????????????????????????????????????????????????? options ????????????????????????????????????????????????
     * ??????????????????????????????????????????????????????????????? options ??????????????????????????????????????????
     * @returns {(Object|Array)} - ???????????????????????????????????????
     */

    var useless = function useless(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var isStrict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var set = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Set();

      var _keys = keys(target);

      if (!set.size) {
        each(options, function (_, key) {
          set.add(key);
        });
      }

      var type = getType(target);
      return strategies$1[type](target, _keys, isStrict, set);
    };

    /**
     * ???????????? Credits: borrowed code from https://github.com/jashkenas/underscore
     * 
     * @param {Function} fn - ????????????????????????????????????
     * @param {number} wait - ?????????????????????
     * @param {Object} [options] - ???????????????????????????????????????????????????????????????
     * @param {boolean} [options.leading=true] - ????????????????????????
     * @param {boolean} [options.trailing=false] - ????????????????????????
     * @returns {Function} - ?????????????????????
     */

    var throttle = function throttle(fn) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _options$leading = options.leading,
          leading = _options$leading === void 0 ? true : _options$leading,
          _options$trailing = options.trailing,
          trailing = _options$trailing === void 0 ? false : _options$trailing;
      var context = null,
          parmas = null,
          result = null,
          timer = null,
          prev = 0;

      var clear = function clear() {
        context = parmas = timer = null;
      }; // ???????????????????????????


      var later = function later() {
        // ??????????????????????????????????????????????????????????????????????????????????????? prev ??? 0???
        prev = leading ? now() : 0;
        result = fn.call.apply(fn, [context].concat(_toConsumableArray(parmas)));
        clear();
      };

      var _throttle = function _throttle() {
        // ?????????????????????
        var _now = now();

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        parmas = args;
        context = this; // ?????????????????????????????????????????????????????????????????????????????????????????? prev ??????????????????
        // ?????? 0??????????????????????????????????????????????????????

        if (!prev && !leading) {
          prev = _now;
        } // ???????????????????????????


        var remaining = wait - (_now - prev);

        if (remaining <= 0 || remaining > wait) {
          // remaining > wait ?????????????????????
          // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          // ???????????????????????????????????????????????????????????????????????????????????????????????????prev ??????
          // ??????????????????????????????????????????????????????????????????????????????????????????
          if (timer) {
            clearTimeout(timer);
          }

          prev = _now;
          result = fn.call.apply(fn, [context].concat(_toConsumableArray(parmas)));
          clear();
          return result;
        } // ??????????????????


        if (!timer && trailing) {
          timer = setTimeout(later, remaining);
          return result;
        }
      }; // ??????


      _throttle.cancle = function () {
        clearTimeout(timer);
        prev = 0;
        clear();
      };

      return _throttle;
    };

    /**
     * ???????????? Credits: borrowed code from https://github.com/jashkenas/underscore
     * 
     * @param {Function} fn - ????????????????????????????????????
     * @param {number} wait - ?????????????????????
     * @param {boolean} [immediate=false] - ?????? wait ??? 1000???????????????????????????????????????
     *  ????????????????????? immediate ??? false????????????????????????????????????????????????????????????????????????
     *  ???????????????????????? immediate ??? true?????????????????????????????????????????????????????????????????????
     *  ???????????????????????????
     * @returns {Function} - ?????????????????????
     */

    var debounce = function debounce(fn, wait, immediate) {
      var prev = 0,
          // prev ???????????????????????????????????? fn ?????????????????????
      timer = null,
          params = null,
          result = null,
          context = null;

      var later = function later() {
        var remaining = wait - (now() - prev);

        if (remaining > 0) {
          // ???????????? remaining ?????????????????????????????????????????????????????????
          // ???????????????????????? wait ???????????????
          timer = setTimeout(later, remaining);
        } else {
          // ?????????????????? wait ????????????????????????????????????????????????????????????????????????
          if (!immediate) {
            result = fn.call.apply(fn, [context].concat(_toConsumableArray(params)));
          }

          timer = null;
        }
      };

      var _debounce = function _debounce() {
        prev = now(); // ????????????????????????

        context = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        params = args;

        if (!timer) {
          timer = setTimeout(later, wait); // ??????????????????

          if (immediate) {
            result = fn.call.apply(fn, [context].concat(_toConsumableArray(params)));
          }
        }

        return result;
      };

      _debounce.cancel = function () {
        clearTimeout(timer);
        timer = context = params = null;
      };

      return _debounce;
    };

    var eachReverse = function eachReverse(target, cb) {
      if (isArray(target) || isArrayLike(target)) {
        for (var i = target.length - 1; i >= 0; i--) {
          if (cb.call(target, i, target[i]) === false) {
            break;
          }
        }
      } else if (isObject(target)) {
        var _keys = keys(target);

        for (var _i = _keys.length - 1; _i >= 0; _i--) {
          var key = _keys[_i];

          if (cb.call(target, key, target[key]) === false) {
            break;
          }
        }
      }

      return target;
    };

    var strategies = {
      array: function array(target) {
        return target.slice();
      },
      object: function object(target, Ctor) {
        var obj = new Ctor();
        each(target, function (key, value) {
          obj[key] = value;
        });
        return obj;
      },
      regexp: function regexp(target, Ctor) {
        return new Ctor(target);
      },
      date: function date(target, Ctor) {
        return new Ctor(target);
      },
      error: function error(target, Ctor) {
        return new Ctor(target.message);
      }
    };
    /**
     * ???????????????????????????
     * 
     * @param {*} target - ?????????????????????
     * @returns {*} ??????????????????
     */

    var shallowClone = function shallowClone(target) {
      if (isPrimitive(target)) {
        return target;
      }

      var type = getType(target);
      var Ctor = target.constructor;
      return strategies[type](target, Ctor);
    };

    /**
     * ???????????????????????????
     * 
     * @param {*} target - ?????????????????????
     * @returns {*} ??????????????????
     */

    var deepClone = function deepClone(target) {
      var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakSet();

      if (!/^(array|object)$/.test(getType(target))) {
        return shallowClone(target);
      }

      if (cache.has(target)) {
        return target;
      }

      cache.add(target);
      var obj = new target.constructor();
      each(target, function (key, value) {
        obj[key] = deepClone(value, cache);
      });
      return obj;
    };

    var methods = {
      has: has,
      now: now,
      wait: wait,
      swap: swap,
      uniq: uniq,
      last: last,
      keys: keys,
      each: each,
      isDef: isDef,
      merge: merge,
      isNull: isNull,
      random: random,
      hasPub: hasPub,
      isUndef: isUndef,
      isArray: isArray,
      getType: getType,
      useless: useless,
      isObject: isObject,
      isNumber: isNumber,
      isString: isString,
      throttle: throttle,
      debounce: debounce,
      isPromise: isPromise,
      isBoolean: isBoolean,
      deepClone: deepClone,
      isFunction: isFunction,
      isArrayLike: isArrayLike,
      isPrimitive: isPrimitive,
      isUndefined: isUndefined,
      eachReverse: eachReverse,
      shallowClone: shallowClone,
      isPlainObject: isPlainObject
    };

    var init = function init(utils) {
      utils.init = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (!isArray(options)) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          args.unshift(options);
          options = args;
        }

        each(methods, function (method) {
          if (options.indexOf(method) < 0) {
            delete utils[method];
          }
        });
      };

      each(methods, function (key, value) {
        utils[key] = value;
      });
    };

    var utils = Object.create(null);
    init(utils);

    return utils;

  }));

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var addNonLoadedStyle = function addNonLoadedStyle(div, img, lazyLoad) {
    var _lazyLoad$style = lazyLoad.style,
        backgroundColor = _lazyLoad$style.backgroundColor,
        transition = _lazyLoad$style.transition;
    div.style.backgroundColor = backgroundColor;
    img.style.cssText = "\n    opacity: 0;\n    transition: ".concat(transition, ";\n  ");
  };

  var isLazy = function isLazy(el) {
    return _.isDef(el.getAttribute('lazy'));
  };

  var isLoaded = function isLoaded(el) {
    return _.isDef(el.getAttribute('loaded'));
  };

  var LazyDivs = /*#__PURE__*/function () {
    function LazyDivs() {
      _classCallCheck(this, LazyDivs);

      this.lazyDivs = new Set();
    }

    _createClass(LazyDivs, [{
      key: "delete",
      value: function _delete(div) {
        this.lazyDivs["delete"](div);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.lazyDivs.clear();
      }
    }, {
      key: "init",
      value: function init(lazyLoad) {
        var _this = this;

        var divs = document.querySelectorAll('div');

        _.each(divs, function (_, div) {
          var img = div.querySelector('img');

          if (isLazy(div) || isLazy(img)) {
            addNonLoadedStyle(div, img, lazyLoad);
          }

          _this.add(div);
        });
      }
    }, {
      key: "add",
      value: function add(div) {
        this.lazyDivs.add(div);
      }
    }, {
      key: "get",
      value: function get() {
        return this.lazyDivs;
      }
    }]);

    return LazyDivs;
  }();

  var displayImg = function displayImg(img) {
    var parent = img.parentNode;
    img.src = img.getAttribute('url') || parent.getAttribute('url');
    img.addEventListener('load', function () {
      img.style.opacity = 1;
      img.setAttribute('loaded', true);
      img.removeAttribute('url');
      parent.removeAttribute('url');
    });
  };

  var handler = function handler(lazyLoad) {
    var lazyDivs = lazyLoad.lazyDivs;

    var _lazyDivs = lazyDivs.get();

    var _iterator = _createForOfIteratorHelper(_lazyDivs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var div = _step.value;
        var img = div.querySelector('img'); // ????????????

        if (isLoaded(img)) {
          return;
        }

        var clientHeight = document.documentElement.clientHeight;

        var _div$getBoundingClien = div.getBoundingClientRect(),
            bottom = _div$getBoundingClien.bottom,
            top = _div$getBoundingClien.top;

        if (bottom <= clientHeight && top >= 0) {
          // ??????????????????????????????
          displayImg(img);
          lazyDivs["delete"](div);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (_lazyDivs.size === 0) {
      lazyLoad.over();
    }
  };

  var throttled = _.throttle(handler, 200, {
    trailing: true
  });

  var addListener = function addListener(lazyLoad) {
    var cb = lazyLoad.cb = function () {
      throttled(lazyLoad);
    };

    window.addEventListener('scroll', cb);
  };

  var addObserver = function addObserver(lazyLoad) {
    var ob = lazyLoad.ob = new IntersectionObserver(function (entries) {
      // isIntersecting ?????????????????????????????????????????????????????????????????????????????????????????????
      // ???????????????????????????
      _.each(entries, function (_, entry) {
        var target = entry.target,
            isIntersecting = entry.isIntersecting;
        var img = target.querySelector('img');

        if ((isLazy(target) || isLazy(img)) && !isLoaded(img) && isIntersecting) {
          displayImg(img); // ????????????

          ob.unobserve(target);
        }
      });
    }, {
      threshold: [1]
    });
    var lazyDivs = lazyLoad.lazyDivs.get();

    var _iterator = _createForOfIteratorHelper(lazyDivs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var div = _step.value;
        // ?????? lazyDiv
        ob.observe(div);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var removeListener = function removeListener(lazyLoad) {
    window.removeEventListener('scroll', lazyLoad.cb);
  };

  var removeObserver = function removeObserver(lazyLoad) {
    lazyLoad.ob.disconnect();
  };

  var LazyLoad = /*#__PURE__*/function () {
    function LazyLoad() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, LazyLoad);

      this.lazyDivs = new LazyDivs();
      this.style = Object.create(null);
      this.style.backgroundColor = options.backgroundColor || '#ddd';
      this.style.transition = options.transition || 'opacity 2.0s';
    }

    _createClass(LazyLoad, [{
      key: "start",
      value: function start() {
        this.lazyDivs.clear();
        this.lazyDivs.init(this);
        IntersectionObserver ? addObserver(this) : addListener(this);
      }
    }, {
      key: "over",
      value: function over() {
        IntersectionObserver ? removeObserver(this) : removeListener(this);
      }
    }]);

    return LazyLoad;
  }();

  _.init('each', 'isDef', 'throttle');

  return LazyLoad;

}));
