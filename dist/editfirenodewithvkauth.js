var tt = Object.defineProperty;
var nt = (e, n, t) => n in e ? tt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var _ = (e, n, t) => nt(e, typeof n != "symbol" ? n + "" : n, t);
class ot {
  constructor() {
    _(this, "promise");
    _(this, "callback");
    _(this, "resolve");
    _(this, "reject");
    _(this, "setCallback", (n) => {
      this.callback = n;
    });
    _(this, "removeCallback", () => {
      this.callback = null;
    });
    _(this, "sendSuccess", (n) => {
      this.resolve(n), this.callback && this.callback();
    });
    _(this, "sendError", (n) => {
      this.reject(n), this.callback && this.callback();
    });
    this.promise = new Promise((n, t) => {
      this.resolve = n, this.reject = t;
    });
  }
  get value() {
    return this.promise;
  }
}
var O;
(function(e) {
  e[e.EventNotSupported = 100] = "EventNotSupported", e[e.CannotCreateNewTab = 101] = "CannotCreateNewTab", e[e.NewTabHasBeenClosed = 102] = "NewTabHasBeenClosed", e[e.AuthorizationFailed = 103] = "AuthorizationFailed";
})(O || (O = {}));
const rt = "silent_token", se = {
  [O.EventNotSupported]: "Event is not supported",
  [O.CannotCreateNewTab]: "Cannot create new tab. Try checking your browser settings",
  [O.NewTabHasBeenClosed]: "New tab has been closed",
  [O.AuthorizationFailed]: "Authorization failed with an error"
}, it = "vk_connect_response";
class st extends ot {
  constructor() {
    super(...arguments);
    // TODO: Типизировать payload
    _(this, "sendSuccessData", (t) => {
      this.sendSuccess({
        type: t.type,
        token: t.token,
        ttl: t.ttl
      });
    });
    _(this, "sendNewTabHasBeenClosed", () => {
      this.sendError({
        code: O.NewTabHasBeenClosed,
        text: se[O.NewTabHasBeenClosed]
      });
    });
    // TODO: Типизировать details
    _(this, "sendAuthorizationFailed", (t) => {
      this.sendError({
        code: O.AuthorizationFailed,
        text: se[O.AuthorizationFailed],
        details: t
      });
    });
    _(this, "sendEventNotSupported", () => {
      this.sendError({
        code: O.EventNotSupported,
        text: se[O.EventNotSupported]
      });
    });
    _(this, "sendCannotCreateNewTab", () => {
      this.sendError({
        code: O.CannotCreateNewTab,
        text: se[O.CannotCreateNewTab]
      });
    });
  }
}
var Q;
(function(e) {
  e.Redirect = "redirect", e.InNewTab = "new_tab";
})(Q || (Q = {}));
const at = [
  "vk.com",
  "vk.ru"
], ct = (e) => !!at.find((n) => e.endsWith(n));
function lt(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window, o, r, s = function() {
    return e.apply(t, r);
  };
  return function() {
    for (var u = arguments.length, h = new Array(u), v = 0; v < u; v++)
      h[v] = arguments[v];
    r = h, clearTimeout(o), o = setTimeout(s, n);
  };
}
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, z(e);
}
function dt(e, n) {
  if (z(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, n || "default");
    if (z(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ut(e) {
  var n = dt(e, "string");
  return z(n) === "symbol" ? n : String(n);
}
function ht(e, n, t) {
  return n = ut(n), n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function we(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ft(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? we(Object(t), !0).forEach(function(o) {
      ht(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : we(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function _t(e) {
  if (typeof e != "string")
    return {};
  if (e = e.trim().replace(/^[?#&]/, ""), !e)
    return {};
  var n = /\?(.+)$/ig.exec(e), t = n ? n[1] : e;
  return t.split("&").reduce(function(o, r) {
    var s = r.split("=");
    return s[1] && (o[s[0]] = decodeURIComponent(s[1])), o;
  }, {});
}
function pt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (z(e) !== "object" || e === null)
    return "";
  n = ft({
    encode: !0
  }, n);
  var t = function(r) {
    return n.encode ? encodeURIComponent(r) : String(r);
  };
  return Object.keys(e).reduce(function(o, r) {
    var s = e[r];
    return s === void 0 ? o : s === null ? (n.skipNull || o.push([t(r), ""].join("=")), o) : Array.isArray(s) ? (s.map(function(u) {
      o.push("".concat(t(r), "[]=").concat(t(u)));
    }).join(), o) : (o.push([t(r), t(s)].join("=")), o);
  }, []).join("&");
}
var gt = {
  parse: _t,
  stringify: pt
};
const vt = "1.1.0", ye = "vk.com", bt = `login.${ye}`, mt = `oauth.${ye}`, yt = `id.${ye}`;
let St = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", kt = (e, n = 21) => (t = n) => {
  let o = "", r = t;
  for (; r--; )
    o += e[Math.random() * e.length | 0];
  return o;
}, Ct = (e = 21) => {
  let n = "", t = e;
  for (; t--; )
    n += St[Math.random() * 64 | 0];
  return n;
};
const Se = kt("qazwsxedcrfvtgbyhnujmikol", 6), Me = (e, n, t) => {
  const o = {
    ...n,
    uuid: n.uuid || Se(),
    v: vt,
    sdk_type: "vkid",
    app_id: t.app,
    redirect_uri: t.redirectUrl,
    redirect_state: t.state,
    debug: t.__debug ? 1 : null,
    localhost: t.__localhost ? 1 : null
  }, r = gt.stringify(o, {
    skipNull: !0
  });
  return `https://${t.__vkidDomain}/${e}?${r}`;
}, He = (e, n) => {
  let t = `${n.get().redirectUrl}?payload=${encodeURIComponent(JSON.stringify(e))}`;
  return n.get().state && (t += `&state=${n.get().state}`), t;
}, J = class J {
  constructor() {
    _(this, "uuid");
    _(this, "dataService");
    _(this, "opener");
    _(this, "interval");
    _(this, "close", () => {
      this.opener && this.opener.close();
    });
    _(this, "handleMessage", ({ origin: n, source: t, data: o }) => {
      if (!(t !== this.opener || !this.opener || !ct(n))) {
        if (this.unsubscribe(), o.payload.error) {
          this.dataService.sendAuthorizationFailed(o.payload.error);
          return;
        }
        if (o.action === it + this.uuid) {
          this.dataService.sendSuccessData(o.payload);
          return;
        }
        this.dataService.sendEventNotSupported();
      }
    });
    _(this, "handleInterval", () => {
      var n;
      (n = this.opener) != null && n.closed && (this.unsubscribe(), this.dataService.sendNewTabHasBeenClosed());
    });
    _(this, "subscribe", () => {
      this.interval = window.setInterval(this.handleInterval, 1e3), window.addEventListener("message", this.handleMessage), this.dataService.removeCallback();
    });
    _(this, "unsubscribe", () => {
      window.removeEventListener("message", this.handleMessage), clearInterval(this.interval), this.dataService.setCallback(this.close);
    });
    _(this, "loginInNewTab", (n) => {
      this.dataService = new st(), this.opener = window.open(n, "_blank"), this.opener ? this.subscribe() : this.dataService.sendCannotCreateNewTab(), this.dataService.value.then((t) => {
        this.redirectWithPayload(t);
      }).catch(console.error);
    });
    _(this, "loginByRedirect", (n) => {
      location.assign(n);
    });
    _(this, "login", (n) => {
      const t = J.__config.get();
      this.uuid = Se();
      const o = {
        uuid: this.uuid,
        lang_id: n == null ? void 0 : n.lang,
        scheme: n == null ? void 0 : n.scheme,
        screen: n == null ? void 0 : n.screen,
        response_type: rt,
        action: n != null && n.action ? btoa(JSON.stringify(n.action)) : void 0
      }, r = () => Me("auth", o, t);
      t.mode === Q.InNewTab ? (o.origin = location.protocol + "//" + location.hostname, this.loginInNewTab(r())) : this.loginByRedirect(r());
    });
  }
  // TODO: добавить типы
  redirectWithPayload(n) {
    location.assign(He(n, J.__config));
  }
};
/**
* @ignore
*/
_(J, "__config");
let ae = J;
class Et {
  constructor() {
    _(this, "store", {
      app: 0,
      redirectUrl: "",
      mode: Q.Redirect,
      __loginDomain: bt,
      __oauthDomain: mt,
      __vkidDomain: yt
    });
  }
  set(n) {
    return this.store = {
      ...this.store,
      ...n
    }, this;
  }
  get() {
    return this.store;
  }
}
function wt(e) {
  return e = e || /* @__PURE__ */ Object.create(null), {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function(t, o) {
      (e[t] || (e[t] = [])).push(o);
    },
    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function(t, o) {
      e[t] && e[t].splice(e[t].indexOf(o) >>> 0, 1);
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function(t, o) {
      (e[t] || []).slice().map(function(r) {
        r(o);
      }), (e["*"] || []).slice().map(function(r) {
        r(t, o);
      });
    }
  };
}
class We {
  constructor() {
    _(this, "events", wt());
  }
  on(n, t) {
    return this.events.on(n, t), this;
  }
  off(n, t) {
    return this.events.off(n, t), this;
  }
}
var ee;
(function(e) {
  e.MESSAGE = "message", e.UNSUPPORTED_MESSAGE = "unsupported_message";
})(ee || (ee = {}));
const Ae = "vk-sak-sdk";
class At extends We {
  constructor(t) {
    super();
    _(this, "config");
    this.config = t, this.handleMessage = this.handleMessage.bind(this), window.addEventListener("message", this.handleMessage);
  }
  destroy() {
    delete this.config, window.removeEventListener("message", this.handleMessage);
  }
  sendMessage(t) {
    var o;
    (o = this.config.iframe.contentWindow) == null || o.postMessage({
      type: Ae,
      ...t
    }, this.config.origin);
  }
  handleMessage(t) {
    var r;
    if (!this.config.origin || t.origin !== this.config.origin || t.source !== this.config.iframe.contentWindow || ((r = t.data) == null ? void 0 : r.type) !== Ae) {
      this.events.emit(ee.UNSUPPORTED_MESSAGE, t.data);
      return;
    }
    this.events.emit(ee.MESSAGE, t.data);
  }
}
const de = (e) => (n, t, o) => {
  const r = o.value;
  o.value = function(s) {
    const u = Object.keys(e);
    for (let h of u) {
      const v = e[h];
      v == null || v.forEach((a) => {
        const { result: c, makeError: S } = a(s[h]);
        if (!c)
          throw new Error(S(h));
      });
    }
    return r == null ? void 0 : r.apply(this, arguments);
  };
}, Pe = (e) => {
  let n = !0;
  return (typeof e == "string" && e.trim() === "" || e === void 0 || e == null) && (n = !1), {
    result: n,
    makeError: (t) => `${t} is required parameter`
  };
}, It = (e) => ({
  result: [
    "number",
    "string"
  ].includes(typeof e) && !isNaN(parseInt(e)),
  makeError: (n) => `${n} should be number`
}), Rt = (e) => ({
  result: e !== void 0 && e.height !== void 0 && It(e.height) && e.height < 57 && e.height > 31 || e === void 0 || e.height === void 0,
  makeError: () => "The height should correspond to the range from 32 to 56"
}), xt = (e) => ({
  result: (e == null ? void 0 : e.length) && e.length >= 1,
  makeError: () => "OAuth list can't be empty"
});
var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ot(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var r = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(t, o, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), t;
}
var Ue = { exports: {} };
function Tt(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var _e = { exports: {} };
const $t = {}, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), Lt = /* @__PURE__ */ Ot(Vt);
var Ie;
function Be() {
  return Ie || (Ie = 1, function(e, n) {
    (function(t, o) {
      e.exports = o();
    })(B, function() {
      var t = t || function(o, r) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof B < "u" && B.crypto && (s = B.crypto), !s && typeof Tt == "function")
          try {
            s = Lt;
          } catch {
          }
        var u = function() {
          if (s) {
            if (typeof s.getRandomValues == "function")
              try {
                return s.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof s.randomBytes == "function")
              try {
                return s.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, h = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(d) {
            var g;
            return l.prototype = d, g = new l(), l.prototype = null, g;
          };
        }(), v = {}, a = v.lib = {}, c = a.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(l) {
              var d = h(this);
              return l && d.mixIn(l), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
                d.$super.init.apply(this, arguments);
              }), d.init.prototype = d, d.$super = this, d;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var l = this.extend();
              return l.init.apply(l, arguments), l;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(l) {
              for (var d in l)
                l.hasOwnProperty(d) && (this[d] = l[d]);
              l.hasOwnProperty("toString") && (this.toString = l.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), S = a.WordArray = c.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(l, d) {
            l = this.words = l || [], d != r ? this.sigBytes = d : this.sigBytes = l.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(l) {
            return (l || p).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(l) {
            var d = this.words, g = l.words, b = this.sigBytes, E = l.sigBytes;
            if (this.clamp(), b % 4)
              for (var k = 0; k < E; k++) {
                var I = g[k >>> 2] >>> 24 - k % 4 * 8 & 255;
                d[b + k >>> 2] |= I << 24 - (b + k) % 4 * 8;
              }
            else
              for (var w = 0; w < E; w += 4)
                d[b + w >>> 2] = g[w >>> 2];
            return this.sigBytes += E, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, d = this.sigBytes;
            l[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, l.length = o.ceil(d / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var l = c.clone.call(this);
            return l.words = this.words.slice(0), l;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(l) {
            for (var d = [], g = 0; g < l; g += 4)
              d.push(u());
            return new S.init(d, l);
          }
        }), m = v.enc = {}, p = m.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(l) {
            for (var d = l.words, g = l.sigBytes, b = [], E = 0; E < g; E++) {
              var k = d[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              b.push((k >>> 4).toString(16)), b.push((k & 15).toString(16));
            }
            return b.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(l) {
            for (var d = l.length, g = [], b = 0; b < d; b += 2)
              g[b >>> 3] |= parseInt(l.substr(b, 2), 16) << 24 - b % 8 * 4;
            return new S.init(g, d / 2);
          }
        }, C = m.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(l) {
            for (var d = l.words, g = l.sigBytes, b = [], E = 0; E < g; E++) {
              var k = d[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              b.push(String.fromCharCode(k));
            }
            return b.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(l) {
            for (var d = l.length, g = [], b = 0; b < d; b++)
              g[b >>> 2] |= (l.charCodeAt(b) & 255) << 24 - b % 4 * 8;
            return new S.init(g, d);
          }
        }, f = m.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(l) {
            try {
              return decodeURIComponent(escape(C.stringify(l)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(l) {
            return C.parse(unescape(encodeURIComponent(l)));
          }
        }, y = a.BufferedBlockAlgorithm = c.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new S.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(l) {
            typeof l == "string" && (l = f.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(l) {
            var d, g = this._data, b = g.words, E = g.sigBytes, k = this.blockSize, I = k * 4, w = E / I;
            l ? w = o.ceil(w) : w = o.max((w | 0) - this._minBufferSize, 0);
            var T = w * k, A = o.min(T * 4, E);
            if (T) {
              for (var $ = 0; $ < T; $ += k)
                this._doProcessBlock(b, $);
              d = b.splice(0, T), g.sigBytes -= A;
            }
            return new S.init(d, A);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var l = c.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        a.Hasher = y.extend({
          /**
           * Configuration options.
           */
          cfg: c.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            y.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(l) {
            return this._append(l), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(l) {
            l && this._append(l);
            var d = this._doFinalize();
            return d;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(l) {
            return function(d, g) {
              return new l.init(g).finalize(d);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(l) {
            return function(d, g) {
              return new R.HMAC.init(l, g).finalize(d);
            };
          }
        });
        var R = v.algo = {};
        return v;
      }(Math);
      return t;
    });
  }(_e)), _e.exports;
}
(function(e, n) {
  (function(t, o) {
    e.exports = o(Be());
  })(B, function(t) {
    return function() {
      var o = t, r = o.lib, s = r.WordArray, u = o.enc;
      u.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function(v) {
          var a = v.words, c = v.sigBytes, S = this._map;
          v.clamp();
          for (var m = [], p = 0; p < c; p += 3)
            for (var C = a[p >>> 2] >>> 24 - p % 4 * 8 & 255, f = a[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, y = a[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, R = C << 16 | f << 8 | y, l = 0; l < 4 && p + l * 0.75 < c; l++)
              m.push(S.charAt(R >>> 6 * (3 - l) & 63));
          var d = S.charAt(64);
          if (d)
            for (; m.length % 4; )
              m.push(d);
          return m.join("");
        },
        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function(v) {
          var a = v.length, c = this._map, S = this._reverseMap;
          if (!S) {
            S = this._reverseMap = [];
            for (var m = 0; m < c.length; m++)
              S[c.charCodeAt(m)] = m;
          }
          var p = c.charAt(64);
          if (p) {
            var C = v.indexOf(p);
            C !== -1 && (a = C);
          }
          return h(v, a, S);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function h(v, a, c) {
        for (var S = [], m = 0, p = 0; p < a; p++)
          if (p % 4) {
            var C = c[v.charCodeAt(p - 1)] << p % 4 * 2, f = c[v.charCodeAt(p)] >>> 6 - p % 4 * 2, y = C | f;
            S[m >>> 2] |= y << 24 - m % 4 * 8, m++;
          }
        return s.create(S, m);
      }
    }(), t.enc.Base64;
  });
})(Ue);
var Dt = Ue.exports;
const Nt = /* @__PURE__ */ Ke(Dt);
var Fe = { exports: {} };
(function(e, n) {
  (function(t, o) {
    e.exports = o(Be());
  })(B, function(t) {
    return function(o) {
      var r = t, s = r.lib, u = s.WordArray, h = s.Hasher, v = r.algo, a = [], c = [];
      (function() {
        function p(R) {
          for (var l = o.sqrt(R), d = 2; d <= l; d++)
            if (!(R % d))
              return !1;
          return !0;
        }
        function C(R) {
          return (R - (R | 0)) * 4294967296 | 0;
        }
        for (var f = 2, y = 0; y < 64; )
          p(f) && (y < 8 && (a[y] = C(o.pow(f, 1 / 2))), c[y] = C(o.pow(f, 1 / 3)), y++), f++;
      })();
      var S = [], m = v.SHA256 = h.extend({
        _doReset: function() {
          this._hash = new u.init(a.slice(0));
        },
        _doProcessBlock: function(p, C) {
          for (var f = this._hash.words, y = f[0], R = f[1], l = f[2], d = f[3], g = f[4], b = f[5], E = f[6], k = f[7], I = 0; I < 64; I++) {
            if (I < 16)
              S[I] = p[C + I] | 0;
            else {
              var w = S[I - 15], T = (w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3, A = S[I - 2], $ = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
              S[I] = T + S[I - 7] + $ + S[I - 16];
            }
            var V = g & b ^ ~g & E, L = y & R ^ y & l ^ R & l, P = (y << 30 | y >>> 2) ^ (y << 19 | y >>> 13) ^ (y << 10 | y >>> 22), q = (g << 26 | g >>> 6) ^ (g << 21 | g >>> 11) ^ (g << 7 | g >>> 25), Y = k + q + V + c[I] + S[I], re = P + L;
            k = E, E = b, b = g, g = d + Y | 0, d = l, l = R, R = y, y = Y + re | 0;
          }
          f[0] = f[0] + y | 0, f[1] = f[1] + R | 0, f[2] = f[2] + l | 0, f[3] = f[3] + d | 0, f[4] = f[4] + g | 0, f[5] = f[5] + b | 0, f[6] = f[6] + E | 0, f[7] = f[7] + k | 0;
        },
        _doFinalize: function() {
          var p = this._data, C = p.words, f = this._nDataBytes * 8, y = p.sigBytes * 8;
          return C[y >>> 5] |= 128 << 24 - y % 32, C[(y + 64 >>> 9 << 4) + 14] = o.floor(f / 4294967296), C[(y + 64 >>> 9 << 4) + 15] = f, p.sigBytes = C.length * 4, this._process(), this._hash;
        },
        clone: function() {
          var p = h.clone.call(this);
          return p._hash = this._hash.clone(), p;
        }
      });
      r.SHA256 = h._createHelper(m), r.HmacSHA256 = h._createHmacHelper(m);
    }(Math), t.SHA256;
  });
})(Fe);
var Mt = Fe.exports;
const Ht = /* @__PURE__ */ Ke(Mt), Wt = () => {
  const e = Ct(), n = Ht(e);
  return Nt.stringify(n).replace(/=*$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
var M;
(function(e) {
  e.LOADING = "loading", e.LOADED = "loaded", e.NOT_LOADED = "not_loaded";
})(M || (M = {}));
var W;
(function(e) {
  e[e.TimeoutExceeded = 0] = "TimeoutExceeded", e[e.InternalError = 1] = "InternalError";
})(W || (W = {}));
const Re = {
  [W.TimeoutExceeded]: "timeout",
  [W.InternalError]: "internal error"
};
var D;
(function(e) {
  e.START_LOAD = "common: start load", e.LOAD = "common: load", e.SHOW = "common: show", e.HIDE = "common: hide", e.CLOSE = "common: close", e.ERROR = "common: error", e.RESIZE = "common: resize";
})(D || (D = {}));
const Pt = (e) => `
<div id="${e}" data-test-id="widget">
  <style>
    #${e} {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }

    #${e} iframe {
      border: none;
      color-scheme: auto;
    }

    #${e} .loader,
    #${e} .error {
      display: none;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  </style>
  <div class="loader"></div>
  <div class="error"></div>
  <iframe width="100%" height="100%"></iframe>
</div>
  `;
function Kt(e, n, t, o) {
  var r = arguments.length, s = r < 3 ? n : o === null ? o = Object.getOwnPropertyDescriptor(n, t) : o, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, n, t, o);
  else for (var h = e.length - 1; h >= 0; h--) (u = e[h]) && (s = (r < 3 ? u(s) : r > 3 ? u(n, t, s) : u(n, t)) || s);
  return r > 3 && s && Object.defineProperty(n, t, s), s;
}
const Ut = 5e3, Bt = 300, Ft = "s256", F = class F extends We {
  constructor() {
    super();
    _(this, "id", Se());
    _(this, "lang");
    _(this, "scheme");
    _(this, "vkidAppName", "");
    _(this, "config");
    _(this, "timeoutTimer");
    _(this, "bridge");
    _(this, "container");
    _(this, "templateRenderer", Pt);
    _(this, "elements");
    this.config = F.__config;
  }
  render(t) {
    const { container: o, ...r } = t;
    return this.container = o, this.renderTemplate(), this.registerElements(), this.loadWidgetFrame(r), this;
  }
  close() {
    var t, o, r;
    clearTimeout(this.timeoutTimer), (o = (t = this.elements) == null ? void 0 : t.root) == null || o.remove(), (r = this.bridge) == null || r.destroy(), this.events.emit(D.CLOSE);
  }
  show() {
    return this.elements.root && (this.elements.root.style.display = "block", this.events.emit(D.SHOW)), this;
  }
  hide() {
    return this.elements.root && (this.elements.root.style.display = "none", this.events.emit(D.HIDE)), this;
  }
  /**
  * Метод вызывается перед началом загрузки iframe с VK ID приложением
  */
  onStartLoadHandler() {
    this.setState(M.LOADING), this.timeoutTimer = setTimeout(() => {
      this.onErrorHandler({
        code: W.TimeoutExceeded,
        text: Re[W.TimeoutExceeded]
      });
    }, Ut), this.events.emit(D.START_LOAD);
  }
  /**
  * Метод вызывается после того, как полностью загружен iframe с VK ID приложением
  */
  onLoadHandler() {
    clearTimeout(this.timeoutTimer), setTimeout(() => {
      this.setState(M.LOADED);
    }, Bt), this.events.emit(D.LOAD);
  }
  /**
  * Метод вызывается, когда во время работы/загрузки VK ID приложения произошла ошибка
  */
  onErrorHandler(t) {
    var o, r;
    clearTimeout(this.timeoutTimer), this.setState(M.NOT_LOADED), this.events.emit(D.ERROR, t), (r = (o = this.elements) == null ? void 0 : o.iframe) == null || r.remove();
  }
  /**
  * Метод вызывается при сообщениях от VK ID приложения
  */
  onBridgeMessageHandler(t) {
    switch (t.handler) {
      case D.LOAD: {
        this.onLoadHandler();
        break;
      }
      case D.CLOSE: {
        this.close();
        break;
      }
      case D.ERROR: {
        this.onErrorHandler({
          code: W.InternalError,
          text: Re[W.InternalError],
          details: t.params
        });
        break;
      }
      case D.RESIZE: {
        this.elements.root.style.height = `${t.params.height}px`;
        break;
      }
    }
  }
  // <Дополнительные хелперы>
  renderTemplate() {
    this.container.insertAdjacentHTML("beforeend", this.templateRenderer(this.id));
  }
  loadWidgetFrame(t) {
    this.onStartLoadHandler(), this.bridge = new At({
      iframe: this.elements.iframe,
      origin: `https://${this.config.get().__vkidDomain}`
    }), this.bridge.on(ee.MESSAGE, (o) => this.onBridgeMessageHandler(o)), this.elements.iframe.src = this.getWidgetFrameSrc(this.config.get(), t);
  }
  getWidgetFrameSrc(t, o) {
    const r = {
      ...o,
      code_challenge: Wt(),
      code_challenge_method: Ft,
      origin: location.protocol + "//" + location.host
    };
    return Me(this.vkidAppName, r, t);
  }
  setState(t) {
    this.elements.root.setAttribute("data-state", t);
  }
  registerElements() {
    const t = document.getElementById(this.id);
    this.elements = {
      root: t,
      iframe: t.querySelector("iframe")
    };
  }
  // TODO: добавить типы
  redirectWithPayload(t) {
    location.assign(He(t, F.__config));
  }
};
/**
* @ignore
*/
_(F, "__config"), /**
* @ignore
*/
_(F, "__auth");
let H = F;
Kt([
  de({
    container: [
      Pe
    ]
  })
], H.prototype, "render", null);
var i;
(function(e) {
  e[e.RUS = 0] = "RUS", e[e.UKR = 1] = "UKR", e[e.ENG = 3] = "ENG", e[e.SPA = 4] = "SPA", e[e.GERMAN = 6] = "GERMAN", e[e.POL = 15] = "POL", e[e.FRA = 16] = "FRA", e[e.TURKEY = 82] = "TURKEY";
})(i || (i = {}));
var te;
(function(e) {
  e.LIGHT = "light", e.DARK = "dark";
})(te || (te = {}));
var G;
(function(e) {
  e.ACCEPT = "agreements dialog: accept", e.DECLINE = "agreements dialog: decline";
})(G || (G = {}));
var ne;
(function(e) {
  e.ACCEPT = "agreements dialog: accept";
})(ne || (ne = {}));
const zt = (e) => `
<div id="${e}" data-test-id="agreements-dialog">
  <style>
    #${e} {
      position: fixed;
      top: 0px;
      right: 0px;
      width: 100%;
      height: 100%;
      z-index: 999999;
    }

    #${e} iframe {
      border: none;
      color-scheme: auto;
    }
  </style>
  <iframe width="100%" height="100%" />
</div>
  `;
class ze extends H {
  constructor() {
    super(...arguments);
    _(this, "vkidAppName", "user_policy_agreements");
    _(this, "templateRenderer", zt);
  }
  onBridgeMessageHandler(t) {
    switch (t.handler) {
      case G.DECLINE: {
        this.close();
        break;
      }
      case G.ACCEPT: {
        this.events.emit(ne.ACCEPT, t);
        break;
      }
      default:
        super.onBridgeMessageHandler(t);
        break;
    }
  }
}
var N;
(function(e) {
  e.OK = "ok_ru", e.MAIL = "mail_ru", e.VK = "vkid";
})(N || (N = {}));
const Gt = {
  [N.OK]: "OK",
  [N.MAIL]: "Mail.ru",
  [N.VK]: "VK ID"
}, jt = {
  [i.RUS]: "или войти через VK ID с использованием данных из сервиса",
  [i.UKR]: "або увійти через VK ID з використанням даних із сервісу",
  [i.ENG]: "or sign in with VK ID using information from a service",
  [i.SPA]: "o iniciar sesión con VK ID utilizando la información de un servicio",
  [i.GERMAN]: "oder melden Sie sich mit Ihrer VK-ID an, indem Sie Informationen aus dem Dienst verwenden",
  [i.POL]: "lub wejdź poprzez VK ID przy użyciu danych z serwisu",
  [i.FRA]: "ou se connecter avec VK ID en utilisant les informations d'un service",
  [i.TURKEY]: "Ya da hizmetteki verileri kullanarak VK ID hizmeti yardımıyla gir"
}, xe = {
  [i.RUS]: {
    [N.OK]: "Войти через OK",
    [N.MAIL]: "Войти с Почтой Mail.ru",
    [N.VK]: "Войти с VK ID"
  },
  [i.UKR]: "Увійти з {provider}",
  [i.ENG]: "Sign in with {provider}",
  [i.SPA]: "Iniciar sesión con {provider}",
  [i.GERMAN]: "Mit {provider} anmelden",
  [i.POL]: "Zaloguj się z {provider}",
  [i.FRA]: "Se connecter avec {provider}",
  [i.TURKEY]: "{provider}'den gir"
}, Zt = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`, qt = {
  [N.VK]: (e) => `
<svg width="${e + 1}" height="${e}" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33331 13.56C3.33331 8.58197 3.33331 6.09295 4.87979 4.54648C6.42627 3 8.91528 3 13.8933 3H14.7733C19.7513 3 22.2404 3 23.7868 4.54648C25.3333 6.09295 25.3333 8.58197 25.3333 13.56V14.44C25.3333 19.418 25.3333 21.907 23.7868 23.4535C22.2404 25 19.7513 25 14.7733 25H13.8933C8.91528 25 6.42627 25 4.87979 23.4535C3.33331 21.907 3.33331 19.418 3.33331 14.44V13.56Z" fill="#0077FF" style="fill:#0077FF;fill:color(display-p3 0.0000 0.4667 1.0000);fill-opacity:1;"/>
  <path d="M15.0398 18.9C10.0174 18.9 7.15269 15.4466 7.03333 9.70001H9.54912C9.63175 13.9178 11.4864 15.7044 12.9555 16.0728V9.70001H15.3245V13.3376C16.7752 13.1811 18.2992 11.5234 18.8134 9.70001H21.1823C20.7875 11.9471 19.1348 13.6047 17.9595 14.2862C19.1348 14.8387 21.0171 16.2846 21.7333 18.9H19.1256C18.5655 17.1503 17.17 15.7965 15.3245 15.6123V18.9H15.0398Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
  `,
  [N.OK]: (e) => `
<svg width="${e}" height="${e}" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67554 3.67638C2 5.36482 2 8.09045 2 13.5176V14.4824C2 19.9216 2 22.6352 3.68759 24.3236C5.37519 26 8.09944 26 13.5238 26H14.4882C19.9126 26 22.6489 26 24.3245 24.3236C26 22.6352 26 19.9095 26 14.4824V13.5176C26 8.09045 26 5.35276 24.3245 3.67638C22.6369 2 19.9126 2 14.4882 2H13.5239C8.08739 2 5.37519 2 3.67554 3.67638Z" fill="#EE8208" style="fill:#EE8208;fill:color(display-p3 0.9333 0.5098 0.0314);fill-opacity:1;"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1157 12.621C16.3239 13.4108 15.218 13.9122 13.999 13.9122C12.7926 13.9122 11.6741 13.4108 10.8823 12.621C10.0906 11.8313 9.58793 10.7407 9.58793 9.51224C9.58793 8.28377 10.0906 7.18065 10.8823 6.40345C11.6741 5.61372 12.78 5.1123 13.999 5.1123C15.218 5.1123 16.3239 5.61372 17.1157 6.40345C17.9074 7.19319 18.4101 8.2963 18.4101 9.51224C18.4101 10.7282 17.9074 11.8313 17.1157 12.621ZM14.0116 7.49404C13.4586 7.49404 12.9559 7.71967 12.5915 8.0832C12.2396 8.44673 12.0008 8.94814 12.0008 9.4997C12.0008 10.0513 12.227 10.5527 12.5915 10.9162C12.9559 11.2797 13.446 11.5054 14.0116 11.5054C14.5645 11.5054 15.0672 11.2797 15.4317 10.9162C15.7961 10.5527 16.0223 10.0638 16.0223 9.4997C16.0223 8.94814 15.7961 8.44673 15.4317 8.0832C15.0672 7.71967 14.5771 7.49404 14.0116 7.49404Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
  <path d="M18.6614 13.9247L19.9558 15.6922C20.0312 15.7799 20.0187 15.8927 19.8553 15.968C18.762 16.8705 17.4927 17.4471 16.1731 17.7605L18.9128 22.5741C18.9882 22.7246 18.9002 22.8875 18.7368 22.8875H16.06C15.9721 22.8875 15.8967 22.8248 15.8715 22.7496L13.9613 18.4876L12.0511 22.7496C12.026 22.8374 11.9506 22.8875 11.8626 22.8875H9.1858C9.03499 22.8875 8.93445 22.712 9.00986 22.5741L11.7495 17.7605C10.4299 17.4471 9.16066 16.8454 8.06732 15.968C7.99192 15.8927 7.97935 15.7799 8.04219 15.6922L9.3366 13.9247C9.412 13.8369 9.56281 13.8244 9.65078 13.8996C10.8824 14.9401 12.3779 15.617 13.999 15.617C15.6202 15.617 17.1282 14.9401 18.3472 13.8996C18.4352 13.8119 18.586 13.8244 18.6614 13.9247Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
  `,
  [N.MAIL]: (e) => `
<svg width="${e + 1}" height="${e}" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_217_2730)">
  <path d="M14.6667 28C22.3987 28 28.6667 21.732 28.6667 14C28.6667 6.26801 22.3987 0 14.6667 0C6.9347 0 0.666687 6.26801 0.666687 14C0.666687 21.732 6.9347 28 14.6667 28Z" fill="#005FF9" style="fill:#005FF9;fill:color(display-p3 0.0000 0.3725 0.9765);fill-opacity:1;"/>
  <path d="M17.2957 14C17.2957 14.52 17.1415 15.0283 16.8526 15.4606C16.5637 15.8929 16.1531 16.2299 15.6728 16.4289C15.1924 16.6279 14.6638 16.6799 14.1538 16.5785C13.6438 16.477 13.1754 16.2267 12.8077 15.859C12.44 15.4913 12.1896 15.0229 12.0882 14.5129C11.9868 14.0029 12.0388 13.4743 12.2378 12.9939C12.4368 12.5135 12.7738 12.1029 13.2061 11.8141C13.6384 11.5252 14.1467 11.371 14.6667 11.371C15.3637 11.3718 16.0319 11.649 16.5248 12.1419C17.0177 12.6348 17.2949 13.303 17.2957 14ZM14.6667 5.259C13.2982 5.25874 11.9487 5.57982 10.7269 6.19638C9.50514 6.81295 8.44522 7.70778 7.63246 8.80882C6.81971 9.90987 6.27684 11.1864 6.04756 12.5356C5.81828 13.8847 5.909 15.2689 6.31241 16.5766C6.71581 17.8844 7.42064 19.0791 8.37015 20.0646C9.31966 21.0502 10.4873 21.799 11.7791 22.2509C13.0709 22.7027 14.4507 22.8449 15.8075 22.666C17.1643 22.4871 18.4601 21.9922 19.5907 21.221L19.6157 21.203L18.4377 19.834L18.4187 19.847C17.0632 20.7181 15.4476 21.092 13.8472 20.9048C12.2469 20.7177 10.7611 19.9811 9.64324 18.8207C8.52539 17.6603 7.84476 16.1481 7.71745 14.5419C7.59015 12.9357 8.02406 11.3351 8.94516 10.0131C9.86627 8.69111 11.2175 7.72965 12.7684 7.29274C14.3192 6.85582 15.9736 6.97052 17.4494 7.61725C18.9251 8.26399 20.1308 9.40269 20.8606 10.8391C21.5905 12.2756 21.7994 13.9207 21.4517 15.494C21.4123 15.8149 21.2547 16.1096 21.0097 16.3206C20.7647 16.5315 20.4499 16.6436 20.1267 16.635C19.9786 16.6249 19.834 16.5855 19.7013 16.5189C19.5686 16.4524 19.4505 16.3602 19.3538 16.2476C19.2571 16.135 19.1838 16.0042 19.1381 15.863C19.0924 15.7218 19.0753 15.5729 19.0877 15.425V14C19.089 12.975 18.7346 11.9813 18.085 11.1885C17.4354 10.3957 16.5308 9.85284 15.5255 9.6526C14.5203 9.45236 13.4768 9.60713 12.5729 10.0905C11.6691 10.5739 10.961 11.3559 10.5694 12.3032C10.1779 13.2504 10.1272 14.3042 10.4259 15.2847C10.7247 16.2651 11.3544 17.1116 12.2076 17.6795C13.0609 18.2475 14.0847 18.5018 15.1045 18.399C16.1244 18.2962 17.0769 17.8428 17.7997 17.116C18.0374 17.4875 18.3585 17.7985 18.7375 18.0241C19.1164 18.2498 19.5428 18.384 19.9827 18.416C20.0607 18.423 20.1397 18.426 20.2187 18.426C20.8595 18.4243 21.4824 18.2136 21.9927 17.826C22.5342 17.4031 22.9298 16.8212 23.1237 16.162C23.1577 16.051 23.2237 15.795 23.2237 15.794V15.784C23.3539 15.1985 23.4156 14.5998 23.4077 14C23.405 11.6826 22.4833 9.46079 20.8446 7.82211C19.2059 6.18342 16.9841 5.26165 14.6667 5.259Z" fill="#FF9E00" style="fill:#FF9E00;fill:color(display-p3 1.0000 0.6196 0.0000);fill-opacity:1;"/>
  </g>
  <defs>
  <clipPath id="clip0_217_2730">
  <rect width="28" height="28" fill="white" style="fill:white;fill:white;fill-opacity:1;" transform="translate(0.666687)"/>
  </clipPath>
  </defs>
</svg>
  `
}, Oe = {
  height: 44,
  borderRadius: 8
}, Yt = (e) => (n) => {
  const t = e.lang || i.RUS, o = e.scheme || "light", r = e.borderRadius || Oe.borderRadius, s = e.height || Oe.height, u = s < 40 ? 24 : 28, h = s < 40 ? 6 : s < 48 ? 8 : 12, v = e.oauthList.map((m) => {
    const p = t === i.RUS ? xe[t][m] : `${xe[t].replace("{provider}", Gt[m])}`;
    return `
      <div class="VkIdSdk_oauth_item" data-oauth="${m}">
        ${qt[m](u)}
        <div class="VkIdSdk_oauth_button_text">${p}</div>
      </div>
    `;
  }).join(""), a = () => {
    var f;
    const m = document.querySelector(`#${n} .VkIdSdk_oauth_button_text`), p = document.querySelector(`#${n} .VkIdSdk_oauth_item`);
    if (!m || !p)
      return;
    m.clientWidth >= p.clientWidth - u * 2 - 32 - h * 2 && ((f = document.querySelector(`#${n} .VkIdSdk_oauth_list`)) == null || f.removeAttribute("data-single-mode"));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : setTimeout(a, 0);
  const c = e.oauthList.length === 1 ? "data-single-mode" : "", S = jt[t];
  return `
    <div id="${n}" class="VkIdSdk_oauth_container" data-test-id="oauthList" data-scheme="${o}">
      <style>
        :root #${n}[data-scheme=light] {
          --oauthlist--item_border_color: rgba(0, 0, 0, .12);
          --oauthlist--color_text_secondary: #818c99;
          --oauthlist--color_text_primary: #000;
        }

        :root #${n}[data-scheme=dark] {
          --oauthlist--item_border_color: rgba(255, 255, 255, 0.12);
          --oauthlist--color_text_secondary: #76787a;
          --oauthlist--color_text_primary: #e1e3e6;
        }

        #${n}.VkIdSdk_oauth_container {
          position: relative;
        }

        #${n} .VkIdSdk_oauth_list {
          display: flex;
          height: ${s}px;
        }

        #${n} .VkIdSdk_oauth_item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: ${h}px;
          margin-right: 12px;
          width: 100%;
          border: 1px solid var(--oauthlist--item_border_color);
          border-radius: ${r}px;
          cursor: pointer;
        }

        #${n} .VkIdSdk_oauth_item:last-child {
          margin-right: 0;
        }

        #${n} .VkIdSdk_oauth_link_text {
          display: flex;
          font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
          color: var(--oauthlist--color_text_secondary);
          font-size: 13px;
          line-height: 16px;
          margin-bottom: 16px;
          justify-content: center;
          text-align: center;
        }

        #${n} .VkIdSdk_spinner {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: #fff;
        }

        #${n}[data-state=loaded] .VkIdSdk_spinner {
          transition: .2s;
          opacity: 0;
          pointer-events: none;
        }

        #${n} .VkIdSdk_spinner > svg {
          animation: vkIdSdkButtonSpinner 0.7s linear infinite;
        }

        #${n} .VkIdSdk_oauth_button_text {
          display: none;
          font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
          color: var(--oauthlist--color_text_primary);
        }

        #${n} .VkIdSdk_oauth_list[data-single-mode] .VkIdSdk_oauth_item svg {
          position: absolute;
          left: 16px;
        }

        #${n} .VkIdSdk_oauth_list[data-single-mode] .VkIdSdk_oauth_button_text {
          display: block;
        }

        @keyframes vkIdSdkButtonSpinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <div class="VkIdSdk_spinner">
        ${Zt}
      </div>
      <div class="VkIdSdk_oauth_link_text">${S}</div>
      <div class="VkIdSdk_oauth_list" ${c}>${v}</div>
    </div>
  `;
};
function Xt(e, n, t, o) {
  var r = arguments.length, s = r < 3 ? n : o === null ? o = Object.getOwnPropertyDescriptor(n, t) : o, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, n, t, o);
  else for (var h = e.length - 1; h >= 0; h--) (u = e[h]) && (s = (r < 3 ? u(s) : r > 3 ? u(n, t, s) : u(n, t)) || s);
  return r > 3 && s && Object.defineProperty(n, t, s), s;
}
class Z extends H {
  render(n) {
    var t, o;
    return this.templateRenderer = Yt({
      lang: n.lang,
      oauthList: n.oauthList,
      height: (t = n.styles) == null ? void 0 : t.height,
      borderRadius: (o = n.styles) == null ? void 0 : o.borderRadius,
      scheme: n.scheme
    }), this.container = n.container, this.renderTemplate(), this.registerElements(), this.setState(M.LOADED), this.elements.root.addEventListener("click", this.handleClick.bind(this)), this;
  }
  handleClick(n) {
    const t = n.target.closest("[data-oauth]");
    if (!t)
      return;
    const o = t.getAttribute("data-oauth");
    Z.__auth.login({
      action: {
        name: "sdk_oauth",
        params: {
          oauth: o
        }
      }
    });
  }
}
Xt([
  de({
    oauthList: [
      xt
    ]
  })
], Z.prototype, "render", null);
var K;
(function(e) {
  e.LOGIN_SUCCESS = "onetap: success login", e.SHOW_FULL_AUTH = "onetap: show full auth", e.SHOW_AGREEMENTS_DIALOG = "onetap: show agreements dialog", e.START_AUTHORIZE = "onetap: start authorize", e.NOT_AUTHORIZED = "onetap: not authorized";
})(K || (K = {}));
var Ge = function() {
  if (typeof Map < "u")
    return Map;
  function e(n, t) {
    var o = -1;
    return n.some(function(r, s) {
      return r[0] === t ? (o = s, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function n() {
        this.__entries__ = [];
      }
      return Object.defineProperty(n.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.get = function(t) {
        var o = e(this.__entries__, t), r = this.__entries__[o];
        return r && r[1];
      }, n.prototype.set = function(t, o) {
        var r = e(this.__entries__, t);
        ~r ? this.__entries__[r][1] = o : this.__entries__.push([t, o]);
      }, n.prototype.delete = function(t) {
        var o = this.__entries__, r = e(o, t);
        ~r && o.splice(r, 1);
      }, n.prototype.has = function(t) {
        return !!~e(this.__entries__, t);
      }, n.prototype.clear = function() {
        this.__entries__.splice(0);
      }, n.prototype.forEach = function(t, o) {
        o === void 0 && (o = null);
        for (var r = 0, s = this.__entries__; r < s.length; r++) {
          var u = s[r];
          t.call(o, u[1], u[0]);
        }
      }, n;
    }()
  );
}(), be = typeof window < "u" && typeof document < "u" && window.document === document, ce = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Jt = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ce) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Qt = 2;
function en(e, n) {
  var t = !1, o = !1, r = 0;
  function s() {
    t && (t = !1, e()), o && h();
  }
  function u() {
    Jt(s);
  }
  function h() {
    var v = Date.now();
    if (t) {
      if (v - r < Qt)
        return;
      o = !0;
    } else
      t = !0, o = !1, setTimeout(u, n);
    r = v;
  }
  return h;
}
var tn = 20, nn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], on = typeof MutationObserver < "u", rn = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = en(this.refresh.bind(this), tn);
    }
    return e.prototype.addObserver = function(n) {
      ~this.observers_.indexOf(n) || this.observers_.push(n), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(n) {
      var t = this.observers_, o = t.indexOf(n);
      ~o && t.splice(o, 1), !t.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var n = this.updateObservers_();
      n && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var n = this.observers_.filter(function(t) {
        return t.gatherActive(), t.hasActive();
      });
      return n.forEach(function(t) {
        return t.broadcastActive();
      }), n.length > 0;
    }, e.prototype.connect_ = function() {
      !be || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), on ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !be || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(n) {
      var t = n.propertyName, o = t === void 0 ? "" : t, r = nn.some(function(s) {
        return !!~o.indexOf(s);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), je = function(e, n) {
  for (var t = 0, o = Object.keys(n); t < o.length; t++) {
    var r = o[t];
    Object.defineProperty(e, r, {
      value: n[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, j = function(e) {
  var n = e && e.ownerDocument && e.ownerDocument.defaultView;
  return n || ce;
}, Ze = ue(0, 0, 0, 0);
function le(e) {
  return parseFloat(e) || 0;
}
function Te(e) {
  for (var n = [], t = 1; t < arguments.length; t++)
    n[t - 1] = arguments[t];
  return n.reduce(function(o, r) {
    var s = e["border-" + r + "-width"];
    return o + le(s);
  }, 0);
}
function sn(e) {
  for (var n = ["top", "right", "bottom", "left"], t = {}, o = 0, r = n; o < r.length; o++) {
    var s = r[o], u = e["padding-" + s];
    t[s] = le(u);
  }
  return t;
}
function an(e) {
  var n = e.getBBox();
  return ue(0, 0, n.width, n.height);
}
function cn(e) {
  var n = e.clientWidth, t = e.clientHeight;
  if (!n && !t)
    return Ze;
  var o = j(e).getComputedStyle(e), r = sn(o), s = r.left + r.right, u = r.top + r.bottom, h = le(o.width), v = le(o.height);
  if (o.boxSizing === "border-box" && (Math.round(h + s) !== n && (h -= Te(o, "left", "right") + s), Math.round(v + u) !== t && (v -= Te(o, "top", "bottom") + u)), !dn(e)) {
    var a = Math.round(h + s) - n, c = Math.round(v + u) - t;
    Math.abs(a) !== 1 && (h -= a), Math.abs(c) !== 1 && (v -= c);
  }
  return ue(r.left, r.top, h, v);
}
var ln = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof j(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof j(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function dn(e) {
  return e === j(e).document.documentElement;
}
function un(e) {
  return be ? ln(e) ? an(e) : cn(e) : Ze;
}
function hn(e) {
  var n = e.x, t = e.y, o = e.width, r = e.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, u = Object.create(s.prototype);
  return je(u, {
    x: n,
    y: t,
    width: o,
    height: r,
    top: t,
    right: n + o,
    bottom: r + t,
    left: n
  }), u;
}
function ue(e, n, t, o) {
  return { x: e, y: n, width: t, height: o };
}
var fn = (
  /** @class */
  function() {
    function e(n) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ue(0, 0, 0, 0), this.target = n;
    }
    return e.prototype.isActive = function() {
      var n = un(this.target);
      return this.contentRect_ = n, n.width !== this.broadcastWidth || n.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var n = this.contentRect_;
      return this.broadcastWidth = n.width, this.broadcastHeight = n.height, n;
    }, e;
  }()
), _n = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(n, t) {
      var o = hn(t);
      je(this, { target: n, contentRect: o });
    }
    return e;
  }()
), pn = (
  /** @class */
  function() {
    function e(n, t, o) {
      if (this.activeObservations_ = [], this.observations_ = new Ge(), typeof n != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = n, this.controller_ = t, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof j(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(n) || (t.set(n, new fn(n)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof j(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(n) && (t.delete(n), t.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var n = this;
      this.clearActive(), this.observations_.forEach(function(t) {
        t.isActive() && n.activeObservations_.push(t);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var n = this.callbackCtx_, t = this.activeObservations_.map(function(o) {
          return new _n(o.target, o.broadcastRect());
        });
        this.callback_.call(n, t, n), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), qe = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ge(), Ye = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(n) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = rn.getInstance(), o = new pn(n, t, this);
      qe.set(this, o);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Ye.prototype[e] = function() {
    var n;
    return (n = qe.get(this))[e].apply(n, arguments);
  };
});
var gn = function() {
  return typeof ce.ResizeObserver < "u" ? ce.ResizeObserver : Ye;
}();
const vn = (e) => {
  const n = (e - 30) / 2 + 3;
  return e < 40 ? n : n - 2;
}, bn = (e) => e < 40 ? 14 : e > 47 ? 17 : 16, mn = (e) => e < 40 ? 24 : 28, yn = "VK ID", Sn = {
  [i.RUS]: "Войти c VK ID",
  [i.UKR]: "Увійти з VK ID",
  [i.ENG]: "Sign in with VK ID",
  [i.SPA]: "Iniciar sesión con VK ID",
  [i.GERMAN]: "Mit VK-ID anmelden",
  [i.POL]: "Wejdź z VK ID",
  [i.FRA]: "Se connecter avec VK ID",
  [i.TURKEY]: "VK ID aracılığıyla gir"
}, kn = {
  [i.RUS]: "Продолжить",
  [i.UKR]: "Продовжити",
  [i.ENG]: "Continue",
  [i.SPA]: "Continuar",
  [i.GERMAN]: "Fortfahren",
  [i.POL]: "Kontynuuj",
  [i.FRA]: "Continuer",
  [i.TURKEY]: "Devam"
}, Cn = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="logoBg" fill-rule="evenodd" clip-rule="evenodd" d="M4.2653 4.2653C3 5.5306 3 7.56707 3 11.64V12.36C3 16.4329 3 18.4694 4.2653 19.7347C5.5306 21 7.56706 21 11.64 21H12.36C16.4329 21 18.4694 21 19.7347 19.7347C21 18.4694 21 16.4329 21 12.36V11.64C21 7.56707 21 5.5306 19.7347 4.2653C18.4694 3 16.4329 3 12.36 3H11.64C7.56706 3 5.5306 3 4.2653 4.2653Z" fill="white"/>
    <path id="logoIcon" d="M12.6095 16C8.55576 16 6.09636 13.1823 6 8.5H8.05309C8.1171 11.9395 9.67903 13.397 10.8764 13.6967V8.5H12.8439V11.4683C13.9988 11.3401 15.2076 9.98991 15.614 8.5H17.5505C17.2406 10.3321 15.9246 11.6823 14.9948 12.2392C15.9253 12.6895 17.4225 13.8682 18 16H15.8714C15.4219 14.5749 14.321 13.4712 12.8446 13.3213V16H12.6095Z" fill="#0077FF"/>
  </svg>
`, En = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`, wn = ({ width: e, height: n, iframeHeight: t, borderRadius: o, openFullAuth: r, skin: s, scheme: u, lang: h = i.RUS, renderOAuthList: v, providers: a }) => (c) => {
  let S = 0, m = 0, p = 0, C = 0;
  const f = kn[h], y = yn, R = Sn[h], l = 8, d = vn(n), g = bn(n), b = mn(n), E = document.createElement("div"), k = document.createElement("button");
  setTimeout(() => {
    k.classList.add(`VkIdWebSdk__button_animation_${c}`);
  }, 100), k.classList.add(`VkIdWebSdk__button_${c}`), k.classList.add(`VkIdWebSdk__button_reset_${c}`), r && (k.onclick = r);
  const I = document.createElement("span");
  I.classList.add(`VkIdWebSdk__button_in_${c}`);
  const w = document.createElement("span");
  w.classList.add(`VkIdWebSdk__button_content_${c}`);
  const T = document.createElement("span");
  T.classList.add(`VkIdWebSdk__button_logo_${c}`), T.innerHTML = Cn;
  const A = document.createElement("span");
  A.classList.add(`VkIdWebSdk__button_text_${c}`);
  const $ = document.createElement("span");
  $.innerText = f;
  const V = document.createElement("span");
  V.innerText = R;
  const L = document.createElement("span");
  L.innerText = y;
  const P = document.createElement("span");
  P.classList.add(`VkIdWebSdk__button_spinner_${c}`), P.innerHTML = En;
  const q = document.createElement("div");
  q.classList.add(`VkIdWebSdk__oauthList_container_${c}`);
  const Y = (X) => X + 2 * l + 2 * d + 2 * b, re = () => {
    let X = 0;
    const ke = () => {
      const Ee = w.contains(A), Qe = A.contains(L), et = A.contains(V), ie = E.clientWidth;
      Ee && ie < S && (k.setAttribute("style", `width: ${n}px;`), A.remove(), P.remove()), !Ee && ie >= S && (k.removeAttribute("style"), w.appendChild(A), w.appendChild(P)), !Qe && ie < m && (A.style.width = `${p}px`, V.dataset.active = "", L.dataset.active = "true", setTimeout(() => {
        V.remove(), A.appendChild(L);
      }, X)), !et && ie >= m && (A.style.width = `${C}px`, L.dataset.active = "", V.dataset.active = "true", setTimeout(() => {
        L.remove(), A.appendChild(V);
      }, X));
    };
    new gn(lt(ke, 500)).observe(E);
    const Ce = document.getElementById(c);
    Ce && (Ce.appendChild(E), E.appendChild(k), a != null && a.length && (E.appendChild(q), v({
      lang: h,
      scheme: u,
      container: q,
      oauthList: a,
      styles: {
        borderRadius: o,
        height: n
      }
    })), k.appendChild(I), I.appendChild(w), w.appendChild(T), w.appendChild(A), w.appendChild(P), A.appendChild($), A.appendChild(V), A.appendChild(L), p = L.clientWidth, C = V.clientWidth, S = Y($.clientWidth), m = Y(C), $.remove(), V.remove(), L.remove(), ke(), X = 250);
  };
  return document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", re) : setTimeout(re, 0), `
<div id="${c}" data-test-id="oneTap" data-scheme="${u}" data-skin="${s}">
  <style>
    :root #${c} {
      --onetap--button_background: #0077FF;
      --onetap--button_border: none;
      --onetap--background_hover: #0071F2;
      --onetap--text_and_spinner: #FFF;
      --onetap--logo_icon: #0077FF;
      --onetap--logo_background: #FFF;
    }

    :root #${c}[data-scheme=light][data-skin=primary] {
      --onetap--background_hover: #0071F2;
      --onetap--background_active: #0069E1;
    }

    :root #${c}[data-scheme=dark][data-skin=primary] {
      --onetap--background_hover: #097EFF;
      --onetap--background_active: #1385FF;
    }

    :root #${c}[data-scheme=light][data-skin=secondary] {
      --onetap--button_background: rgba(255, 255, 255, 0.12);
      --onetap--button_border: 1px solid rgba(0, 0, 0, 0.12);
      --onetap--background_hover: #F5F5F7;
      --onetap--background_active: #EBECEF;
      --onetap--text_and_spinner: #000;
      --onetap--logo_icon: #FFF;
      --onetap--logo_background: #0077FF;
    }

    :root #${c}[data-scheme=dark][data-skin=secondary] {
      --onetap--button_background: transparent;
      --onetap--button_border: 1px solid rgba(255, 255, 255, 0.12);
      --onetap--background_hover: rgba(255, 255, 255, 0.06);
      --onetap--background_active: rgba(255, 255, 255, 0.1);
      --onetap--logo_icon: #FFF;
      --onetap--logo_background: #0077FF;
    }

    #${c} {
      position: relative;
      width: ${e ? `${e}px` : "100%"};
      min-width: ${n}px;
    }

    #${c}[data-state=loaded] {
      height: ${t}px;
    }

    #${c} iframe {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      border: none;
      color-scheme: auto;
    }

    #${c} .VkIdWebSdk__button_reset_${c} {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
    }

    #${c} .VkIdWebSdk__button_${c} {
      padding: ${d}px;
      height: ${n}px;
      width: 100%;
      border-radius: ${o}px;
      box-sizing: border-box;
      overflow: hidden;
    }

    #${c} .VkIdWebSdk__button_animation_${c} {
      transition: .2s ease;
    }

    #${c} .VkIdWebSdk__button_${c}:hover {
      cursor: pointer;
    }

    #${c} .VkIdWebSdk__button_${c} {
      background: var(--onetap--button_background);
      border: var(--onetap--button_border);
    }

    #${c} .VkIdWebSdk__button_${c}:focus,
    #${c} .VkIdWebSdk__button_${c}:hover {
      background: var(--onetap--background_hover);
    }

    #${c} .VkIdWebSdk__button_${c}:active {
      background: var(--onetap--background_active);
    }

    #${c} .VkIdWebSdk__button_in_${c} {
      display: inline-block;
      width: 100%;
      height: 100%;
      min-width: max-content;
      transition: width 0.5s;
    }

    #${c} .VkIdWebSdk__button_content_${c} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    #${c} .VkIdWebSdk__button_logo_${c},
    #${c} .VkIdWebSdk__button_spinner_${c},
    #${c} .VkIdWebSdk__button_logo_${c} > svg,
    #${c} .VkIdWebSdk__button_spinner_${c} > svg {
      width: ${b}px;
      height: ${b}px;
    }

    #${c} .VkIdWebSdk__button_spinner_${c} > svg {
      position: absolute;
      right: ${d}px;
      animation: vkIdSdkButtonSpinner 0.7s linear infinite;
    }

    #${c} .VkIdWebSdk__button_text_${c} {
      font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
      font-weight: 500;
      font-size: ${g}px;
      transition: .2s;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    #${c} .VkIdWebSdk__button_text_${c} > span {
      opacity: 0;
      display: inline-block;
      padding: 0 ${l}px;
      transition: .5s;
    }

    #${c} .VkIdWebSdk__button_text_${c} > span[data-active=true] {
      opacity: 1;
    }

    #${c} .VkIdWebSdk__button_text_${c},
    #${c} .VkIdWebSdk__button_spinner_${c} {
      color: var(--onetap--text_and_spinner);
    }

    .VkIdWebSdk__oauthList_container_${c} {
      margin-top: 16px;
    }

    #${c} #logoBg {
      fill: var(--onetap--logo_background);
    }

    #${c} #logoIcon {
      fill: var(--onetap--logo_icon);
    }

    #${c}[data-state=not_loaded] .VkIdWebSdk__button_in_${c} {
      width: 0;
    }

    #${c}[data-state=not_loaded] .VkIdWebSdk__button_spinner_${c} {
      transition: .2s;
      opacity: 0;
      pointer-events: none;
      width: 0;
    }

    #${c}[data-state=loaded] .VkIdWebSdk__oauthList_container_${c} {
      display: none;
    }

    #${c}[data-state=loaded] iframe {
      position: initial;
      opacity: 100;
      pointer-events: all;
    }

    #${c}[data-state=loaded] .VkIdWebSdk__button_${c} {
      display: none;
    }

    @keyframes vkIdSdkButtonSpinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  <iframe width="100%" height="100%" />
</div>
  `;
};
function An(e, n, t, o) {
  var r = arguments.length, s = r < 3 ? n : o === null ? o = Object.getOwnPropertyDescriptor(n, t) : o, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, n, t, o);
  else for (var h = e.length - 1; h >= 0; h--) (u = e[h]) && (s = (r < 3 ? u(s) : r > 3 ? u(n, t, s) : u(n, t)) || s);
  return r > 3 && s && Object.defineProperty(n, t, s), s;
}
const pe = {
  width: 0,
  height: 44,
  borderRadius: 8
}, In = 12;
class oe extends H {
  constructor() {
    super(...arguments);
    _(this, "vkidAppName", "button_one_tap_auth");
  }
  onBridgeMessageHandler(t) {
    var o, r;
    switch (t.handler) {
      case K.LOGIN_SUCCESS: {
        this.redirectWithPayload(t.params);
        break;
      }
      case K.SHOW_FULL_AUTH: {
        const s = {};
        t.params.screen && (s.screen = t.params.screen), t.params.sdk_oauth && (s.action = {
          name: "sdk_oauth",
          params: {
            oauth: t.params.sdk_oauth
          }
        }), this.openFullAuth(s);
        break;
      }
      case K.NOT_AUTHORIZED: {
        this.setState(M.NOT_LOADED), clearTimeout(this.timeoutTimer), (r = (o = this.elements) == null ? void 0 : o.iframe) == null || r.remove();
        break;
      }
      case K.SHOW_AGREEMENTS_DIALOG: {
        this.createAgreementsDialogWidget();
        break;
      }
      default: {
        super.onBridgeMessageHandler(t);
        break;
      }
    }
  }
  createAgreementsDialogWidget() {
    const t = {
      container: document.body,
      lang: this.lang,
      scheme: this.scheme
    }, o = new ze(), r = (s) => {
      this.bridge.sendMessage({
        handler: K.START_AUTHORIZE,
        params: s.params
      }), o.off(ne.ACCEPT, r), o.close();
    };
    o.on(ne.ACCEPT, r), o.render(t);
  }
  openFullAuth(t) {
    const o = {
      ...t,
      lang: this.lang,
      scheme: this.scheme
    };
    oe.__auth.login(o);
  }
  renderOAuthList(t) {
    if (!t.oauthList.length)
      return;
    new Z().render(t);
  }
  render(t) {
    var s, u, h;
    this.lang = (t == null ? void 0 : t.lang) || i.RUS, this.scheme = (t == null ? void 0 : t.scheme) || te.LIGHT;
    const o = (t.oauthList || []).filter((v) => v !== N.VK), r = {
      style_height: ((s = t.styles) == null ? void 0 : s.height) || pe.height,
      style_border_radius: ((u = t.styles) == null ? void 0 : u.borderRadius) || pe.borderRadius,
      show_alternative_login: t != null && t.showAlternativeLogin ? 1 : 0,
      button_skin: t.skin || "primary",
      scheme: this.scheme,
      lang_id: this.lang,
      providers: o.join(",")
    };
    return this.templateRenderer = wn({
      width: ((h = t.styles) == null ? void 0 : h.width) || pe.width,
      iframeHeight: r.show_alternative_login ? r.style_height * 2 + In : r.style_height,
      height: r.style_height,
      borderRadius: r.style_border_radius,
      openFullAuth: this.openFullAuth.bind(this),
      skin: r.button_skin,
      scheme: r.scheme,
      lang: r.lang_id,
      renderOAuthList: this.renderOAuthList.bind(this),
      providers: o
    }), super.render({
      container: t.container,
      ...r
    });
  }
}
An([
  de({
    styles: [
      Rt
    ]
  })
], oe.prototype, "render", null);
var me;
(function(e) {
  e.Primary = "primary", e.Secondary = "secondary";
})(me || (me = {}));
var U;
(function(e) {
  e.LOGIN_SUCCESS = "floatingonetap: success login", e.SHOW_FULL_AUTH = "floatingonetap: show full auth", e.SHOW_AGREEMENTS_DIALOG = "floatingonetap: show agreements dialog", e.START_AUTHORIZE = "floatingonetap: start authorize", e.NOT_AUTHORIZED = "floatingonetap: not authorized";
})(U || (U = {}));
var x;
(function(e) {
  e[e.SIGN_IN_TO_SERVICE = 0] = "SIGN_IN_TO_SERVICE", e[e.SIGN_IN_TO_ACCOUNT = 1] = "SIGN_IN_TO_ACCOUNT", e[e.REGISTRATION_FOR_EVENT = 2] = "REGISTRATION_FOR_EVENT", e[e.SUBMIT_APPLICATIONS = 3] = "SUBMIT_APPLICATIONS", e[e.MAKE_ORDER_WITH_SERVICE = 4] = "MAKE_ORDER_WITH_SERVICE", e[e.MAKE_ORDER_WITHOUT_SERVICE = 5] = "MAKE_ORDER_WITHOUT_SERVICE";
})(x || (x = {}));
const ge = {
  [i.RUS]: "Войти c VK ID",
  [i.UKR]: "Увійти з VK ID",
  [i.ENG]: "Sign in with VK ID",
  [i.SPA]: "Iniciar sesión con VK ID",
  [i.GERMAN]: "Mit VK-ID anmelden",
  [i.POL]: "Wejdź z VK ID",
  [i.FRA]: "Se connecter avec VK ID",
  [i.TURKEY]: "VK ID aracılığıyla gir"
}, $e = {
  [i.RUS]: "Оформить с VK ID",
  [i.UKR]: "Оформити з VK ID",
  [i.ENG]: "Order with VK ID",
  [i.SPA]: "Pedir con VK ID",
  [i.GERMAN]: "Mit VK-ID bestellen",
  [i.POL]: "Wypełnij z VK ID",
  [i.FRA]: "Commander avec VK ID",
  [i.TURKEY]: "VK ID aracılığıyla oluştur"
}, Rn = (e, n) => {
  switch (e) {
    case x.SIGN_IN_TO_SERVICE:
    case x.SIGN_IN_TO_ACCOUNT:
    case x.REGISTRATION_FOR_EVENT:
    case x.SUBMIT_APPLICATIONS:
      return ge[n] || ge[i.RUS];
    case x.MAKE_ORDER_WITH_SERVICE:
    case x.MAKE_ORDER_WITHOUT_SERVICE:
      return $e[n] || $e[i.RUS];
    default:
      return ge[i.RUS];
  }
}, Ve = {
  [i.RUS]: "Войдите в сервис или зарегистрируйтесь",
  [i.UKR]: "Увійдіть у сервіс або зареєструйтеся",
  [i.ENG]: "Sign in to service or sign up",
  [i.SPA]: "Acceder al servicio o registrarse",
  [i.GERMAN]: "Melden Sie sich beim Dienst an oder registrieren Sie sich",
  [i.POL]: "Wejdź do serwisu lub zarejestruj się",
  [i.FRA]: "Connectez-vous au service ou inscrivez-vous",
  [i.TURKEY]: "Hizmete girin yada oturum oluşturun"
}, xn = {
  [i.RUS]: "Войдите в учётную запись {service}",
  [i.UKR]: "Увійдіть в обліковий запис {service}",
  [i.ENG]: "Sign in to {service} account",
  [i.SPA]: "Acceder a la cuenta {service}",
  [i.GERMAN]: "Melden Sie sich bei Ihrem {service}-Konto an",
  [i.POL]: "Wejdź na rachunek {service}",
  [i.FRA]: "Connectez-vous à {service}",
  [i.TURKEY]: "{service} hesabına girin"
}, On = {
  [i.RUS]: "Зарегистрируйтесь на мероприятие",
  [i.UKR]: "Зареєструйтеся на захід",
  [i.ENG]: "Sign up for event",
  [i.SPA]: "Registrarse en el evento",
  [i.GERMAN]: "Melden Sie sich für die Veranstaltung an",
  [i.POL]: "Zarejestruj się na wydarzenie",
  [i.FRA]: "Inscrivez-vous à l'événement",
  [i.TURKEY]: "Eylemde kaydolun"
}, Tn = {
  [i.RUS]: "Подайте заявку с VK ID",
  [i.UKR]: "Подайте запит з VK ID",
  [i.ENG]: "Apply with VK ID",
  [i.SPA]: "Solicitar con VK ID",
  [i.GERMAN]: "Bewerben Sie mit VK-ID",
  [i.POL]: "Złóż wniosek z VK ID",
  [i.FRA]: "Envoyez une demande avec VK ID",
  [i.TURKEY]: "VK ID yardımıyla başvuru gönderin"
}, $n = {
  [i.RUS]: "Оформите заказ в {service} с VK ID",
  [i.UKR]: "Оформіть замовлення в {service} з VK ID",
  [i.ENG]: "Place order on {service} with VK ID",
  [i.SPA]: "Realizar pedido en {service} con VK ID",
  [i.GERMAN]: "Machen Sie eine Bestellung auf {service} mit VK-ID",
  [i.POL]: "Wypełnij zamówienie w {service} z VK ID",
  [i.FRA]: "Passez la commande sur {service} avec VK ID",
  [i.TURKEY]: "VK ID aracılığıyla {service} te sipariş oluşturun"
}, Vn = {
  [i.RUS]: "Оформите заказ с VK ID",
  [i.UKR]: "Оформіть замовлення з VK ID",
  [i.ENG]: "Place order with VK ID",
  [i.SPA]: "Realizar pedido con VK ID",
  [i.GERMAN]: "Machen Sie eine Bestellung mit VK-ID",
  [i.POL]: "Wypełnij zamówienie z VK ID",
  [i.FRA]: "Passez la commande avec VK ID",
  [i.TURKEY]: "VK ID aracılığıyla sipariş oluşturun"
}, Ln = (e, n, t) => {
  let o = Ve[i.RUS];
  switch (e) {
    case x.SIGN_IN_TO_SERVICE:
      o = Ve[n];
      break;
    case x.SIGN_IN_TO_ACCOUNT:
      o = xn[n];
      break;
    case x.REGISTRATION_FOR_EVENT:
      o = On[n];
      break;
    case x.SUBMIT_APPLICATIONS:
      o = Tn[n];
      break;
    case x.MAKE_ORDER_WITH_SERVICE:
      o = $n[n];
      break;
    case x.MAKE_ORDER_WITHOUT_SERVICE:
      o = Vn[n];
      break;
  }
  return o.replace("{service}", t);
}, Le = {
  [i.RUS]: "После этого вам станут доступны все возможности сервиса. Ваши данные будут надёжно защищены.",
  [i.UKR]: "Після цього вам стануть доступні всі можливості сервісу. Ваші дані будуть надійно захищені.",
  [i.ENG]: "Afterwards, you'll have access to all of the service's features. Your personal data will be carefully protected.",
  [i.SPA]: "Después, tendrás acceso a todas las funciones del servicio. Tus datos personales estarán cuidadosamente protegidos.",
  [i.GERMAN]: "Anschließend stehen Ihnen alle Funktionen des Dienstes zur Verfügung. Ihre persönlichen Daten werden sorgfältig geschützt.",
  [i.POL]: "Po tym wszystkie funkcje serwisu będą dostępne. Twoje dane będą dobrze chronione.",
  [i.FRA]: "Cela vous permettra d'avoir accès à toutes les fonctionnalités du service. Vos données personnelles seront soigneusement protégées.",
  [i.TURKEY]: "Bundan sonra hizmetin tüm özellikleri kullanımınıza sunulacaktır. Verileriniz güvenilir bir şekilde korunacaktır."
}, Dn = (e) => Le[e] || Le[i.RUS], Nn = `
  <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 13H21.6479V3.5H20V13Z" fill="var(--floating--color_text_primary)"/>
    <path d="M23.7801 13H27.474C30.4127 13 32.5 11.0326 32.5 8.24326C32.5 5.46738 30.4127 3.5 27.474 3.5H23.7801V13ZM25.4279 11.5177V4.98227H27.474C29.4377 4.98227 30.7835 6.31631 30.7835 8.24326C30.7835 10.1837 29.4377 11.5177 27.474 11.5177H25.4279Z" fill="var(--floating--color_text_primary)"/>
    <path d="M0 7.68C0 4.05961 0 2.24942 1.12471 1.12471C2.24942 0 4.05961 0 7.68 0H8.32C11.9404 0 13.7506 0 14.8753 1.12471C16 2.24942 16 4.05961 16 7.68V8.32C16 11.9404 16 13.7506 14.8753 14.8753C13.7506 16 11.9404 16 8.32 16H7.68C4.05961 16 2.24942 16 1.12471 14.8753C0 13.7506 0 11.9404 0 8.32V7.68Z" fill="#0077FF"/>
    <path d="M8.56331 11.66C4.91665 11.66 2.83667 9.16 2.75 5H4.57666C4.63666 8.05333 5.9833 9.34333 7.04997 9.61V5H8.77002V7.63C9.82335 7.51667 10.9299 6.32 11.3032 5H13.0233C12.7366 6.62667 11.5366 7.82667 10.6833 8.32C11.5366 8.72 12.9033 9.76667 13.4233 11.66H11.5299C11.1233 10.3933 10.11 9.41333 8.77002 9.28V11.66H8.56331Z" fill="white"/>
  </svg>
`, Mn = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2653 4.2653C3 5.5306 3 7.56707 3 11.64V12.36C3 16.4329 3 18.4694 4.2653 19.7347C5.5306 21 7.56706 21 11.64 21H12.36C16.4329 21 18.4694 21 19.7347 19.7347C21 18.4694 21 16.4329 21 12.36V11.64C21 7.56707 21 5.5306 19.7347 4.2653C18.4694 3 16.4329 3 12.36 3H11.64C7.56706 3 5.5306 3 4.2653 4.2653Z" fill="white"/>
    <path d="M12.6095 16C8.55576 16 6.09636 13.1823 6 8.5H8.05309C8.1171 11.9395 9.67903 13.397 10.8764 13.6967V8.5H12.8439V11.4683C13.9988 11.3401 15.2076 9.98991 15.614 8.5H17.5505C17.2406 10.3321 15.9246 11.6823 14.9948 12.2392C15.9253 12.6895 17.4225 13.8682 18 16H15.8714C15.4219 14.5749 14.321 13.4712 12.8446 13.3213V16H12.6095Z" fill="#0077FF"/>
  </svg>
`, Hn = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71967 4.71969C5.01256 4.42679 5.48744 4.42679 5.78033 4.71969L10 8.93935L14.2197 4.71969C14.5126 4.42679 14.9874 4.42679 15.2803 4.71969C15.5732 5.01258 15.5732 5.48745 15.2803 5.78035L11.0607 10L15.2803 14.2197C15.5732 14.5126 15.5732 14.9875 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L10 11.0607L5.78033 15.2803C5.48744 15.5732 5.01256 15.5732 4.71967 15.2803C4.42678 14.9875 4.42678 14.5126 4.71967 14.2197L8.93934 10L4.71967 5.78035C4.42678 5.48745 4.42678 5.01258 4.71967 4.71969Z" fill="currentColor"/>
  </svg>
`, Wn = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`, De = 12, ve = (e) => !e || e <= De ? 0 : e - De, Pn = ({ scheme: e, indent: n, openFullAuth: t, close: o, lang: r, contentId: s, appName: u, providers: h, renderOAuthList: v }) => (a) => {
  const c = Ln(s, r, u), S = Dn(r), m = Rn(s, r), p = document.createElement("div");
  p.classList.add(`VkIdWebSdk__floating_${a}`);
  const C = document.createElement("div");
  C.classList.add(`VkIdWebSdk__floating_container_${a}`);
  const f = document.createElement("div");
  f.classList.add(`VkIdWebSdk__floating_header_${a}`), f.innerHTML = Nn;
  const y = document.createElement("span");
  y.classList.add(`VkIdWebSdk__floating_appName_${a}`), y.innerText = ` · ${u}`;
  const R = document.createElement("div");
  R.classList.add(`VkIdWebSdk__floating_close_${a}`);
  const l = document.createElement("button");
  l.classList.add(`VkIdWebSdk__floating_button_reset_${a}`), l.classList.add(`VkIdWebSdk__floating_close_btn_${a}`), l.innerHTML = Hn, o && (l.onclick = o);
  const d = document.createElement("div");
  d.classList.add(`VkIdWebSdk__floating_content_${a}`);
  const g = document.createElement("div");
  g.classList.add(`VkIdWebSdk__floating_title_${a}`), g.innerText = c;
  const b = document.createElement("div");
  b.classList.add(`VkIdWebSdk__floating_description_${a}`), b.innerText = S;
  const E = document.createElement("div"), k = document.createElement("button");
  k.classList.add(`VkIdWebSdk__floating_button_reset_${a}`), k.classList.add(`VkIdWebSdk__floating_button_${a}`), t && (k.onclick = t);
  const I = document.createElement("div");
  I.classList.add(`VkIdWebSdk__floating_button_content_${a}`);
  const w = document.createElement("span");
  w.classList.add(`VkIdWebSdk__floating_button_logo_${a}`), w.innerHTML = Mn;
  const T = document.createElement("span");
  T.classList.add(`VkIdWebSdk__floating_button_text_${a}`), T.innerText = m;
  const A = document.createElement("span");
  A.classList.add(`VkIdWebSdk__floating_button_spinner_${a}`), A.innerHTML = Wn;
  const $ = document.createElement("div");
  $.classList.add(`VkIdWebSdk__oauthList_container_${a}`);
  const V = () => {
    const L = document.getElementById(a);
    L && (L.appendChild(p), p.appendChild(C), C.appendChild(f), C.appendChild(d), C.appendChild(E), f.appendChild(R), f.appendChild(y), R.appendChild(l), d.appendChild(g), d.appendChild(b), E.appendChild(k), k.appendChild(I), I.appendChild(w), I.appendChild(T), I.appendChild(A), h != null && h.length && (C.appendChild($), v({
      lang: r,
      scheme: e,
      container: $,
      oauthList: h,
      styles: {
        borderRadius: 8,
        height: 36
      }
    })));
  };
  return document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", V) : setTimeout(V, 0), `
<div id="${a}" data-test-id="floatingOneTap" data-scheme="${e}">
  <style>
    :root #${a} {
      --floating--contaner_padding: 16px;
      --floating--container_box_shadow: 0px 0px 2px rgba(0,0,0,.08),0px 4px 16px rgba(0,0,0,.08);
      --floating--font_family: -apple-system,system-ui,"Helvetica Neue",Roboto,sans-serif;
      --floating--close_button_color_transparent--hover: rgba(0,16,61,.04);
      --floating--close_button_color_transparent--active: rgba(0,16,61,.08);
      --floating--button_text_color: #FFFFFF;
      --floating--button_background_color: #0077ff;
    }

    :root #${a}[data-scheme=light] {
      --floating--color_background_modal: #ffffff;
      --floating--color_icon_medium: #818c99;
      --floating--color_text_primary: #000000;
      --floating--color_text_secondary: #818c99;
      --floating--button_background_color--hover: #0071F2;
      --floating--button_background_color--focus: #0071F2;
      --floating--button_background_color--active: #0069E1;
    }

    :root #${a}[data-scheme=dark] {
      --floating--color_background_modal: #2c2d2e;
      --floating--color_icon_medium: #b0b1b6;
      --floating--color_text_primary: #e1e3e6;
      --floating--color_text_secondary: #76787a;
      --floating--button_background_color--hover: #097EFF;
      --floating--button_background_color--focus: #097EFF;
      --floating--button_background_color--active: #1385FF;
      --floating--close_button_color_transparent--hover: hsla(0,0%,100%,.04);
      --floating--close_button_color_transparent--active: hsla(0,0%,100%,.08);
    }

    #${a} {
      position: fixed;
      z-index: 99999;
    }

    #${a} iframe {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      border: none;
      color-scheme: auto;
    }

    #${a} .VkIdWebSdk__floating_button_reset_${a} {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
    }

    #${a} .VkIdWebSdk__floating_${a} {
      padding: 12px;
    }

    #${a} .VkIdWebSdk__floating_container_${a} {
      background: var(--floating--color_background_modal);
      border-radius: 12px;
      padding: var(--floating--contaner_padding);
      box-shadow: var(--floating--container_box_shadow);
      box-sizing: border-box;
    }

    #${a} .VkIdWebSdk__floating_header_${a} {
      display: flex;
      align-items: center;
      position: relative;
      padding: 2px 0;
    }

    #${a} .VkIdWebSdk__floating_appName_${a} {
      font-family: var(--floating--font_family);
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: var(--floating--color_text_secondary);
    }

    #${a} .VkIdWebSdk__floating_close_${a} {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -4px;
      right: -4px;
      height: 28px;
      width: 28px;
      color: var(--floating--color_icon_medium);
    }

    #${a} .VkIdWebSdk__floating_close_btn_${a} {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .15s;
    }

    #${a} .VkIdWebSdk__floating_close_btn_${a}:hover {
      cursor: pointer;
      background: var(--floating--close_button_color_transparent--hover);
    }

    #${a} .VkIdWebSdk__floating_close_btn_${a}:active {
      background: var(--floating--close_button_color_transparent--active);
    }

    #${a} .VkIdWebSdk__floating_content_${a} {
      padding: 36px 32px;
      text-align: center;
      font-family: var(--floating--font_family);
    }

    #${a} .VkIdWebSdk__floating_title_${a} {
      color: var(--floating--color_text_primary);
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }

    #${a} .VkIdWebSdk__floating_description_${a} {
      color: var(--floating--color_text_secondary);
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      margin-top: 8px;
    }

    #${a} .VkIdWebSdk__floating_button_${a} {
      height: 36px;
      width: 100%;
      border-radius: 8px;
      color: var(--floating--button_text_color);
      transition: .15s;
      cursor: pointer;
      background: var(--floating--button_background_color);
    }

    #${a} .VkIdWebSdk__floating_button_${a}:hover {
      background: var(--floating--button_background_color--hover);
    }

    #${a} .VkIdWebSdk__floating_button_${a}:focus {
      background: var(--floating--button_background_color--focus);
    }

    #${a} .VkIdWebSdk__floating_button_${a}:active {
      background: var(--floating--button_background_color--active);
    }

    #${a} .VkIdWebSdk__floating_button_content_${a} {
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 6px;
    }

    #${a} .VkIdWebSdk__floating_button_logo_${a},
    #${a} .VkIdWebSdk__floating_button_spinner_${a} {
      display: inline-flex;
    }

    #${a} .VkIdWebSdk__floating_button_spinner_${a} {
      width: 24px;
      animation: vkIdSdkButtonSpinner 0.7s linear infinite;
    }

    #${a} .VkIdWebSdk__floating_button_text_${a} {
      font-weight: 500;
      line-height: 20px;
      font-family: var(--floating--font_family);
      font-size: 15px;
      transition: .5s;
      min-width: max-content;
      margin-left: 6px;
      text-align: center;
    }

    #${a} .VkIdWebSdk__oauthList_container_${a} {
      margin-top: 16px;
    }

    #${a}[data-state=loaded] iframe {
      position: initial;
      opacity: 100;
      pointer-events: all;
    }

    #${a}[data-state=loaded] .VkIdWebSdk__floating_${a} {
      display: none;
    }

    #${a}[data-state=not_loaded] .VkIdWebSdk__floating_button_spinner_${a} {
      transition: .2s;
      opacity: 0;
      pointer-events: none;
      width: 0;
    }

    #${a}[data-state=loading] .VkIdWebSdk__floating_button_text_${a} {
      flex: 1;
    }

    @media (max-width: 480px) {
      #${a} {
        display: flex;
        align-items: flex-end;
        left: 0;
        right: 0;
        bottom: ${ve(n.bottom)}px;
        width: 100%;
        height: 340px;
      }
    }
    @media (min-width: 481px) {
      #${a} {
        top: ${ve(n.top)}px;
        right: ${ve(n.right)}px;
        width: 384px;
        height: 360px;
      }
    }

    @keyframes vkIdSdkButtonSpinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  <iframe width="100%" height="100%" />
