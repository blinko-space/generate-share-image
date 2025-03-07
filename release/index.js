var Un = Object.defineProperty;
var Hn = (e, t, n) => t in e ? Un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ye = (e, t, n) => (Hn(e, typeof t != "symbol" ? t + "" : t, n), n);
var Me, P, Qt, Xt, me, vt, Jt, Kt, Yt, lt, rt, ut, en, Pe = {}, tn = [], Ln = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Qe = Array.isArray;
function fe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function st(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ee(e, t, n) {
  var u, a, o, c = {};
  for (o in t)
    o == "key" ? u = t[o] : o == "ref" ? a = t[o] : c[o] = t[o];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? Me.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      c[o] === void 0 && (c[o] = e.defaultProps[o]);
  return ze(e, c, u, a, null);
}
function ze(e, t, n, u, a) {
  var o = { type: e, props: t, key: n, ref: u, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Qt, __i: -1, __u: 0 };
  return a == null && P.vnode != null && P.vnode(o), o;
}
function jn() {
  return { current: null };
}
function de(e) {
  return e.children;
}
function ue(e, t) {
  this.props = e, this.context = t;
}
function xe(e, t) {
  if (t == null)
    return e.__ ? xe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xe(e) : null;
}
function nn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nn(e);
  }
}
function it(e) {
  (!e.__d && (e.__d = !0) && me.push(e) && !qe.__r++ || vt !== P.debounceRendering) && ((vt = P.debounceRendering) || Jt)(qe);
}
function qe() {
  for (var e, t, n, u, a, o, c, g = 1; me.length; )
    me.length > g && me.sort(Kt), e = me.shift(), g = me.length, e.__d && (n = void 0, a = (u = (t = e).__v).__e, o = [], c = [], t.__P && ((n = fe({}, u)).__v = u.__v + 1, P.vnode && P.vnode(n), ct(t.__P, n, u, t.__n, t.__P.namespaceURI, 32 & u.__u ? [a] : null, o, a ?? xe(u), !!(32 & u.__u), c), n.__v = u.__v, n.__.__k[n.__i] = n, on(o, n, c), n.__e != a && nn(n)));
  qe.__r = 0;
}
function rn(e, t, n, u, a, o, c, g, D, _, E) {
  var m, z, x, N, M, U, A = u && u.__k || tn, I = t.length;
  for (D = Wn(n, t, A, D, I), m = 0; m < I; m++)
    (x = n.__k[m]) != null && (z = x.__i === -1 ? Pe : A[x.__i] || Pe, x.__i = m, U = ct(e, x, z, a, o, c, g, D, _, E), N = x.__e, x.ref && z.ref != x.ref && (z.ref && ft(z.ref, null, x), E.push(x.ref, x.__c || N, x)), M == null && N != null && (M = N), 4 & x.__u || z.__k === x.__k ? D = un(x, D, e) : typeof x.type == "function" && U !== void 0 ? D = U : N && (D = N.nextSibling), x.__u &= -7);
  return n.__e = M, D;
}
function Wn(e, t, n, u, a) {
  var o, c, g, D, _, E = n.length, m = E, z = 0;
  for (e.__k = new Array(a), o = 0; o < a; o++)
    (c = t[o]) != null && typeof c != "boolean" && typeof c != "function" ? (D = o + z, (c = e.__k[o] = typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? ze(null, c, null, null, null) : Qe(c) ? ze(de, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? ze(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c).__ = e, c.__b = e.__b + 1, g = null, (_ = c.__i = qn(c, n, D, m)) !== -1 && (m--, (g = n[_]) && (g.__u |= 2)), g == null || g.__v === null ? (_ == -1 && z--, typeof c.type != "function" && (c.__u |= 4)) : _ != D && (_ == D - 1 ? z-- : _ == D + 1 ? z++ : (_ > D ? z-- : z++, c.__u |= 4))) : e.__k[o] = null;
  if (m)
    for (o = 0; o < E; o++)
      (g = n[o]) != null && !(2 & g.__u) && (g.__e == u && (u = xe(g)), an(g, g));
  return u;
}
function un(e, t, n) {
  var u, a;
  if (typeof e.type == "function") {
    for (u = e.__k, a = 0; u && a < u.length; a++)
      u[a] && (u[a].__ = e, t = un(u[a], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = xe(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ie(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Qe(e) ? e.some(function(n) {
    Ie(n, t);
  }) : t.push(e)), t;
}
function qn(e, t, n, u) {
  var a, o, c = e.key, g = e.type, D = t[n];
  if (D === null || D && c == D.key && g === D.type && !(2 & D.__u))
    return n;
  if (u > (D != null && !(2 & D.__u) ? 1 : 0))
    for (a = n - 1, o = n + 1; a >= 0 || o < t.length; ) {
      if (a >= 0) {
        if ((D = t[a]) && !(2 & D.__u) && c == D.key && g === D.type)
          return a;
        a--;
      }
      if (o < t.length) {
        if ((D = t[o]) && !(2 & D.__u) && c == D.key && g === D.type)
          return o;
        o++;
      }
    }
  return -1;
}
function wt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Ln.test(t) ? n : n + "px";
}
function He(e, t, n, u, a) {
  var o;
  e:
    if (t == "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof u == "string" && (e.style.cssText = u = ""), u)
          for (t in u)
            n && t in n || wt(e.style, t, "");
        if (n)
          for (t in n)
            u && n[t] === u[t] || wt(e.style, t, n[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      o = t != (t = t.replace(Yt, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? u ? n.t = u.t : (n.t = lt, e.addEventListener(t, o ? ut : rt, o)) : e.removeEventListener(t, o ? ut : rt, o);
    else {
      if (a == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
    }
}
function bt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.u == null)
        t.u = lt++;
      else if (t.u < n.t)
        return;
      return n(P.event ? P.event(t) : t);
    }
  };
}
function ct(e, t, n, u, a, o, c, g, D, _) {
  var E, m, z, x, N, M, U, A, I, q, X, O, le, ne, ie, ee, re, V = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (D = !!(32 & n.__u), o = [g = t.__e = n.__e]), (E = P.__b) && E(t);
  e:
    if (typeof V == "function")
      try {
        if (A = t.props, I = "prototype" in V && V.prototype.render, q = (E = V.contextType) && u[E.__c], X = E ? q ? q.props.value : E.__ : u, n.__c ? U = (m = t.__c = n.__c).__ = m.__E : (I ? t.__c = m = new V(A, X) : (t.__c = m = new ue(A, X), m.constructor = V, m.render = Zn), q && q.sub(m), m.props = A, m.state || (m.state = {}), m.context = X, m.__n = u, z = m.__d = !0, m.__h = [], m._sb = []), I && m.__s == null && (m.__s = m.state), I && V.getDerivedStateFromProps != null && (m.__s == m.state && (m.__s = fe({}, m.__s)), fe(m.__s, V.getDerivedStateFromProps(A, m.__s))), x = m.props, N = m.state, m.__v = t, z)
          I && V.getDerivedStateFromProps == null && m.componentWillMount != null && m.componentWillMount(), I && m.componentDidMount != null && m.__h.push(m.componentDidMount);
        else {
          if (I && V.getDerivedStateFromProps == null && A !== x && m.componentWillReceiveProps != null && m.componentWillReceiveProps(A, X), !m.__e && (m.shouldComponentUpdate != null && m.shouldComponentUpdate(A, m.__s, X) === !1 || t.__v == n.__v)) {
            for (t.__v != n.__v && (m.props = A, m.state = m.__s, m.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(G) {
              G && (G.__ = t);
            }), O = 0; O < m._sb.length; O++)
              m.__h.push(m._sb[O]);
            m._sb = [], m.__h.length && c.push(m);
            break e;
          }
          m.componentWillUpdate != null && m.componentWillUpdate(A, m.__s, X), I && m.componentDidUpdate != null && m.__h.push(function() {
            m.componentDidUpdate(x, N, M);
          });
        }
        if (m.context = X, m.props = A, m.__P = e, m.__e = !1, le = P.__r, ne = 0, I) {
          for (m.state = m.__s, m.__d = !1, le && le(t), E = m.render(m.props, m.state, m.context), ie = 0; ie < m._sb.length; ie++)
            m.__h.push(m._sb[ie]);
          m._sb = [];
        } else
          do
            m.__d = !1, le && le(t), E = m.render(m.props, m.state, m.context), m.state = m.__s;
          while (m.__d && ++ne < 25);
        m.state = m.__s, m.getChildContext != null && (u = fe(fe({}, u), m.getChildContext())), I && !z && m.getSnapshotBeforeUpdate != null && (M = m.getSnapshotBeforeUpdate(x, N)), g = rn(e, Qe(ee = E != null && E.type === de && E.key == null ? E.props.children : E) ? ee : [ee], t, n, u, a, o, c, g, D, _), m.base = t.__e, t.__u &= -161, m.__h.length && c.push(m), U && (m.__E = m.__ = null);
      } catch (G) {
        if (t.__v = null, D || o != null)
          if (G.then) {
            for (t.__u |= D ? 160 : 128; g && g.nodeType == 8 && g.nextSibling; )
              g = g.nextSibling;
            o[o.indexOf(g)] = null, t.__e = g;
          } else
            for (re = o.length; re--; )
              st(o[re]);
        else
          t.__e = n.__e, t.__k = n.__k;
        P.__e(G, t, n);
      }
    else
      o == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : g = t.__e = Vn(n.__e, t, n, u, a, o, c, D, _);
  return (E = P.diffed) && E(t), 128 & t.__u ? void 0 : g;
}
function on(e, t, n) {
  for (var u = 0; u < n.length; u++)
    ft(n[u], n[++u], n[++u]);
  P.__c && P.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      P.__e(o, a.__v);
    }
  });
}
function Vn(e, t, n, u, a, o, c, g, D) {
  var _, E, m, z, x, N, M, U = n.props, A = t.props, I = t.type;
  if (I == "svg" ? a = "http://www.w3.org/2000/svg" : I == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (_ = 0; _ < o.length; _++)
      if ((x = o[_]) && "setAttribute" in x == !!I && (I ? x.localName == I : x.nodeType == 3)) {
        e = x, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (I == null)
      return document.createTextNode(A);
    e = document.createElementNS(a, I, A.is && A), g && (P.__m && P.__m(t, o), g = !1), o = null;
  }
  if (I === null)
    U === A || g && e.data === A || (e.data = A);
  else {
    if (o = o && Me.call(e.childNodes), U = n.props || Pe, !g && o != null)
      for (U = {}, _ = 0; _ < e.attributes.length; _++)
        U[(x = e.attributes[_]).name] = x.value;
    for (_ in U)
      if (x = U[_], _ != "children") {
        if (_ == "dangerouslySetInnerHTML")
          m = x;
        else if (!(_ in A)) {
          if (_ == "value" && "defaultValue" in A || _ == "checked" && "defaultChecked" in A)
            continue;
          He(e, _, null, x, a);
        }
      }
    for (_ in A)
      x = A[_], _ == "children" ? z = x : _ == "dangerouslySetInnerHTML" ? E = x : _ == "value" ? N = x : _ == "checked" ? M = x : g && typeof x != "function" || U[_] === x || He(e, _, x, U[_], a);
    if (E)
      g || m && (E.__html === m.__html || E.__html === e.innerHTML) || (e.innerHTML = E.__html), t.__k = [];
    else if (m && (e.innerHTML = ""), rn(t.type === "template" ? e.content : e, Qe(z) ? z : [z], t, n, u, I == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, c, o ? o[0] : n.__k && xe(n, 0), g, D), o != null)
      for (_ = o.length; _--; )
        st(o[_]);
    g || (_ = "value", I == "progress" && N == null ? e.removeAttribute("value") : N !== void 0 && (N !== e[_] || I == "progress" && !N || I == "option" && N !== U[_]) && He(e, _, N, U[_], a), _ = "checked", M !== void 0 && M !== e[_] && He(e, _, M, U[_], a));
  }
  return e;
}
function ft(e, t, n) {
  try {
    if (typeof e == "function") {
      var u = typeof e.__u == "function";
      u && e.__u(), u && t == null || (e.__u = e(t));
    } else
      e.current = t;
  } catch (a) {
    P.__e(a, n);
  }
}
function an(e, t, n) {
  var u, a;
  if (P.unmount && P.unmount(e), (u = e.ref) && (u.current && u.current !== e.__e || ft(u, null, t)), (u = e.__c) != null) {
    if (u.componentWillUnmount)
      try {
        u.componentWillUnmount();
      } catch (o) {
        P.__e(o, t);
      }
    u.base = u.__P = null;
  }
  if (u = e.__k)
    for (a = 0; a < u.length; a++)
      u[a] && an(u[a], t, n || typeof e.type != "function");
  n || st(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Zn(e, t, n) {
  return this.constructor(e, n);
}
function ht(e, t, n) {
  var u, a, o, c;
  t == document && (t = document.documentElement), P.__ && P.__(e, t), a = (u = typeof n == "function") ? null : n && n.__k || t.__k, o = [], c = [], ct(t, e = (!u && n || t).__k = Ee(de, null, [e]), a || Pe, Pe, t.namespaceURI, !u && n ? [n] : a ? null : t.firstChild ? Me.call(t.childNodes) : null, o, !u && n ? n : a ? a.__e : t.firstChild, u, c), on(o, e, c);
}
function ln(e, t) {
  ht(e, t, ln);
}
function Gn(e, t, n) {
  var u, a, o, c, g = fe({}, e.props);
  for (o in e.type && e.type.defaultProps && (c = e.type.defaultProps), t)
    o == "key" ? u = t[o] : o == "ref" ? a = t[o] : g[o] = t[o] === void 0 && c !== void 0 ? c[o] : t[o];
  return arguments.length > 2 && (g.children = arguments.length > 3 ? Me.call(arguments, 2) : n), ze(e.type, g, u || e.key, a || e.ref, null);
}
function Qn(e) {
  function t(n) {
    var u, a;
    return this.getChildContext || (u = /* @__PURE__ */ new Set(), (a = {})[t.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      u = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && u.forEach(function(c) {
        c.__e = !0, it(c);
      });
    }, this.sub = function(o) {
      u.add(o);
      var c = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        u && u.delete(o), c && c.call(o);
      };
    }), n.children;
  }
  return t.__c = "__cC" + en++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, u) {
    return n.children(u);
  }).contextType = t, t;
}
Me = tn.slice, P = { __e: function(e, t, n, u) {
  for (var a, o, c; t = t.__; )
    if ((a = t.__c) && !a.__)
      try {
        if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(e)), c = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, u || {}), c = a.__d), c)
          return a.__E = a;
      } catch (g) {
        e = g;
      }
  throw e;
} }, Qt = 0, Xt = function(e) {
  return e != null && e.constructor == null;
}, ue.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = fe({}, this.state), typeof e == "function" && (e = e(fe({}, n), this.props)), e && fe(n, e), e != null && this.__v && (t && this._sb.push(t), it(this));
}, ue.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), it(this));
}, ue.prototype.render = de, me = [], Jt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Kt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, qe.__r = 0, Yt = /(PointerCapture)$|Capture$/i, lt = 0, rt = bt(!1), ut = bt(!0), en = 0;
const Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: ue,
  Fragment: de,
  cloneElement: Gn,
  createContext: Qn,
  createElement: Ee,
  createRef: jn,
  h: Ee,
  hydrate: ln,
  get isValidElement() {
    return Xt;
  },
  get options() {
    return P;
  },
  render: ht,
  toChildArray: Ie
}, Symbol.toStringTag, { value: "Module" }));
var Jn = 0;
function $(e, t, n, u, a, o) {
  t || (t = {});
  var c, g, D = t;
  if ("ref" in D)
    for (g in D = {}, t)
      g == "ref" ? c = t[g] : D[g] = t[g];
  var _ = { type: e, props: D, key: n, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Jn, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof e == "function" && (c = e.defaultProps))
    for (g in c)
      D[g] === void 0 && (D[g] = c[g]);
  return P.vnode && P.vnode(_), _;
}
var Oe, j, et, Ct, Ve = 0, sn = [], W = P, yt = W.__b, kt = W.__r, Ft = W.diffed, Et = W.__c, xt = W.unmount, At = W.__;
function pt(e, t) {
  W.__h && W.__h(j, e, Ve || t), Ve = 0;
  var n = j.__H || (j.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function ae(e) {
  return Ve = 1, Kn(fn, e);
}
function Kn(e, t, n) {
  var u = pt(Oe++, 2);
  if (u.t = e, !u.__c && (u.__ = [n ? n(t) : fn(void 0, t), function(g) {
    var D = u.__N ? u.__N[0] : u.__[0], _ = u.t(D, g);
    D !== _ && (u.__N = [_, u.__[1]], u.__c.setState({}));
  }], u.__c = j, !j.__f)) {
    var a = function(g, D, _) {
      if (!u.__c.__H)
        return !0;
      var E = u.__c.__H.__.filter(function(z) {
        return !!z.__c;
      });
      if (E.every(function(z) {
        return !z.__N;
      }))
        return !o || o.call(this, g, D, _);
      var m = u.__c.props !== g;
      return E.forEach(function(z) {
        if (z.__N) {
          var x = z.__[0];
          z.__ = z.__N, z.__N = void 0, x !== z.__[0] && (m = !0);
        }
      }), o && o.call(this, g, D, _) || m;
    };
    j.__f = !0;
    var o = j.shouldComponentUpdate, c = j.componentWillUpdate;
    j.componentWillUpdate = function(g, D, _) {
      if (this.__e) {
        var E = o;
        o = void 0, a(g, D, _), o = E;
      }
      c && c.call(this, g, D, _);
    }, j.shouldComponentUpdate = a;
  }
  return u.__N || u.__;
}
function Fe(e, t) {
  var n = pt(Oe++, 3);
  !W.__s && cn(n.__H, t) && (n.__ = e, n.u = t, j.__H.__h.push(n));
}
function Yn(e) {
  return Ve = 5, er(function() {
    return { current: e };
  }, []);
}
function er(e, t) {
  var n = pt(Oe++, 7);
  return cn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function tr() {
  for (var e; e = sn.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(je), e.__H.__h.forEach(ot), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], W.__e(t, e.__v);
      }
}
W.__b = function(e) {
  j = null, yt && yt(e);
}, W.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), At && At(e, t);
}, W.__r = function(e) {
  kt && kt(e), Oe = 0;
  var t = (j = e.__c).__H;
  t && (et === j ? (t.__h = [], j.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(je), t.__h.forEach(ot), t.__h = [], Oe = 0)), et = j;
}, W.diffed = function(e) {
  Ft && Ft(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (sn.push(t) !== 1 && Ct === W.requestAnimationFrame || ((Ct = W.requestAnimationFrame) || nr)(tr)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), et = j = null;
}, W.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(je), n.__h = n.__h.filter(function(u) {
        return !u.__ || ot(u);
      });
    } catch (u) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], W.__e(u, n.__v);
    }
  }), Et && Et(e, t);
}, W.unmount = function(e) {
  xt && xt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(u) {
    try {
      je(u);
    } catch (a) {
      t = a;
    }
  }), n.__H = void 0, t && W.__e(t, n.__v));
};
var Bt = typeof requestAnimationFrame == "function";
function nr(e) {
  var t, n = function() {
    clearTimeout(u), Bt && cancelAnimationFrame(t), setTimeout(e);
  }, u = setTimeout(n, 100);
  Bt && (t = requestAnimationFrame(n));
}
function je(e) {
  var t = j, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), j = t;
}
function ot(e) {
  var t = j;
  e.__c = e.__(), j = t;
}
function cn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, u) {
    return n !== e[u];
  });
}
function fn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rr(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function St(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var u in t)
    if (u !== "__source" && e[u] !== t[u])
      return !0;
  return !1;
}
function $t(e, t) {
  this.props = e, this.context = t;
}
($t.prototype = new ue()).isPureReactComponent = !0, $t.prototype.shouldComponentUpdate = function(e, t) {
  return St(this.props, e) || St(this.state, t);
};
var Tt = P.__b;
P.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Tt && Tt(e);
};
var ur = P.__e;
P.__e = function(e, t, n, u) {
  if (e.then) {
    for (var a, o = t; o = o.__; )
      if ((a = o.__c) && a.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), a.__c(e, t);
  }
  ur(e, t, n, u);
};
var Rt = P.unmount;
function hn(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(u) {
    typeof u.__c == "function" && u.__c();
  }), e.__c.__H = null), (e = rr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(u) {
    return hn(u, t, n);
  })), e;
}
function pn(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(u) {
    return pn(u, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function tt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function dn(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Le() {
  this.i = null, this.l = null;
}
P.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Rt && Rt(e);
}, (tt.prototype = new ue()).__c = function(e, t) {
  var n = t.__c, u = this;
  u.o == null && (u.o = []), u.o.push(n);
  var a = dn(u.__v), o = !1, c = function() {
    o || (o = !0, n.__R = null, a ? a(g) : g());
  };
  n.__R = c;
  var g = function() {
    if (!--u.__u) {
      if (u.state.__a) {
        var D = u.state.__a;
        u.__v.__k[0] = pn(D, D.__c.__P, D.__c.__O);
      }
      var _;
      for (u.setState({ __a: u.__b = null }); _ = u.o.pop(); )
        _.forceUpdate();
    }
  };
  u.__u++ || 32 & t.__u || u.setState({ __a: u.__b = u.__v.__k[0] }), e.then(c, c);
}, tt.prototype.componentWillUnmount = function() {
  this.o = [];
}, tt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), u = this.__v.__k[0].__c;
      this.__v.__k[0] = hn(this.__b, n, u.__O = u.__P);
    }
    this.__b = null;
  }
  var a = t.__a && Ee(de, null, e.fallback);
  return a && (a.__u &= -33), [Ee(de, null, t.__a ? null : e.children), a];
};
var zt = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    for (n = e.i; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.i = n = n[2];
    }
};
(Le.prototype = new ue()).__a = function(e) {
  var t = this, n = dn(t.__v), u = t.l.get(e);
  return u[0]++, function(a) {
    var o = function() {
      t.props.revealOrder ? (u.push(a), zt(t, e, u)) : a();
    };
    n ? n(o) : o();
  };
}, Le.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = Ie(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Le.prototype.componentDidUpdate = Le.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    zt(e, n, t);
  });
};
var ir = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, or = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ar = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, lr = /[A-Z0-9]/g, sr = typeof document < "u", cr = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Pt(e, t, n) {
  return t.__k == null && (t.textContent = ""), ht(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
ue.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(ue.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var It = P.event;
function fr() {
}
function hr() {
  return this.cancelBubble;
}
function pr() {
  return this.defaultPrevented;
}
P.event = function(e) {
  return It && (e = It(e)), e.persist = fr, e.isPropagationStopped = hr, e.isDefaultPrevented = pr, e.nativeEvent = e;
};
var dr = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ot = P.vnode;
P.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, u = t.type, a = {}, o = u.indexOf("-") === -1;
    for (var c in n) {
      var g = n[c];
      if (!(c === "value" && "defaultValue" in n && g == null || sr && c === "children" && u === "noscript" || c === "class" || c === "className")) {
        var D = c.toLowerCase();
        c === "defaultValue" && "value" in n && n.value == null ? c = "value" : c === "download" && g === !0 ? g = "" : D === "translate" && g === "no" ? g = !1 : D[0] === "o" && D[1] === "n" ? D === "ondoubleclick" ? c = "ondblclick" : D !== "onchange" || u !== "input" && u !== "textarea" || cr(n.type) ? D === "onfocus" ? c = "onfocusin" : D === "onblur" ? c = "onfocusout" : ar.test(c) && (c = D) : D = c = "oninput" : o && or.test(c) ? c = c.replace(lr, "-$&").toLowerCase() : g === null && (g = void 0), D === "oninput" && a[c = D] && (c = "oninputCapture"), a[c] = g;
      }
    }
    u == "select" && a.multiple && Array.isArray(a.value) && (a.value = Ie(n.children).forEach(function(_) {
      _.props.selected = a.value.indexOf(_.props.value) != -1;
    })), u == "select" && a.defaultValue != null && (a.value = Ie(n.children).forEach(function(_) {
      _.props.selected = a.multiple ? a.defaultValue.indexOf(_.props.value) != -1 : a.defaultValue == _.props.value;
    })), n.class && !n.className ? (a.class = n.class, Object.defineProperty(a, "className", dr)) : (n.className && !n.class || n.class && n.className) && (a.class = a.className = n.className), t.props = a;
  }(e), e.$$typeof = ir, Ot && Ot(e);
};
var Mt = P.__r;
P.__r = function(e) {
  Mt && Mt(e), e.__c;
};
var Nt = P.diffed;
P.diffed = function(e) {
  Nt && Nt(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
const gn = [
  {
    id: "dark",
    name: "深色模式",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
    dateColor: "#a0aec0",
    tagBackgroundColor: "#2d3748",
    tagTextColor: "#e2e8f0",
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: "15px",
    accentColor: "#3b82f6"
  },
  {
    id: "light",
    name: "浅色模式",
    backgroundColor: "#ffffff",
    textColor: "#1a1a1a",
    dateColor: "#4a5568",
    tagBackgroundColor: "#edf2f7",
    tagTextColor: "#2d3748",
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: "15px",
    accentColor: "#3b82f6"
  },
  {
    id: "sepia",
    name: "复古风格",
    backgroundColor: "#f8f2e4",
    textColor: "#433422",
    dateColor: "#8c7851",
    tagBackgroundColor: "#e6d7c3",
    tagTextColor: "#5c4935",
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
    borderRadius: "10px",
    accentColor: "#c59d5f"
  },
  {
    id: "ocean",
    name: "海洋风格",
    backgroundColor: "#e0f7fa",
    textColor: "#006064",
    dateColor: "#0097a7",
    tagBackgroundColor: "#b2ebf2",
    tagTextColor: "#00838f",
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: "20px",
    accentColor: "#00acc1"
  },
  {
    id: "forest",
    name: "森林风格",
    backgroundColor: "#e8f5e9",
    textColor: "#1b5e20",
    dateColor: "#388e3c",
    tagBackgroundColor: "#c8e6c9",
    tagTextColor: "#2e7d32",
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: "12px",
    accentColor: "#43a047"
  }
];
function gr({
  selectedTemplate: e,
  onSelectTemplate: t,
  className: n = "",
  children: u
}) {
  const [a, o] = ae(!1);
  return Fe(() => {
    const c = () => {
      const g = window.innerWidth;
      o(g <= 768);
    };
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []), /* @__PURE__ */ $("div", { className: `${n} w-full overflow-x-auto`, children: [
    /* @__PURE__ */ $("div", { className: "flex justify-center", children: /* @__PURE__ */ $(
      "div",
      {
        className: `flex ${a ? "gap-3" : "gap-4"}`,
        style: {
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          padding: "10px",
          scrollbarWidth: "thin",
          msOverflowStyle: "none"
        },
        children: gn.map((c) => /* @__PURE__ */ $(
          mr,
          {
            template: c,
            isSelected: e.id === c.id,
            onClick: () => t(c),
            isMobile: a
          },
          c.id
        ))
      }
    ) }),
    u
  ] });
}
function mr({
  template: e,
  isSelected: t,
  onClick: n,
  isMobile: u
}) {
  const a = u ? 68 : 90, o = u ? 24 : 30;
  return /* @__PURE__ */ $(
    "div",
    {
      className: `flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out select-none ${t ? "transform scale-105" : "hover:scale-105"}`,
      onClick: n,
      style: {
        marginBottom: u ? "4px" : "8px",
        minWidth: `${a}px`
      },
      children: [
        /* @__PURE__ */ $(
          "div",
          {
            className: "relative mb-1 md:mb-2 overflow-hidden",
            style: {
              width: `${a}px`,
              height: `${a}px`,
              borderRadius: "12px",
              boxShadow: t ? `0 0 0 2px ${e.accentColor || "#3b82f6"}, 0 4px 12px rgba(0, 0, 0, 0.15)` : "0 2px 6px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease-in-out",
              transform: t ? "translateY(-2px)" : "translateY(0)"
            },
            children: [
              t && /* @__PURE__ */ $(
                "div",
                {
                  className: "absolute top-2 right-2 z-10 rounded-full flex items-center justify-center",
                  style: {
                    width: "20px",
                    height: "20px",
                    backgroundColor: "white",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                  },
                  children: /* @__PURE__ */ $(
                    "svg",
                    {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ $(
                        "path",
                        {
                          d: "M20 6L9 17L4 12",
                          stroke: e.accentColor || "#3b82f6",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ $(
                "div",
                {
                  className: "w-full rounded-t-xl",
                  style: {
                    backgroundColor: e.backgroundColor,
                    height: `${o}px`,
                    borderBottom: "1px solid rgba(0,0,0,0.05)"
                  }
                }
              ),
              /* @__PURE__ */ $(
                "div",
                {
                  className: "w-full h-full p-2",
                  style: {
                    backgroundColor: "#f8f9fa"
                  },
                  children: /* @__PURE__ */ $("div", { className: "flex flex-col gap-1.5 mt-0.5", children: [
                    /* @__PURE__ */ $(
                      "div",
                      {
                        className: "h-1.5 rounded-sm",
                        style: {
                          backgroundColor: e.textColor,
                          width: "90%",
                          opacity: 0.9
                        }
                      }
                    ),
                    /* @__PURE__ */ $(
                      "div",
                      {
                        className: "h-1 rounded-sm",
                        style: {
                          backgroundColor: e.textColor,
                          width: "80%",
                          opacity: 0.7
                        }
                      }
                    ),
                    /* @__PURE__ */ $(
                      "div",
                      {
                        className: "h-1 rounded-sm",
                        style: {
                          backgroundColor: e.textColor,
                          width: "85%",
                          opacity: 0.7
                        }
                      }
                    ),
                    /* @__PURE__ */ $("div", { className: "flex gap-1 mt-1", children: [
                      /* @__PURE__ */ $(
                        "div",
                        {
                          className: "h-1.5 rounded-full",
                          style: {
                            backgroundColor: e.tagBackgroundColor,
                            width: "24%"
                          }
                        }
                      ),
                      /* @__PURE__ */ $(
                        "div",
                        {
                          className: "h-1.5 rounded-full",
                          style: {
                            backgroundColor: e.tagBackgroundColor,
                            width: "18%"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ $(
                      "div",
                      {
                        className: "h-1 rounded-sm self-end mt-0.5",
                        style: {
                          backgroundColor: e.dateColor,
                          width: "30%",
                          opacity: 0.8
                        }
                      }
                    )
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ $(
          "span",
          {
            className: `text-xs md:text-sm font-medium text-center transition-colors duration-200 px-1 py-0.5 rounded ${t ? "bg-gray-100 text-gray-800" : "text-gray-600"}`,
            style: {
              maxWidth: `${a}px`,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            children: e.name
          }
        )
      ]
    }
  );
}
function Dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function mn(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function u() {
      return this instanceof u ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(u) {
    var a = Object.getOwnPropertyDescriptor(e, u);
    Object.defineProperty(n, u, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[u];
      }
    });
  }), n;
}
const _r = /* @__PURE__ */ mn(Xn);
var Ut, vr = {};
function Y(e, t, n) {
  if (e.nodeType === 3) {
    var u = "textContent" in e ? e.textContent : e.nodeValue || "";
    if (Y.options.trim !== !1) {
      var a = t === 0 || t === n.length - 1;
      if ((!(u = u.match(/^[\s\n]+$/g) && Y.options.trim !== "all" ? " " : u.replace(/(^[\s\n]+|[\s\n]+$)/g, Y.options.trim === "all" || a ? "" : " ")) || u === " ") && n.length > 1 && a)
        return null;
    }
    return u;
  }
  if (e.nodeType !== 1)
    return null;
  var o = String(e.nodeName).toLowerCase();
  if (o === "script" && !Y.options.allowScripts)
    return null;
  var c, g, D = Y.h(o, function(_) {
    var E = _ && _.length;
    if (!E)
      return null;
    for (var m = {}, z = 0; z < E; z++) {
      var x = _[z], N = x.name, M = x.value;
      N.substring(0, 2) === "on" && Y.options.allowEvents && (M = new Function(M)), m[N] = M;
    }
    return m;
  }(e.attributes), (g = (c = e.childNodes) && Array.prototype.map.call(c, Y).filter(wr)) && g.length ? g : null);
  return Y.visitor && Y.visitor(D), D;
}
var Ht, wr = function(e) {
  return e;
}, br = {};
function We(e) {
  var t = (e.type || "").toLowerCase(), n = We.map;
  n && n.hasOwnProperty(t) ? (e.type = n[t], e.props = Object.keys(e.props || {}).reduce(function(u, a) {
    var o;
    return u[o = a, o.replace(/-(.)/g, function(c, g) {
      return g.toUpperCase();
    })] = e.props[a], u;
  }, {})) : e.type = t.replace(/[^a-z0-9-]/i, "");
}
const Cr = function(e) {
  function t() {
    e.apply(this, arguments);
  }
  return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.setReviver = function(n) {
    Ht = n;
  }, t.prototype.shouldComponentUpdate = function(n) {
    var u = this.props;
    return n.wrap !== u.wrap || n.type !== u.type || n.markup !== u.markup;
  }, t.prototype.setComponents = function(n) {
    if (this.map = {}, n) {
      for (var u in n)
        if (n.hasOwnProperty(u)) {
          var a = u.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
          this.map[a] = n[u];
        }
    }
  }, t.prototype.render = function(n) {
    var u = n.wrap;
    u === void 0 && (u = !0);
    var a, o = n.type, c = n.markup, g = n.components, D = n.reviver, _ = n.onError, E = n["allow-scripts"], m = n["allow-events"], z = n.trim, x = function(I, q) {
      var X = {};
      for (var O in I)
        Object.prototype.hasOwnProperty.call(I, O) && q.indexOf(O) === -1 && (X[O] = I[O]);
      return X;
    }(n, ["wrap", "type", "markup", "components", "reviver", "onError", "allow-scripts", "allow-events", "trim"]), N = D || this.reviver || this.constructor.prototype.reviver || Ht || Ee;
    this.setComponents(g);
    var M = { allowScripts: E, allowEvents: m, trim: z };
    try {
      a = function(I, q, X, O, le) {
        var ne = function(re, V) {
          var G, De, se, _e, ve = V === "html" ? "text/html" : "application/xml";
          V === "html" ? (_e = "body", se = `<!DOCTYPE html>
<html><body>` + re + "</body></html>") : (_e = "xml", se = `<?xml version="1.0" encoding="UTF-8"?>
<xml>` + re + "</xml>");
          try {
            G = new DOMParser().parseFromString(se, ve);
          } catch (ce) {
            De = ce;
          }
          if (G || V !== "html" || ((G = Ut || (Ut = function() {
            if (document.implementation && document.implementation.createHTMLDocument)
              return document.implementation.createHTMLDocument("");
            var ce = document.createElement("iframe");
            return ce.style.cssText = "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;", ce.setAttribute("sandbox", "allow-forms"), document.body.appendChild(ce), ce.contentWindow.document;
          }())).open(), G.write(se), G.close()), G) {
            var ge = G.getElementsByTagName(_e)[0], te = ge.firstChild;
            return re && !te && (ge.error = "Document parse failed."), te && String(te.nodeName).toLowerCase() === "parsererror" && (te.removeChild(te.firstChild), te.removeChild(te.lastChild), ge.error = te.textContent || te.nodeValue || De || "Unknown error", ge.removeChild(te)), ge;
          }
        }(I, q);
        if (ne && ne.error)
          throw new Error(ne.error);
        var ie = ne && ne.body || ne;
        We.map = O || br;
        var ee = ie && function(re, V, G, De) {
          return Y.visitor = V, Y.h = G, Y.options = De || vr, Y(re);
        }(ie, We, X, le);
        return We.map = null, ee && ee.props && ee.props.children || null;
      }(c, o, N, this.map, M);
    } catch (I) {
      _ ? _({ error: I }) : typeof console < "u" && console.error && console.error("preact-markup: " + I);
    }
    if (u === !1)
      return a || null;
    var U = x.hasOwnProperty("className") ? "className" : "class", A = x[U];
    return A ? A.splice ? A.splice(0, 0, "markup") : typeof A == "string" ? x[U] += " markup" : typeof A == "object" && (A.markup = !0) : x[U] = "markup", N("div", x, a || null);
  }, t;
}(ue), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), kr = /* @__PURE__ */ mn(yr);
var Dn = {};
(function(e) {
  function t(p, d) {
    for (var h = 0; h < d.length; h++) {
      var r = d[h];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(p, D(r.key), r);
    }
  }
  function n(p, d, h) {
    return d && t(p.prototype, d), h && t(p, h), Object.defineProperty(p, "prototype", {
      writable: !1
    }), p;
  }
  function u() {
    return u = Object.assign ? Object.assign.bind() : function(p) {
      for (var d = 1; d < arguments.length; d++) {
        var h = arguments[d];
        for (var r in h)
          Object.prototype.hasOwnProperty.call(h, r) && (p[r] = h[r]);
      }
      return p;
    }, u.apply(this, arguments);
  }
  function a(p, d) {
    if (p) {
      if (typeof p == "string")
        return o(p, d);
      var h = Object.prototype.toString.call(p).slice(8, -1);
      if (h === "Object" && p.constructor && (h = p.constructor.name), h === "Map" || h === "Set")
        return Array.from(p);
      if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))
        return o(p, d);
    }
  }
  function o(p, d) {
    (d == null || d > p.length) && (d = p.length);
    for (var h = 0, r = new Array(d); h < d; h++)
      r[h] = p[h];
    return r;
  }
  function c(p, d) {
    var h = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (h)
      return (h = h.call(p)).next.bind(h);
    if (Array.isArray(p) || (h = a(p)) || d && p && typeof p.length == "number") {
      h && (p = h);
      var r = 0;
      return function() {
        return r >= p.length ? {
          done: !0
        } : {
          done: !1,
          value: p[r++]
        };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function g(p, d) {
    if (typeof p != "object" || p === null)
      return p;
    var h = p[Symbol.toPrimitive];
    if (h !== void 0) {
      var r = h.call(p, d || "default");
      if (typeof r != "object")
        return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(p);
  }
  function D(p) {
    var d = g(p, "string");
    return typeof d == "symbol" ? d : String(d);
  }
  function _() {
    return {
      async: !1,
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      hooks: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1
    };
  }
  e.defaults = _();
  function E(p) {
    e.defaults = p;
  }
  var m = /[&<>"']/, z = new RegExp(m.source, "g"), x = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, N = new RegExp(x.source, "g"), M = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, U = function(d) {
    return M[d];
  };
  function A(p, d) {
    if (d) {
      if (m.test(p))
        return p.replace(z, U);
    } else if (x.test(p))
      return p.replace(N, U);
    return p;
  }
  var I = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function q(p) {
    return p.replace(I, function(d, h) {
      return h = h.toLowerCase(), h === "colon" ? ":" : h.charAt(0) === "#" ? h.charAt(1) === "x" ? String.fromCharCode(parseInt(h.substring(2), 16)) : String.fromCharCode(+h.substring(1)) : "";
    });
  }
  var X = /(^|[^\[])\^/g;
  function O(p, d) {
    p = typeof p == "string" ? p : p.source, d = d || "";
    var h = {
      replace: function(i, s) {
        return s = s.source || s, s = s.replace(X, "$1"), p = p.replace(i, s), h;
      },
      getRegex: function() {
        return new RegExp(p, d);
      }
    };
    return h;
  }
  var le = /[^\w:]/g, ne = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function ie(p, d, h) {
    if (p) {
      var r;
      try {
        r = decodeURIComponent(q(h)).replace(le, "").toLowerCase();
      } catch {
        return null;
      }
      if (r.indexOf("javascript:") === 0 || r.indexOf("vbscript:") === 0 || r.indexOf("data:") === 0)
        return null;
    }
    d && !ne.test(h) && (h = De(d, h));
    try {
      h = encodeURI(h).replace(/%25/g, "%");
    } catch {
      return null;
    }
    return h;
  }
  var ee = {}, re = /^[^:]+:\/*[^/]*$/, V = /^([^:]+:)[\s\S]*$/, G = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function De(p, d) {
    ee[" " + p] || (re.test(p) ? ee[" " + p] = p + "/" : ee[" " + p] = ve(p, "/", !0)), p = ee[" " + p];
    var h = p.indexOf(":") === -1;
    return d.substring(0, 2) === "//" ? h ? d : p.replace(V, "$1") + d : d.charAt(0) === "/" ? h ? d : p.replace(G, "$1") + d : p + d;
  }
  var se = {
    exec: function() {
    }
  };
  function _e(p, d) {
    var h = p.replace(/\|/g, function(s, l, f) {
      for (var w = !1, b = l; --b >= 0 && f[b] === "\\"; )
        w = !w;
      return w ? "|" : " |";
    }), r = h.split(/ \|/), i = 0;
    if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), r.length > d)
      r.splice(d);
    else
      for (; r.length < d; )
        r.push("");
    for (; i < r.length; i++)
      r[i] = r[i].trim().replace(/\\\|/g, "|");
    return r;
  }
  function ve(p, d, h) {
    var r = p.length;
    if (r === 0)
      return "";
    for (var i = 0; i < r; ) {
      var s = p.charAt(r - i - 1);
      if (s === d && !h)
        i++;
      else if (s !== d && h)
        i++;
      else
        break;
    }
    return p.slice(0, r - i);
  }
  function ge(p, d) {
    if (p.indexOf(d[1]) === -1)
      return -1;
    for (var h = p.length, r = 0, i = 0; i < h; i++)
      if (p[i] === "\\")
        i++;
      else if (p[i] === d[0])
        r++;
      else if (p[i] === d[1] && (r--, r < 0))
        return i;
    return -1;
  }
  function te(p) {
    p && p.sanitize && !p.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  function ce(p, d) {
    if (d < 1)
      return "";
    for (var h = ""; d > 1; )
      d & 1 && (h += p), d >>= 1, p += p;
    return h + p;
  }
  function mt(p, d, h, r) {
    var i = d.href, s = d.title ? A(d.title) : null, l = p[1].replace(/\\([\[\]])/g, "$1");
    if (p[0].charAt(0) !== "!") {
      r.state.inLink = !0;
      var f = {
        type: "link",
        raw: h,
        href: i,
        title: s,
        text: l,
        tokens: r.inlineTokens(l)
      };
      return r.state.inLink = !1, f;
    }
    return {
      type: "image",
      raw: h,
      href: i,
      title: s,
      text: A(l)
    };
  }
  function An(p, d) {
    var h = p.match(/^(\s+)(?:```)/);
    if (h === null)
      return d;
    var r = h[1];
    return d.split(`
`).map(function(i) {
      var s = i.match(/^\s+/);
      if (s === null)
        return i;
      var l = s[0];
      return l.length >= r.length ? i.slice(r.length) : i;
    }).join(`
`);
  }
  var Ne = /* @__PURE__ */ function() {
    function p(h) {
      this.options = h || e.defaults;
    }
    var d = p.prototype;
    return d.space = function(r) {
      var i = this.rules.block.newline.exec(r);
      if (i && i[0].length > 0)
        return {
          type: "space",
          raw: i[0]
        };
    }, d.code = function(r) {
      var i = this.rules.block.code.exec(r);
      if (i) {
        var s = i[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: i[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? s : ve(s, `
`)
        };
      }
    }, d.fences = function(r) {
      var i = this.rules.block.fences.exec(r);
      if (i) {
        var s = i[0], l = An(s, i[3] || "");
        return {
          type: "code",
          raw: s,
          lang: i[2] ? i[2].trim().replace(this.rules.inline._escapes, "$1") : i[2],
          text: l
        };
      }
    }, d.heading = function(r) {
      var i = this.rules.block.heading.exec(r);
      if (i) {
        var s = i[2].trim();
        if (/#$/.test(s)) {
          var l = ve(s, "#");
          (this.options.pedantic || !l || / $/.test(l)) && (s = l.trim());
        }
        return {
          type: "heading",
          raw: i[0],
          depth: i[1].length,
          text: s,
          tokens: this.lexer.inline(s)
        };
      }
    }, d.hr = function(r) {
      var i = this.rules.block.hr.exec(r);
      if (i)
        return {
          type: "hr",
          raw: i[0]
        };
    }, d.blockquote = function(r) {
      var i = this.rules.block.blockquote.exec(r);
      if (i) {
        var s = i[0].replace(/^ *>[ \t]?/gm, ""), l = this.lexer.state.top;
        this.lexer.state.top = !0;
        var f = this.lexer.blockTokens(s);
        return this.lexer.state.top = l, {
          type: "blockquote",
          raw: i[0],
          tokens: f,
          text: s
        };
      }
    }, d.list = function(r) {
      var i = this.rules.block.list.exec(r);
      if (i) {
        var s, l, f, w, b, y, F, R, C, T, v, H, Z = i[1].trim(), oe = Z.length > 1, L = {
          type: "list",
          raw: "",
          ordered: oe,
          start: oe ? +Z.slice(0, -1) : "",
          loose: !1,
          items: []
        };
        Z = oe ? "\\d{1,9}\\" + Z.slice(-1) : "\\" + Z, this.options.pedantic && (Z = oe ? Z : "[*+-]");
        for (var Q = new RegExp("^( {0,3}" + Z + ")((?:[	 ][^\\n]*)?(?:\\n|$))"); r && (H = !1, !(!(i = Q.exec(r)) || this.rules.block.hr.test(r))); ) {
          if (s = i[0], r = r.substring(s.length), R = i[2].split(`
`, 1)[0].replace(/^\t+/, function(Re) {
            return " ".repeat(3 * Re.length);
          }), C = r.split(`
`, 1)[0], this.options.pedantic ? (w = 2, v = R.trimLeft()) : (w = i[2].search(/[^ ]/), w = w > 4 ? 1 : w, v = R.slice(w), w += i[1].length), y = !1, !R && /^ *$/.test(C) && (s += C + `
`, r = r.substring(C.length + 1), H = !0), !H)
            for (var Be = new RegExp("^ {0," + Math.min(3, w - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"), Se = new RegExp("^ {0," + Math.min(3, w - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), he = new RegExp("^ {0," + Math.min(3, w - 1) + "}(?:```|~~~)"), Ce = new RegExp("^ {0," + Math.min(3, w - 1) + "}#"); r && (T = r.split(`
`, 1)[0], C = T, this.options.pedantic && (C = C.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(he.test(C) || Ce.test(C) || Be.test(C) || Se.test(r))); ) {
              if (C.search(/[^ ]/) >= w || !C.trim())
                v += `
` + C.slice(w);
              else {
                if (y || R.search(/[^ ]/) >= 4 || he.test(R) || Ce.test(R) || Se.test(R))
                  break;
                v += `
` + C;
              }
              !y && !C.trim() && (y = !0), s += T + `
`, r = r.substring(T.length + 1), R = C.slice(w);
            }
          L.loose || (F ? L.loose = !0 : /\n *\n *$/.test(s) && (F = !0)), this.options.gfm && (l = /^\[[ xX]\] /.exec(v), l && (f = l[0] !== "[ ] ", v = v.replace(/^\[[ xX]\] +/, ""))), L.items.push({
            type: "list_item",
            raw: s,
            task: !!l,
            checked: f,
            loose: !1,
            text: v
          }), L.raw += s;
        }
        L.items[L.items.length - 1].raw = s.trimRight(), L.items[L.items.length - 1].text = v.trimRight(), L.raw = L.raw.trimRight();
        var $e = L.items.length;
        for (b = 0; b < $e; b++)
          if (this.lexer.state.top = !1, L.items[b].tokens = this.lexer.blockTokens(L.items[b].text, []), !L.loose) {
            var Te = L.items[b].tokens.filter(function(Re) {
              return Re.type === "space";
            }), Nn = Te.length > 0 && Te.some(function(Re) {
              return /\n.*\n/.test(Re.raw);
            });
            L.loose = Nn;
          }
        if (L.loose)
          for (b = 0; b < $e; b++)
            L.items[b].loose = !0;
        return L;
      }
    }, d.html = function(r) {
      var i = this.rules.block.html.exec(r);
      if (i) {
        var s = {
          type: "html",
          raw: i[0],
          pre: !this.options.sanitizer && (i[1] === "pre" || i[1] === "script" || i[1] === "style"),
          text: i[0]
        };
        if (this.options.sanitize) {
          var l = this.options.sanitizer ? this.options.sanitizer(i[0]) : A(i[0]);
          s.type = "paragraph", s.text = l, s.tokens = this.lexer.inline(l);
        }
        return s;
      }
    }, d.def = function(r) {
      var i = this.rules.block.def.exec(r);
      if (i) {
        var s = i[1].toLowerCase().replace(/\s+/g, " "), l = i[2] ? i[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", f = i[3] ? i[3].substring(1, i[3].length - 1).replace(this.rules.inline._escapes, "$1") : i[3];
        return {
          type: "def",
          tag: s,
          raw: i[0],
          href: l,
          title: f
        };
      }
    }, d.table = function(r) {
      var i = this.rules.block.table.exec(r);
      if (i) {
        var s = {
          type: "table",
          header: _e(i[1]).map(function(F) {
            return {
              text: F
            };
          }),
          align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          rows: i[3] && i[3].trim() ? i[3].replace(/\n[ \t]*$/, "").split(`
`) : []
        };
        if (s.header.length === s.align.length) {
          s.raw = i[0];
          var l = s.align.length, f, w, b, y;
          for (f = 0; f < l; f++)
            /^ *-+: *$/.test(s.align[f]) ? s.align[f] = "right" : /^ *:-+: *$/.test(s.align[f]) ? s.align[f] = "center" : /^ *:-+ *$/.test(s.align[f]) ? s.align[f] = "left" : s.align[f] = null;
          for (l = s.rows.length, f = 0; f < l; f++)
            s.rows[f] = _e(s.rows[f], s.header.length).map(function(F) {
              return {
                text: F
              };
            });
          for (l = s.header.length, w = 0; w < l; w++)
            s.header[w].tokens = this.lexer.inline(s.header[w].text);
          for (l = s.rows.length, w = 0; w < l; w++)
            for (y = s.rows[w], b = 0; b < y.length; b++)
              y[b].tokens = this.lexer.inline(y[b].text);
          return s;
        }
      }
    }, d.lheading = function(r) {
      var i = this.rules.block.lheading.exec(r);
      if (i)
        return {
          type: "heading",
          raw: i[0],
          depth: i[2].charAt(0) === "=" ? 1 : 2,
          text: i[1],
          tokens: this.lexer.inline(i[1])
        };
    }, d.paragraph = function(r) {
      var i = this.rules.block.paragraph.exec(r);
      if (i) {
        var s = i[1].charAt(i[1].length - 1) === `
` ? i[1].slice(0, -1) : i[1];
        return {
          type: "paragraph",
          raw: i[0],
          text: s,
          tokens: this.lexer.inline(s)
        };
      }
    }, d.text = function(r) {
      var i = this.rules.block.text.exec(r);
      if (i)
        return {
          type: "text",
          raw: i[0],
          text: i[0],
          tokens: this.lexer.inline(i[0])
        };
    }, d.escape = function(r) {
      var i = this.rules.inline.escape.exec(r);
      if (i)
        return {
          type: "escape",
          raw: i[0],
          text: A(i[1])
        };
    }, d.tag = function(r) {
      var i = this.rules.inline.tag.exec(r);
      if (i)
        return !this.lexer.state.inLink && /^<a /i.test(i[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(i[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) && (this.lexer.state.inRawBlock = !1), {
          type: this.options.sanitize ? "text" : "html",
          raw: i[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : A(i[0]) : i[0]
        };
    }, d.link = function(r) {
      var i = this.rules.inline.link.exec(r);
      if (i) {
        var s = i[2].trim();
        if (!this.options.pedantic && /^</.test(s)) {
          if (!/>$/.test(s))
            return;
          var l = ve(s.slice(0, -1), "\\");
          if ((s.length - l.length) % 2 === 0)
            return;
        } else {
          var f = ge(i[2], "()");
          if (f > -1) {
            var w = i[0].indexOf("!") === 0 ? 5 : 4, b = w + i[1].length + f;
            i[2] = i[2].substring(0, f), i[0] = i[0].substring(0, b).trim(), i[3] = "";
          }
        }
        var y = i[2], F = "";
        if (this.options.pedantic) {
          var R = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(y);
          R && (y = R[1], F = R[3]);
        } else
          F = i[3] ? i[3].slice(1, -1) : "";
        return y = y.trim(), /^</.test(y) && (this.options.pedantic && !/>$/.test(s) ? y = y.slice(1) : y = y.slice(1, -1)), mt(i, {
          href: y && y.replace(this.rules.inline._escapes, "$1"),
          title: F && F.replace(this.rules.inline._escapes, "$1")
        }, i[0], this.lexer);
      }
    }, d.reflink = function(r, i) {
      var s;
      if ((s = this.rules.inline.reflink.exec(r)) || (s = this.rules.inline.nolink.exec(r))) {
        var l = (s[2] || s[1]).replace(/\s+/g, " ");
        if (l = i[l.toLowerCase()], !l) {
          var f = s[0].charAt(0);
          return {
            type: "text",
            raw: f,
            text: f
          };
        }
        return mt(s, l, s[0], this.lexer);
      }
    }, d.emStrong = function(r, i, s) {
      s === void 0 && (s = "");
      var l = this.rules.inline.emStrong.lDelim.exec(r);
      if (l && !(l[3] && s.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
        var f = l[1] || l[2] || "";
        if (!f || f && (s === "" || this.rules.inline.punctuation.exec(s))) {
          var w = l[0].length - 1, b, y, F = w, R = 0, C = l[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
          for (C.lastIndex = 0, i = i.slice(-1 * r.length + w); (l = C.exec(i)) != null; )
            if (b = l[1] || l[2] || l[3] || l[4] || l[5] || l[6], !!b) {
              if (y = b.length, l[3] || l[4]) {
                F += y;
                continue;
              } else if ((l[5] || l[6]) && w % 3 && !((w + y) % 3)) {
                R += y;
                continue;
              }
              if (F -= y, !(F > 0)) {
                y = Math.min(y, y + F + R);
                var T = r.slice(0, w + l.index + (l[0].length - b.length) + y);
                if (Math.min(w, y) % 2) {
                  var v = T.slice(1, -1);
                  return {
                    type: "em",
                    raw: T,
                    text: v,
                    tokens: this.lexer.inlineTokens(v)
                  };
                }
                var H = T.slice(2, -2);
                return {
                  type: "strong",
                  raw: T,
                  text: H,
                  tokens: this.lexer.inlineTokens(H)
                };
              }
            }
        }
      }
    }, d.codespan = function(r) {
      var i = this.rules.inline.code.exec(r);
      if (i) {
        var s = i[2].replace(/\n/g, " "), l = /[^ ]/.test(s), f = /^ /.test(s) && / $/.test(s);
        return l && f && (s = s.substring(1, s.length - 1)), s = A(s, !0), {
          type: "codespan",
          raw: i[0],
          text: s
        };
      }
    }, d.br = function(r) {
      var i = this.rules.inline.br.exec(r);
      if (i)
        return {
          type: "br",
          raw: i[0]
        };
    }, d.del = function(r) {
      var i = this.rules.inline.del.exec(r);
      if (i)
        return {
          type: "del",
          raw: i[0],
          text: i[2],
          tokens: this.lexer.inlineTokens(i[2])
        };
    }, d.autolink = function(r, i) {
      var s = this.rules.inline.autolink.exec(r);
      if (s) {
        var l, f;
        return s[2] === "@" ? (l = A(this.options.mangle ? i(s[1]) : s[1]), f = "mailto:" + l) : (l = A(s[1]), f = l), {
          type: "link",
          raw: s[0],
          text: l,
          href: f,
          tokens: [{
            type: "text",
            raw: l,
            text: l
          }]
        };
      }
    }, d.url = function(r, i) {
      var s;
      if (s = this.rules.inline.url.exec(r)) {
        var l, f;
        if (s[2] === "@")
          l = A(this.options.mangle ? i(s[0]) : s[0]), f = "mailto:" + l;
        else {
          var w;
          do
            w = s[0], s[0] = this.rules.inline._backpedal.exec(s[0])[0];
          while (w !== s[0]);
          l = A(s[0]), s[1] === "www." ? f = "http://" + s[0] : f = s[0];
        }
        return {
          type: "link",
          raw: s[0],
          text: l,
          href: f,
          tokens: [{
            type: "text",
            raw: l,
            text: l
          }]
        };
      }
    }, d.inlineText = function(r, i) {
      var s = this.rules.inline.text.exec(r);
      if (s) {
        var l;
        return this.lexer.state.inRawBlock ? l = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(s[0]) : A(s[0]) : s[0] : l = A(this.options.smartypants ? i(s[0]) : s[0]), {
          type: "text",
          raw: s[0],
          text: l
        };
      }
    }, p;
  }(), B = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: se,
    lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  B._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/, B._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, B.def = O(B.def).replace("label", B._label).replace("title", B._title).getRegex(), B.bullet = /(?:[*+-]|\d{1,9}[.)])/, B.listItemStart = O(/^( *)(bull) */).replace("bull", B.bullet).getRegex(), B.list = O(B.list).replace(/bull/g, B.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + B.def.source + ")").getRegex(), B._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", B._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, B.html = O(B.html, "i").replace("comment", B._comment).replace("tag", B._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), B.paragraph = O(B._paragraph).replace("hr", B.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", B._tag).getRegex(), B.blockquote = O(B.blockquote).replace("paragraph", B.paragraph).getRegex(), B.normal = u({}, B), B.gfm = u({}, B.normal, {
    table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    // Cells
  }), B.gfm.table = O(B.gfm.table).replace("hr", B.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", B._tag).getRegex(), B.gfm.paragraph = O(B._paragraph).replace("hr", B.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", B.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", B._tag).getRegex(), B.pedantic = u({}, B.normal, {
    html: O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", B._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: se,
    // fences not supported
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: O(B.normal._paragraph).replace("hr", B.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", B.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
  });
  var k = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: se,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
      rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
      // ^- Not allowed for _
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: se,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  };
  k._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", k.punctuation = O(k.punctuation).replace(/punctuation/g, k._punctuation).getRegex(), k.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, k.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, k._comment = O(B._comment).replace("(?:-->|$)", "-->").getRegex(), k.emStrong.lDelim = O(k.emStrong.lDelim).replace(/punct/g, k._punctuation).getRegex(), k.emStrong.rDelimAst = O(k.emStrong.rDelimAst, "g").replace(/punct/g, k._punctuation).getRegex(), k.emStrong.rDelimUnd = O(k.emStrong.rDelimUnd, "g").replace(/punct/g, k._punctuation).getRegex(), k._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, k._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, k._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, k.autolink = O(k.autolink).replace("scheme", k._scheme).replace("email", k._email).getRegex(), k._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, k.tag = O(k.tag).replace("comment", k._comment).replace("attribute", k._attribute).getRegex(), k._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, k._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, k._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, k.link = O(k.link).replace("label", k._label).replace("href", k._href).replace("title", k._title).getRegex(), k.reflink = O(k.reflink).replace("label", k._label).replace("ref", B._label).getRegex(), k.nolink = O(k.nolink).replace("ref", B._label).getRegex(), k.reflinkSearch = O(k.reflinkSearch, "g").replace("reflink", k.reflink).replace("nolink", k.nolink).getRegex(), k.normal = u({}, k), k.pedantic = u({}, k.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: O(/^!?\[(label)\]\((.*?)\)/).replace("label", k._label).getRegex(),
    reflink: O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", k._label).getRegex()
  }), k.gfm = u({}, k.normal, {
    escape: O(k.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }), k.gfm.url = O(k.gfm.url, "i").replace("email", k.gfm._extended_email).getRegex(), k.breaks = u({}, k.gfm, {
    br: O(k.br).replace("{2,}", "*").getRegex(),
    text: O(k.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  });
  function Bn(p) {
    return p.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
  }
  function Dt(p) {
    var d = "", h, r, i = p.length;
    for (h = 0; h < i; h++)
      r = p.charCodeAt(h), Math.random() > 0.5 && (r = "x" + r.toString(16)), d += "&#" + r + ";";
    return d;
  }
  var we = /* @__PURE__ */ function() {
    function p(h) {
      this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = h || e.defaults, this.options.tokenizer = this.options.tokenizer || new Ne(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: !1,
        inRawBlock: !1,
        top: !0
      };
      var r = {
        block: B.normal,
        inline: k.normal
      };
      this.options.pedantic ? (r.block = B.pedantic, r.inline = k.pedantic) : this.options.gfm && (r.block = B.gfm, this.options.breaks ? r.inline = k.breaks : r.inline = k.gfm), this.tokenizer.rules = r;
    }
    p.lex = function(r, i) {
      var s = new p(i);
      return s.lex(r);
    }, p.lexInline = function(r, i) {
      var s = new p(i);
      return s.inlineTokens(r);
    };
    var d = p.prototype;
    return d.lex = function(r) {
      r = r.replace(/\r\n|\r/g, `
`), this.blockTokens(r, this.tokens);
      for (var i; i = this.inlineQueue.shift(); )
        this.inlineTokens(i.src, i.tokens);
      return this.tokens;
    }, d.blockTokens = function(r, i) {
      var s = this;
      i === void 0 && (i = []), this.options.pedantic ? r = r.replace(/\t/g, "    ").replace(/^ +$/gm, "") : r = r.replace(/^( *)(\t+)/gm, function(F, R, C) {
        return R + "    ".repeat(C.length);
      });
      for (var l, f, w, b; r; )
        if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(F) {
          return (l = F.call({
            lexer: s
          }, r, i)) ? (r = r.substring(l.raw.length), i.push(l), !0) : !1;
        }))) {
          if (l = this.tokenizer.space(r)) {
            r = r.substring(l.raw.length), l.raw.length === 1 && i.length > 0 ? i[i.length - 1].raw += `
` : i.push(l);
            continue;
          }
          if (l = this.tokenizer.code(r)) {
            r = r.substring(l.raw.length), f = i[i.length - 1], f && (f.type === "paragraph" || f.type === "text") ? (f.raw += `
` + l.raw, f.text += `
` + l.text, this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : i.push(l);
            continue;
          }
          if (l = this.tokenizer.fences(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.heading(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.hr(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.blockquote(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.list(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.html(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.def(r)) {
            r = r.substring(l.raw.length), f = i[i.length - 1], f && (f.type === "paragraph" || f.type === "text") ? (f.raw += `
` + l.raw, f.text += `
` + l.raw, this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
              href: l.href,
              title: l.title
            });
            continue;
          }
          if (l = this.tokenizer.table(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.lheading(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (w = r, this.options.extensions && this.options.extensions.startBlock && function() {
            var F = 1 / 0, R = r.slice(1), C = void 0;
            s.options.extensions.startBlock.forEach(function(T) {
              C = T.call({
                lexer: this
              }, R), typeof C == "number" && C >= 0 && (F = Math.min(F, C));
            }), F < 1 / 0 && F >= 0 && (w = r.substring(0, F + 1));
          }(), this.state.top && (l = this.tokenizer.paragraph(w))) {
            f = i[i.length - 1], b && f.type === "paragraph" ? (f.raw += `
` + l.raw, f.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : i.push(l), b = w.length !== r.length, r = r.substring(l.raw.length);
            continue;
          }
          if (l = this.tokenizer.text(r)) {
            r = r.substring(l.raw.length), f = i[i.length - 1], f && f.type === "text" ? (f.raw += `
` + l.raw, f.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : i.push(l);
            continue;
          }
          if (r) {
            var y = "Infinite loop on byte: " + r.charCodeAt(0);
            if (this.options.silent) {
              console.error(y);
              break;
            } else
              throw new Error(y);
          }
        }
      return this.state.top = !0, i;
    }, d.inline = function(r, i) {
      return i === void 0 && (i = []), this.inlineQueue.push({
        src: r,
        tokens: i
      }), i;
    }, d.inlineTokens = function(r, i) {
      var s = this;
      i === void 0 && (i = []);
      var l, f, w, b = r, y, F, R;
      if (this.tokens.links) {
        var C = Object.keys(this.tokens.links);
        if (C.length > 0)
          for (; (y = this.tokenizer.rules.inline.reflinkSearch.exec(b)) != null; )
            C.includes(y[0].slice(y[0].lastIndexOf("[") + 1, -1)) && (b = b.slice(0, y.index) + "[" + ce("a", y[0].length - 2) + "]" + b.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (y = this.tokenizer.rules.inline.blockSkip.exec(b)) != null; )
        b = b.slice(0, y.index) + "[" + ce("a", y[0].length - 2) + "]" + b.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; (y = this.tokenizer.rules.inline.escapedEmSt.exec(b)) != null; )
        b = b.slice(0, y.index + y[0].length - 2) + "++" + b.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
      for (; r; )
        if (F || (R = ""), F = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(v) {
          return (l = v.call({
            lexer: s
          }, r, i)) ? (r = r.substring(l.raw.length), i.push(l), !0) : !1;
        }))) {
          if (l = this.tokenizer.escape(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.tag(r)) {
            r = r.substring(l.raw.length), f = i[i.length - 1], f && l.type === "text" && f.type === "text" ? (f.raw += l.raw, f.text += l.text) : i.push(l);
            continue;
          }
          if (l = this.tokenizer.link(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.reflink(r, this.tokens.links)) {
            r = r.substring(l.raw.length), f = i[i.length - 1], f && l.type === "text" && f.type === "text" ? (f.raw += l.raw, f.text += l.text) : i.push(l);
            continue;
          }
          if (l = this.tokenizer.emStrong(r, b, R)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.codespan(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.br(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.del(r)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (l = this.tokenizer.autolink(r, Dt)) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (!this.state.inLink && (l = this.tokenizer.url(r, Dt))) {
            r = r.substring(l.raw.length), i.push(l);
            continue;
          }
          if (w = r, this.options.extensions && this.options.extensions.startInline && function() {
            var v = 1 / 0, H = r.slice(1), Z = void 0;
            s.options.extensions.startInline.forEach(function(oe) {
              Z = oe.call({
                lexer: this
              }, H), typeof Z == "number" && Z >= 0 && (v = Math.min(v, Z));
            }), v < 1 / 0 && v >= 0 && (w = r.substring(0, v + 1));
          }(), l = this.tokenizer.inlineText(w, Bn)) {
            r = r.substring(l.raw.length), l.raw.slice(-1) !== "_" && (R = l.raw.slice(-1)), F = !0, f = i[i.length - 1], f && f.type === "text" ? (f.raw += l.raw, f.text += l.text) : i.push(l);
            continue;
          }
          if (r) {
            var T = "Infinite loop on byte: " + r.charCodeAt(0);
            if (this.options.silent) {
              console.error(T);
              break;
            } else
              throw new Error(T);
          }
        }
      return i;
    }, n(p, null, [{
      key: "rules",
      get: function() {
        return {
          block: B,
          inline: k
        };
      }
    }]), p;
  }(), Ue = /* @__PURE__ */ function() {
    function p(h) {
      this.options = h || e.defaults;
    }
    var d = p.prototype;
    return d.code = function(r, i, s) {
      var l = (i || "").match(/\S*/)[0];
      if (this.options.highlight) {
        var f = this.options.highlight(r, l);
        f != null && f !== r && (s = !0, r = f);
      }
      return r = r.replace(/\n$/, "") + `
`, l ? '<pre><code class="' + this.options.langPrefix + A(l) + '">' + (s ? r : A(r, !0)) + `</code></pre>
` : "<pre><code>" + (s ? r : A(r, !0)) + `</code></pre>
`;
    }, d.blockquote = function(r) {
      return `<blockquote>
` + r + `</blockquote>
`;
    }, d.html = function(r) {
      return r;
    }, d.heading = function(r, i, s, l) {
      if (this.options.headerIds) {
        var f = this.options.headerPrefix + l.slug(s);
        return "<h" + i + ' id="' + f + '">' + r + "</h" + i + `>
`;
      }
      return "<h" + i + ">" + r + "</h" + i + `>
`;
    }, d.hr = function() {
      return this.options.xhtml ? `<hr/>
` : `<hr>
`;
    }, d.list = function(r, i, s) {
      var l = i ? "ol" : "ul", f = i && s !== 1 ? ' start="' + s + '"' : "";
      return "<" + l + f + `>
` + r + "</" + l + `>
`;
    }, d.listitem = function(r) {
      return "<li>" + r + `</li>
`;
    }, d.checkbox = function(r) {
      return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
    }, d.paragraph = function(r) {
      return "<p>" + r + `</p>
`;
    }, d.table = function(r, i) {
      return i && (i = "<tbody>" + i + "</tbody>"), `<table>
<thead>
` + r + `</thead>
` + i + `</table>
`;
    }, d.tablerow = function(r) {
      return `<tr>
` + r + `</tr>
`;
    }, d.tablecell = function(r, i) {
      var s = i.header ? "th" : "td", l = i.align ? "<" + s + ' align="' + i.align + '">' : "<" + s + ">";
      return l + r + ("</" + s + `>
`);
    }, d.strong = function(r) {
      return "<strong>" + r + "</strong>";
    }, d.em = function(r) {
      return "<em>" + r + "</em>";
    }, d.codespan = function(r) {
      return "<code>" + r + "</code>";
    }, d.br = function() {
      return this.options.xhtml ? "<br/>" : "<br>";
    }, d.del = function(r) {
      return "<del>" + r + "</del>";
    }, d.link = function(r, i, s) {
      if (r = ie(this.options.sanitize, this.options.baseUrl, r), r === null)
        return s;
      var l = '<a href="' + r + '"';
      return i && (l += ' title="' + i + '"'), l += ">" + s + "</a>", l;
    }, d.image = function(r, i, s) {
      if (r = ie(this.options.sanitize, this.options.baseUrl, r), r === null)
        return s;
      var l = '<img src="' + r + '" alt="' + s + '"';
      return i && (l += ' title="' + i + '"'), l += this.options.xhtml ? "/>" : ">", l;
    }, d.text = function(r) {
      return r;
    }, p;
  }(), Je = /* @__PURE__ */ function() {
    function p() {
    }
    var d = p.prototype;
    return d.strong = function(r) {
      return r;
    }, d.em = function(r) {
      return r;
    }, d.codespan = function(r) {
      return r;
    }, d.del = function(r) {
      return r;
    }, d.html = function(r) {
      return r;
    }, d.text = function(r) {
      return r;
    }, d.link = function(r, i, s) {
      return "" + s;
    }, d.image = function(r, i, s) {
      return "" + s;
    }, d.br = function() {
      return "";
    }, p;
  }(), Ke = /* @__PURE__ */ function() {
    function p() {
      this.seen = {};
    }
    var d = p.prototype;
    return d.serialize = function(r) {
      return r.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
    }, d.getNextSafeSlug = function(r, i) {
      var s = r, l = 0;
      if (this.seen.hasOwnProperty(s)) {
        l = this.seen[r];
        do
          l++, s = r + "-" + l;
        while (this.seen.hasOwnProperty(s));
      }
      return i || (this.seen[r] = l, this.seen[s] = 0), s;
    }, d.slug = function(r, i) {
      i === void 0 && (i = {});
      var s = this.serialize(r);
      return this.getNextSafeSlug(s, i.dryrun);
    }, p;
  }(), be = /* @__PURE__ */ function() {
    function p(h) {
      this.options = h || e.defaults, this.options.renderer = this.options.renderer || new Ue(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Je(), this.slugger = new Ke();
    }
    p.parse = function(r, i) {
      var s = new p(i);
      return s.parse(r);
    }, p.parseInline = function(r, i) {
      var s = new p(i);
      return s.parseInline(r);
    };
    var d = p.prototype;
    return d.parse = function(r, i) {
      i === void 0 && (i = !0);
      var s = "", l, f, w, b, y, F, R, C, T, v, H, Z, oe, L, Q, Be, Se, he, Ce, $e = r.length;
      for (l = 0; l < $e; l++) {
        if (v = r[l], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[v.type] && (Ce = this.options.extensions.renderers[v.type].call({
          parser: this
        }, v), Ce !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(v.type))) {
          s += Ce || "";
          continue;
        }
        switch (v.type) {
          case "space":
            continue;
          case "hr": {
            s += this.renderer.hr();
            continue;
          }
          case "heading": {
            s += this.renderer.heading(this.parseInline(v.tokens), v.depth, q(this.parseInline(v.tokens, this.textRenderer)), this.slugger);
            continue;
          }
          case "code": {
            s += this.renderer.code(v.text, v.lang, v.escaped);
            continue;
          }
          case "table": {
            for (C = "", R = "", b = v.header.length, f = 0; f < b; f++)
              R += this.renderer.tablecell(this.parseInline(v.header[f].tokens), {
                header: !0,
                align: v.align[f]
              });
            for (C += this.renderer.tablerow(R), T = "", b = v.rows.length, f = 0; f < b; f++) {
              for (F = v.rows[f], R = "", y = F.length, w = 0; w < y; w++)
                R += this.renderer.tablecell(this.parseInline(F[w].tokens), {
                  header: !1,
                  align: v.align[w]
                });
              T += this.renderer.tablerow(R);
            }
            s += this.renderer.table(C, T);
            continue;
          }
          case "blockquote": {
            T = this.parse(v.tokens), s += this.renderer.blockquote(T);
            continue;
          }
          case "list": {
            for (H = v.ordered, Z = v.start, oe = v.loose, b = v.items.length, T = "", f = 0; f < b; f++)
              Q = v.items[f], Be = Q.checked, Se = Q.task, L = "", Q.task && (he = this.renderer.checkbox(Be), oe ? Q.tokens.length > 0 && Q.tokens[0].type === "paragraph" ? (Q.tokens[0].text = he + " " + Q.tokens[0].text, Q.tokens[0].tokens && Q.tokens[0].tokens.length > 0 && Q.tokens[0].tokens[0].type === "text" && (Q.tokens[0].tokens[0].text = he + " " + Q.tokens[0].tokens[0].text)) : Q.tokens.unshift({
                type: "text",
                text: he
              }) : L += he), L += this.parse(Q.tokens, oe), T += this.renderer.listitem(L, Se, Be);
            s += this.renderer.list(T, H, Z);
            continue;
          }
          case "html": {
            s += this.renderer.html(v.text);
            continue;
          }
          case "paragraph": {
            s += this.renderer.paragraph(this.parseInline(v.tokens));
            continue;
          }
          case "text": {
            for (T = v.tokens ? this.parseInline(v.tokens) : v.text; l + 1 < $e && r[l + 1].type === "text"; )
              v = r[++l], T += `
` + (v.tokens ? this.parseInline(v.tokens) : v.text);
            s += i ? this.renderer.paragraph(T) : T;
            continue;
          }
          default: {
            var Te = 'Token with "' + v.type + '" type was not found.';
            if (this.options.silent) {
              console.error(Te);
              return;
            } else
              throw new Error(Te);
          }
        }
      }
      return s;
    }, d.parseInline = function(r, i) {
      i = i || this.renderer;
      var s = "", l, f, w, b = r.length;
      for (l = 0; l < b; l++) {
        if (f = r[l], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[f.type] && (w = this.options.extensions.renderers[f.type].call({
          parser: this
        }, f), w !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(f.type))) {
          s += w || "";
          continue;
        }
        switch (f.type) {
          case "escape": {
            s += i.text(f.text);
            break;
          }
          case "html": {
            s += i.html(f.text);
            break;
          }
          case "link": {
            s += i.link(f.href, f.title, this.parseInline(f.tokens, i));
            break;
          }
          case "image": {
            s += i.image(f.href, f.title, f.text);
            break;
          }
          case "strong": {
            s += i.strong(this.parseInline(f.tokens, i));
            break;
          }
          case "em": {
            s += i.em(this.parseInline(f.tokens, i));
            break;
          }
          case "codespan": {
            s += i.codespan(f.text);
            break;
          }
          case "br": {
            s += i.br();
            break;
          }
          case "del": {
            s += i.del(this.parseInline(f.tokens, i));
            break;
          }
          case "text": {
            s += i.text(f.text);
            break;
          }
          default: {
            var y = 'Token with "' + f.type + '" type was not found.';
            if (this.options.silent) {
              console.error(y);
              return;
            } else
              throw new Error(y);
          }
        }
      }
      return s;
    }, p;
  }(), Ae = /* @__PURE__ */ function() {
    function p(h) {
      this.options = h || e.defaults;
    }
    var d = p.prototype;
    return d.preprocess = function(r) {
      return r;
    }, d.postprocess = function(r) {
      return r;
    }, p;
  }();
  Ae.passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess"]);
  function Sn(p, d, h) {
    return function(r) {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, p) {
        var i = "<p>An error occurred:</p><pre>" + A(r.message + "", !0) + "</pre>";
        if (d)
          return Promise.resolve(i);
        if (h) {
          h(null, i);
          return;
        }
        return i;
      }
      if (d)
        return Promise.reject(r);
      if (h) {
        h(r);
        return;
      }
      throw r;
    };
  }
  function _t(p, d) {
    return function(h, r, i) {
      typeof r == "function" && (i = r, r = null);
      var s = u({}, r);
      r = u({}, S.defaults, s);
      var l = Sn(r.silent, r.async, i);
      if (typeof h > "u" || h === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof h != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(h) + ", string expected"));
      if (te(r), r.hooks && (r.hooks.options = r), i) {
        var f = r.highlight, w;
        try {
          r.hooks && (h = r.hooks.preprocess(h)), w = p(h, r);
        } catch (C) {
          return l(C);
        }
        var b = function(T) {
          var v;
          if (!T)
            try {
              r.walkTokens && S.walkTokens(w, r.walkTokens), v = d(w, r), r.hooks && (v = r.hooks.postprocess(v));
            } catch (H) {
              T = H;
            }
          return r.highlight = f, T ? l(T) : i(null, v);
        };
        if (!f || f.length < 3 || (delete r.highlight, !w.length))
          return b();
        var y = 0;
        S.walkTokens(w, function(C) {
          C.type === "code" && (y++, setTimeout(function() {
            f(C.text, C.lang, function(T, v) {
              if (T)
                return b(T);
              v != null && v !== C.text && (C.text = v, C.escaped = !0), y--, y === 0 && b();
            });
          }, 0));
        }), y === 0 && b();
        return;
      }
      if (r.async)
        return Promise.resolve(r.hooks ? r.hooks.preprocess(h) : h).then(function(C) {
          return p(C, r);
        }).then(function(C) {
          return r.walkTokens ? Promise.all(S.walkTokens(C, r.walkTokens)).then(function() {
            return C;
          }) : C;
        }).then(function(C) {
          return d(C, r);
        }).then(function(C) {
          return r.hooks ? r.hooks.postprocess(C) : C;
        }).catch(l);
      try {
        r.hooks && (h = r.hooks.preprocess(h));
        var F = p(h, r);
        r.walkTokens && S.walkTokens(F, r.walkTokens);
        var R = d(F, r);
        return r.hooks && (R = r.hooks.postprocess(R)), R;
      } catch (C) {
        return l(C);
      }
    };
  }
  function S(p, d, h) {
    return _t(we.lex, be.parse)(p, d, h);
  }
  S.options = S.setOptions = function(p) {
    return S.defaults = u({}, S.defaults, p), E(S.defaults), S;
  }, S.getDefaults = _, S.defaults = e.defaults, S.use = function() {
    for (var p = S.defaults.extensions || {
      renderers: {},
      childTokens: {}
    }, d = arguments.length, h = new Array(d), r = 0; r < d; r++)
      h[r] = arguments[r];
    h.forEach(function(i) {
      var s = u({}, i);
      if (s.async = S.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach(function(f) {
        if (!f.name)
          throw new Error("extension name required");
        if (f.renderer) {
          var w = p.renderers[f.name];
          w ? p.renderers[f.name] = function() {
            for (var b = arguments.length, y = new Array(b), F = 0; F < b; F++)
              y[F] = arguments[F];
            var R = f.renderer.apply(this, y);
            return R === !1 && (R = w.apply(this, y)), R;
          } : p.renderers[f.name] = f.renderer;
        }
        if (f.tokenizer) {
          if (!f.level || f.level !== "block" && f.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          p[f.level] ? p[f.level].unshift(f.tokenizer) : p[f.level] = [f.tokenizer], f.start && (f.level === "block" ? p.startBlock ? p.startBlock.push(f.start) : p.startBlock = [f.start] : f.level === "inline" && (p.startInline ? p.startInline.push(f.start) : p.startInline = [f.start]));
        }
        f.childTokens && (p.childTokens[f.name] = f.childTokens);
      }), s.extensions = p), i.renderer && function() {
        var f = S.defaults.renderer || new Ue(), w = function(F) {
          var R = f[F];
          f[F] = function() {
            for (var C = arguments.length, T = new Array(C), v = 0; v < C; v++)
              T[v] = arguments[v];
            var H = i.renderer[F].apply(f, T);
            return H === !1 && (H = R.apply(f, T)), H;
          };
        };
        for (var b in i.renderer)
          w(b);
        s.renderer = f;
      }(), i.tokenizer && function() {
        var f = S.defaults.tokenizer || new Ne(), w = function(F) {
          var R = f[F];
          f[F] = function() {
            for (var C = arguments.length, T = new Array(C), v = 0; v < C; v++)
              T[v] = arguments[v];
            var H = i.tokenizer[F].apply(f, T);
            return H === !1 && (H = R.apply(f, T)), H;
          };
        };
        for (var b in i.tokenizer)
          w(b);
        s.tokenizer = f;
      }(), i.hooks && function() {
        var f = S.defaults.hooks || new Ae(), w = function(F) {
          var R = f[F];
          Ae.passThroughHooks.has(F) ? f[F] = function(C) {
            if (S.defaults.async)
              return Promise.resolve(i.hooks[F].call(f, C)).then(function(v) {
                return R.call(f, v);
              });
            var T = i.hooks[F].call(f, C);
            return R.call(f, T);
          } : f[F] = function() {
            for (var C = arguments.length, T = new Array(C), v = 0; v < C; v++)
              T[v] = arguments[v];
            var H = i.hooks[F].apply(f, T);
            return H === !1 && (H = R.apply(f, T)), H;
          };
        };
        for (var b in i.hooks)
          w(b);
        s.hooks = f;
      }(), i.walkTokens) {
        var l = S.defaults.walkTokens;
        s.walkTokens = function(f) {
          var w = [];
          return w.push(i.walkTokens.call(this, f)), l && (w = w.concat(l.call(this, f))), w;
        };
      }
      S.setOptions(s);
    });
  }, S.walkTokens = function(p, d) {
    for (var h = [], r = function() {
      var f = s.value;
      switch (h = h.concat(d.call(S, f)), f.type) {
        case "table": {
          for (var w = c(f.header), b; !(b = w()).done; ) {
            var y = b.value;
            h = h.concat(S.walkTokens(y.tokens, d));
          }
          for (var F = c(f.rows), R; !(R = F()).done; )
            for (var C = R.value, T = c(C), v; !(v = T()).done; ) {
              var H = v.value;
              h = h.concat(S.walkTokens(H.tokens, d));
            }
          break;
        }
        case "list": {
          h = h.concat(S.walkTokens(f.items, d));
          break;
        }
        default:
          S.defaults.extensions && S.defaults.extensions.childTokens && S.defaults.extensions.childTokens[f.type] ? S.defaults.extensions.childTokens[f.type].forEach(function(Z) {
            h = h.concat(S.walkTokens(f[Z], d));
          }) : f.tokens && (h = h.concat(S.walkTokens(f.tokens, d)));
      }
    }, i = c(p), s; !(s = i()).done; )
      r();
    return h;
  }, S.parseInline = _t(we.lexInline, be.parseInline), S.Parser = be, S.parser = be.parse, S.Renderer = Ue, S.TextRenderer = Je, S.Lexer = we, S.lexer = we.lex, S.Tokenizer = Ne, S.Slugger = Ke, S.Hooks = Ae, S.parse = S;
  var $n = S.options, Tn = S.setOptions, Rn = S.use, zn = S.walkTokens, Pn = S.parseInline, In = S, On = be.parse, Mn = we.lex;
  e.Hooks = Ae, e.Lexer = we, e.Parser = be, e.Renderer = Ue, e.Slugger = Ke, e.TextRenderer = Je, e.Tokenizer = Ne, e.getDefaults = _, e.lexer = Mn, e.marked = S, e.options = $n, e.parse = In, e.parseInline = Pn, e.parser = On, e.setOptions = Tn, e.use = Rn, e.walkTokens = zn;
})(Dn);
const Fr = _r, Er = kr.default, { marked: xr } = Dn;
var Ar = Br;
function Br(e, t) {
  t = t || {};
  const n = t.h || Fr.h;
  let u;
  if (typeof e == "string")
    u = e, e = {};
  else if (e && typeof e.markdown == "string")
    u = e.markdown;
  else
    throw new Error("Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`");
  const a = e.markupOpts || t.markupOpts || {}, o = e.markedOpts || t.markedOpts || e.markdownOpts || t.markdownOpts || {};
  return (e.markdownOpts || t.markdownOpts) && console.warn("DEPRECATED: `.markdownOpts` Use `.markedOpts`"), n(Er, Object.assign({
    markup: xr(u, o),
    trim: !1,
    type: "html"
  }, a));
}
const Sr = /* @__PURE__ */ Dr(Ar);
function $r(e) {
  return new Date(e).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}
function Tr({
  content: e,
  createdAt: t,
  tags: n,
  template: u,
  attachments: a = []
}) {
  const [o, c] = ae(window.innerWidth <= 768);
  Fe(() => {
    const E = () => {
      c(window.innerWidth <= 768);
    };
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, []);
  const g = a.filter(
    (E) => E.type && E.type.startsWith("image/")
  ), D = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: ${u.tagBackgroundColor};
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: ${u.tagTextColor};
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: ${u.dateColor};
    }
  `, _ = `
    .markdown-content {
      font-size: ${o ? "0.9rem" : "1rem"};
      line-height: 1.7;
    }
    
    .markdown-content h1, 
    .markdown-content h2, 
    .markdown-content h3, 
    .markdown-content h4, 
    .markdown-content h5, 
    .markdown-content h6 {
      color: ${u.textColor};
      font-weight: bold;
      margin-top: ${o ? "0.8rem" : "1.2rem"};
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
      line-height: 1.3;
    }
    
    .markdown-content h1 {
      font-size: ${o ? "1.3rem" : "1.7rem"};
    }
    
    .markdown-content h2 {
      font-size: ${o ? "1.15rem" : "1.5rem"};
    }
    
    .markdown-content h3 {
      font-size: ${o ? "1rem" : "1.3rem"};
    }
    
    .markdown-content p {
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
      line-height: 1.7;
    }
    
    .markdown-content ul, 
    .markdown-content ol {
      padding-left: ${o ? "1rem" : "1.2rem"};
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
    }
    
    .markdown-content li {
      margin-bottom: ${o ? "0.3rem" : "0.4rem"};
    }
    
    .markdown-content code {
      background-color: ${u.tagBackgroundColor};
      padding: 0.125rem 0.25rem;
      border-radius: 0.25rem;
      font-size: ${o ? "0.7rem" : "0.85rem"};
      font-family: monospace;
    }
    
    .markdown-content pre {
      background-color: ${u.tagBackgroundColor};
      padding: ${o ? "0.6rem" : "0.8rem"};
      border-radius: 0.4rem;
      overflow: auto;
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
      max-width: 100%;
    }
    
    .markdown-content pre code {
      background-color: transparent;
      padding: 0;
      white-space: pre-wrap;
      word-break: break-word;
    }
    
    .markdown-content blockquote {
      border-left: 3px solid ${u.tagBackgroundColor};
      padding-left: ${o ? "0.6rem" : "0.8rem"};
      margin-left: 0;
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
      color: ${u.dateColor};
    }
    
    .markdown-content a {
      color: ${u.accentColor || "#3b82f6"};
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .markdown-content a:hover {
      color: ${u.accentColor ? u.accentColor : "#2563eb"};
      text-decoration: underline;
    }
    
    .markdown-content img {
      max-width: 100%;
      height: auto;
      border-radius: 0.4rem;
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    }
    
    .markdown-content hr {
      border: none;
      border-top: 1px solid ${u.tagBackgroundColor};
      margin: ${o ? "1rem 0" : "1.2rem 0"};
    }
    
    /* Improved table styles */
    .markdown-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: ${o ? "0.6rem" : "0.8rem"};
      overflow-x: auto;
      display: block;
      border-radius: 0.4rem;
      border: 1px solid ${u.tagBackgroundColor};
    }
    
    .markdown-content th, 
    .markdown-content td {
      border: 1px solid ${u.tagBackgroundColor};
      padding: ${o ? "0.3rem" : "0.6rem"};
      text-align: left;
    }
    
    .markdown-content th {
      background-color: ${u.tagBackgroundColor};
      font-weight: bold;
      color: ${u.tagTextColor};
    }
    
    /* Improved code block styles */
    .markdown-content pre {
      background-color: ${u.backgroundColor === "#1a1a1a" ? "#2d3748" : u.tagBackgroundColor};
      border-radius: 0.4rem;
      margin: ${o ? "0.6rem 0" : "0.8rem 0"};
      overflow-x: auto;
      position: relative;
      padding-top: ${o ? "1.5rem" : "2rem"};
    }
    
    .markdown-content pre::before {
      content: '';
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
      background: #ff5f56;
      box-shadow: 1.25rem 0 0 #ffbd2e, 2.5rem 0 0 #27c93f;
    }
    
    .markdown-content pre code {
      display: block;
      padding: 0 ${o ? "0.6rem" : "1rem"} ${o ? "0.6rem" : "1rem"};
      overflow-x: auto;
      background-color: transparent;
      color: ${u.backgroundColor === "#1a1a1a" ? "#f8f8f2" : u.textColor};
      font-family: 'Fira Code', monospace, 'Courier New', Courier;
      font-size: ${o ? "0.7rem" : "0.8rem"};
      line-height: 1.6;
    }
    
    /* Language banner for code blocks */
    .markdown-content pre[class*="language-"]::after {
      content: attr(class);
      content: attr(data-lang);
      position: absolute;
      top: 0;
      right: 1rem;
      padding: 0 0.5rem;
      text-transform: uppercase;
      font-size: 0.7rem;
      color: ${u.dateColor};
    }
  `;
  return /* @__PURE__ */ $(de, { children: [
    /* @__PURE__ */ $("style", { children: D }),
    /* @__PURE__ */ $("style", { children: _ }),
    /* @__PURE__ */ $(
      "div",
      {
        className: "right-3 text-xs md:text-base font-medium",
        style: { color: u.dateColor },
        children: $r(t)
      }
    ),
    /* @__PURE__ */ $("div", { className: "markdown-content mt-2", children: /* @__PURE__ */ $(Sr, { markdown: e }) }),
    /* @__PURE__ */ $("div", { className: "mt-2 md:mt-4 custom-scrollbar max-h-full", children: g.length > 0 && /* @__PURE__ */ $("div", { className: "mb-4 md:mb-6 flex flex-wrap gap-2", children: g.map((E, m) => /* @__PURE__ */ $(
      "img",
      {
        src: E.path,
        alt: `Attachment ${m + 1}`,
        className: "max-w-full rounded-lg",
        style: {
          maxHeight: "300px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
        }
      },
      m
    )) }) })
  ] });
}
function Rr(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), u = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(u), n.body.appendChild(a), t && (u.href = t), a.href = e, a.href;
}
const zr = (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function pe(e) {
  const t = [];
  for (let n = 0, u = e.length; n < u; n++)
    t.push(e[n]);
  return t;
}
let ye = null;
function _n(e = {}) {
  return ye || (e.includeStyleProperties ? (ye = e.includeStyleProperties, ye) : (ye = pe(window.getComputedStyle(document.documentElement)), ye));
}
function Ze(e, t) {
  const u = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return u ? parseFloat(u.replace("px", "")) : 0;
}
function Pr(e) {
  const t = Ze(e, "border-left-width"), n = Ze(e, "border-right-width");
  return e.clientWidth + t + n;
}
function Ir(e) {
  const t = Ze(e, "border-top-width"), n = Ze(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function vn(e, t = {}) {
  const n = t.width || Pr(e), u = t.height || Ir(e);
  return { width: n, height: u };
}
function Or() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const K = 16384;
function Mr(e) {
  (e.width > K || e.height > K) && (e.width > K && e.height > K ? e.width > e.height ? (e.height *= K / e.width, e.width = K) : (e.width *= K / e.height, e.height = K) : e.width > K ? (e.height *= K / e.width, e.width = K) : (e.width *= K / e.height, e.height = K));
}
function Ge(e) {
  return new Promise((t, n) => {
    const u = new Image();
    u.onload = () => {
      u.decode().then(() => {
        requestAnimationFrame(() => t(u));
      });
    }, u.onerror = n, u.crossOrigin = "anonymous", u.decoding = "async", u.src = e;
  });
}
async function Nr(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function Ur(e, t, n) {
  const u = "http://www.w3.org/2000/svg", a = document.createElementNS(u, "svg"), o = document.createElementNS(u, "foreignObject");
  return a.setAttribute("width", `${t}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${t} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), a.appendChild(o), o.appendChild(e), Nr(a);
}
const J = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || J(n, t);
};
function Hr(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function Lr(e, t) {
  return _n(t).map((n) => {
    const u = e.getPropertyValue(n), a = e.getPropertyPriority(n);
    return `${n}: ${u}${a ? " !important" : ""};`;
  }).join(" ");
}
function jr(e, t, n, u) {
  const a = `.${e}:${t}`, o = n.cssText ? Hr(n) : Lr(n, u);
  return document.createTextNode(`${a}{${o}}`);
}
function Lt(e, t, n, u) {
  const a = window.getComputedStyle(e, n), o = a.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const c = zr();
  try {
    t.className = `${t.className} ${c}`;
  } catch {
    return;
  }
  const g = document.createElement("style");
  g.appendChild(jr(c, n, a, u)), t.appendChild(g);
}
function Wr(e, t, n) {
  Lt(e, t, ":before", n), Lt(e, t, ":after", n);
}
const jt = "application/font-woff", Wt = "image/jpeg", qr = {
  woff: jt,
  woff2: jt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Wt,
  jpeg: Wt,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Vr(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function dt(e) {
  const t = Vr(e).toLowerCase();
  return qr[t] || "";
}
function Zr(e) {
  return e.split(/,/)[1];
}
function at(e) {
  return e.search(/^(data:)/) !== -1;
}
function wn(e, t) {
  return `data:${t};base64,${e}`;
}
async function bn(e, t, n) {
  const u = await fetch(e, t);
  if (u.status === 404)
    throw new Error(`Resource "${u.url}" not found`);
  const a = await u.blob();
  return new Promise((o, c) => {
    const g = new FileReader();
    g.onerror = c, g.onloadend = () => {
      try {
        o(n({ res: u, result: g.result }));
      } catch (D) {
        c(D);
      }
    }, g.readAsDataURL(a);
  });
}
const nt = {};
function Gr(e, t, n) {
  let u = e.replace(/\?.*/, "");
  return n && (u = e), /ttf|otf|eot|woff2?/i.test(u) && (u = u.replace(/.*\//, "")), t ? `[${t}]${u}` : u;
}
async function gt(e, t, n) {
  const u = Gr(e, t, n.includeQueryParams);
  if (nt[u] != null)
    return nt[u];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let a;
  try {
    const o = await bn(e, n.fetchRequestInit, ({ res: c, result: g }) => (t || (t = c.headers.get("Content-Type") || ""), Zr(g)));
    a = wn(o, t);
  } catch (o) {
    a = n.imagePlaceholder || "";
    let c = `Failed to fetch resource: ${e}`;
    o && (c = typeof o == "string" ? o : o.message), c && console.warn(c);
  }
  return nt[u] = a, a;
}
async function Qr(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Ge(t);
}
async function Xr(e, t) {
  if (e.currentSrc) {
    const o = document.createElement("canvas"), c = o.getContext("2d");
    o.width = e.clientWidth, o.height = e.clientHeight, c == null || c.drawImage(e, 0, 0, o.width, o.height);
    const g = o.toDataURL();
    return Ge(g);
  }
  const n = e.poster, u = dt(n), a = await gt(n, u, t);
  return Ge(a);
}
async function Jr(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await Xe(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Kr(e, t) {
  return J(e, HTMLCanvasElement) ? Qr(e) : J(e, HTMLVideoElement) ? Xr(e, t) : J(e, HTMLIFrameElement) ? Jr(e, t) : e.cloneNode(Cn(e));
}
const Yr = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Cn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function eu(e, t, n) {
  var u, a;
  if (Cn(t))
    return t;
  let o = [];
  return Yr(e) && e.assignedNodes ? o = pe(e.assignedNodes()) : J(e, HTMLIFrameElement) && (!((u = e.contentDocument) === null || u === void 0) && u.body) ? o = pe(e.contentDocument.body.childNodes) : o = pe(((a = e.shadowRoot) !== null && a !== void 0 ? a : e).childNodes), o.length === 0 || J(e, HTMLVideoElement) || await o.reduce((c, g) => c.then(() => Xe(g, n)).then((D) => {
    D && t.appendChild(D);
  }), Promise.resolve()), t;
}
function tu(e, t, n) {
  const u = t.style;
  if (!u)
    return;
  const a = window.getComputedStyle(e);
  a.cssText ? (u.cssText = a.cssText, u.transformOrigin = a.transformOrigin) : _n(n).forEach((o) => {
    let c = a.getPropertyValue(o);
    o === "font-size" && c.endsWith("px") && (c = `${Math.floor(parseFloat(c.substring(0, c.length - 2))) - 0.1}px`), J(e, HTMLIFrameElement) && o === "display" && c === "inline" && (c = "block"), o === "d" && t.getAttribute("d") && (c = `path(${t.getAttribute("d")})`), u.setProperty(o, c, a.getPropertyPriority(o));
  });
}
function nu(e, t) {
  J(e, HTMLTextAreaElement) && (t.innerHTML = e.value), J(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function ru(e, t) {
  if (J(e, HTMLSelectElement)) {
    const n = t, u = Array.from(n.children).find((a) => e.value === a.getAttribute("value"));
    u && u.setAttribute("selected", "");
  }
}
function uu(e, t, n) {
  return J(t, Element) && (tu(e, t, n), Wr(e, t, n), nu(e, t), ru(e, t)), t;
}
async function iu(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const u = {};
  for (let o = 0; o < n.length; o++) {
    const g = n[o].getAttribute("xlink:href");
    if (g) {
      const D = e.querySelector(g), _ = document.querySelector(g);
      !D && _ && !u[g] && (u[g] = await Xe(_, t, !0));
    }
  }
  const a = Object.values(u);
  if (a.length) {
    const o = "http://www.w3.org/1999/xhtml", c = document.createElementNS(o, "svg");
    c.setAttribute("xmlns", o), c.style.position = "absolute", c.style.width = "0", c.style.height = "0", c.style.overflow = "hidden", c.style.display = "none";
    const g = document.createElementNS(o, "defs");
    c.appendChild(g);
    for (let D = 0; D < a.length; D++)
      g.appendChild(a[D]);
    e.appendChild(c);
  }
  return e;
}
async function Xe(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((u) => Kr(u, t)).then((u) => eu(e, u, t)).then((u) => uu(e, u, t)).then((u) => iu(u, t));
}
const yn = /url\((['"]?)([^'"]+?)\1\)/g, ou = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, au = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function lu(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function su(e) {
  const t = [];
  return e.replace(yn, (n, u, a) => (t.push(a), n)), t.filter((n) => !at(n));
}
async function cu(e, t, n, u, a) {
  try {
    const o = n ? Rr(t, n) : t, c = dt(t);
    let g;
    if (a) {
      const D = await a(o);
      g = wn(D, c);
    } else
      g = await gt(o, c, u);
    return e.replace(lu(t), `$1${g}$3`);
  } catch {
  }
  return e;
}
function fu(e, { preferredFontFormat: t }) {
  return t ? e.replace(au, (n) => {
    for (; ; ) {
      const [u, , a] = ou.exec(n) || [];
      if (!a)
        return "";
      if (a === t)
        return `src: ${u};`;
    }
  }) : e;
}
function kn(e) {
  return e.search(yn) !== -1;
}
async function Fn(e, t, n) {
  if (!kn(e))
    return e;
  const u = fu(e, n);
  return su(u).reduce((o, c) => o.then((g) => cu(g, c, t, n)), Promise.resolve(u));
}
async function ke(e, t, n) {
  var u;
  const a = (u = t.style) === null || u === void 0 ? void 0 : u.getPropertyValue(e);
  if (a) {
    const o = await Fn(a, null, n);
    return t.style.setProperty(e, o, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function hu(e, t) {
  await ke("background", e, t) || await ke("background-image", e, t), await ke("mask", e, t) || await ke("-webkit-mask", e, t) || await ke("mask-image", e, t) || await ke("-webkit-mask-image", e, t);
}
async function pu(e, t) {
  const n = J(e, HTMLImageElement);
  if (!(n && !at(e.src)) && !(J(e, SVGImageElement) && !at(e.href.baseVal)))
    return;
  const u = n ? e.src : e.href.baseVal, a = await gt(u, dt(u), t);
  await new Promise((o, c) => {
    e.onload = o, e.onerror = t.onImageErrorHandler ? (...D) => {
      try {
        o(t.onImageErrorHandler(...D));
      } catch (_) {
        c(_);
      }
    } : c;
    const g = e;
    g.decode && (g.decode = o), g.loading === "lazy" && (g.loading = "eager"), n ? (e.srcset = "", e.src = a) : e.href.baseVal = a;
  });
}
async function du(e, t) {
  const u = pe(e.childNodes).map((a) => En(a, t));
  await Promise.all(u).then(() => e);
}
async function En(e, t) {
  J(e, Element) && (await hu(e, t), await pu(e, t), await du(e, t));
}
function gu(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const u = t.style;
  return u != null && Object.keys(u).forEach((a) => {
    n[a] = u[a];
  }), e;
}
const qt = {};
async function Vt(e) {
  let t = qt[e];
  if (t != null)
    return t;
  const u = await (await fetch(e)).text();
  return t = { url: e, cssText: u }, qt[e] = t, t;
}
async function Zt(e, t) {
  let n = e.cssText;
  const u = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (c) => {
    let g = c.replace(u, "$1");
    return g.startsWith("https://") || (g = new URL(g, e.url).href), bn(g, t.fetchRequestInit, ({ result: D }) => (n = n.replace(c, `url(${D})`), [c, D]));
  });
  return Promise.all(o).then(() => n);
}
function Gt(e) {
  if (e == null)
    return [];
  const t = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let u = e.replace(n, "");
  const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const D = a.exec(u);
    if (D === null)
      break;
    t.push(D[0]);
  }
  u = u.replace(a, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, c = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", g = new RegExp(c, "gi");
  for (; ; ) {
    let D = o.exec(u);
    if (D === null) {
      if (D = g.exec(u), D === null)
        break;
      o.lastIndex = g.lastIndex;
    } else
      g.lastIndex = o.lastIndex;
    t.push(D[0]);
  }
  return t;
}
async function mu(e, t) {
  const n = [], u = [];
  return e.forEach((a) => {
    if ("cssRules" in a)
      try {
        pe(a.cssRules || []).forEach((o, c) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let g = c + 1;
            const D = o.href, _ = Vt(D).then((E) => Zt(E, t)).then((E) => Gt(E).forEach((m) => {
              try {
                a.insertRule(m, m.startsWith("@import") ? g += 1 : a.cssRules.length);
              } catch (z) {
                console.error("Error inserting rule from remote css", {
                  rule: m,
                  error: z
                });
              }
            })).catch((E) => {
              console.error("Error loading remote css", E.toString());
            });
            u.push(_);
          }
        });
      } catch (o) {
        const c = e.find((g) => g.href == null) || document.styleSheets[0];
        a.href != null && u.push(Vt(a.href).then((g) => Zt(g, t)).then((g) => Gt(g).forEach((D) => {
          c.insertRule(D, c.cssRules.length);
        })).catch((g) => {
          console.error("Error loading remote stylesheet", g);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(u).then(() => (e.forEach((a) => {
    if ("cssRules" in a)
      try {
        pe(a.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${a.href}`, o);
      }
  }), n));
}
function Du(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => kn(t.style.getPropertyValue("src")));
}
async function _u(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = pe(e.ownerDocument.styleSheets), u = await mu(n, t);
  return Du(u);
}
function xn(e) {
  return e.trim().replace(/["']/g, "");
}
function vu(e) {
  const t = /* @__PURE__ */ new Set();
  function n(u) {
    (u.style.fontFamily || getComputedStyle(u).fontFamily).split(",").forEach((o) => {
      t.add(xn(o));
    }), Array.from(u.children).forEach((o) => {
      o instanceof HTMLElement && n(o);
    });
  }
  return n(e), t;
}
async function wu(e, t) {
  const n = await _u(e, t), u = vu(e);
  return (await Promise.all(n.filter((o) => u.has(xn(o.style.fontFamily))).map((o) => {
    const c = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return Fn(o.cssText, c, t);
  }))).join(`
`);
}
async function bu(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await wu(e, t);
  if (n) {
    const u = document.createElement("style"), a = document.createTextNode(n);
    u.appendChild(a), e.firstChild ? e.insertBefore(u, e.firstChild) : e.appendChild(u);
  }
}
async function Cu(e, t = {}) {
  const { width: n, height: u } = vn(e, t), a = await Xe(e, t, !0);
  return await bu(a, t), await En(a, t), gu(a, t), await Ur(a, n, u);
}
async function yu(e, t = {}) {
  const { width: n, height: u } = vn(e, t), a = await Cu(e, t), o = await Ge(a), c = document.createElement("canvas"), g = c.getContext("2d"), D = t.pixelRatio || Or(), _ = t.canvasWidth || n, E = t.canvasHeight || u;
  return c.width = _ * D, c.height = E * D, t.skipAutoScale || Mr(c), c.style.width = `${_}`, c.style.height = `${E}`, t.backgroundColor && (g.fillStyle = t.backgroundColor, g.fillRect(0, 0, c.width, c.height)), g.drawImage(o, 0, 0, c.width, c.height), c;
}
async function ku(e, t = {}) {
  return (await yu(e, t)).toDataURL();
}
function Fu() {
  const e = (/* @__PURE__ */ new Date()).getTime(), t = Math.floor(Math.random() * 1e4);
  return `share-image-${e}-${t}.png`;
}
async function Eu(e, t = {}) {
  if (!e)
    return t.setErrorMessage && t.setErrorMessage("Element not found"), null;
  try {
    const n = e.getBoundingClientRect();
    console.log("Element dimensions:", n.width, n.height);
    const u = {
      backgroundColor: t.backgroundColor || "#ffffff",
      width: n.width,
      height: n.height,
      style: {
        // 确保元素样式正确
        transform: "none",
        width: `${n.width}px`,
        height: `${n.height}px`
      },
      pixelRatio: 2,
      // 高清图
      skipAutoScale: !0,
      cacheBust: !0
    };
    console.log("Generating image with config:", u);
    const a = await ku(e, u);
    return console.log("Image generated successfully"), a;
  } catch (n) {
    return console.error("Error generating image:", n), t.setErrorMessage && t.setErrorMessage(
      `Error generating image: ${n instanceof Error ? n.message : String(n)}`
    ), null;
  }
}
function xu(e, t = Fu()) {
  const n = document.createElement("a");
  n.download = t, n.href = e, n.click();
}
function Au({ note: e }) {
  const [t, n] = ae(
    gn[0]
  ), [u, a] = ae(!1), [o, c] = ae(!1), [g, D] = ae(null), [_, E] = ae("50%");
  ae(!1);
  const m = Yn(null);
  Fe(() => {
    const N = () => {
      const M = window.innerWidth <= 768;
      c(M), E(M ? "90%" : "50%");
    };
    return N(), window.addEventListener("resize", N), () => {
      window.removeEventListener("resize", N);
    };
  }, []), Fe(() => {
    z(!1);
  }, []), Fe(() => {
    t && z(!1);
  }, [t]);
  const z = async (N = !1) => {
    if (!(!m.current || u)) {
      console.log("Starting image generation"), a(!0), D(null);
      try {
        const M = m.current, U = M.style.position, A = M.style.width;
        M.style.position = "relative", M.style.width = o ? "90vw" : "50vw", await new Promise((q) => setTimeout(q, 100));
        const I = await Eu(M, {
          setErrorMessage: (q) => {
            console.log("Error message:", q), q && D(q);
          },
          backgroundColor: t.backgroundColor
        });
        if (M.style.position = U, M.style.width = A, I)
          console.log("Image generated successfully"), N && xu(I);
        else
          throw new Error("Failed to generate image");
      } catch (M) {
        console.error("Error generating image:", M), D(
          `${window.Blinko.i18n.t("errorGenerating")}${M instanceof Error ? M.message : String(M)}`
        );
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ $(
    "div",
    {
      className: "w-full flex flex-col justify-start items-center p-2 md:p-5",
      style: {
        overflow: "auto",
        height: "90vh"
      },
      children: [
        /* @__PURE__ */ $(
          "div",
          {
            className: "w-full max-w-full mb-3 md:mb-4 overflow-x-auto ",
            style: {
              minHeight: o ? "120px" : "150px"
            },
            children: /* @__PURE__ */ $(
              gr,
              {
                selectedTemplate: t,
                onSelectTemplate: n
              }
            )
          }
        ),
        /* @__PURE__ */ $("div", { className: "w-full flex justify-center mb-4 gap-2", children: /* @__PURE__ */ $(
          "button",
          {
            onClick: () => {
              z(!0);
            },
            className: "bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg border-none text-sm font-medium flex items-center gap-2 transition-all duration-200 active:scale-[0.98]",
            disabled: u,
            children: u ? window.Blinko.i18n.t("generatingImage") : window.Blinko.i18n.t("downLoadImage")
          }
        ) }),
        /* @__PURE__ */ $(
          "div",
          {
            ref: m,
            className: "rounded-xl p-4 md:p-[60px] flex flex-col relative transition-all duration-300",
            style: {
              backgroundColor: t.backgroundColor,
              color: t.textColor,
              fontFamily: t.fontFamily || "system-ui, sans-serif",
              borderRadius: t.borderRadius || "15px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              width: _,
              height: "fit-content"
            },
            children: /* @__PURE__ */ $(
              Tr,
              {
                content: (e == null ? void 0 : e.content) || "",
                createdAt: (e == null ? void 0 : e.createdAt) || (/* @__PURE__ */ new Date()).toISOString(),
                tags: (e == null ? void 0 : e.tags) || [],
                template: t,
                attachments: (e == null ? void 0 : e.attachments) || []
              }
            )
          }
        ),
        g && /* @__PURE__ */ $("div", { className: "mt-3 md:mt-4 p-2 md:p-3 bg-red-100 text-red-700 rounded-md text-xs md:text-sm", children: g }),
        u && /* @__PURE__ */ $("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ $("div", { className: "bg-white p-4 md:p-5 rounded-lg shadow-lg flex flex-col items-center", children: [
          /* @__PURE__ */ $("div", { className: "w-6 h-6 md:w-8 md:h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2 md:mb-3" }),
          /* @__PURE__ */ $("p", { className: "text-gray-800 text-sm md:text-base", children: window.Blinko.i18n.t("generating") })
        ] }) })
      ]
    }
  );
}
function Bu() {
  const [e, t] = ae(""), [n, u] = ae(!0), a = window.Blinko.i18n;
  Fe(() => {
    window.Blinko.api.config.getPluginConfig.query({
      pluginName: "my-note-plugin"
    }).then((c) => {
      t(c.apiToken);
    });
  }, []);
  const o = async () => {
    window.Blinko.toast.success(a.t("settingsSaved")), window.Blinko.closeDialog(), await window.Blinko.api.config.setPluginConfig.mutate({
      pluginName: "my-note-plugin",
      key: "apiToken",
      value: e
    }), window.Blinko.api.config.getPluginConfig.query({
      pluginName: "my-note-plugin"
    });
  };
  return /* @__PURE__ */ $("div", { className: "max-w-2xl mx-auto p-2 rounded-lg", children: [
    /* @__PURE__ */ $("div", { className: "mb-6", children: /* @__PURE__ */ $("label", { className: "block text-sm font-medium mb-2", children: [
      a.t("apiTokenLabel"),
      /* @__PURE__ */ $(
        "input",
        {
          value: e,
          onChange: (c) => t(c.currentTarget.value),
          placeholder: a.t("enterApiToken"),
          className: "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm bg-primary!"
        }
      )
    ] }) }),
    /* @__PURE__ */ $("div", { className: "mb-6", children: /* @__PURE__ */ $("label", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ $(
        "input",
        {
          type: "checkbox",
          checked: n,
          onChange: (c) => u(c.currentTarget.checked),
          className: "h-4 w-4 text-primary-foreground bg-primary rounded"
        }
      ),
      /* @__PURE__ */ $("span", { className: "text-sm text-desc", children: a.t("enableNotifications") })
    ] }) }),
    /* @__PURE__ */ $(
      "button",
      {
        onClick: o,
        className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-primary text-primary-foreground",
        children: a.t("saveSettings")
      }
    )
  ] });
}
System.register([], (e) => ({
  execute: () => {
    e("default", class {
      constructor() {
        // Flag indicating this plugin has a settings panel
        Ye(this, "withSettingPanel", !0);
        /**
         * Renders the settings panel UI
         * @returns {HTMLElement} Container element with rendered settings component
         */
        Ye(this, "renderSettingPanel", () => {
          const n = document.createElement("div");
          return Pt(/* @__PURE__ */ $(Bu, {}), n), n;
        });
        Object.assign(this, { name: "generate-share-image", author: "blinko-offical", url: "https://github.com/blinko-space/generate-share-image", version: "0.0.2", minAppVersion: "0.0.0", displayName: { default: "Generate share image", zh: "生成分享图片" }, description: { default: "Use for right-click notes to generate sharing diagrams.", zh: "用于右键笔记生成分享图" }, readme: { default: "README.md", zh: "README_zh.md" } });
      }
      /**
       * Initializes the plugin
       * Sets up toolbar icons, right-click menus, and AI write prompts
       */
      async init() {
        this.initI18n(), window.Blinko.addRightClickMenu({
          name: "generate-share-image",
          label: window.Blinko.i18n.t("generateShareImage"),
          icon: "tabler:share",
          onClick: (n) => {
            console.log(JSON.parse(JSON.stringify(n))), window.Blinko.showDialog({
              title: window.Blinko.i18n.t("generateShareImage"),
              size: "full",
              content: () => {
                const u = document.createElement("div");
                return u.setAttribute("data-plugin", "generate-share-image"), Pt(/* @__PURE__ */ $(Au, { note: {
                  title: n.title,
                  content: n.content,
                  createdAt: n.createdAt,
                  tags: n.tags.map((a) => a.name),
                  attachments: n.attachments ? n.attachments.map((a) => ({
                    path: a.path,
                    type: a.type
                  })) : []
                } }), u), u;
              }
            });
          }
        });
      }
      /**
       * Initializes internationalization resources
       * Adds English and Chinese translation bundles
       */
      initI18n() {
        window.Blinko.i18n.addResourceBundle("en", "translation", { title: "My Plugin", countLabel: "Count is {{count}}", successMessage: "Success!", downLoadImage: "Download Image", generatingImage: "Generating...", generating: "Generating image...", errorGenerating: "Error generating image: ", darkMode: "Dark Mode", lightMode: "Light Mode", sepiaMode: "Vintage Style", oceanStyle: "Ocean Style", forestStyle: "Forest Style", customTemplate: "Custom Template", createCustomTemplate: "Create Custom Template", templateName: "Template Name", backgroundColor: "Background Color", textColor: "Text Color", dateColor: "Date Color", tagBackgroundColor: "Tag Background Color", tagTextColor: "Tag Text Color", accentColor: "Accent Color", font: "Font", borderRadius: "Border Radius", saveTemplate: "Save Template", systemDefaultFont: "System Default Font", serifFont: "Serif Font", monospaceFont: "Monospace Font", handwritingFont: "Handwriting Font", generateShareImage: "Generate Share Image" }), window.Blinko.i18n.addResourceBundle("zh", "translation", { title: "我的插件", countLabel: "计数为 {{count}}", successMessage: "成功！", downLoadImage: "下载图片", generatingImage: "生成中...", generating: "正在生成图片...", errorGenerating: "生成图片时发生错误: ", darkMode: "深色模式", lightMode: "浅色模式", sepiaMode: "复古风格", oceanStyle: "海洋风格", forestStyle: "森林风格", customTemplate: "自定义模板", createCustomTemplate: "创建自定义模板", templateName: "模板名称", backgroundColor: "背景颜色", textColor: "文本颜色", dateColor: "日期颜色", tagBackgroundColor: "标签背景颜色", tagTextColor: "标签文本颜色", accentColor: "强调色", font: "字体", borderRadius: "圆角大小", saveTemplate: "保存模板", systemDefaultFont: "系统默认字体", serifFont: "衬线字体 (Serif)", monospaceFont: "等宽字体 (Monospace)", handwritingFont: "手写体 (Comic Sans)", generateShareImage: "生成分享图片" });
      }
      /**
       * Cleanup function called when plugin is disabled
       */
      destroy() {
        console.log("Plugin destroyed");
      }
    });
  }
}));
