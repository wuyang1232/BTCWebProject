(function () {
    var h = {}, mt = {}, c = {
        id: "a969e33c1981f1f9888ff0470b3ff5cb",
        dm: ["baoquan.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        cetrk: [],
        cptrk: [],
        icon: '',
        ctrk: ["%5b%22https%3a%5c%2f%5c%2fbaoquan.com%22%2c%22https%3a%5c%2f%5c%2fbaoquan.com%5c%2fproduction%5c%2felectronic-certificate%3flang%3dzh%22%2c%22https%3a%5c%2f%5c%2fbaoquan.com%5c%2fproduction%5c%2fbaoquan-visa%3flang%3dzh%22%2c%22https%3a%5c%2f%5c%2fbaoquan.com%5c%2fproduction%3flang%3dzh%22%2c%22https%3a%5c%2f%5c%2fbaoquan.com%5c%2fproduction%5c%2fprotection%3flang%3dzh%22%5d"],
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        oc: 0,
        aet: '',
        hca: 'EA75FC261C31DEF9',
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var t = void 0, v = !0, x = null, y = !1;
    mt.cookie = {};
    mt.cookie.set = function (a, b, g) {
        var f;
        g.R && (f = new Date, f.setTime(f.getTime() + g.R));
        document.cookie = a + "=" + b + (g.domain ? "; domain=" + g.domain : "") + (g.path ? "; path=" + g.path : "") + (f ? "; expires=" + f.toGMTString() : "") + (g.Qc ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : x
    };
    mt.cookie.rc = function (a, b) {
        try {
            var g = "Hm_ck_" + +new Date;
            mt.cookie.set(g, "is-cookie-enabled", {domain: a, path: b, R: t});
            var f = "is-cookie-enabled" === mt.cookie.get(g) ? "1" : "0";
            mt.cookie.set(g, "", {domain: a, path: b, R: -1});
            return f
        } catch (d) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.cb = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.H = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.lang.isArray = function (a) {
        return mt.lang.d(a, "Array")
    };
    mt.lang.h = function (a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.lang.trim = function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.G = function (a, b) {
        var g = y;
        if (a == x || !mt.lang.d(a, "Array") || b === t) return g;
        if (Array.prototype.indexOf) g = -1 !== a.indexOf(b); else for (var f = 0; f < a.length; f++) if (a[f] === b) {
            g = v;
            break
        }
        return g
    };
    mt.url = {};
    mt.url.m = function (a, b) {
        var g = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return g ? g[3] : x
    };
    mt.url.Lc = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : x
    };
    mt.url.Vb = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : x
    };
    mt.url.L = function (a) {
        return (a = mt.url.Vb(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Fa = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : x
    };
    (function () {
        var a = mt.lang, b = mt.url;
        mt.f = {};
        mt.f.Wa = function (a) {
            return document.getElementById(a)
        };
        mt.f.Da = function (a) {
            if (!a) return x;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCQ!")) return a;
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var f = a.split(">"), d = document.body, b = f.length - 1; 0 <= b; b--) if (-1 < f[b].indexOf("#")) {
                    var e = f[b].split("#")[1];
                    (d = document.getElementById(e)) || (d = document.getElementById(decodeURIComponent(e)));
                    f = f.splice(b + 1, f.length - (b + 1));
                    break
                }
                for (a =
                         0; d && a < f.length;) {
                    var l = String(f[a]).toLowerCase();
                    if (!("html" === l || "body" === l)) {
                        var b = 0, n = f[a].match(/\[(\d+)\]/i), e = [];
                        if (n) b = n[1] - 1, l = l.split("[")[0]; else if (1 !== d.childNodes.length) {
                            for (var q = 0, s = 0, p = d.childNodes.length; s < p; s++) {
                                var r = d.childNodes[s];
                                1 === r.nodeType && r.nodeName.toLowerCase() === l && q++;
                                if (1 < q) return x
                            }
                            if (1 !== q) return x
                        }
                        for (q = 0; q < d.childNodes.length; q++) 1 === d.childNodes[q].nodeType && d.childNodes[q].nodeName.toLowerCase() === l && e.push(d.childNodes[q]);
                        if (!e[b]) return x;
                        d = e[b]
                    }
                    a++
                }
                return d
            } catch (k) {
                return x
            }
        };
        mt.f.Fa = function (a, f) {
            var d = [], b = [];
            if (!a) return b;
            for (; a.parentNode != x;) {
                for (var e = 0, l = 0, n = a.parentNode.childNodes.length, q = 0; q < n; q++) {
                    var s = a.parentNode.childNodes[q];
                    if (s.nodeName === a.nodeName && (e++, s === a && (l = e), 0 < l && 1 < e)) break
                }
                if ((n = "" !== a.id) && f) {
                    d.unshift("#" + encodeURIComponent(a.id));
                    break
                } else n && (n = "#" + encodeURIComponent(a.id), n = 0 < d.length ? n + ">" + d.join(">") : n, b.push(n)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < e ? "[" + l + "]" : ""));
                a = a.parentNode
            }
            b.push(d.join(">"));
            return b
        };
        mt.f.ma = function (a) {
            return (a = mt.f.Fa(a, v)) && a.length ? String(a[0]) : ""
        };
        mt.f.Zb = function (a) {
            return mt.f.Fa(a, y)
        };
        mt.f.Xa = function (a) {
            var f;
            for (f = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == f) return a;
            return x
        };
        mt.f.Rb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.Ya = function (a) {
            var f = {top: 0, left: 0};
            if (!a) return f;
            var d = mt.f.Rb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (f = a.getBoundingClientRect());
            return {
                top: f.top + (window.pageYOffset || d.scrollTop) -
                    (d.clientTop || 0), left: f.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, f) {
            var d = a.getAttribute && a.getAttribute(f) || x;
            if (!d && a.attributes && a.attributes.length) for (var b = a.attributes, e = b.length, l = 0; l < e; l++) b[l].nodeName === f && (d = b[l].nodeValue);
            return d
        };
        mt.f.V = function (a) {
            var f = "document";
            a.tagName !== t && (f = a.tagName);
            return f.toLowerCase()
        };
        mt.f.bc = function (b) {
            var f = "";
            b.textContent ? f = a.trim(b.textContent) : b.innerText && (f = a.trim(b.innerText));
            f && (f = f.replace(/\s+/g,
                " ").substring(0, 255));
            return f
        };
        mt.f.U = function (g, f) {
            var d;
            a.H(g) && 0 === String(g).indexOf("!HMCQ!") ? (d = String(g), d = b.m(document.location.href, d.substring(6, d.length))) : a.H(g) || (d = mt.f.V(g), "input" === d && f && ("button" === g.type || "submit" === g.type) ? d = a.trim(g.value) || "" : "input" === d && !f && "password" !== g.type ? d = a.trim(g.value) || "" : "img" === d ? (d = mt.f.getAttribute, d = d(g, "alt") || d(g, "title") || d(g, "src")) : d = "body" === d || "html" === d ? ["(hm-default-content-for-", d, ")"].join("") : mt.f.bc(g));
            return String(d || "").substring(0,
                255)
        };
        (function () {
            (mt.f.jb = function () {
                function a() {
                    if (!a.pa) {
                        a.pa = v;
                        for (var f = 0, d = b.length; f < d; f++) b[f]()
                    }
                }

                function f() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(f, 1);
                        return
                    }
                    a()
                }

                var d = y, b = [], e;
                document.addEventListener ? e = function () {
                    document.removeEventListener("DOMContentLoaded", e, y);
                    a()
                } : document.attachEvent && (e = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", e), a())
                });
                (function () {
                    if (!d) if (d = v, "complete" === document.readyState) a.pa = v;
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, y), window.addEventListener("load", a, y); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", e);
                        window.attachEvent("onload", a);
                        var b = y;
                        try {
                            b = window.frameElement == x
                        } catch (n) {
                        }
                        document.documentElement.doScroll && b && f()
                    }
                })();
                return function (f) {
                    a.pa ? f() : b.push(f)
                }
            }()).pa = y
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.e = function (a, b, g) {
        a.attachEvent ? a.attachEvent("on" + b, function (f) {
            g.call(a, f)
        }) : a.addEventListener && a.addEventListener(b, g, y)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = y
    };
    (function () {
        var a = mt.event;
        mt.g = {};
        mt.g.na = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.g.Wb = function () {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.g.Nc = function () {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (a) {
                return y
            }
        };
        mt.g.cookieEnabled = navigator.cookieEnabled;
        mt.g.javaEnabled = navigator.javaEnabled();
        mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.g.wc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.g.colorDepth = window.screen.colorDepth || 0;
        mt.g.W = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.g.M = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.g.tb =
            0;
        mt.g.ec = function () {
            var a = document;
            return parseInt(window.innerWidth || a.documentElement.clientWidth || a.body.offsetWidth || 0, 10)
        };
        mt.g.orientation = 0;
        (function () {
            function b() {
                var a = 0;
                window.orientation !== t && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== t) && (a = screen.orientation.angle);
                mt.g.orientation = a;
                mt.g.tb = mt.g.ec()
            }

            b();
            a.e(window, "orientationchange", b)
        })();
        return mt.g
    })();
    mt.s = {};
    mt.s.parse = function (a) {
        return (new Function("return (" + a + ")"))()
    };
    mt.s.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var f = g[a];
                if (f) return f;
                f = a.charCodeAt();
                return "\\u00" + Math.floor(f / 16).toString(16) + (f % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var g = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (f) {
            switch (typeof f) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(f) ? String(f) : "null";
                case "string":
                    return a(f);
                case "boolean":
                    return String(f);
                default:
                    if (f === x) return "null";
                    if (f instanceof Array) {
                        var d = ["["], g = f.length, e, l, n;
                        for (l = 0; l < g; l++) switch (n = f[l], typeof n) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                e && d.push(","), d.push(mt.s.stringify(n)), e = 1
                        }
                        d.push("]");
                        return d.join("")
                    }
                    if (f instanceof Date) return '"' + f.getFullYear() + "-" + b(f.getMonth() + 1) + "-" + b(f.getDate()) + "T" + b(f.getHours()) + ":" + b(f.getMinutes()) + ":" + b(f.getSeconds()) + '"';
                    e = ["{"];
                    l = mt.s.stringify;
                    for (g in f) if (Object.prototype.hasOwnProperty.call(f, g)) switch (n =
                        f[g], typeof n) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            d && e.push(","), d = 1, e.push(l(g) + ":" + l(n))
                    }
                    e.push("}");
                    return e.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.xa = function () {
        if (!mt.localStorage.l) try {
            mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)
        } catch (a) {
            return y
        }
        return v
    };
    mt.localStorage.set = function (a, b, g) {
        var f = new Date;
        f.setTime(f.getTime() + g || 31536E6);
        try {
            window.localStorage ? (b = f.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.xa() && (mt.localStorage.l.expires = f.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(a, b), mt.localStorage.l.save(document.location.hostname))
        } catch (d) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), g = a.substring(0, b) - 0;
                if (g && g > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.xa()) try {
            return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(a)
        } catch (f) {
        }
        return x
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.xa()) try {
            mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(a), mt.localStorage.l.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(a, b)
        } catch (g) {
        }
    };
    mt.sessionStorage.get = function (a) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(a) : x
        } catch (b) {
            return x
        }
    };
    mt.sessionStorage.remove = function (a) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(a)
        } catch (b) {
        }
    };
    mt.pb = {};
    mt.pb.log = function (a, b) {
        var g = new Image, f = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[f] = g;
        g.onload = function () {
            g.onload = x;
            g = window[f] = x;
            b && b(a)
        };
        g.src = a
    };
    mt.Na = {};
    mt.Na.dc = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (g) {
        }
        return a
    };
    mt.Na.Kc = function (a, b, g, f, d) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + g + '" height="' + f + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (d || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + g + '" height="' + f + '" src="' + b + '" flashvars="' + (d || "") + '" allowscriptaccess="always" /></object>'
    };
    h.A = {
        Mc: "http://tongji.baidu.com/hm-web/welcome/ico",
        Ma: "hm.baidu.com/hm.gif",
        Ab: /^(tongji|hmcdn).baidu.com$/,
        rb: "tongji.baidu.com",
        ic: "hmmd",
        jc: "hmpl",
        Hc: "utm_medium",
        hc: "hmkw",
        Jc: "utm_term",
        fc: "hmci",
        Gc: "utm_content",
        kc: "hmsr",
        Ic: "utm_source",
        gc: "hmcu",
        Fc: "utm_campaign",
        N: 0,
        J: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        ra: "https:",
        Oc: 0,
        Gb: 6E5,
        Pc: 6E5,
        xc: 5E3,
        Hb: 5,
        P: 1024,
        Fb: 1,
        ca: 2147483647,
        qb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
        Y: v,
        Ta: ["a", "input", "button"],
        Qa: {
            id: "data-hm-id",
            ha: "data-hm-class",
            ga: "data-hm-xpath",
            content: "data-hm-content",
            ua: "data-hm-tag",
            link: "data-hm-link"
        },
        Sa: "data-hm-enabled",
        Ra: "data-hm-disabled",
        tc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        ib: ["UrlChangeTracker", "OcpcCbHm"]
    };
    (function () {
        var a = {
            F: {}, e: function (a, g) {
                this.F[a] = this.F[a] || [];
                this.F[a].push(g)
            }, K: function (a, g) {
                this.F[a] = this.F[a] || [];
                for (var f = this.F[a].length, d = 0; d < f; d++) this.F[a][d](g)
            }
        };
        return h.z = a
    })();
    (function () {
        var a = mt.lang, b = /^https?:\/\//, g = {
            Qb: function (a) {
                var d;
                try {
                    d = JSON.parse(decodeURIComponent(a[0]))
                } catch (b) {
                }
                return d
            }, eb: function (a, d) {
                var g = h.c && h.c.b && h.c.b.u || document.location.href;
                b.test(a) || (g = g.replace(b, ""));
                a = a.replace(/\/$/, "");
                g = g.replace(/\/$/, "");
                d && (g = g.replace(/^(https?:\/\/)?www\./, "$1"));
                return RegExp("^" + a.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(g)
            }, S: function (f, d) {
                var b = g.Qb(f);
                if (!a.d(b, "Undefined")) {
                    if (a.d(b, "Array")) {
                        for (var e = 0; e < b.length; e++) if (g.eb(b[e],
                            d)) return v;
                        return y
                    }
                    if (a.d(b, "Object")) {
                        var e = [], l;
                        for (l in b) b.hasOwnProperty(l) && g.eb(l, d) && (e = e.concat(b[l]));
                        return e
                    }
                }
            }
        };
        return h.ia = g
    })();
    (function () {
        function a(a, f) {
            var d = document.createElement("script");
            d.charset = "utf-8";
            b.d(f, "Function") && (d.readyState ? d.onreadystatechange = function () {
                if ("loaded" === d.readyState || "complete" === d.readyState) d.onreadystatechange = x, f()
            } : d.onload = function () {
                f()
            });
            d.src = a;
            var u = document.getElementsByTagName("script")[0];
            u.parentNode.insertBefore(d, u)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        var a = mt.cookie, b = mt.localStorage, g = mt.sessionStorage, f = {
            getData: function (f) {
                try {
                    return a.get(f) || g.get(f) || b.get(f)
                } catch (u) {
                }
            }, setData: function (d, u, e) {
                try {
                    a.set(d, u, {domain: f.T(), path: f.la(), R: e}), e ? b.set(d, u, e) : g.set(d, u)
                } catch (l) {
                }
            }, removeData: function (d) {
                try {
                    a.set(d, "", {domain: f.T(), path: f.la(), R: -1}), g.remove(d), b.remove(d)
                } catch (u) {
                }
            }, Z: function (a, f) {
                a = "." + a.replace(/:\d+/, "");
                f = "." + f.replace(/:\d+/, "");
                var b = a.indexOf(f);
                return -1 < b && b + f.length === a.length
            }, qa: function (a, f) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(f)
            }, T: function () {
                for (var a = document.location.hostname, b = 0, e = c.dm.length; b < e; b++) if (f.Z(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, la: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var e = c.dm[a];
                    if (-1 < e.indexOf("/") && f.qa(document.location.href, e)) return e.replace(/^[^/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }
        };
        return h.Aa = f
    })();
    (function () {
        var a = mt.lang, b = mt.s, g = h.Aa,
            f = {pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {}},
            d = {user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3},
            u = ["session", "user"], e = "Hm_up_" + c.id, l = {
                init: function () {
                    l.nc()
                }, nc: function () {
                    try {
                        var d = b.parse(decodeURIComponent(g.getData(e)));
                        a.d(d, "Object") && (f.user = d)
                    } catch (q) {
                    }
                }, B: function (a) {
                    var b = {};
                    f[a] !== t && (b = f[a]);
                    a = this.Ga();
                    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
                    return a
                }, Ga: function () {
                    for (var a = {}, b, d = u.length -
                        1; 0 <= d; d--) {
                        b = f[u[d]];
                        for (var p in b) b.hasOwnProperty(p) && (a[p] = b[p])
                    }
                    return a
                }, setProperty: function (d, e, g) {
                    var p = f[d];
                    if (a.d(p, "Object") && a.d(e, "Object")) {
                        for (var r in e) if (e.hasOwnProperty(r)) {
                            var k = a.h(String(r));
                            if (g || !/^_/.test(k) && !/_$/.test(k) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)) {
                                var m = e[r];
                                if (m == x) delete p[k]; else {
                                    if (a.d(m, "Object") || a.d(m, "Array")) m = b.stringify(m);
                                    m = a.h(String(m));
                                    l.qc(d, k, m) && (p[k] = {value: m, scope: l.$a(d)})
                                }
                            }
                        }
                        "user" === d && l.Ka()
                    }
                }, o: function (b) {
                    b !== t && ("userId" ===
                    b && a.d(f.user, "Object") ? (delete f.user.uid_, l.Ka()) : "user" === b && a.d(f.user, "Object") ? (b = f.user.uid_, f.user = b === t ? {} : {uid_: b}, l.Ka()) : f[b] !== t && (f[b] = {}))
                }, Ka: function () {
                    try {
                        g.setData(e, encodeURIComponent(b.stringify(f.user)), c.age)
                    } catch (a) {
                    }
                }, qc: function (a, b, d) {
                    var p = v, e = f[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(d)).length) p = y; else {
                        var k = e[b];
                        e[b] = {value: d, scope: l.$a(a)};
                        a = l.O(l.B(a));
                        2048 < encodeURIComponent(a).length && (k !== t ? e[b] = k : delete e[b], p = y)
                    }
                    return p
                },
                O: function (a) {
                    var b = [], f, d;
                    for (d in a) a.hasOwnProperty(d) && (f = [d, a[d].value], (1 === a[d].scope || 2 === a[d].scope) && f.push(a[d].scope), b.push(f.join("*")));
                    return b.join("!")
                }, $a: function (a) {
                    a = d[a];
                    return a !== t ? a : d.others
                }
            };
        return h.Q = l
    })();
    (function () {
        var a = mt.f, b = mt.lang, g = h.z, f = h.ia, d = h.Q, u = d.O;
        if (b.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var e = {
                hb: {}, va: {}, init: function () {
                    for (var a, d = f.S(c.cptrk) || [], q = 0; q < d.length; q++) if (a = d[q], a.a !== t && b.d(a.a, "Object")) {
                        a = a.a;
                        for (var g in a) a.hasOwnProperty(g) && (e.va[g] = String(a[g]))
                    }
                }, gb: function () {
                    var b, f, d;
                    for (d in e.va) if (e.va.hasOwnProperty(d) && e.hb[d] === t && (b = e.va[d], b = a.Da(b))) f = f === t ? {} : f, f[d] = a.U(b, y), e.hb[d] = v;
                    return f
                }, Ha: function () {
                    var a = e.gb();
                    a && e.zc(a)
                }, mc: function () {
                    "MutationObserver" in
                    window ? (new MutationObserver(e.Ha)).observe(document.body, {
                        childList: v,
                        subtree: v
                    }) : window.setInterval(e.Ha, 15E3)
                }, zc: function (a) {
                    if (b.d(a, "Object")) try {
                        d.setProperty("pageview", a);
                        var f = h.c.b.p, e = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = u(d.B("pageview"));
                        h.c.i();
                        h.c.b.p = f;
                        h.c.b.ep = e;
                        d.o("pageview")
                    } catch (g) {
                    }
                }
            };
            e.init();
            g.e("pv-b", function () {
                var a = e.gb();
                a && d.setProperty("pageview", a)
            });
            e.mc();
            a.jb(e.Ha)
        }
    })();
    (function () {
        var a = mt.lang, b = mt.f, g = h.ia, f = {
            ka: function (a, u) {
                return function (e) {
                    var l = e.target || e.srcElement;
                    if (l) {
                        var n = g.S(u) || [], q = l.getAttribute(a.wa);
                        e = e.clientX + ":" + e.clientY;
                        if (q && q === e) l.removeAttribute(a.wa); else if (0 < n.length && (l = b.Zb(l)) && l.length) if (n = l.length, q = l[l.length - 1], 1E4 > n * q.split(">").length) for (q = 0; q < n; q++) f.ob(a, l[q]); else f.ob(a, q)
                    }
                }
            }, ob: function (b, f) {
                for (var e = {}, g = String(f).split(">").length, n = 0; n < g; n++) e[f] = "", f = f.substring(0, f.lastIndexOf(">"));
                b && (a.d(b, "Object") && b.Ua) &&
                b.Ua(e)
            }, vc: function (a, b) {
                return function (f) {
                    (f.target || f.srcElement).setAttribute(a.wa, f.clientX + ":" + f.clientY);
                    a && a.w && (b ? a.w(b) : a.w("#" + encodeURIComponent(this.id), f.type))
                }
            }
        };
        return h.Ca = f
    })();
    (function () {
        var a = mt.f, b = mt.event, g = mt.lang, f = h.A, d = h.ia, u = h.Ca, e = h.Q, l = e.O, n = {
            wa: "HM_ce", vb: function () {
                if (c.cetrk && 0 < c.cetrk.length) {
                    b.e(document, "click", u.ka(n, c.cetrk));
                    for (var f = d.S(c.cetrk) || [], e = 0, p = f.length; e < p; e++) {
                        var g = f[e], k = g.p || "";
                        -1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.Wa(k)) && b.e(k, "click", u.vc(n, g)))
                    }
                }
            }, Ua: function (a) {
                for (var b = d.S(c.cetrk) || [], f = 0; f < b.length; f++) {
                    var e = b[f], k = n.Tb(e.p, a);
                    k && n.w(e, k)
                }
            }, Tb: function (a, b) {
                a = String(a);
                if (0 < a.indexOf("*")) {
                    var f =
                        RegExp("^" + a.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"), d;
                    for (d in b) if (b.hasOwnProperty(d) && f.test(d)) return d;
                    return x
                }
                return b.hasOwnProperty(a) ? a : x
            }, w: function (b, f) {
                h.c.b.et = 7;
                var d = b && b.k || "", d = g.h(d), r = {};
                if (b && b.a && g.d(b.a, "Object")) {
                    var k = b.a, m;
                    for (m in k) if (k.hasOwnProperty(m)) {
                        var w = n.$b(k[m] || "", f), w = w ? a.U(w, y) : "";
                        r[m] = w
                    }
                }
                r = n.Ob(r, f || b && b.p);
                r._iden = d;
                e.setProperty("customEvent", r);
                h.c.b.ep = "";
                h.c.b.p = l(e.B("customEvent"));
                h.c.i();
                h.c.b.p = "";
                e.o("customEvent")
            },
            Ob: function (b, d) {
                var e = a.Da(d), g = f.Qa;
                e && (c.aet && c.aet.length ? (b.ei_ = a.getAttribute(e, g.id) || a.getAttribute(e, "id") || "", b.ec_ = a.getAttribute(e, g.ha) || a.getAttribute(e, "class") || "", b.ex_ = a.getAttribute(e, g.ga) || a.ma(e), b.en_ = a.getAttribute(e, g.content) || a.U(e, v), b.et_ = a.getAttribute(e, g.ua) || a.V(e), b.el_ = a.getAttribute(e, g.link) || a.getAttribute(e, "href") || "") : (b.ex_ = a.getAttribute(e, g.ga) || a.ma(e), b.en_ = a.getAttribute(e, g.content) || a.U(e, v)));
                return b
            }, $b: function (b, f) {
                b = String(b);
                f = String(f);
                if (0 <
                    b.indexOf("*")) {
                    var d = /.*\[(\d+)\]$/.exec(f);
                    b = b.replace("*", d ? d[1] : "1")
                }
                return a.Da(b)
            }
        };
        h.z.e("pv-b", n.vb);
        return n
    })();
    (function () {
        var a = mt.f, b = mt.lang, g = mt.event, f = mt.g, d = h.A, u = h.ia, e = [], l = {
            ub: function () {
                c.ctrk && 0 < c.ctrk.length && (g.e(document, "mouseup", l.Eb()), g.e(window, "unload", function () {
                    l.sa()
                }), setInterval(function () {
                    l.sa()
                }, d.Gb))
            }, Eb: function () {
                return function (a) {
                    if (u.S(c.ctrk, v) && (a = l.Pb(a), "" !== a)) {
                        var b = (d.ra + "//" + d.Ma + "?" + h.c.nb().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                        b + (d.ca + "").length > d.P || (b + encodeURIComponent(e.join("!") + (e.length ? "!" : "")).length + (d.ca + "").length > d.P && l.sa(), e.push(a),
                        (e.length >= d.Hb || /\*a\*/.test(a)) && l.sa())
                    }
                }
            }, Pb: function (e) {
                var g = e.target || e.srcElement;
                if (0 === d.Fb) {
                    var s = (g.tagName || "").toLowerCase();
                    if ("embed" == s || "object" == s) return ""
                }
                var p;
                f.na ? (p = Math.max(document.documentElement.scrollTop, document.body.scrollTop), s = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), s = e.clientX + s, p = e.clientY + p) : (s = e.pageX, p = e.pageY);
                e = l.Xb(e, g, s, p);
                var r = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        s -=
                            r / 2;
                        break;
                    case 2:
                        s -= r
                }
                r = [];
                r.push(s);
                r.push(p);
                r.push(e.ba);
                r.push(e.da);
                r.push(e.uc);
                r.push(b.h(e.sc));
                r.push(e.fa);
                r.push(e.X);
                (g = "a" === (g.tagName || "").toLowerCase() ? g : a.Xa(g)) ? (r.push("a"), r.push(b.h(encodeURIComponent(g.href)))) : r.push("b");
                return r.join("*")
            }, Xb: function (d, e, g, p) {
                d = a.ma(e);
                var r = 0, k = 0, m = 0, w = 0;
                if (e && (r = e.offsetWidth || e.clientWidth, k = e.offsetHeight || e.clientHeight, w = a.Ya(e), m = w.left, w = w.top, b.d(e.getBBox, "Function") && (k = e.getBBox(), r = k.width, k = k.height), "html" === (e.tagName || "").toLowerCase())) r =
                    Math.max(r, e.clientWidth), k = Math.max(k, e.clientHeight);
                return {
                    ba: Math.round(100 * ((g - m) / r)),
                    da: Math.round(100 * ((p - w) / k)),
                    uc: f.orientation,
                    sc: d,
                    fa: r,
                    X: k
                }
            }, sa: function () {
                0 !== e.length && (h.c.b.et = 2, h.c.b.ep = e.join("!"), h.c.i(), e = [])
            }
        };
        h.z.e("pv-b", l.ub);
        return l
    })();
    (function () {
        var a = mt.lang, b = mt.f, g = mt.event, f = mt.g, d = h.A, u = h.z, e = h.Q, l = e.O, n = +new Date, q = [],
            s = {
                ka: function () {
                    return function (f) {
                        if (h.c && h.c.Y && c.aet && c.aet.length) {
                            var e = f.target || f.srcElement;
                            if (e) {
                                var g = h.c.Ta, m = b.getAttribute(e, d.Sa) != x ? v : y;
                                if (b.getAttribute(e, d.Ra) == x) if (m) s.ya(s.Ea(e, f)); else {
                                    var w = b.V(e);
                                    if (a.G(g, "*") || a.G(g, w)) s.ya(s.Ea(e, f)); else for (; e.parentNode != x;) {
                                        var m = e.parentNode, w = b.V(m), z = "a" === w && a.G(g, "a") ? v : y,
                                            w = "button" === w && a.G(g, "button") ? v : y,
                                            A = b.getAttribute(m, d.Sa) != x ? v : y;
                                        if (b.getAttribute(m, d.Ra) == x && (z || w || A)) {
                                            s.ya(s.Ea(m, f));
                                            break
                                        }
                                        e = e.parentNode
                                    }
                                }
                            }
                        }
                    }
                }, Ea: function (e, g) {
                    var k = {}, m = d.Qa;
                    k.id = b.getAttribute(e, m.id) || b.getAttribute(e, "id") || "";
                    k.ha = b.getAttribute(e, m.ha) || b.getAttribute(e, "class") || "";
                    k.ga = b.getAttribute(e, m.ga) || b.ma(e);
                    k.content = b.getAttribute(e, m.content) || b.U(e, v);
                    k.ua = b.getAttribute(e, m.ua) || b.V(e);
                    k.link = b.getAttribute(e, m.link) || b.getAttribute(e, "href") || "";
                    k.type = g.type || "click";
                    m = a.cb(e.offsetTop) ? e.offsetTop : 0;
                    "click" === g.type ? m = f.na ? g.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.fb && g.fb.changedTouches) && (m = g.fb.changedTouches[0].pageY);
                    k.Ec = m;
                    m = this.Sb(g);
                    k.ba = m.ba || 0;
                    k.da = m.da || 0;
                    k.fa = m.fa || 0;
                    k.X = m.X || 0;
                    k.Oa = m.Oa || "b";
                    return k
                }, Sb: function (e) {
                    var d = e.target || e.srcElement, g;
                    if (f.na) {
                        var m = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                        g = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                        g = e.clientX + g;
                        e = e.clientY + m
                    } else g = e.pageX,
                        e = e.pageY;
                    var w = m = 0, z = 0, A = 0;
                    if (d && (m = d.offsetWidth || d.clientWidth, w = d.offsetHeight || d.clientHeight, A = b.Ya(d), z = A.left, A = A.top, a.d(d.getBBox, "Function") && (w = d.getBBox(), m = w.width, w = w.height), "html" === (d.tagName || "").toLowerCase())) m = Math.max(m, d.clientWidth), w = Math.max(w, d.clientHeight);
                    return {
                        ba: Math.round(100 * ((g - z) / m)),
                        da: Math.round(100 * ((e - A) / w)),
                        fa: m,
                        X: w,
                        Oa: ("a" === (d.tagName || "").toLowerCase() ? d : b.Xa(d)) ? "a" : "b"
                    }
                }, ya: function (b) {
                    var f = a.h;
                    b = [+new Date - (h.c.$ !== t ? h.c.$ : n), f(b.id), f(b.ha), f(b.ua),
                        f(b.ga), f(b.link), f(b.content), b.type, b.Ec, b.ba, b.da, b.fa, b.X, b.Oa].join("*");
                    s.za(b);
                    a.d(this.ea(), "Function") && this.ea()()
                }, za: function (a) {
                    a.length > d.P || (encodeURIComponent(q.join("!") + a).length > d.P && (s.w(q.join("!")), q = []), q.push(a))
                }, w: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    h.c.b.p = l(e.B("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = ""
                }, ea: function () {
                    return function () {
                        q && q.length && (s.w(q.join("!")), q = [])
                    }
                }
            };
        a.H(c.aet) && "" !== c.aet && u.e("pv-b", function () {
            g.e(document, "click", s.ka());
            "ontouchend" in document &&
            g.e(window, "touchend", s.ka());
            g.e(window, "unload", s.ea())
        });
        return s
    })();
    (function () {
        var a = mt.lang, b = mt.event, g = mt.g, f = h.A, d = h.z, u = +new Date, e = [], l = x, n = {
            yb: function () {
                a.H(c.aet) && "" !== c.aet && setInterval(n.mb, f.xc)
            }, mb: function () {
                var a = g.W() + g.M();
                0 < a - h.c.b.vl && (h.c.b.vl = a)
            }
        }, q = {
            Kb: function () {
                return function () {
                    h.c && (h.c.Y && c.aet && c.aet.length) && (window.clearTimeout(l), l = window.setTimeout(function () {
                        q.xb(g.W() + g.M())
                    }, 150))
                }
            }, xb: function (a) {
                q.za([+new Date - (h.c.$ !== t ? h.c.$ : u), a].join("*"))
            }, za: function (a) {
                if (encodeURIComponent(e.join("!") + a).length > f.P || 3 < e.length) q.w(e.join("!")),
                    e = [];
                e.push(a)
            }, w: function (a) {
                n.mb();
                h.c.b.et = 6;
                h.c.b.vh = g.M();
                h.c.b.ep = a;
                h.c.i()
            }, ea: function () {
                return function () {
                    e && e.length && (q.w(e.join("!")), e = [])
                }
            }
        };
        a.H(c.aet) && "" !== c.aet && d.e("pv-b", function () {
            b.e(window, "scroll", q.Kb());
            b.e(window, "unload", q.ea());
            n.yb()
        });
        return q
    })();
    (function () {
        function a() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.Ba.Yb() + "," + h.Ba.Ub();
                h.c.b.hca = c.hca;
                h.c.i()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            m && (a = "visible" == document[m]);
            w && (a = !document[w]);
            l = "undefined" == typeof a ? v : a;
            if ((!e || !n) && l && q) k = v, p = +new Date; else if (e && n && (!l || !q)) k = y, r += +new Date - p;
            e = l;
            n = q;
            z = setTimeout(b, 100)
        }

        function g(a) {
            var m = document, b = "";
            if (a in m) b = a; else for (var f = ["webkit", "ms", "moz", "o"], e = 0; e < f.length; e++) {
                var d = f[e] + a.charAt(0).toUpperCase() + a.slice(1);
                if (d in m) {
                    b = d;
                    break
                }
            }
            return b
        }

        function f(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) q = "focus" == a.type || "focusin" == a.type ? v : y, b()
        }

        var d = mt.event, u = h.z, e = v, l = v, n = v, q = v, s = +new Date, p = s, r = 0, k = v,
            m = g("visibilityState"), w = g("hidden"), z;
        b();
        (function () {
            var a = m.replace(/[vV]isibilityState/, "visibilitychange");
            d.e(document, a, b);
            d.e(window, "pageshow", b);
            d.e(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (d.e(document, "focusin", f), d.e(document, "focusout", f)) : (d.e(window,
                "focus", f), d.e(window, "blur", f))
        })();
        h.Ba = {
            Yb: function () {
                return +new Date - s
            }, Ub: function () {
                return k ? +new Date - p + r : r
            }
        };
        u.e("pv-b", function () {
            d.e(window, "unload", a())
        });
        u.e("duration-send", a());
        u.e("duration-done", function () {
            p = s = +new Date;
            r = 0
        });
        return h.Ba
    })();
    (function () {
        var a = mt.lang, b = h.A, g = h.load, f = {
            lc: function (f) {
                if ((window._dxt === t || a.d(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                    var u = h.c.T();
                    g([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(u)].join(""), f)
                }
            }, Dc: function (b) {
                if (a.d(b, "String") || a.d(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
            }
        };
        return h.Ib = f
    })();
    (function () {
        function a(a, b, f, e) {
            if (!(a === t || b === t || e === t)) {
                if ("" === a) return [b, f, e].join("*");
                a = String(a).split("!");
                for (var d, g = y, k = 0; k < a.length; k++) if (d = a[k].split("*"), String(b) === d[0]) {
                    d[1] = f;
                    d[2] = e;
                    a[k] = d.join("*");
                    g = v;
                    break
                }
                g || a.push([b, f, e].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var e in a) if ({}.hasOwnProperty.call(a, e)) {
                var d = a[e];
                f.d(d, "Object") || f.d(d, "Array") ? b(d) : a[e] = String(d)
            }
        }

        var g = mt.url, f = mt.lang, d = mt.s, u = mt.g, e = h.A, l = h.z, n = h.Ib, q = h.load, s = h.Aa, p = h.Q,
            r = p.O, k = {
                aa: [], ta: 0,
                Ja: y, D: {Pa: "", page: ""}, init: function () {
                    k.j = 0;
                    p.init();
                    l.e("pv-b", function () {
                        k.Jb();
                        k.Lb()
                    });
                    l.e("pv-d", function () {
                        k.Mb();
                        k.D.page = ""
                    });
                    l.e("stag-b", function () {
                        h.c.b.api = k.j || k.ta ? k.j + "_" + k.ta : "";
                        h.c.b.ct = [decodeURIComponent(s.getData("Hm_ct_" + c.id) || ""), k.D.Pa, k.D.page].join("!")
                    });
                    l.e("stag-d", function () {
                        h.c.b.api = 0;
                        k.j = 0;
                        k.ta = 0
                    })
                }, Jb: function () {
                    var a = window._hmt || [];
                    if (!a || f.d(a, "Array")) window._hmt = {
                        id: c.id, cmd: {}, push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var m = arguments[b];
                                f.d(m, "Array") && (a.cmd[a.id].push(m), "_setAccount" === m[0] && (1 < m.length && /^[0-9a-f]{32}$/.test(m[1])) && (m = m[1], a.id = m, a.cmd[m] = a.cmd[m] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                }, Lb: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], f = /^_track(Event|MobConv|Order)$/, e = 0, d = b.length; e < d; e++) {
                        var g = b[e];
                        f.test(g[0]) ? k.aa.push(g) : k.La(g)
                    }
                    a.cmd[c.id] = {push: k.La}
                }, Mb: function () {
                    if (0 < k.aa.length) for (var a = 0, b = k.aa.length; a < b; a++) k.La(k.aa[a]);
                    k.aa = x
                },
                La: function (a) {
                    var b = a[0];
                    if (k.hasOwnProperty(b) && f.d(k[b], "Function")) k[b](a)
                }, _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (k.j |= 1)
                }, _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) k.j |= 2, h.c.ab = a
                }, _trackPageview: function (a) {
                    1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (k.j |= 4, h.c.b.sn = h.c.Za(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = u.W() + u.M(), h.c.b.kb = 0, h.c.Ia ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.Ia = v, k.Ja || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = e.protocol +
                        "//" + document.location.host + a[1], h.c.b.p = r(p.B("pageview")), h.c.i(), h.c.b.p = "", h.c.$ = +new Date, p.o("pageview"))
                }, _trackEvent: function (a) {
                    2 < a.length && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = f.h(a[1]) + "*" + f.h(a[2]) + (a[3] ? "*" + f.h(a[3]) : "") + (a[4] ? "*" + f.h(a[4]) : ""), h.c.b.p = r(p.Ga()), h.c.i(), h.c.b.p = "")
                }, _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1], e = a[4] || 3;
                        if (0 < b && 6 > b && 0 < e && 4 > e) {
                            k.ta++;
                            for (var d = (h.c.b.cv || "*").split("!"), g = d.length; g < b - 1; g++) d.push("*");
                            d[b - 1] = e + "*" + f.h(a[2]) + "*" +
                                f.h(a[3]);
                            h.c.b.cv = d.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? s.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : s.removeData("Hm_cv_" + c.id)
                        }
                    }
                }, _setUserTag: function (b) {
                    if (!(3 > b.length)) {
                        var e = f.h(b[1]);
                        b = f.h(b[2]);
                        if (e !== t && b !== t) {
                            var d = decodeURIComponent(s.getData("Hm_ct_" + c.id) || ""), d = a(d, e, 1, b);
                            s.setData("Hm_ct_" + c.id, encodeURIComponent(d), c.age)
                        }
                    }
                }, _setVisitTag: function (b) {
                    if (!(3 > b.length)) {
                        var e = f.h(b[1]);
                        b = f.h(b[2]);
                        if (e !== t && b !== t) {
                            var d = k.D.Pa,
                                d = a(d, e, 2, b);
                            k.D.Pa = d
                        }
                    }
                }, _setPageTag: function (b) {
                    if (!(3 > b.length)) {
                        var e = f.h(b[1]);
                        b = f.h(b[2]);
                        if (e !== t && b !== t) {
                            var d = k.D.page, d = a(d, e, 3, b);
                            k.D.page = d
                        }
                    }
                }, _setReferrerOverride: function (a) {
                    1 < a.length && (a = a[1], f.d(a, "String") ? (h.c.b.su = "/" === a.charAt(0) ? e.protocol + "//" + window.location.host + a : a, k.Ja = v) : k.Ja = y)
                }, _trackOrder: function (a) {
                    a = a[1];
                    f.d(a, "Object") && (b(a), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = d.stringify(a), h.c.b.p = r(p.Ga()), h.c.i(), h.c.b.p = "")
                }, _trackMobConv: function (a) {
                    if (a = {
                        webim: 1,
                        tel: 2, map: 3, sms: 4, callback: 5, share: 6
                    }[a[1]]) k.j |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
                }, _setDataxId: function (a) {
                    a = a[1];
                    n.lc();
                    n.Dc(a)
                }, _setUserId: function (a) {
                    a = a[1];
                    if (a !== t && (f.H(a) || f.cb(a))) {
                        var b = p.B("user").uid_;
                        if (!(b && b.value === f.h(String(a)))) {
                            var b = h.c.b.p, e = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + f.h(String(a));
                            h.c.i();
                            var d = {};
                            d.uid_ = a;
                            p.setProperty("user", d, v);
                            h.c.b.p = b;
                            h.c.b.ep = e
                        }
                    }
                }, _clearUserId: function (a) {
                    1 < a.length && v === a[1] && p.o("userId")
                }, _setUserProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && p.setProperty("user", a)
                }, _clearUserProperty: function (a) {
                    1 < a.length && v === a[1] && p.o("user")
                }, _setSessionProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && p.setProperty("session", a)
                }, _clearSessionProperty: function (a) {
                    1 < a.length && v === a[1] && p.o("session")
                }, _setPageviewProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && p.setProperty("pageview", a)
                }, _clearPageviewProperty: function (a) {
                    1 < a.length && v === a[1] && p.o("pageview")
                }, _setAutoEventTrackingProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && p.setProperty("autoEventTracking",
                        a)
                }, _clearAutoEventTrackingProperty: function (a) {
                    1 < a.length && v === a[1] && p.o("autoEventTracking")
                }, _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) h.c.bb = a
                }, _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) h.c.Y = a
                }, _trackPageDuration: function (a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : l.K("duration-send");
                    l.K("duration-done")
                }, _require: function (a) {
                    1 < a.length && (a = a[1], e.Ab.test(g.L(a)) && q(a))
                }, _providePlugin: function (a) {
                    if (1 <
                        a.length) {
                        var b = window._hmt, d = a[1];
                        a = a[2];
                        if (f.G(e.ib, d) && f.d(a, "Function") && (b.plugins = b.plugins || {}, b.I = b.I || {}, b.plugins[d] = a, b.C = b.C || [], a = b.C.slice(), d && a.length && a[0][1] === d)) for (var g = 0, k = a.length; g < k; g++) {
                            var l = a[g][2] || {};
                            if (b.plugins[d] && !b.I[d]) b.I[d] = new b.plugins[d](l), b.C.shift(); else break
                        }
                    }
                }, _requirePlugin: function (a) {
                    if (1 < a.length) {
                        var b = window._hmt, d = a[1], g = a[2] || {};
                        if (f.G(e.ib, d)) if (b.plugins = b.plugins || {}, b.I = b.I || {}, b.plugins[d] && !b.I[d]) b.I[d] = new b.plugins[d](g); else {
                            b.C = b.C ||
                                [];
                            for (var g = 0, l = b.C.length; g < l; g++) if (b.C[g][1] === d) return;
                            b.C.push(a);
                            k._require([x, e.tc + d + ".js"])
                        }
                    }
                }, _trackCustomEvent: function (a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        f.d(a, "Object") || (a = {});
                        a._iden = b;
                        p.setProperty("customEvent", a);
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = r(p.B("customEvent"));
                        h.c.i();
                        h.c.b.p = "";
                        p.o("customEvent")
                    }
                }
            };
        k.init();
        h.Bb = k;
        return h.Bb
    })();
    (function () {
        var a = h.z;
        c.spa !== t && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), a.e("pv-b", function () {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = v, this.b = {}, this.bb = this.ab = v, this.Y = k.Y, this.Ta = d.H(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.Ia = y, this.init())
        }

        var b = mt.url, g = mt.pb, f = mt.Na, d = mt.lang, u = mt.cookie, e = mt.g, l = mt.sessionStorage, n = mt.s,
            q = mt.event, s = h.Aa, p = h.Q, r = p.O, k = h.A, m = h.load, w = h.z;
        a.prototype = {
            Z: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var e = a.indexOf(b);
                return -1 < e && e + b.length === a.length
            }, qa: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, oa: function (a) {
                for (var e = 0; e < c.dm.length; e++) if (-1 < c.dm[e].indexOf("/")) {
                    if (this.qa(a, c.dm[e])) return v
                } else {
                    var d = b.L(a);
                    if (d && this.Z(d, c.dm[e])) return v
                }
                return y
            }, T: function () {
                for (var a = document.location.hostname, b = 0, e = c.dm.length; b < e; b++) if (this.Z(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, la: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var e = c.dm[a];
                    if (-1 < e.indexOf("/") && this.qa(document.location.href, e)) return e.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, ac: function () {
                if (!document.referrer) return k.J - k.N > c.vdur ? 1 : 4;
                var a = y;
                this.oa(document.referrer) && this.oa(document.location.href) ? a = v : (a = b.L(document.referrer), a = this.Z(a || "", document.location.hostname));
                return a ? k.J - k.N > c.vdur ? 1 : 4 : 3
            }, Bc: function () {
                var a, b, e, d, f, g;
                k.N = s.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.N.length && (k.N = Math.round(k.N / 1E3));
                b = this.ac();
                a = 4 !== b ? 1 : 0;
                if (g = s.getData("Hm_lvt_" + c.id)) {
                    d = g.split(",");
                    for (f = d.length - 1; 0 <= f; f--) 13 === d[f].length && (d[f] = "" + Math.round(d[f] /
                        1E3));
                    for (; 2592E3 < k.J - d[0];) d.shift();
                    f = 4 > d.length ? 2 : 3;
                    for (1 === a && d.push(k.J); 4 < d.length;) d.shift();
                    g = d.join(",");
                    d = d[d.length - 1]
                } else g = k.J, d = "", f = 1;
                this.pc() ? (s.setData("Hm_lvt_" + c.id, g, c.age), s.setData("Hm_lpvt_" + c.id, k.J), e = u.rc(this.T(), this.la())) : this.Nb();
                if (0 === c.nv && this.oa(document.location.href) && ("" === document.referrer || this.oa(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = e;
                this.b.lt = d;
                this.b.lv = f
            }, pc: function () {
                var a = b.L(document.location.href);
                return !d.G("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
                    a)
            }, Nb: function () {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && s.removeData(d[0]);
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && s.removeData(d[0])
                }
            }, nb: function () {
                for (var a = [], b = this.b.et, d = 0, e = k.qb.length; d < e; d++) {
                    var f = k.qb[d], g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            }, Cc: function () {
                this.Bc();
                this.b.si = c.id;
                this.b.sn = this.Za();
                this.b.su = document.referrer;
                this.b.ds = e.wc;
                this.b.cl = e.colorDepth + "-bit";
                this.b.ln = String(e.language).toLowerCase();
                this.b.ja = e.javaEnabled ? 1 : 0;
                this.b.ck = e.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = f.dc();
                this.b.v = "1.2.76";
                this.b.cv = decodeURIComponent(s.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = e.W() + e.M();
                var a = document.location.href;
                this.b.cm = b.m(a, k.ic) || "";
                this.b.cp = b.m(a, k.jc) || b.m(a, k.Hc) || "";
                this.b.cw = b.m(a,
                    k.hc) || b.m(a, k.Jc) || "";
                this.b.ci = b.m(a, k.fc) || b.m(a, k.Gc) || "";
                this.b.cf = b.m(a, k.kc) || b.m(a, k.Ic) || "";
                this.b.cu = b.m(a, k.gc) || b.m(a, k.Fc) || "";
                this.b.u = window.location.href
            }, init: function () {
                try {
                    this.Cc(), 0 === this.b.nv ? this.Ac() : this.Va(), h.c = this, this.Db(), this.Cb(), w.K("pv-b"), this.yc()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    g.log(k.ra + "//" + k.Ma + "?" + b.join("&"))
                }
            }, yc: function () {
                function a() {
                    w.K("pv-d")
                }

                this.ab ? (this.Ia = v, this.b.et = 0, this.b.ep = "", this.b.p = r(p.B("pageview")), this.b.vl = e.W() + e.M(), this.i(a), this.b.p = "") : a();
                this.$ = +new Date;
                p.o("pageview")
            }, i: function (a) {
                if (this.bb) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.ca);
                    b.b.r = e.orientation;
                    b.b.ww = e.tb;
                    w.K("stag-b");
                    var f = k.ra + "//" + k.Ma + "?" + b.nb();
                    w.K("stag-d");
                    b.zb(f);
                    g.log(f, function (e) {
                        b.lb(e);
                        d.d(a, "Function") && a.call(b)
                    })
                }
            }, Db: function () {
                var a = document.location.hash.substring(1), d = RegExp(c.id),
                    e = b.L(document.referrer) === k.rb ? 1 : 0, f =
                        b.m(a, "jn"), g = /^select$/.test(f);
                a && (d.test(a) && e && g) && (this.b.rnd = Math.round(Math.random() * k.ca), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            }, Cb: function () {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a = this;
                        q.e(window, "message", function (d) {
                            if (b.L(d.origin) === k.rb) {
                                d = d.data || {};
                                var e = d.jn || "", f = /^customevent$|^heatmap$|^pageclick$/.test(e);
                                if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * k.ca), m(k.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                            }
                        });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (d) {
                }
            }, zb: function (a) {
                var b;
                try {
                    b = n.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                l.set("Hm_unsent_" + c.id,
                    n.stringify(b))
            }, lb: function (a) {
                var b;
                try {
                    b = n.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? l.set("Hm_unsent_" + c.id, n.stringify(b)) : this.Va()
                }
            }, Va: function () {
                l.remove("Hm_unsent_" + c.id)
            }, Ac: function () {
                var a = this, b;
                try {
                    b = n.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) for (var e = function (b) {
                        g.log(k.ra + "//" + b, function (b) {
                            a.lb(b)
                        })
                    },
                                       f = 0; f < b.length; f++) e(b[f])
            }, Za: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new a
    })();
    var B = h.A, C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var a = mt.g, b = mt.lang, g = mt.event, f = mt.s;
        if ("undefined" !== typeof h.c && (c.med || (!a.na || 7 < a.Wb()) && c.cvcc)) {
            var d, u, e, l, n = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, q = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === y) return y
            }, s = function (a, g) {
                var k = {};
                k.n = d;
                k.t = "clk";
                k.v = a;
                if (g) {
                    var l = g.getAttribute("href"), n = g.getAttribute("onclick") ? "" + g.getAttribute("onclick") : x,
                        p = g.getAttribute("id") || "";
                    e.test(l) ? (k.sn =
                        "mediate", k.snv = l) : b.d(n, "String") && e.test(n) && (k.sn = "wrap", k.snv = n);
                    k.id = p
                }
                h.c.b.et = 86;
                h.c.b.ep = f.stringify(k);
                h.c.i();
                for (k = +new Date; 400 >= +new Date - k;) ;
            };
            if (c.med) u = "/zoosnet", d = "swt", e = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, l = {
                click: function () {
                    for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, f, g = 0, k = b.length; g < k; g++) d = b[g], f =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (e.test(f) || e.test(d)) && a.push(b[g]);
                    return a
                }
            }; else if (c.cvcc) {
                u = "/other-comm";
                d = "other";
                e = c.cvcc.q || t;
                var p = c.cvcc.id || t;
                l = {
                    click: function () {
                        for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, f, g, k = 0, l = b.length; k < l; k++) d = b[k], e !== t ? (f = d.getAttribute("onclick"), g = d.getAttribute("href"), p ? (d = d.getAttribute("id"), (e.test(f) ||
                            e.test(g) || p.test(d)) && a.push(b[k])) : (e.test(f) || e.test(g)) && a.push(b[k])) : p !== t && (d = d.getAttribute("id"), p.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof l && "undefined" !== typeof e) {
                var r;
                u += /\/$/.test(u) ? "" : "/";
                var k = function (a, d) {
                    if (r === d) return s(u + a, d), y;
                    if (b.d(d, "Array") || b.d(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (r === d[e]) return s(u + a + "/" + (e + 1), d[e]), y
                };
                g.e(document, "mousedown", function (a) {
                    a = a || window.event;
                    r = a.target || a.srcElement;
                    var d = {};
                    for (q(l, function (a, e) {
                        d[a] = b.d(e,
                            "Function") ? e() : document.getElementById(e)
                    }); r && r !== document && q(d, k) !== y;) r = r.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.f, b = mt.lang, g = mt.event, f = mt.s;
        if ("undefined" !== typeof h.c && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var d = {
                wb: function () {
                    for (var b = c.cvcf.length, e, f = 0; f < b; f++) (e = a.Wa(decodeURIComponent(c.cvcf[f]))) && g.e(e, "click", d.Ca())
                }, Ca: function () {
                    return function () {
                        h.c.b.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.c.b.ep = f.stringify(a);
                        h.c.i()
                    }
                }
            };
            a.jb(function () {
                d.wb()
            })
        }
    })();
    (function () {
        var a = mt.event, b = mt.s;
        if (c.med && "undefined" !== typeof h.c) {
            var g = {n: "anti", sb: 0, kb: 0, clk: 0}, f = function () {
                h.c.b.et = 86;
                h.c.b.ep = b.stringify(g);
                h.c.i()
            };
            a.e(document, "click", function () {
                g.clk++
            });
            a.e(document, "keyup", function () {
                g.kb = 1
            });
            a.e(window, "scroll", function () {
                g.sb++
            });
            a.e(window, "load", function () {
                setTimeout(f, 5E3)
            })
        }
    })();
    c.oc !== t && "1" === String(c.oc) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "OcpcCbHm"]));
})();
