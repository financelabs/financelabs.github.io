var Se = Object.defineProperty;
var ye = (t, e, n) => e in t ? Se(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var u = (t, e, n) => ye(t, typeof e != "symbol" ? e + "" : e, n);
function Ee(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window, o, i, s = function() {
    return t.apply(n, i);
  };
  return function() {
    for (var d = arguments.length, h = new Array(d), p = 0; p < d; p++)
      h[p] = arguments[p];
    i = h, clearTimeout(o), o = setTimeout(s, e);
  };
}
function tt(t) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tt(t);
}
function Ie(t, e) {
  if (tt(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (tt(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ke(t) {
  var e = Ie(t, "string");
  return tt(e) === "symbol" ? e : String(e);
}
function Ae(t, e, n) {
  return e = ke(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Bt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Ce(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bt(Object(n), !0).forEach(function(o) {
      Ae(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function we(t) {
  if (typeof t != "string")
    return {};
  if (t = t.trim().replace(/^[?#&]/, ""), !t)
    return {};
  var e = /\?(.+)$/ig.exec(t), n = e ? e[1] : t;
  return n.split("&").reduce(function(o, i) {
    var s = i.split("=");
    return s[1] && (o[s[0]] = decodeURIComponent(s[1])), o;
  }, {});
}
function Te(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (tt(t) !== "object" || t === null)
    return "";
  e = Ce({
    encode: !0
  }, e);
  var n = function(i) {
    return e.encode ? encodeURIComponent(i) : String(i);
  };
  return Object.keys(t).reduce(function(o, i) {
    var s = t[i];
    return s === void 0 ? o : s === null ? (e.skipNull || o.push([n(i), ""].join("=")), o) : Array.isArray(s) ? (s.map(function(d) {
      o.push("".concat(n(i), "[]=").concat(n(d)));
    }).join(), o) : (o.push([n(i), n(s)].join("=")), o);
  }, []).join("&");
}
var Y = {
  parse: we,
  stringify: Te
}, gt;
(function(t) {
  t.TYPE_ACTION = "type_action";
})(gt || (gt = {}));
var et;
(function(t) {
  t.TYPE_REGISTRATION_ITEM = "type_registration_item", t.TYPE_SAK_SESSION_EVENT_ITEM = "type_sak_sessions_event_item";
})(et || (et = {}));
var N;
(function(t) {
  t.NOWHERE = "nowhere", t.FLOATING_ONE_TAP = "floating_one_tap", t.MULTIBRANDING = "multibranding_widget";
})(N || (N = {}));
class Et {
  constructor(e) {
    u(this, "actionStatsCollector");
    this.actionStatsCollector = e;
  }
  logEvent(e, n) {
    const o = {
      type: et.TYPE_REGISTRATION_ITEM,
      [et.TYPE_REGISTRATION_ITEM]: n
    };
    return this.actionStatsCollector.logEvent({
      screen: e,
      event: o
    });
  }
}
const Qt = "2.0.0", Nt = "vk.com", Oe = `login.${Nt}`, Re = `oauth.${Nt}`, Ve = `id.${Nt}`, xe = 9e5, $e = (t, e) => {
  const { __vkidDomain: n, app: o } = e.get();
  return `https://${n}/${t}?app_id=${o}&v=5.207`;
}, Ne = (t) => Object.keys(t).map((n) => {
  let o = t[n];
  return n = encodeURIComponent(n || ""), o = encodeURIComponent(o === void 0 ? "" : o), `${n}=${o}`;
}).join("&"), Le = (t, e) => {
  const n = Ne(e);
  return fetch(t, {
    method: "POST",
    body: n,
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then((o) => o.json());
}, yt = class yt {
  constructor(e) {
    u(this, "timeoutId", null);
    u(this, "lastEvent");
    u(this, "config");
    u(this, "stackEvents", []);
    this.config = e;
  }
  getIntId() {
    return Math.floor(Math.random() * yt.MAX_INT32);
  }
  getCurrentTime(e = !0) {
    const n = Date.now().toString(10);
    return e ? n + "000" : n;
  }
  sendStats(e) {
    return this.stackEvents.push(e), this.timeoutId && window.clearTimeout(this.timeoutId), new Promise((n, o) => {
      this.timeoutId = window.setTimeout(() => {
        const i = {
          events: JSON.stringify(this.stackEvents),
          sak_version: Qt
        };
        this.stackEvents = [];
        const s = $e("stat_events_vkid_sdk", this.config);
        Le(s, i).then(n).catch(o);
      }, 0);
    });
  }
  getBaseEvent(e) {
    var n;
    return {
      id: this.getIntId(),
      prev_event_id: ((n = this.lastEvent) == null ? void 0 : n.id) || 0,
      prev_nav_id: 0,
      timestamp: this.getCurrentTime(),
      url: window.location.href,
      screen: e
    };
  }
  logEvent(e) {
    return this.lastEvent = e, this.sendStats(e);
  }
};
u(yt, "MAX_INT32", 2147483647);
let q = yt;
class ht {
  constructor(e) {
    u(this, "productStatsCollector");
    this.productStatsCollector = e;
  }
  logEvent(e) {
    const n = {
      ...this.productStatsCollector.getBaseEvent(e.screen),
      type: gt.TYPE_ACTION,
      [gt.TYPE_ACTION]: e.event
    };
    return this.productStatsCollector.logEvent(n);
  }
}
class De {
  constructor(e) {
    u(this, "registrationStatsCollector");
    u(this, "uniqueSessionId");
    const n = new q(e), o = new ht(n);
    this.registrationStatsCollector = new Et(o);
  }
  setUniqueSessionId(e) {
    this.uniqueSessionId = e;
  }
  getFields() {
    const e = [
      {
        name: "sdk_type",
        value: "vkid"
      }
    ];
    return this.uniqueSessionId && e.push({
      name: "unique_session_id",
      value: this.uniqueSessionId
    }), e;
  }
  sendCustomAuthStart(e) {
    const n = this.getFields();
    return e && n.push({
      name: "oauth_service",
      value: e
    }), this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "custom_auth_start",
      fields: n
    });
  }
}
class Me {
  constructor() {
    u(this, "promise");
    u(this, "callback");
    u(this, "resolve");
    u(this, "reject");
    u(this, "setCallback", (e) => {
      this.callback = e;
    });
    u(this, "removeCallback", () => {
      this.callback = null;
    });
    u(this, "sendSuccess", (e) => {
      this.resolve(e), this.callback && this.callback();
    });
    u(this, "sendError", (e) => {
      this.reject(e), this.callback && this.callback();
    });
    this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
  get value() {
    return this.promise;
  }
}
let Ue = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Be = (t, e = 21) => (n = e) => {
  let o = "", i = n;
  for (; i--; )
    o += t[Math.random() * t.length | 0];
  return o;
}, Ke = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += Ue[Math.random() * 64 | 0];
  return e;
};
function Pe(t) {
  try {
    let e = document.cookie.match(new RegExp("(?:^|; )" + ("vkid_sdk:" + t).replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") + "=([^;]*)"));
    return e ? decodeURIComponent(e[1]) : void 0;
  } catch {
    return;
  }
}
function Kt(t, e) {
  try {
    const n = new Date((/* @__PURE__ */ new Date()).getTime() + (e.expires || xe)).toUTCString(), o = location.host.split(".").slice(-2).join(".");
    document.cookie = [
      `vkid_sdk:${t}=${encodeURIComponent(e.value || "")}`,
      `expires=${n}`,
      "path=/",
      `domain=.${o}`,
      "SameSite=Strict",
      "Secure"
    ].join("; ");
  } catch {
  }
}
function te(t) {
  const e = location.host.split(".").slice(-2).join(".");
  try {
    document.cookie = [
      `vkid_sdk:${t}=`,
      "expires=Thu, 01 Jan 1970 00:00:00 UTC",
      "path=/",
      "SameSite=Strict",
      "Secure",
      `domain=.${e}`
    ].join("; ");
  } catch {
  }
}
function ee(t, e) {
  if (e.value)
    return Kt(t, e), e.value;
  let n;
  return n = Pe(t), n || (n = Ke(), Kt(t, {
    ...e,
    value: n
  })), n;
}
const K = (t) => ee("state", {
  value: t
}), At = (t) => ee("codeVerifier", {
  value: t
}), Pt = () => te("state"), He = () => te("codeVerifier");
var P;
(function(t) {
  t.AUTH = "from_custom_auth", t.BUTTON_ONE_TAP = "from_one_tap", t.FLOATING_ONE_TAP = "from_floating_one_tap", t.MULTIBRANDING = "from_multibranding";
})(P || (P = {}));
var V;
(function(t) {
  t[t.EventNotSupported = 100] = "EventNotSupported", t[t.CannotCreateNewTab = 101] = "CannotCreateNewTab", t[t.NewTabHasBeenClosed = 102] = "NewTabHasBeenClosed", t[t.AuthorizationFailed = 103] = "AuthorizationFailed", t[t.StateMismatch = 104] = "StateMismatch";
})(V || (V = {}));
const Fe = "code", X = {
  [V.EventNotSupported]: "Event is not supported",
  [V.CannotCreateNewTab]: "Cannot create new tab. Try checking your browser settings",
  [V.NewTabHasBeenClosed]: "New tab has been closed",
  [V.AuthorizationFailed]: "Authorization failed with an error",
  [V.StateMismatch]: "The received state does not match the expected state"
}, We = "oauth2_authorize_response";
class ze extends Me {
  constructor() {
    super(...arguments);
    u(this, "state", K());
    u(this, "sendSuccessData", (n) => {
      this.sendSuccess({
        type: n.type,
        code: n.code,
        state: n.state,
        device_id: n.device_id
      });
    });
    u(this, "sendNewTabHasBeenClosed", () => {
      this.sendError({
        code: V.NewTabHasBeenClosed,
        error: X[V.NewTabHasBeenClosed],
        state: this.state
      });
    });
    // TODO: Типизировать details
    u(this, "sendAuthorizationFailed", (n) => {
      this.sendError({
        code: V.AuthorizationFailed,
        error: X[V.AuthorizationFailed],
        error_description: JSON.stringify(n),
        state: this.state
      });
    });
    u(this, "sendEventNotSupported", () => {
      this.sendError({
        code: V.EventNotSupported,
        error: X[V.EventNotSupported],
        state: this.state
      });
    });
    u(this, "sendCannotCreateNewTab", () => {
      this.sendError({
        code: V.CannotCreateNewTab,
        error: X[V.CannotCreateNewTab],
        state: this.state
      });
    });
    u(this, "sendStateMismatchError", () => {
      this.sendError({
        code: V.StateMismatch,
        error: X[V.StateMismatch],
        state: this.state
      });
    });
  }
}
class Ge {
  constructor(e) {
    u(this, "actionStatsCollector");
    this.actionStatsCollector = e;
  }
  logEvent(e) {
    const n = {
      type: et.TYPE_SAK_SESSION_EVENT_ITEM,
      [et.TYPE_SAK_SESSION_EVENT_ITEM]: e
    };
    return this.actionStatsCollector.logEvent({
      screen: N.NOWHERE,
      event: n
    });
  }
  sendSdkInit() {
    this.logEvent({
      step: "vkid_sdk_init"
    });
  }
}
const ft = (t) => (e, n, o) => {
  const i = o.value;
  o.value = function(s) {
    const d = Object.keys(t);
    for (let h of d) {
      const p = t[h];
      p == null || p.forEach((a) => {
        const { result: y, makeError: c } = a(s[h]);
        if (!y)
          throw new Error(c(h));
      });
    }
    return i == null ? void 0 : i.apply(this, arguments);
  };
}, vt = (t) => {
  let e = !0;
  return (typeof t == "string" && t.trim() === "" || t === void 0 || t == null) && (e = !1), {
    result: e,
    makeError: (n) => `${n} is required parameter`
  };
}, ne = (t) => ({
  result: [
    "number",
    "string"
  ].includes(typeof t) && !isNaN(parseInt(t)),
  makeError: (e) => `${e} should be number`
}), je = (t) => ({
  result: t !== void 0 && t.height !== void 0 && ne(t.height) && t.height < 57 && t.height > 31 || t === void 0 || t.height === void 0,
  makeError: () => "The height should correspond to the range from 32 to 56"
}), qe = (t) => ({
  result: (t == null ? void 0 : t.length) && t.length >= 1,
  makeError: () => "OAuth list can't be empty"
});
var ct;
(function(t) {
  t.Redirect = "redirect", t.InNewTab = "new_tab";
})(ct || (ct = {}));
var lt;
(function(t) {
  t.Default = "", t.None = "none", t.Login = "login", t.Consent = "consent", t.SelectAccount = "select_account";
})(lt || (lt = {}));
function Ze(t, e, n, o) {
  var i = arguments.length, s = i < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, n) : o, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, n, o);
  else for (var h = t.length - 1; h >= 0; h--) (d = t[h]) && (s = (i < 3 ? d(s) : i > 3 ? d(e, n, s) : d(e, n)) || s);
  return i > 3 && s && Object.defineProperty(e, n, s), s;
}
class oe {
  constructor() {
    u(this, "sakSessionStatsCollector");
    u(this, "store", {
      app: 0,
      redirectUrl: "",
      mode: ct.InNewTab,
      codeVerifier: "",
      state: "",
      prompt: [
        lt.Default
      ],
      __loginDomain: Oe,
      __oauthDomain: Re,
      __vkidDomain: Ve
    });
    const e = new q(this), n = new ht(e);
    this.sakSessionStatsCollector = new Ge(n);
  }
  init(e) {
    return this.set(e), this.sakSessionStatsCollector.sendSdkInit(), this;
  }
  update(e) {
    return this.set(e);
  }
  set(e) {
    return this.store = {
      ...this.store,
      ...e
    }, this;
  }
  get() {
    return this.store;
  }
}
Ze([
  ft({
    app: [
      vt,
      ne
    ],
    redirectUrl: [
      vt
    ]
  })
], oe.prototype, "init", null);
const Ye = [
  ".vk.com",
  ".vk.ru"
], Xe = (t) => !!Ye.find((e) => t.endsWith(e));
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ie(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Je(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(t, o);
    Object.defineProperty(n, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[o];
      }
    });
  }), n;
}
var re = { exports: {} };
function Qe(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ct = { exports: {} };
const tn = {}, en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn
}, Symbol.toStringTag, { value: "Module" })), nn = /* @__PURE__ */ Je(en);
var Ht;
function se() {
  return Ht || (Ht = 1, function(t, e) {
    (function(n, o) {
      t.exports = o();
    })(J, function() {
      var n = n || function(o, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof J < "u" && J.crypto && (s = J.crypto), !s && typeof Qe == "function")
          try {
            s = nn;
          } catch {
          }
        var d = function() {
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
          return function(f) {
            var v;
            return l.prototype = f, v = new l(), l.prototype = null, v;
          };
        }(), p = {}, a = p.lib = {}, y = a.Base = /* @__PURE__ */ function() {
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
              var f = h(this);
              return l && f.mixIn(l), (!f.hasOwnProperty("init") || this.init === f.init) && (f.init = function() {
                f.$super.init.apply(this, arguments);
              }), f.init.prototype = f, f.$super = this, f;
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
              for (var f in l)
                l.hasOwnProperty(f) && (this[f] = l[f]);
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
        }(), c = a.WordArray = y.extend({
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
          init: function(l, f) {
            l = this.words = l || [], f != i ? this.sigBytes = f : this.sigBytes = l.length * 4;
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
            return (l || g).stringify(this);
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
            var f = this.words, v = l.words, m = this.sigBytes, A = l.sigBytes;
            if (this.clamp(), m % 4)
              for (var E = 0; E < A; E++) {
                var I = v[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                f[m + E >>> 2] |= I << 24 - (m + E) % 4 * 8;
              }
            else
              for (var w = 0; w < A; w += 4)
                f[m + w >>> 2] = v[w >>> 2];
            return this.sigBytes += A, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, f = this.sigBytes;
            l[f >>> 2] &= 4294967295 << 32 - f % 4 * 8, l.length = o.ceil(f / 4);
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
            var l = y.clone.call(this);
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
            for (var f = [], v = 0; v < l; v += 4)
              f.push(d());
            return new c.init(f, l);
          }
        }), b = p.enc = {}, g = b.Hex = {
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
            for (var f = l.words, v = l.sigBytes, m = [], A = 0; A < v; A++) {
              var E = f[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              m.push((E >>> 4).toString(16)), m.push((E & 15).toString(16));
            }
            return m.join("");
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
            for (var f = l.length, v = [], m = 0; m < f; m += 2)
              v[m >>> 3] |= parseInt(l.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new c.init(v, f / 2);
          }
        }, k = b.Latin1 = {
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
            for (var f = l.words, v = l.sigBytes, m = [], A = 0; A < v; A++) {
              var E = f[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              m.push(String.fromCharCode(E));
            }
            return m.join("");
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
            for (var f = l.length, v = [], m = 0; m < f; m++)
              v[m >>> 2] |= (l.charCodeAt(m) & 255) << 24 - m % 4 * 8;
            return new c.init(v, f);
          }
        }, _ = b.Utf8 = {
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
              return decodeURIComponent(escape(k.stringify(l)));
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
            return k.parse(unescape(encodeURIComponent(l)));
          }
        }, S = a.BufferedBlockAlgorithm = y.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new c.init(), this._nDataBytes = 0;
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
            typeof l == "string" && (l = _.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
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
            var f, v = this._data, m = v.words, A = v.sigBytes, E = this.blockSize, I = E * 4, w = A / I;
            l ? w = o.ceil(w) : w = o.max((w | 0) - this._minBufferSize, 0);
            var x = w * E, L = o.min(x * 4, A);
            if (x) {
              for (var T = 0; T < x; T += E)
                this._doProcessBlock(m, T);
              f = m.splice(0, x), v.sigBytes -= L;
            }
            return new c.init(f, L);
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
            var l = y.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        a.Hasher = S.extend({
          /**
           * Configuration options.
           */
          cfg: y.extend(),
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
            S.reset.call(this), this._doReset();
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
            var f = this._doFinalize();
            return f;
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
            return function(f, v) {
              return new l.init(v).finalize(f);
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
            return function(f, v) {
              return new R.HMAC.init(l, v).finalize(f);
            };
          }
        });
        var R = p.algo = {};
        return p;
      }(Math);
      return n;
    });
  }(Ct)), Ct.exports;
}
(function(t, e) {
  (function(n, o) {
    t.exports = o(se());
  })(J, function(n) {
    return function() {
      var o = n, i = o.lib, s = i.WordArray, d = o.enc;
      d.Base64 = {
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
        stringify: function(p) {
          var a = p.words, y = p.sigBytes, c = this._map;
          p.clamp();
          for (var b = [], g = 0; g < y; g += 3)
            for (var k = a[g >>> 2] >>> 24 - g % 4 * 8 & 255, _ = a[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, S = a[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, R = k << 16 | _ << 8 | S, l = 0; l < 4 && g + l * 0.75 < y; l++)
              b.push(c.charAt(R >>> 6 * (3 - l) & 63));
          var f = c.charAt(64);
          if (f)
            for (; b.length % 4; )
              b.push(f);
          return b.join("");
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
        parse: function(p) {
          var a = p.length, y = this._map, c = this._reverseMap;
          if (!c) {
            c = this._reverseMap = [];
            for (var b = 0; b < y.length; b++)
              c[y.charCodeAt(b)] = b;
          }
          var g = y.charAt(64);
          if (g) {
            var k = p.indexOf(g);
            k !== -1 && (a = k);
          }
          return h(p, a, c);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function h(p, a, y) {
        for (var c = [], b = 0, g = 0; g < a; g++)
          if (g % 4) {
            var k = y[p.charCodeAt(g - 1)] << g % 4 * 2, _ = y[p.charCodeAt(g)] >>> 6 - g % 4 * 2, S = k | _;
            c[b >>> 2] |= S << 24 - b % 4 * 8, b++;
          }
        return s.create(c, b);
      }
    }(), n.enc.Base64;
  });
})(re);
var on = re.exports;
const rn = /* @__PURE__ */ ie(on);
var ae = { exports: {} };
(function(t, e) {
  (function(n, o) {
    t.exports = o(se());
  })(J, function(n) {
    return function(o) {
      var i = n, s = i.lib, d = s.WordArray, h = s.Hasher, p = i.algo, a = [], y = [];
      (function() {
        function g(R) {
          for (var l = o.sqrt(R), f = 2; f <= l; f++)
            if (!(R % f))
              return !1;
          return !0;
        }
        function k(R) {
          return (R - (R | 0)) * 4294967296 | 0;
        }
        for (var _ = 2, S = 0; S < 64; )
          g(_) && (S < 8 && (a[S] = k(o.pow(_, 1 / 2))), y[S] = k(o.pow(_, 1 / 3)), S++), _++;
      })();
      var c = [], b = p.SHA256 = h.extend({
        _doReset: function() {
          this._hash = new d.init(a.slice(0));
        },
        _doProcessBlock: function(g, k) {
          for (var _ = this._hash.words, S = _[0], R = _[1], l = _[2], f = _[3], v = _[4], m = _[5], A = _[6], E = _[7], I = 0; I < 64; I++) {
            if (I < 16)
              c[I] = g[k + I] | 0;
            else {
              var w = c[I - 15], x = (w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3, L = c[I - 2], T = (L << 15 | L >>> 17) ^ (L << 13 | L >>> 19) ^ L >>> 10;
              c[I] = x + c[I - 7] + T + c[I - 16];
            }
            var F = v & m ^ ~v & A, M = S & R ^ S & l ^ R & l, B = (S << 30 | S >>> 2) ^ (S << 19 | S >>> 13) ^ (S << 10 | S >>> 22), j = (v << 26 | v >>> 6) ^ (v << 21 | v >>> 11) ^ (v << 7 | v >>> 25), Z = E + j + F + y[I] + c[I], _t = B + M;
            E = A, A = m, m = v, v = f + Z | 0, f = l, l = R, R = S, S = Z + _t | 0;
          }
          _[0] = _[0] + S | 0, _[1] = _[1] + R | 0, _[2] = _[2] + l | 0, _[3] = _[3] + f | 0, _[4] = _[4] + v | 0, _[5] = _[5] + m | 0, _[6] = _[6] + A | 0, _[7] = _[7] + E | 0;
        },
        _doFinalize: function() {
          var g = this._data, k = g.words, _ = this._nDataBytes * 8, S = g.sigBytes * 8;
          return k[S >>> 5] |= 128 << 24 - S % 32, k[(S + 64 >>> 9 << 4) + 14] = o.floor(_ / 4294967296), k[(S + 64 >>> 9 << 4) + 15] = _, g.sigBytes = k.length * 4, this._process(), this._hash;
        },
        clone: function() {
          var g = h.clone.call(this);
          return g._hash = this._hash.clone(), g;
        }
      });
      i.SHA256 = h._createHelper(b), i.HmacSHA256 = h._createHmacHelper(b);
    }(Math), n.SHA256;
  });
})(ae);
var sn = ae.exports;
const an = /* @__PURE__ */ ie(sn), cn = (t) => {
  const e = an(t);
  return rn.stringify(e).replace(/=*$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}, Rt = (t, e, n) => {
  const o = {
    ...e,
    v: Qt,
    sdk_type: "vkid",
    app_id: n.app,
    redirect_uri: n.redirectUrl,
    debug: n.__debug ? 1 : null,
    localhost: n.__localhost ? 1 : null
  }, i = Y.stringify(o, {
    skipNull: !0
  });
  return `https://${n.__vkidDomain}/${t}?${i}`;
}, ce = (t, e) => {
  const n = e.get().redirectUrl, o = n.includes("?"), i = Object.keys(t).map((s) => encodeURIComponent(s) + "=" + encodeURIComponent(t[s])).join("&");
  return `${n}${o ? "&" : "?"}${i}`;
}, ln = (t) => {
  if (Object.values(t).filter(Boolean).length)
    return btoa(JSON.stringify(t));
}, le = Be("qazwsxedcrfvtgbyhnujmikol", 6);
function dn(t) {
  return t = t || /* @__PURE__ */ Object.create(null), {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function(n, o) {
      (t[n] || (t[n] = [])).push(o);
    },
    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function(n, o) {
      t[n] && t[n].splice(t[n].indexOf(o) >>> 0, 1);
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function(n, o) {
      (t[n] || []).slice().map(function(i) {
        i(o);
      }), (t["*"] || []).slice().map(function(i) {
        i(n, o);
      });
    }
  };
}
class de {
  constructor() {
    u(this, "events", dn());
  }
  on(e, n) {
    return this.events.on(e, n), this;
  }
  off(e, n) {
    return this.events.off(e, n), this;
  }
}
var dt;
(function(t) {
  t.MESSAGE = "message", t.UNSUPPORTED_MESSAGE = "unsupported_message";
})(dt || (dt = {}));
const Ft = "vk-sak-sdk";
class un extends de {
  constructor(n) {
    super();
    u(this, "config");
    this.config = n, this.handleMessage = this.handleMessage.bind(this), window.addEventListener("message", this.handleMessage);
  }
  destroy() {
    delete this.config, window.removeEventListener("message", this.handleMessage);
  }
  sendMessage(n) {
    var o;
    (o = this.config.iframe.contentWindow) == null || o.postMessage({
      type: Ft,
      ...n
    }, this.config.origin);
  }
  handleMessage(n) {
    var i;
    if (!this.config.origin || n.origin !== this.config.origin || n.source !== this.config.iframe.contentWindow || ((i = n.data) == null ? void 0 : i.type) !== Ft) {
      this.events.emit(dt.UNSUPPORTED_MESSAGE, n.data);
      return;
    }
    this.events.emit(dt.MESSAGE, n.data);
  }
}
var W;
(function(t) {
  t.LOGIN_SUCCESS = "onetap: success login", t.SHOW_FULL_AUTH = "onetap: show full auth", t.START_AUTHORIZE = "onetap: start authorize", t.NOT_AUTHORIZED = "onetap: not authorized", t.AUTHENTICATION_INFO = "onetap: authentication_info";
})(W || (W = {}));
var H;
(function(t) {
  t.LOADING = "loading", t.LOADED = "loaded", t.NOT_LOADED = "not_loaded";
})(H || (H = {}));
var U;
(function(t) {
  t[t.TimeoutExceeded = 0] = "TimeoutExceeded", t[t.InternalError = 1] = "InternalError", t[t.AuthError = 2] = "AuthError";
})(U || (U = {}));
const Wt = {
  [U.TimeoutExceeded]: "timeout",
  [U.InternalError]: "internal error",
  [U.AuthError]: "auth error"
};
var $;
(function(t) {
  t.START_LOAD = "common: start load", t.LOAD = "common: load", t.SHOW = "common: show", t.HIDE = "common: hide", t.CLOSE = "common: close", t.ERROR = "common: error", t.RESIZE = "common: resize";
})($ || ($ = {}));
const hn = (t) => `
<div id="${t}" data-test-id="widget">
  <style>
    #${t} {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }

    #${t} iframe {
      border: none;
      color-scheme: auto;
    }

    #${t} .loader,
    #${t} .error {
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
function fn(t, e, n, o) {
  var i = arguments.length, s = i < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, n) : o, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, n, o);
  else for (var h = t.length - 1; h >= 0; h--) (d = t[h]) && (s = (i < 3 ? d(s) : i > 3 ? d(e, n, s) : d(e, n)) || s);
  return i > 3 && s && Object.defineProperty(e, n, s), s;
}
const _n = 5e3, pn = 300, Q = class Q extends de {
  constructor() {
    super();
    u(this, "id", le());
    u(this, "lang");
    u(this, "scheme");
    u(this, "vkidAppName", "");
    u(this, "config");
    u(this, "timeoutTimer");
    u(this, "bridge");
    u(this, "container");
    u(this, "templateRenderer", hn);
    u(this, "elements");
    this.config = Q.config;
  }
  render(n) {
    const { container: o, ...i } = n;
    return this.container = o, this.renderTemplate(), this.registerElements(), "fastAuthDisabled" in n && n.fastAuthDisabled ? (this.setState(H.NOT_LOADED), this) : (this.loadWidgetFrame(i), this);
  }
  close() {
    var n, o, i;
    clearTimeout(this.timeoutTimer), (o = (n = this.elements) == null ? void 0 : n.root) == null || o.remove(), (i = this.bridge) == null || i.destroy(), this.events.emit($.CLOSE);
  }
  show() {
    return this.elements.root && (this.elements.root.style.display = "block", this.events.emit($.SHOW)), this;
  }
  hide() {
    return this.elements.root && (this.elements.root.style.display = "none", this.events.emit($.HIDE)), this;
  }
  /**
  * Метод вызывается перед началом загрузки iframe с VK ID приложением
  */
  onStartLoadHandler() {
    this.setState(H.LOADING), this.timeoutTimer = setTimeout(() => {
      this.onErrorHandler({
        code: U.TimeoutExceeded,
        text: Wt[U.TimeoutExceeded]
      });
    }, _n), this.events.emit($.START_LOAD);
  }
  /**
  * Метод вызывается после того, как полностью загружен iframe с VK ID приложением
  */
  onLoadHandler() {
    clearTimeout(this.timeoutTimer), setTimeout(() => {
      this.setState(H.LOADED);
    }, pn), this.events.emit($.LOAD);
  }
  /**
  * Метод вызывается, когда во время работы/загрузки VK ID приложения произошла ошибка
  */
  onErrorHandler(n) {
    var o, i;
    clearTimeout(this.timeoutTimer), this.setState(H.NOT_LOADED), this.events.emit(W.AUTHENTICATION_INFO, {
      is_online: !1
    }), this.events.emit($.ERROR, n), (i = (o = this.elements) == null ? void 0 : o.iframe) == null || i.remove();
  }
  /**
  * Метод вызывается при сообщениях от VK ID приложения
  */
  onBridgeMessageHandler(n) {
    switch (n.handler) {
      case $.LOAD: {
        this.onLoadHandler();
        break;
      }
      case $.CLOSE: {
        this.close();
        break;
      }
      case $.ERROR: {
        this.onErrorHandler({
          code: U.InternalError,
          text: Wt[U.InternalError],
          details: n.params
        });
        break;
      }
      case $.RESIZE: {
        this.elements.root.style.height = `${n.params.height}px`;
        break;
      }
    }
  }
  // <Дополнительные хелперы>
  renderTemplate() {
    this.container.insertAdjacentHTML("beforeend", this.templateRenderer(this.id));
  }
  loadWidgetFrame(n) {
    this.onStartLoadHandler(), this.bridge = new un({
      iframe: this.elements.iframe,
      origin: `https://${this.config.get().__vkidDomain}`
    }), this.bridge.on(dt.MESSAGE, (o) => this.onBridgeMessageHandler(o)), this.elements.iframe.src = this.getWidgetFrameSrc(this.config.get(), n);
  }
  getWidgetFrameSrc(n, o) {
    const i = {
      ...o,
      origin: location.protocol + "//" + location.host,
      oauth_version: 2
    };
    return Rt(this.vkidAppName, i, n);
  }
  setState(n) {
    this.elements.root.setAttribute("data-state", n);
  }
  registerElements() {
    const n = document.getElementById(this.id);
    this.elements = {
      root: n,
      iframe: n.querySelector("iframe")
    };
  }
  redirectWithPayload(n) {
    location.assign(ce(n, Q.config));
  }
};
/**
* @ignore
*/
u(Q, "config"), /**
* @ignore
*/
u(Q, "auth");
let G = Q;
fn([
  ft({
    container: [
      vt
    ]
  })
], G.prototype, "render", null);
var r;
(function(t) {
  t[t.RUS = 0] = "RUS", t[t.UKR = 1] = "UKR", t[t.ENG = 3] = "ENG", t[t.SPA = 4] = "SPA", t[t.GERMAN = 6] = "GERMAN", t[t.POL = 15] = "POL", t[t.FRA = 16] = "FRA", t[t.UZB = 65] = "UZB", t[t.TURKEY = 82] = "TURKEY", t[t.KAZ = 97] = "KAZ", t[t.BEL = 114] = "BEL";
})(r || (r = {}));
var nt;
(function(t) {
  t.LIGHT = "light", t.DARK = "dark";
})(nt || (nt = {}));
class gn {
  constructor(e) {
    u(this, "registrationStatsCollector");
    u(this, "uniqueSessionId");
    const n = new q(e), o = new ht(n);
    this.registrationStatsCollector = new Et(o);
  }
  setUniqueSessionId(e) {
    this.uniqueSessionId = e;
  }
  getFields() {
    const e = [
      {
        name: "sdk_type",
        value: "vkid"
      }
    ];
    return this.uniqueSessionId && e.push({
      name: "unique_session_id",
      value: this.uniqueSessionId
    }), e;
  }
  sendMultibrandingOauthAdded({ screen: e, fields: n }) {
    this.registrationStatsCollector.logEvent(e, {
      event_type: "multibranding_oauth_added",
      fields: [
        ...this.getFields(),
        ...n
      ]
    });
  }
  sendOkButtonShow({ screen: e, isIcon: n }) {
    this.registrationStatsCollector.logEvent(e, {
      event_type: "ok_button_show",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: n ? "icon" : "default"
        }
      ]
    });
  }
  sendVkButtonShow({ screen: e, isIcon: n }) {
    this.registrationStatsCollector.logEvent(e, {
      event_type: "vk_button_show",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: n ? "icon" : "default"
        }
      ]
    });
  }
  sendMailButtonShow({ screen: e, isIcon: n }) {
    this.registrationStatsCollector.logEvent(e, {
      event_type: "mail_button_show",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: n ? "icon" : "default"
        }
      ]
    });
  }
  sendVkButtonTap({ screen: e, isIcon: n }) {
    return this.registrationStatsCollector.logEvent(e, {
      event_type: "vk_button_tap",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: n ? "icon" : "default"
        }
      ]
    });
  }
  sendOkButtonTap({ screen: e, isIcon: n }) {
    return this.registrationStatsCollector.logEvent(e, {
      event_type: "ok_button_tap",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: n ? "icon" : "default"
        }
      ]
    });
  }
  sendMailButtonTap({ screen: e, isIcon: n }) {
    return this.registrationStatsCollector.logEvent(e, {
      event_type: "mail_button_tap",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: n ? "icon" : "default"
        }
      ]
    });
  }
}
var st;
(function(t) {
  t.VK = "vk", t.OK = "ok", t.MAIL = "mail";
})(st || (st = {}));
var C;
(function(t) {
  t.OK = "ok_ru", t.MAIL = "mail_ru", t.VK = "vkid";
})(C || (C = {}));
var Vt;
(function(t) {
  t[t.OK = C.OK] = "OK", t[t.MAIL = C.MAIL] = "MAIL";
})(Vt || (Vt = {}));
const vn = {
  [C.OK]: "OK",
  [C.MAIL]: "Mail.ru",
  [C.VK]: "VK ID"
}, bn = {
  [r.RUS]: "или войти через VK ID с использованием данных из сервиса",
  [r.UKR]: "або увійти через VK ID з використанням даних із сервісу",
  [r.BEL]: "ці ўвайсці праз VK ID з выкарыстаннем даных з сэрвісу",
  [r.KAZ]: "сервистегі деректерді пайдаланып VK ID арқылы кіру",
  [r.UZB]: "yoki xizmatning maʼlumotlaridan foydalangan holda VK ID orqali kirish",
  [r.ENG]: "or sign in with VK ID using information from a service",
  [r.SPA]: "o iniciar sesión con VK ID utilizando la información de un servicio",
  [r.GERMAN]: "oder melden Sie sich mit Ihrer VK-ID an, indem Sie Informationen aus dem Dienst verwenden",
  [r.POL]: "lub wejdź poprzez VK ID przy użyciu danych z serwisu",
  [r.FRA]: "ou se connecter avec VK ID en utilisant les informations d'un service",
  [r.TURKEY]: "Ya da hizmetteki verileri kullanarak VK ID hizmeti yardımıyla gir"
}, zt = {
  [r.RUS]: {
    [C.OK]: "Войти через OK",
    [C.MAIL]: "Войти с Почтой Mail.ru",
    [C.VK]: "Войти с VK ID"
  },
  [r.UKR]: "Увійти з {provider}",
  [r.BEL]: "Увайсці з {provider}",
  [r.KAZ]: "{provider} кіру",
  [r.UZB]: "{provider} orqali kirish",
  [r.ENG]: "Sign in with {provider}",
  [r.SPA]: "Iniciar sesión con {provider}",
  [r.GERMAN]: "Mit {provider} anmelden",
  [r.POL]: "Zaloguj się z {provider}",
  [r.FRA]: "Se connecter avec {provider}",
  [r.TURKEY]: "{provider}'den gir"
}, mn = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`, Sn = {
  [C.VK]: (t) => `
<svg width="${t + 1}" height="${t}" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33331 13.56C3.33331 8.58197 3.33331 6.09295 4.87979 4.54648C6.42627 3 8.91528 3 13.8933 3H14.7733C19.7513 3 22.2404 3 23.7868 4.54648C25.3333 6.09295 25.3333 8.58197 25.3333 13.56V14.44C25.3333 19.418 25.3333 21.907 23.7868 23.4535C22.2404 25 19.7513 25 14.7733 25H13.8933C8.91528 25 6.42627 25 4.87979 23.4535C3.33331 21.907 3.33331 19.418 3.33331 14.44V13.56Z" fill="#0077FF" style="fill:#0077FF;fill:color(display-p3 0.0000 0.4667 1.0000);fill-opacity:1;"/>
  <path d="M15.0398 18.9C10.0174 18.9 7.15269 15.4466 7.03333 9.70001H9.54912C9.63175 13.9178 11.4864 15.7044 12.9555 16.0728V9.70001H15.3245V13.3376C16.7752 13.1811 18.2992 11.5234 18.8134 9.70001H21.1823C20.7875 11.9471 19.1348 13.6047 17.9595 14.2862C19.1348 14.8387 21.0171 16.2846 21.7333 18.9H19.1256C18.5655 17.1503 17.17 15.7965 15.3245 15.6123V18.9H15.0398Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
  `,
  [C.OK]: (t) => `
<svg width="${t}" height="${t}" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67554 3.67638C2 5.36482 2 8.09045 2 13.5176V14.4824C2 19.9216 2 22.6352 3.68759 24.3236C5.37519 26 8.09944 26 13.5238 26H14.4882C19.9126 26 22.6489 26 24.3245 24.3236C26 22.6352 26 19.9095 26 14.4824V13.5176C26 8.09045 26 5.35276 24.3245 3.67638C22.6369 2 19.9126 2 14.4882 2H13.5239C8.08739 2 5.37519 2 3.67554 3.67638Z" fill="#EE8208" style="fill:#EE8208;fill:color(display-p3 0.9333 0.5098 0.0314);fill-opacity:1;"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1157 12.621C16.3239 13.4108 15.218 13.9122 13.999 13.9122C12.7926 13.9122 11.6741 13.4108 10.8823 12.621C10.0906 11.8313 9.58793 10.7407 9.58793 9.51224C9.58793 8.28377 10.0906 7.18065 10.8823 6.40345C11.6741 5.61372 12.78 5.1123 13.999 5.1123C15.218 5.1123 16.3239 5.61372 17.1157 6.40345C17.9074 7.19319 18.4101 8.2963 18.4101 9.51224C18.4101 10.7282 17.9074 11.8313 17.1157 12.621ZM14.0116 7.49404C13.4586 7.49404 12.9559 7.71967 12.5915 8.0832C12.2396 8.44673 12.0008 8.94814 12.0008 9.4997C12.0008 10.0513 12.227 10.5527 12.5915 10.9162C12.9559 11.2797 13.446 11.5054 14.0116 11.5054C14.5645 11.5054 15.0672 11.2797 15.4317 10.9162C15.7961 10.5527 16.0223 10.0638 16.0223 9.4997C16.0223 8.94814 15.7961 8.44673 15.4317 8.0832C15.0672 7.71967 14.5771 7.49404 14.0116 7.49404Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
  <path d="M18.6614 13.9247L19.9558 15.6922C20.0312 15.7799 20.0187 15.8927 19.8553 15.968C18.762 16.8705 17.4927 17.4471 16.1731 17.7605L18.9128 22.5741C18.9882 22.7246 18.9002 22.8875 18.7368 22.8875H16.06C15.9721 22.8875 15.8967 22.8248 15.8715 22.7496L13.9613 18.4876L12.0511 22.7496C12.026 22.8374 11.9506 22.8875 11.8626 22.8875H9.1858C9.03499 22.8875 8.93445 22.712 9.00986 22.5741L11.7495 17.7605C10.4299 17.4471 9.16066 16.8454 8.06732 15.968C7.99192 15.8927 7.97935 15.7799 8.04219 15.6922L9.3366 13.9247C9.412 13.8369 9.56281 13.8244 9.65078 13.8996C10.8824 14.9401 12.3779 15.617 13.999 15.617C15.6202 15.617 17.1282 14.9401 18.3472 13.8996C18.4352 13.8119 18.586 13.8244 18.6614 13.9247Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
  `,
  [C.MAIL]: (t) => `
<svg width="${t + 1}" height="${t}" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
}, Gt = {
  height: 44,
  borderRadius: 8
}, yn = (t) => (e) => {
  const n = t.lang || r.RUS, o = t.scheme || "light", i = t.borderRadius || Gt.borderRadius, s = t.height || Gt.height, d = s < 40 ? 24 : 28, h = s < 40 ? 6 : s < 48 ? 8 : 12, p = t.oauthList.map((b) => {
    const g = n === r.RUS ? zt[n][b] : `${zt[n].replace("{provider}", vn[b])}`;
    return `
      <div class="VkIdSdk_oauth_item" data-oauth="${b}">
        ${Sn[b](d)}
        <div class="VkIdSdk_oauth_button_text">${g}</div>
      </div>
    `;
  }).join(""), a = () => {
    var _;
    const b = document.querySelector(`#${e} .VkIdSdk_oauth_button_text`), g = document.querySelector(`#${e} .VkIdSdk_oauth_item`);
    if (!b || !g)
      return;
    b.clientWidth >= g.clientWidth - d * 2 - 32 - h * 2 && ((_ = document.querySelector(`#${e} .VkIdSdk_oauth_list`)) == null || _.removeAttribute("data-single-mode"));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : setTimeout(a, 0);
  const y = t.oauthList.length === 1 ? "data-single-mode" : "", c = bn[n];
  return `
    <div id="${e}" class="VkIdSdk_oauth_container" data-test-id="oauthList" data-scheme="${o}">
      <style>
        :root #${e}[data-scheme=light] {
          --oauthlist--item_border_color: rgba(0, 0, 0, .12);
          --oauthlist--color_text_secondary: #818c99;
          --oauthlist--color_text_primary: #000;
        }

        :root #${e}[data-scheme=dark] {
          --oauthlist--item_border_color: rgba(255, 255, 255, 0.12);
          --oauthlist--color_text_secondary: #76787a;
          --oauthlist--color_text_primary: #e1e3e6;
        }

        #${e}.VkIdSdk_oauth_container {
          position: relative;
        }

        #${e} .VkIdSdk_oauth_list {
          display: flex;
          height: ${s}px;
        }

        #${e} .VkIdSdk_oauth_item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: ${h}px;
          margin-right: 12px;
          width: 100%;
          border: 1px solid var(--oauthlist--item_border_color);
          border-radius: ${i}px;
          cursor: pointer;
        }

        #${e} .VkIdSdk_oauth_item:last-child {
          margin-right: 0;
        }

        #${e} .VkIdSdk_oauth_link_text {
          display: flex;
          font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
          color: var(--oauthlist--color_text_secondary);
          font-size: 13px;
          line-height: 16px;
          margin-bottom: 16px;
          justify-content: center;
          text-align: center;
        }

        #${e} .VkIdSdk_spinner {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: #fff;
        }

        #${e}[data-state=loaded] .VkIdSdk_spinner {
          transition: .2s;
          opacity: 0;
          pointer-events: none;
        }

        #${e} .VkIdSdk_spinner > svg {
          animation: vkIdSdkButtonSpinner 0.7s linear infinite;
        }

        #${e} .VkIdSdk_oauth_button_text {
          display: none;
          font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
          color: var(--oauthlist--color_text_primary);
        }

        #${e} .VkIdSdk_oauth_list[data-single-mode] .VkIdSdk_oauth_item svg {
          position: absolute;
          left: 16px;
        }

        #${e} .VkIdSdk_oauth_list[data-single-mode] .VkIdSdk_oauth_button_text {
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
        ${mn}
      </div>
      <div class="VkIdSdk_oauth_link_text">${c}</div>
      <div class="VkIdSdk_oauth_list" ${y}>${p}</div>
    </div>
  `;
};
function En(t, e, n, o) {
  var i = arguments.length, s = i < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, n) : o, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, n, o);
  else for (var h = t.length - 1; h >= 0; h--) (d = t[h]) && (s = (i < 3 ? d(s) : i > 3 ? d(e, n, s) : d(e, n)) || s);
  return i > 3 && s && Object.defineProperty(e, n, s), s;
}
class z extends G {
  constructor() {
    super();
    u(this, "analytics");
    u(this, "providers");
    u(this, "flowSource");
    u(this, "uniqueSessionId");
    this.analytics = new gn(this.config);
  }
  sendStartAnalytics() {
    const n = new Set(this.providers);
    this.analytics.sendMultibrandingOauthAdded({
      screen: this.flowSource,
      fields: [
        {
          name: st.VK,
          value: (+n.has(C.VK)).toString()
        },
        {
          name: st.OK,
          value: (+n.has(C.OK)).toString()
        },
        {
          name: st.MAIL,
          value: (+n.has(C.MAIL)).toString()
        }
      ]
    }), n.has(C.VK) && this.analytics.sendVkButtonShow({
      screen: this.flowSource,
      isIcon: n.size > 1
    }), n.has(C.OK) && this.analytics.sendOkButtonShow({
      screen: this.flowSource,
      isIcon: n.size > 1
    }), n.has(C.MAIL) && this.analytics.sendMailButtonShow({
      screen: this.flowSource,
      isIcon: n.size > 1
    });
  }
  render(n) {
    var o, i;
    return this.lang = (n == null ? void 0 : n.lang) || r.RUS, this.scheme = (n == null ? void 0 : n.scheme) || nt.LIGHT, this.providers = n.oauthList, this.flowSource = (n == null ? void 0 : n.flowSource) || N.MULTIBRANDING, this.uniqueSessionId = (n == null ? void 0 : n.uniqueSessionId) || this.id, this.analytics.setUniqueSessionId(this.uniqueSessionId), this.templateRenderer = yn({
      lang: this.lang,
      oauthList: n.oauthList,
      height: (o = n.styles) == null ? void 0 : o.height,
      borderRadius: (i = n.styles) == null ? void 0 : i.borderRadius,
      scheme: this.scheme
    }), this.container = n.container, this.renderTemplate(), this.registerElements(), this.setState(H.LOADED), this.sendStartAnalytics(), this.elements.root.addEventListener("click", this.handleClick.bind(this)), this;
  }
  handleClick(n) {
    const o = n.target.closest("[data-oauth]");
    if (!o)
      return;
    const i = o.getAttribute("data-oauth"), s = {
      lang: this.lang,
      scheme: this.scheme,
      provider: i,
      statsFlowSource: P.MULTIBRANDING,
      uniqueSessionId: this.uniqueSessionId
    };
    switch (i) {
      case C.VK:
        this.analytics.sendVkButtonTap({
          screen: this.flowSource,
          isIcon: this.providers.length > 1
        }).finally(() => {
          z.auth.login(s).catch((d) => {
            this.events.emit($.ERROR, {
              code: U.AuthError,
              text: d.error
            });
          });
        });
        break;
      case C.OK:
        this.analytics.sendOkButtonTap({
          screen: this.flowSource,
          isIcon: this.providers.length > 1
        }).finally(() => {
          z.auth.login(s).catch((d) => {
            this.events.emit($.ERROR, {
              code: U.AuthError,
              text: d.error
            });
          });
        });
        break;
      case C.MAIL:
        this.analytics.sendMailButtonTap({
          screen: this.flowSource,
          isIcon: this.providers.length > 1
        }).finally(() => {
          z.auth.login(s).catch((d) => {
            this.events.emit($.ERROR, {
              code: U.AuthError,
              text: d.error
            });
          });
        });
        break;
    }
  }
}
En([
  ft({
    oauthList: [
      qe
    ]
  })
], z.prototype, "render", null);
const In = "s256", D = class D {
  constructor() {
    u(this, "dataService");
    u(this, "opener");
    u(this, "interval");
    u(this, "id", le());
    u(this, "analytics");
    u(this, "close", () => {
      this.opener && this.opener.close();
    });
    u(this, "handleMessage", ({ origin: e, source: n, data: o }) => {
      if (!(n !== this.opener || !this.opener || !Xe(e))) {
        if (this.unsubscribe(), o.payload.error) {
          this.dataService.sendAuthorizationFailed(o.payload.error);
          return;
        }
        if (o.action === We + K()) {
          K() !== o.payload.state ? this.dataService.sendStateMismatchError() : this.dataService.sendSuccessData(o.payload);
          return;
        }
        this.dataService.sendEventNotSupported();
      }
    });
    u(this, "handleInterval", () => {
      var e;
      (e = this.opener) != null && e.closed && (this.unsubscribe(), this.dataService.sendNewTabHasBeenClosed());
    });
    u(this, "subscribe", () => {
      this.interval = window.setInterval(this.handleInterval, 1e3), window.addEventListener("message", this.handleMessage), this.dataService.removeCallback();
    });
    u(this, "unsubscribe", () => {
      window.removeEventListener("message", this.handleMessage), clearInterval(this.interval), this.dataService.setCallback(this.close);
    });
    u(this, "loginInNewTab", (e) => (this.dataService = new ze(), this.opener = window.open(e, "_blank"), this.opener ? this.subscribe() : this.dataService.sendCannotCreateNewTab(), this.dataService.value.then((n) => {
      Pt(), D.config.update({
        state: D.config.get().state
      }), this.redirectWithPayload(n);
    })));
    u(this, "loginByRedirect", (e) => (location.assign(e), Promise.resolve()));
    u(this, "login", (e) => {
      const n = D.config.get(), { scope: o, app: i, codeChallenge: s, prompt: d } = n, h = (e == null ? void 0 : e.statsFlowSource) || P.AUTH, p = (e == null ? void 0 : e.uniqueSessionId) || this.id;
      h === P.AUTH && this.analytics.setUniqueSessionId(p), At(n.codeVerifier), K(n.state);
      const a = [
        ...d
      ];
      Object.values(Vt).includes(e == null ? void 0 : e.provider) && a.unshift(lt.Login);
      const c = {
        lang_id: e == null ? void 0 : e.lang,
        scheme: e == null ? void 0 : e.scheme,
        code_challenge: s || cn(At()),
        code_challenge_method: In,
        client_id: i,
        response_type: Fe,
        scope: o,
        state: K(),
        provider: e == null ? void 0 : e.provider,
        prompt: a.join(" ").trim(),
        stats_info: ln({
          flow_source: h,
          session_id: p
        })
      };
      let b = Rt("authorize", c, n);
      return e != null && e.screen && (Object.assign(c, {
        oauth_version: 2,
        screen: e == null ? void 0 : e.screen,
        redirect_state: K()
      }), b = Rt("auth", c, n)), n.mode === ct.InNewTab ? (h === P.AUTH && this.analytics.sendCustomAuthStart(e == null ? void 0 : e.provider), c.origin = location.protocol + "//" + location.hostname, this.loginInNewTab(b)) : h === P.AUTH ? this.analytics.sendCustomAuthStart(e == null ? void 0 : e.provider).finally(() => {
        this.loginByRedirect(b);
      }) : this.loginByRedirect(b);
    });
    this.analytics = new De(D.config);
  }
  checkState(e) {
    if (K() !== e)
      return {
        code: V.StateMismatch,
        error: X[V.StateMismatch],
        state: e
      };
    Pt();
  }
  exchangeCode(e, n) {
    const o = D.config.get();
    K(o.state);
    const i = {
      grant_type: "authorization_code",
      redirect_uri: o.redirectUrl,
      client_id: o.app,
      code_verifier: At(),
      state: K(),
      device_id: n
    }, s = Y.stringify(i);
    return fetch(`https://${o.__vkidDomain}/oauth2/auth?${s}`, {
      method: "POST",
      body: new URLSearchParams({
        code: e
      })
    }).then((d) => this.oauthSectionFetchHandler(d)).then((d) => {
      const h = this.checkState(d.state);
      if (h)
        throw h;
      return He(), D.config.update({
        state: o.state,
        codeVerifier: o.codeVerifier
      }), d;
    });
  }
  refreshToken(e, n) {
    const o = D.config.get();
    K(o.state);
    const i = {
      grant_type: "refresh_token",
      redirect_uri: o.redirectUrl,
      client_id: o.app,
      device_id: n,
      state: K()
    }, s = Y.stringify(i);
    return fetch(`https://${o.__vkidDomain}/oauth2/auth?${s}`, {
      method: "POST",
      body: new URLSearchParams({
        refresh_token: e
      })
    }).then((d) => this.oauthSectionFetchHandler(d)).then((d) => {
      const h = this.checkState(d.state);
      if (h)
        throw h;
      return D.config.update({
        state: o.state
      }), d;
    });
  }
  logout(e) {
    const n = D.config.get(), o = {
      client_id: n.app
    }, i = Y.stringify(o);
    return fetch(`https://${n.__vkidDomain}/oauth2/logout?${i}`, {
      method: "POST",
      body: new URLSearchParams({
        access_token: e
      })
    }).then((s) => this.oauthSectionFetchHandler(s));
  }
  userInfo(e) {
    const n = D.config.get(), o = {
      client_id: n.app
    }, i = Y.stringify(o);
    return fetch(`https://${n.__vkidDomain}/oauth2/user_info?${i}`, {
      method: "POST",
      body: new URLSearchParams({
        access_token: e
      })
    }).then((s) => this.oauthSectionFetchHandler(s));
  }
  publicInfo(e) {
    const n = D.config.get(), o = {
      client_id: n.app
    }, i = Y.stringify(o);
    return fetch(`https://${n.__vkidDomain}/oauth2/public_info?${i}`, {
      method: "POST",
      body: new URLSearchParams({
        id_token: e
      })
    }).then((s) => this.oauthSectionFetchHandler(s));
  }
  oauthSectionFetchHandler(e) {
    return e.json().then((n) => {
      if ("error" in n)
        throw n;
      return n;
    });
  }
  redirectWithPayload(e) {
    location.assign(ce(e, D.config));
  }
};
/**
* @ignore
*/
u(D, "config");
let bt = D;
class kn {
  constructor(e) {
    u(this, "registrationStatsCollector");
    u(this, "uniqueSessionId");
    const n = new q(e), o = new ht(n);
    this.registrationStatsCollector = new Et(o);
  }
  setUniqueSessionId(e) {
    this.uniqueSessionId = e;
  }
  getFields() {
    const e = [
      {
        name: "sdk_type",
        value: "vkid"
      }
    ];
    return this.uniqueSessionId && e.push({
      name: "unique_session_id",
      value: this.uniqueSessionId
    }), e;
  }
  sendFrameLoadingFailed() {
    this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "iframe_loading_failed",
      fields: this.getFields()
    });
  }
  sendNoSessionFound() {
    this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "no_session_found",
      fields: this.getFields()
    });
  }
  sendOneTapButtonNoUserShow(e = "default") {
    this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "onetap_button_no_user_show",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: e
        }
      ]
    });
  }
  sendOneTapButtonNoUserTap(e = "default") {
    return this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "onetap_button_no_user_tap",
      fields: [
        ...this.getFields(),
        {
          name: "button_type",
          value: e
        }
      ]
    });
  }
  sendScreenProceed() {
    this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "screen_proceed",
      fields: this.getFields()
    });
  }
}
var ue = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var o = -1;
    return e.some(function(i, s) {
      return i[0] === n ? (o = s, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(n) {
        var o = t(this.__entries__, n), i = this.__entries__[o];
        return i && i[1];
      }, e.prototype.set = function(n, o) {
        var i = t(this.__entries__, n);
        ~i ? this.__entries__[i][1] = o : this.__entries__.push([n, o]);
      }, e.prototype.delete = function(n) {
        var o = this.__entries__, i = t(o, n);
        ~i && o.splice(i, 1);
      }, e.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var i = 0, s = this.__entries__; i < s.length; i++) {
          var d = s[i];
          n.call(o, d[1], d[0]);
        }
      }, e;
    }()
  );
}(), xt = typeof window < "u" && typeof document < "u" && window.document === document, mt = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), An = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(mt) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Cn = 2;
function wn(t, e) {
  var n = !1, o = !1, i = 0;
  function s() {
    n && (n = !1, t()), o && h();
  }
  function d() {
    An(s);
  }
  function h() {
    var p = Date.now();
    if (n) {
      if (p - i < Cn)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(d, e);
    i = p;
  }
  return h;
}
var Tn = 20, On = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Rn = typeof MutationObserver < "u", Vn = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = wn(this.refresh.bind(this), Tn);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var n = this.observers_, o = n.indexOf(e);
      ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return e.forEach(function(n) {
        return n.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !xt || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Rn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !xt || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, o = n === void 0 ? "" : n, i = On.some(function(s) {
        return !!~o.indexOf(s);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), he = function(t, e) {
  for (var n = 0, o = Object.keys(e); n < o.length; n++) {
    var i = o[n];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, ot = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || mt;
}, fe = It(0, 0, 0, 0);
function St(t) {
  return parseFloat(t) || 0;
}
function jt(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(o, i) {
    var s = t["border-" + i + "-width"];
    return o + St(s);
  }, 0);
}
function xn(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, o = 0, i = e; o < i.length; o++) {
    var s = i[o], d = t["padding-" + s];
    n[s] = St(d);
  }
  return n;
}
function $n(t) {
  var e = t.getBBox();
  return It(0, 0, e.width, e.height);
}
function Nn(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return fe;
  var o = ot(t).getComputedStyle(t), i = xn(o), s = i.left + i.right, d = i.top + i.bottom, h = St(o.width), p = St(o.height);
  if (o.boxSizing === "border-box" && (Math.round(h + s) !== e && (h -= jt(o, "left", "right") + s), Math.round(p + d) !== n && (p -= jt(o, "top", "bottom") + d)), !Dn(t)) {
    var a = Math.round(h + s) - e, y = Math.round(p + d) - n;
    Math.abs(a) !== 1 && (h -= a), Math.abs(y) !== 1 && (p -= y);
  }
  return It(i.left, i.top, h, p);
}
var Ln = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof ot(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof ot(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function Dn(t) {
  return t === ot(t).document.documentElement;
}
function Mn(t) {
  return xt ? Ln(t) ? $n(t) : Nn(t) : fe;
}
function Un(t) {
  var e = t.x, n = t.y, o = t.width, i = t.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, d = Object.create(s.prototype);
  return he(d, {
    x: e,
    y: n,
    width: o,
    height: i,
    top: n,
    right: e + o,
    bottom: i + n,
    left: e
  }), d;
}
function It(t, e, n, o) {
  return { x: t, y: e, width: n, height: o };
}
var Bn = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = It(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = Mn(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), Kn = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, n) {
      var o = Un(n);
      he(this, { target: e, contentRect: o });
    }
    return t;
  }()
), Pn = (
  /** @class */
  function() {
    function t(e, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new ue(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = o;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof ot(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new Bn(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof ot(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) && (n.delete(e), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && e.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
          return new Kn(o.target, o.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), _e = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ue(), pe = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Vn.getInstance(), o = new Pn(e, n, this);
      _e.set(this, o);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  pe.prototype[t] = function() {
    var e;
    return (e = _e.get(this))[t].apply(e, arguments);
  };
});
var Hn = function() {
  return typeof mt.ResizeObserver < "u" ? mt.ResizeObserver : pe;
}();
const Fn = (t) => {
  const e = (t - 30) / 2 + 3;
  return t < 40 ? e : e - 2;
}, Wn = (t) => t < 40 ? 14 : t > 47 ? 17 : 16, zn = (t) => t < 40 ? 24 : 28, Gn = "VK ID", jn = {
  [r.RUS]: "Войти c VK ID",
  [r.UKR]: "Увійти з VK ID",
  [r.BEL]: "Увайсці з VК ID",
  [r.KAZ]: "VK ID арқылы кіру",
  [r.UZB]: "VK ID dan kirish",
  [r.ENG]: "Sign in with VK ID",
  [r.SPA]: "Iniciar sesión con VK ID",
  [r.GERMAN]: "Mit VK-ID anmelden",
  [r.POL]: "Wejdź z VK ID",
  [r.FRA]: "Se connecter avec VK ID",
  [r.TURKEY]: "VK ID aracılığıyla gir"
}, qn = {
  [r.RUS]: "Продолжить",
  [r.UKR]: "Продовжити",
  [r.BEL]: "Працягнуць",
  [r.KAZ]: "Жалғастыру",
  [r.UZB]: "Davom etish",
  [r.ENG]: "Continue",
  [r.SPA]: "Continuar",
  [r.GERMAN]: "Fortfahren",
  [r.POL]: "Kontynuuj",
  [r.FRA]: "Continuer",
  [r.TURKEY]: "Devam"
}, Zn = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="logoBg" fill-rule="evenodd" clip-rule="evenodd" d="M4.2653 4.2653C3 5.5306 3 7.56707 3 11.64V12.36C3 16.4329 3 18.4694 4.2653 19.7347C5.5306 21 7.56706 21 11.64 21H12.36C16.4329 21 18.4694 21 19.7347 19.7347C21 18.4694 21 16.4329 21 12.36V11.64C21 7.56707 21 5.5306 19.7347 4.2653C18.4694 3 16.4329 3 12.36 3H11.64C7.56706 3 5.5306 3 4.2653 4.2653Z" fill="white"/>
    <path id="logoIcon" d="M12.6095 16C8.55576 16 6.09636 13.1823 6 8.5H8.05309C8.1171 11.9395 9.67903 13.397 10.8764 13.6967V8.5H12.8439V11.4683C13.9988 11.3401 15.2076 9.98991 15.614 8.5H17.5505C17.2406 10.3321 15.9246 11.6823 14.9948 12.2392C15.9253 12.6895 17.4225 13.8682 18 16H15.8714C15.4219 14.5749 14.321 13.4712 12.8446 13.3213V16H12.6095Z" fill="#0077FF"/>
  </svg>
`, Yn = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`, Xn = ({ width: t, height: e, iframeHeight: n, borderRadius: o, login: i, skin: s, scheme: d, lang: h = r.RUS, renderOAuthList: p, providers: a, setStatsButtonType: y }) => (c) => {
  let b = 0, g = 0, k = 0, _ = 0;
  const S = qn[h], R = Gn, l = jn[h], f = 8, v = Fn(e), m = Wn(e), A = zn(e), E = document.createElement("div"), I = document.createElement("button");
  setTimeout(() => {
    I.classList.add(`VkIdWebSdk__button_animation_${c}`);
  }, 100), I.classList.add(`VkIdWebSdk__button_${c}`), I.classList.add(`VkIdWebSdk__button_reset_${c}`), i && (I.onclick = i);
  const w = document.createElement("span");
  w.classList.add(`VkIdWebSdk__button_in_${c}`);
  const x = document.createElement("span");
  x.classList.add(`VkIdWebSdk__button_content_${c}`);
  const L = document.createElement("span");
  L.classList.add(`VkIdWebSdk__button_logo_${c}`), L.innerHTML = Zn;
  const T = document.createElement("span");
  T.classList.add(`VkIdWebSdk__button_text_${c}`);
  const F = document.createElement("span");
  F.innerText = S;
  const M = document.createElement("span");
  M.innerText = l;
  const B = document.createElement("span");
  B.innerText = R;
  const j = document.createElement("span");
  j.classList.add(`VkIdWebSdk__button_spinner_${c}`), j.innerHTML = Yn;
  const Z = document.createElement("div");
  Z.classList.add(`VkIdWebSdk__oauthList_container_${c}`);
  const _t = (rt) => rt + 2 * f + 2 * v + 2 * A, Lt = () => {
    let rt = 0;
    const Dt = () => {
      const Ut = x.contains(T), be = T.contains(B), me = T.contains(M), pt = E.clientWidth;
      Ut && pt < b && (y("icon"), I.setAttribute("style", `width: ${e}px;`), T.remove(), j.remove()), !Ut && pt >= b && (I.removeAttribute("style"), x.appendChild(T), x.appendChild(j)), !be && pt < g && (T.style.width = `${k}px`, M.dataset.active = "", B.dataset.active = "true", setTimeout(() => {
        M.remove(), T.appendChild(B);
      }, rt)), !me && pt >= g && (T.style.width = `${_}px`, B.dataset.active = "", M.dataset.active = "true", setTimeout(() => {
        B.remove(), T.appendChild(M);
      }, rt)), y("default");
    };
    new Hn(Ee(Dt, 500)).observe(E);
    const Mt = document.getElementById(c);
    Mt && (Mt.appendChild(E), E.appendChild(I), a != null && a.length && (E.appendChild(Z), p({
      lang: h,
      scheme: d,
      container: Z,
      oauthList: a,
      styles: {
        borderRadius: o,
        height: e
      }
    })), I.appendChild(w), w.appendChild(x), x.appendChild(L), x.appendChild(T), x.appendChild(j), T.appendChild(F), T.appendChild(M), T.appendChild(B), k = B.clientWidth, _ = M.clientWidth, b = _t(F.clientWidth), g = _t(_), F.remove(), M.remove(), B.remove(), Dt(), rt = 250);
  };
  return document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Lt) : setTimeout(Lt, 0), `
<div id="${c}" data-test-id="oneTap" data-scheme="${d}" data-skin="${s}">
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
      width: ${t ? `${t}px` : "100%"};
      min-width: ${e}px;
    }

    #${c}[data-state=loaded] {
      height: ${n}px;
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
      padding: ${v}px;
      height: ${e}px;
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
      width: ${A}px;
      height: ${A}px;
    }

    #${c} .VkIdWebSdk__button_spinner_${c} > svg {
      position: absolute;
      right: ${v}px;
      animation: vkIdSdkButtonSpinner 0.7s linear infinite;
    }

    #${c} .VkIdWebSdk__button_text_${c} {
      font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
      font-weight: 500;
      font-size: ${m}px;
      transition: .2s;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    #${c} .VkIdWebSdk__button_text_${c} > span {
      opacity: 0;
      display: inline-block;
      padding: 0 ${f}px;
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
function Jn(t, e, n, o) {
  var i = arguments.length, s = i < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, n) : o, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, n, o);
  else for (var h = t.length - 1; h >= 0; h--) (d = t[h]) && (s = (i < 3 ? d(s) : i > 3 ? d(e, n, s) : d(e, n)) || s);
  return i > 3 && s && Object.defineProperty(e, n, s), s;
}
const wt = {
  width: 0,
  height: 44,
  borderRadius: 8
}, Qn = 12;
class it extends G {
  constructor() {
    super();
    u(this, "analytics");
    u(this, "vkidAppName", "button_one_tap_auth");
    u(this, "statsBtnType", null);
    u(this, "fastAuthDisabled");
    u(this, "setStatsButtonType", (n) => {
      this.statsBtnType || (this.statsBtnType = n, this.fastAuthDisabled && this.statsBtnType && this.analytics.sendOneTapButtonNoUserShow(this.statsBtnType));
    });
    this.analytics = new kn(it.config);
  }
  onBridgeMessageHandler(n) {
    var o, i;
    switch (n.handler) {
      case W.LOGIN_SUCCESS: {
        const s = n.params;
        this.redirectWithPayload(s);
        break;
      }
      case W.SHOW_FULL_AUTH: {
        const s = n.params, d = {};
        s.screen && (d.screen = s.screen), s.sdk_oauth && (d.provider = s.sdk_oauth, d.statsFlowSource = P.MULTIBRANDING), this.openFullAuth(d);
        break;
      }
      case W.NOT_AUTHORIZED: {
        this.analytics.sendNoSessionFound(), this.setState(H.NOT_LOADED), clearTimeout(this.timeoutTimer), (i = (o = this.elements) == null ? void 0 : o.iframe) == null || i.remove();
        break;
      }
      case W.AUTHENTICATION_INFO: {
        this.events.emit(W.AUTHENTICATION_INFO, n.params);
        break;
      }
      default: {
        super.onBridgeMessageHandler(n);
        break;
      }
    }
  }
  onErrorHandler(n) {
    this.analytics.sendFrameLoadingFailed(), this.statsBtnType && this.analytics.sendOneTapButtonNoUserShow(this.statsBtnType), super.onErrorHandler(n);
  }
  openFullAuth(n) {
    const o = {
      statsFlowSource: P.BUTTON_ONE_TAP,
      ...n,
      uniqueSessionId: this.id,
      lang: this.lang,
      scheme: this.scheme
    };
    it.auth.login(o).catch((i) => {
      this.events.emit($.ERROR, {
        code: U.AuthError,
        text: i.error
      });
    });
  }
  login(n) {
    this.statsBtnType && this.analytics.sendOneTapButtonNoUserTap(this.statsBtnType).finally(() => {
      this.openFullAuth(n);
    });
  }
  renderOAuthList(n) {
    if (!n.oauthList.length)
      return;
    new z().render({
      ...n,
      flowSource: N.NOWHERE,
      uniqueSessionId: this.id
    });
  }
  render(n) {
    var s, d, h;
    this.lang = (n == null ? void 0 : n.lang) || r.RUS, this.scheme = (n == null ? void 0 : n.scheme) || nt.LIGHT, this.fastAuthDisabled = n.fastAuthEnabled === !1;
    const o = (n.oauthList || []).filter((p) => p !== C.VK), i = {
      style_height: ((s = n.styles) == null ? void 0 : s.height) || wt.height,
      style_border_radius: ((d = n.styles) == null ? void 0 : d.borderRadius) || wt.borderRadius,
      show_alternative_login: n != null && n.showAlternativeLogin ? 1 : 0,
      button_skin: n.skin || "primary",
      scheme: this.scheme,
      lang_id: this.lang,
      providers: o.join(","),
      uuid: this.id
    };
    return this.analytics.setUniqueSessionId(this.id), this.templateRenderer = Xn({
      width: ((h = n.styles) == null ? void 0 : h.width) || wt.width,
      iframeHeight: i.show_alternative_login ? i.style_height * 2 + Qn : i.style_height,
      height: i.style_height,
      borderRadius: i.style_border_radius,
      login: this.login.bind(this),
      skin: i.button_skin,
      scheme: i.scheme,
      lang: i.lang_id,
      renderOAuthList: this.renderOAuthList.bind(this),
      providers: o,
      setStatsButtonType: this.setStatsButtonType.bind(this)
    }), this.analytics.sendScreenProceed(), this.fastAuthDisabled && (i.fastAuthDisabled = !0), super.render({
      container: n.container,
      ...i
    });
  }
}
Jn([
  ft({
    styles: [
      je
    ]
  })
], it.prototype, "render", null);
var $t;
(function(t) {
  t.Primary = "primary", t.Secondary = "secondary";
})($t || ($t = {}));
var O;
(function(t) {
  t[t.SIGN_IN_TO_SERVICE = 0] = "SIGN_IN_TO_SERVICE", t[t.SIGN_IN_TO_ACCOUNT = 1] = "SIGN_IN_TO_ACCOUNT", t[t.REGISTRATION_FOR_EVENT = 2] = "REGISTRATION_FOR_EVENT", t[t.SUBMIT_APPLICATIONS = 3] = "SUBMIT_APPLICATIONS", t[t.MAKE_ORDER_WITH_SERVICE = 4] = "MAKE_ORDER_WITH_SERVICE", t[t.MAKE_ORDER_WITHOUT_SERVICE = 5] = "MAKE_ORDER_WITHOUT_SERVICE";
})(O || (O = {}));
const to = {
  [O.SIGN_IN_TO_SERVICE]: "service_sign_in",
  [O.REGISTRATION_FOR_EVENT]: "event_reg",
  [O.SUBMIT_APPLICATIONS]: "request",
  [O.MAKE_ORDER_WITH_SERVICE]: "service_order_placing",
  [O.MAKE_ORDER_WITHOUT_SERVICE]: "vkid_order_placing",
  [O.SIGN_IN_TO_ACCOUNT]: "account_sign_in"
};
class eo {
  constructor(e) {
    u(this, "registrationStatsCollector");
    u(this, "uniqueSessionId");
    const n = new q(e), o = new ht(n);
    this.registrationStatsCollector = new Et(o);
  }
  setUniqueSessionId(e) {
    this.uniqueSessionId = e;
  }
  getFields() {
    const e = [
      {
        name: "sdk_type",
        value: "vkid"
      }
    ];
    return this.uniqueSessionId && e.push({
      name: "unique_session_id",
      value: this.uniqueSessionId
    }), e;
  }
  sendScreenProcessed(e) {
    this.registrationStatsCollector.logEvent(N.NOWHERE, {
      event_type: "screen_proceed",
      screen_to: N.FLOATING_ONE_TAP,
      fields: [
        ...this.getFields(),
        {
          name: "theme_type",
          value: e.scheme
        },
        {
          name: "language",
          value: e.lang.toString()
        },
        {
          name: "text_type",
          value: to[e.contentId]
        }
      ]
    });
  }
  sendIframeLoadingFailed() {
    this.registrationStatsCollector.logEvent(N.FLOATING_ONE_TAP, {
      event_type: "iframe_loading_failed",
      fields: this.getFields()
    });
  }
  sendNoUserButtonShow() {
    this.registrationStatsCollector.logEvent(N.FLOATING_ONE_TAP, {
      event_type: "no_user_button_show",
      fields: this.getFields()
    });
  }
  sendNoUserButtonTap() {
    return this.registrationStatsCollector.logEvent(N.FLOATING_ONE_TAP, {
      event_type: "no_user_button_tap",
      fields: this.getFields()
    });
  }
}
var at;
(function(t) {
  t.LOGIN_SUCCESS = "floatingonetap: success login", t.SHOW_FULL_AUTH = "floatingonetap: show full auth", t.START_AUTHORIZE = "floatingonetap: start authorize", t.NOT_AUTHORIZED = "floatingonetap: not authorized";
})(at || (at = {}));
const Tt = {
  [r.RUS]: "Войти c VK ID",
  [r.UKR]: "Увійти з VK ID",
  [r.BEL]: "Увайсці з VK ID",
  [r.KAZ]: "VK ID арқылы кіру",
  [r.UZB]: "VK ID yordamida kirish",
  [r.ENG]: "Sign in with VK ID",
  [r.SPA]: "Iniciar sesión con VK ID",
  [r.GERMAN]: "Mit VK-ID anmelden",
  [r.POL]: "Wejdź z VK ID",
  [r.FRA]: "Se connecter avec VK ID",
  [r.TURKEY]: "VK ID aracılığıyla gir"
}, qt = {
  [r.RUS]: "Оформить с VK ID",
  [r.UKR]: "Оформити з VK ID",
  [r.BEL]: "Аформіць з VK ID",
  [r.KAZ]: "VK ID арқылы рәсімдеу",
  [r.UZB]: "VK ID yordamida shakllantirish",
  [r.ENG]: "Order with VK ID",
  [r.SPA]: "Pedir con VK ID",
  [r.GERMAN]: "Mit VK-ID bestellen",
  [r.POL]: "Wypełnij z VK ID",
  [r.FRA]: "Commander avec VK ID",
  [r.TURKEY]: "VK ID aracılığıyla oluştur"
}, no = (t, e) => {
  switch (t) {
    case O.SIGN_IN_TO_SERVICE:
    case O.SIGN_IN_TO_ACCOUNT:
    case O.REGISTRATION_FOR_EVENT:
    case O.SUBMIT_APPLICATIONS:
      return Tt[e] || Tt[r.RUS];
    case O.MAKE_ORDER_WITH_SERVICE:
    case O.MAKE_ORDER_WITHOUT_SERVICE:
      return qt[e] || qt[r.RUS];
    default:
      return Tt[r.RUS];
  }
}, Zt = {
  [r.RUS]: "Войдите в сервис или зарегистрируйтесь",
  [r.UKR]: "Увійдіть у сервіс або зареєструйтеся",
  [r.BEL]: "Увайдзіце ў сэрвіс ці зарэгіструйцеся",
  [r.KAZ]: "Сервиске кіріңіз немесе тіркеліңіз",
  [r.UZB]: "Xizmatga kiring va ro‘yxatdan o‘ting",
  [r.ENG]: "Sign in to service or sign up",
  [r.SPA]: "Acceder al servicio o registrarse",
  [r.GERMAN]: "Melden Sie sich beim Dienst an oder registrieren Sie sich",
  [r.POL]: "Wejdź do serwisu lub zarejestruj się",
  [r.FRA]: "Connectez-vous au service ou inscrivez-vous",
  [r.TURKEY]: "Hizmete girin yada oturum oluşturun"
}, oo = {
  [r.RUS]: "Войдите в учётную запись {service}",
  [r.UKR]: "Увійдіть в обліковий запис {service}",
  [r.BEL]: "Увайдзіце ва ўліковы запіс {service}",
  [r.KAZ]: "{service} есептік жазбасына кіріңіз",
  [r.UZB]: "{service} hisobiga kiring",
  [r.ENG]: "Sign in to {service} account",
  [r.SPA]: "Acceder a la cuenta {service}",
  [r.GERMAN]: "Melden Sie sich bei Ihrem {service}-Konto an",
  [r.POL]: "Wejdź na rachunek {service}",
  [r.FRA]: "Connectez-vous à {service}",
  [r.TURKEY]: "{service} hesabına girin"
}, io = {
  [r.RUS]: "Зарегистрируйтесь на мероприятие",
  [r.UKR]: "Зареєструйтеся на захід",
  [r.BEL]: "Зарэгіструйцеся на мерапрыемства",
  [r.KAZ]: "Шараға тіркеліңіз",
  [r.UZB]: "Tadbirda ro‘yxatdan o‘ting",
  [r.ENG]: "Sign up for event",
  [r.SPA]: "Registrarse en el evento",
  [r.GERMAN]: "Melden Sie sich für die Veranstaltung an",
  [r.POL]: "Zarejestruj się na wydarzenie",
  [r.FRA]: "Inscrivez-vous à l'événement",
  [r.TURKEY]: "Eylemde kaydolun"
}, ro = {
  [r.RUS]: "Подайте заявку с VK ID",
  [r.UKR]: "Подайте запит з VK ID",
  [r.BEL]: "Падайце заяўку з VK ID",
  [r.KAZ]: "VK ID арқылы тапсырыс жасаңыз",
  [r.UZB]: "VK ID yordamida talabnoma berish",
  [r.ENG]: "Apply with VK ID",
  [r.SPA]: "Solicitar con VK ID",
  [r.GERMAN]: "Bewerben Sie mit VK-ID",
  [r.POL]: "Złóż wniosek z VK ID",
  [r.FRA]: "Envoyez une demande avec VK ID",
  [r.TURKEY]: "VK ID yardımıyla başvuru gönderin"
}, so = {
  [r.RUS]: "Оформите заказ в {service} с VK ID",
  [r.UKR]: "Оформіть замовлення в {service} з VK ID",
  [r.BEL]: "Аформіце заказ у {service} з VK ID",
  [r.KAZ]: "{service} сервисінде  VK ID арқылы тапсырыс жасаңыз",
  [r.UZB]: "VK ID orqali {service} da buyurtma shakllantirish",
  [r.ENG]: "Place order on {service} with VK ID",
  [r.SPA]: "Realizar pedido en {service} con VK ID",
  [r.GERMAN]: "Machen Sie eine Bestellung auf {service} mit VK-ID",
  [r.POL]: "Wypełnij zamówienie w {service} z VK ID",
  [r.FRA]: "Passez la commande sur {service} avec VK ID",
  [r.TURKEY]: "VK ID aracılığıyla {service} te sipariş oluşturun"
}, ao = {
  [r.RUS]: "Оформите заказ с VK ID",
  [r.UKR]: "Оформіть замовлення з VK ID",
  [r.BEL]: "Аформіце заказ з VK ID",
  [r.KAZ]: "VK ID арқылы тапсырыс жасаңыз",
  [r.UZB]: "VK ID orqali buyurtmani shakllantirish",
  [r.ENG]: "Place order with VK ID",
  [r.SPA]: "Realizar pedido con VK ID",
  [r.GERMAN]: "Machen Sie eine Bestellung mit VK-ID",
  [r.POL]: "Wypełnij zamówienie z VK ID",
  [r.FRA]: "Passez la commande avec VK ID",
  [r.TURKEY]: "VK ID aracılığıyla sipariş oluşturun"
}, co = (t, e, n) => {
  let o = Zt[r.RUS];
  switch (t) {
    case O.SIGN_IN_TO_SERVICE:
      o = Zt[e];
      break;
    case O.SIGN_IN_TO_ACCOUNT:
      o = oo[e];
      break;
    case O.REGISTRATION_FOR_EVENT:
      o = io[e];
      break;
    case O.SUBMIT_APPLICATIONS:
      o = ro[e];
      break;
    case O.MAKE_ORDER_WITH_SERVICE:
      o = so[e];
      break;
    case O.MAKE_ORDER_WITHOUT_SERVICE:
      o = ao[e];
      break;
  }
  return o.replace("{service}", n);
}, Yt = {
  [r.RUS]: "После этого вам станут доступны все возможности сервиса. Ваши данные будут надёжно защищены.",
  [r.UKR]: "Після цього вам стануть доступні всі можливості сервісу. Ваші дані будуть надійно захищені.",
  [r.BEL]: "Пасля гэтага вам стануць даступны ўсе магчымасці сэрвісу. Вашы даныя будуць надзейна абаронены.",
  [r.KAZ]: "Содан кейін сізге сервистің барлық мүмкіндігі қолжетімді болып, деректеріңіз сенімді қораулы болады.",
  [r.UZB]: "Bundan so‘ng, sizga xizmatning barcha imkoniyatlari ochiladi. Maʼlumotlaringiz ishonchli himoyalanadi.",
  [r.ENG]: "Afterwards, you'll have access to all of the service's features. Your personal data will be carefully protected.",
  [r.SPA]: "Después, tendrás acceso a todas las funciones del servicio. Tus datos personales estarán cuidadosamente protegidos.",
  [r.GERMAN]: "Anschließend stehen Ihnen alle Funktionen des Dienstes zur Verfügung. Ihre persönlichen Daten werden sorgfältig geschützt.",
  [r.POL]: "Po tym wszystkie funkcje serwisu będą dostępne. Twoje dane będą dobrze chronione.",
  [r.FRA]: "Cela vous permettra d'avoir accès à toutes les fonctionnalités du service. Vos données personnelles seront soigneusement protégées.",
  [r.TURKEY]: "Bundan sonra hizmetin tüm özellikleri kullanımınıza sunulacaktır. Verileriniz güvenilir bir şekilde korunacaktır."
}, lo = (t) => Yt[t] || Yt[r.RUS], uo = `
  <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 13H21.6479V3.5H20V13Z" fill="var(--floating--color_text_primary)"/>
    <path d="M23.7801 13H27.474C30.4127 13 32.5 11.0326 32.5 8.24326C32.5 5.46738 30.4127 3.5 27.474 3.5H23.7801V13ZM25.4279 11.5177V4.98227H27.474C29.4377 4.98227 30.7835 6.31631 30.7835 8.24326C30.7835 10.1837 29.4377 11.5177 27.474 11.5177H25.4279Z" fill="var(--floating--color_text_primary)"/>
    <path d="M0 7.68C0 4.05961 0 2.24942 1.12471 1.12471C2.24942 0 4.05961 0 7.68 0H8.32C11.9404 0 13.7506 0 14.8753 1.12471C16 2.24942 16 4.05961 16 7.68V8.32C16 11.9404 16 13.7506 14.8753 14.8753C13.7506 16 11.9404 16 8.32 16H7.68C4.05961 16 2.24942 16 1.12471 14.8753C0 13.7506 0 11.9404 0 8.32V7.68Z" fill="#0077FF"/>
    <path d="M8.56331 11.66C4.91665 11.66 2.83667 9.16 2.75 5H4.57666C4.63666 8.05333 5.9833 9.34333 7.04997 9.61V5H8.77002V7.63C9.82335 7.51667 10.9299 6.32 11.3032 5H13.0233C12.7366 6.62667 11.5366 7.82667 10.6833 8.32C11.5366 8.72 12.9033 9.76667 13.4233 11.66H11.5299C11.1233 10.3933 10.11 9.41333 8.77002 9.28V11.66H8.56331Z" fill="white"/>
  </svg>
`, ho = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2653 4.2653C3 5.5306 3 7.56707 3 11.64V12.36C3 16.4329 3 18.4694 4.2653 19.7347C5.5306 21 7.56706 21 11.64 21H12.36C16.4329 21 18.4694 21 19.7347 19.7347C21 18.4694 21 16.4329 21 12.36V11.64C21 7.56707 21 5.5306 19.7347 4.2653C18.4694 3 16.4329 3 12.36 3H11.64C7.56706 3 5.5306 3 4.2653 4.2653Z" fill="white"/>
    <path d="M12.6095 16C8.55576 16 6.09636 13.1823 6 8.5H8.05309C8.1171 11.9395 9.67903 13.397 10.8764 13.6967V8.5H12.8439V11.4683C13.9988 11.3401 15.2076 9.98991 15.614 8.5H17.5505C17.2406 10.3321 15.9246 11.6823 14.9948 12.2392C15.9253 12.6895 17.4225 13.8682 18 16H15.8714C15.4219 14.5749 14.321 13.4712 12.8446 13.3213V16H12.6095Z" fill="#0077FF"/>
  </svg>
`, fo = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71967 4.71969C5.01256 4.42679 5.48744 4.42679 5.78033 4.71969L10 8.93935L14.2197 4.71969C14.5126 4.42679 14.9874 4.42679 15.2803 4.71969C15.5732 5.01258 15.5732 5.48745 15.2803 5.78035L11.0607 10L15.2803 14.2197C15.5732 14.5126 15.5732 14.9875 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L10 11.0607L5.78033 15.2803C5.48744 15.5732 5.01256 15.5732 4.71967 15.2803C4.42678 14.9875 4.42678 14.5126 4.71967 14.2197L8.93934 10L4.71967 5.78035C4.42678 5.48745 4.42678 5.01258 4.71967 4.71969Z" fill="currentColor"/>
  </svg>
`, _o = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`, Xt = 12, Ot = (t) => !t || t <= Xt ? 0 : t - Xt, po = ({ scheme: t, indent: e, login: n, close: o, lang: i, contentId: s, appName: d, providers: h, renderOAuthList: p }) => (a) => {
  const y = co(s, i, d), c = lo(i), b = no(s, i), g = document.createElement("div");
  g.classList.add(`VkIdWebSdk__floating_${a}`);
  const k = document.createElement("div");
  k.classList.add(`VkIdWebSdk__floating_container_${a}`);
  const _ = document.createElement("div");
  _.classList.add(`VkIdWebSdk__floating_header_${a}`), _.innerHTML = uo;
  const S = document.createElement("span");
  S.classList.add(`VkIdWebSdk__floating_appName_${a}`), S.innerText = ` · ${d}`;
  const R = document.createElement("div");
  R.classList.add(`VkIdWebSdk__floating_close_${a}`);
  const l = document.createElement("button");
  l.classList.add(`VkIdWebSdk__floating_button_reset_${a}`), l.classList.add(`VkIdWebSdk__floating_close_btn_${a}`), l.innerHTML = fo, o && (l.onclick = o);
  const f = document.createElement("div");
  f.classList.add(`VkIdWebSdk__floating_content_${a}`);
  const v = document.createElement("div");
  v.classList.add(`VkIdWebSdk__floating_title_${a}`), v.innerText = y;
  const m = document.createElement("div");
  m.classList.add(`VkIdWebSdk__floating_description_${a}`), m.innerText = c;
  const A = document.createElement("div"), E = document.createElement("button");
  E.classList.add(`VkIdWebSdk__floating_button_reset_${a}`), E.classList.add(`VkIdWebSdk__floating_button_${a}`), n && (E.onclick = n);
  const I = document.createElement("div");
  I.classList.add(`VkIdWebSdk__floating_button_content_${a}`);
  const w = document.createElement("span");
  w.classList.add(`VkIdWebSdk__floating_button_logo_${a}`), w.innerHTML = ho;
  const x = document.createElement("span");
  x.classList.add(`VkIdWebSdk__floating_button_text_${a}`), x.innerText = b;
  const L = document.createElement("span");
  L.classList.add(`VkIdWebSdk__floating_button_spinner_${a}`), L.innerHTML = _o;
  const T = document.createElement("div");
  T.classList.add(`VkIdWebSdk__oauthList_container_${a}`);
  const F = () => {
    const M = document.getElementById(a);
    M && (M.appendChild(g), g.appendChild(k), k.appendChild(_), k.appendChild(f), k.appendChild(A), _.appendChild(R), _.appendChild(S), R.appendChild(l), f.appendChild(v), f.appendChild(m), A.appendChild(E), E.appendChild(I), I.appendChild(w), I.appendChild(x), I.appendChild(L), h != null && h.length && (k.appendChild(T), p({
      lang: i,
      scheme: t,
      container: T,
      oauthList: h,
      styles: {
        borderRadius: 8,
        height: 36
      }
    })));
  };
  return document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", F) : setTimeout(F, 0), `
<div id="${a}" data-test-id="floatingOneTap" data-scheme="${t}">
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
        bottom: ${Ot(e.bottom)}px;
        width: 100%;
        height: 340px;
      }
    }
    @media (min-width: 481px) {
      #${a} {
        top: ${Ot(e.top)}px;
        right: ${Ot(e.right)}px;
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
function go(t, e, n, o) {
  var i = arguments.length, s = i < 3 ? e : o === null ? o = Object.getOwnPropertyDescriptor(e, n) : o, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, n, o);
  else for (var h = t.length - 1; h >= 0; h--) (d = t[h]) && (s = (i < 3 ? d(s) : i > 3 ? d(e, n, s) : d(e, n)) || s);
  return i > 3 && s && Object.defineProperty(e, n, s), s;
}
const vo = {
  top: 12,
  right: 12,
  bottom: 12
};
class ut extends G {
  constructor() {
    super();
    u(this, "analytics");
    u(this, "vkidAppName", "floating_one_tap_auth");
    this.analytics = new eo(ut.config);
  }
  onBridgeMessageHandler(n) {
    switch (n.handler) {
      case at.LOGIN_SUCCESS: {
        const o = n.params;
        this.redirectWithPayload(o);
        break;
      }
      case at.SHOW_FULL_AUTH: {
        const o = n.params, i = {};
        o.screen && (i.screen = o.screen), o.sdk_oauth && (i.provider = o.sdk_oauth, i.statsFlowSource = P.MULTIBRANDING), this.openFullAuth(i);
        break;
      }
      case at.NOT_AUTHORIZED: {
        this.setState(H.NOT_LOADED), setTimeout(() => {
          this.setState(H.LOADED);
        }, 500), clearTimeout(this.timeoutTimer);
        break;
      }
      default: {
        super.onBridgeMessageHandler(n);
        break;
      }
    }
  }
  onErrorHandler(n) {
    this.analytics.sendIframeLoadingFailed(), this.analytics.sendNoUserButtonShow(), super.onErrorHandler(n);
  }
  openFullAuth(n) {
    const o = {
      statsFlowSource: P.FLOATING_ONE_TAP,
      ...n,
      uniqueSessionId: this.id,
      lang: this.lang,
      scheme: this.scheme
    };
    ut.auth.login(o).catch((i) => {
      this.events.emit($.ERROR, {
        code: U.AuthError,
        text: i.error
      });
    });
  }
  login(n) {
    this.analytics.sendNoUserButtonTap().finally(() => {
      this.openFullAuth(n);
    });
  }
  renderOAuthList(n) {
    if (!n.oauthList.length)
      return;
    new z().render({
      ...n,
      flowSource: N.FLOATING_ONE_TAP,
      uniqueSessionId: this.id
    });
  }
  render(n) {
    this.lang = (n == null ? void 0 : n.lang) || r.RUS, this.scheme = (n == null ? void 0 : n.scheme) || nt.LIGHT;
    const o = (n.oauthList || []).filter((s) => s !== C.VK), i = {
      scheme: this.scheme,
      lang_id: this.lang,
      show_alternative_login: n != null && n.showAlternativeLogin ? 1 : 0,
      content_id: (n == null ? void 0 : n.contentId) || O.SIGN_IN_TO_SERVICE,
      providers: o.join(","),
      uuid: this.id
    };
    return this.analytics.setUniqueSessionId(this.id), this.templateRenderer = po({
      login: this.login.bind(this),
      close: this.close.bind(this),
      scheme: this.scheme,
      lang: this.lang,
      indent: Object.assign(vo, n.indent || {}),
      contentId: i.content_id,
      appName: n.appName,
      renderOAuthList: this.renderOAuthList.bind(this),
      providers: o
    }), this.analytics.sendScreenProcessed({
      scheme: this.scheme,
      lang: this.lang,
      contentId: i.content_id
    }), n.fastAuthEnabled === !1 && (this.analytics.sendNoUserButtonShow(), i.fastAuthDisabled = !0), super.render({
      container: document.body,
      ...i
    });
  }
}
go([
  ft({
    appName: [
      vt
    ]
  })
], ut.prototype, "render", null);
const kt = new oe();
bt.config = kt;
const ge = new bt();
G.config = kt;
G.auth = ge;
const bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Auth: ge,
  get AuthErrorCode() {
    return V;
  },
  Config: kt,
  get ConfigAuthMode() {
    return ct;
  },
  FloatingOneTap: ut,
  get FloatingOneTapContentId() {
    return O;
  },
  get Languages() {
    return r;
  },
  OAuthList: z,
  get OAuthName() {
    return C;
  },
  OneTap: it,
  get OneTapSkin() {
    return $t;
  },
  get Prompt() {
    return lt;
  },
  get Scheme() {
    return nt;
  },
  get WidgetEvents() {
    return $;
  }
}, Symbol.toStringTag, { value: "Module" }));
console.log(bo);
kt.init({
  app: 51982623,
  redirectUrl: "https://financelabs.github.io/myworkbook/",
  state: "state",
  codeVerifier: "codeVerifier",
  scope: "phone email"
});
const ve = new it();
console.log(ve);
const Jt = document.getElementById("VkIdSdkOneTap");
Jt && ve.render({ container: Jt }).on($.ERROR, console.error);
//# sourceMappingURL=editfirenodewithvkauth.js.map