</div>
  `;
};
function Kn(e, n, t, o) {
  var r = arguments.length, s = r < 3 ? n : o === null ? o = Object.getOwnPropertyDescriptor(n, t) : o, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, n, t, o);
  else for (var h = e.length - 1; h >= 0; h--) (u = e[h]) && (s = (r < 3 ? u(s) : r > 3 ? u(n, t, s) : u(n, t)) || s);
  return r > 3 && s && Object.defineProperty(n, t, s), s;
}
const Un = {
  top: 12,
  right: 12,
  bottom: 12
};
class he extends H {
  constructor() {
    super(...arguments);
    _(this, "vkidAppName", "floating_one_tap_auth");
  }
  onBridgeMessageHandler(t) {
    switch (t.handler) {
      case U.LOGIN_SUCCESS: {
        this.redirectWithPayload(t.params);
        break;
      }
      case U.SHOW_FULL_AUTH: {
        const o = {};
        t.params.screen && (o.screen = t.params.screen), t.params.sdk_oauth && (o.action = {
          name: "sdk_oauth",
          params: {
            oauth: t.params.sdk_oauth
          }
        }), this.openFullAuth(o);
        break;
      }
      case U.NOT_AUTHORIZED: {
        this.setState(M.NOT_LOADED), setTimeout(() => {
          this.setState(M.LOADED);
        }, 500), clearTimeout(this.timeoutTimer);
        break;
      }
      case U.SHOW_AGREEMENTS_DIALOG: {
        this.createAgreementsDialogWidget();
        break;
      }
      default: {
        super.onBridgeMessageHandler(t);
        break;
      }
    }
  }
  createAgreementsDialogWidget() {
    const t = {
      container: document.body,
      lang: this.lang,
      scheme: this.scheme
    }, o = new ze(), r = (s) => {
      this.bridge.sendMessage({
        handler: U.START_AUTHORIZE,
        params: s.params
      }), o.off(G.ACCEPT, r), o.close();
    };
    o.on(G.ACCEPT, r), o.render(t);
  }
  openFullAuth(t) {
    const o = {
      ...t,
      lang: this.lang,
      scheme: this.scheme
    };
    he.__auth.login(o);
  }
  renderOAuthList(t) {
    if (!t.oauthList.length)
      return;
    new Z().render(t);
  }
  render(t) {
    this.lang = (t == null ? void 0 : t.lang) || i.RUS, this.scheme = (t == null ? void 0 : t.scheme) || te.LIGHT;
    const o = (t.oauthList || []).filter((s) => s !== N.VK), r = {
      scheme: this.scheme,
      lang_id: this.lang,
      show_alternative_login: t != null && t.showAlternativeLogin ? 1 : 0,
      content_id: (t == null ? void 0 : t.contentId) || x.SIGN_IN_TO_SERVICE,
      providers: o.join(",")
    };
    return this.templateRenderer = Pn({
      openFullAuth: this.openFullAuth.bind(this),
      close: this.close.bind(this),
      scheme: this.scheme,
      lang: this.lang,
      indent: Object.assign(Un, t.indent || {}),
      contentId: r.content_id,
      appName: t.appName,
      renderOAuthList: this.renderOAuthList.bind(this),
      providers: o
    }), super.render({
      container: document.body,
      ...r
    });
  }
}
Kn([
  de({
    appName: [
      Pe
    ]
  })
], he.prototype, "render", null);
const fe = new Et();
ae.__config = fe;
const Xe = new ae();
H.__config = fe;
H.__auth = Xe;
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Auth: Xe,
  get AuthErrorCode() {
    return O;
  },
  Config: fe,
  get ConfigAuthMode() {
    return Q;
  },
  FloatingOneTap: he,
  get FloatingOneTapContentId() {
    return x;
  },
  get Languages() {
    return i;
  },
  OAuthList: Z,
  get OAuthName() {
    return N;
  },
  OneTap: oe,
  get OneTapSkin() {
    return me;
  },
  get Scheme() {
    return te;
  },
  get WidgetEvents() {
    return D;
  }
}, Symbol.toStringTag, { value: "Module" }));
console.log(Bn);
fe.init({
  app: 51982623,
  redirectUrl: "https://financelabs.github.io/myworkbook/",
  state: "state",
  codeVerifier: "codeVerifier",
  scope: "phone email"
});
const Je = new oe();
console.log(Je);
const Ne = document.getElementById("VkIdSdkOneTap");
Ne && Je.render({ container: Ne }).on(D.ERROR, console.error);
//# sourceMappingURL=editfirenodewithvkauth.js.map
