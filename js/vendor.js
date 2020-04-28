! function (e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
	function i(e) {
		var t = !!e && "length" in e && e.length,
			i = re.type(e);
		return "function" === i || re.isWindow(e) ? !1 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function n(e, t, i) {
		if (re.isFunction(t)) return re.grep(e, function (e, n) {
			return !!t.call(e, n, e) !== i
		});
		if (t.nodeType) return re.grep(e, function (e) {
			return e === t !== i
		});
		if ("string" == typeof t) {
			if (ge.test(t)) return re.filter(t, e, i);
			t = re.filter(t, e)
		}
		return re.grep(e, function (e) {
			return J.call(t, e) > -1 !== i
		})
	}

	function o(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function r(e) {
		var t = {};
		return re.each(e.match(xe) || [], function (e, i) {
			t[i] = !0
		}), t
	}

	function s() {
		U.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), re.ready()
	}

	function a() {
		this.expando = re.expando + a.uid++
	}

	function l(e, t, i) {
		var n;
		if (void 0 === i && 1 === e.nodeType)
			if (n = "data-" + t.replace(Ae, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ee.test(i) ? re.parseJSON(i) : i
				} catch (o) {}
				ke.set(e, t, i)
			} else i = void 0;
		return i
	}

	function u(e, t, i, n) {
		var o, r = 1,
			s = 20,
			a = n ? function () {
				return n.cur()
			} : function () {
				return re.css(e, t, "")
			},
			l = a(),
			u = i && i[3] || (re.cssNumber[t] ? "" : "px"),
			d = (re.cssNumber[t] || "px" !== u && +l) && Le.exec(re.css(e, t));
		if (d && d[3] !== u) {
			u = u || d[3], i = i || [], d = +l || 1;
			do r = r || ".5", d /= r, re.style(e, t, d + u); while (r !== (r = a() / l) && 1 !== r && --s)
		}
		return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = d, n.end = o)), o
	}

	function d(e, t) {
		var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], i) : i
	}

	function c(e, t) {
		for (var i = 0, n = e.length; n > i; i++) $e.set(e[i], "globalEval", !t || $e.get(t[i], "globalEval"))
	}

	function p(e, t, i, n, o) {
		for (var r, s, a, l, u, p, h = t.createDocumentFragment(), f = [], g = 0, m = e.length; m > g; g++)
			if (r = e[g], r || 0 === r)
				if ("object" === re.type(r)) re.merge(f, r.nodeType ? [r] : r);
				else if (Oe.test(r)) {
			for (s = s || h.appendChild(t.createElement("div")), a = (Re.exec(r) || ["", ""])[1].toLowerCase(), l = Ne[a] || Ne._default, s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], p = l[0]; p--;) s = s.lastChild;
			re.merge(f, s.childNodes), s = h.firstChild, s.textContent = ""
		} else f.push(t.createTextNode(r));
		for (h.textContent = "", g = 0; r = f[g++];)
			if (n && re.inArray(r, n) > -1) o && o.push(r);
			else if (u = re.contains(r.ownerDocument, r), s = d(h.appendChild(r), "script"), u && c(s), i)
			for (p = 0; r = s[p++];) Ie.test(r.type || "") && i.push(r);
		return h
	}

	function h() {
		return !0
	}

	function f() {
		return !1
	}

	function g() {
		try {
			return U.activeElement
		} catch (e) {}
	}

	function m(e, t, i, n, o, r) {
		var s, a;
		if ("object" == typeof t) {
			"string" != typeof i && (n = n || i, i = void 0);
			for (a in t) m(e, a, i, n, t[a], r);
			return e
		}
		if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
		else if (!o) return e;
		return 1 === r && (s = o, o = function (e) {
			return re().off(e), s.apply(this, arguments)
		}, o.guid = s.guid || (s.guid = re.guid++)), e.each(function () {
			re.event.add(this, t, o, n, i)
		})
	}

	function v(e, t) {
		return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function y(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function b(e) {
		var t = _e.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function w(e, t) {
		var i, n, o, r, s, a, l, u;
		if (1 === t.nodeType) {
			if ($e.hasData(e) && (r = $e.access(e), s = $e.set(t, r), u = r.events)) {
				delete s.handle, s.events = {};
				for (o in u)
					for (i = 0, n = u[o].length; n > i; i++) re.event.add(t, o, u[o][i])
			}
			ke.hasData(e) && (a = ke.access(e), l = re.extend({}, a), ke.set(t, l))
		}
	}

	function x(e, t) {
		var i = t.nodeName.toLowerCase();
		"input" === i && De.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
	}

	function T(e, t, i, n) {
		t = K.apply([], t);
		var o, r, s, a, l, u, c = 0,
			h = e.length,
			f = h - 1,
			g = t[0],
			m = re.isFunction(g);
		if (m || h > 1 && "string" == typeof g && !ne.checkClone && Be.test(g)) return e.each(function (o) {
			var r = e.eq(o);
			m && (t[0] = g.call(this, o, r.html())), T(r, t, i, n)
		});
		if (h && (o = p(t, e[0].ownerDocument, !1, e, n), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
			for (s = re.map(d(o, "script"), y), a = s.length; h > c; c++) l = o, c !== f && (l = re.clone(l, !0, !0), a && re.merge(s, d(l, "script"))), i.call(e[c], l, c);
			if (a)
				for (u = s[s.length - 1].ownerDocument, re.map(s, b), c = 0; a > c; c++) l = s[c], Ie.test(l.type || "") && !$e.access(l, "globalEval") && re.contains(u, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Ge, "")))
		}
		return e
	}

	function C(e, t, i) {
		for (var n, o = t ? re.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || re.cleanData(d(n)), n.parentNode && (i && re.contains(n.ownerDocument, n) && c(d(n, "script")), n.parentNode.removeChild(n));
		return e
	}

	function S(e, t) {
		var i = re(t.createElement(e)).appendTo(t.body),
			n = re.css(i[0], "display");
		return i.detach(), n
	}

	function $(e) {
		var t = U,
			i = Xe[e];
		return i || (i = S(e, t), "none" !== i && i || (Ve = (Ve || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), i = S(e, t), Ve.detach()), Xe[e] = i), i
	}

	function k(e, t, i) {
		var n, o, r, s, a = e.style;
		return i = i || Qe(e), s = i ? i.getPropertyValue(t) || i[t] : void 0, "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), i && !ne.pixelMarginRight() && Ue.test(s) && Ye.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
	}

	function E(e, t) {
		return {
			get: function () {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function A(e) {
		if (e in nt) return e;
		for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--;)
			if (e = it[i] + t, e in nt) return e
	}

	function M(e, t, i) {
		var n = Le.exec(t);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
	}

	function L(e, t, i, n, o) {
		for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += re.css(e, i + Pe[r], !0, o)), n ? ("content" === i && (s -= re.css(e, "padding" + Pe[r], !0, o)), "margin" !== i && (s -= re.css(e, "border" + Pe[r] + "Width", !0, o))) : (s += re.css(e, "padding" + Pe[r], !0, o), "padding" !== i && (s += re.css(e, "border" + Pe[r] + "Width", !0, o)));
		return s
	}

	function P(t, i, n) {
		var o = !0,
			r = "width" === i ? t.offsetWidth : t.offsetHeight,
			s = Qe(t),
			a = "border-box" === re.css(t, "boxSizing", !1, s);
		if (U.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[i])), 0 >= r || null == r) {
			if (r = k(t, i, s), (0 > r || null == r) && (r = t.style[i]), Ue.test(r)) return r;
			o = a && (ne.boxSizingReliable() || r === t.style[i]), r = parseFloat(r) || 0
		}
		return r + L(t, i, n || (a ? "border" : "content"), o, s) + "px"
	}

	function j(e, t) {
		for (var i, n, o, r = [], s = 0, a = e.length; a > s; s++) n = e[s], n.style && (r[s] = $e.get(n, "olddisplay"), i = n.style.display, t ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && je(n) && (r[s] = $e.access(n, "olddisplay", $(n.nodeName)))) : (o = je(n), "none" === i && o || $e.set(n, "olddisplay", o ? i : re.css(n, "display"))));
		for (s = 0; a > s; s++) n = e[s], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
		return e
	}

	function D(e, t, i, n, o) {
		return new D.prototype.init(e, t, i, n, o)
	}

	function R() {
		return e.setTimeout(function () {
			ot = void 0
		}), ot = re.now()
	}

	function I(e, t) {
		var i, n = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Pe[n], o["margin" + i] = o["padding" + i] = e;
		return t && (o.opacity = o.width = e), o
	}

	function N(e, t, i) {
		for (var n, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), r = 0, s = o.length; s > r; r++)
			if (n = o[r].call(i, t, e)) return n
	}

	function O(e, t, i) {
		var n, o, r, s, a, l, u, d, c = this,
			p = {},
			h = e.style,
			f = e.nodeType && je(e),
			g = $e.get(e, "fxshow");
		i.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
			a.unqueued || l()
		}), a.unqueued++, c.always(function () {
			c.always(function () {
				a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], u = re.css(e, "display"), d = "none" === u ? $e.get(e, "olddisplay") || $(e.nodeName) : u, "inline" === d && "none" === re.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", c.always(function () {
			h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
		}));
		for (n in t)
			if (o = t[n], st.exec(o)) {
				if (delete t[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
					if ("show" !== o || !g || void 0 === g[n]) continue;
					f = !0
				}
				p[n] = g && g[n] || re.style(e, n)
			} else u = void 0;
		if (re.isEmptyObject(p)) "inline" === ("none" === u ? $(e.nodeName) : u) && (h.display = u);
		else {
			g ? "hidden" in g && (f = g.hidden) : g = $e.access(e, "fxshow", {}), r && (g.hidden = !f), f ? re(e).show() : c.done(function () {
				re(e).hide()
			}), c.done(function () {
				var t;
				$e.remove(e, "fxshow");
				for (t in p) re.style(e, t, p[t])
			});
			for (n in p) s = N(f ? g[n] : 0, n, c), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
		}
	}

	function H(e, t) {
		var i, n, o, r, s;
		for (i in e)
			if (n = re.camelCase(i), o = t[n], r = e[i], re.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), s = re.cssHooks[n], s && "expand" in s) {
				r = s.expand(r), delete e[n];
				for (i in r) i in e || (e[i] = r[i], t[i] = o)
			} else t[n] = o
	}

	function q(e, t, i) {
		var n, o, r = 0,
			s = q.prefilters.length,
			a = re.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (o) return !1;
				for (var t = ot || R(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
				return a.notifyWith(e, [u, r, i]), 1 > r && l ? i : (a.resolveWith(e, [u]), !1)
			},
			u = a.promise({
				elem: e,
				props: re.extend({}, t),
				opts: re.extend(!0, {
					specialEasing: {},
					easing: re.easing._default
				}, i),
				originalProperties: t,
				originalOptions: i,
				startTime: ot || R(),
				duration: i.duration,
				tweens: [],
				createTween: function (t, i) {
					var n = re.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function (t) {
					var i = 0,
						n = t ? u.tweens.length : 0;
					if (o) return this;
					for (o = !0; n > i; i++) u.tweens[i].run(1);
					return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
				}
			}),
			d = u.props;
		for (H(d, u.opts.specialEasing); s > r; r++)
			if (n = q.prefilters[r].call(u, e, d, u.opts)) return re.isFunction(n.stop) && (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(n.stop, n)), n;
		return re.map(d, N, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function z(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function F(e) {
		return function (t, i) {
			"string" != typeof t && (i = t, t = "*");
			var n, o = 0,
				r = t.toLowerCase().match(xe) || [];
			if (re.isFunction(i))
				for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
		}
	}

	function W(e, t, i, n) {
		function o(a) {
			var l;
			return r[a] = !0, re.each(e[a] || [], function (e, a) {
				var u = a(t, i, n);
				return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
			}), l
		}
		var r = {},
			s = e === kt;
		return o(t.dataTypes[0]) || !r["*"] && o("*")
	}

	function B(e, t) {
		var i, n, o = re.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
		return n && re.extend(!0, e, n), e
	}

	function _(e, t, i) {
		for (var n, o, r, s, a = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
		if (n)
			for (o in a)
				if (a[o] && a[o].test(n)) {
					l.unshift(o);
					break
				}
		if (l[0] in i) r = l[0];
		else {
			for (o in i) {
				if (!l[0] || e.converters[o + " " + l[0]]) {
					r = o;
					break
				}
				s || (s = o)
			}
			r = r || s
		}
		return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
	}

	function G(e, t, i, n) {
		var o, r, s, a, l, u = {},
			d = e.dataTypes.slice();
		if (d[1])
			for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
		for (r = d.shift(); r;)
			if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
				if ("*" === r) r = l;
				else if ("*" !== l && l !== r) {
			if (s = u[l + " " + r] || u["* " + r], !s)
				for (o in u)
					if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
						s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], d.unshift(a[1]));
						break
					}
			if (s !== !0)
				if (s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch (c) {
					return {
						state: "parsererror",
						error: s ? c : "No conversion from " + l + " to " + r
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function V(e, t, i, n) {
		var o;
		if (re.isArray(t)) re.each(t, function (t, o) {
			i || Lt.test(e) ? n(e, o) : V(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
		});
		else if (i || "object" !== re.type(t)) n(e, t);
		else
			for (o in t) V(e + "[" + o + "]", t[o], i, n)
	}

	function X(e) {
		return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var Y = [],
		U = e.document,
		Q = Y.slice,
		K = Y.concat,
		Z = Y.push,
		J = Y.indexOf,
		ee = {},
		te = ee.toString,
		ie = ee.hasOwnProperty,
		ne = {},
		oe = "2.2.3",
		re = function (e, t) {
			return new re.fn.init(e, t)
		},
		se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ae = /^-ms-/,
		le = /-([\da-z])/gi,
		ue = function (e, t) {
			return t.toUpperCase()
		};
	re.fn = re.prototype = {
		jquery: oe,
		constructor: re,
		selector: "",
		length: 0,
		toArray: function () {
			return Q.call(this)
		},
		get: function (e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
		},
		pushStack: function (e) {
			var t = re.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function (e) {
			return re.each(this, e)
		},
		map: function (e) {
			return this.pushStack(re.map(this, function (t, i) {
				return e.call(t, i, t)
			}))
		},
		slice: function () {
			return this.pushStack(Q.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				i = +e + (0 > e ? t : 0);
			return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: Z,
		sort: Y.sort,
		splice: Y.splice
	}, re.extend = re.fn.extend = function () {
		var e, t, i, n, o, r, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
			if (null != (e = arguments[a]))
				for (t in e) i = s[t], n = e[t], s !== n && (u && n && (re.isPlainObject(n) || (o = re.isArray(n))) ? (o ? (o = !1, r = i && re.isArray(i) ? i : []) : r = i && re.isPlainObject(i) ? i : {}, s[t] = re.extend(u, r, n)) : void 0 !== n && (s[t] = n));
		return s
	}, re.extend({
		expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === re.type(e)
		},
		isArray: Array.isArray,
		isWindow: function (e) {
			return null != e && e === e.window
		},
		isNumeric: function (e) {
			var t = e && e.toString();
			return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
		},
		isPlainObject: function (e) {
			var t;
			if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
			if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
			for (t in e);
			return void 0 === t || ie.call(e, t)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
		},
		globalEval: function (e) {
			var t, i = eval;
			e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = U.createElement("script"), t.text = e, U.head.appendChild(t).parentNode.removeChild(t)) : i(e))
		},
		camelCase: function (e) {
			return e.replace(ae, "ms-").replace(le, ue)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function (e, t) {
			var n, o = 0;
			if (i(e))
				for (n = e.length; n > o && t.call(e[o], o, e[o]) !== !1; o++);
			else
				for (o in e)
					if (t.call(e[o], o, e[o]) === !1) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(se, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (i(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : Z.call(n, e)), n
		},
		inArray: function (e, t, i) {
			return null == t ? -1 : J.call(t, e, i)
		},
		merge: function (e, t) {
			for (var i = +t.length, n = 0, o = e.length; i > n; n++) e[o++] = t[n];
			return e.length = o, e
		},
		grep: function (e, t, i) {
			for (var n, o = [], r = 0, s = e.length, a = !i; s > r; r++) n = !t(e[r], r), n !== a && o.push(e[r]);
			return o
		},
		map: function (e, t, n) {
			var o, r, s = 0,
				a = [];
			if (i(e))
				for (o = e.length; o > s; s++) r = t(e[s], s, n), null != r && a.push(r);
			else
				for (s in e) r = t(e[s], s, n), null != r && a.push(r);
			return K.apply([], a)
		},
		guid: 1,
		proxy: function (e, t) {
			var i, n, o;
			return "string" == typeof t && (i = e[t], t = e, e = i), re.isFunction(e) ? (n = Q.call(arguments, 2), o = function () {
				return e.apply(t || this, n.concat(Q.call(arguments)))
			}, o.guid = e.guid = e.guid || re.guid++, o) : void 0
		},
		now: Date.now,
		support: ne
	}), "function" == typeof Symbol && (re.fn[Symbol.iterator] = Y[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		ee["[object " + t + "]"] = t.toLowerCase()
	});
	var de = function (e) {
		function t(e, t, i, n) {
			var o, r, s, a, l, u, c, h, f = t && t.ownerDocument,
				g = t ? t.nodeType : 9;
			if (i = i || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return i;
			if (!n && ((t ? t.ownerDocument || t : z) !== j && P(t), t = t || j, R)) {
				if (11 !== g && (u = ve.exec(e)))
					if (o = u[1]) {
						if (9 === g) {
							if (!(s = t.getElementById(o))) return i;
							if (s.id === o) return i.push(s), i
						} else if (f && (s = f.getElementById(o)) && H(t, s) && s.id === o) return i.push(s), i
					} else {
						if (u[2]) return Z.apply(i, t.getElementsByTagName(e)), i;
						if ((o = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(i, t.getElementsByClassName(o)), i
					}
				if (x.qsa && !G[e + " "] && (!I || !I.test(e))) {
					if (1 !== g) f = t, h = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = q), c = $(e), r = c.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) c[r] = l + " " + p(c[r]);
						h = c.join(","), f = ye.test(e) && d(t.parentNode) || t
					}
					if (h) try {
						return Z.apply(i, f.querySelectorAll(h)), i
					} catch (m) {} finally {
						a === q && t.removeAttribute("id")
					}
				}
			}
			return E(e.replace(ae, "$1"), t, i, n)
		}

		function i() {
			function e(i, n) {
				return t.push(i + " ") > T.cacheLength && delete e[t.shift()], e[i + " "] = n
			}
			var t = [];
			return e
		}

		function n(e) {
			return e[q] = !0, e
		}

		function o(e) {
			var t = j.createElement("div");
			try {
				return !!e(t)
			} catch (i) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function r(e, t) {
			for (var i = e.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = t
		}

		function s(e, t) {
			var i = t && e,
				n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === t) return -1;
			return e ? 1 : -1
		}

		function a(e) {
			return function (t) {
				var i = t.nodeName.toLowerCase();
				return "input" === i && t.type === e
			}
		}

		function l(e) {
			return function (t) {
				var i = t.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && t.type === e
			}
		}

		function u(e) {
			return n(function (t) {
				return t = +t, n(function (i, n) {
					for (var o, r = e([], i.length, t), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
				})
			})
		}

		function d(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function c() {}

		function p(e) {
			for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
			return n
		}

		function h(e, t, i) {
			var n = t.dir,
				o = i && "parentNode" === n,
				r = W++;
			return t.first ? function (t, i, r) {
				for (; t = t[n];)
					if (1 === t.nodeType || o) return e(t, i, r)
			} : function (t, i, s) {
				var a, l, u, d = [F, r];
				if (s) {
					for (; t = t[n];)
						if ((1 === t.nodeType || o) && e(t, i, s)) return !0
				} else
					for (; t = t[n];)
						if (1 === t.nodeType || o) {
							if (u = t[q] || (t[q] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[n]) && a[0] === F && a[1] === r) return d[2] = a[2];
							if (l[n] = d, d[2] = e(t, i, s)) return !0
						}
			}
		}

		function f(e) {
			return e.length > 1 ? function (t, i, n) {
				for (var o = e.length; o--;)
					if (!e[o](t, i, n)) return !1;
				return !0
			} : e[0]
		}

		function g(e, i, n) {
			for (var o = 0, r = i.length; r > o; o++) t(e, i[o], n);
			return n
		}

		function m(e, t, i, n, o) {
			for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), u && t.push(a)));
			return s
		}

		function v(e, t, i, o, r, s) {
			return o && !o[q] && (o = v(o)), r && !r[q] && (r = v(r, s)), n(function (n, s, a, l) {
				var u, d, c, p = [],
					h = [],
					f = s.length,
					v = n || g(t || "*", a.nodeType ? [a] : a, []),
					y = !e || !n && t ? v : m(v, p, e, a, l),
					b = i ? r || (n ? e : f || o) ? [] : s : y;
				if (i && i(y, b, a, l), o)
					for (u = m(b, h), o(u, [], a, l), d = u.length; d--;)(c = u[d]) && (b[h[d]] = !(y[h[d]] = c));
				if (n) {
					if (r || e) {
						if (r) {
							for (u = [], d = b.length; d--;)(c = b[d]) && u.push(y[d] = c);
							r(null, b = [], u, l)
						}
						for (d = b.length; d--;)(c = b[d]) && (u = r ? ee(n, c) : p[d]) > -1 && (n[u] = !(s[u] = c))
					}
				} else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : Z.apply(s, b)
			})
		}

		function y(e) {
			for (var t, i, n, o = e.length, r = T.relative[e[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = h(function (e) {
					return e === t
				}, s, !0), u = h(function (e) {
					return ee(t, e) > -1
				}, s, !0), d = [function (e, i, n) {
					var o = !r && (n || i !== A) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n));
					return t = null, o
				}]; o > a; a++)
				if (i = T.relative[e[a].type]) d = [h(f(d), i)];
				else {
					if (i = T.filter[e[a].type].apply(null, e[a].matches), i[q]) {
						for (n = ++a; o > n && !T.relative[e[n].type]; n++);
						return v(a > 1 && f(d), a > 1 && p(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(ae, "$1"), i, n > a && y(e.slice(a, n)), o > n && y(e = e.slice(n)), o > n && p(e))
					}
					d.push(i)
				}
			return f(d)
		}

		function b(e, i) {
			var o = i.length > 0,
				r = e.length > 0,
				s = function (n, s, a, l, u) {
					var d, c, p, h = 0,
						f = "0",
						g = n && [],
						v = [],
						y = A,
						b = n || r && T.find.TAG("*", u),
						w = F += null == y ? 1 : Math.random() || .1,
						x = b.length;
					for (u && (A = s === j || s || u); f !== x && null != (d = b[f]); f++) {
						if (r && d) {
							for (c = 0, s || d.ownerDocument === j || (P(d), a = !R); p = e[c++];)
								if (p(d, s || j, a)) {
									l.push(d);
									break
								}
							u && (F = w)
						}
						o && ((d = !p && d) && h--, n && g.push(d))
					}
					if (h += f, o && f !== h) {
						for (c = 0; p = i[c++];) p(g, v, s, a);
						if (n) {
							if (h > 0)
								for (; f--;) g[f] || v[f] || (v[f] = Q.call(l));
							v = m(v)
						}
						Z.apply(l, v), u && !n && v.length > 0 && h + i.length > 1 && t.uniqueSort(l)
					}
					return u && (F = w, A = y), g
				};
			return o ? n(s) : s
		}
		var w, x, T, C, S, $, k, E, A, M, L, P, j, D, R, I, N, O, H, q = "sizzle" + 1 * new Date,
			z = e.document,
			F = 0,
			W = 0,
			B = i(),
			_ = i(),
			G = i(),
			V = function (e, t) {
				return e === t && (L = !0), 0
			},
			X = 1 << 31,
			Y = {}.hasOwnProperty,
			U = [],
			Q = U.pop,
			K = U.push,
			Z = U.push,
			J = U.slice,
			ee = function (e, t) {
				for (var i = 0, n = e.length; n > i; i++)
					if (e[i] === t) return i;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ie = "[\\x20\\t\\r\\n\\f]",
			ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
			re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			se = new RegExp(ie + "+", "g"),
			ae = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
			le = new RegExp("^" + ie + "*," + ie + "*"),
			ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
			de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
			ce = new RegExp(re),
			pe = new RegExp("^" + ne + "$"),
			he = {
				ID: new RegExp("^#(" + ne + ")"),
				CLASS: new RegExp("^\\.(" + ne + ")"),
				TAG: new RegExp("^(" + ne + "|[*])"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + re),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
			},
			fe = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			me = /^[^{]+\{\s*\[native \w/,
			ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ye = /[+~]/,
			be = /'|\\/g,
			we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
			xe = function (e, t, i) {
				var n = "0x" + t - 65536;
				return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			Te = function () {
				P()
			};
		try {
			Z.apply(U = J.call(z.childNodes), z.childNodes), U[z.childNodes.length].nodeType
		} catch (Ce) {
			Z = {
				apply: U.length ? function (e, t) {
					K.apply(e, J.call(t))
				} : function (e, t) {
					for (var i = e.length, n = 0; e[i++] = t[n++];);
					e.length = i - 1
				}
			}
		}
		x = t.support = {}, S = t.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, P = t.setDocument = function (e) {
			var t, i, n = e ? e.ownerDocument || e : z;
			return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, D = j.documentElement, R = !S(j), (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Te, !1) : i.attachEvent && i.attachEvent("onunload", Te)), x.attributes = o(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), x.getElementsByTagName = o(function (e) {
				return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
			}), x.getElementsByClassName = me.test(j.getElementsByClassName), x.getById = o(function (e) {
				return D.appendChild(e).id = q, !j.getElementsByName || !j.getElementsByName(q).length
			}), x.getById ? (T.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && R) {
					var i = t.getElementById(e);
					return i ? [i] : []
				}
			}, T.filter.ID = function (e) {
				var t = e.replace(we, xe);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}) : (delete T.find.ID, T.filter.ID = function (e) {
				var t = e.replace(we, xe);
				return function (e) {
					var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return i && i.value === t
				}
			}), T.find.TAG = x.getElementsByTagName ? function (e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var i, n = [],
					o = 0,
					r = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; i = r[o++];) 1 === i.nodeType && n.push(i);
					return n
				}
				return r
			}, T.find.CLASS = x.getElementsByClassName && function (e, t) {
				return "undefined" != typeof t.getElementsByClassName && R ? t.getElementsByClassName(e) : void 0
			}, N = [], I = [], (x.qsa = me.test(j.querySelectorAll)) && (o(function (e) {
				D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")
			}), o(function (e) {
				var t = j.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
			})), (x.matchesSelector = me.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
				x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), N.push("!=", re)
			}), I = I.length && new RegExp(I.join("|")), N = N.length && new RegExp(N.join("|")), t = me.test(D.compareDocumentPosition), H = t || me.test(D.contains) ? function (e, t) {
				var i = 9 === e.nodeType ? e.documentElement : e,
					n = t && t.parentNode;
				return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, V = t ? function (e, t) {
				if (e === t) return L = !0, 0;
				var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === j || e.ownerDocument === z && H(z, e) ? -1 : t === j || t.ownerDocument === z && H(z, t) ? 1 : M ? ee(M, e) - ee(M, t) : 0 : 4 & i ? -1 : 1)
			} : function (e, t) {
				if (e === t) return L = !0, 0;
				var i, n = 0,
					o = e.parentNode,
					r = t.parentNode,
					a = [e],
					l = [t];
				if (!o || !r) return e === j ? -1 : t === j ? 1 : o ? -1 : r ? 1 : M ? ee(M, e) - ee(M, t) : 0;
				if (o === r) return s(e, t);
				for (i = e; i = i.parentNode;) a.unshift(i);
				for (i = t; i = i.parentNode;) l.unshift(i);
				for (; a[n] === l[n];) n++;
				return n ? s(a[n], l[n]) : a[n] === z ? -1 : l[n] === z ? 1 : 0
			}, j) : j
		}, t.matches = function (e, i) {
			return t(e, null, null, i)
		}, t.matchesSelector = function (e, i) {
			if ((e.ownerDocument || e) !== j && P(e), i = i.replace(de, "='$1']"), x.matchesSelector && R && !G[i + " "] && (!N || !N.test(i)) && (!I || !I.test(i))) try {
				var n = O.call(e, i);
				if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch (o) {}
			return t(i, j, null, [e]).length > 0
		}, t.contains = function (e, t) {
			return (e.ownerDocument || e) !== j && P(e), H(e, t)
		}, t.attr = function (e, t) {
			(e.ownerDocument || e) !== j && P(e);
			var i = T.attrHandle[t.toLowerCase()],
				n = i && Y.call(T.attrHandle, t.toLowerCase()) ? i(e, t, !R) : void 0;
			return void 0 !== n ? n : x.attributes || !R ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
		}, t.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function (e) {
			var t, i = [],
				n = 0,
				o = 0;
			if (L = !x.detectDuplicates, M = !x.sortStable && e.slice(0), e.sort(V), L) {
				for (; t = e[o++];) t === e[o] && (n = i.push(o));
				for (; n--;) e.splice(i[n], 1)
			}
			return M = null, e
		}, C = t.getText = function (e) {
			var t, i = "",
				n = 0,
				o = e.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) i += C(e)
				} else if (3 === o || 4 === o) return e.nodeValue
			} else
				for (; t = e[n++];) i += C(t);
			return i
		}, T = t.selectors = {
			cacheLength: 50,
			createPseudo: n,
			match: he,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (e) {
					return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, i = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ce.test(i) && (t = $(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(we, xe).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && B(e, function (e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (e, i, n) {
					return function (o) {
						var r = t.attr(o, e);
						return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function (e, t, i, n, o) {
					var r = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === n && 0 === o ? function (e) {
						return !!e.parentNode
					} : function (t, i, l) {
						var u, d, c, p, h, f, g = r !== s ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = a && t.nodeName.toLowerCase(),
							y = !l && !a,
							b = !1;
						if (m) {
							if (r) {
								for (; g;) {
									for (p = t; p = p[g];)
										if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
									f = g = "only" === e && !f && "nextSibling"
								}
								return !0
							}
							if (f = [s ? m.firstChild : m.lastChild], s && y) {
								for (p = m, c = p[q] || (p[q] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), u = d[e] || [], h = u[0] === F && u[1], b = h && u[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || f.pop();)
									if (1 === p.nodeType && ++b && p === t) {
										d[e] = [F, h, b];
										break
									}
							} else if (y && (p = t, c = p[q] || (p[q] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), u = d[e] || [], h = u[0] === F && u[1], b = h), b === !1)
								for (;
									(p = ++h && p && p[g] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (c = p[q] || (p[q] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), d[e] = [F, b]), p !== t)););
							return b -= o, b === n || b % n === 0 && b / n >= 0
						}
					}
				},
				PSEUDO: function (e, i) {
					var o, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return r[q] ? r(i) : r.length > 1 ? (o = [e, e, "", i], T.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
						for (var n, o = r(e, i), s = o.length; s--;) n = ee(e, o[s]), e[n] = !(t[n] = o[s])
					}) : function (e) {
						return r(e, 0, o)
					}) : r
				}
			},
			pseudos: {
				not: n(function (e) {
					var t = [],
						i = [],
						o = k(e.replace(ae, "$1"));
					return o[q] ? n(function (e, t, i, n) {
						for (var r, s = o(e, null, n, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
					}) : function (e, n, r) {
						return t[0] = e, o(t, null, r, i), t[0] = null, !i.pop()
					}
				}),
				has: n(function (e) {
					return function (i) {
						return t(e, i).length > 0
					}
				}),
				contains: n(function (e) {
					return e = e.replace(we, xe),
						function (t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
				}),
				lang: n(function (e) {
					return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
						function (t) {
							var i;
							do
								if (i = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t) {
					var i = e.location && e.location.hash;
					return i && i.slice(1) === t.id
				},
				root: function (e) {
					return e === D
				},
				focus: function (e) {
					return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function (e) {
					return e.disabled === !1
				},
				disabled: function (e) {
					return e.disabled === !0
				},
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e) {
					return !T.pseudos.empty(e)
				},
				header: function (e) {
					return ge.test(e.nodeName)
				},
				input: function (e) {
					return fe.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: u(function () {
					return [0]
				}),
				last: u(function (e, t) {
					return [t - 1]
				}),
				eq: u(function (e, t, i) {
					return [0 > i ? i + t : i]
				}),
				even: u(function (e, t) {
					for (var i = 0; t > i; i += 2) e.push(i);
					return e
				}),
				odd: u(function (e, t) {
					for (var i = 1; t > i; i += 2) e.push(i);
					return e
				}),
				lt: u(function (e, t, i) {
					for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
					return e
				}),
				gt: u(function (e, t, i) {
					for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
					return e
				})
			}
		}, T.pseudos.nth = T.pseudos.eq;
		for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[w] = a(w);
		for (w in {
				submit: !0,
				reset: !0
			}) T.pseudos[w] = l(w);
		return c.prototype = T.filters = T.pseudos, T.setFilters = new c, $ = t.tokenize = function (e, i) {
			var n, o, r, s, a, l, u, d = _[e + " "];
			if (d) return i ? 0 : d.slice(0);
			for (a = e, l = [], u = T.preFilter; a;) {
				n && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ue.exec(a)) && (n = o.shift(), r.push({
					value: n,
					type: o[0].replace(ae, " ")
				}), a = a.slice(n.length));
				for (s in T.filter) !(o = he[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({
					value: n,
					type: s,
					matches: o
				}), a = a.slice(n.length));
				if (!n) break
			}
			return i ? a.length : a ? t.error(e) : _(e, l).slice(0)
		}, k = t.compile = function (e, t) {
			var i, n = [],
				o = [],
				r = G[e + " "];
			if (!r) {
				for (t || (t = $(e)), i = t.length; i--;) r = y(t[i]), r[q] ? n.push(r) : o.push(r);
				r = G(e, b(o, n)), r.selector = e
			}
			return r
		}, E = t.select = function (e, t, i, n) {
			var o, r, s, a, l, u = "function" == typeof e && e,
				c = !n && $(e = u.selector || e);
			if (i = i || [], 1 === c.length) {
				if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && R && T.relative[r[1].type]) {
					if (t = (T.find.ID(s.matches[0].replace(we, xe), t) || [])[0], !t) return i;
					u && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
					if ((l = T.find[a]) && (n = l(s.matches[0].replace(we, xe), ye.test(r[0].type) && d(t.parentNode) || t))) {
						if (r.splice(o, 1), e = n.length && p(r), !e) return Z.apply(i, n), i;
						break
					}
			}
			return (u || k(e, c))(n, t, !R, i, !t || ye.test(e) && d(t.parentNode) || t), i
		}, x.sortStable = q.split("").sort(V).join("") === q, x.detectDuplicates = !!L, P(), x.sortDetached = o(function (e) {
			return 1 & e.compareDocumentPosition(j.createElement("div"))
		}), o(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || r("type|href|height|width", function (e, t, i) {
			return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), x.attributes && o(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || r("value", function (e, t, i) {
			return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), o(function (e) {
			return null == e.getAttribute("disabled")
		}) || r(te, function (e, t, i) {
			var n;
			return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
		}), t
	}(e);
	re.find = de, re.expr = de.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = de.uniqueSort, re.text = de.getText, re.isXMLDoc = de.isXML, re.contains = de.contains;
	var ce = function (e, t, i) {
			for (var n = [], o = void 0 !== i;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && re(e).is(i)) break;
					n.push(e)
				}
			return n
		},
		pe = function (e, t) {
			for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
			return i
		},
		he = re.expr.match.needsContext,
		fe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		ge = /^.[^:#\[\.,]*$/;
	re.filter = function (e, t, i) {
		var n = t[0];
		return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? re.find.matchesSelector(n, e) ? [n] : [] : re.find.matches(e, re.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, re.fn.extend({
		find: function (e) {
			var t, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
				for (t = 0; i > t; t++)
					if (re.contains(o[t], this)) return !0
			}));
			for (t = 0; i > t; t++) re.find(e, o[t], n);
			return n = this.pushStack(i > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function (e) {
			return this.pushStack(n(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(n(this, e || [], !0))
		},
		is: function (e) {
			return !!n(this, "string" == typeof e && he.test(e) ? re(e) : e || [], !1).length
		}
	});
	var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ye = re.fn.init = function (e, t, i) {
			var n, o;
			if (!e) return this;
			if (i = i || me, "string" == typeof e) {
				if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : U, !0)), fe.test(n[1]) && re.isPlainObject(t))
						for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return o = U.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = U, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
		};
	ye.prototype = re.fn, me = re(U);
	var be = /^(?:parents|prev(?:Until|All))/,
		we = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	re.fn.extend({
		has: function (e) {
			var t = re(e, this),
				i = t.length;
			return this.filter(function () {
				for (var e = 0; i > e; e++)
					if (re.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			for (var i, n = 0, o = this.length, r = [], s = he.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > n; n++)
				for (i = this[n]; i && i !== t; i = i.parentNode)
					if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, e))) {
						r.push(i);
						break
					}
			return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
		},
		index: function (e) {
			return e ? "string" == typeof e ? J.call(re(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), re.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return ce(e, "parentNode")
		},
		parentsUntil: function (e, t, i) {
			return ce(e, "parentNode", i)
		},
		next: function (e) {
			return o(e, "nextSibling")
		},
		prev: function (e) {
			return o(e, "previousSibling")
		},
		nextAll: function (e) {
			return ce(e, "nextSibling")
		},
		prevAll: function (e) {
			return ce(e, "previousSibling")
		},
		nextUntil: function (e, t, i) {
			return ce(e, "nextSibling", i)
		},
		prevUntil: function (e, t, i) {
			return ce(e, "previousSibling", i)
		},
		siblings: function (e) {
			return pe((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return pe(e.firstChild)
		},
		contents: function (e) {
			return e.contentDocument || re.merge([], e.childNodes)
		}
	}, function (e, t) {
		re.fn[e] = function (i, n) {
			var o = re.map(this, t, i);
			return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = re.filter(n, o)), this.length > 1 && (we[e] || re.uniqueSort(o), be.test(e) && o.reverse()), this.pushStack(o)
		}
	});
	var xe = /\S+/g;
	re.Callbacks = function (e) {
		e = "string" == typeof e ? r(e) : re.extend({}, e);
		var t, i, n, o, s = [],
			a = [],
			l = -1,
			u = function () {
				for (o = e.once, n = t = !0; a.length; l = -1)
					for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = s.length, i = !1);
				e.memory || (i = !1), t = !1, o && (s = i ? [] : "")
			},
			d = {
				add: function () {
					return s && (i && !t && (l = s.length - 1, a.push(i)), function n(t) {
						re.each(t, function (t, i) {
							re.isFunction(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== re.type(i) && n(i)
						})
					}(arguments), i && !t && u()), this
				},
				remove: function () {
					return re.each(arguments, function (e, t) {
						for (var i;
							(i = re.inArray(t, s, i)) > -1;) s.splice(i, 1), l >= i && l--
					}), this
				},
				has: function (e) {
					return e ? re.inArray(e, s) > -1 : s.length > 0
				},
				empty: function () {
					return s && (s = []), this
				},
				disable: function () {
					return o = a = [], s = i = "", this
				},
				disabled: function () {
					return !s
				},
				lock: function () {
					return o = a = [], i || (s = i = ""), this
				},
				locked: function () {
					return !!o
				},
				fireWith: function (e, i) {
					return o || (i = i || [], i = [e, i.slice ? i.slice() : i], a.push(i), t || u()), this
				},
				fire: function () {
					return d.fireWith(this, arguments), this
				},
				fired: function () {
					return !!n
				}
			};
		return d
	}, re.extend({
		Deferred: function (e) {
			var t = [
					["resolve", "done", re.Callbacks("once memory"), "resolved"],
					["reject", "fail", re.Callbacks("once memory"), "rejected"],
					["notify", "progress", re.Callbacks("memory")]
				],
				i = "pending",
				n = {
					state: function () {
						return i
					},
					always: function () {
						return o.done(arguments).fail(arguments), this
					},
					then: function () {
						var e = arguments;
						return re.Deferred(function (i) {
							re.each(t, function (t, r) {
								var s = re.isFunction(e[t]) && e[t];
								o[r[1]](function () {
									var e = s && s.apply(this, arguments);
									e && re.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? re.extend(e, n) : n
					}
				},
				o = {};
			return n.pipe = n.then, re.each(t, function (e, r) {
				var s = r[2],
					a = r[3];
				n[r[1]] = s.add, a && s.add(function () {
					i = a
				}, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
					return o[r[0] + "With"](this === o ? n : this, arguments), this
				}, o[r[0] + "With"] = s.fireWith
			}), n.promise(o), e && e.call(o, o), o
		},
		when: function (e) {
			var t, i, n, o = 0,
				r = Q.call(arguments),
				s = r.length,
				a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
				l = 1 === a ? e : re.Deferred(),
				u = function (e, i, n) {
					return function (o) {
						i[e] = this, n[e] = arguments.length > 1 ? Q.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
					}
				};
			if (s > 1)
				for (t = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(u(o, i, t)).done(u(o, n, r)).fail(l.reject) : --a;
			return a || l.resolveWith(n, r), l.promise()
		}
	});
	var Te;
	re.fn.ready = function (e) {
		return re.ready.promise().done(e), this
	}, re.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? re.readyWait++ : re.ready(!0)
		},
		ready: function (e) {
			(e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (Te.resolveWith(U, [re]), re.fn.triggerHandler && (re(U).triggerHandler("ready"), re(U).off("ready"))))
		}
	}), re.ready.promise = function (t) {
		return Te || (Te = re.Deferred(), "complete" === U.readyState || "loading" !== U.readyState && !U.documentElement.doScroll ? e.setTimeout(re.ready) : (U.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t)
	}, re.ready.promise();
	var Ce = function (e, t, i, n, o, r, s) {
			var a = 0,
				l = e.length,
				u = null == i;
			if ("object" === re.type(i)) {
				o = !0;
				for (a in i) Ce(e, t, a, i[a], !0, r, s)
			} else if (void 0 !== n && (o = !0, re.isFunction(n) || (s = !0), u && (s ? (t.call(e, n), t = null) : (u = t, t = function (e, t, i) {
					return u.call(re(e), i)
				})), t))
				for (; l > a; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
			return o ? e : u ? t.call(e) : l ? t(e[0], i) : r
		},
		Se = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	a.uid = 1, a.prototype = {
		register: function (e, t) {
			var i = t || {};
			return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
				value: i,
				writable: !0,
				configurable: !0
			}), e[this.expando]
		},
		cache: function (e) {
			if (!Se(e)) return {};
			var t = e[this.expando];
			return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, i) {
			var n, o = this.cache(e);
			if ("string" == typeof t) o[t] = i;
			else
				for (n in t) o[n] = t[n];
			return o
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
		},
		access: function (e, t, i) {
			var n;
			return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, re.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
		},
		remove: function (e, t) {
			var i, n, o, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 === t) this.register(e);
				else {
					re.isArray(t) ? n = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? n = [t, o] : (n = o, n = n in r ? [n] : n.match(xe) || [])), i = n.length;
					for (; i--;) delete r[n[i]]
				}(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !re.isEmptyObject(t)
		}
	};
	var $e = new a,
		ke = new a,
		Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ae = /[A-Z]/g;
	re.extend({
		hasData: function (e) {
			return ke.hasData(e) || $e.hasData(e)
		},
		data: function (e, t, i) {
			return ke.access(e, t, i)
		},
		removeData: function (e, t) {
			ke.remove(e, t)
		},
		_data: function (e, t, i) {
			return $e.access(e, t, i)
		},
		_removeData: function (e, t) {
			$e.remove(e, t)
		}
	}), re.fn.extend({
		data: function (e, t) {
			var i, n, o, r = this[0],
				s = r && r.attributes;
			if (void 0 === e) {
				if (this.length && (o = ke.get(r), 1 === r.nodeType && !$e.get(r, "hasDataAttrs"))) {
					for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(r, n, o[n])));
					$e.set(r, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function () {
				ke.set(this, e)
			}) : Ce(this, function (t) {
				var i, n;
				if (r && void 0 === t) {
					if (i = ke.get(r, e) || ke.get(r, e.replace(Ae, "-$&").toLowerCase()), void 0 !== i) return i;
					if (n = re.camelCase(e), i = ke.get(r, n), void 0 !== i) return i;
					if (i = l(r, n, void 0), void 0 !== i) return i
				} else n = re.camelCase(e), this.each(function () {
					var i = ke.get(this, n);
					ke.set(this, n, t), e.indexOf("-") > -1 && void 0 !== i && ke.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				ke.remove(this, e)
			})
		}
	}), re.extend({
		queue: function (e, t, i) {
			var n;
			return e ? (t = (t || "fx") + "queue", n = $e.get(e, t), i && (!n || re.isArray(i) ? n = $e.access(e, t, re.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var i = re.queue(e, t),
				n = i.length,
				o = i.shift(),
				r = re._queueHooks(e, t),
				s = function () {
					re.dequeue(e, t)
				};
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !n && r && r.empty.fire()
		},
		_queueHooks: function (e, t) {
			var i = t + "queueHooks";
			return $e.get(e, i) || $e.access(e, i, {
				empty: re.Callbacks("once memory").add(function () {
					$e.remove(e, [t + "queue", i])
				})
			})
		}
	}), re.fn.extend({
		queue: function (e, t) {
			var i = 2;
			return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var i = re.queue(this, e, t);
				re._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && re.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				re.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var i, n = 1,
				o = re.Deferred(),
				r = this,
				s = this.length,
				a = function () {
					--n || o.resolveWith(r, [r])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) i = $e.get(r[s], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
			return a(), o.promise(t)
		}
	});
	var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Le = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
		Pe = ["Top", "Right", "Bottom", "Left"],
		je = function (e, t) {
			return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
		},
		De = /^(?:checkbox|radio)$/i,
		Re = /<([\w:-]+)/,
		Ie = /^$|\/(?:java|ecma)script/i,
		Ne = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ne.optgroup = Ne.option, Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td;
	var Oe = /<|&#?\w+;/;
	! function () {
		var e = U.createDocumentFragment(),
			t = e.appendChild(U.createElement("div")),
			i = U.createElement("input");
		i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var He = /^key/,
		qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ze = /^([^.]*)(?:\.(.+)|)/;
	re.event = {
		global: {},
		add: function (e, t, i, n, o) {
			var r, s, a, l, u, d, c, p, h, f, g, m = $e.get(e);
			if (m)
				for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = re.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
						return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(xe) || [""], u = t.length; u--;) a = ze.exec(t[u]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (c = re.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = re.event.special[h] || {}, d = re.extend({
					type: h,
					origType: g,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && re.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, n, f, s) !== !1 || e.addEventListener && e.addEventListener(h, s)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), re.event.global[h] = !0)
		},
		remove: function (e, t, i, n, o) {
			var r, s, a, l, u, d, c, p, h, f, g, m = $e.hasData(e) && $e.get(e);
			if (m && (l = m.events)) {
				for (t = (t || "").match(xe) || [""], u = t.length; u--;)
					if (a = ze.exec(t[u]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
						for (c = re.event.special[h] || {}, h = (n ? c.delegateType : c.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, c.remove && c.remove.call(e, d));
						s && !p.length && (c.teardown && c.teardown.call(e, f, m.handle) !== !1 || re.removeEvent(e, h, m.handle), delete l[h])
					} else
						for (h in l) re.event.remove(e, h + t[u], i, n, !0);
				re.isEmptyObject(l) && $e.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			e = re.event.fix(e);
			var t, i, n, o, r, s = [],
				a = Q.call(arguments),
				l = ($e.get(this, "events") || {})[e.type] || [],
				u = re.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (s = re.event.handlers.call(this, e, l), t = 0;
					(o = s[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, i = 0;
						(r = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, n = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, t) {
			var i, n, o, r, s = [],
				a = t.delegateCount,
				l = e.target;
			if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (n = [], i = 0; a > i; i++) r = t[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), n[o] && n.push(r);
						n.length && s.push({
							elem: l,
							handlers: n
						})
					}
			return a < t.length && s.push({
				elem: this,
				handlers: t.slice(a)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, t) {
				var i, n, o, r = t.button;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || U, n = i.documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
			}
		},
		fix: function (e) {
			if (e[re.expando]) return e;
			var t, i, n, o = e.type,
				r = e,
				s = this.fixHooks[o];
			for (s || (this.fixHooks[o] = s = qe.test(o) ? this.mouseHooks : He.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = n.length; t--;) i = n[t], e[i] = r[i];
			return e.target || (e.target = U), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					return this !== g() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === g() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (e) {
					return re.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, re.removeEvent = function (e, t, i) {
		e.removeEventListener && e.removeEventListener(t, i)
	}, re.Event = function (e, t) {
		return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
	}, re.Event.prototype = {
		constructor: re.Event,
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = h, e && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = h, e && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, re.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, t) {
		re.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var i, n = this,
					o = e.relatedTarget,
					r = e.handleObj;
				return o && (o === n || re.contains(n, o)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
			}
		}
	}), re.fn.extend({
		on: function (e, t, i, n) {
			return m(this, e, t, i, n)
		},
		one: function (e, t, i, n) {
			return m(this, e, t, i, n, 1)
		},
		off: function (e, t, i) {
			var n, o;
			if (e && e.preventDefault && e.handleObj) return n = e.handleObj, re(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = f), this.each(function () {
				re.event.remove(this, e, i, t)
			})
		}
	});
	var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		We = /<script|<style|<link/i,
		Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
		_e = /^true\/(.*)/,
		Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	re.extend({
		htmlPrefilter: function (e) {
			return e.replace(Fe, "<$1></$2>")
		},
		clone: function (e, t, i) {
			var n, o, r, s, a = e.cloneNode(!0),
				l = re.contains(e.ownerDocument, e);
			if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
				for (s = d(a), r = d(e), n = 0, o = r.length; o > n; n++) x(r[n], s[n]);
			if (t)
				if (i)
					for (r = r || d(e), s = s || d(a), n = 0, o = r.length; o > n; n++) w(r[n], s[n]);
				else w(e, a);
			return s = d(a, "script"), s.length > 0 && c(s, !l && d(e, "script")), a
		},
		cleanData: function (e) {
			for (var t, i, n, o = re.event.special, r = 0; void 0 !== (i = e[r]); r++)
				if (Se(i)) {
					if (t = i[$e.expando]) {
						if (t.events)
							for (n in t.events) o[n] ? re.event.remove(i, n) : re.removeEvent(i, n, t.handle);
						i[$e.expando] = void 0
					}
					i[ke.expando] && (i[ke.expando] = void 0)
				}
		}
	}), re.fn.extend({
		domManip: T,
		detach: function (e) {
			return C(this, e, !0)
		},
		remove: function (e) {
			return C(this, e)
		},
		text: function (e) {
			return Ce(this, function (e) {
				return void 0 === e ? re.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return T(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = v(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function () {
			return T(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = v(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return T(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return T(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(d(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
				return re.clone(this, e, t)
			})
		},
		html: function (e) {
			return Ce(this, function (e) {
				var t = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !We.test(e) && !Ne[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = re.htmlPrefilter(e);
					try {
						for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (re.cleanData(d(t, !1)), t.innerHTML = e);
						t = 0
					} catch (o) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var e = [];
			return T(this, arguments, function (t) {
				var i = this.parentNode;
				re.inArray(this, e) < 0 && (re.cleanData(d(this)), i && i.replaceChild(t, this))
			}, e)
		}
	}), re.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		re.fn[e] = function (e) {
			for (var i, n = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), re(o[s])[t](i), Z.apply(n, i.get());
			return this.pushStack(n)
		}
	});
	var Ve, Xe = {
			HTML: "block",
			BODY: "block"
		},
		Ye = /^margin/,
		Ue = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
		Qe = function (t) {
			var i = t.ownerDocument.defaultView;
			return i && i.opener || (i = e), i.getComputedStyle(t)
		},
		Ke = function (e, t, i, n) {
			var o, r, s = {};
			for (r in t) s[r] = e.style[r], e.style[r] = t[r];
			o = i.apply(e, n || []);
			for (r in t) e.style[r] = s[r];
			return o
		},
		Ze = U.documentElement;
	! function () {
		function t() {
			a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ze.appendChild(s);
			var t = e.getComputedStyle(a);
			i = "1%" !== t.top, r = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ze.removeChild(s)
		}
		var i, n, o, r, s = U.createElement("div"),
			a = U.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), re.extend(ne, {
			pixelPosition: function () {
				return t(), i
			},
			boxSizingReliable: function () {
				return null == n && t(), n
			},
			pixelMarginRight: function () {
				return null == n && t(), o
			},
			reliableMarginLeft: function () {
				return null == n && t(), r
			},
			reliableMarginRight: function () {
				var t, i = a.appendChild(U.createElement("div"));
				return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Ze.appendChild(s), t = !parseFloat(e.getComputedStyle(i).marginRight), Ze.removeChild(s), a.removeChild(i), t
			}
		}))
	}();
	var Je = /^(none|table(?!-c[ea]).+)/,
		et = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		tt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		it = ["Webkit", "O", "Moz", "ms"],
		nt = U.createElement("div").style;
	re.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var i = k(e, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function (e, t, i, n) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, s, a = re.camelCase(t),
					l = e.style;
				return t = re.cssProps[a] || (re.cssProps[a] = A(a) || a), s = re.cssHooks[t] || re.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t] : (r = typeof i, "string" === r && (o = Le.exec(i)) && o[1] && (i = u(e, t, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (re.cssNumber[a] ? "" : "px")), ne.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i))))
			}
		},
		css: function (e, t, i, n) {
			var o, r, s, a = re.camelCase(t);
			return t = re.cssProps[a] || (re.cssProps[a] = A(a) || a), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = k(e, t, n)), "normal" === o && t in tt && (o = tt[t]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
		}
	}), re.each(["height", "width"], function (e, t) {
		re.cssHooks[t] = {
			get: function (e, i, n) {
				return i ? Je.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, et, function () {
					return P(e, t, n)
				}) : P(e, t, n) : void 0
			},
			set: function (e, i, n) {
				var o, r = n && Qe(e),
					s = n && L(e, t, n, "border-box" === re.css(e, "boxSizing", !1, r), r);
				return s && (o = Le.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = re.css(e, t)), M(e, i, s)
			}
		}
	}), re.cssHooks.marginLeft = E(ne.reliableMarginLeft, function (e, t) {
		return t ? (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px" : void 0
	}), re.cssHooks.marginRight = E(ne.reliableMarginRight, function (e, t) {
		return t ? Ke(e, {
			display: "inline-block"
		}, k, [e, "marginRight"]) : void 0
	}), re.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		re.cssHooks[e + t] = {
			expand: function (i) {
				for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + Pe[n] + t] = r[n] || r[n - 2] || r[0];
				return o
			}
		}, Ye.test(e) || (re.cssHooks[e + t].set = M)
	}), re.fn.extend({
		css: function (e, t) {
			return Ce(this, function (e, t, i) {
				var n, o, r = {},
					s = 0;
				if (re.isArray(t)) {
					for (n = Qe(e), o = t.length; o > s; s++) r[t[s]] = re.css(e, t[s], !1, n);
					return r
				}
				return void 0 !== i ? re.style(e, t, i) : re.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function () {
			return j(this, !0)
		},
		hide: function () {
			return j(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				je(this) ? re(this).show() : re(this).hide()
			})
		}
	}), re.Tween = D, D.prototype = {
		constructor: D,
		init: function (e, t, i, n, o, r) {
			this.elem = e, this.prop = i, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (re.cssNumber[i] ? "" : "px")
		},
		cur: function () {
			var e = D.propHooks[this.prop];
			return e && e.get ? e.get(this) : D.propHooks._default.get(this)
		},
		run: function (e) {
			var t, i = D.propHooks[this.prop];
			return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : D.propHooks._default.set(this), this
		}
	}, D.prototype.init.prototype = D.prototype, D.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function (e) {
				re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, re.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, re.fx = D.prototype.init, re.fx.step = {};
	var ot, rt, st = /^(?:toggle|show|hide)$/,
		at = /queueHooks$/;
	re.Animation = re.extend(q, {
			tweeners: {
				"*": [function (e, t) {
					var i = this.createTween(e, t);
					return u(i.elem, e, Le.exec(t), i), i
				}]
			},
			tweener: function (e, t) {
				re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
				for (var i, n = 0, o = e.length; o > n; n++) i = e[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(t)
			},
			prefilters: [O],
			prefilter: function (e, t) {
				t ? q.prefilters.unshift(e) : q.prefilters.push(e)
			}
		}), re.speed = function (e, t, i) {
			var n = e && "object" == typeof e ? re.extend({}, e) : {
				complete: i || !i && t || re.isFunction(e) && e,
				duration: e,
				easing: i && t || t && !re.isFunction(t) && t
			};
			return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
				re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
			}, n
		}, re.fn.extend({
			fadeTo: function (e, t, i, n) {
				return this.filter(je).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, i, n)
			},
			animate: function (e, t, i, n) {
				var o = re.isEmptyObject(e),
					r = re.speed(t, i, n),
					s = function () {
						var t = q(this, re.extend({}, e), r);
						(o || $e.get(this, "finish")) && t.stop(!0)
					};
				return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
			},
			stop: function (e, t, i) {
				var n = function (e) {
					var t = e.stop;
					delete e.stop, t(i)
				};
				return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
					var t = !0,
						o = null != e && e + "queueHooks",
						r = re.timers,
						s = $e.get(this);
					if (o) s[o] && s[o].stop && n(s[o]);
					else
						for (o in s) s[o] && s[o].stop && at.test(o) && n(s[o]);
					for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
					!t && i || re.dequeue(this, e)
				})
			},
			finish: function (e) {
				return e !== !1 && (e = e || "fx"), this.each(function () {
					var t, i = $e.get(this),
						n = i[e + "queue"],
						o = i[e + "queueHooks"],
						r = re.timers,
						s = n ? n.length : 0;
					for (i.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
					for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
					delete i.finish
				})
			}
		}), re.each(["toggle", "show", "hide"], function (e, t) {
			var i = re.fn[t];
			re.fn[t] = function (e, n, o) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(I(t, !0), e, n, o)
			}
		}), re.each({
			slideDown: I("show"),
			slideUp: I("hide"),
			slideToggle: I("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			re.fn[e] = function (e, i, n) {
				return this.animate(t, e, i, n)
			}
		}), re.timers = [], re.fx.tick = function () {
			var e, t = 0,
				i = re.timers;
			for (ot = re.now(); t < i.length; t++) e = i[t],
				e() || i[t] !== e || i.splice(t--, 1);
			i.length || re.fx.stop(), ot = void 0
		}, re.fx.timer = function (e) {
			re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
		}, re.fx.interval = 13, re.fx.start = function () {
			rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
		}, re.fx.stop = function () {
			e.clearInterval(rt), rt = null
		}, re.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, re.fn.delay = function (t, i) {
			return t = re.fx ? re.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function (i, n) {
				var o = e.setTimeout(i, t);
				n.stop = function () {
					e.clearTimeout(o)
				}
			})
		},
		function () {
			var e = U.createElement("input"),
				t = U.createElement("select"),
				i = t.appendChild(U.createElement("option"));
			e.type = "checkbox", ne.checkOn = "" !== e.value, ne.optSelected = i.selected, t.disabled = !0, ne.optDisabled = !i.disabled, e = U.createElement("input"), e.value = "t", e.type = "radio", ne.radioValue = "t" === e.value
		}();
	var lt, ut = re.expr.attrHandle;
	re.fn.extend({
		attr: function (e, t) {
			return Ce(this, re.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				re.removeAttr(this, e)
			})
		}
	}), re.extend({
		attr: function (e, t, i) {
			var n, o, r = e.nodeType;
			return 3 !== r && 8 !== r && 2 !== r ? "undefined" == typeof e.getAttribute ? re.prop(e, t, i) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)), void 0 !== i ? null === i ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = re.find.attr(e, t), null == n ? void 0 : n)) : void 0
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
						var i = e.value;
						return e.setAttribute("type", t), i && (e.value = i), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var i, n, o = 0,
				r = t && t.match(xe);
			if (r && 1 === e.nodeType)
				for (; i = r[o++];) n = re.propFix[i] || i, re.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
		}
	}), lt = {
		set: function (e, t, i) {
			return t === !1 ? re.removeAttr(e, i) : e.setAttribute(i, i), i
		}
	}, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var i = ut[t] || re.find.attr;
		ut[t] = function (e, t, n) {
			var o, r;
			return n || (r = ut[t], ut[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, ut[t] = r), o
		}
	});
	var dt = /^(?:input|select|textarea|button)$/i,
		ct = /^(?:a|area)$/i;
	re.fn.extend({
		prop: function (e, t) {
			return Ce(this, re.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[re.propFix[e] || e]
			})
		}
	}), re.extend({
		prop: function (e, t, i) {
			var n, o, r = e.nodeType;
			return 3 !== r && 8 !== r && 2 !== r ? (1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = re.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : dt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), ne.optSelected || (re.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		re.propFix[this.toLowerCase()] = this
	});
	var pt = /[\t\r\n\f]/g;
	re.fn.extend({
		addClass: function (e) {
			var t, i, n, o, r, s, a, l = 0;
			if (re.isFunction(e)) return this.each(function (t) {
				re(this).addClass(e.call(this, t, z(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(xe) || []; i = this[l++];)
					if (o = z(i), n = 1 === i.nodeType && (" " + o + " ").replace(pt, " ")) {
						for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
						a = re.trim(n), o !== a && i.setAttribute("class", a)
					}
			return this
		},
		removeClass: function (e) {
			var t, i, n, o, r, s, a, l = 0;
			if (re.isFunction(e)) return this.each(function (t) {
				re(this).removeClass(e.call(this, t, z(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(xe) || []; i = this[l++];)
					if (o = z(i), n = 1 === i.nodeType && (" " + o + " ").replace(pt, " ")) {
						for (s = 0; r = t[s++];)
							for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
						a = re.trim(n), o !== a && i.setAttribute("class", a)
					}
			return this
		},
		toggleClass: function (e, t) {
			var i = typeof e;
			return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (i) {
				re(this).toggleClass(e.call(this, i, z(this), t), t)
			}) : this.each(function () {
				var t, n, o, r;
				if ("string" === i)
					for (n = 0, o = re(this), r = e.match(xe) || []; t = r[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				else void 0 !== e && "boolean" !== i || (t = z(this), t && $e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : $e.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, i, n = 0;
			for (t = " " + e + " "; i = this[n++];)
				if (1 === i.nodeType && (" " + z(i) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var ht = /\r/g,
		ft = /[\x20\t\r\n\f]+/g;
	re.fn.extend({
		val: function (e) {
			var t, i, n, o = this[0];
			return arguments.length ? (n = re.isFunction(e), this.each(function (i) {
				var o;
				1 === this.nodeType && (o = n ? e.call(this, i, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function (e) {
					return null == e ? "" : e + ""
				})), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
			})) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(ht, "") : null == i ? "" : i)) : void 0
		}
	}), re.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = re.find.attr(e, "value");
					return null != t ? t : re.trim(re.text(e)).replace(ft, " ")
				}
			},
			select: {
				get: function (e) {
					for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
						if (i = n[l], (i.selected || l === o) && (ne.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !re.nodeName(i.parentNode, "optgroup"))) {
							if (t = re(i).val(), r) return t;
							s.push(t)
						}
					return s
				},
				set: function (e, t) {
					for (var i, n, o = e.options, r = re.makeArray(t), s = o.length; s--;) n = o[s], (n.selected = re.inArray(re.valHooks.option.get(n), r) > -1) && (i = !0);
					return i || (e.selectedIndex = -1), r
				}
			}
		}
	}), re.each(["radio", "checkbox"], function () {
		re.valHooks[this] = {
			set: function (e, t) {
				return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
			}
		}, ne.checkOn || (re.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var gt = /^(?:focusinfocus|focusoutblur)$/;
	re.extend(re.event, {
		trigger: function (t, i, n, o) {
			var r, s, a, l, u, d, c, p = [n || U],
				h = ie.call(t, "type") ? t.type : t,
				f = ie.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = a = n = n || U, 3 !== n.nodeType && 8 !== n.nodeType && !gt.test(h + re.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[re.expando] ? t : new re.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : re.makeArray(i, [t]), c = re.event.special[h] || {}, o || !c.trigger || c.trigger.apply(n, i) !== !1)) {
				if (!o && !c.noBubble && !re.isWindow(n)) {
					for (l = c.delegateType || h, gt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
					a === (n.ownerDocument || U) && p.push(a.defaultView || a.parentWindow || e)
				}
				for (r = 0;
					(s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : c.bindType || h, d = ($e.get(s, "events") || {})[t.type] && $e.get(s, "handle"), d && d.apply(s, i), d = u && s[u], d && d.apply && Se(s) && (t.result = d.apply(s, i), t.result === !1 && t.preventDefault());
				return t.type = h, o || t.isDefaultPrevented() || c._default && c._default.apply(p.pop(), i) !== !1 || !Se(n) || u && re.isFunction(n[h]) && !re.isWindow(n) && (a = n[u], a && (n[u] = null), re.event.triggered = h, n[h](), re.event.triggered = void 0, a && (n[u] = a)), t.result
			}
		},
		simulate: function (e, t, i) {
			var n = re.extend(new re.Event, i, {
				type: e,
				isSimulated: !0
			});
			re.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
		}
	}), re.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				re.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var i = this[0];
			return i ? re.event.trigger(e, t, i, !0) : void 0
		}
	}), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		re.fn[t] = function (e, i) {
			return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
		}
	}), re.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), ne.focusin = "onfocusin" in e, ne.focusin || re.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var i = function (e) {
			re.event.simulate(t, e.target, re.event.fix(e))
		};
		re.event.special[t] = {
			setup: function () {
				var n = this.ownerDocument || this,
					o = $e.access(n, t);
				o || n.addEventListener(e, i, !0), $e.access(n, t, (o || 0) + 1)
			},
			teardown: function () {
				var n = this.ownerDocument || this,
					o = $e.access(n, t) - 1;
				o ? $e.access(n, t, o) : (n.removeEventListener(e, i, !0), $e.remove(n, t))
			}
		}
	});
	var mt = e.location,
		vt = re.now(),
		yt = /\?/;
	re.parseJSON = function (e) {
		return JSON.parse(e + "")
	}, re.parseXML = function (t) {
		var i;
		if (!t || "string" != typeof t) return null;
		try {
			i = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (n) {
			i = void 0
		}
		return i && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), i
	};
	var bt = /#.*$/,
		wt = /([?&])_=[^&]*/,
		xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Ct = /^(?:GET|HEAD)$/,
		St = /^\/\//,
		$t = {},
		kt = {},
		Et = "*/".concat("*"),
		At = U.createElement("a");
	At.href = mt.href, re.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: mt.href,
			type: "GET",
			isLocal: Tt.test(mt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Et,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": re.parseJSON,
				"text xml": re.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e)
		},
		ajaxPrefilter: F($t),
		ajaxTransport: F(kt),
		ajax: function (t, i) {
			function n(t, i, n, a) {
				var u, c, y, b, x, C = i;
				2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (b = _(p, T, n)), b = G(p, b, T, u), u ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (re.lastModified[r] = x), x = T.getResponseHeader("etag"), x && (re.etag[r] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, c = b.data, y = b.error, u = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (i || C) + "", u ? g.resolveWith(h, [c, C, T]) : g.rejectWith(h, [T, C, y]), T.statusCode(v), v = void 0, d && f.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? c : y]), m.fireWith(h, [T, C]), d && (f.trigger("ajaxComplete", [T, p]), --re.active || re.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (i = t, t = void 0), i = i || {};
			var o, r, s, a, l, u, d, c, p = re.ajaxSetup({}, i),
				h = p.context || p,
				f = p.context && (h.nodeType || h.jquery) ? re(h) : re.event,
				g = re.Deferred(),
				m = re.Callbacks("once memory"),
				v = p.statusCode || {},
				y = {},
				b = {},
				w = 0,
				x = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === w) {
							if (!a)
								for (a = {}; t = xt.exec(s);) a[t[1].toLowerCase()] = t[2];
							t = a[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === w ? s : null
					},
					setRequestHeader: function (e, t) {
						var i = e.toLowerCase();
						return w || (e = b[i] = b[i] || e, y[e] = t), this
					},
					overrideMimeType: function (e) {
						return w || (p.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (2 > w)
								for (t in e) v[t] = [v[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function (e) {
						var t = e || x;
						return o && o.abort(t), n(0, t), this
					}
				};
			if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || mt.href) + "").replace(bt, "").replace(St, mt.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain) {
				u = U.createElement("a");
				try {
					u.href = p.url, u.href = u.href, p.crossDomain = At.protocol + "//" + At.host != u.protocol + "//" + u.host
				} catch (C) {
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), W($t, p, i, T), 2 === w) return T;
			d = re.event && p.global, d && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ct.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (yt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wt.test(r) ? r.replace(wt, "$1_=" + vt++) : r + (yt.test(r) ? "&" : "?") + "_=" + vt++)), p.ifModified && (re.lastModified[r] && T.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && T.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : p.accepts["*"]);
			for (c in p.headers) T.setRequestHeader(c, p.headers[c]);
			if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === w)) return T.abort();
			x = "abort";
			for (c in {
					success: 1,
					error: 1,
					complete: 1
				}) T[c](p[c]);
			if (o = W(kt, p, i, T)) {
				if (T.readyState = 1, d && f.trigger("ajaxSend", [T, p]), 2 === w) return T;
				p.async && p.timeout > 0 && (l = e.setTimeout(function () {
					T.abort("timeout")
				}, p.timeout));
				try {
					w = 1, o.send(y, n)
				} catch (C) {
					if (!(2 > w)) throw C;
					n(-1, C)
				}
			} else n(-1, "No Transport");
			return T
		},
		getJSON: function (e, t, i) {
			return re.get(e, t, i, "json")
		},
		getScript: function (e, t) {
			return re.get(e, void 0, t, "script")
		}
	}), re.each(["get", "post"], function (e, t) {
		re[t] = function (e, i, n, o) {
			return re.isFunction(i) && (o = o || n, n = i, i = void 0), re.ajax(re.extend({
				url: e,
				type: t,
				dataType: o,
				data: i,
				success: n
			}, re.isPlainObject(e) && e))
		}
	}), re._evalUrl = function (e) {
		return re.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, re.fn.extend({
		wrapAll: function (e) {
			var t;
			return re.isFunction(e) ? this.each(function (t) {
				re(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function (e) {
			return re.isFunction(e) ? this.each(function (t) {
				re(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = re(this),
					i = t.contents();
				i.length ? i.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = re.isFunction(e);
			return this.each(function (i) {
				re(this).wrapAll(t ? e.call(this, i) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
			}).end()
		}
	}), re.expr.filters.hidden = function (e) {
		return !re.expr.filters.visible(e)
	}, re.expr.filters.visible = function (e) {
		return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
	};
	var Mt = /%20/g,
		Lt = /\[\]$/,
		Pt = /\r?\n/g,
		jt = /^(?:submit|button|image|reset|file)$/i,
		Dt = /^(?:input|select|textarea|keygen)/i;
	re.param = function (e, t) {
		var i, n = [],
			o = function (e, t) {
				t = re.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
			o(this.name, this.value)
		});
		else
			for (i in e) V(i, e[i], t, o);
		return n.join("&").replace(Mt, "+")
	}, re.fn.extend({
		serialize: function () {
			return re.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = re.prop(this, "elements");
				return e ? re.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !re(this).is(":disabled") && Dt.test(this.nodeName) && !jt.test(e) && (this.checked || !De.test(e))
			}).map(function (e, t) {
				var i = re(this).val();
				return null == i ? null : re.isArray(i) ? re.map(i, function (e) {
					return {
						name: t.name,
						value: e.replace(Pt, "\r\n")
					}
				}) : {
					name: t.name,
					value: i.replace(Pt, "\r\n")
				}
			}).get()
		}
	}), re.ajaxSettings.xhr = function () {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	};
	var Rt = {
			0: 200,
			1223: 204
		},
		It = re.ajaxSettings.xhr();
	ne.cors = !!It && "withCredentials" in It, ne.ajax = It = !!It, re.ajaxTransport(function (t) {
		var i, n;
		return ne.cors || It && !t.crossDomain ? {
			send: function (o, r) {
				var s, a = t.xhr();
				if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (s in t.xhrFields) a[s] = t.xhrFields[s];
				t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
				for (s in o) a.setRequestHeader(s, o[s]);
				i = function (e) {
					return function () {
						i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
							binary: a.response
						} : {
							text: a.responseText
						}, a.getAllResponseHeaders()))
					}
				}, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
					4 === a.readyState && e.setTimeout(function () {
						i && n()
					})
				}, i = i("abort");
				try {
					a.send(t.hasContent && t.data || null)
				} catch (l) {
					if (i) throw l
				}
			},
			abort: function () {
				i && i()
			}
		} : void 0
	}), re.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return re.globalEval(e), e
			}
		}
	}), re.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), re.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, i;
			return {
				send: function (n, o) {
					t = re("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", i = function (e) {
						t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
					}), U.head.appendChild(t[0])
				},
				abort: function () {
					i && i()
				}
			}
		}
	});
	var Nt = [],
		Ot = /(=)\?(?=&|$)|\?\?/;
	re.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Nt.pop() || re.expando + "_" + vt++;
			return this[e] = !0, e
		}
	}), re.ajaxPrefilter("json jsonp", function (t, i, n) {
		var o, r, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + o) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
			return s || re.error(o + " was not called"), s[0]
		}, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
			s = arguments
		}, n.always(function () {
			void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, Nt.push(o)), s && re.isFunction(r) && r(s[0]), s = r = void 0
		}), "script") : void 0
	}), re.parseHTML = function (e, t, i) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (i = t, t = !1), t = t || U;
		var n = fe.exec(e),
			o = !i && [];
		return n ? [t.createElement(n[1])] : (n = p([e], t, o), o && o.length && re(o).remove(), re.merge([], n.childNodes))
	};
	var Ht = re.fn.load;
	re.fn.load = function (e, t, i) {
		if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
		var n, o, r, s = this,
			a = e.indexOf(" ");
		return a > -1 && (n = re.trim(e.slice(a)), e = e.slice(0, a)), re.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && re.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			r = arguments, s.html(n ? re("<div>").append(re.parseHTML(e)).find(n) : e)
		}).always(i && function (e, t) {
			s.each(function () {
				i.apply(this, r || [e.responseText, t, e])
			})
		}), this
	}, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		re.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), re.expr.filters.animated = function (e) {
		return re.grep(re.timers, function (t) {
			return e === t.elem
		}).length
	}, re.offset = {
		setOffset: function (e, t, i) {
			var n, o, r, s, a, l, u, d = re.css(e, "position"),
				c = re(e),
				p = {};
			"static" === d && (e.style.position = "relative"), a = c.offset(), r = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, u ? (n = c.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, i, re.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : c.css(p)
		}
	}, re.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				re.offset.setOffset(this, e, t)
			});
			var t, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				r = n && n.ownerDocument;
			return r ? (t = r.documentElement, re.contains(t, n) ? (o = n.getBoundingClientRect(), i = X(r), {
				top: o.top + i.pageYOffset - t.clientTop,
				left: o.left + i.pageXOffset - t.clientLeft
			}) : o) : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - re.css(i, "marginTop", !0),
					left: t.left - n.left - re.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
				return e || Ze
			})
		}
	}), re.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t) {
		var i = "pageYOffset" === t;
		re.fn[e] = function (n) {
			return Ce(this, function (e, n, o) {
				var r = X(e);
				return void 0 === o ? r ? r[t] : e[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o)
			}, e, n, arguments.length)
		}
	}), re.each(["top", "left"], function (e, t) {
		re.cssHooks[t] = E(ne.pixelPosition, function (e, i) {
			return i ? (i = k(e, t), Ue.test(i) ? re(e).position()[t] + "px" : i) : void 0
		})
	}), re.each({
		Height: "height",
		Width: "width"
	}, function (e, t) {
		re.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (i, n) {
			re.fn[n] = function (n, o) {
				var r = arguments.length && (i || "boolean" != typeof n),
					s = i || (n === !0 || o === !0 ? "margin" : "border");
				return Ce(this, function (t, i, n) {
					var o;
					return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? re.css(t, i, s) : re.style(t, i, n, s)
				}, t, r ? n : void 0, r, null)
			}
		})
	}), re.fn.extend({
		bind: function (e, t, i) {
			return this.on(e, null, t, i)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, i, n) {
			return this.on(t, e, i, n)
		},
		undelegate: function (e, t, i) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
		},
		size: function () {
			return this.length
		}
	}), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return re
	});
	var qt = e.jQuery,
		zt = e.$;
	return re.noConflict = function (t) {
		return e.$ === re && (e.$ = zt), t && e.jQuery === re && (e.jQuery = qt), re
	}, t || (e.jQuery = e.$ = re), re
}),
function (e) {
	var t = function (t, i) {
		this.settings = i, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = {
			entriesBuff: [],
			width: 0,
			height: 0,
			aspectRatio: 0
		}, this.lastAnalyzedIndex = -1, this["yield"] = {
			every: 2,
			flushed: 0
		}, this.border = i.border >= 0 ? i.border : i.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.spinner = {
			phase: 0,
			timeSlot: 150,
			$el: e('<div class="spinner"><span></span><span></span><span></span></div>'),
			intervalId: null
		}, this.checkWidthIntervalId = null, this.galleryWidth = t.width(), this.$gallery = t
	};
	t.prototype.getSuffix = function (e, t) {
		var i, n;
		for (i = e > t ? e : t, n = 0; n < this.suffixRanges.length; n++)
			if (i <= this.suffixRanges[n]) return this.settings.sizeRangeSuffixes[this.suffixRanges[n]];
		return this.settings.sizeRangeSuffixes[this.suffixRanges[n - 1]]
	}, t.prototype.removeSuffix = function (e, t) {
		return e.substring(0, e.length - t.length)
	}, t.prototype.endsWith = function (e, t) {
		return -1 !== e.indexOf(t, e.length - t.length)
	}, t.prototype.getUsedSuffix = function (e) {
		for (var t in this.settings.sizeRangeSuffixes)
			if (this.settings.sizeRangeSuffixes.hasOwnProperty(t)) {
				if (0 === this.settings.sizeRangeSuffixes[t].length) continue;
				if (this.endsWith(e, this.settings.sizeRangeSuffixes[t])) return this.settings.sizeRangeSuffixes[t]
			}
		return ""
	}, t.prototype.newSrc = function (e, t, i) {
		var n;
		if (this.settings.thumbnailPath) n = this.settings.thumbnailPath(e, t, i);
		else {
			var o = e.match(this.settings.extension),
				r = null !== o ? o[0] : "";
			n = e.replace(this.settings.extension, ""), n = this.removeSuffix(n, this.getUsedSuffix(n)), n += this.getSuffix(t, i) + r
		}
		return n
	}, t.prototype.showImg = function (e, t) {
		this.settings.cssAnimation ? (e.addClass("entry-visible"), t && t()) : e.stop().fadeTo(this.settings.imagesAnimationDuration, 1, t)
	}, t.prototype.extractImgSrcFromImage = function (e) {
		var t = "undefined" != typeof e.data("safe-src") ? e.data("safe-src") : e.attr("src");
		return e.data("jg.originalSrc", t), t
	}, t.prototype.imgFromEntry = function (e) {
		var t = e.find("> img");
		return 0 === t.length && (t = e.find("> a > img")), 0 === t.length ? null : t
	}, t.prototype.captionFromEntry = function (e) {
		var t = e.find("> .caption");
		return 0 === t.length ? null : t
	}, t.prototype.displayEntry = function (t, i, n, o, r, s) {
		t.width(o), t.height(s), t.css("top", n), t.css("left", i);
		var a = this.imgFromEntry(t);
		if (null !== a) {
			a.css("width", o), a.css("height", r), a.css("margin-left", -o / 2), a.css("margin-top", -r / 2);
			var l = a.attr("src"),
				u = this.newSrc(l, o, r);
			a.one("error", function () {
				a.attr("src", a.data("jg.originalSrc"))
			});
			var d = function () {
				l !== u && a.attr("src", u)
			};
			"skipped" === t.data("jg.loaded") ? this.onImageEvent(l, e.proxy(function () {
				this.showImg(t, d), t.data("jg.loaded", !0)
			}, this)) : this.showImg(t, d)
		} else this.showImg(t);
		this.displayEntryCaption(t)
	}, t.prototype.displayEntryCaption = function (t) {
		var i = this.imgFromEntry(t);
		if (null !== i && this.settings.captions) {
			var n = this.captionFromEntry(t);
			if (null === n) {
				var o = i.attr("alt");
				this.isValidCaption(o) || (o = t.attr("title")), this.isValidCaption(o) && (n = e('<div class="caption">' + o + "</div>"), t.append(n), t.data("jg.createdCaption", !0))
			}
			null !== n && (this.settings.cssAnimation || n.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(t))
		} else this.removeCaptionEventsHandlers(t)
	}, t.prototype.isValidCaption = function (e) {
		return "undefined" != typeof e && e.length > 0
	}, t.prototype.onEntryMouseEnterForCaption = function (t) {
		var i = this.captionFromEntry(e(t.currentTarget));
		this.settings.cssAnimation ? i.addClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
	}, t.prototype.onEntryMouseLeaveForCaption = function (t) {
		var i = this.captionFromEntry(e(t.currentTarget));
		this.settings.cssAnimation ? i.removeClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
	}, t.prototype.addCaptionEventsHandlers = function (t) {
		var i = t.data("jg.captionMouseEvents");
		"undefined" == typeof i && (i = {
			mouseenter: e.proxy(this.onEntryMouseEnterForCaption, this),
			mouseleave: e.proxy(this.onEntryMouseLeaveForCaption, this)
		}, t.on("mouseenter", void 0, void 0, i.mouseenter), t.on("mouseleave", void 0, void 0, i.mouseleave), t.data("jg.captionMouseEvents", i))
	}, t.prototype.removeCaptionEventsHandlers = function (e) {
		var t = e.data("jg.captionMouseEvents");
		"undefined" != typeof t && (e.off("mouseenter", void 0, t.mouseenter), e.off("mouseleave", void 0, t.mouseleave), e.removeData("jg.captionMouseEvents"))
	}, t.prototype.prepareBuildingRow = function (e) {
		var t, i, n, o, r, s = !0,
			a = 0,
			l = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
			u = l / this.buildingRow.aspectRatio,
			d = this.buildingRow.width / l > this.settings.justifyThreshold;
		if (e && "hide" === this.settings.lastRow && !d) {
			for (t = 0; t < this.buildingRow.entriesBuff.length; t++) i = this.buildingRow.entriesBuff[t], this.settings.cssAnimation ? i.removeClass("entry-visible") : i.stop().fadeTo(0, 0);
			return -1
		}
		for (e && !d && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (s = !1), t = 0; t < this.buildingRow.entriesBuff.length; t++) i = this.buildingRow.entriesBuff[t], n = i.data("jg.width") / i.data("jg.height"), s ? (o = t === this.buildingRow.entriesBuff.length - 1 ? l : u * n, r = u) : (o = this.settings.rowHeight * n, r = this.settings.rowHeight), l -= Math.round(o), i.data("jg.jwidth", Math.round(o)), i.data("jg.jheight", Math.ceil(r)), (0 === t || a > r) && (a = r);
		return this.settings.fixedHeight && a > this.settings.rowHeight && (a = this.settings.rowHeight), this.buildingRow.height = a, s
	}, t.prototype.clearBuildingRow = function () {
		this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0
	}, t.prototype.flushRow = function (e) {
		var t, i, n, o = this.settings,
			r = this.border;
		if (i = this.prepareBuildingRow(e), e && "hide" === o.lastRow && -1 === this.buildingRow.height) return void this.clearBuildingRow();
		if (this.maxRowHeight.isPercentage ? this.maxRowHeight.value * o.rowHeight < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight.value * o.rowHeight) : this.maxRowHeight.value > 0 && this.maxRowHeight.value < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight.value), "center" === o.lastRow || "right" === o.lastRow) {
			var s = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * o.margins;
			for (n = 0; n < this.buildingRow.entriesBuff.length; n++) t = this.buildingRow.entriesBuff[n], s -= t.data("jg.jwidth");
			"center" === o.lastRow ? r += s / 2 : "right" === o.lastRow && (r += s)
		}
		for (n = 0; n < this.buildingRow.entriesBuff.length; n++) t = this.buildingRow.entriesBuff[n], this.displayEntry(t, r, this.offY, t.data("jg.jwidth"), t.data("jg.jheight"), this.buildingRow.height), r += t.data("jg.jwidth") + o.margins;
		this.$gallery.height(this.offY + this.buildingRow.height + this.border + (this.isSpinnerActive() ? this.getSpinnerHeight() : 0)), (!e || this.buildingRow.height <= o.rowHeight && i) && (this.offY += this.buildingRow.height + o.margins, this.clearBuildingRow(), this.$gallery.trigger("jg.rowflush"))
	}, t.prototype.checkWidth = function () {
		this.checkWidthIntervalId = setInterval(e.proxy(function () {
			var e = parseFloat(this.$gallery.width());
			Math.abs(e - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = e, this.rewind(), this.startImgAnalyzer(!0))
		}, this), this.settings.refreshTime)
	}, t.prototype.isSpinnerActive = function () {
		return null !== this.spinner.intervalId
	}, t.prototype.getSpinnerHeight = function () {
		return this.spinner.$el.innerHeight()
	}, t.prototype.stopLoadingSpinnerAnimation = function () {
		clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.$gallery.height(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach()
	}, t.prototype.startLoadingSpinnerAnimation = function () {
		var e = this.spinner,
			t = e.$el.find("span");
		clearInterval(e.intervalId), this.$gallery.append(e.$el), this.$gallery.height(this.offY + this.buildingRow.height + this.getSpinnerHeight()), e.intervalId = setInterval(function () {
			e.phase < t.length ? t.eq(e.phase).fadeTo(e.timeSlot, 1) : t.eq(e.phase - t.length).fadeTo(e.timeSlot, 0), e.phase = (e.phase + 1) % (2 * t.length)
		}, e.timeSlot)
	}, t.prototype.rewind = function () {
		this.lastAnalyzedIndex = -1, this.offY = this.border, this.clearBuildingRow()
	}, t.prototype.updateEntries = function (t) {
		return this.entries = this.$gallery.find(this.settings.selector).toArray(), 0 === this.entries.length ? !1 : (this.settings.filter ? this.modifyEntries(this.filterArray, t) : this.modifyEntries(this.resetFilters, t), e.isFunction(this.settings.sort) ? this.modifyEntries(this.sortArray, t) : this.settings.randomize && this.modifyEntries(this.shuffleArray, t), !0)
	}, t.prototype.insertToGallery = function (t) {
		var i = this;
		e.each(t, function () {
			e(this).appendTo(i.$gallery)
		})
	}, t.prototype.shuffleArray = function (e) {
		var t, i, n;
		for (t = e.length - 1; t > 0; t--) i = Math.floor(Math.random() * (t + 1)), n = e[t], e[t] = e[i], e[i] = n;
		return this.insertToGallery(e), e
	}, t.prototype.sortArray = function (e) {
		return e.sort(this.settings.sort), this.insertToGallery(e), e
	}, t.prototype.resetFilters = function (t) {
		for (var i = 0; i < t.length; i++) e(t[i]).removeClass("jg-filtered");
		return t
	}, t.prototype.filterArray = function (t) {
		var i = this.settings;
		return "string" === e.type(i.filter) ? t.filter(function (t) {
			var n = e(t);
			return n.is(i.filter) ? (n.removeClass("jg-filtered"), !0) : (n.addClass("jg-filtered"), !1)
		}) : e.isFunction(i.filter) ? t.filter(i.filter) : void 0
	}, t.prototype.modifyEntries = function (e, t) {
		var i = t ? this.entries.splice(this.lastAnalyzedIndex + 1, this.entries.length - this.lastAnalyzedIndex - 1) : this.entries;
		i = e.call(this, i), this.entries = t ? this.entries.concat(i) : i
	}, t.prototype.destroy = function () {
		clearInterval(this.checkWidthIntervalId), e.each(this.entries, e.proxy(function (t, i) {
			var n = e(i);
			n.css("width", ""), n.css("height", ""), n.css("top", ""), n.css("left", ""), n.data("jg.loaded", void 0), n.removeClass("jg-entry");
			var o = this.imgFromEntry(n);
			o.css("width", ""), o.css("height", ""), o.css("margin-left", ""), o.css("margin-top", ""), o.attr("src", o.data("jg.originalSrc")), o.data("jg.originalSrc", void 0), this.removeCaptionEventsHandlers(n);
			var r = this.captionFromEntry(n);
			n.data("jg.createdCaption") ? (n.data("jg.createdCaption", void 0),
				null !== r && r.remove()) : null !== r && r.fadeTo(0, 1)
		}, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0)
	}, t.prototype.analyzeImages = function (t) {
		for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
			var n = e(this.entries[i]);
			if (n.data("jg.loaded") === !0 || "skipped" === n.data("jg.loaded")) {
				var o = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
					r = n.data("jg.width") / n.data("jg.height");
				if (o / (this.buildingRow.aspectRatio + r) < this.settings.rowHeight && (this.flushRow(!1), ++this["yield"].flushed >= this["yield"].every)) return void this.startImgAnalyzer(t);
				this.buildingRow.entriesBuff.push(n), this.buildingRow.aspectRatio += r, this.buildingRow.width += r * this.settings.rowHeight, this.lastAnalyzedIndex = i
			} else if ("error" !== n.data("jg.loaded")) return
		}
		this.buildingRow.entriesBuff.length > 0 && this.flushRow(!0), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.$gallery.trigger(t ? "jg.resize" : "jg.complete")
	}, t.prototype.stopImgAnalyzerStarter = function () {
		this["yield"].flushed = 0, null !== this.imgAnalyzerTimeout && clearTimeout(this.imgAnalyzerTimeout)
	}, t.prototype.startImgAnalyzer = function (e) {
		var t = this;
		this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function () {
			t.analyzeImages(e)
		}, .001)
	}, t.prototype.onImageEvent = function (t, i, n) {
		if (i || n) {
			var o = new Image,
				r = e(o);
			i && r.one("load", function () {
				r.off("load error"), i(o)
			}), n && r.one("error", function () {
				r.off("load error"), n(o)
			}), o.src = t
		}
	}, t.prototype.init = function () {
		var t = !1,
			i = !1,
			n = this;
		e.each(this.entries, function (o, r) {
			var s = e(r),
				a = n.imgFromEntry(s);
			if (s.addClass("jg-entry"), s.data("jg.loaded") !== !0 && "skipped" !== s.data("jg.loaded"))
				if (null !== n.settings.rel && s.attr("rel", n.settings.rel), null !== n.settings.target && s.attr("target", n.settings.target), null !== a) {
					var l = n.extractImgSrcFromImage(a);
					if (a.attr("src", l), n.settings.waitThumbnailsLoad === !1) {
						var u = parseFloat(a.attr("width")),
							d = parseFloat(a.attr("height"));
						if (!isNaN(u) && !isNaN(d)) return s.data("jg.width", u), s.data("jg.height", d), s.data("jg.loaded", "skipped"), i = !0, n.startImgAnalyzer(!1), !0
					}
					s.data("jg.loaded", !1), t = !0, n.isSpinnerActive() || n.startLoadingSpinnerAnimation(), n.onImageEvent(l, function (e) {
						s.data("jg.width", e.width), s.data("jg.height", e.height), s.data("jg.loaded", !0), n.startImgAnalyzer(!1)
					}, function () {
						s.data("jg.loaded", "error"), n.startImgAnalyzer(!1)
					})
				} else s.data("jg.loaded", !0), s.data("jg.width", s.width() | parseFloat(s.css("width")) | 1), s.data("jg.height", s.height() | parseFloat(s.css("height")) | 1)
		}), t || i || this.startImgAnalyzer(!1), this.checkWidth()
	}, t.prototype.checkOrConvertNumber = function (t, i) {
		if ("string" === e.type(t[i]) && (t[i] = parseFloat(t[i])), "number" !== e.type(t[i])) throw i + " must be a number";
		if (isNaN(t[i])) throw "invalid number for " + i
	}, t.prototype.checkSizeRangesSuffixes = function () {
		if ("object" !== e.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
		var t = [];
		for (var i in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(i);
		for (var n = {
				0: ""
			}, o = 0; o < t.length; o++)
			if ("string" === e.type(t[o])) try {
				var r = parseInt(t[o].replace(/^[a-z]+/, ""), 10);
				n[r] = this.settings.sizeRangeSuffixes[t[o]]
			} catch (s) {
				throw "sizeRangeSuffixes keys must contains correct numbers (" + s + ")"
			} else n[t[o]] = this.settings.sizeRangeSuffixes[t[o]];
		this.settings.sizeRangeSuffixes = n
	}, t.prototype.retrieveMaxRowHeight = function () {
		var t = {};
		if ("string" === e.type(this.settings.maxRowHeight)) this.settings.maxRowHeight.match(/^[0-9]+%$/) ? (t.value = parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100, t.isPercentage = !1) : (t.value = parseFloat(this.settings.maxRowHeight), t.isPercentage = !0);
		else {
			if ("number" !== e.type(this.settings.maxRowHeight)) throw "maxRowHeight must be a number or a percentage";
			t.value = this.settings.maxRowHeight, t.isPercentage = !1
		}
		if (isNaN(t.value)) throw "invalid number for maxRowHeight";
		return t.isPercentage ? t.value < 100 && (t.value = 100) : t.value > 0 && t.value < this.settings.rowHeight && (t.value = this.settings.rowHeight), t
	}, t.prototype.checkSettings = function () {
		if (this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border"), "justify" !== this.settings.lastRow && "nojustify" !== this.settings.lastRow && "left" !== this.settings.lastRow && "center" !== this.settings.lastRow && "right" !== this.settings.lastRow && "hide" !== this.settings.lastRow) throw 'lastRow must be "justify", "nojustify", "left", "center", "right" or "hide"';
		if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || this.settings.justifyThreshold > 1) throw "justifyThreshold must be in the interval [0,1]";
		if ("boolean" !== e.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean";
		if ("boolean" !== e.type(this.settings.captions)) throw "captions must be a boolean";
		if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || this.settings.captionSettings.visibleOpacity > 1) throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
		if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || this.settings.captionSettings.nonVisibleOpacity > 1) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
		if ("boolean" !== e.type(this.settings.fixedHeight)) throw "fixedHeight must be a boolean";
		if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== e.type(this.settings.randomize)) throw "randomize must be a boolean";
		if ("string" !== e.type(this.settings.selector)) throw "selector must be a string";
		if (this.settings.sort !== !1 && !e.isFunction(this.settings.sort)) throw "sort must be false or a comparison function";
		if (this.settings.filter !== !1 && !e.isFunction(this.settings.filter) && "string" !== e.type(this.settings.filter)) throw "filter must be false, a string or a filter function"
	}, t.prototype.retrieveSuffixRanges = function () {
		var e = [];
		for (var t in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(t) && e.push(parseInt(t, 10));
		return e.sort(function (e, t) {
			return e > t ? 1 : t > e ? -1 : 0
		}), e
	}, t.prototype.updateSettings = function (t) {
		this.settings = e.extend({}, this.settings, t), this.checkSettings(), this.border = this.settings.border >= 0 ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges()
	}, e.fn.justifiedGallery = function (i) {
		return this.each(function (n, o) {
			var r = e(o);
			r.addClass("justified-gallery");
			var s = r.data("jg.controller");
			if ("undefined" == typeof s) {
				if ("undefined" != typeof i && null !== i && "object" !== e.type(i)) {
					if ("destroy" === i) return;
					throw "The argument must be an object"
				}
				s = new t(r, e.extend({}, e.fn.justifiedGallery.defaults, i)), r.data("jg.controller", s)
			} else if ("norewind" === i);
			else {
				if ("destroy" === i) return void s.destroy();
				s.updateSettings(i), s.rewind()
			}
			s.updateEntries("norewind" === i) && s.init()
		})
	}, e.fn.justifiedGallery.defaults = {
		sizeRangeSuffixes: {},
		thumbnailPath: void 0,
		rowHeight: 120,
		maxRowHeight: -1,
		margins: 1,
		border: -1,
		lastRow: "nojustify",
		justifyThreshold: .75,
		fixedHeight: !1,
		waitThumbnailsLoad: !0,
		captions: !0,
		cssAnimation: !1,
		imagesAnimationDuration: 500,
		captionSettings: {
			animationDuration: 500,
			visibleOpacity: .7,
			nonVisibleOpacity: 0
		},
		rel: null,
		target: null,
		extension: /\.[^.\\/]+$/,
		refreshTime: 200,
		refreshSensitivity: 0,
		randomize: !1,
		sort: !1,
		filter: !1,
		selector: "> a, > div:not(.spinner)"
	}
}(jQuery), ! function (e, t, i, n) {
	"use strict";

	function o(t, n) {
		if (this.el = t, this.$el = e(t), this.s = e.extend({}, r, n), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
		return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in i.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = e(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(e(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
	}
	var r = {
		mode: "lg-slide",
		cssEasing: "ease",
		easing: "linear",
		speed: 600,
		height: "100%",
		width: "100%",
		addClass: "",
		startClass: "lg-start-zoom",
		backdropDuration: 150,
		hideBarsDelay: 6e3,
		useLeft: !1,
		closable: !0,
		loop: !0,
		escKey: !0,
		keyPress: !0,
		controls: !0,
		slideEndAnimatoin: !0,
		hideControlOnEnd: !1,
		mousewheel: !0,
		getCaptionFromTitleOrAlt: !0,
		appendSubHtmlTo: ".lg-sub-html",
		preload: 1,
		showAfterLoad: !0,
		selector: "",
		selectWithin: "",
		nextHtml: "",
		prevHtml: "",
		index: !1,
		iframeMaxWidth: "100%",
		download: !0,
		counter: !0,
		appendCounterTo: ".lg-toolbar",
		swipeThreshold: 50,
		enableSwipe: !0,
		enableDrag: !0,
		dynamic: !1,
		dynamicEl: [],
		galleryId: 1
	};
	o.prototype.init = function () {
		var i = this;
		i.s.preload > i.$items.length && (i.s.preload = i.$items.length);
		var n = t.location.hash;
		n.indexOf("lg=" + this.s.galleryId) > 0 && (i.index = parseInt(n.split("&slide=")[1], 10), e("body").addClass("lg-from-hash"), e("body").hasClass("lg-on") || setTimeout(function () {
			i.build(i.index), e("body").addClass("lg-on")
		})), i.s.dynamic ? (i.$el.trigger("onBeforeOpen.lg"), i.index = i.s.index || 0, e("body").hasClass("lg-on") || setTimeout(function () {
			i.build(i.index), e("body").addClass("lg-on")
		})) : i.$items.on("click.lgcustom", function (t) {
			try {
				t.preventDefault(), t.preventDefault()
			} catch (n) {
				t.returnValue = !1
			}
			i.$el.trigger("onBeforeOpen.lg"), i.index = i.s.index || i.$items.index(this), e("body").hasClass("lg-on") || (i.build(i.index), e("body").addClass("lg-on"))
		})
	}, o.prototype.build = function (t) {
		var i = this;
		i.structure(), e.each(e.fn.lightGallery.modules, function (t) {
			i.modules[t] = new e.fn.lightGallery.modules[t](i.el)
		}), i.slide(t, !1, !1), i.s.keyPress && i.keyPress(), i.$items.length > 1 && (i.arrow(), setTimeout(function () {
			i.enableDrag(), i.enableSwipe()
		}, 50), i.s.mousewheel && i.mousewheel()), i.counter(), i.closeGallery(), i.$el.trigger("onAfterOpen.lg"), i.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
			i.$outer.removeClass("lg-hide-items"), clearTimeout(i.hideBartimeout), i.hideBartimeout = setTimeout(function () {
				i.$outer.addClass("lg-hide-items")
			}, i.s.hideBarsDelay)
		})
	}, o.prototype.structure = function () {
		var i, n = "",
			o = "",
			r = 0,
			s = "",
			a = this;
		for (e("body").append('<div class="lg-backdrop"></div>'), e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), r = 0; r < this.$items.length; r++) n += '<div class="lg-item"></div>';
		if (this.s.controls && this.$items.length > 1 && (o = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (s = '<div class="lg-sub-html"></div>'), i = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + n + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + o + s + "</div></div>", e("body").append(i), this.$outer = e(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), a.setTop(), e(t).on("resize.lg orientationchange.lg", function () {
				setTimeout(function () {
					a.setTop()
				}, 100)
			}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
			var l = this.$outer.find(".lg-inner");
			l.css("transition-timing-function", this.s.cssEasing), l.css("transition-duration", this.s.speed + "ms")
		}
		e(".lg-backdrop").addClass("in"), setTimeout(function () {
			a.$outer.addClass("lg-visible")
		}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = e(t).scrollTop()
	}, o.prototype.setTop = function () {
		if ("100%" !== this.s.height) {
			var i = e(t).height(),
				n = (i - parseInt(this.s.height, 10)) / 2,
				o = this.$outer.find(".lg");
			i >= parseInt(this.s.height, 10) ? o.css("top", n + "px") : o.css("top", "0px")
		}
	}, o.prototype.doCss = function () {
		var e = function () {
			var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
				t = i.documentElement,
				n = 0;
			for (n = 0; n < e.length; n++)
				if (e[n] in t.style) return !0
		};
		return !!e()
	}, o.prototype.isVideo = function (e, t) {
		var i;
		if (i = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e && i) return {
			html5: !0
		};
		var n = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
			o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
			r = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
			s = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
		return n ? {
			youtube: n
		} : o ? {
			vimeo: o
		} : r ? {
			dailymotion: r
		} : s ? {
			vk: s
		} : void 0
	}, o.prototype.counter = function () {
		this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
	}, o.prototype.addHtml = function (t) {
		var i, n = null;
		if (this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? i = this.s.dynamicEl[t].subHtmlUrl : n = this.s.dynamicEl[t].subHtml : this.$items.eq(t).attr("data-sub-html-url") ? i = this.$items.eq(t).attr("data-sub-html-url") : (n = this.$items.eq(t).attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !n && (n = this.$items.eq(t).attr("title") || this.$items.eq(t).find("img").first().attr("alt"))), !i)
			if ("undefined" != typeof n && null !== n) {
				var o = n.substring(0, 1);
				"." !== o && "#" !== o || (n = e(n).html())
			} else n = "";
		".lg-sub-html" === this.s.appendSubHtmlTo ? i ? this.$outer.find(this.s.appendSubHtmlTo).load(i) : this.$outer.find(this.s.appendSubHtmlTo).html(n) : i ? this.$slide.eq(t).load(i) : this.$slide.eq(t).append(n), "undefined" != typeof n && null !== n && ("" === n ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
	}, o.prototype.preload = function (e) {
		var t = 1,
			i = 1;
		for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
		for (i = 1; i <= this.s.preload && !(0 > e - i); i++) this.loadContent(e - i, !1, 0)
	}, o.prototype.loadContent = function (i, n, o) {
		var r, s, a, l, u, d, c = this,
			p = !1,
			h = function (i) {
				for (var n = [], o = [], r = 0; r < i.length; r++) {
					var a = i[r].split(" ");
					"" === a[0] && a.splice(0, 1), o.push(a[0]), n.push(a[1])
				}
				for (var l = e(t).width(), u = 0; u < n.length; u++)
					if (parseInt(n[u], 10) > l) {
						s = o[u];
						break
					}
			};
		if (c.s.dynamic) {
			if (c.s.dynamicEl[i].poster && (p = !0, a = c.s.dynamicEl[i].poster), d = c.s.dynamicEl[i].html, s = c.s.dynamicEl[i].src, c.s.dynamicEl[i].responsive) {
				var f = c.s.dynamicEl[i].responsive.split(",");
				h(f)
			}
			l = c.s.dynamicEl[i].srcset, u = c.s.dynamicEl[i].sizes
		} else {
			if (c.$items.eq(i).attr("data-poster") && (p = !0, a = c.$items.eq(i).attr("data-poster")), d = c.$items.eq(i).attr("data-html"), s = c.$items.eq(i).attr("href") || c.$items.eq(i).attr("data-src"), c.$items.eq(i).attr("data-responsive")) {
				var g = c.$items.eq(i).attr("data-responsive").split(",");
				h(g)
			}
			l = c.$items.eq(i).attr("data-srcset"), u = c.$items.eq(i).attr("data-sizes")
		}
		var m = !1;
		c.s.dynamic ? c.s.dynamicEl[i].iframe && (m = !0) : "true" === c.$items.eq(i).attr("data-iframe") && (m = !0);
		var v = c.isVideo(s, i);
		if (!c.$slide.eq(i).hasClass("lg-loaded")) {
			if (m) c.$slide.eq(i).prepend('<div class="lg-video-cont" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + s + '"  allowfullscreen="true"></iframe></div></div>');
			else if (p) {
				var y = "";
				y = v && v.youtube ? "lg-has-youtube" : v && v.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.$slide.eq(i).prepend('<div class="lg-video-cont ' + y + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>')
			} else v ? (c.$slide.eq(i).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), c.$el.trigger("hasVideo.lg", [i, s, d])) : c.$slide.eq(i).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + s + '" /></div>');
			if (c.$el.trigger("onAferAppendSlide.lg", [i]), r = c.$slide.eq(i).find(".lg-object"), u && r.attr("sizes", u), l) {
				r.attr("srcset", l);
				try {
					picturefill({
						elements: [r[0]]
					})
				} catch (b) {
					console.error("Make sure you have included Picturefill version 2")
				}
			}
			".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(i), c.$slide.eq(i).addClass("lg-loaded")
		}
		c.$slide.eq(i).find(".lg-object").on("load.lg error.lg", function () {
			var t = 0;
			o && !e("body").hasClass("lg-from-hash") && (t = o), setTimeout(function () {
				c.$slide.eq(i).addClass("lg-complete"), c.$el.trigger("onSlideItemLoad.lg", [i, o || 0])
			}, t)
		}), v && v.html5 && !p && c.$slide.eq(i).addClass("lg-complete"), n === !0 && (c.$slide.eq(i).hasClass("lg-complete") ? c.preload(i) : c.$slide.eq(i).find(".lg-object").on("load.lg error.lg", function () {
			c.preload(i)
		}))
	}, o.prototype.slide = function (t, i, n) {
		var o = this.$outer.find(".lg-current").index(),
			r = this;
		if (!r.lGalleryOn || o !== t) {
			var s = this.$slide.length,
				a = r.lGalleryOn ? this.s.speed : 0,
				l = !1,
				u = !1;
			if (!r.lgBusy) {
				if (this.s.download) {
					var d;
					d = r.s.dynamic ? r.s.dynamicEl[t].downloadUrl !== !1 && (r.s.dynamicEl[t].downloadUrl || r.s.dynamicEl[t].src) : "false" !== r.$items.eq(t).attr("data-download-url") && (r.$items.eq(t).attr("data-download-url") || r.$items.eq(t).attr("href") || r.$items.eq(t).attr("data-src")), d ? (e("#lg-download").attr("href", d), r.$outer.removeClass("lg-hide-download")) : r.$outer.addClass("lg-hide-download")
				}
				if (this.$el.trigger("onBeforeSlide.lg", [o, t, i, n]), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
						r.addHtml(t)
					}, a), this.arrowDisable(t), i) {
					var c = t - 1,
						p = t + 1;
					0 === t && o === s - 1 ? (p = 0, c = s - 1) : t === s - 1 && 0 === o && (p = 0, c = s - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), r.$slide.eq(c).addClass("lg-prev-slide"), r.$slide.eq(p).addClass("lg-next-slide"), r.$slide.eq(t).addClass("lg-current")
				} else r.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), o > t ? (u = !0, 0 !== t || o !== s - 1 || n || (u = !1, l = !0)) : t > o && (l = !0, t !== s - 1 || 0 !== o || n || (u = !0, l = !1)), u ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : l && (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout(function () {
					r.$slide.removeClass("lg-current"), r.$slide.eq(t).addClass("lg-current"), r.$outer.removeClass("lg-no-trans")
				}, 50);
				r.lGalleryOn ? (setTimeout(function () {
					r.loadContent(t, !0, 0)
				}, this.s.speed + 50), setTimeout(function () {
					r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [o, t, i, n])
				}, this.s.speed)) : (r.loadContent(t, !0, r.s.backdropDuration), r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [o, t, i, n])), r.lGalleryOn = !0, this.s.counter && e("#lg-counter-current").text(t + 1)
			}
		}
	}, o.prototype.goToNextSlide = function (e) {
		var t = this;
		t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (t.$outer.addClass("lg-right-end"), setTimeout(function () {
			t.$outer.removeClass("lg-right-end")
		}, 400)))
	}, o.prototype.goToPrevSlide = function (e) {
		var t = this;
		t.lgBusy || (t.index > 0 ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (t.$outer.addClass("lg-left-end"), setTimeout(function () {
			t.$outer.removeClass("lg-left-end")
		}, 400)))
	}, o.prototype.keyPress = function () {
		var i = this;
		this.$items.length > 1 && e(t).on("keyup.lg", function (e) {
			i.$items.length > 1 && (37 === e.keyCode && (e.preventDefault(), i.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), i.goToNextSlide()))
		}), e(t).on("keydown.lg", function (e) {
			i.s.escKey === !0 && 27 === e.keyCode && (e.preventDefault(), i.$outer.hasClass("lg-thumb-open") ? i.$outer.removeClass("lg-thumb-open") : i.destroy())
		})
	}, o.prototype.arrow = function () {
		var e = this;
		this.$outer.find(".lg-prev").on("click.lg", function () {
			e.goToPrevSlide()
		}), this.$outer.find(".lg-next").on("click.lg", function () {
			e.goToNextSlide()
		})
	}, o.prototype.arrowDisable = function (e) {
		!this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), e > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
	}, o.prototype.setTranslate = function (e, t, i) {
		this.s.useLeft ? e.css("left", t) : e.css({
			transform: "translate3d(" + t + "px, " + i + "px, 0px)"
		})
	}, o.prototype.touchMove = function (t, i) {
		var n = i - t;
		Math.abs(n) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), n, 0), this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + n, 0), this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + n, 0))
	}, o.prototype.touchEnd = function (e) {
		var t = this;
		"lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
			t.$outer.removeClass("lg-dragging"), 0 > e && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
		}), setTimeout(function () {
			t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
		}, t.s.speed + 100)
	}, o.prototype.enableSwipe = function () {
		var e = this,
			t = 0,
			i = 0,
			n = !1;
		e.s.enableSwipe && e.isTouch && e.doCss() && (e.$slide.on("touchstart.lg", function (i) {
			e.$outer.hasClass("lg-zoomed") || e.lgBusy || (i.preventDefault(), e.manageSwipeClass(), t = i.originalEvent.targetTouches[0].pageX)
		}), e.$slide.on("touchmove.lg", function (o) {
			e.$outer.hasClass("lg-zoomed") || (o.preventDefault(), i = o.originalEvent.targetTouches[0].pageX, e.touchMove(t, i), n = !0)
		}), e.$slide.on("touchend.lg", function () {
			e.$outer.hasClass("lg-zoomed") || (n ? (n = !1, e.touchEnd(i - t)) : e.$el.trigger("onSlideClick.lg"))
		}))
	}, o.prototype.enableDrag = function () {
		var i = this,
			n = 0,
			o = 0,
			r = !1,
			s = !1;
		i.s.enableDrag && !i.isTouch && i.doCss() && (i.$slide.on("mousedown.lg", function (t) {
			i.$outer.hasClass("lg-zoomed") || (e(t.target).hasClass("lg-object") || e(t.target).hasClass("lg-video-play")) && (t.preventDefault(), i.lgBusy || (i.manageSwipeClass(), n = t.pageX, r = !0, i.$outer.scrollLeft += 1, i.$outer.scrollLeft -= 1, i.$outer.removeClass("lg-grab").addClass("lg-grabbing"), i.$el.trigger("onDragstart.lg")))
		}), e(t).on("mousemove.lg", function (e) {
			r && (s = !0, o = e.pageX, i.touchMove(n, o), i.$el.trigger("onDragmove.lg"))
		}), e(t).on("mouseup.lg", function (t) {
			s ? (s = !1, i.touchEnd(o - n), i.$el.trigger("onDragend.lg")) : (e(t.target).hasClass("lg-object") || e(t.target).hasClass("lg-video-play")) && i.$el.trigger("onSlideClick.lg"), r && (r = !1, i.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
		}))
	}, o.prototype.manageSwipeClass = function () {
		var e = this.index + 1,
			t = this.index - 1,
			i = this.$slide.length;
		this.s.loop && (0 === this.index ? t = i - 1 : this.index === i - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
	}, o.prototype.mousewheel = function () {
		var e = this;
		e.$outer.on("mousewheel.lg", function (t) {
			t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
		})
	}, o.prototype.closeGallery = function () {
		var t = this,
			i = !1;
		this.$outer.find(".lg-close").on("click.lg", function () {
			t.destroy()
		}), t.s.closable && (t.$outer.on("mousedown.lg", function (t) {
			i = !!(e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap"))
		}), t.$outer.on("mouseup.lg", function (n) {
			(e(n.target).is(".lg-outer") || e(n.target).is(".lg-item ") || e(n.target).is(".lg-img-wrap") && i) && (t.$outer.hasClass("lg-dragging") || t.destroy())
		}))
	}, o.prototype.destroy = function (i) {
		var n = this;
		i || n.$el.trigger("onBeforeClose.lg"), e(t).scrollTop(n.prevScrollTop), i && (n.s.dynamic || this.$items.off("click.lg click.lgcustom"), e.removeData(n.el, "lightGallery")), this.$el.off(".lg.tm"), e.each(e.fn.lightGallery.modules, function (e) {
			n.modules[e] && n.modules[e].destroy()
		}), this.lGalleryOn = !1, clearTimeout(n.hideBartimeout), this.hideBartimeout = !1, e(t).off(".lg"), e("body").removeClass("lg-on lg-from-hash"), n.$outer && n.$outer.removeClass("lg-visible"), e(".lg-backdrop").removeClass("in"), setTimeout(function () {
			n.$outer && n.$outer.remove(), e(".lg-backdrop").remove(), i || n.$el.trigger("onCloseAfter.lg")
		}, n.s.backdropDuration + 50)
	}, e.fn.lightGallery = function (t) {
		return this.each(function () {
			if (e.data(this, "lightGallery")) try {
				e(this).data("lightGallery").init()
			} catch (i) {
				console.error("lightGallery has not initiated properly")
			} else e.data(this, "lightGallery", new o(this, t))
		})
	}, e.fn.lightGallery.modules = {}
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			autoplay: !1,
			pause: 5e3,
			progressBar: !0,
			fourceAutoplay: !1,
			autoplayControls: !0,
			appendAutoplayControlsTo: ".lg-toolbar"
		},
		r = function (t) {
			return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.$items.length < 2 ? !1 : (this.core.s = e.extend({}, o, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
		};
	r.prototype.init = function () {
		var e = this;
		e.core.s.autoplayControls && e.controls(), e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), e.progress(), e.core.s.autoplay && e.startlAuto(), e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
			e.interval && (e.cancelAuto(), e.canceledOnTouch = !0)
		}), e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function () {
			!e.interval && e.canceledOnTouch && (e.startlAuto(), e.canceledOnTouch = !1)
		})
	}, r.prototype.progress = function () {
		var e, t, i = this;
		i.$el.on("onBeforeSlide.lg.tm", function () {
			i.core.s.progressBar && i.fromAuto && (e = i.core.$outer.find(".lg-progress-bar"), t = i.core.$outer.find(".lg-progress"), i.interval && (t.removeAttr("style"), e.removeClass("lg-start"), setTimeout(function () {
				t.css("transition", "width " + (i.core.s.speed + i.core.s.pause) + "ms ease 0s"), e.addClass("lg-start")
			}, 20))), i.fromAuto || i.core.s.fourceAutoplay || i.cancelAuto(), i.fromAuto = !1
		})
	}, r.prototype.controls = function () {
		var t = this,
			i = '<span class="lg-autoplay-button lg-icon"></span>';
		e(this.core.s.appendAutoplayControlsTo).append(i), t.core.$outer.find(".lg-autoplay-button").on("click.lg", function () {
			e(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(), t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(), t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
		})
	}, r.prototype.startlAuto = function () {
		var e = this;
		e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"), e.core.$outer.addClass("lg-show-autoplay"), e.core.$outer.find(".lg-progress-bar").addClass("lg-start"), e.interval = setInterval(function () {
			e.core.index + 1 < e.core.$items.length ? e.core.index = e.core.index : e.core.index = -1, e.core.index++, e.fromAuto = !0, e.core.slide(e.core.index, !1, !1)
		}, e.core.s.speed + e.core.s.pause)
	}, r.prototype.cancelAuto = function () {
		clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
	}, r.prototype.destroy = function () {
		this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
	}, e.fn.lightGallery.modules.autoplay = r
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			fullScreen: !0
		},
		r = function (t) {
			return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, o, this.core.s), this.init(), this
		};
	r.prototype.init = function () {
		var e = "";
		if (this.core.s.fullScreen) {
			if (!(i.fullscreenEnabled || i.webkitFullscreenEnabled || i.mozFullScreenEnabled || i.msFullscreenEnabled)) return;
			e = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(e), this.fullScreen()
		}
	}, r.prototype.requestFullscreen = function () {
		var e = i.documentElement;
		e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
	}, r.prototype.exitFullscreen = function () {
		i.exitFullscreen ? i.exitFullscreen() : i.msExitFullscreen ? i.msExitFullscreen() : i.mozCancelFullScreen ? i.mozCancelFullScreen() : i.webkitExitFullscreen && i.webkitExitFullscreen()
	}, r.prototype.fullScreen = function () {
		var t = this;
		e(i).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function () {
			t.core.$outer.toggleClass("lg-fullscreen-on")
		}), this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
			i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement || i.msFullscreenElement ? t.exitFullscreen() : t.requestFullscreen()
		})
	}, r.prototype.destroy = function () {
		this.exitFullscreen(), e(i).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
	}, e.fn.lightGallery.modules.fullscreen = r
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			pager: !1
		},
		r = function (t) {
			return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, o, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
		};
	r.prototype.init = function () {
		var t, i, n, o = this,
			r = "";
		if (o.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), o.core.s.dynamic)
			for (var s = 0; s < o.core.s.dynamicEl.length; s++) r += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + o.core.s.dynamicEl[s].thumb + '" /></div></span>';
		else o.core.$items.each(function () {
			r += o.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).attr(o.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).find("img").attr("src") + '" /></div></span>'
		});
		i = o.core.$outer.find(".lg-pager-outer"), i.html(r), t = o.core.$outer.find(".lg-pager-cont"), t.on("click.lg touchend.lg", function () {
			var t = e(this);
			o.core.index = t.index(), o.core.slide(o.core.index, !1, !1)
		}), i.on("mouseover.lg", function () {
			clearTimeout(n), i.addClass("lg-pager-hover")
		}), i.on("mouseout.lg", function () {
			n = setTimeout(function () {
				i.removeClass("lg-pager-hover")
			})
		}), o.core.$el.on("onBeforeSlide.lg.tm", function (e, i, n) {
			t.removeClass("lg-pager-active"), t.eq(n).addClass("lg-pager-active")
		})
	}, r.prototype.destroy = function () {}, e.fn.lightGallery.modules.pager = r
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			thumbnail: !0,
			animateThumb: !0,
			currentPagerPosition: "middle",
			thumbWidth: 100,
			thumbContHeight: 100,
			thumbMargin: 5,
			exThumbImage: !1,
			showThumbByDefault: !0,
			toogleThumb: !0,
			pullCaptionUp: !0,
			enableThumbDrag: !0,
			enableThumbSwipe: !0,
			swipeThreshold: 50,
			loadYoutubeThumbnail: !0,
			youtubeThumbSize: 1,
			loadVimeoThumbnail: !0,
			vimeoThumbSize: "thumbnail_small",
			loadDailymotionThumbnail: !0
		},
		r = function (t) {
			return this.core = e(t).data("lightGallery"), this.core.s = e.extend({}, o, this.core.s), this.$el = e(t), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.left = 0, this.init(), this
		};
	r.prototype.init = function () {
		var e = this;
		this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
			e.core.$outer.addClass("lg-thumb-open")
		}, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb ? (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss() && this.enableThumbDrag(),
			this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss() && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
	}, r.prototype.build = function () {
		function i(e, t, i) {
			var n, a = o.core.isVideo(e, i) || {},
				l = "";
			a.youtube || a.vimeo || a.dailymotion ? a.youtube ? n = o.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + a.youtube[1] + "/" + o.core.s.youtubeThumbSize + ".jpg" : t : a.vimeo ? o.core.s.loadVimeoThumbnail ? (n = "//i.vimeocdn.com/video/error_" + s + ".jpg", l = a.vimeo[1]) : n = t : a.dailymotion && (n = o.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + a.dailymotion[1] : t) : n = t, r += '<div data-vimeo-id="' + l + '" class="lg-thumb-item" style="width:' + o.core.s.thumbWidth + "px; margin-right: " + o.core.s.thumbMargin + 'px"><img src="' + n + '" /></div>', l = ""
		}
		var n, o = this,
			r = "",
			s = "",
			a = '<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';
		switch (this.core.s.vimeoThumbSize) {
			case "thumbnail_large":
				s = "640";
				break;
			case "thumbnail_medium":
				s = "200x150";
				break;
			case "thumbnail_small":
				s = "100x75"
		}
		if (o.core.$outer.addClass("lg-has-thumb"), o.core.$outer.find(".lg").append(a), o.$thumbOuter = o.core.$outer.find(".lg-thumb-outer"), o.thumbOuterWidth = o.$thumbOuter.width(), o.core.s.animateThumb && o.core.$outer.find(".lg-thumb").css({
				width: o.thumbTotalWidth + "px",
				position: "relative"
			}), this.core.s.animateThumb && o.$thumbOuter.css("height", o.core.s.thumbContHeight + "px"), o.core.s.dynamic)
			for (var l = 0; l < o.core.s.dynamicEl.length; l++) i(o.core.s.dynamicEl[l].src, o.core.s.dynamicEl[l].thumb, l);
		else o.core.$items.each(function (t) {
			o.core.s.exThumbImage ? i(e(this).attr("href") || e(this).attr("data-src"), e(this).attr(o.core.s.exThumbImage), t) : i(e(this).attr("href") || e(this).attr("data-src"), e(this).find("img").attr("src"), t)
		});
		o.core.$outer.find(".lg-thumb").html(r), n = o.core.$outer.find(".lg-thumb-item"), n.each(function () {
			var t = e(this),
				i = t.attr("data-vimeo-id");
			i && e.getJSON("//www.vimeo.com/api/v2/video/" + i + ".json?callback=?", {
				format: "json"
			}, function (e) {
				t.find("img").attr("src", e[0][o.core.s.vimeoThumbSize])
			})
		}), n.eq(o.core.index).addClass("active"), o.core.$el.on("onBeforeSlide.lg.tm", function () {
			n.removeClass("active"), n.eq(o.core.index).addClass("active")
		}), n.on("click.lg touchend.lg", function () {
			var t = e(this);
			setTimeout(function () {
				(o.thumbClickable && !o.core.lgBusy || !o.core.doCss()) && (o.core.index = t.index(), o.core.slide(o.core.index, !1, !0))
			}, 50)
		}), o.core.$el.on("onBeforeSlide.lg.tm", function () {
			o.animateThumb(o.core.index)
		}), e(t).on("resize.lg.thumb orientationchange.lg.thumb", function () {
			setTimeout(function () {
				o.animateThumb(o.core.index), o.thumbOuterWidth = o.$thumbOuter.width()
			}, 200)
		})
	}, r.prototype.setTranslate = function (e) {
		this.core.$outer.find(".lg-thumb").css({
			transform: "translate3d(-" + e + "px, 0px, 0px)"
		})
	}, r.prototype.animateThumb = function (e) {
		var t = this.core.$outer.find(".lg-thumb");
		if (this.core.s.animateThumb) {
			var i;
			switch (this.core.s.currentPagerPosition) {
				case "left":
					i = 0;
					break;
				case "middle":
					i = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
					break;
				case "right":
					i = this.thumbOuterWidth - this.core.s.thumbWidth
			}
			this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - i, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (t.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || t.animate({
				left: -this.left + "px"
			}, this.core.s.speed)) : this.core.doCss() || t.css("left", -this.left + "px"), this.setTranslate(this.left)
		}
	}, r.prototype.enableThumbDrag = function () {
		var i = this,
			n = 0,
			o = 0,
			r = !1,
			s = !1,
			a = 0;
		i.$thumbOuter.addClass("lg-grab"), i.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (e) {
			i.thumbTotalWidth > i.thumbOuterWidth && (e.preventDefault(), n = e.pageX, r = !0, i.core.$outer.scrollLeft += 1, i.core.$outer.scrollLeft -= 1, i.thumbClickable = !1, i.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
		}), e(t).on("mousemove.lg.thumb", function (e) {
			r && (a = i.left, s = !0, o = e.pageX, i.$thumbOuter.addClass("lg-dragging"), a -= o - n, a > i.thumbTotalWidth - i.thumbOuterWidth && (a = i.thumbTotalWidth - i.thumbOuterWidth), 0 > a && (a = 0), i.setTranslate(a))
		}), e(t).on("mouseup.lg.thumb", function () {
			s ? (s = !1, i.$thumbOuter.removeClass("lg-dragging"), i.left = a, Math.abs(o - n) < i.core.s.swipeThreshold && (i.thumbClickable = !0)) : i.thumbClickable = !0, r && (r = !1, i.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
		})
	}, r.prototype.enableThumbSwipe = function () {
		var e = this,
			t = 0,
			i = 0,
			n = !1,
			o = 0;
		e.core.$outer.find(".lg-thumb").on("touchstart.lg", function (i) {
			e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(), t = i.originalEvent.targetTouches[0].pageX, e.thumbClickable = !1)
		}), e.core.$outer.find(".lg-thumb").on("touchmove.lg", function (r) {
			e.thumbTotalWidth > e.thumbOuterWidth && (r.preventDefault(), i = r.originalEvent.targetTouches[0].pageX, n = !0, e.$thumbOuter.addClass("lg-dragging"), o = e.left, o -= i - t, o > e.thumbTotalWidth - e.thumbOuterWidth && (o = e.thumbTotalWidth - e.thumbOuterWidth), 0 > o && (o = 0), e.setTranslate(o))
		}), e.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
			e.thumbTotalWidth > e.thumbOuterWidth && n ? (n = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(i - t) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.left = o) : e.thumbClickable = !0
		})
	}, r.prototype.toogle = function () {
		var e = this;
		e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"), e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
			e.core.$outer.toggleClass("lg-thumb-open")
		}))
	}, r.prototype.thumbkeyPress = function () {
		var i = this;
		e(t).on("keydown.lg.thumb", function (e) {
			38 === e.keyCode ? (e.preventDefault(), i.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(), i.core.$outer.removeClass("lg-thumb-open"))
		})
	}, r.prototype.destroy = function () {
		this.core.s.thumbnail && this.core.$items.length > 1 && (e(t).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
	}, e.fn.lightGallery.modules.Thumbnail = r
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			videoMaxWidth: "855px",
			youtubePlayerParams: !1,
			vimeoPlayerParams: !1,
			dailymotionPlayerParams: !1,
			vkPlayerParams: !1,
			videojs: !1,
			videojsOptions: {}
		},
		r = function (t) {
			return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, o, this.core.s), this.videoLoaded = !1, this.init(), this
		};
	r.prototype.init = function () {
		var t = this;
		t.core.$el.on("hasVideo.lg.tm", function (e, i, n, o) {
			if (t.core.$slide.eq(i).find(".lg-video").append(t.loadVideo(n, "lg-object", !0, i, o)), o)
				if (t.core.s.videojs) try {
					videojs(t.core.$slide.eq(i).find(".lg-html5").get(0), t.core.s.videojsOptions, function () {
						t.videoLoaded || this.play()
					})
				} catch (r) {
					console.error("Make sure you have included videojs")
				} else t.core.$slide.eq(i).find(".lg-html5").get(0).play()
		}), t.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
			t.core.$slide.eq(i).find(".lg-video-cont").css("max-width", t.core.s.videoMaxWidth), t.videoLoaded = !0
		});
		var i = function (e) {
			if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
				if (e.hasClass("lg-has-video")) {
					var i = e.find(".lg-youtube").get(0),
						n = e.find(".lg-vimeo").get(0),
						o = e.find(".lg-dailymotion").get(0),
						r = e.find(".lg-html5").get(0);
					if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
					else if (n) try {
							$f(n).api("play")
						} catch (s) {
							console.error("Make sure you have included froogaloop2 js")
						} else if (o) o.contentWindow.postMessage("play", "*");
						else if (r)
						if (t.core.s.videojs) try {
							videojs(r).play()
						} catch (s) {
							console.error("Make sure you have included videojs")
						} else r.play();
					e.addClass("lg-video-playing")
				} else {
					e.addClass("lg-video-playing lg-has-video");
					var a, l, u = function (i, n) {
						if (e.find(".lg-video").append(t.loadVideo(i, "", !1, t.core.index, n)), n)
							if (t.core.s.videojs) try {
								videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0), t.core.s.videojsOptions, function () {
									this.play()
								})
							} catch (o) {
								console.error("Make sure you have included videojs")
							} else t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()
					};
					t.core.s.dynamic ? (a = t.core.s.dynamicEl[t.core.index].src, l = t.core.s.dynamicEl[t.core.index].html, u(a, l)) : (a = t.core.$items.eq(t.core.index).attr("href") || t.core.$items.eq(t.core.index).attr("data-src"), l = t.core.$items.eq(t.core.index).attr("data-html"), u(a, l));
					var d = e.find(".lg-object");
					e.find(".lg-video").append(d), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function () {
						e.addClass("lg-complete")
					}))
				}
		};
		t.core.doCss() && t.core.$items.length > 1 && (t.core.s.enableSwipe && t.core.isTouch || t.core.s.enableDrag && !t.core.isTouch) ? t.core.$el.on("onSlideClick.lg.tm", function () {
			var e = t.core.$slide.eq(t.core.index);
			i(e)
		}) : t.core.$slide.on("click.lg", function () {
			i(e(this))
		}), t.core.$el.on("onBeforeSlide.lg.tm", function (i, n, o) {
			var r = t.core.$slide.eq(n),
				s = r.find(".lg-youtube").get(0),
				a = r.find(".lg-vimeo").get(0),
				l = r.find(".lg-dailymotion").get(0),
				u = r.find(".lg-vk").get(0),
				d = r.find(".lg-html5").get(0);
			if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
			else if (a) try {
					$f(a).api("pause")
				} catch (c) {
					console.error("Make sure you have included froogaloop2 js")
				} else if (l) l.contentWindow.postMessage("pause", "*");
				else if (d)
				if (t.core.s.videojs) try {
					videojs(d).pause()
				} catch (c) {
					console.error("Make sure you have included videojs")
				} else d.pause();
			u && e(u).attr("src", e(u).attr("src").replace("&autoplay", "&noplay"));
			var p;
			p = t.core.s.dynamic ? t.core.s.dynamicEl[o].src : t.core.$items.eq(o).attr("href") || t.core.$items.eq(o).attr("data-src");
			var h = t.core.isVideo(p, o) || {};
			(h.youtube || h.vimeo || h.dailymotion || h.vk) && t.core.$outer.addClass("lg-hide-download")
		}), t.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
			t.core.$slide.eq(i).removeClass("lg-video-playing")
		})
	}, r.prototype.loadVideo = function (t, i, n, o, r) {
		var s = "",
			a = 1,
			l = "",
			u = this.core.isVideo(t, o) || {};
		if (n && (a = this.videoLoaded ? 0 : 1), u.youtube) l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1", this.core.s.youtubePlayerParams && (l = l + "&" + e.param(this.core.s.youtubePlayerParams)), s = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + u.youtube[1] + l + '" frameborder="0" allowfullscreen></iframe>';
		else if (u.vimeo) l = "?autoplay=" + a + "&api=1", this.core.s.vimeoPlayerParams && (l = l + "&" + e.param(this.core.s.vimeoPlayerParams)), s = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="//player.vimeo.com/video/' + u.vimeo[1] + l + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		else if (u.dailymotion) l = "?wmode=opaque&autoplay=" + a + "&api=postMessage", this.core.s.dailymotionPlayerParams && (l = l + "&" + e.param(this.core.s.dailymotionPlayerParams)), s = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + u.dailymotion[1] + l + '" frameborder="0" allowfullscreen></iframe>';
		else if (u.html5) {
			var d = r.substring(0, 1);
			"." !== d && "#" !== d || (r = e(r).html()), s = r
		} else u.vk && (l = "&autoplay=" + a, this.core.s.vkPlayerParams && (l = l + "&" + e.param(this.core.s.vkPlayerParams)), s = '<iframe class="lg-video-object lg-vk ' + i + '" width="560" height="315" src="http://vk.com/video_ext.php?' + u.vk[1] + l + '" frameborder="0" allowfullscreen></iframe>');
		return s
	}, r.prototype.destroy = function () {
		this.videoLoaded = !1
	}, e.fn.lightGallery.modules.video = r
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			scale: 1,
			zoom: !0,
			actualSize: !0,
			enableZoomAfter: 300
		},
		r = function (i) {
			return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, o, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = e(t).width() / 2, this.pageY = e(t).height() / 2 + e(t).scrollTop()), this
		};
	r.prototype.init = function () {
		var i = this,
			n = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
		i.core.s.actualSize && (n += '<span id="lg-actual-size" class="lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(n), i.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (t, n, o) {
			var r = i.core.s.enableZoomAfter + o;
			e("body").hasClass("lg-from-hash") && o ? r = 0 : e("body").removeClass("lg-from-hash"), i.zoomabletimeout = setTimeout(function () {
				i.core.$slide.eq(n).addClass("lg-zoomable")
			}, r + 30)
		});
		var o = 1,
			r = function (n) {
				var o, r, s = i.core.$outer.find(".lg-current .lg-image"),
					a = (e(t).width() - s.width()) / 2,
					l = (e(t).height() - s.height()) / 2 + e(t).scrollTop();
				o = i.pageX - a, r = i.pageY - l;
				var u = (n - 1) * o,
					d = (n - 1) * r;
				s.css("transform", "scale3d(" + n + ", " + n + ", 1)").attr("data-scale", n), s.parent().css("transform", "translate3d(-" + u + "px, -" + d + "px, 0)").attr("data-x", u).attr("data-y", d)
			},
			s = function () {
				o > 1 ? i.core.$outer.addClass("lg-zoomed") : i.resetZoom(), 1 > o && (o = 1), r(o)
			},
			a = function (n, r, a, l) {
				var u, d = r.width();
				u = i.core.s.dynamic ? i.core.s.dynamicEl[a].width || r[0].naturalWidth || d : i.core.$items.eq(a).attr("data-width") || r[0].naturalWidth || d;
				var c;
				i.core.$outer.hasClass("lg-zoomed") ? o = 1 : u > d && (c = u / d, o = c || 2), l ? (i.pageX = e(t).width() / 2, i.pageY = e(t).height() / 2 + e(t).scrollTop()) : (i.pageX = n.pageX || n.originalEvent.targetTouches[0].pageX, i.pageY = n.pageY || n.originalEvent.targetTouches[0].pageY), s(), setTimeout(function () {
					i.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
				}, 10)
			},
			l = !1;
		i.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (e, t) {
			var n = i.core.$slide.eq(t).find(".lg-image");
			n.on("dblclick", function (e) {
				a(e, n, t)
			}), n.on("touchstart", function (e) {
				l ? (clearTimeout(l), l = null, a(e, n, t)) : l = setTimeout(function () {
					l = null
				}, 300), e.preventDefault()
			})
		}), e(t).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
			i.pageX = e(t).width() / 2, i.pageY = e(t).height() / 2 + e(t).scrollTop(), r(o)
		}), e("#lg-zoom-out").on("click.lg", function () {
			i.core.$outer.find(".lg-current .lg-image").length && (o -= i.core.s.scale, s())
		}), e("#lg-zoom-in").on("click.lg", function () {
			i.core.$outer.find(".lg-current .lg-image").length && (o += i.core.s.scale, s())
		}), e("#lg-actual-size").on("click.lg", function (e) {
			a(e, i.core.$slide.eq(i.core.index).find(".lg-image"), i.core.index, !0)
		}), i.core.$el.on("onBeforeSlide.lg.tm", function () {
			o = 1, i.resetZoom()
		}), i.core.isTouch || i.zoomDrag(), i.core.isTouch && i.zoomSwipe()
	}, r.prototype.resetZoom = function () {
		this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = e(t).width() / 2, this.pageY = e(t).height() / 2 + e(t).scrollTop()
	}, r.prototype.zoomSwipe = function () {
		var e = this,
			t = {},
			i = {},
			n = !1,
			o = !1,
			r = !1;
		e.core.$slide.on("touchstart.lg", function (i) {
			if (e.core.$outer.hasClass("lg-zoomed")) {
				var n = e.core.$slide.eq(e.core.index).find(".lg-object");
				r = n.outerHeight() * n.attr("data-scale") > e.core.$outer.find(".lg").height(), o = n.outerWidth() * n.attr("data-scale") > e.core.$outer.find(".lg").width(), (o || r) && (i.preventDefault(), t = {
					x: i.originalEvent.targetTouches[0].pageX,
					y: i.originalEvent.targetTouches[0].pageY
				})
			}
		}), e.core.$slide.on("touchmove.lg", function (s) {
			if (e.core.$outer.hasClass("lg-zoomed")) {
				var a, l, u = e.core.$slide.eq(e.core.index).find(".lg-img-wrap");
				s.preventDefault(), n = !0, i = {
					x: s.originalEvent.targetTouches[0].pageX,
					y: s.originalEvent.targetTouches[0].pageY
				}, e.core.$outer.addClass("lg-zoom-dragging"), l = r ? -Math.abs(u.attr("data-y")) + (i.y - t.y) : -Math.abs(u.attr("data-y")), a = o ? -Math.abs(u.attr("data-x")) + (i.x - t.x) : -Math.abs(u.attr("data-x")), (Math.abs(i.x - t.x) > 15 || Math.abs(i.y - t.y) > 15) && u.css("transform", "translate3d(" + a + "px, " + l + "px, 0)")
			}
		}), e.core.$slide.on("touchend.lg", function () {
			e.core.$outer.hasClass("lg-zoomed") && n && (n = !1, e.core.$outer.removeClass("lg-zoom-dragging"), e.touchendZoom(t, i, o, r))
		})
	}, r.prototype.zoomDrag = function () {
		var i = this,
			n = {},
			o = {},
			r = !1,
			s = !1,
			a = !1,
			l = !1;
		i.core.$slide.on("mousedown.lg.zoom", function (t) {
			var o = i.core.$slide.eq(i.core.index).find(".lg-object");
			l = o.outerHeight() * o.attr("data-scale") > i.core.$outer.find(".lg").height(), a = o.outerWidth() * o.attr("data-scale") > i.core.$outer.find(".lg").width(), i.core.$outer.hasClass("lg-zoomed") && e(t.target).hasClass("lg-object") && (a || l) && (t.preventDefault(), n = {
				x: t.pageX,
				y: t.pageY
			}, r = !0, i.core.$outer.scrollLeft += 1, i.core.$outer.scrollLeft -= 1, i.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
		}), e(t).on("mousemove.lg.zoom", function (e) {
			if (r) {
				var t, u, d = i.core.$slide.eq(i.core.index).find(".lg-img-wrap");
				s = !0, o = {
					x: e.pageX,
					y: e.pageY
				}, i.core.$outer.addClass("lg-zoom-dragging"), u = l ? -Math.abs(d.attr("data-y")) + (o.y - n.y) : -Math.abs(d.attr("data-y")), t = a ? -Math.abs(d.attr("data-x")) + (o.x - n.x) : -Math.abs(d.attr("data-x")), d.css("transform", "translate3d(" + t + "px, " + u + "px, 0)")
			}
		}), e(t).on("mouseup.lg.zoom", function (e) {
			r && (r = !1, i.core.$outer.removeClass("lg-zoom-dragging"), !s || n.x === o.x && n.y === o.y || (o = {
				x: e.pageX,
				y: e.pageY
			}, i.touchendZoom(n, o, a, l)), s = !1), i.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
		})
	}, r.prototype.touchendZoom = function (e, t, i, n) {
		var o = this,
			r = o.core.$slide.eq(o.core.index).find(".lg-img-wrap"),
			s = o.core.$slide.eq(o.core.index).find(".lg-object"),
			a = -Math.abs(r.attr("data-x")) + (t.x - e.x),
			l = -Math.abs(r.attr("data-y")) + (t.y - e.y),
			u = (o.core.$outer.find(".lg").height() - s.outerHeight()) / 2,
			d = Math.abs(s.outerHeight() * Math.abs(s.attr("data-scale")) - o.core.$outer.find(".lg").height() + u),
			c = (o.core.$outer.find(".lg").width() - s.outerWidth()) / 2,
			p = Math.abs(s.outerWidth() * Math.abs(s.attr("data-scale")) - o.core.$outer.find(".lg").width() + c);
		(Math.abs(t.x - e.x) > 15 || Math.abs(t.y - e.y) > 15) && (n && (-d >= l ? l = -d : l >= -u && (l = -u)), i && (-p >= a ? a = -p : a >= -c && (a = -c)), n ? r.attr("data-y", Math.abs(l)) : l = -Math.abs(r.attr("data-y")), i ? r.attr("data-x", Math.abs(a)) : a = -Math.abs(r.attr("data-x")), r.css("transform", "translate3d(" + a + "px, " + l + "px, 0)"))
	}, r.prototype.destroy = function () {
		var i = this;
		i.core.$el.off(".lg.zoom"), e(t).off(".lg.zoom"), i.core.$slide.off(".lg.zoom"), i.core.$el.off(".lg.tm.zoom"), i.resetZoom(), clearTimeout(i.zoomabletimeout), i.zoomabletimeout = !1
	}, e.fn.lightGallery.modules.zoom = r
}(jQuery, window, document),
function (e, t, i, n) {
	"use strict";
	var o = {
			hash: !0
		},
		r = function (i) {
			return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, o, this.core.s), this.core.s.hash && (this.oldHash = t.location.hash, this.init()), this
		};
	r.prototype.init = function () {
		var i, n = this;
		n.core.$el.on("onAfterSlide.lg.tm", function (e, i, o) {
			t.location.hash = "lg=" + n.core.s.galleryId + "&slide=" + o
		}), e(t).on("hashchange.lg.hash", function () {
			i = t.location.hash;
			var e = parseInt(i.split("&slide=")[1], 10);
			i.indexOf("lg=" + n.core.s.galleryId) > -1 ? n.core.slide(e, !1, !1) : n.core.lGalleryOn && n.core.destroy()
		})
	}, r.prototype.destroy = function () {
		this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? t.location.hash = this.oldHash : history.pushState ? history.pushState("", i.title, t.location.pathname + t.location.search) : t.location.hash = "", this.core.$el.off(".lg.hash"))
	}, e.fn.lightGallery.modules.hash = r
}(jQuery, window, document);
var Swiper = function (e, t) {
	"use strict";

	function i(e, t) {
		return document.querySelectorAll ? (t || document).querySelectorAll(e) : jQuery(e, t)
	}

	function n(e) {
		return "[object Array]" === Object.prototype.toString.apply(e)
	}

	function o() {
		var e = P - R;
		return t.freeMode && (e = P - R), t.slidesPerView > A.slides.length && !t.centeredSlides && (e = 0), 0 > e && (e = 0), e
	}

	function r() {
		function e(e) {
			var i = new Image;
			i.onload = function () {
				A && void 0 !== A.imagesLoaded && A.imagesLoaded++, A.imagesLoaded === A.imagesToLoad.length && (A.reInit(), t.onImagesReady && A.fireCallback(t.onImagesReady, A))
			}, i.src = e
		}
		var n = A.h.addEventListener,
			o = "wrapper" === t.eventTarget ? A.wrapper : A.container;
		if (A.browser.ie10 || A.browser.ie11 ? (n(o, A.touchEvents.touchStart, g), n(document, A.touchEvents.touchMove, m), n(document, A.touchEvents.touchEnd, v)) : (A.support.touch && (n(o, "touchstart", g), n(o, "touchmove", m), n(o, "touchend", v)), t.simulateTouch && (n(o, "mousedown", g), n(document, "mousemove", m), n(document, "mouseup", v))), t.autoResize && n(window, "resize", A.resizeFix), s(), A._wheelEvent = !1, t.mousewheelControl) {
			if (void 0 !== document.onmousewheel && (A._wheelEvent = "mousewheel"), !A._wheelEvent) try {
				new WheelEvent("wheel"), A._wheelEvent = "wheel"
			} catch (r) {}
			A._wheelEvent || (A._wheelEvent = "DOMMouseScroll"), A._wheelEvent && n(A.container, A._wheelEvent, u)
		}
		if (t.keyboardControl && n(document, "keydown", l), t.updateOnImagesReady) {
			A.imagesToLoad = i("img", A.container);
			for (var a = 0; a < A.imagesToLoad.length; a++) e(A.imagesToLoad[a].getAttribute("src"))
		}
	}

	function s() {
		var e, n = A.h.addEventListener;
		if (t.preventLinks) {
			var o = i("a", A.container);
			for (e = 0; e < o.length; e++) n(o[e], "click", h)
		}
		if (t.releaseFormElements) {
			var r = i("input, textarea, select", A.container);
			for (e = 0; e < r.length; e++) n(r[e], A.touchEvents.touchStart, f, !0)
		}
		if (t.onSlideClick)
			for (e = 0; e < A.slides.length; e++) n(A.slides[e], "click", d);
		if (t.onSlideTouch)
			for (e = 0; e < A.slides.length; e++) n(A.slides[e], A.touchEvents.touchStart, c)
	}

	function a() {
		var e, n = A.h.removeEventListener;
		if (t.onSlideClick)
			for (e = 0; e < A.slides.length; e++) n(A.slides[e], "click", d);
		if (t.onSlideTouch)
			for (e = 0; e < A.slides.length; e++) n(A.slides[e], A.touchEvents.touchStart, c);
		if (t.releaseFormElements) {
			var o = i("input, textarea, select", A.container);
			for (e = 0; e < o.length; e++) n(o[e], A.touchEvents.touchStart, f, !0)
		}
		if (t.preventLinks) {
			var r = i("a", A.container);
			for (e = 0; e < r.length; e++) n(r[e], "click", h)
		}
	}

	function l(e) {
		var t = e.keyCode || e.charCode;
		if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
			if (37 === t || 39 === t || 38 === t || 40 === t) {
				for (var i = !1, n = A.h.getOffset(A.container), o = A.h.windowScroll().left, r = A.h.windowScroll().top, s = A.h.windowWidth(), a = A.h.windowHeight(), l = [
						[n.left, n.top],
						[n.left + A.width, n.top],
						[n.left, n.top + A.height],
						[n.left + A.width, n.top + A.height]
					], u = 0; u < l.length; u++) {
					var d = l[u];
					d[0] >= o && d[0] <= o + s && d[1] >= r && d[1] <= r + a && (i = !0)
				}
				if (!i) return
			}
			H ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && A.swipeNext(), 37 === t && A.swipePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && A.swipeNext(), 38 === t && A.swipePrev())
		}
	}

	function u(e) {
		var i = A._wheelEvent,
			n = 0;
		if (e.detail) n = -e.detail;
		else if ("mousewheel" === i)
			if (t.mousewheelControlForceToAxis)
				if (H) {
					if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
					n = e.wheelDeltaX
				} else {
					if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
					n = e.wheelDeltaY
				}
		else n = e.wheelDelta;
		else if ("DOMMouseScroll" === i) n = -e.detail;
		else if ("wheel" === i)
			if (t.mousewheelControlForceToAxis)
				if (H) {
					if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
					n = -e.deltaX
				} else {
					if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
					n = -e.deltaY
				}
		else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
		if (t.freeMode) {
			var r = A.getWrapperTranslate() + n;
			if (r > 0 && (r = 0), r < -o() && (r = -o()), A.setWrapperTransition(0), A.setWrapperTranslate(r), A.updateActiveSlide(r), 0 === r || r === -o()) return
		} else(new Date).getTime() - V > 60 && (0 > n ? A.swipeNext() : A.swipePrev()), V = (new Date).getTime();
		return t.autoplay && A.stopAutoplay(!0), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
	}

	function d(e) {
		A.allowSlideClick && (p(e), A.fireCallback(t.onSlideClick, A, e))
	}

	function c(e) {
		p(e), A.fireCallback(t.onSlideTouch, A, e)
	}

	function p(e) {
		if (e.currentTarget) A.clickedSlide = e.currentTarget;
		else {
			var i = e.srcElement;
			do {
				if (i.className.indexOf(t.slideClass) > -1) break;
				i = i.parentNode
			} while (i);
			A.clickedSlide = i
		}
		A.clickedSlideIndex = A.slides.indexOf(A.clickedSlide), A.clickedSlideLoopIndex = A.clickedSlideIndex - (A.loopedSlides || 0)
	}

	function h(e) {
		return A.allowLinks ? void 0 : (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.preventLinksPropagation && "stopPropagation" in e && e.stopPropagation(), !1)
	}

	function f(e) {
		return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1, !1
	}

	function g(e) {
		if (t.preventLinks && (A.allowLinks = !0), A.isTouched || t.onlyExternal) return !1;
		if (t.noSwiping && (e.target || e.srcElement) && y(e.target || e.srcElement)) return !1;
		if (Z = !1, A.isTouched = !0, K = "touchstart" === e.type, !K || 1 === e.targetTouches.length) {
			A.callPlugins("onTouchStartBegin"), K || A.isAndroid || (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
			var i = K ? e.targetTouches[0].pageX : e.pageX || e.clientX,
				n = K ? e.targetTouches[0].pageY : e.pageY || e.clientY;
			A.touches.startX = A.touches.currentX = i, A.touches.startY = A.touches.currentY = n, A.touches.start = A.touches.current = H ? i : n, A.setWrapperTransition(0), A.positions.start = A.positions.current = A.getWrapperTranslate(), A.setWrapperTranslate(A.positions.start), A.times.start = (new Date).getTime(), D = void 0, t.moveStartThreshold > 0 && (Y = !1), t.onTouchStart && A.fireCallback(t.onTouchStart, A, e), A.callPlugins("onTouchStartEnd")
		}
	}

	function m(e) {
		if (A.isTouched && !t.onlyExternal && (!K || "mousemove" !== e.type)) {
			var i = K ? e.targetTouches[0].pageX : e.pageX || e.clientX,
				n = K ? e.targetTouches[0].pageY : e.pageY || e.clientY;
			if ("undefined" == typeof D && H && (D = !!(D || Math.abs(n - A.touches.startY) > Math.abs(i - A.touches.startX))), "undefined" != typeof D || H || (D = !!(D || Math.abs(n - A.touches.startY) < Math.abs(i - A.touches.startX))), D) return void(A.isTouched = !1);
			if (e.assignedToSwiper) return void(A.isTouched = !1);
			if (e.assignedToSwiper = !0, t.preventLinks && (A.allowLinks = !1), t.onSlideClick && (A.allowSlideClick = !1), t.autoplay && A.stopAutoplay(!0), !K || 1 === e.touches.length) {
				if (A.isMoved || (A.callPlugins("onTouchMoveStart"), t.loop && (A.fixLoop(), A.positions.start = A.getWrapperTranslate()), t.onTouchMoveStart && A.fireCallback(t.onTouchMoveStart, A)), A.isMoved = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, A.touches.current = H ? i : n, A.positions.current = (A.touches.current - A.touches.start) * t.touchRatio + A.positions.start, A.positions.current > 0 && t.onResistanceBefore && A.fireCallback(t.onResistanceBefore, A, A.positions.current), A.positions.current < -o() && t.onResistanceAfter && A.fireCallback(t.onResistanceAfter, A, Math.abs(A.positions.current + o())), t.resistance && "100%" !== t.resistance) {
					var r;
					if (A.positions.current > 0 && (r = 1 - A.positions.current / R / 2, A.positions.current = .5 > r ? R / 2 : A.positions.current * r), A.positions.current < -o()) {
						var s = (A.touches.current - A.touches.start) * t.touchRatio + (o() + A.positions.start);
						r = (R + s) / R;
						var a = A.positions.current - s * (1 - r) / 2,
							l = -o() - R / 2;
						A.positions.current = l > a || 0 >= r ? l : a
					}
				}
				if (t.resistance && "100%" === t.resistance && (A.positions.current > 0 && (!t.freeMode || t.freeModeFluid) && (A.positions.current = 0), A.positions.current < -o() && (!t.freeMode || t.freeModeFluid) && (A.positions.current = -o())), !t.followFinger) return;
				if (t.moveStartThreshold)
					if (Math.abs(A.touches.current - A.touches.start) > t.moveStartThreshold || Y) {
						if (!Y) return Y = !0, void(A.touches.start = A.touches.current);
						A.setWrapperTranslate(A.positions.current)
					} else A.positions.current = A.positions.start;
				else A.setWrapperTranslate(A.positions.current);
				return (t.freeMode || t.watchActiveIndex) && A.updateActiveSlide(A.positions.current), t.grabCursor && (A.container.style.cursor = "move", A.container.style.cursor = "grabbing", A.container.style.cursor = "-moz-grabbin", A.container.style.cursor = "-webkit-grabbing"), U || (U = A.touches.current), Q || (Q = (new Date).getTime()), A.velocity = (A.touches.current - U) / ((new Date).getTime() - Q) / 2, Math.abs(A.touches.current - U) < 2 && (A.velocity = 0), U = A.touches.current, Q = (new Date).getTime(), A.callPlugins("onTouchMoveEnd"), t.onTouchMove && A.fireCallback(t.onTouchMove, A, e), !1
			}
		}
	}

	function v(e) {
		if (D && A.swipeReset(), !t.onlyExternal && A.isTouched) {
			A.isTouched = !1, t.grabCursor && (A.container.style.cursor = "move", A.container.style.cursor = "grab", A.container.style.cursor = "-moz-grab", A.container.style.cursor = "-webkit-grab"), A.positions.current || 0 === A.positions.current || (A.positions.current = A.positions.start), t.followFinger && A.setWrapperTranslate(A.positions.current), A.times.end = (new Date).getTime(), A.touches.diff = A.touches.current - A.touches.start, A.touches.abs = Math.abs(A.touches.diff), A.positions.diff = A.positions.current - A.positions.start, A.positions.abs = Math.abs(A.positions.diff);
			var i = A.positions.diff,
				n = A.positions.abs,
				r = A.times.end - A.times.start;
			5 > n && 300 > r && A.allowLinks === !1 && (t.freeMode || 0 === n || A.swipeReset(), t.preventLinks && (A.allowLinks = !0), t.onSlideClick && (A.allowSlideClick = !0)), setTimeout(function () {
				t.preventLinks && (A.allowLinks = !0), t.onSlideClick && (A.allowSlideClick = !0)
			}, 100);
			var s = o();
			if (!A.isMoved && t.freeMode) return A.isMoved = !1, t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e), void A.callPlugins("onTouchEnd");
			if (!A.isMoved || A.positions.current > 0 || A.positions.current < -s) return A.swipeReset(), t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e), void A.callPlugins("onTouchEnd");
			if (A.isMoved = !1, t.freeMode) {
				if (t.freeModeFluid) {
					var a, l = 1e3 * t.momentumRatio,
						u = A.velocity * l,
						d = A.positions.current + u,
						c = !1,
						p = 20 * Math.abs(A.velocity) * t.momentumBounceRatio; - s > d && (t.momentumBounce && A.support.transitions ? (-p > d + s && (d = -s - p), a = -s, c = !0, Z = !0) : d = -s), d > 0 && (t.momentumBounce && A.support.transitions ? (d > p && (d = p), a = 0, c = !0, Z = !0) : d = 0), 0 !== A.velocity && (l = Math.abs((d - A.positions.current) / A.velocity)), A.setWrapperTranslate(d), A.setWrapperTransition(l), t.momentumBounce && c && A.wrapperTransitionEnd(function () {
						Z && (t.onMomentumBounce && A.fireCallback(t.onMomentumBounce, A), A.callPlugins("onMomentumBounce"), A.setWrapperTranslate(a), A.setWrapperTransition(300))
					}), A.updateActiveSlide(d)
				}
				return (!t.freeModeFluid || r >= 300) && A.updateActiveSlide(A.positions.current), t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e), void A.callPlugins("onTouchEnd")
			}
			j = 0 > i ? "toNext" : "toPrev", "toNext" === j && 300 >= r && (30 > n || !t.shortSwipes ? A.swipeReset() : A.swipeNext(!0)), "toPrev" === j && 300 >= r && (30 > n || !t.shortSwipes ? A.swipeReset() : A.swipePrev(!0));
			var h = 0;
			if ("auto" === t.slidesPerView) {
				for (var f, g = Math.abs(A.getWrapperTranslate()), m = 0, v = 0; v < A.slides.length; v++)
					if (f = H ? A.slides[v].getWidth(!0, t.roundLengths) : A.slides[v].getHeight(!0, t.roundLengths), m += f, m > g) {
						h = f;
						break
					}
				h > R && (h = R)
			} else h = L * t.slidesPerView;
			"toNext" === j && r > 300 && (n >= h * t.longSwipesRatio ? A.swipeNext(!0) : A.swipeReset()), "toPrev" === j && r > 300 && (n >= h * t.longSwipesRatio ? A.swipePrev(!0) : A.swipeReset()), t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e), A.callPlugins("onTouchEnd")
		}
	}

	function y(e) {
		var i = !1;
		do e.className.indexOf(t.noSwipingClass) > -1 && (i = !0), e = e.parentElement; while (!i && e.parentElement && -1 === e.className.indexOf(t.wrapperClass));
		return !i && e.className.indexOf(t.wrapperClass) > -1 && e.className.indexOf(t.noSwipingClass) > -1 && (i = !0), i
	}

	function b(e, t) {
		var i, n = document.createElement("div");
		return n.innerHTML = t, i = n.firstChild, i.className += " " + e, i.outerHTML
	}

	function w(e, i, n) {
		function o() {
			var r = +new Date,
				c = r - s;
			a += l * c / (1e3 / 60), d = "toNext" === u ? a > e : e > a, d ? (A.setWrapperTranslate(Math.round(a)), A._DOMAnimating = !0, window.setTimeout(function () {
				o()
			}, 1e3 / 60)) : (t.onSlideChangeEnd && ("to" === i ? n.runCallbacks === !0 && A.fireCallback(t.onSlideChangeEnd, A) : A.fireCallback(t.onSlideChangeEnd, A)), A.setWrapperTranslate(e), A._DOMAnimating = !1)
		}
		var r = "to" === i && n.speed >= 0 ? n.speed : t.speed,
			s = +new Date;
		if (A.support.transitions || !t.DOMAnimation) A.setWrapperTranslate(e), A.setWrapperTransition(r);
		else {
			var a = A.getWrapperTranslate(),
				l = Math.ceil((e - a) / r * (1e3 / 60)),
				u = a > e ? "toNext" : "toPrev",
				d = "toNext" === u ? a > e : e > a;
			if (A._DOMAnimating) return;
			o()
		}
		A.updateActiveSlide(e), t.onSlideNext && "next" === i && A.fireCallback(t.onSlideNext, A, e), t.onSlidePrev && "prev" === i && A.fireCallback(t.onSlidePrev, A, e), t.onSlideReset && "reset" === i && A.fireCallback(t.onSlideReset, A, e), ("next" === i || "prev" === i || "to" === i && n.runCallbacks === !0) && x(i)
	}

	function x(e) {
		if (A.callPlugins("onSlideChangeStart"), t.onSlideChangeStart)
			if (t.queueStartCallbacks && A.support.transitions) {
				if (A._queueStartCallbacks) return;
				A._queueStartCallbacks = !0, A.fireCallback(t.onSlideChangeStart, A, e), A.wrapperTransitionEnd(function () {
					A._queueStartCallbacks = !1
				})
			} else A.fireCallback(t.onSlideChangeStart, A, e);
		if (t.onSlideChangeEnd)
			if (A.support.transitions)
				if (t.queueEndCallbacks) {
					if (A._queueEndCallbacks) return;
					A._queueEndCallbacks = !0, A.wrapperTransitionEnd(function (i) {
						A.fireCallback(t.onSlideChangeEnd, i, e)
					})
				} else A.wrapperTransitionEnd(function (i) {
					A.fireCallback(t.onSlideChangeEnd, i, e)
				});
		else t.DOMAnimation || setTimeout(function () {
			A.fireCallback(t.onSlideChangeEnd, A, e)
		}, 10)
	}

	function T() {
		var e = A.paginationButtons;
		if (e)
			for (var t = 0; t < e.length; t++) A.h.removeEventListener(e[t], "click", S)
	}

	function C() {
		var e = A.paginationButtons;
		if (e)
			for (var t = 0; t < e.length; t++) A.h.addEventListener(e[t], "click", S)
	}

	function S(e) {
		for (var t, i = e.target || e.srcElement, n = A.paginationButtons, o = 0; o < n.length; o++) i === n[o] && (t = o);
		A.swipeTo(t)
	}

	function $() {
		J = setTimeout(function () {
			t.loop ? (A.fixLoop(), A.swipeNext(!0)) : A.swipeNext(!0) || (t.autoplayStopOnLast ? (clearTimeout(J), J = void 0) : A.swipeTo(0)), A.wrapperTransitionEnd(function () {
				"undefined" != typeof J && $()
			})
		}, t.autoplay)
	}

	function k() {
		A.calcSlides(), t.loader.slides.length > 0 && 0 === A.slides.length && A.loadSlides(), t.loop && A.createLoop(), A.init(), r(), t.pagination && A.createPagination(!0), t.loop || t.initialSlide > 0 ? A.swipeTo(t.initialSlide, 0, !1) : A.updateActiveSlide(0), t.autoplay && A.startAutoplay(), A.centerIndex = A.activeIndex, t.onSwiperCreated && A.fireCallback(t.onSwiperCreated, A), A.callPlugins("onSwiperCreated")
	}
	if (document.body.__defineGetter__ && HTMLElement) {
		var E = HTMLElement.prototype;
		E.__defineGetter__ && E.__defineGetter__("outerHTML", function () {
			return (new XMLSerializer).serializeToString(this)
		})
	}
	if (window.getComputedStyle || (window.getComputedStyle = function (e) {
			return this.el = e, this.getPropertyValue = function (t) {
				var i = /(\-([a-z]){1})/g;
				return "float" === t && (t = "styleFloat"), i.test(t) && (t = t.replace(i, function () {
					return arguments[2].toUpperCase()
				})), e.currentStyle[t] ? e.currentStyle[t] : null
			}, this
		}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
			for (var i = t || 0, n = this.length; n > i; i++)
				if (this[i] === e) return i;
			return -1
		}), (document.querySelectorAll || window.jQuery) && "undefined" != typeof e && (e.nodeType || 0 !== i(e).length)) {
		var A = this;
		A.touches = {
			start: 0,
			startX: 0,
			startY: 0,
			current: 0,
			currentX: 0,
			currentY: 0,
			diff: 0,
			abs: 0
		}, A.positions = {
			start: 0,
			abs: 0,
			diff: 0,
			current: 0
		}, A.times = {
			start: 0,
			end: 0
		}, A.id = (new Date).getTime(), A.container = e.nodeType ? e : i(e)[0], A.isTouched = !1, A.isMoved = !1, A.activeIndex = 0, A.centerIndex = 0, A.activeLoaderIndex = 0, A.activeLoopIndex = 0, A.previousIndex = null, A.velocity = 0, A.snapGrid = [], A.slidesGrid = [], A.imagesToLoad = [], A.imagesLoaded = 0, A.wrapperLeft = 0, A.wrapperRight = 0, A.wrapperTop = 0, A.wrapperBottom = 0, A.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
		var M, L, P, j, D, R, I = {
			eventTarget: "wrapper",
			mode: "horizontal",
			touchRatio: 1,
			speed: 300,
			freeMode: !1,
			freeModeFluid: !1,
			momentumRatio: 1,
			momentumBounce: !0,
			momentumBounceRatio: 1,
			slidesPerView: 1,
			slidesPerGroup: 1,
			slidesPerViewFit: !0,
			simulateTouch: !0,
			followFinger: !0,
			shortSwipes: !0,
			longSwipesRatio: .5,
			moveStartThreshold: !1,
			onlyExternal: !1,
			createPagination: !0,
			pagination: !1,
			paginationElement: "span",
			paginationClickable: !1,
			paginationAsRange: !0,
			resistance: !0,
			scrollContainer: !1,
			preventLinks: !0,
			preventLinksPropagation: !1,
			noSwiping: !1,
			noSwipingClass: "swiper-no-swiping",
			initialSlide: 0,
			keyboardControl: !1,
			mousewheelControl: !1,
			mousewheelControlForceToAxis: !1,
			useCSS3Transforms: !0,
			autoplay: !1,
			autoplayDisableOnInteraction: !0,
			autoplayStopOnLast: !1,
			loop: !1,
			loopAdditionalSlides: 0,
			roundLengths: !1,
			calculateHeight: !1,
			cssWidthAndHeight: !1,
			updateOnImagesReady: !0,
			releaseFormElements: !0,
			watchActiveIndex: !1,
			visibilityFullFit: !1,
			offsetPxBefore: 0,
			offsetPxAfter: 0,
			offsetSlidesBefore: 0,
			offsetSlidesAfter: 0,
			centeredSlides: !1,
			queueStartCallbacks: !1,
			queueEndCallbacks: !1,
			autoResize: !0,
			resizeReInit: !1,
			DOMAnimation: !0,
			loader: {
				slides: [],
				slidesHTMLType: "inner",
				surroundGroups: 1,
				logic: "reload",
				loadAllSlides: !1
			},
			slideElement: "div",
			slideClass: "swiper-slide",
			slideActiveClass: "swiper-slide-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			wrapperClass: "swiper-wrapper",
			paginationElementClass: "swiper-pagination-switch",
			paginationActiveClass: "swiper-active-switch",
			paginationVisibleClass: "swiper-visible-switch"
		};
		t = t || {};
		for (var N in I)
			if (N in t && "object" == typeof t[N])
				for (var O in I[N]) O in t[N] || (t[N][O] = I[N][O]);
			else N in t || (t[N] = I[N]);
		A.params = t, t.scrollContainer && (t.freeMode = !0, t.freeModeFluid = !0), t.loop && (t.resistance = "100%");
		var H = "horizontal" === t.mode,
			q = ["mousedown", "mousemove", "mouseup"];
		A.browser.ie10 && (q = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), A.browser.ie11 && (q = ["pointerdown", "pointermove", "pointerup"]), A.touchEvents = {
			touchStart: A.support.touch || !t.simulateTouch ? "touchstart" : q[0],
			touchMove: A.support.touch || !t.simulateTouch ? "touchmove" : q[1],
			touchEnd: A.support.touch || !t.simulateTouch ? "touchend" : q[2]
		};
		for (var z = A.container.childNodes.length - 1; z >= 0; z--)
			if (A.container.childNodes[z].className)
				for (var F = A.container.childNodes[z].className.split(/\s+/), W = 0; W < F.length; W++) F[W] === t.wrapperClass && (M = A.container.childNodes[z]);
		A.wrapper = M, A._extendSwiperSlide = function (e) {
			return e.append = function () {
				return t.loop ? e.insertAfter(A.slides.length - A.loopedSlides) : (A.wrapper.appendChild(e), A.reInit()), e
			}, e.prepend = function () {
				return t.loop ? (A.wrapper.insertBefore(e, A.slides[A.loopedSlides]), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()) : A.wrapper.insertBefore(e, A.wrapper.firstChild), A.reInit(), e
			}, e.insertAfter = function (i) {
				if ("undefined" == typeof i) return !1;
				var n;
				return t.loop ? (n = A.slides[i + 1 + A.loopedSlides], n ? A.wrapper.insertBefore(e, n) : A.wrapper.appendChild(e), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()) : (n = A.slides[i + 1], A.wrapper.insertBefore(e, n)), A.reInit(), e
			}, e.clone = function () {
				return A._extendSwiperSlide(e.cloneNode(!0))
			}, e.remove = function () {
				A.wrapper.removeChild(e), A.reInit()
			}, e.html = function (t) {
				return "undefined" == typeof t ? e.innerHTML : (e.innerHTML = t, e)
			}, e.index = function () {
				for (var t, i = A.slides.length - 1; i >= 0; i--) e === A.slides[i] && (t = i);
				return t
			}, e.isActive = function () {
				return e.index() === A.activeIndex
			}, e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}), e.getData = function (t) {
				return e.swiperSlideDataStorage[t]
			}, e.setData = function (t, i) {
				return e.swiperSlideDataStorage[t] = i, e
			}, e.data = function (t, i) {
				return "undefined" == typeof i ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, i), e)
			}, e.getWidth = function (t, i) {
				return A.h.getWidth(e, t, i)
			}, e.getHeight = function (t, i) {
				return A.h.getHeight(e, t, i)
			}, e.getOffset = function () {
				return A.h.getOffset(e)
			}, e
		}, A.calcSlides = function (e) {
			var i = A.slides ? A.slides.length : !1;
			A.slides = [], A.displaySlides = [];
			for (var n = 0; n < A.wrapper.childNodes.length; n++)
				if (A.wrapper.childNodes[n].className)
					for (var o = A.wrapper.childNodes[n].className, r = o.split(/\s+/), l = 0; l < r.length; l++) r[l] === t.slideClass && A.slides.push(A.wrapper.childNodes[n]);
			for (n = A.slides.length - 1; n >= 0; n--) A._extendSwiperSlide(A.slides[n]);
			i !== !1 && (i !== A.slides.length || e) && (a(), s(), A.updateActiveSlide(), A.params.pagination && A.createPagination(), A.callPlugins("numberOfSlidesChanged"))
		}, A.createSlide = function (e, i, n) {
			i = i || A.params.slideClass, n = n || t.slideElement;
			var o = document.createElement(n);
			return o.innerHTML = e || "", o.className = i, A._extendSwiperSlide(o)
		}, A.appendSlide = function (e, t, i) {
			return e ? e.nodeType ? A._extendSwiperSlide(e).append() : A.createSlide(e, t, i).append() : void 0
		}, A.prependSlide = function (e, t, i) {
			return e ? e.nodeType ? A._extendSwiperSlide(e).prepend() : A.createSlide(e, t, i).prepend() : void 0
		}, A.insertSlideAfter = function (e, t, i, n) {
			return "undefined" == typeof e ? !1 : t.nodeType ? A._extendSwiperSlide(t).insertAfter(e) : A.createSlide(t, i, n).insertAfter(e)
		}, A.removeSlide = function (e) {
			if (A.slides[e]) {
				if (t.loop) {
					if (!A.slides[e + A.loopedSlides]) return !1;
					A.slides[e + A.loopedSlides].remove(), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()
				} else A.slides[e].remove();
				return !0
			}
			return !1
		}, A.removeLastSlide = function () {
			return A.slides.length > 0 ? (t.loop ? (A.slides[A.slides.length - 1 - A.loopedSlides].remove(), A.removeLoopedSlides(), A.calcSlides(), A.createLoop()) : A.slides[A.slides.length - 1].remove(), !0) : !1
		}, A.removeAllSlides = function () {
			for (var e = A.slides.length - 1; e >= 0; e--) A.slides[e].remove()
		}, A.getSlide = function (e) {
			return A.slides[e]
		}, A.getLastSlide = function () {
			return A.slides[A.slides.length - 1]
		}, A.getFirstSlide = function () {
			return A.slides[0]
		}, A.activeSlide = function () {
			return A.slides[A.activeIndex]
		}, A.fireCallback = function () {
			var e = arguments[0];
			if ("[object Array]" === Object.prototype.toString.call(e))
				for (var i = 0; i < e.length; i++) "function" == typeof e[i] && e[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
			else "[object String]" === Object.prototype.toString.call(e) ? t["on" + e] && A.fireCallback(t["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
		}, A.addCallback = function (e, t) {
			var i, o = this;
			return o.params["on" + e] ? n(this.params["on" + e]) ? this.params["on" + e].push(t) : "function" == typeof this.params["on" + e] ? (i = this.params["on" + e], this.params["on" + e] = [], this.params["on" + e].push(i), this.params["on" + e].push(t)) : void 0 : (this.params["on" + e] = [], this.params["on" + e].push(t))
		}, A.removeCallbacks = function (e) {
			A.params["on" + e] && (A.params["on" + e] = null)
		};
		var B = [];
		for (var _ in A.plugins)
			if (t[_]) {
				var G = A.plugins[_](A, t[_]);
				G && B.push(G)
			}
		A.callPlugins = function (e, t) {
			t || (t = {});
			for (var i = 0; i < B.length; i++) e in B[i] && B[i][e](t)
		}, !A.browser.ie10 && !A.browser.ie11 || t.onlyExternal || A.wrapper.classList.add("swiper-wp8-" + (H ? "horizontal" : "vertical")), t.freeMode && (A.container.className += " swiper-free-mode"), A.initialized = !1, A.init = function (e, i) {
			var n = A.h.getWidth(A.container, !1, t.roundLengths),
				o = A.h.getHeight(A.container, !1, t.roundLengths);
			if (n !== A.width || o !== A.height || e) {
				A.width = n, A.height = o;
				var r, s, a, l, u, d, c;
				R = H ? n : o;
				var p = A.wrapper;
				if (e && A.calcSlides(i), "auto" === t.slidesPerView) {
					var h = 0,
						f = 0;
					t.slidesOffset > 0 && (p.style.paddingLeft = "", p.style.paddingRight = "", p.style.paddingTop = "", p.style.paddingBottom = ""), p.style.width = "", p.style.height = "", t.offsetPxBefore > 0 && (H ? A.wrapperLeft = t.offsetPxBefore : A.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (H ? A.wrapperRight = t.offsetPxAfter : A.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (H ? (A.wrapperLeft = (R - this.slides[0].getWidth(!0, t.roundLengths)) / 2, A.wrapperRight = (R - A.slides[A.slides.length - 1].getWidth(!0, t.roundLengths)) / 2) : (A.wrapperTop = (R - A.slides[0].getHeight(!0, t.roundLengths)) / 2, A.wrapperBottom = (R - A.slides[A.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)), H ? (A.wrapperLeft >= 0 && (p.style.paddingLeft = A.wrapperLeft + "px"), A.wrapperRight >= 0 && (p.style.paddingRight = A.wrapperRight + "px")) : (A.wrapperTop >= 0 && (p.style.paddingTop = A.wrapperTop + "px"), A.wrapperBottom >= 0 && (p.style.paddingBottom = A.wrapperBottom + "px")), d = 0;
					var g = 0;
					for (A.snapGrid = [], A.slidesGrid = [], a = 0, c = 0; c < A.slides.length; c++) {
						r = A.slides[c].getWidth(!0, t.roundLengths), s = A.slides[c].getHeight(!0, t.roundLengths), t.calculateHeight && (a = Math.max(a, s));
						var m = H ? r : s;
						if (t.centeredSlides) {
							var v = c === A.slides.length - 1 ? 0 : A.slides[c + 1].getWidth(!0, t.roundLengths),
								y = c === A.slides.length - 1 ? 0 : A.slides[c + 1].getHeight(!0, t.roundLengths),
								b = H ? v : y;
							if (m > R) {
								if (t.slidesPerViewFit) A.snapGrid.push(d + A.wrapperLeft), A.snapGrid.push(d + m - R + A.wrapperLeft);
								else
									for (var w = 0; w <= Math.floor(m / (R + A.wrapperLeft)); w++) A.snapGrid.push(0 === w ? d + A.wrapperLeft : d + A.wrapperLeft + R * w);
								A.slidesGrid.push(d + A.wrapperLeft)
							} else A.snapGrid.push(g), A.slidesGrid.push(g);
							g += m / 2 + b / 2
						} else {
							if (m > R)
								if (t.slidesPerViewFit) A.snapGrid.push(d), A.snapGrid.push(d + m - R);
								else if (0 !== R)
								for (var x = 0; x <= Math.floor(m / R); x++) A.snapGrid.push(d + R * x);
							else A.snapGrid.push(d);
							else A.snapGrid.push(d);
							A.slidesGrid.push(d)
						}
						d += m, h += r, f += s
					}
					t.calculateHeight && (A.height = a), H ? (P = h + A.wrapperRight + A.wrapperLeft, p.style.width = h + "px", p.style.height = A.height + "px") : (P = f + A.wrapperTop + A.wrapperBottom, p.style.width = A.width + "px", p.style.height = f + "px")
				} else if (t.scrollContainer) p.style.width = "", p.style.height = "", l = A.slides[0].getWidth(!0, t.roundLengths), u = A.slides[0].getHeight(!0, t.roundLengths), P = H ? l : u, p.style.width = l + "px", p.style.height = u + "px", L = H ? l : u;
				else {
					if (t.calculateHeight) {
						for (a = 0, u = 0, H || (A.container.style.height = ""), p.style.height = "", c = 0; c < A.slides.length; c++) A.slides[c].style.height = "", a = Math.max(A.slides[c].getHeight(!0), a), H || (u += A.slides[c].getHeight(!0));
						s = a, A.height = s, H ? u = s : (R = s, A.container.style.height = R + "px")
					} else s = H ? A.height : A.height / t.slidesPerView, t.roundLengths && (s = Math.round(s)), u = H ? A.height : A.slides.length * s;
					for (r = H ? A.width / t.slidesPerView : A.width, t.roundLengths && (r = Math.round(r)), l = H ? A.slides.length * r : A.width, L = H ? r : s, t.offsetSlidesBefore > 0 && (H ? A.wrapperLeft = L * t.offsetSlidesBefore : A.wrapperTop = L * t.offsetSlidesBefore), t.offsetSlidesAfter > 0 && (H ? A.wrapperRight = L * t.offsetSlidesAfter : A.wrapperBottom = L * t.offsetSlidesAfter), t.offsetPxBefore > 0 && (H ? A.wrapperLeft = t.offsetPxBefore : A.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (H ? A.wrapperRight = t.offsetPxAfter : A.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (H ? (A.wrapperLeft = (R - L) / 2, A.wrapperRight = (R - L) / 2) : (A.wrapperTop = (R - L) / 2, A.wrapperBottom = (R - L) / 2)), H ? (A.wrapperLeft > 0 && (p.style.paddingLeft = A.wrapperLeft + "px"), A.wrapperRight > 0 && (p.style.paddingRight = A.wrapperRight + "px")) : (A.wrapperTop > 0 && (p.style.paddingTop = A.wrapperTop + "px"), A.wrapperBottom > 0 && (p.style.paddingBottom = A.wrapperBottom + "px")), P = H ? l + A.wrapperRight + A.wrapperLeft : u + A.wrapperTop + A.wrapperBottom, t.cssWidthAndHeight || (parseFloat(l) > 0 && (p.style.width = l + "px"), parseFloat(u) > 0 && (p.style.height = u + "px")), d = 0, A.snapGrid = [], A.slidesGrid = [], c = 0; c < A.slides.length; c++) A.snapGrid.push(d), A.slidesGrid.push(d), d += L, t.cssWidthAndHeight || (parseFloat(r) > 0 && (A.slides[c].style.width = r + "px"), parseFloat(s) > 0 && (A.slides[c].style.height = s + "px"))
				}
				A.initialized ? (A.callPlugins("onInit"), t.onInit && A.fireCallback(t.onInit, A)) : (A.callPlugins("onFirstInit"), t.onFirstInit && A.fireCallback(t.onFirstInit, A)), A.initialized = !0
			}
		}, A.reInit = function (e) {
			A.init(!0, e)
		}, A.resizeFix = function (e) {
			A.callPlugins("beforeResizeFix"), A.init(t.resizeReInit || e), t.freeMode ? A.getWrapperTranslate() < -o() && (A.setWrapperTransition(0), A.setWrapperTranslate(-o())) : (A.swipeTo(t.loop ? A.activeLoopIndex : A.activeIndex, 0, !1), t.autoplay && (A.support.transitions && "undefined" != typeof J ? "undefined" != typeof J && (clearTimeout(J), J = void 0, A.startAutoplay()) : "undefined" != typeof ee && (clearInterval(ee), ee = void 0, A.startAutoplay()))), A.callPlugins("afterResizeFix")
		}, A.destroy = function () {
			var e = A.h.removeEventListener,
				i = "wrapper" === t.eventTarget ? A.wrapper : A.container;
			A.browser.ie10 || A.browser.ie11 ? (e(i, A.touchEvents.touchStart, g), e(document, A.touchEvents.touchMove, m), e(document, A.touchEvents.touchEnd, v)) : (A.support.touch && (e(i, "touchstart", g), e(i, "touchmove", m), e(i, "touchend", v)), t.simulateTouch && (e(i, "mousedown", g), e(document, "mousemove", m), e(document, "mouseup", v))), t.autoResize && e(window, "resize", A.resizeFix), a(), t.paginationClickable && T(), t.mousewheelControl && A._wheelEvent && e(A.container, A._wheelEvent, u), t.keyboardControl && e(document, "keydown", l), t.autoplay && A.stopAutoplay(), A.callPlugins("onDestroy"), A = null
		}, A.disableKeyboardControl = function () {
			t.keyboardControl = !1, A.h.removeEventListener(document, "keydown", l)
		}, A.enableKeyboardControl = function () {
			t.keyboardControl = !0, A.h.addEventListener(document, "keydown", l)
		};
		var V = (new Date).getTime();
		if (A.disableMousewheelControl = function () {
				return A._wheelEvent ? (t.mousewheelControl = !1, A.h.removeEventListener(A.container, A._wheelEvent, u), !0) : !1
			}, A.enableMousewheelControl = function () {
				return A._wheelEvent ? (t.mousewheelControl = !0, A.h.addEventListener(A.container, A._wheelEvent, u), !0) : !1
			}, t.grabCursor) {
			var X = A.container.style;
			X.cursor = "move", X.cursor = "grab", X.cursor = "-moz-grab", X.cursor = "-webkit-grab"
		}
		A.allowSlideClick = !0, A.allowLinks = !0;
		var Y, U, Q, K = !1,
			Z = !0;
		A.swipeNext = function (e) {
			!e && t.loop && A.fixLoop(), !e && t.autoplay && A.stopAutoplay(!0), A.callPlugins("onSwipeNext");
			var i = A.getWrapperTranslate(),
				n = i;
			if ("auto" === t.slidesPerView) {
				for (var r = 0; r < A.snapGrid.length; r++)
					if (-i >= A.snapGrid[r] && -i < A.snapGrid[r + 1]) {
						n = -A.snapGrid[r + 1];
						break
					}
			} else {
				var s = L * t.slidesPerGroup;
				n = -(Math.floor(Math.abs(i) / Math.floor(s)) * s + s)
			}
			return n < -o() && (n = -o()), n === i ? !1 : (w(n, "next"), !0)
		}, A.swipePrev = function (e) {
			!e && t.loop && A.fixLoop(), !e && t.autoplay && A.stopAutoplay(!0), A.callPlugins("onSwipePrev");
			var i, n = Math.ceil(A.getWrapperTranslate());
			if ("auto" === t.slidesPerView) {
				i = 0;
				for (var o = 1; o < A.snapGrid.length; o++) {
					if (-n === A.snapGrid[o]) {
						i = -A.snapGrid[o - 1];
						break
					}
					if (-n > A.snapGrid[o] && -n < A.snapGrid[o + 1]) {
						i = -A.snapGrid[o];
						break
					}
				}
			} else {
				var r = L * t.slidesPerGroup;
				i = -(Math.ceil(-n / r) - 1) * r
			}
			return i > 0 && (i = 0), i === n ? !1 : (w(i, "prev"), !0)
		}, A.swipeReset = function () {
			A.callPlugins("onSwipeReset");
			var e, i = A.getWrapperTranslate(),
				n = L * t.slidesPerGroup;
			if (-o(), "auto" === t.slidesPerView) {
				e = 0;
				for (var r = 0; r < A.snapGrid.length; r++) {
					if (-i === A.snapGrid[r]) return;
					if (-i >= A.snapGrid[r] && -i < A.snapGrid[r + 1]) {
						e = A.positions.diff > 0 ? -A.snapGrid[r + 1] : -A.snapGrid[r];
						break
					}
				} - i >= A.snapGrid[A.snapGrid.length - 1] && (e = -A.snapGrid[A.snapGrid.length - 1]), i <= -o() && (e = -o())
			} else e = 0 > i ? Math.round(i / n) * n : 0;
			return t.scrollContainer && (e = 0 > i ? i : 0), e < -o() && (e = -o()), t.scrollContainer && R > L && (e = 0), e === i ? !1 : (w(e, "reset"), !0)
		}, A.swipeTo = function (e, i, n) {
			e = parseInt(e, 10), A.callPlugins("onSwipeTo", {
				index: e,
				speed: i
			}), t.loop && (e += A.loopedSlides);
			var r = A.getWrapperTranslate();
			if (!(e > A.slides.length - 1 || 0 > e)) {
				var s;
				return s = "auto" === t.slidesPerView ? -A.slidesGrid[e] : -e * L, s < -o() && (s = -o()), s === r ? !1 : (n = n !== !1, w(s, "to", {
					index: e,
					speed: i,
					runCallbacks: n
				}), !0)
			}
		}, A._queueStartCallbacks = !1, A._queueEndCallbacks = !1, A.updateActiveSlide = function (e) {
			if (A.initialized && 0 !== A.slides.length) {
				A.previousIndex = A.activeIndex, "undefined" == typeof e && (e = A.getWrapperTranslate()), e > 0 && (e = 0);
				var i;
				if ("auto" === t.slidesPerView) {
					if (A.activeIndex = A.slidesGrid.indexOf(-e), A.activeIndex < 0) {
						for (i = 0; i < A.slidesGrid.length - 1 && !(-e > A.slidesGrid[i] && -e < A.slidesGrid[i + 1]); i++);
						var n = Math.abs(A.slidesGrid[i] + e),
							o = Math.abs(A.slidesGrid[i + 1] + e);
						A.activeIndex = o >= n ? i : i + 1
					}
				} else A.activeIndex = Math[t.visibilityFullFit ? "ceil" : "round"](-e / L);
				if (A.activeIndex === A.slides.length && (A.activeIndex = A.slides.length - 1), A.activeIndex < 0 && (A.activeIndex = 0), A.slides[A.activeIndex]) {
					if (A.calcVisibleSlides(e), A.support.classList) {
						var r;
						for (i = 0; i < A.slides.length; i++) r = A.slides[i], r.classList.remove(t.slideActiveClass), A.visibleSlides.indexOf(r) >= 0 ? r.classList.add(t.slideVisibleClass) : r.classList.remove(t.slideVisibleClass);
						A.slides[A.activeIndex].classList.add(t.slideActiveClass)
					} else {
						var s = new RegExp("\\s*" + t.slideActiveClass),
							a = new RegExp("\\s*" + t.slideVisibleClass);
						for (i = 0; i < A.slides.length; i++) A.slides[i].className = A.slides[i].className.replace(s, "").replace(a, ""), A.visibleSlides.indexOf(A.slides[i]) >= 0 && (A.slides[i].className += " " + t.slideVisibleClass);
						A.slides[A.activeIndex].className += " " + t.slideActiveClass
					}
					if (t.loop) {
						var l = A.loopedSlides;
						A.activeLoopIndex = A.activeIndex - l, A.activeLoopIndex >= A.slides.length - 2 * l && (A.activeLoopIndex = A.slides.length - 2 * l - A.activeLoopIndex), A.activeLoopIndex < 0 && (A.activeLoopIndex = A.slides.length - 2 * l + A.activeLoopIndex), A.activeLoopIndex < 0 && (A.activeLoopIndex = 0)
					} else A.activeLoopIndex = A.activeIndex;
					t.pagination && A.updatePagination(e)
				}
			}
		}, A.createPagination = function (e) {
			if (t.paginationClickable && A.paginationButtons && T(), A.paginationContainer = t.pagination.nodeType ? t.pagination : i(t.pagination)[0], t.createPagination) {
				var n = "",
					o = A.slides.length,
					r = o;
				t.loop && (r -= 2 * A.loopedSlides);
				for (var s = 0; r > s; s++) n += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
				A.paginationContainer.innerHTML = n
			}
			A.paginationButtons = i("." + t.paginationElementClass, A.paginationContainer), e || A.updatePagination(), A.callPlugins("onCreatePagination"), t.paginationClickable && C()
		}, A.updatePagination = function (e) {
			if (t.pagination && !(A.slides.length < 1)) {
				var n = i("." + t.paginationActiveClass, A.paginationContainer);
				if (n) {
					var o = A.paginationButtons;
					if (0 !== o.length) {
						for (var r = 0; r < o.length; r++) o[r].className = t.paginationElementClass;
						var s = t.loop ? A.loopedSlides : 0;
						if (t.paginationAsRange) {
							A.visibleSlides || A.calcVisibleSlides(e);
							var a, l = [];
							for (a = 0; a < A.visibleSlides.length; a++) {
								var u = A.slides.indexOf(A.visibleSlides[a]) - s;
								t.loop && 0 > u && (u = A.slides.length - 2 * A.loopedSlides + u), t.loop && u >= A.slides.length - 2 * A.loopedSlides && (u = A.slides.length - 2 * A.loopedSlides - u, u = Math.abs(u)), l.push(u)
							}
							for (a = 0; a < l.length; a++) o[l[a]] && (o[l[a]].className += " " + t.paginationVisibleClass);
							t.loop ? void 0 !== o[A.activeLoopIndex] && (o[A.activeLoopIndex].className += " " + t.paginationActiveClass) : o[A.activeIndex].className += " " + t.paginationActiveClass
						} else t.loop ? o[A.activeLoopIndex] && (o[A.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass) : o[A.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass
					}
				}
			}
		}, A.calcVisibleSlides = function (e) {
			var i = [],
				n = 0,
				o = 0,
				r = 0;
			H && A.wrapperLeft > 0 && (e += A.wrapperLeft), !H && A.wrapperTop > 0 && (e += A.wrapperTop);
			for (var s = 0; s < A.slides.length; s++) {
				n += o, o = "auto" === t.slidesPerView ? H ? A.h.getWidth(A.slides[s], !0, t.roundLengths) : A.h.getHeight(A.slides[s], !0, t.roundLengths) : L, r = n + o;
				var a = !1;
				t.visibilityFullFit ? (n >= -e && -e + R >= r && (a = !0), -e >= n && r >= -e + R && (a = !0)) : (r > -e && -e + R >= r && (a = !0), n >= -e && -e + R > n && (a = !0), -e > n && r > -e + R && (a = !0)), a && i.push(A.slides[s])
			}
			0 === i.length && (i = [A.slides[A.activeIndex]]), A.visibleSlides = i
		};
		var J, ee;
		A.startAutoplay = function () {
			if (A.support.transitions) {
				if ("undefined" != typeof J) return !1;
				if (!t.autoplay) return;
				A.callPlugins("onAutoplayStart"), t.onAutoplayStart && A.fireCallback(t.onAutoplayStart, A), $()
			} else {
				if ("undefined" != typeof ee) return !1;
				if (!t.autoplay) return;
				A.callPlugins("onAutoplayStart"), t.onAutoplayStart && A.fireCallback(t.onAutoplayStart, A), ee = setInterval(function () {
					t.loop ? (A.fixLoop(), A.swipeNext(!0)) : A.swipeNext(!0) || (t.autoplayStopOnLast ? (clearInterval(ee), ee = void 0) : A.swipeTo(0))
				}, t.autoplay)
			}
		}, A.stopAutoplay = function (e) {
			if (A.support.transitions) {
				if (!J) return;
				J && clearTimeout(J), J = void 0, e && !t.autoplayDisableOnInteraction && A.wrapperTransitionEnd(function () {
					$()
				}), A.callPlugins("onAutoplayStop"), t.onAutoplayStop && A.fireCallback(t.onAutoplayStop, A)
			} else ee && clearInterval(ee), ee = void 0, A.callPlugins("onAutoplayStop"), t.onAutoplayStop && A.fireCallback(t.onAutoplayStop, A)
		}, A.loopCreated = !1, A.removeLoopedSlides = function () {
			if (A.loopCreated)
				for (var e = 0; e < A.slides.length; e++) A.slides[e].getData("looped") === !0 && A.wrapper.removeChild(A.slides[e])
		}, A.createLoop = function () {
			if (0 !== A.slides.length) {
				A.loopedSlides = "auto" === t.slidesPerView ? t.loopedSlides || 1 : t.slidesPerView + t.loopAdditionalSlides, A.loopedSlides > A.slides.length && (A.loopedSlides = A.slides.length);
				var e, i = "",
					n = "",
					o = "",
					r = A.slides.length,
					s = Math.floor(A.loopedSlides / r),
					a = A.loopedSlides % r;
				for (e = 0; s * r > e; e++) {
					var l = e;
					if (e >= r) {
						var u = Math.floor(e / r);
						l = e - r * u
					}
					o += A.slides[l].outerHTML
				}
				for (e = 0; a > e; e++) n += b(t.slideDuplicateClass, A.slides[e].outerHTML);
				for (e = r - a; r > e; e++) i += b(t.slideDuplicateClass, A.slides[e].outerHTML);
				var d = i + o + M.innerHTML + o + n;
				for (M.innerHTML = d, A.loopCreated = !0, A.calcSlides(), e = 0; e < A.slides.length; e++)(e < A.loopedSlides || e >= A.slides.length - A.loopedSlides) && A.slides[e].setData("looped", !0);
				A.callPlugins("onCreateLoop")
			}
		}, A.fixLoop = function () {
			var e;
			A.activeIndex < A.loopedSlides ? (e = A.slides.length - 3 * A.loopedSlides + A.activeIndex, A.swipeTo(e, 0, !1)) : ("auto" === t.slidesPerView && A.activeIndex >= 2 * A.loopedSlides || A.activeIndex > A.slides.length - 2 * t.slidesPerView) && (e = -A.slides.length + A.activeIndex + A.loopedSlides, A.swipeTo(e, 0, !1))
		}, A.loadSlides = function () {
			var e = "";
			A.activeLoaderIndex = 0;
			for (var i = t.loader.slides, n = t.loader.loadAllSlides ? i.length : t.slidesPerView * (1 + t.loader.surroundGroups), o = 0; n > o; o++) e += "outer" === t.loader.slidesHTMLType ? i[o] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + o + '">' + i[o] + "</" + t.slideElement + ">";
			A.wrapper.innerHTML = e, A.calcSlides(!0), t.loader.loadAllSlides || A.wrapperTransitionEnd(A.reloadSlides, !0)
		}, A.reloadSlides = function () {
			var e = t.loader.slides,
				i = parseInt(A.activeSlide().data("swiperindex"), 10);
			if (!(0 > i || i > e.length - 1)) {
				A.activeLoaderIndex = i;
				var n = Math.max(0, i - t.slidesPerView * t.loader.surroundGroups),
					o = Math.min(i + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
				if (i > 0) {
					var r = -L * (i - n);
					A.setWrapperTranslate(r), A.setWrapperTransition(0)
				}
				var s;
				if ("reload" === t.loader.logic) {
					A.wrapper.innerHTML = "";
					var a = "";
					for (s = n; o >= s; s++) a += "outer" === t.loader.slidesHTMLType ? e[s] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + s + '">' + e[s] + "</" + t.slideElement + ">";
					A.wrapper.innerHTML = a
				} else {
					var l = 1e3,
						u = 0;
					for (s = 0; s < A.slides.length; s++) {
						var d = A.slides[s].data("swiperindex");
						n > d || d > o ? A.wrapper.removeChild(A.slides[s]) : (l = Math.min(d, l), u = Math.max(d, u))
					}
					for (s = n; o >= s; s++) {
						var c;
						l > s && (c = document.createElement(t.slideElement), c.className = t.slideClass, c.setAttribute("data-swiperindex", s), c.innerHTML = e[s], A.wrapper.insertBefore(c, A.wrapper.firstChild)), s > u && (c = document.createElement(t.slideElement), c.className = t.slideClass, c.setAttribute("data-swiperindex", s), c.innerHTML = e[s], A.wrapper.appendChild(c))
					}
				}
				A.reInit(!0)
			}
		}, k()
	}
};
Swiper.prototype = {
		plugins: {},
		wrapperTransitionEnd: function (e, t) {
			"use strict";

			function i() {
				if (e(o), o.params.queueEndCallbacks && (o._queueEndCallbacks = !1), !t)
					for (n = 0; n < s.length; n++) o.h.removeEventListener(r, s[n], i)
			}
			var n, o = this,
				r = o.wrapper,
				s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
			if (e)
				for (n = 0; n < s.length; n++) o.h.addEventListener(r, s[n], i)
		},
		getWrapperTranslate: function (e) {
			"use strict";
			var t, i, n, o, r = this.wrapper;
			return "undefined" == typeof e && (e = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (n = window.getComputedStyle(r, null), window.WebKitCSSMatrix ? o = new WebKitCSSMatrix("none" === n.webkitTransform ? "" : n.webkitTransform) : (o = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = o.toString().split(",")), "x" === e && (i = window.WebKitCSSMatrix ? o.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === e && (i = window.WebKitCSSMatrix ? o.m42 : parseFloat(16 === t.length ? t[13] : t[5]))) : ("x" === e && (i = parseFloat(r.style.left, 10) || 0), "y" === e && (i = parseFloat(r.style.top, 10) || 0)), i || 0
		},
		setWrapperTranslate: function (e, t, i) {
			"use strict";
			var n, o = this.wrapper.style,
				r = {
					x: 0,
					y: 0,
					z: 0
				};
			3 === arguments.length ? (r.x = e, r.y = t, r.z = i) : ("undefined" == typeof t && (t = "horizontal" === this.params.mode ? "x" : "y"), r[t] = e), this.support.transforms && this.params.useCSS3Transforms ? (n = this.support.transforms3d ? "translate3d(" + r.x + "px, " + r.y + "px, " + r.z + "px)" : "translate(" + r.x + "px, " + r.y + "px)", o.webkitTransform = o.MsTransform = o.msTransform = o.MozTransform = o.OTransform = o.transform = n) : (o.left = r.x + "px", o.top = r.y + "px"), this.callPlugins("onSetWrapperTransform", r), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, r)
		},
		setWrapperTransition: function (e) {
			"use strict";
			var t = this.wrapper.style;
			t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
				duration: e
			}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
		},
		h: {
			getWidth: function (e, t, i) {
				"use strict";
				var n = window.getComputedStyle(e, null).getPropertyValue("width"),
					o = parseFloat(n);
				return (isNaN(o) || n.indexOf("%") > 0) && (o = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), t && (o += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), i ? Math.round(o) : o
			},
			getHeight: function (e, t, i) {
				"use strict";
				if (t) return e.offsetHeight;
				var n = window.getComputedStyle(e, null).getPropertyValue("height"),
					o = parseFloat(n);
				return (isNaN(o) || n.indexOf("%") > 0) && (o = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), t && (o += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), i ? Math.round(o) : o
			},
			getOffset: function (e) {
				"use strict";
				var t = e.getBoundingClientRect(),
					i = document.body,
					n = e.clientTop || i.clientTop || 0,
					o = e.clientLeft || i.clientLeft || 0,
					r = window.pageYOffset || e.scrollTop,
					s = window.pageXOffset || e.scrollLeft;
				return document.documentElement && !window.pageYOffset && (r = document.documentElement.scrollTop, s = document.documentElement.scrollLeft), {
					top: t.top + r - n,
					left: t.left + s - o
				}
			},
			windowWidth: function () {
				"use strict";
				return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
			},
			windowHeight: function () {
				"use strict";
				return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
			},
			windowScroll: function () {
				"use strict";
				return "undefined" != typeof pageYOffset ? {
					left: window.pageXOffset,
					top: window.pageYOffset
				} : document.documentElement ? {
					left: document.documentElement.scrollLeft,
					top: document.documentElement.scrollTop
				} : void 0
			},
			addEventListener: function (e, t, i, n) {
				"use strict";
				"undefined" == typeof n && (n = !1), e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
			},
			removeEventListener: function (e, t, i, n) {
				"use strict";
				"undefined" == typeof n && (n = !1), e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
			}
		},
		setTransform: function (e, t) {
			"use strict";
			var i = e.style;
			i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
		},
		setTranslate: function (e, t) {
			"use strict";
			var i = e.style,
				n = {
					x: t.x || 0,
					y: t.y || 0,
					z: t.z || 0
				},
				o = this.support.transforms3d ? "translate3d(" + n.x + "px," + n.y + "px," + n.z + "px)" : "translate(" + n.x + "px," + n.y + "px)";
			i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = o, this.support.transforms || (i.left = n.x + "px", i.top = n.y + "px")
		},
		setTransition: function (e, t) {
			"use strict";
			var i = e.style;
			i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t + "ms"
		},
		support: {
			touch: window.Modernizr && Modernizr.touch === !0 || function () {
				"use strict";
				return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
			}(),
			transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
				"use strict";
				var e = document.createElement("div").style;
				return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
			}(),
			transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
				"use strict";
				var e = document.createElement("div").style;
				return "transform" in e || "WebkitTransform" in e || "MozTransform" in e || "msTransform" in e || "MsTransform" in e || "OTransform" in e
			}(),
			transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
				"use strict";
				var e = document.createElement("div").style;
				return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "MsTransition" in e || "OTransition" in e
			}(),
			classList: function () {
				"use strict";
				var e = document.createElement("div").style;
				return "classList" in e
			}()
		},
		browser: {
			ie8: function () {
				"use strict";
				var e = -1;
				if ("Microsoft Internet Explorer" === navigator.appName) {
					var t = navigator.userAgent,
						i = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
					null !== i.exec(t) && (e = parseFloat(RegExp.$1))
				}
				return -1 !== e && 9 > e
			}(),
			ie10: window.navigator.msPointerEnabled,
			ie11: window.navigator.pointerEnabled
		}
	}, (window.jQuery || window.Zepto) && ! function (e) {
		"use strict";
		e.fn.swiper = function (t) {
			var i = new Swiper(e(this)[0], t);
			return e(this).data("swiper", i), i
		}
	}(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), "function" == typeof define && define.amd && define([], function () {
		"use strict";
		return Swiper
	}),
	function (e, t, i) {
		function n(t, i) {
			this.bodyOverflowX, this.callbacks = {
				hide: [],
				show: []
			}, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, l, i), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
		}

		function o(t, i) {
			var n = !0;
			return e.each(t, function (e, o) {
				return "undefined" == typeof i[e] || t[e] !== i[e] ? (n = !1, !1) : void 0
			}), n
		}

		function r() {
			return !d && u
		}

		function s() {
			var e = i.body || i.documentElement,
				t = e.style,
				n = "transition";
			if ("string" == typeof t[n]) return !0;
			v = ["Moz", "Webkit", "Khtml", "O", "ms"], n = n.charAt(0).toUpperCase() + n.substr(1);
			for (var o = 0; o < v.length; o++)
				if ("string" == typeof t[v[o] + n]) return !0;
			return !1
		}
		var a = "tooltipster",
			l = {
				animation: "fade",
				arrow: !0,
				arrowColor: "",
				autoClose: !0,
				content: null,
				contentAsHTML: !1,
				contentCloning: !0,
				debug: !0,
				delay: 200,
				minWidth: 0,
				maxWidth: null,
				functionInit: function (e, t) {},
				functionBefore: function (e, t) {
					t()
				},
				functionReady: function (e, t) {},
				functionAfter: function (e) {},
				hideOnClick: !1,
				icon: "(?)",
				iconCloning: !0,
				iconDesktop: !1,
				iconTouch: !1,
				iconTheme: "tooltipster-icon",
				interactive: !1,
				interactiveTolerance: 350,
				multiple: !1,
				offsetX: 0,
				offsetY: 0,
				onlyOne: !1,
				position: "top",
				positionTracker: !1,
				positionTrackerCallback: function (e) {
					"hover" == this.option("trigger") && this.option("autoClose") && this.hide()
				},
				restoration: "current",
				speed: 350,
				timer: 0,
				theme: "tooltipster-default",
				touchDevices: !0,
				trigger: "hover",
				updateAnimation: !0
			};
		n.prototype = {
			_init: function () {
				var t = this;
				if (i.querySelector) {
					var n = null;
					void 0 === t.$el.data("tooltipster-initialTitle") && (n = t.$el.attr("title"), void 0 === n && (n = null), t.$el.data("tooltipster-initialTitle", n)), null !== t.options.content ? t._content_set(t.options.content) : t._content_set(n);
					var o = t.options.functionInit.call(t.$el, t.$el, t.Content);
					"undefined" != typeof o && t._content_set(o), t.$el.removeAttr("title").addClass("tooltipstered"), !u && t.options.iconDesktop || u && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.options.iconCloning ? t.$elProxy = t.options.icon.clone(!0) : t.$elProxy = t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function () {
						r() && !t.options.touchDevices || (t.mouseIsOverProxy = !0, t._show())
					}).on("mouseleave." + t.namespace, function () {
						r() && !t.options.touchDevices || (t.mouseIsOverProxy = !1)
					}), u && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function () {
						t._showNow()
					})) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function () {
						r() && !t.options.touchDevices || t._show()
					})
				}
			},
			_show: function () {
				var e = this;
				"shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function () {
					("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
				}, e.options.delay) : e._showNow())
			},
			_showNow: function (i) {
				var n = this;
				n.options.functionBefore.call(n.$el, n.$el, function () {
					if (n.enabled && null !== n.Content) {
						i && n.callbacks.show.push(i), n.callbacks.hide = [], clearTimeout(n.timerShow), n.timerShow = null, clearTimeout(n.timerHide), n.timerHide = null, n.options.onlyOne && e(".tooltipstered").not(n.$el).each(function (t, i) {
							var n = e(i),
								o = n.data("tooltipster-ns");
							e.each(o, function (e, t) {
								var i = n.data(t),
									o = i.status(),
									r = i.option("autoClose");
								"hidden" !== o && "disappearing" !== o && r && i.hide()
							})
						});
						var o = function () {
							n.Status = "shown", e.each(n.callbacks.show, function (e, t) {
								t.call(n.$el)
							}), n.callbacks.show = []
						};
						if ("hidden" !== n.Status) {
							var r = 0;
							"disappearing" === n.Status ? (n.Status = "appearing", s() ? (n.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + n.options.animation + "-show"), n.options.speed > 0 && n.$tooltip.delay(n.options.speed), n.$tooltip.queue(o)) : n.$tooltip.stop().fadeIn(o)) : "shown" === n.Status && o()
						} else {
							n.Status = "appearing";
							var r = n.options.speed;
							n.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
							var a = "tooltipster-" + n.options.animation,
								l = "-webkit-transition-duration: " + n.options.speed + "ms; -webkit-animation-duration: " + n.options.speed + "ms; -moz-transition-duration: " + n.options.speed + "ms; -moz-animation-duration: " + n.options.speed + "ms; -o-transition-duration: " + n.options.speed + "ms; -o-animation-duration: " + n.options.speed + "ms; -ms-transition-duration: " + n.options.speed + "ms; -ms-animation-duration: " + n.options.speed + "ms; transition-duration: " + n.options.speed + "ms; animation-duration: " + n.options.speed + "ms;",
								d = n.options.minWidth ? "min-width:" + Math.round(n.options.minWidth) + "px;" : "",
								c = n.options.maxWidth ? "max-width:" + Math.round(n.options.maxWidth) + "px;" : "",
								p = n.options.interactive ? "pointer-events: auto;" : "";
							if (n.$tooltip = e('<div class="tooltipster-base ' + n.options.theme + '" style="' + d + " " + c + " " + p + " " + l + '"><div class="tooltipster-content"></div></div>'), s() && n.$tooltip.addClass(a), n._content_insert(), n.$tooltip.appendTo("body"), n.reposition(), n.options.functionReady.call(n.$el, n.$el, n.$tooltip), s() ? (n.$tooltip.addClass(a + "-show"), n.options.speed > 0 && n.$tooltip.delay(n.options.speed), n.$tooltip.queue(o)) : n.$tooltip.css("display", "none").fadeIn(n.options.speed, o), n._interval_set(), e(t).on("scroll." + n.namespace + " resize." + n.namespace, function () {
									n.reposition()
								}), n.options.autoClose)
								if (e("body").off("." + n.namespace), "hover" == n.options.trigger) {
									if (u && setTimeout(function () {
											e("body").on("touchstart." + n.namespace, function () {
												n.hide()
											})
										}, 0), n.options.interactive) {
										u && n.$tooltip.on("touchstart." + n.namespace, function (e) {
											e.stopPropagation()
										});
										var h = null;
										n.$elProxy.add(n.$tooltip).on("mouseleave." + n.namespace + "-autoClose", function () {
											clearTimeout(h), h = setTimeout(function () {
												n.hide()
											}, n.options.interactiveTolerance)
										}).on("mouseenter." + n.namespace + "-autoClose", function () {
											clearTimeout(h)
										})
									} else n.$elProxy.on("mouseleave." + n.namespace + "-autoClose", function () {
										n.hide()
									});
									n.options.hideOnClick && n.$elProxy.on("click." + n.namespace + "-autoClose", function () {
										n.hide()
									})
								} else "click" == n.options.trigger && (setTimeout(function () {
									e("body").on("click." + n.namespace + " touchstart." + n.namespace, function () {
										n.hide()
									})
								}, 0), n.options.interactive && n.$tooltip.on("click." + n.namespace + " touchstart." + n.namespace, function (e) {
									e.stopPropagation()
								}))
						}
						n.options.timer > 0 && (n.timerHide = setTimeout(function () {
							n.timerHide = null, n.hide()
						}, n.options.timer + r))
					}
				})
			},
			_interval_set: function () {
				var t = this;
				t.checkInterval = setInterval(function () {
					if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length) "shown" != t.Status && "appearing" != t.Status || t.hide(), t._interval_cancel();
					else if (t.options.positionTracker) {
						var i = t._repositionInfo(t.$elProxy),
							n = !1;
						o(i.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? o(i.position, t.elProxyPosition.position) && (n = !0) : o(i.offset, t.elProxyPosition.offset) && (n = !0)), n || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
					}
				}, 200)
			},
			_interval_cancel: function () {
				clearInterval(this.checkInterval), this.checkInterval = null
			},
			_content_set: function (e) {
				"object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
			},
			_content_insert: function () {
				var e = this,
					t = this.$tooltip.find(".tooltipster-content");
				"string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
			},
			_update: function (e) {
				var t = this;
				t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (s() ? (t.$tooltip.css({
					width: "",
					"-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					"-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					"-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					"-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
				}).addClass("tooltipster-content-changing"), setTimeout(function () {
					"hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function () {
						"hidden" !== t.Status && t.$tooltip.css({
							"-webkit-transition": t.options.speed + "ms",
							"-moz-transition": t.options.speed + "ms",
							"-o-transition": t.options.speed + "ms",
							"-ms-transition": t.options.speed + "ms",
							transition: t.options.speed + "ms"
						})
					}, t.options.speed))
				}, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function () {
					"hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
				}))) : t.hide()
			},
			_repositionInfo: function (e) {
				return {
					dimension: {
						height: e.outerHeight(!1),
						width: e.outerWidth(!1)
					},
					offset: e.offset(),
					position: {
						left: parseInt(e.css("left")),
						top: parseInt(e.css("top"))
					}
				}
			},
			hide: function (i) {
				var n = this;
				i && n.callbacks.hide.push(i), n.callbacks.show = [], clearTimeout(n.timerShow), n.timerShow = null, clearTimeout(n.timerHide), n.timerHide = null;
				var o = function () {
					e.each(n.callbacks.hide, function (e, t) {
						t.call(n.$el)
					}), n.callbacks.hide = []
				};
				if ("shown" == n.Status || "appearing" == n.Status) {
					n.Status = "disappearing";
					var r = function () {
						n.Status = "hidden", "object" == typeof n.Content && null !== n.Content && n.Content.detach(), n.$tooltip.remove(), n.$tooltip = null, e(t).off("." + n.namespace), e("body").off("." + n.namespace).css("overflow-x", n.bodyOverflowX), e("body").off("." + n.namespace), n.$elProxy.off("." + n.namespace + "-autoClose"), n.options.functionAfter.call(n.$el, n.$el), o()
					};
					s() ? (n.$tooltip.clearQueue().removeClass("tooltipster-" + n.options.animation + "-show").addClass("tooltipster-dying"), n.options.speed > 0 && n.$tooltip.delay(n.options.speed), n.$tooltip.queue(r)) : n.$tooltip.stop().fadeOut(n.options.speed, r)
				} else "hidden" == n.Status && o();
				return n
			},
			show: function (e) {
				return this._showNow(e), this
			},
			update: function (e) {
				return this.content(e)
			},
			content: function (e) {
				return "undefined" == typeof e ? this.Content : (this._update(e), this)
			},
			reposition: function () {
				function i() {
					var i = e(t).scrollLeft();
					0 > A - i && (r = A - i, A = i), A + l - i > s && (r = A - (s + i - l), A = s + i - l)
				}

				function n(i, n) {
					a.offset.top - e(t).scrollTop() - u - P - 12 < 0 && n.indexOf("top") > -1 && (D = i), a.offset.top + a.dimension.height + u + 12 + P > e(t).scrollTop() + e(t).height() && n.indexOf("bottom") > -1 && (D = i, L = a.offset.top - u - P - 12)
				}
				var o = this;
				if (0 !== e("body").find(o.$tooltip).length) {
					o.$tooltip.css("width", ""), o.elProxyPosition = o._repositionInfo(o.$elProxy);
					var r = null,
						s = e(t).width(),
						a = o.elProxyPosition,
						l = o.$tooltip.outerWidth(!1),
						u = (o.$tooltip.innerWidth() + 1, o.$tooltip.outerHeight(!1));
					if (o.$elProxy.is("area")) {
						var d = o.$elProxy.attr("shape"),
							c = o.$elProxy.parent().attr("name"),
							p = e('img[usemap="#' + c + '"]'),
							h = p.offset().left,
							f = p.offset().top,
							g = void 0 !== o.$elProxy.attr("coords") ? o.$elProxy.attr("coords").split(",") : void 0;
						if ("circle" == d) {
							var m = parseInt(g[0]),
								v = parseInt(g[1]),
								y = parseInt(g[2]);
							a.dimension.height = 2 * y, a.dimension.width = 2 * y, a.offset.top = f + v - y, a.offset.left = h + m - y
						} else if ("rect" == d) {
							var m = parseInt(g[0]),
								v = parseInt(g[1]),
								b = parseInt(g[2]),
								w = parseInt(g[3]);
							a.dimension.height = w - v, a.dimension.width = b - m, a.offset.top = f + v, a.offset.left = h + m
						} else if ("poly" == d) {
							for (var x = 0, T = 0, C = 0, S = 0, $ = "even", k = 0; k < g.length; k++) {
								var E = parseInt(g[k]);
								"even" == $ ? (E > C && (C = E, 0 === k && (x = C)), x > E && (x = E), $ = "odd") : (E > S && (S = E, 1 == k && (T = S)), T > E && (T = E), $ = "even")
							}
							a.dimension.height = S - T, a.dimension.width = C - x, a.offset.top = f + T, a.offset.left = h + x
						} else a.dimension.height = p.outerHeight(!1), a.dimension.width = p.outerWidth(!1), a.offset.top = f, a.offset.left = h
					}
					var A = 0,
						M = 0,
						L = 0,
						P = parseInt(o.options.offsetY),
						j = parseInt(o.options.offsetX),
						D = o.options.position;
					if ("top" == D) {
						var R = a.offset.left + l - (a.offset.left + a.dimension.width);
						A = a.offset.left + j - R / 2, L = a.offset.top - u - P - 12, i(), n("bottom", "top")
					}
					if ("top-left" == D && (A = a.offset.left + j, L = a.offset.top - u - P - 12, i(), n("bottom-left", "top-left")), "top-right" == D && (A = a.offset.left + a.dimension.width + j - l, L = a.offset.top - u - P - 12, i(), n("bottom-right", "top-right")), "bottom" == D) {
						var R = a.offset.left + l - (a.offset.left + a.dimension.width);
						A = a.offset.left - R / 2 + j, L = a.offset.top + a.dimension.height + P + 12, i(), n("top", "bottom")
					}
					if ("bottom-left" == D && (A = a.offset.left + j, L = a.offset.top + a.dimension.height + P + 12, i(), n("top-left", "bottom-left")), "bottom-right" == D && (A = a.offset.left + a.dimension.width + j - l, L = a.offset.top + a.dimension.height + P + 12, i(), n("top-right", "bottom-right")), "left" == D) {
						A = a.offset.left - j - l - 12, M = a.offset.left + j + a.dimension.width + 12;
						var I = a.offset.top + u - (a.offset.top + a.dimension.height);
						if (L = a.offset.top - I / 2 - P, 0 > A && M + l > s) {
							var N = 2 * parseFloat(o.$tooltip.css("border-width")),
								O = l + A - N;
							o.$tooltip.css("width", O + "px"), u = o.$tooltip.outerHeight(!1), A = a.offset.left - j - O - 12 - N, I = a.offset.top + u - (a.offset.top + a.dimension.height), L = a.offset.top - I / 2 - P
						} else 0 > A && (A = a.offset.left + j + a.dimension.width + 12, r = "left")
					}
					if ("right" == D) {
						A = a.offset.left + j + a.dimension.width + 12, M = a.offset.left - j - l - 12;
						var I = a.offset.top + u - (a.offset.top + a.dimension.height);
						if (L = a.offset.top - I / 2 - P, A + l > s && 0 > M) {
							var N = 2 * parseFloat(o.$tooltip.css("border-width")),
								O = s - A - N;
							o.$tooltip.css("width", O + "px"), u = o.$tooltip.outerHeight(!1), I = a.offset.top + u - (a.offset.top + a.dimension.height), L = a.offset.top - I / 2 - P
						} else A + l > s && (A = a.offset.left - j - l - 12, r = "right")
					}
					if (o.options.arrow) {
						var H = "tooltipster-arrow-" + D;
						if (o.options.arrowColor.length < 1) var q = o.$tooltip.css("background-color");
						else var q = o.options.arrowColor;
						if (r ? "left" == r ? (H = "tooltipster-arrow-right", r = "") : "right" == r ? (H = "tooltipster-arrow-left", r = "") : r = "left:" + Math.round(r) + "px;" : r = "", "top" == D || "top-left" == D || "top-right" == D) var z = parseFloat(o.$tooltip.css("border-bottom-width")),
							F = o.$tooltip.css("border-bottom-color");
						else if ("bottom" == D || "bottom-left" == D || "bottom-right" == D) var z = parseFloat(o.$tooltip.css("border-top-width")),
							F = o.$tooltip.css("border-top-color");
						else if ("left" == D) var z = parseFloat(o.$tooltip.css("border-right-width")),
							F = o.$tooltip.css("border-right-color");
						else if ("right" == D) var z = parseFloat(o.$tooltip.css("border-left-width")),
							F = o.$tooltip.css("border-left-color");
						else var z = parseFloat(o.$tooltip.css("border-bottom-width")),
							F = o.$tooltip.css("border-bottom-color");
						z > 1 && z++;
						var W = "";
						if (0 !== z) {
							var B = "",
								_ = "border-color: " + F + ";"; - 1 !== H.indexOf("bottom") ? B = "margin-top: -" + Math.round(z) + "px;" : -1 !== H.indexOf("top") ? B = "margin-bottom: -" + Math.round(z) + "px;" : -1 !== H.indexOf("left") ? B = "margin-right: -" + Math.round(z) + "px;" : -1 !== H.indexOf("right") && (B = "margin-left: -" + Math.round(z) + "px;"), W = '<span class="tooltipster-arrow-border" style="' + B + " " + _ + ';"></span>'
						}
						o.$tooltip.find(".tooltipster-arrow").remove();
						var G = '<div class="' + H + ' tooltipster-arrow" style="' + r + '">' + W + '<span style="border-color:' + q + ';"></span></div>';
						o.$tooltip.append(G)
					}
					o.$tooltip.css({
						top: Math.round(L) + "px",
						left: Math.round(A) + "px"
					})
				}
				return o
			},
			enable: function () {
				return this.enabled = !0, this
			},
			disable: function () {
				return this.hide(), this.enabled = !1, this
			},
			destroy: function () {
				var t = this;
				t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
				var i = t.$el.data("tooltipster-ns");
				if (1 === i.length) {
					var n = null;
					"previous" === t.options.restoration ? n = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (n = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), n && t.$el.attr("title", n), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
				} else i = e.grep(i, function (e, i) {
					return e !== t.namespace
				}), t.$el.data("tooltipster-ns", i);
				return t
			},
			elementIcon: function () {
				return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
			},
			elementTooltip: function () {
				return this.$tooltip ? this.$tooltip[0] : void 0
			},
			option: function (e, t) {
				return "undefined" == typeof t ? this.options[e] : (this.options[e] = t, this)
			},
			status: function () {
				return this.Status
			}
		}, e.fn[a] = function () {
			var t = arguments;
			if (0 === this.length) {
				if ("string" == typeof t[0]) {
					var i = !0;
					switch (t[0]) {
						case "setDefaults":
							e.extend(l, t[1]);
							break;
						default:
							i = !1
					}
					return i ? !0 : this
				}
				return this
			}
			if ("string" == typeof t[0]) {
				var o = "#*$~&";
				return this.each(function () {
					var i = e(this).data("tooltipster-ns"),
						n = i ? e(this).data(i[0]) : null;
					if (!n) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
					if ("function" != typeof n[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
					var r = n[t[0]](t[1], t[2]);
					return r !== n ? (o = r, !1) : void 0
				}), "#*$~&" !== o ? o : this
			}
			var r = [],
				s = t[0] && "undefined" != typeof t[0].multiple,
				a = s && t[0].multiple || !s && l.multiple,
				u = t[0] && "undefined" != typeof t[0].debug,
				d = u && t[0].debug || !u && l.debug;
			return this.each(function () {
				var i = !1,
					o = e(this).data("tooltipster-ns"),
					s = null;
				o ? a ? i = !0 : d && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : i = !0, i && (s = new n(this, t[0]), o || (o = []), o.push(s.namespace), e(this).data("tooltipster-ns", o), e(this).data(s.namespace, s)), r.push(s)
			}), a ? r : this
		};
		var u = !!("ontouchstart" in t),
			d = !1;
		e("body").one("mousemove", function () {
			d = !0
		})
	}(jQuery, window, document);