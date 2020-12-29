!function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.returnExports = e()
}(this, function () {
    "use strict";
    var t, e = Function.call.bind(Function.apply), r = Function.call.bind(Function.call), n = Array.isArray,
        o = Object.keys, i = function (t) {
            return function () {
                return !e(t, this, arguments)
            }
        }, a = function (t) {
            try {
                return t(), !1
            } catch (e) {
                return !0
            }
        }, u = function (t) {
            try {
                return t()
            } catch (e) {
                return !1
            }
        }, c = i(a), s = function () {
            return !a(function () {
                return Object.defineProperty({}, "x", {
                    get: function () {
                    }
                })
            })
        }, f = !!Object.defineProperty && s(), p = "foo" === function () {
        }.name, l = Function.call.bind(Array.prototype.forEach), y = Function.call.bind(Array.prototype.reduce),
        h = Function.call.bind(Array.prototype.filter), v = Function.call.bind(Array.prototype.some),
        b = function (t, e, r, n) {
            !n && e in t || (f ? Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: r
            }) : t[e] = r)
        }, g = function (t, e, r) {
            l(o(e), function (n) {
                var o = e[n];
                b(t, n, o, !!r)
            })
        }, d = Function.call.bind(Object.prototype.toString), O = "function" == typeof /abc/ ? function (t) {
            return "function" == typeof t && "[object Function]" === d(t)
        } : function (t) {
            return "function" == typeof t
        }, m = {
            getter: function (t, e, r) {
                if (!f) throw new TypeError("getters require true ES5 support");
                Object.defineProperty(t, e, {configurable: !0, enumerable: !1, get: r})
            }, proxy: function (t, e, r) {
                if (!f) throw new TypeError("getters require true ES5 support");
                var n = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(r, e, {
                    configurable: n.configurable, enumerable: n.enumerable, get: function () {
                        return t[e]
                    }, set: function (r) {
                        t[e] = r
                    }
                })
            }, redefine: function (t, e, r) {
                if (f) {
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    n.value = r, Object.defineProperty(t, e, n)
                } else t[e] = r
            }, defineByDescriptor: function (t, e, r) {
                f ? Object.defineProperty(t, e, r) : "value" in r && (t[e] = r.value)
            }, preserveToString: function (t, e) {
                e && O(e.toString) && b(t, "toString", e.toString.bind(e), !0)
            }
        }, w = Object.create || function (t, e) {
            var r = function () {
            };
            r.prototype = t;
            var n = new r;
            return "undefined" != typeof e && o(e).forEach(function (t) {
                m.defineByDescriptor(n, t, e[t])
            }), n
        }, j = function (t, e) {
            return !!Object.setPrototypeOf && u(function () {
                var r = function n(e) {
                    var r = new t(e);
                    return Object.setPrototypeOf(r, n.prototype), r
                };
                return Object.setPrototypeOf(r, t), r.prototype = w(t.prototype, {constructor: {value: r}}), e(r)
            })
        }, S = function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("unable to locate global object")
        }, T = S(), I = T.isFinite, E = Function.call.bind(String.prototype.indexOf),
        P = Function.apply.bind(Array.prototype.indexOf), C = Function.call.bind(Array.prototype.concat),
        M = Function.call.bind(String.prototype.slice), x = Function.call.bind(Array.prototype.push),
        N = Function.apply.bind(Array.prototype.push), A = Function.call.bind(Array.prototype.shift), _ = Math.max,
        R = Math.min, k = Math.floor, L = Math.abs, F = Math.exp, D = Math.log, z = Math.sqrt,
        q = Function.call.bind(Object.prototype.hasOwnProperty), G = function () {
        }, H = T.Map, W = H && H.prototype["delete"], V = H && H.prototype.get, B = H && H.prototype.has,
        $ = H && H.prototype.set, U = T.Symbol || {}, J = U.species || "@@species", X = Number.isNaN || function (t) {
            return t !== t
        }, Z = Number.isFinite || function (t) {
            return "number" == typeof t && I(t)
        }, Y = O(Math.sign) ? Math.sign : function (t) {
            var e = Number(t);
            return 0 === e ? e : X(e) ? e : e < 0 ? -1 : 1
        }, K = function (t) {
            var e = Number(t);
            return e < -1 || X(e) ? NaN : 0 === e || e === 1 / 0 ? e : e === -1 ? -(1 / 0) : 1 + e - 1 === 0 ? e : e * (D(1 + e) / (1 + e - 1))
        }, Q = function (t) {
            return "[object Arguments]" === d(t)
        }, tt = function (t) {
            return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Array]" !== d(t) && "[object Function]" === d(t.callee)
        }, et = Q(arguments) ? Q : tt, rt = {
            primitive: function (t) {
                return null === t || "function" != typeof t && "object" != typeof t
            }, string: function (t) {
                return "[object String]" === d(t)
            }, regex: function (t) {
                return "[object RegExp]" === d(t)
            }, symbol: function (t) {
                return "function" == typeof T.Symbol && "symbol" == typeof t
            }
        }, nt = function (t, e, r) {
            var n = t[e];
            b(t, e, r, !0), m.preserveToString(t[e], n)
        }, ot = "function" == typeof U && "function" == typeof U["for"] && rt.symbol(U()),
        it = rt.symbol(U.iterator) ? U.iterator : "_es6-shim iterator_";
    T.Set && "function" == typeof (new T.Set)["@@iterator"] && (it = "@@iterator"), T.Reflect || b(T, "Reflect", {}, !0);
    var at = T.Reflect, ut = String, ct = "undefined" != typeof document && document ? document.all : null,
        st = null == ct ? function (t) {
            return null == t
        } : function (t) {
            return null == t && t !== ct
        }, ft = {
            Call: function (t, r) {
                var n = arguments.length > 2 ? arguments[2] : [];
                if (!ft.IsCallable(t)) throw new TypeError(t + " is not a function");
                return e(t, r, n)
            }, RequireObjectCoercible: function (t, e) {
                if (st(t)) throw new TypeError(e || "Cannot call method on " + t);
                return t
            }, TypeIsObject: function (t) {
                return void 0 !== t && null !== t && t !== !0 && t !== !1 && ("function" == typeof t || "object" == typeof t || t === ct)
            }, ToObject: function (t, e) {
                return Object(ft.RequireObjectCoercible(t, e))
            }, IsCallable: O, IsConstructor: function (t) {
                return ft.IsCallable(t)
            }, ToInt32: function (t) {
                return ft.ToNumber(t) >> 0
            }, ToUint32: function (t) {
                return ft.ToNumber(t) >>> 0
            }, ToNumber: function (t) {
                if ("[object Symbol]" === d(t)) throw new TypeError("Cannot convert a Symbol value to a number");
                return +t
            }, ToInteger: function (t) {
                var e = ft.ToNumber(t);
                return X(e) ? 0 : 0 !== e && Z(e) ? (e > 0 ? 1 : -1) * k(L(e)) : e
            }, ToLength: function (t) {
                var e = ft.ToInteger(t);
                return e <= 0 ? 0 : e > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : e
            }, SameValue: function (t, e) {
                return t === e ? 0 !== t || 1 / t === 1 / e : X(t) && X(e)
            }, SameValueZero: function (t, e) {
                return t === e || X(t) && X(e)
            }, IsIterable: function (t) {
                return ft.TypeIsObject(t) && ("undefined" != typeof t[it] || et(t))
            }, GetIterator: function (e) {
                if (et(e)) return new t(e, "value");
                var r = ft.GetMethod(e, it);
                if (!ft.IsCallable(r)) throw new TypeError("value is not an iterable");
                var n = ft.Call(r, e);
                if (!ft.TypeIsObject(n)) throw new TypeError("bad iterator");
                return n
            }, GetMethod: function (t, e) {
                var r = ft.ToObject(t)[e];
                if (!st(r)) {
                    if (!ft.IsCallable(r)) throw new TypeError("Method not callable: " + e);
                    return r
                }
            }, IteratorComplete: function (t) {
                return !!t.done
            }, IteratorClose: function (t, e) {
                var r = ft.GetMethod(t, "return");
                if (void 0 !== r) {
                    var n, o;
                    try {
                        n = ft.Call(r, t)
                    } catch (i) {
                        o = i
                    }
                    if (!e) {
                        if (o) throw o;
                        if (!ft.TypeIsObject(n)) throw new TypeError("Iterator's return method returned a non-object.")
                    }
                }
            }, IteratorNext: function (t) {
                var e = arguments.length > 1 ? t.next(arguments[1]) : t.next();
                if (!ft.TypeIsObject(e)) throw new TypeError("bad iterator");
                return e
            }, IteratorStep: function (t) {
                var e = ft.IteratorNext(t), r = ft.IteratorComplete(e);
                return !r && e
            }, Construct: function (t, e, r, n) {
                var o = "undefined" == typeof r ? t : r;
                if (!n && at.construct) return at.construct(t, e, o);
                var i = o.prototype;
                ft.TypeIsObject(i) || (i = Object.prototype);
                var a = w(i), u = ft.Call(t, a, e);
                return ft.TypeIsObject(u) ? u : a
            }, SpeciesConstructor: function (t, e) {
                var r = t.constructor;
                if (void 0 === r) return e;
                if (!ft.TypeIsObject(r)) throw new TypeError("Bad constructor");
                var n = r[J];
                if (st(n)) return e;
                if (!ft.IsConstructor(n)) throw new TypeError("Bad @@species");
                return n
            }, CreateHTML: function (t, e, r, n) {
                var o = ft.ToString(t), i = "<" + e;
                if ("" !== r) {
                    var a = ft.ToString(n), u = a.replace(/"/g, "&quot;");
                    i += " " + r + '="' + u + '"'
                }
                var c = i + ">", s = c + o;
                return s + "</" + e + ">"
            }, IsRegExp: function (t) {
                if (!ft.TypeIsObject(t)) return !1;
                var e = t[U.match];
                return "undefined" != typeof e ? !!e : rt.regex(t)
            }, ToString: function (t) {
                return ut(t)
            }
        };
    if (f && ot) {
        var pt = function (t) {
            if (rt.symbol(U[t])) return U[t];
            var e = U["for"]("Symbol." + t);
            return Object.defineProperty(U, t, {configurable: !1, enumerable: !1, writable: !1, value: e}), e
        };
        if (!rt.symbol(U.search)) {
            var lt = pt("search"), yt = String.prototype.search;
            b(RegExp.prototype, lt, function (t) {
                return ft.Call(yt, t, [this])
            });
            var ht = function (t) {
                var e = ft.RequireObjectCoercible(this);
                if (!st(t)) {
                    var r = ft.GetMethod(t, lt);
                    if ("undefined" != typeof r) return ft.Call(r, t, [e])
                }
                return ft.Call(yt, e, [ft.ToString(t)])
            };
            nt(String.prototype, "search", ht)
        }
        if (!rt.symbol(U.replace)) {
            var vt = pt("replace"), bt = String.prototype.replace;
            b(RegExp.prototype, vt, function (t, e) {
                return ft.Call(bt, t, [this, e])
            });
            var gt = function (t, e) {
                var r = ft.RequireObjectCoercible(this);
                if (!st(t)) {
                    var n = ft.GetMethod(t, vt);
                    if ("undefined" != typeof n) return ft.Call(n, t, [r, e])
                }
                return ft.Call(bt, r, [ft.ToString(t), e])
            };
            nt(String.prototype, "replace", gt)
        }
        if (!rt.symbol(U.split)) {
            var dt = pt("split"), Ot = String.prototype.split;
            b(RegExp.prototype, dt, function (t, e) {
                return ft.Call(Ot, t, [this, e])
            });
            var mt = function (t, e) {
                var r = ft.RequireObjectCoercible(this);
                if (!st(t)) {
                    var n = ft.GetMethod(t, dt);
                    if ("undefined" != typeof n) return ft.Call(n, t, [r, e])
                }
                return ft.Call(Ot, r, [ft.ToString(t), e])
            };
            nt(String.prototype, "split", mt)
        }
        var wt = rt.symbol(U.match), jt = wt && function () {
            var t = {};
            return t[U.match] = function () {
                return 42
            }, 42 !== "a".match(t)
        }();
        if (!wt || jt) {
            var St = pt("match"), Tt = String.prototype.match;
            b(RegExp.prototype, St, function (t) {
                return ft.Call(Tt, t, [this])
            });
            var It = function (t) {
                var e = ft.RequireObjectCoercible(this);
                if (!st(t)) {
                    var r = ft.GetMethod(t, St);
                    if ("undefined" != typeof r) return ft.Call(r, t, [e])
                }
                return ft.Call(Tt, e, [ft.ToString(t)])
            };
            nt(String.prototype, "match", It)
        }
    }
    var Et = function (t, e, r) {
        m.preserveToString(e, t), Object.setPrototypeOf && Object.setPrototypeOf(t, e), f ? l(Object.getOwnPropertyNames(t), function (n) {
            n in G || r[n] || m.proxy(t, n, e)
        }) : l(Object.keys(t), function (n) {
            n in G || r[n] || (e[n] = t[n])
        }), e.prototype = t.prototype, m.redefine(t.prototype, "constructor", e)
    }, Pt = function () {
        return this
    }, Ct = function (t) {
        f && !q(t, J) && m.getter(t, J, Pt)
    }, Mt = function (t, e) {
        var r = e || function () {
            return this
        };
        b(t, it, r), !t[it] && rt.symbol(it) && (t[it] = r)
    }, xt = function (t, e, r) {
        f ? Object.defineProperty(t, e, {configurable: !0, enumerable: !0, writable: !0, value: r}) : t[e] = r
    }, Nt = function (t, e, r) {
        if (xt(t, e, r), !ft.SameValue(t[e], r)) throw new TypeError("property is nonconfigurable")
    }, At = function (t, e, r, n) {
        if (!ft.TypeIsObject(t)) throw new TypeError("Constructor requires `new`: " + e.name);
        var o = e.prototype;
        ft.TypeIsObject(o) || (o = r);
        var i = w(o);
        for (var a in n) if (q(n, a)) {
            var u = n[a];
            b(i, a, u, !0)
        }
        return i
    };
    if (String.fromCodePoint && 1 !== String.fromCodePoint.length) {
        var _t = String.fromCodePoint;
        nt(String, "fromCodePoint", function (t) {
            return ft.Call(_t, this, arguments)
        })
    }
    var Rt = {
        fromCodePoint: function (t) {
            for (var e, r = [], n = 0, o = arguments.length; n < o; n++) {
                if (e = Number(arguments[n]), !ft.SameValue(e, ft.ToInteger(e)) || e < 0 || e > 1114111) throw new RangeError("Invalid code point " + e);
                e < 65536 ? x(r, String.fromCharCode(e)) : (e -= 65536, x(r, String.fromCharCode((e >> 10) + 55296)), x(r, String.fromCharCode(e % 1024 + 56320)))
            }
            return r.join("")
        }, raw: function (t) {
            var e = ft.ToObject(t, "bad callSite"), r = ft.ToObject(e.raw, "bad raw value"), n = r.length,
                o = ft.ToLength(n);
            if (o <= 0) return "";
            for (var i, a, u, c, s = [], f = 0; f < o && (i = ft.ToString(f), u = ft.ToString(r[i]), x(s, u), !(f + 1 >= o));) a = f + 1 < arguments.length ? arguments[f + 1] : "", c = ft.ToString(a), x(s, c), f += 1;
            return s.join("")
        }
    };
    String.raw && "xy" !== String.raw({raw: {0: "x", 1: "y", length: 2}}) && nt(String, "raw", Rt.raw), g(String, Rt);
    var kt = function qn(t, e) {
        if (e < 1) return "";
        if (e % 2) return qn(t, e - 1) + t;
        var r = qn(t, e / 2);
        return r + r
    }, Lt = 1 / 0, Ft = {
        repeat: function (t) {
            var e = ft.ToString(ft.RequireObjectCoercible(this)), r = ft.ToInteger(t);
            if (r < 0 || r >= Lt) throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");
            return kt(e, r)
        }, startsWith: function (t) {
            var e = ft.ToString(ft.RequireObjectCoercible(this));
            if (ft.IsRegExp(t)) throw new TypeError('Cannot call method "startsWith" with a regex');
            var r, n = ft.ToString(t);
            arguments.length > 1 && (r = arguments[1]);
            var o = _(ft.ToInteger(r), 0);
            return M(e, o, o + n.length) === n
        }, endsWith: function (t) {
            var e = ft.ToString(ft.RequireObjectCoercible(this));
            if (ft.IsRegExp(t)) throw new TypeError('Cannot call method "endsWith" with a regex');
            var r, n = ft.ToString(t), o = e.length;
            arguments.length > 1 && (r = arguments[1]);
            var i = "undefined" == typeof r ? o : ft.ToInteger(r), a = R(_(i, 0), o);
            return M(e, a - n.length, a) === n
        }, includes: function (t) {
            if (ft.IsRegExp(t)) throw new TypeError('"includes" does not accept a RegExp');
            var e, r = ft.ToString(t);
            return arguments.length > 1 && (e = arguments[1]), E(this, r, e) !== -1
        }, codePointAt: function (t) {
            var e = ft.ToString(ft.RequireObjectCoercible(this)), r = ft.ToInteger(t), n = e.length;
            if (r >= 0 && r < n) {
                var o = e.charCodeAt(r), i = r + 1 === n;
                if (o < 55296 || o > 56319 || i) return o;
                var a = e.charCodeAt(r + 1);
                return a < 56320 || a > 57343 ? o : 1024 * (o - 55296) + (a - 56320) + 65536
            }
        }
    };
    if (String.prototype.includes && "a".includes("a", 1 / 0) !== !1 && nt(String.prototype, "includes", Ft.includes), String.prototype.startsWith && String.prototype.endsWith) {
        var Dt = a(function () {
            return "/a/".startsWith(/a/)
        }), zt = u(function () {
            return "abc".startsWith("a", 1 / 0) === !1
        });
        Dt && zt || (nt(String.prototype, "startsWith", Ft.startsWith), nt(String.prototype, "endsWith", Ft.endsWith))
    }
    if (ot) {
        var qt = u(function () {
            var t = /a/;
            return t[U.match] = !1, "/a/".startsWith(t)
        });
        qt || nt(String.prototype, "startsWith", Ft.startsWith);
        var Gt = u(function () {
            var t = /a/;
            return t[U.match] = !1, "/a/".endsWith(t)
        });
        Gt || nt(String.prototype, "endsWith", Ft.endsWith);
        var Ht = u(function () {
            var t = /a/;
            return t[U.match] = !1, "/a/".includes(t)
        });
        Ht || nt(String.prototype, "includes", Ft.includes)
    }
    g(String.prototype, Ft);
    var Wt = ["\t\n\x0B\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
        Vt = new RegExp("(^[" + Wt + "]+)|([" + Wt + "]+$)", "g"), Bt = function () {
            return ft.ToString(ft.RequireObjectCoercible(this)).replace(Vt, "")
        }, $t = ["", "​", "￾"].join(""), Ut = new RegExp("[" + $t + "]", "g"), Jt = /^[-+]0x[0-9a-f]+$/i,
        Xt = $t.trim().length !== $t.length;
    b(String.prototype, "trim", Bt, Xt);
    var Zt = function (t) {
        return {value: t, done: 0 === arguments.length}
    }, Yt = function (t) {
        ft.RequireObjectCoercible(t), this._s = ft.ToString(t), this._i = 0
    };
    Yt.prototype.next = function () {
        var t = this._s, e = this._i;
        if ("undefined" == typeof t || e >= t.length) return this._s = void 0, Zt();
        var r, n, o = t.charCodeAt(e);
        return o < 55296 || o > 56319 || e + 1 === t.length ? n = 1 : (r = t.charCodeAt(e + 1), n = r < 56320 || r > 57343 ? 1 : 2), this._i = e + n, Zt(t.substr(e, n))
    }, Mt(Yt.prototype), Mt(String.prototype, function () {
        return new Yt(this)
    });
    var Kt = {
        from: function (t) {
            var e, n = this;
            arguments.length > 1 && (e = arguments[1]);
            var o, i;
            if ("undefined" == typeof e) o = !1; else {
                if (!ft.IsCallable(e)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2]), o = !0
            }
            var a, u, c, s = "undefined" != typeof (et(t) || ft.GetMethod(t, it));
            if (s) {
                u = ft.IsConstructor(n) ? Object(new n) : [];
                var f, p, l = ft.GetIterator(t);
                for (c = 0; ;) {
                    if (f = ft.IteratorStep(l), f === !1) break;
                    p = f.value;
                    try {
                        o && (p = "undefined" == typeof i ? e(p, c) : r(e, i, p, c)), u[c] = p
                    } catch (y) {
                        throw ft.IteratorClose(l, !0), y
                    }
                    c += 1
                }
                a = c
            } else {
                var h = ft.ToObject(t);
                a = ft.ToLength(h.length), u = ft.IsConstructor(n) ? Object(new n(a)) : new Array(a);
                var v;
                for (c = 0; c < a; ++c) v = h[c], o && (v = "undefined" == typeof i ? e(v, c) : r(e, i, v, c)), Nt(u, c, v)
            }
            return u.length = a, u
        }, of: function () {
            for (var t = arguments.length, e = this, r = n(e) || !ft.IsCallable(e) ? new Array(t) : ft.Construct(e, [t]), o = 0; o < t; ++o) Nt(r, o, arguments[o]);
            return r.length = t, r
        }
    };
    g(Array, Kt), Ct(Array), t = function (t, e) {
        this.i = 0, this.array = t, this.kind = e
    }, g(t.prototype, {
        next: function () {
            var e = this.i, r = this.array;
            if (!(this instanceof t)) throw new TypeError("Not an ArrayIterator");
            if ("undefined" != typeof r) for (var n = ft.ToLength(r.length); e < n; e++) {
                var o, i = this.kind;
                return "key" === i ? o = e : "value" === i ? o = r[e] : "entry" === i && (o = [e, r[e]]), this.i = e + 1, Zt(o)
            }
            return this.array = void 0, Zt()
        }
    }), Mt(t.prototype);
    var Qt = Array.of === Kt.of || function () {
        var t = function (t) {
            this.length = t
        };
        t.prototype = [];
        var e = Array.of.apply(t, [1, 2]);
        return e instanceof t && 2 === e.length
    }();
    Qt || nt(Array, "of", Kt.of);
    var te = {
        copyWithin: function (t, e) {
            var r, n = ft.ToObject(this), o = ft.ToLength(n.length), i = ft.ToInteger(t), a = ft.ToInteger(e),
                u = i < 0 ? _(o + i, 0) : R(i, o), c = a < 0 ? _(o + a, 0) : R(a, o);
            arguments.length > 2 && (r = arguments[2]);
            var s = "undefined" == typeof r ? o : ft.ToInteger(r), f = s < 0 ? _(o + s, 0) : R(s, o),
                p = R(f - c, o - u), l = 1;
            for (c < u && u < c + p && (l = -1, c += p - 1, u += p - 1); p > 0;) c in n ? n[u] = n[c] : delete n[u], c += l, u += l, p -= 1;
            return n
        }, fill: function (t) {
            var e;
            arguments.length > 1 && (e = arguments[1]);
            var r;
            arguments.length > 2 && (r = arguments[2]);
            var n = ft.ToObject(this), o = ft.ToLength(n.length);
            e = ft.ToInteger("undefined" == typeof e ? 0 : e), r = ft.ToInteger("undefined" == typeof r ? o : r);
            for (var i = e < 0 ? _(o + e, 0) : R(e, o), a = r < 0 ? o + r : r, u = i; u < o && u < a; ++u) n[u] = t;
            return n
        }, find: function (t) {
            var e = ft.ToObject(this), n = ft.ToLength(e.length);
            if (!ft.IsCallable(t)) throw new TypeError("Array#find: predicate must be a function");
            for (var o, i = arguments.length > 1 ? arguments[1] : null, a = 0; a < n; a++) if (o = e[a], i) {
                if (r(t, i, o, a, e)) return o
            } else if (t(o, a, e)) return o
        }, findIndex: function (t) {
            var e = ft.ToObject(this), n = ft.ToLength(e.length);
            if (!ft.IsCallable(t)) throw new TypeError("Array#findIndex: predicate must be a function");
            for (var o = arguments.length > 1 ? arguments[1] : null, i = 0; i < n; i++) if (o) {
                if (r(t, o, e[i], i, e)) return i
            } else if (t(e[i], i, e)) return i;
            return -1
        }, keys: function () {
            return new t(this, "key")
        }, values: function () {
            return new t(this, "value")
        }, entries: function () {
            return new t(this, "entry")
        }
    };
    if (Array.prototype.keys && !ft.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !ft.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[it] && (g(Array.prototype, {values: Array.prototype[it]}), rt.symbol(U.unscopables) && (Array.prototype[U.unscopables].values = !0)), p && Array.prototype.values && "values" !== Array.prototype.values.name) {
        var ee = Array.prototype.values;
        nt(Array.prototype, "values", function () {
            return ft.Call(ee, this, arguments)
        }), b(Array.prototype, it, Array.prototype.values, !0)
    }
    g(Array.prototype, te), 1 / [!0].indexOf(!0, -0) < 0 && b(Array.prototype, "indexOf", function (t) {
        var e = P(this, arguments);
        return 0 === e && 1 / e < 0 ? 0 : e
    }, !0), Mt(Array.prototype, function () {
        return this.values()
    }), Object.getPrototypeOf && Mt(Object.getPrototypeOf([].values()));
    var re = function () {
        return u(function () {
            return 0 === Array.from({length: -1}).length
        })
    }(), ne = function () {
        var t = Array.from([0].entries());
        return 1 === t.length && n(t[0]) && 0 === t[0][0] && 0 === t[0][1]
    }();
    re && ne || nt(Array, "from", Kt.from);
    var oe = function () {
        return u(function () {
            return Array.from([0], void 0)
        })
    }();
    if (!oe) {
        var ie = Array.from;
        nt(Array, "from", function (t) {
            return arguments.length > 1 && "undefined" != typeof arguments[1] ? ft.Call(ie, this, arguments) : r(ie, this, t)
        })
    }
    var ae = -(Math.pow(2, 32) - 1), ue = function (t, e) {
        var n = {length: ae};
        return n[e ? (n.length >>> 0) - 1 : 0] = !0, u(function () {
            return r(t, n, function () {
                throw new RangeError("should not reach here")
            }, []), !0
        })
    };
    if (!ue(Array.prototype.forEach)) {
        var ce = Array.prototype.forEach;
        nt(Array.prototype, "forEach", function (t) {
            return ft.Call(ce, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!ue(Array.prototype.map)) {
        var se = Array.prototype.map;
        nt(Array.prototype, "map", function (t) {
            return ft.Call(se, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!ue(Array.prototype.filter)) {
        var fe = Array.prototype.filter;
        nt(Array.prototype, "filter", function (t) {
            return ft.Call(fe, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!ue(Array.prototype.some)) {
        var pe = Array.prototype.some;
        nt(Array.prototype, "some", function (t) {
            return ft.Call(pe, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!ue(Array.prototype.every)) {
        var le = Array.prototype.every;
        nt(Array.prototype, "every", function (t) {
            return ft.Call(le, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!ue(Array.prototype.reduce)) {
        var ye = Array.prototype.reduce;
        nt(Array.prototype, "reduce", function (t) {
            return ft.Call(ye, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!ue(Array.prototype.reduceRight, !0)) {
        var he = Array.prototype.reduceRight;
        nt(Array.prototype, "reduceRight", function (t) {
            return ft.Call(he, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    var ve = 8 !== Number("0o10"), be = 2 !== Number("0b10"), ge = v($t, function (t) {
        return 0 === Number(t + 0 + t)
    });
    if (ve || be || ge) {
        var de = Number, Oe = /^0b[01]+$/i, me = /^0o[0-7]+$/i, we = Oe.test.bind(Oe), je = me.test.bind(me),
            Se = function (t) {
                var e;
                if ("function" == typeof t.valueOf && (e = t.valueOf(), rt.primitive(e))) return e;
                if ("function" == typeof t.toString && (e = t.toString(), rt.primitive(e))) return e;
                throw new TypeError("No default value")
            }, Te = Ut.test.bind(Ut), Ie = Jt.test.bind(Jt), Ee = function () {
                var t = function (e) {
                    var r;
                    r = arguments.length > 0 ? rt.primitive(e) ? e : Se(e, "number") : 0, "string" == typeof r && (r = ft.Call(Bt, r), we(r) ? r = parseInt(M(r, 2), 2) : je(r) ? r = parseInt(M(r, 2), 8) : (Te(r) || Ie(r)) && (r = NaN));
                    var n = this, o = u(function () {
                        return de.prototype.valueOf.call(n), !0
                    });
                    return n instanceof t && !o ? new de(r) : de(r)
                };
                return t
            }();
        Et(de, Ee, {}), g(Ee, {
            NaN: de.NaN,
            MAX_VALUE: de.MAX_VALUE,
            MIN_VALUE: de.MIN_VALUE,
            NEGATIVE_INFINITY: de.NEGATIVE_INFINITY,
            POSITIVE_INFINITY: de.POSITIVE_INFINITY
        }), Number = Ee, m.redefine(T, "Number", Ee)
    }
    var Pe = Math.pow(2, 53) - 1;
    g(Number, {
        MAX_SAFE_INTEGER: Pe,
        MIN_SAFE_INTEGER: -Pe,
        EPSILON: 2.220446049250313e-16,
        parseInt: T.parseInt,
        parseFloat: T.parseFloat,
        isFinite: Z,
        isInteger: function (t) {
            return Z(t) && ft.ToInteger(t) === t
        },
        isSafeInteger: function (t) {
            return Number.isInteger(t) && L(t) <= Number.MAX_SAFE_INTEGER
        },
        isNaN: X
    }), b(Number, "parseInt", T.parseInt, Number.parseInt !== T.parseInt), 1 === [, 1].find(function () {
        return !0
    }) && nt(Array.prototype, "find", te.find), 0 !== [, 1].findIndex(function () {
        return !0
    }) && nt(Array.prototype, "findIndex", te.findIndex);
    var Ce = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable), Me = function (t, e) {
        f && Ce(t, e) && Object.defineProperty(t, e, {enumerable: !1})
    }, xe = function () {
        for (var t = Number(this), e = arguments.length, r = e - t, n = new Array(r < 0 ? 0 : r), o = t; o < e; ++o) n[o - t] = arguments[o];
        return n
    }, Ne = function (t) {
        return function (e, r) {
            return e[r] = t[r], e
        }
    }, Ae = function (t, e) {
        var r, n = o(Object(e));
        return ft.IsCallable(Object.getOwnPropertySymbols) && (r = h(Object.getOwnPropertySymbols(Object(e)), Ce(e))), y(C(n, r || []), Ne(e), t)
    }, _e = {
        assign: function (t, e) {
            var r = ft.ToObject(t, "Cannot convert undefined or null to object");
            return y(ft.Call(xe, 1, arguments), Ae, r)
        }, is: function (t, e) {
            return ft.SameValue(t, e)
        }
    }, Re = Object.assign && Object.preventExtensions && function () {
        var t = Object.preventExtensions({1: 2});
        try {
            Object.assign(t, "xy")
        } catch (e) {
            return "y" === t[1]
        }
    }();
    if (Re && nt(Object, "assign", _e.assign), g(Object, _e), f) {
        var ke = {
            setPrototypeOf: function (t, e) {
                var n, o = function (t, e) {
                    if (!ft.TypeIsObject(t)) throw new TypeError("cannot set prototype on a non-object");
                    if (null !== e && !ft.TypeIsObject(e)) throw new TypeError("can only set prototype to an object or null" + e)
                }, i = function (t, e) {
                    return o(t, e), r(n, t, e), t
                };
                try {
                    n = t.getOwnPropertyDescriptor(t.prototype, e).set, r(n, {}, null)
                } catch (a) {
                    if (t.prototype !== {}[e]) return;
                    n = function (t) {
                        this[e] = t
                    }, i.polyfill = i(i({}, null), t.prototype) instanceof t
                }
                return i
            }(Object, "__proto__")
        };
        g(Object, ke)
    }
    Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && !function () {
        var t = Object.create(null), e = Object.getPrototypeOf, r = Object.setPrototypeOf;
        Object.getPrototypeOf = function (r) {
            var n = e(r);
            return n === t ? null : n
        }, Object.setPrototypeOf = function (e, n) {
            var o = null === n ? t : n;
            return r(e, o)
        }, Object.setPrototypeOf.polyfill = !1
    }();
    var Le = !a(function () {
        return Object.keys("foo")
    });
    if (!Le) {
        var Fe = Object.keys;
        nt(Object, "keys", function (t) {
            return Fe(ft.ToObject(t))
        }), o = Object.keys
    }
    var De = a(function () {
        return Object.keys(/a/g)
    });
    if (De) {
        var ze = Object.keys;
        nt(Object, "keys", function (t) {
            if (rt.regex(t)) {
                var e = [];
                for (var r in t) q(t, r) && x(e, r);
                return e
            }
            return ze(t)
        }), o = Object.keys
    }
    if (Object.getOwnPropertyNames) {
        var qe = !a(function () {
            return Object.getOwnPropertyNames("foo")
        });
        if (!qe) {
            var Ge = "object" == typeof window ? Object.getOwnPropertyNames(window) : [],
                He = Object.getOwnPropertyNames;
            nt(Object, "getOwnPropertyNames", function (t) {
                var e = ft.ToObject(t);
                if ("[object Window]" === d(e)) try {
                    return He(e)
                } catch (r) {
                    return C([], Ge)
                }
                return He(e)
            })
        }
    }
    if (Object.getOwnPropertyDescriptor) {
        var We = !a(function () {
            return Object.getOwnPropertyDescriptor("foo", "bar")
        });
        if (!We) {
            var Ve = Object.getOwnPropertyDescriptor;
            nt(Object, "getOwnPropertyDescriptor", function (t, e) {
                return Ve(ft.ToObject(t), e)
            })
        }
    }
    if (Object.seal) {
        var Be = !a(function () {
            return Object.seal("foo")
        });
        if (!Be) {
            var $e = Object.seal;
            nt(Object, "seal", function (t) {
                return ft.TypeIsObject(t) ? $e(t) : t
            })
        }
    }
    if (Object.isSealed) {
        var Ue = !a(function () {
            return Object.isSealed("foo")
        });
        if (!Ue) {
            var Je = Object.isSealed;
            nt(Object, "isSealed", function (t) {
                return !ft.TypeIsObject(t) || Je(t)
            })
        }
    }
    if (Object.freeze) {
        var Xe = !a(function () {
            return Object.freeze("foo")
        });
        if (!Xe) {
            var Ze = Object.freeze;
            nt(Object, "freeze", function (t) {
                return ft.TypeIsObject(t) ? Ze(t) : t
            })
        }
    }
    if (Object.isFrozen) {
        var Ye = !a(function () {
            return Object.isFrozen("foo")
        });
        if (!Ye) {
            var Ke = Object.isFrozen;
            nt(Object, "isFrozen", function (t) {
                return !ft.TypeIsObject(t) || Ke(t)
            })
        }
    }
    if (Object.preventExtensions) {
        var Qe = !a(function () {
            return Object.preventExtensions("foo")
        });
        if (!Qe) {
            var tr = Object.preventExtensions;
            nt(Object, "preventExtensions", function (t) {
                return ft.TypeIsObject(t) ? tr(t) : t
            })
        }
    }
    if (Object.isExtensible) {
        var er = !a(function () {
            return Object.isExtensible("foo")
        });
        if (!er) {
            var rr = Object.isExtensible;
            nt(Object, "isExtensible", function (t) {
                return !!ft.TypeIsObject(t) && rr(t)
            })
        }
    }
    if (Object.getPrototypeOf) {
        var nr = !a(function () {
            return Object.getPrototypeOf("foo")
        });
        if (!nr) {
            var or = Object.getPrototypeOf;
            nt(Object, "getPrototypeOf", function (t) {
                return or(ft.ToObject(t))
            })
        }
    }
    var ir = f && function () {
        var t = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
        return t && ft.IsCallable(t.get)
    }();
    if (f && !ir) {
        var ar = function () {
            if (!ft.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object.");
            var t = "";
            return this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.unicode && (t += "u"), this.sticky && (t += "y"), t
        };
        m.getter(RegExp.prototype, "flags", ar)
    }
    var ur = f && u(function () {
        return "/a/i" === String(new RegExp(/a/g, "i"))
    }), cr = ot && f && function () {
        var t = /./;
        return t[U.match] = !1, RegExp(t) === t
    }(), sr = u(function () {
        return "/abc/" === RegExp.prototype.toString.call({source: "abc"})
    }), fr = sr && u(function () {
        return "/a/b" === RegExp.prototype.toString.call({source: "a", flags: "b"})
    });
    if (!sr || !fr) {
        var pr = RegExp.prototype.toString;
        b(RegExp.prototype, "toString", function () {
            var t = ft.RequireObjectCoercible(this);
            if (rt.regex(t)) return r(pr, t);
            var e = ut(t.source), n = ut(t.flags);
            return "/" + e + "/" + n
        }, !0), m.preserveToString(RegExp.prototype.toString, pr)
    }
    if (f && (!ur || cr)) {
        var lr = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get,
            yr = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {}, hr = function () {
                return this.source
            }, vr = ft.IsCallable(yr.get) ? yr.get : hr, br = RegExp, gr = function () {
                return function t(e, r) {
                    var n = ft.IsRegExp(e), o = this instanceof t;
                    if (!o && n && "undefined" == typeof r && e.constructor === t) return e;
                    var i = e, a = r;
                    return rt.regex(e) ? (i = ft.Call(vr, e), a = "undefined" == typeof r ? ft.Call(lr, e) : r, new t(i, a)) : (n && (i = e.source, a = "undefined" == typeof r ? e.flags : r), new br(e, r))
                }
            }();
        Et(br, gr, {$input: !0}), RegExp = gr, m.redefine(T, "RegExp", gr)
    }
    if (f) {
        var dr = {input: "$_", lastMatch: "$&", lastParen: "$+", leftContext: "$`", rightContext: "$'"};
        l(o(dr), function (t) {
            t in RegExp && !(dr[t] in RegExp) && m.getter(RegExp, dr[t], function () {
                return RegExp[t]
            })
        })
    }
    Ct(RegExp);
    var Or = 1 / Number.EPSILON, mr = function (t) {
            return t + Or - Or
        }, wr = Math.pow(2, -23), jr = Math.pow(2, 127) * (2 - wr), Sr = Math.pow(2, -126), Tr = Math.E, Ir = Math.LOG2E,
        Er = Math.LOG10E, Pr = Number.prototype.clz;
    delete Number.prototype.clz;
    var Cr = {
        acosh: function (t) {
            var e = Number(t);
            if (X(e) || t < 1) return NaN;
            if (1 === e) return 0;
            if (e === 1 / 0) return e;
            var r = 1 / (e * e);
            if (e < 2) return K(e - 1 + z(1 - r) * e);
            var n = e / 2;
            return K(n + z(1 - r) * n - 1) + 1 / Ir
        }, asinh: function (t) {
            var e = Number(t);
            if (0 === e || !I(e)) return e;
            var r = L(e), n = r * r, o = Y(e);
            return r < 1 ? o * K(r + n / (z(n + 1) + 1)) : o * (K(r / 2 + z(1 + 1 / n) * r / 2 - 1) + 1 / Ir)
        }, atanh: function (t) {
            var e = Number(t);
            if (0 === e) return e;
            if (e === -1) return -(1 / 0);
            if (1 === e) return 1 / 0;
            if (X(e) || e < -1 || e > 1) return NaN;
            var r = L(e);
            return Y(e) * K(2 * r / (1 - r)) / 2
        }, cbrt: function (t) {
            var e = Number(t);
            if (0 === e) return e;
            var r, n = e < 0;
            return n && (e = -e), e === 1 / 0 ? r = 1 / 0 : (r = F(D(e) / 3), r = (e / (r * r) + 2 * r) / 3), n ? -r : r
        }, clz32: function (t) {
            var e = Number(t), r = ft.ToUint32(e);
            return 0 === r ? 32 : Pr ? ft.Call(Pr, r) : 31 - k(D(r + .5) * Ir)
        }, cosh: function (t) {
            var e = Number(t);
            if (0 === e) return 1;
            if (X(e)) return NaN;
            if (!I(e)) return 1 / 0;
            var r = F(L(e) - 1);
            return (r + 1 / (r * Tr * Tr)) * (Tr / 2)
        }, expm1: function (t) {
            var e = Number(t);
            if (e === -(1 / 0)) return -1;
            if (!I(e) || 0 === e) return e;
            if (L(e) > .5) return F(e) - 1;
            for (var r = e, n = 0, o = 1; n + r !== n;) n += r, o += 1, r *= e / o;
            return n
        }, hypot: function (t, e) {
            for (var r = 0, n = 0, o = 0; o < arguments.length; ++o) {
                var i = L(Number(arguments[o]));
                n < i ? (r *= n / i * (n / i), r += 1, n = i) : r += i > 0 ? i / n * (i / n) : i
            }
            return n === 1 / 0 ? 1 / 0 : n * z(r)
        }, log2: function (t) {
            return D(t) * Ir
        }, log10: function (t) {
            return D(t) * Er
        }, log1p: K, sign: Y, sinh: function (t) {
            var e = Number(t);
            if (!I(e) || 0 === e) return e;
            var r = L(e);
            if (r < 1) {
                var n = Math.expm1(r);
                return Y(e) * n * (1 + 1 / (n + 1)) / 2
            }
            var o = F(r - 1);
            return Y(e) * (o - 1 / (o * Tr * Tr)) * (Tr / 2)
        }, tanh: function (t) {
            var e = Number(t);
            return X(e) || 0 === e ? e : e >= 20 ? 1 : e <= -20 ? -1 : (Math.expm1(e) - Math.expm1(-e)) / (F(e) + F(-e))
        }, trunc: function (t) {
            var e = Number(t);
            return e < 0 ? -k(-e) : k(e)
        }, imul: function (t, e) {
            var r = ft.ToUint32(t), n = ft.ToUint32(e), o = r >>> 16 & 65535, i = 65535 & r, a = n >>> 16 & 65535,
                u = 65535 & n;
            return i * u + (o * u + i * a << 16 >>> 0) | 0
        }, fround: function (t) {
            var e = Number(t);
            if (0 === e || e === 1 / 0 || e === -(1 / 0) || X(e)) return e;
            var r = Y(e), n = L(e);
            if (n < Sr) return r * mr(n / Sr / wr) * Sr * wr;
            var o = (1 + wr / Number.EPSILON) * n, i = o - (o - n);
            return i > jr || X(i) ? r * (1 / 0) : r * i
        }
    }, Mr = function (t, e, r) {
        return L(1 - t / e) / Number.EPSILON < (r || 8)
    };
    g(Math, Cr), b(Math, "sinh", Cr.sinh, Math.sinh(710) === 1 / 0), b(Math, "cosh", Cr.cosh, Math.cosh(710) === 1 / 0), b(Math, "log1p", Cr.log1p, Math.log1p(-1e-17) !== -1e-17), b(Math, "asinh", Cr.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7)), b(Math, "asinh", Cr.asinh, Math.asinh(1e300) === 1 / 0), b(Math, "atanh", Cr.atanh, 0 === Math.atanh(1e-300)), b(Math, "tanh", Cr.tanh, Math.tanh(-2e-17) !== -2e-17), b(Math, "acosh", Cr.acosh, Math.acosh(Number.MAX_VALUE) === 1 / 0), b(Math, "acosh", Cr.acosh, !Mr(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON))), b(Math, "cbrt", Cr.cbrt, !Mr(Math.cbrt(1e-300), 1e-100)), b(Math, "sinh", Cr.sinh, Math.sinh(-2e-17) !== -2e-17);
    var xr = Math.expm1(10);
    b(Math, "expm1", Cr.expm1, xr > 22025.465794806718 || xr < 22025.465794806718);
    var Nr = Math.round,
        Ar = 0 === Math.round(.5 - Number.EPSILON / 4) && 1 === Math.round(-.5 + Number.EPSILON / 3.99), _r = Or + 1,
        Rr = 2 * Or - 1, kr = [_r, Rr].every(function (t) {
            return Math.round(t) === t
        });
    b(Math, "round", function (t) {
        var e = k(t), r = e === -1 ? -0 : e + 1;
        return t - e < .5 ? e : r
    }, !Ar || !kr), m.preserveToString(Math.round, Nr);
    var Lr = Math.imul;
    Math.imul(4294967295, 5) !== -5 && (Math.imul = Cr.imul, m.preserveToString(Math.imul, Lr)), 2 !== Math.imul.length && nt(Math, "imul", function (t, e) {
        return ft.Call(Lr, Math, arguments)
    });
    var Fr = function () {
        var t = T.setTimeout;
        if ("function" == typeof t || "object" == typeof t) {
            ft.IsPromise = function (t) {
                return !!ft.TypeIsObject(t) && "undefined" != typeof t._promise
            };
            var e, n = function (t) {
                if (!ft.IsConstructor(t)) throw new TypeError("Bad promise constructor");
                var e = this, r = function (t, r) {
                    if (void 0 !== e.resolve || void 0 !== e.reject) throw new TypeError("Bad Promise implementation!");
                    e.resolve = t, e.reject = r
                };
                if (e.resolve = void 0, e.reject = void 0, e.promise = new t(r), !ft.IsCallable(e.resolve) || !ft.IsCallable(e.reject)) throw new TypeError("Bad promise constructor")
            };
            "undefined" != typeof window && ft.IsCallable(window.postMessage) && (e = function () {
                var t = [], e = "zero-timeout-message", r = function (r) {
                    x(t, r), window.postMessage(e, "*")
                }, n = function (r) {
                    if (r.source === window && r.data === e) {
                        if (r.stopPropagation(), 0 === t.length) return;
                        var n = A(t);
                        n()
                    }
                };
                return window.addEventListener("message", n, !0), r
            });
            var o, i, a = function () {
                    var t = T.Promise, e = t && t.resolve && t.resolve();
                    return e && function (t) {
                        return e.then(t)
                    }
                },
                u = ft.IsCallable(T.setImmediate) ? T.setImmediate : "object" == typeof process && process.nextTick ? process.nextTick : a() || (ft.IsCallable(e) ? e() : function (e) {
                    t(e, 0)
                }), c = function (t) {
                    return t
                }, s = function (t) {
                    throw t
                }, f = 0, p = 1, l = 2, y = 0, h = 1, v = 2, b = {}, d = function (t, e, r) {
                    u(function () {
                        O(t, e, r)
                    })
                }, O = function (t, e, r) {
                    var n, o;
                    if (e === b) return t(r);
                    try {
                        n = t(r), o = e.resolve
                    } catch (i) {
                        n = i, o = e.reject
                    }
                    o(n)
                }, m = function (t, e) {
                    var r = t._promise, n = r.reactionLength;
                    if (n > 0 && (d(r.fulfillReactionHandler0, r.reactionCapability0, e), r.fulfillReactionHandler0 = void 0, r.rejectReactions0 = void 0, r.reactionCapability0 = void 0, n > 1)) for (var o = 1, i = 0; o < n; o++, i += 3) d(r[i + y], r[i + v], e), t[i + y] = void 0, t[i + h] = void 0, t[i + v] = void 0;
                    r.result = e, r.state = p, r.reactionLength = 0
                }, w = function (t, e) {
                    var r = t._promise, n = r.reactionLength;
                    if (n > 0 && (d(r.rejectReactionHandler0, r.reactionCapability0, e), r.fulfillReactionHandler0 = void 0, r.rejectReactions0 = void 0, r.reactionCapability0 = void 0, n > 1)) for (var o = 1, i = 0; o < n; o++, i += 3) d(r[i + h], r[i + v], e), t[i + y] = void 0, t[i + h] = void 0, t[i + v] = void 0;
                    r.result = e, r.state = l, r.reactionLength = 0
                }, j = function (t) {
                    var e = !1, r = function (r) {
                        var n;
                        if (!e) {
                            if (e = !0, r === t) return w(t, new TypeError("Self resolution"));
                            if (!ft.TypeIsObject(r)) return m(t, r);
                            try {
                                n = r.then
                            } catch (o) {
                                return w(t, o)
                            }
                            return ft.IsCallable(n) ? void u(function () {
                                I(t, r, n)
                            }) : m(t, r)
                        }
                    }, n = function (r) {
                        if (!e) return e = !0, w(t, r)
                    };
                    return {resolve: r, reject: n}
                }, S = function (t, e, n, o) {
                    t === i ? r(t, e, n, o, b) : r(t, e, n, o)
                }, I = function (t, e, r) {
                    var n = j(t), o = n.resolve, i = n.reject;
                    try {
                        S(r, e, o, i)
                    } catch (a) {
                        i(a)
                    }
                }, E = function () {
                    var t = function (e) {
                        if (!(this instanceof t)) throw new TypeError('Constructor Promise requires "new"');
                        if (this && this._promise) throw new TypeError("Bad construction");
                        if (!ft.IsCallable(e)) throw new TypeError("not a valid resolver");
                        var r = At(this, t, o, {
                            _promise: {
                                result: void 0,
                                state: f,
                                reactionLength: 0,
                                fulfillReactionHandler0: void 0,
                                rejectReactionHandler0: void 0,
                                reactionCapability0: void 0
                            }
                        }), n = j(r), i = n.reject;
                        try {
                            e(n.resolve, i)
                        } catch (a) {
                            i(a)
                        }
                        return r
                    };
                    return t
                }();
            o = E.prototype;
            var P = function (t, e, r, n) {
                var o = !1;
                return function (i) {
                    if (!o && (o = !0, e[t] = i, 0 === --n.count)) {
                        var a = r.resolve;
                        a(e)
                    }
                }
            }, C = function (t, e, r) {
                for (var n, o, i = t.iterator, a = [], u = {count: 1}, c = 0; ;) {
                    try {
                        if (n = ft.IteratorStep(i), n === !1) {
                            t.done = !0;
                            break
                        }
                        o = n.value
                    } catch (s) {
                        throw t.done = !0, s
                    }
                    a[c] = void 0;
                    var f = e.resolve(o), p = P(c, a, r, u);
                    u.count += 1, S(f.then, f, p, r.reject), c += 1
                }
                if (0 === --u.count) {
                    var l = r.resolve;
                    l(a)
                }
                return r.promise
            }, M = function (t, e, r) {
                for (var n, o, i, a = t.iterator; ;) {
                    try {
                        if (n = ft.IteratorStep(a), n === !1) {
                            t.done = !0;
                            break
                        }
                        o = n.value
                    } catch (u) {
                        throw t.done = !0, u
                    }
                    i = e.resolve(o), S(i.then, i, r.resolve, r.reject)
                }
                return r.promise
            };
            return g(E, {
                all: function (t) {
                    var e = this;
                    if (!ft.TypeIsObject(e)) throw new TypeError("Promise is not object");
                    var r, o, i = new n(e);
                    try {
                        return r = ft.GetIterator(t), o = {iterator: r, done: !1}, C(o, e, i)
                    } catch (a) {
                        var u = a;
                        if (o && !o.done) try {
                            ft.IteratorClose(r, !0)
                        } catch (c) {
                            u = c
                        }
                        var s = i.reject;
                        return s(u), i.promise
                    }
                }, race: function (t) {
                    var e = this;
                    if (!ft.TypeIsObject(e)) throw new TypeError("Promise is not object");
                    var r, o, i = new n(e);
                    try {
                        return r = ft.GetIterator(t), o = {iterator: r, done: !1}, M(o, e, i)
                    } catch (a) {
                        var u = a;
                        if (o && !o.done) try {
                            ft.IteratorClose(r, !0)
                        } catch (c) {
                            u = c
                        }
                        var s = i.reject;
                        return s(u), i.promise
                    }
                }, reject: function (t) {
                    var e = this;
                    if (!ft.TypeIsObject(e)) throw new TypeError("Bad promise constructor");
                    var r = new n(e), o = r.reject;
                    return o(t), r.promise
                }, resolve: function (t) {
                    var e = this;
                    if (!ft.TypeIsObject(e)) throw new TypeError("Bad promise constructor");
                    if (ft.IsPromise(t)) {
                        var r = t.constructor;
                        if (r === e) return t
                    }
                    var o = new n(e), i = o.resolve;
                    return i(t), o.promise
                }
            }), g(o, {
                "catch": function (t) {
                    return this.then(null, t)
                }, then: function (t, e) {
                    var r = this;
                    if (!ft.IsPromise(r)) throw new TypeError("not a promise");
                    var o, i = ft.SpeciesConstructor(r, E), a = arguments.length > 2 && arguments[2] === b;
                    o = a && i === E ? b : new n(i);
                    var u, g = ft.IsCallable(t) ? t : c, O = ft.IsCallable(e) ? e : s, m = r._promise;
                    if (m.state === f) {
                        if (0 === m.reactionLength) m.fulfillReactionHandler0 = g, m.rejectReactionHandler0 = O, m.reactionCapability0 = o; else {
                            var w = 3 * (m.reactionLength - 1);
                            m[w + y] = g, m[w + h] = O, m[w + v] = o
                        }
                        m.reactionLength += 1
                    } else if (m.state === p) u = m.result, d(g, o, u); else {
                        if (m.state !== l) throw new TypeError("unexpected Promise state");
                        u = m.result, d(O, o, u)
                    }
                    return o.promise
                }
            }), b = new n(E), i = o.then, E
        }
    }();
    if (T.Promise && (delete T.Promise.accept, delete T.Promise.defer, delete T.Promise.prototype.chain), "function" == typeof Fr) {
        g(T, {Promise: Fr});
        var Dr = j(T.Promise, function (t) {
            return t.resolve(42).then(function () {
            }) instanceof t
        }), zr = !a(function () {
            return T.Promise.reject(42).then(null, 5).then(null, G)
        }), qr = a(function () {
            return T.Promise.call(3, G)
        }), Gr = function (t) {
            var e = t.resolve(5);
            e.constructor = {};
            var r = t.resolve(e);
            try {
                r.then(null, G).then(null, G)
            } catch (n) {
                return !0
            }
            return e === r
        }(T.Promise), Hr = f && function () {
            var t = 0, e = Object.defineProperty({}, "then", {
                get: function () {
                    t += 1
                }
            });
            return Promise.resolve(e), 1 === t
        }(), Wr = function Gn(t) {
            var e = new Promise(t);
            t(3, function () {
            }), this.then = e.then, this.constructor = Gn
        };
        Wr.prototype = Promise.prototype, Wr.all = Promise.all;
        var Vr = u(function () {
            return !!Wr.all([1, 2])
        });
        if (Dr && zr && qr && !Gr && Hr && !Vr || (Promise = Fr, nt(T, "Promise", Fr)), 1 !== Promise.all.length) {
            var Br = Promise.all;
            nt(Promise, "all", function (t) {
                return ft.Call(Br, this, arguments)
            })
        }
        if (1 !== Promise.race.length) {
            var $r = Promise.race;
            nt(Promise, "race", function (t) {
                return ft.Call($r, this, arguments)
            })
        }
        if (1 !== Promise.resolve.length) {
            var Ur = Promise.resolve;
            nt(Promise, "resolve", function (t) {
                return ft.Call(Ur, this, arguments)
            })
        }
        if (1 !== Promise.reject.length) {
            var Jr = Promise.reject;
            nt(Promise, "reject", function (t) {
                return ft.Call(Jr, this, arguments)
            })
        }
        Me(Promise, "all"), Me(Promise, "race"), Me(Promise, "resolve"), Me(Promise, "reject"), Ct(Promise)
    }
    var Xr = function (t) {
        var e = o(y(t, function (t, e) {
            return t[e] = !0, t
        }, {}));
        return t.join(":") === e.join(":")
    }, Zr = Xr(["z", "a", "bb"]), Yr = Xr(["z", 1, "a", "3", 2]);
    if (f) {
        var Kr = function (t, e) {
                return e || Zr ? st(t) ? "^" + ft.ToString(t) : "string" == typeof t ? "$" + t : "number" == typeof t ? Yr ? t : "n" + t : "boolean" == typeof t ? "b" + t : null : null
            }, Qr = function () {
                return Object.create ? Object.create(null) : {}
            }, tn = function (t, e, o) {
                if (n(o) || rt.string(o)) l(o, function (t) {
                    if (!ft.TypeIsObject(t)) throw new TypeError("Iterator value " + t + " is not an entry object");
                    e.set(t[0], t[1])
                }); else if (o instanceof t) r(t.prototype.forEach, o, function (t, r) {
                    e.set(r, t)
                }); else {
                    var i, a;
                    if (!st(o)) {
                        if (a = e.set, !ft.IsCallable(a)) throw new TypeError("bad map");
                        i = ft.GetIterator(o)
                    }
                    if ("undefined" != typeof i) for (; ;) {
                        var u = ft.IteratorStep(i);
                        if (u === !1) break;
                        var c = u.value;
                        try {
                            if (!ft.TypeIsObject(c)) throw new TypeError("Iterator value " + c + " is not an entry object");
                            r(a, e, c[0], c[1])
                        } catch (s) {
                            throw ft.IteratorClose(i, !0), s
                        }
                    }
                }
            }, en = function (t, e, o) {
                if (n(o) || rt.string(o)) l(o, function (t) {
                    e.add(t)
                }); else if (o instanceof t) r(t.prototype.forEach, o, function (t) {
                    e.add(t)
                }); else {
                    var i, a;
                    if (!st(o)) {
                        if (a = e.add, !ft.IsCallable(a)) throw new TypeError("bad set");
                        i = ft.GetIterator(o)
                    }
                    if ("undefined" != typeof i) for (; ;) {
                        var u = ft.IteratorStep(i);
                        if (u === !1) break;
                        var c = u.value;
                        try {
                            r(a, e, c)
                        } catch (s) {
                            throw ft.IteratorClose(i, !0), s
                        }
                    }
                }
            }, rn = {
                Map: function () {
                    var t = {}, e = function (t, e) {
                        this.key = t, this.value = e, this.next = null, this.prev = null
                    };
                    e.prototype.isRemoved = function () {
                        return this.key === t
                    };
                    var n = function (t) {
                        return !!t._es6map
                    }, o = function (t, e) {
                        if (!ft.TypeIsObject(t) || !n(t)) throw new TypeError("Method Map.prototype." + e + " called on incompatible receiver " + ft.ToString(t))
                    }, i = function (t, e) {
                        o(t, "[[MapIterator]]"), this.head = t._head, this.i = this.head, this.kind = e
                    };
                    i.prototype = {
                        isMapIterator: !0, next: function () {
                            if (!this.isMapIterator) throw new TypeError("Not a MapIterator");
                            var t = this.i, e = this.kind, r = this.head;
                            if ("undefined" == typeof this.i) return Zt();
                            for (; t.isRemoved() && t !== r;) t = t.prev;
                            for (var n; t.next !== r;) if (t = t.next, !t.isRemoved()) return n = "key" === e ? t.key : "value" === e ? t.value : [t.key, t.value], this.i = t, Zt(n);
                            return this.i = void 0, Zt()
                        }
                    }, Mt(i.prototype);
                    var a, u = function c() {
                        if (!(this instanceof c)) throw new TypeError('Constructor Map requires "new"');
                        if (this && this._es6map) throw new TypeError("Bad construction");
                        var t = At(this, c, a, {
                            _es6map: !0,
                            _head: null,
                            _map: H ? new H : null,
                            _size: 0,
                            _storage: Qr()
                        }), r = new e(null, null);
                        return r.next = r.prev = r, t._head = r, arguments.length > 0 && tn(c, t, arguments[0]), t
                    };
                    return a = u.prototype, m.getter(a, "size", function () {
                        if ("undefined" == typeof this._size) throw new TypeError("size method called on incompatible Map");
                        return this._size
                    }), g(a, {
                        get: function (t) {
                            o(this, "get");
                            var e, r = Kr(t, !0);
                            if (null !== r) return e = this._storage[r], e ? e.value : void 0;
                            if (this._map) return e = V.call(this._map, t), e ? e.value : void 0;
                            for (var n = this._head, i = n; (i = i.next) !== n;) if (ft.SameValueZero(i.key, t)) return i.value
                        }, has: function (t) {
                            o(this, "has");
                            var e = Kr(t, !0);
                            if (null !== e) return "undefined" != typeof this._storage[e];
                            if (this._map) return B.call(this._map, t);
                            for (var r = this._head, n = r; (n = n.next) !== r;) if (ft.SameValueZero(n.key, t)) return !0;
                            return !1
                        }, set: function (t, r) {
                            o(this, "set");
                            var n, i = this._head, a = i, u = Kr(t, !0);
                            if (null !== u) {
                                if ("undefined" != typeof this._storage[u]) return this._storage[u].value = r, this;
                                n = this._storage[u] = new e(t, r), a = i.prev
                            } else this._map && (B.call(this._map, t) ? V.call(this._map, t).value = r : (n = new e(t, r), $.call(this._map, t, n), a = i.prev));
                            for (; (a = a.next) !== i;) if (ft.SameValueZero(a.key, t)) return a.value = r, this;
                            return n = n || new e(t, r), ft.SameValue(-0, t) && (n.key = 0), n.next = this._head, n.prev = this._head.prev, n.prev.next = n, n.next.prev = n, this._size += 1, this
                        }, "delete": function (e) {
                            o(this, "delete");
                            var r = this._head, n = r, i = Kr(e, !0);
                            if (null !== i) {
                                if ("undefined" == typeof this._storage[i]) return !1;
                                n = this._storage[i].prev, delete this._storage[i]
                            } else if (this._map) {
                                if (!B.call(this._map, e)) return !1;
                                n = V.call(this._map, e).prev, W.call(this._map, e)
                            }
                            for (; (n = n.next) !== r;) if (ft.SameValueZero(n.key, e)) return n.key = t, n.value = t, n.prev.next = n.next, n.next.prev = n.prev, this._size -= 1, !0;
                            return !1
                        }, clear: function () {
                            o(this, "clear"), this._map = H ? new H : null, this._size = 0, this._storage = Qr();
                            for (var e = this._head, r = e, n = r.next; (r = n) !== e;) r.key = t, r.value = t, n = r.next, r.next = r.prev = e;
                            e.next = e.prev = e
                        }, keys: function () {
                            return o(this, "keys"), new i(this, "key")
                        }, values: function () {
                            return o(this, "values"), new i(this, "value")
                        }, entries: function () {
                            return o(this, "entries"), new i(this, "key+value")
                        }, forEach: function (t) {
                            o(this, "forEach");
                            for (var e = arguments.length > 1 ? arguments[1] : null, n = this.entries(), i = n.next(); !i.done; i = n.next()) e ? r(t, e, i.value[1], i.value[0], this) : t(i.value[1], i.value[0], this)
                        }
                    }), Mt(a, a.entries), u
                }(), Set: function () {
                    var t, e = function (t) {
                        return t._es6set && "undefined" != typeof t._storage
                    }, n = function (t, r) {
                        if (!ft.TypeIsObject(t) || !e(t)) throw new TypeError("Set.prototype." + r + " called on incompatible receiver " + ft.ToString(t))
                    }, i = function s() {
                        if (!(this instanceof s)) throw new TypeError('Constructor Set requires "new"');
                        if (this && this._es6set) throw new TypeError("Bad construction");
                        var e = At(this, s, t, {_es6set: !0, "[[SetData]]": null, _storage: Qr()});
                        if (!e._es6set) throw new TypeError("bad set");
                        return arguments.length > 0 && en(s, e, arguments[0]), e
                    };
                    t = i.prototype;
                    var a = function (t) {
                        var e = t;
                        if ("^null" === e) return null;
                        if ("^undefined" !== e) {
                            var r = e.charAt(0);
                            return "$" === r ? M(e, 1) : "n" === r ? +M(e, 1) : "b" === r ? "btrue" === e : +e
                        }
                    }, u = function (t) {
                        if (!t["[[SetData]]"]) {
                            var e = new rn.Map;
                            t["[[SetData]]"] = e, l(o(t._storage), function (t) {
                                var r = a(t);
                                e.set(r, r)
                            }), t["[[SetData]]"] = e
                        }
                        t._storage = null
                    };
                    m.getter(i.prototype, "size", function () {
                        return n(this, "size"), this._storage ? o(this._storage).length : (u(this), this["[[SetData]]"].size)
                    }), g(i.prototype, {
                        has: function (t) {
                            n(this, "has");
                            var e;
                            return this._storage && null !== (e = Kr(t)) ? !!this._storage[e] : (u(this), this["[[SetData]]"].has(t))
                        }, add: function (t) {
                            n(this, "add");
                            var e;
                            return this._storage && null !== (e = Kr(t)) ? (this._storage[e] = !0, this) : (u(this), this["[[SetData]]"].set(t, t), this)
                        }, "delete": function (t) {
                            n(this, "delete");
                            var e;
                            if (this._storage && null !== (e = Kr(t))) {
                                var r = q(this._storage, e);
                                return delete this._storage[e] && r
                            }
                            return u(this), this["[[SetData]]"]["delete"](t)
                        }, clear: function () {
                            n(this, "clear"), this._storage && (this._storage = Qr()), this["[[SetData]]"] && this["[[SetData]]"].clear()
                        }, values: function () {
                            return n(this, "values"), u(this), new c(this["[[SetData]]"].values())
                        }, entries: function () {
                            return n(this, "entries"), u(this), new c(this["[[SetData]]"].entries())
                        }, forEach: function (t) {
                            n(this, "forEach");
                            var e = arguments.length > 1 ? arguments[1] : null, o = this;
                            u(o), this["[[SetData]]"].forEach(function (n, i) {
                                e ? r(t, e, i, i, o) : t(i, i, o)
                            })
                        }
                    }), b(i.prototype, "keys", i.prototype.values, !0), Mt(i.prototype, i.prototype.values);
                    var c = function (t) {
                        this.it = t
                    };
                    return c.prototype = {
                        isSetIterator: !0, next: function () {
                            if (!this.isSetIterator) throw new TypeError("Not a SetIterator");
                            return this.it.next()
                        }
                    }, Mt(c.prototype), i
                }()
            },
            nn = T.Set && !Set.prototype["delete"] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray((new Set).keys);
        if (nn && (T.Set = rn.Set), T.Map || T.Set) {
            var on = u(function () {
                return 2 === new Map([[1, 2]]).get(1)
            });
            on || (T.Map = function Hn() {
                if (!(this instanceof Hn)) throw new TypeError('Constructor Map requires "new"');
                var t = new H;
                return arguments.length > 0 && tn(Hn, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, T.Map.prototype), t
            }, T.Map.prototype = w(H.prototype), b(T.Map.prototype, "constructor", T.Map, !0), m.preserveToString(T.Map, H));
            var an = new Map, un = function () {
                var t = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
                return t.set(-0, t), t.get(0) === t && t.get(-0) === t && t.has(0) && t.has(-0)
            }(), cn = an.set(1, 2) === an;
            un && cn || nt(Map.prototype, "set", function (t, e) {
                return r($, this, 0 === t ? 0 : t, e), this
            }), un || (g(Map.prototype, {
                get: function (t) {
                    return r(V, this, 0 === t ? 0 : t)
                }, has: function (t) {
                    return r(B, this, 0 === t ? 0 : t)
                }
            }, !0), m.preserveToString(Map.prototype.get, V), m.preserveToString(Map.prototype.has, B));
            var sn = new Set, fn = Set.prototype["delete"] && Set.prototype.add && Set.prototype.has && function (t) {
                return t["delete"](0), t.add(-0), !t.has(0)
            }(sn), pn = sn.add(1) === sn;
            if (!fn || !pn) {
                var ln = Set.prototype.add;
                Set.prototype.add = function (t) {
                    return r(ln, this, 0 === t ? 0 : t), this
                }, m.preserveToString(Set.prototype.add, ln)
            }
            if (!fn) {
                var yn = Set.prototype.has;
                Set.prototype.has = function (t) {
                    return r(yn, this, 0 === t ? 0 : t)
                }, m.preserveToString(Set.prototype.has, yn);
                var hn = Set.prototype["delete"];
                Set.prototype["delete"] = function (t) {
                    return r(hn, this, 0 === t ? 0 : t)
                }, m.preserveToString(Set.prototype["delete"], hn)
            }
            var vn = j(T.Map, function (t) {
                var e = new t([]);
                return e.set(42, 42), e instanceof t
            }), bn = Object.setPrototypeOf && !vn, gn = function () {
                try {
                    return !(T.Map() instanceof T.Map)
                } catch (t) {
                    return t instanceof TypeError
                }
            }();
            0 === T.Map.length && !bn && gn || (T.Map = function Wn() {
                if (!(this instanceof Wn)) throw new TypeError('Constructor Map requires "new"');
                var t = new H;
                return arguments.length > 0 && tn(Wn, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, Wn.prototype), t
            }, T.Map.prototype = H.prototype, b(T.Map.prototype, "constructor", T.Map, !0), m.preserveToString(T.Map, H));
            var dn = j(T.Set, function (t) {
                var e = new t([]);
                return e.add(42, 42), e instanceof t
            }), On = Object.setPrototypeOf && !dn, mn = function () {
                try {
                    return !(T.Set() instanceof T.Set)
                } catch (t) {
                    return t instanceof TypeError
                }
            }();
            if (0 !== T.Set.length || On || !mn) {
                var wn = T.Set;
                T.Set = function Vn() {
                    if (!(this instanceof Vn)) throw new TypeError('Constructor Set requires "new"');
                    var t = new wn;
                    return arguments.length > 0 && en(Vn, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, Vn.prototype), t
                }, T.Set.prototype = wn.prototype, b(T.Set.prototype, "constructor", T.Set, !0), m.preserveToString(T.Set, wn)
            }
            var jn = new T.Map, Sn = !u(function () {
                return jn.keys().next().done
            });
            if (("function" != typeof T.Map.prototype.clear || 0 !== (new T.Set).size || 0 !== jn.size || "function" != typeof T.Map.prototype.keys || "function" != typeof T.Set.prototype.keys || "function" != typeof T.Map.prototype.forEach || "function" != typeof T.Set.prototype.forEach || c(T.Map) || c(T.Set) || "function" != typeof jn.keys().next || Sn || !vn) && g(T, {
                Map: rn.Map,
                Set: rn.Set
            }, !0), T.Set.prototype.keys !== T.Set.prototype.values && b(T.Set.prototype, "keys", T.Set.prototype.values, !0), Mt(Object.getPrototypeOf((new T.Map).keys())), Mt(Object.getPrototypeOf((new T.Set).keys())), p && "has" !== T.Set.prototype.has.name) {
                var Tn = T.Set.prototype.has;
                nt(T.Set.prototype, "has", function (t) {
                    return r(Tn, this, t)
                })
            }
        }
        g(T, rn), Ct(T.Map), Ct(T.Set)
    }
    var In = function (t) {
        if (!ft.TypeIsObject(t)) throw new TypeError("target must be an object")
    }, En = {
        apply: function () {
            return ft.Call(ft.Call, null, arguments)
        }, construct: function (t, e) {
            if (!ft.IsConstructor(t)) throw new TypeError("First argument must be a constructor.");
            var r = arguments.length > 2 ? arguments[2] : t;
            if (!ft.IsConstructor(r)) throw new TypeError("new.target must be a constructor.");
            return ft.Construct(t, e, r, "internal")
        }, deleteProperty: function (t, e) {
            if (In(t), f) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (r && !r.configurable) return !1
            }
            return delete t[e]
        }, has: function (t, e) {
            return In(t), e in t
        }
    };
    Object.getOwnPropertyNames && Object.assign(En, {
        ownKeys: function (t) {
            In(t);
            var e = Object.getOwnPropertyNames(t);
            return ft.IsCallable(Object.getOwnPropertySymbols) && N(e, Object.getOwnPropertySymbols(t)), e
        }
    });
    var Pn = function (t) {
        return !a(t)
    };
    if (Object.preventExtensions && Object.assign(En, {
        isExtensible: function (t) {
            return In(t), Object.isExtensible(t)
        }, preventExtensions: function (t) {
            return In(t), Pn(function () {
                return Object.preventExtensions(t)
            })
        }
    }), f) {
        var Cn = function (t, e, r) {
            var n = Object.getOwnPropertyDescriptor(t, e);
            if (!n) {
                var o = Object.getPrototypeOf(t);
                if (null === o) return;
                return Cn(o, e, r)
            }
            return "value" in n ? n.value : n.get ? ft.Call(n.get, r) : void 0
        }, Mn = function (t, e, n, o) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            if (!i) {
                var a = Object.getPrototypeOf(t);
                if (null !== a) return Mn(a, e, n, o);
                i = {value: void 0, writable: !0, enumerable: !0, configurable: !0}
            }
            if ("value" in i) {
                if (!i.writable) return !1;
                if (!ft.TypeIsObject(o)) return !1;
                var u = Object.getOwnPropertyDescriptor(o, e);
                return u ? at.defineProperty(o, e, {value: n}) : at.defineProperty(o, e, {
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })
            }
            return !!i.set && (r(i.set, o, n), !0)
        };
        Object.assign(En, {
            defineProperty: function (t, e, r) {
                return In(t), Pn(function () {
                    return Object.defineProperty(t, e, r)
                })
            }, getOwnPropertyDescriptor: function (t, e) {
                return In(t), Object.getOwnPropertyDescriptor(t, e)
            }, get: function (t, e) {
                In(t);
                var r = arguments.length > 2 ? arguments[2] : t;
                return Cn(t, e, r)
            }, set: function (t, e, r) {
                In(t);
                var n = arguments.length > 3 ? arguments[3] : t;
                return Mn(t, e, r, n)
            }
        })
    }
    if (Object.getPrototypeOf) {
        var xn = Object.getPrototypeOf;
        En.getPrototypeOf = function (t) {
            return In(t), xn(t)
        }
    }
    if (Object.setPrototypeOf && En.getPrototypeOf) {
        var Nn = function (t, e) {
            for (var r = e; r;) {
                if (t === r) return !0;
                r = En.getPrototypeOf(r)
            }
            return !1
        };
        Object.assign(En, {
            setPrototypeOf: function (t, e) {
                if (In(t), null !== e && !ft.TypeIsObject(e)) throw new TypeError("proto must be an object or null");
                return e === at.getPrototypeOf(t) || !(at.isExtensible && !at.isExtensible(t)) && (!Nn(t, e) && (Object.setPrototypeOf(t, e), !0))
            }
        })
    }
    var An = function (t, e) {
        if (ft.IsCallable(T.Reflect[t])) {
            var r = u(function () {
                return T.Reflect[t](1), T.Reflect[t](NaN), T.Reflect[t](!0), !0
            });
            r && nt(T.Reflect, t, e)
        } else b(T.Reflect, t, e)
    };
    Object.keys(En).forEach(function (t) {
        An(t, En[t])
    });
    var _n = T.Reflect.getPrototypeOf;
    if (p && _n && "getPrototypeOf" !== _n.name && nt(T.Reflect, "getPrototypeOf", function (t) {
        return r(_n, T.Reflect, t)
    }), T.Reflect.setPrototypeOf && u(function () {
        return T.Reflect.setPrototypeOf(1, {}), !0
    }) && nt(T.Reflect, "setPrototypeOf", En.setPrototypeOf), T.Reflect.defineProperty && (u(function () {
        var t = !T.Reflect.defineProperty(1, "test", {value: 1}),
            e = "function" != typeof Object.preventExtensions || !T.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
        return t && e
    }) || nt(T.Reflect, "defineProperty", En.defineProperty)), T.Reflect.construct && (u(function () {
        var t = function () {
        };
        return T.Reflect.construct(function () {
        }, [], t) instanceof t
    }) || nt(T.Reflect, "construct", En.construct)), "Invalid Date" !== String(new Date(NaN))) {
        var Rn = Date.prototype.toString, kn = function () {
            var t = +this;
            return t !== t ? "Invalid Date" : ft.Call(Rn, this)
        };
        nt(Date.prototype, "toString", kn)
    }
    var Ln = {
        anchor: function (t) {
            return ft.CreateHTML(this, "a", "name", t)
        }, big: function () {
            return ft.CreateHTML(this, "big", "", "")
        }, blink: function () {
            return ft.CreateHTML(this, "blink", "", "")
        }, bold: function () {
            return ft.CreateHTML(this, "b", "", "")
        }, fixed: function () {
            return ft.CreateHTML(this, "tt", "", "")
        }, fontcolor: function (t) {
            return ft.CreateHTML(this, "font", "color", t)
        }, fontsize: function (t) {
            return ft.CreateHTML(this, "font", "size", t)
        }, italics: function () {
            return ft.CreateHTML(this, "i", "", "")
        }, link: function (t) {
            return ft.CreateHTML(this, "a", "href", t)
        }, small: function () {
            return ft.CreateHTML(this, "small", "", "")
        }, strike: function () {
            return ft.CreateHTML(this, "strike", "", "")
        }, sub: function () {
            return ft.CreateHTML(this, "sub", "", "")
        }, sup: function () {
            return ft.CreateHTML(this, "sup", "", "")
        }
    };
    l(Object.keys(Ln), function (t) {
        var e = String.prototype[t], n = !1;
        if (ft.IsCallable(e)) {
            var o = r(e, "", ' " '), i = C([], o.match(/"/g)).length;
            n = o !== o.toLowerCase() || i > 2
        } else n = !0;
        n && nt(String.prototype, t, Ln[t])
    });
    var Fn = function () {
        if (!ot) return !1;
        var t = "object" == typeof JSON && "function" == typeof JSON.stringify ? JSON.stringify : null;
        if (!t) return !1;
        if ("undefined" != typeof t(U())) return !0;
        if ("[null]" !== t([U()])) return !0;
        var e = {a: U()};
        return e[U()] = !0, "{}" !== t(e)
    }(), Dn = u(function () {
        return !ot || "{}" === JSON.stringify(Object(U())) && "[{}]" === JSON.stringify([Object(U())])
    });
    if (Fn || !Dn) {
        var zn = JSON.stringify;
        nt(JSON, "stringify", function (t) {
            if ("symbol" != typeof t) {
                var e;
                arguments.length > 1 && (e = arguments[1]);
                var o = [t];
                if (n(e)) o.push(e); else {
                    var i = ft.IsCallable(e) ? e : null, a = function (t, e) {
                        var n = i ? r(i, this, t, e) : e;
                        if ("symbol" != typeof n) return rt.symbol(n) ? Ne({})(n) : n
                    };
                    o.push(a)
                }
                return arguments.length > 2 && o.push(arguments[2]), zn.apply(this, o)
            }
        })
    }
    return T
});