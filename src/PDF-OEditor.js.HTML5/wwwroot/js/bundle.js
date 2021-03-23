var app = function () {
    "use strict";
    function t() { }
    const e = t => t;
    function n(t) {
        return t()
    }
    function o() {
        return Object.create(null)
    }
    function i(t) {
        t.forEach(n)
    }
    function r(t) {
        return "function" == typeof t
    }
    function s(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    function l(t, e) {
        return t != t ? e == e : t !== e
    }
    function a(t, e, n, o) {
        if (t) {
            const i = c(t, e, n, o);
            return t[0](i)
        }
    }
    function c(t, e, n, o) {
        return t[1] && o ? function (t, e) {
            for (const n in e)
                t[n] = e[n];
            return t
        }
            (n.ctx.slice(), t[1](o(e))) : n.ctx
    }
    function u(t, e, n, o) {
        if (t[2] && o) {
            const i = t[2](o(n));
            if (void 0 === e.dirty)
                return i;
            if ("object" == typeof i) {
                const t = [],
                    n = Math.max(e.dirty.length, i.length);
                for (let o = 0; o < n; o += 1)
                    t[o] = e.dirty[o] | i[o];
                return t
            }
            return e.dirty | i
        }
        return e.dirty
    }
    function d(e) {
        return e && r(e.destroy) ? e.destroy : t
    }
    const f = "undefined" != typeof window;
    let h = f ? () => window.performance.now() : () => Date.now(),
        p = f ? t => requestAnimationFrame(t) : t;
    const g = new Set;
    function m(t) {
        g.forEach(e => {
            e.c(t) || (g.delete(e), e.f())
        }),
            0 !== g.size && p(m)
    }
    function w(t, e) {
        t.appendChild(e)
    }
    function y(t, e, n) {
        t.insertBefore(e, n || null)
    }
    function v(t) {
        t.parentNode.removeChild(t)
    }
    function x(t) {
        return document.createElement(t)
    }
    function b(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function $(t) {
        return document.createTextNode(t)
    }
    function E() {
        return $(" ")
    }
    function L() {
        return $("")
    }
    function k(t, e, n, o) {
        return t.addEventListener(e, n, o),
            () => t.removeEventListener(e, n, o)
    }
    function _(t) {
        return function (e) {
            return e.preventDefault(),
                t.call(this, e)
        }
    }
    function z(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }
    function H(t) {
        return "" === t ? void 0 : +t
    }
    function S(t, e) {
        (null != e || t.value) && (t.value = e)
    }
    function F(t, e, n, o) {
        t.style.setProperty(e, n, o ? "important" : "")
    }
    function M(t, e) {
        for (let n = 0; n < t.options.length; n += 1) {
            const o = t.options[n];
            if (o.__value === e)
                return void (o.selected = !0)
        }
    }
    function C(t, e, n) {
        t.classList[n ? "add" : "remove"](e)
    }
    function j(t, e) {
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, !1, !1, e),
            n
    }
    const P = new Set;
    let T,
        D = 0;
    function R(t, e, n, o, i, r, s, l = 0) {
        const a = 16.666 / o;
        let c = "{\n";
        for (let t = 0; t <= 1; t += a) {
            const o = e + (n - e) * r(t);
            c += 100 * t + `%{${s(o, 1 - o)}}\n`
        }
        const u = c + `100% {${s(n, 1 - n)}}\n}`,
            d = `__svelte_${function (t) { let e = 5381, n = t.length; for (; n--;)e = (e << 5) - e ^ t.charCodeAt(n); return e >>> 0 }(u)}_${l}`,
            f = t.ownerDocument;
        P.add(f);
        const h = f.__svelte_stylesheet || (f.__svelte_stylesheet = f.head.appendChild(x("style")).sheet),
            p = f.__svelte_rules || (f.__svelte_rules = {});
        p[d] || (p[d] = !0, h.insertRule(`@keyframes ${d} ${u}`, h.cssRules.length));
        const g = t.style.animation || "";
        return t.style.animation = `${g ? g + ", " : ""}${d} ${o}ms linear ${i}ms 1 both`,
            D += 1,
            d
    }
    function A(t, e) {
        const n = (t.style.animation || "").split(", "),
            o = n.filter(e ? t => t.indexOf(e) < 0 : t => -1 === t.indexOf("__svelte")),
            i = n.length - o.length;
        i && (t.style.animation = o.join(", "), D -= i, D || p(() => {
            D || (P.forEach(t => {
                const e = t.__svelte_stylesheet;
                let n = e.cssRules.length;
                for (; n--;)
                    e.deleteRule(n);
                t.__svelte_rules = {}
            }), P.clear())
        }))
    }
    function B(t) {
        T = t
    }
    function W() {
        if (!T)
            throw new Error("Function called outside component initialization");
        return T
    }
    function N(t) {
        W().$$.on_mount.push(t)
    }
    function O() {
        const t = W();
        return (e, n) => {
            const o = t.$$.callbacks[e];
            if (o) {
                const i = j(e, n);
                o.slice().forEach(e => {
                    e.call(t, i)
                })
            }
        }
    }
    function X(t, e) {
        const n = t.$$.callbacks[e.type];
        n && n.slice().forEach(t => t(e))
    }
    const Y = [],
        G = [],
        U = [],
        q = [],
        I = Promise.resolve();
    let J = !1;
    function K(t) {
        U.push(t)
    }
    let V = !1;
    const Q = new Set;
    function Z() {
        if (!V) {
            V = !0;
            do {
                for (let t = 0; t < Y.length; t += 1) {
                    const e = Y[t];
                    B(e),
                        tt(e.$$)
                }
                for (Y.length = 0; G.length;)
                    G.pop()();
                for (let t = 0; t < U.length; t += 1) {
                    const e = U[t];
                    Q.has(e) || (Q.add(e), e())
                }
                U.length = 0
            } while (Y.length);
            for (; q.length;)
                q.pop()();
            J = !1,
                V = !1,
                Q.clear()
        }
    }
    function tt(t) {
        if (null !== t.fragment) {
            t.update(),
                i(t.before_update);
            const e = t.dirty;
            t.dirty = [-1],
                t.fragment && t.fragment.p(t.ctx, e),
                t.after_update.forEach(K)
        }
    }
    let et;
    function nt(t, e, n) {
        t.dispatchEvent(j(`${e ? "intro" : "outro"}${n}`))
    }
    const ot = new Set;
    let it;
    function rt() {
        it = {
            r: 0,
            c: [],
            p: it
        }
    }
    function st() {
        it.r || i(it.c),
            it = it.p
    }
    function lt(t, e) {
        t && t.i && (ot.delete(t), t.i(e))
    }
    function at(t, e, n, o) {
        if (t && t.o) {
            if (ot.has(t))
                return;
            ot.add(t),
                it.c.push(() => {
                    ot.delete(t),
                        o && (n && t.d(1), o())
                }),
                t.o(e)
        }
    }
    const ct = {
        duration: 0
    };
    function ut(n, o, s, l) {
        let a = o(n, s),
            c = l ? 0 : 1,
            u = null,
            d = null,
            f = null;
        function w() {
            f && A(n, f)
        }
        function y(t, e) {
            const n = t.b - c;
            return e *= Math.abs(n), {
                a: c,
                b: t.b,
                d: n,
                duration: e,
                start: t.start,
                end: t.start + e,
                group: t.group
            }
        }
        function v(o) {
            const {
                delay: r = 0,
                duration: s = 300,
                easing: l = e,
                tick: v = t,
                css: x
            } = a || ct,
                b = {
                    start: h() + r,
                    b: o
                };
            o || (b.group = it, it.r += 1),
                u ? d = b : (x && (w(), f = R(n, c, o, s, r, l, x)), o && v(0, 1), u = y(b, s), K(() => nt(n, o, "start")), function (t) {
                    let e;
                    0 === g.size && p(m),
                        new Promise(n => {
                            g.add(e = {
                                c: t,
                                f: n
                            })
                        })
                }
                    (t => {
                        if (d && t > d.start && (u = y(d, s), d = null, nt(n, u.b, "start"), x && (w(), f = R(n, c, u.b, u.duration, 0, l, a.css))), u)
                            if (t >= u.end)
                                v(c = u.b, 1 - c), nt(n, u.b, "end"), d || (u.b ? w() : --u.group.r || i(u.group.c)), u = null;
                            else if (t >= u.start) {
                                const e = t - u.start;
                                c = u.a + u.d * l(e / u.duration),
                                    v(c, 1 - c)
                            }
                        return !(!u && !d)
                    }))
        }
        return {
            run(t) {
                r(a) ? (et || (et = Promise.resolve(), et.then(() => {
                    et = null
                })), et).then(() => {
                    a = a(),
                        v(t)
                }) : v(t)
            },
            end() {
                w(),
                    u = d = null
            }
        }
    }
    function dt(t, e) {
        at(t, 1, 1, () => {
            e.delete(t.key)
        })
    }
    function ft(t, e, n, o, i, r, s, l, a, c, u, d) {
        let f = t.length,
            h = r.length,
            p = f;
        const g = {};
        for (; p--;)
            g[t[p].key] = p;
        const m = [],
            w = new Map,
            y = new Map;
        for (p = h; p--;) {
            const t = d(i, r, p),
                l = n(t);
            let a = s.get(l);
            a ? o && a.p(t, e) : (a = c(l, t), a.c()),
                w.set(l, m[p] = a),
                l in g && y.set(l, Math.abs(p - g[l]))
        }
        const v = new Set,
            x = new Set;
        function b(t) {
            lt(t, 1),
                t.m(l, u, s.has(t.key)),
                s.set(t.key, t),
                u = t.first,
                h--
        }
        for (; f && h;) {
            const e = m[h - 1],
                n = t[f - 1],
                o = e.key,
                i = n.key;
            e === n ? (u = e.first, f--, h--) : w.has(i) ? !s.has(o) || v.has(o) ? b(e) : x.has(i) ? f-- : y.get(o) > y.get(i) ? (x.add(o), b(e)) : (v.add(i), f--) : (a(n, s), f--)
        }
        for (; f--;) {
            const e = t[f];
            w.has(e.key) || a(e, s)
        }
        for (; h;)
            b(m[h - 1]);
        return m
    }
    function ht(t) {
        t && t.c()
    }
    function pt(t, e, o) {
        const {
            fragment: s,
            on_mount: l,
            on_destroy: a,
            after_update: c
        } = t.$$;
        s && s.m(e, o),
            K(() => {
                const e = l.map(n).filter(r);
                a ? a.push(...e) : i(e),
                    t.$$.on_mount = []
            }),
            c.forEach(K)
    }
    function gt(t, e) {
        const n = t.$$;
        null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
    }
    function mt(t, e) {
        -1 === t.$$.dirty[0] && (Y.push(t), J || (J = !0, I.then(Z)), t.$$.dirty.fill(0)),
            t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }
    function wt(e, n, r, s, l, a, c = [-1]) {
        const u = T;
        B(e);
        const d = n.props || {},
            f = e.$$ = {
                fragment: null,
                ctx: null,
                props: a,
                update: t,
                not_equal: l,
                bound: o(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(u ? u.$$.context : []),
                callbacks: o(),
                dirty: c
            };
        let h = !1;
        if (f.ctx = r ? r(e, d, (t, n, ...o) => {
            const i = o.length ? o[0] : n;
            return f.ctx && l(f.ctx[t], f.ctx[t] = i) && (f.bound[t] && f.bound[t](i), h && mt(e, t)),
                n
        }) : [], f.update(), h = !0, i(f.before_update), f.fragment = !!s && s(f.ctx), n.target) {
            if (n.hydrate) {
                const t = function (t) {
                    return Array.from(t.childNodes)
                }
                    (n.target);
                f.fragment && f.fragment.l(t),
                    t.forEach(v)
            } else
                f.fragment && f.fragment.c();
            n.intro && lt(e.$$.fragment),
                pt(e, n.target, n.anchor),
                Z()
        }
        B(u)
    }
    class yt {
        $destroy() {
            gt(this, 1),
                this.$destroy = t
        }
        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return n.push(e),
                () => {
                    const t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1)
                }
        }
        $set() { }
    }
    function vt(t) {
        const e = t - 1;
        return e * e * e + 1
    }
    function xt(t, {
        delay: e = 0,
        duration: n = 400,
        easing: o = vt,
        x: i = 0,
        y: r = 0,
        opacity: s = 0
    }) {
        const l = getComputedStyle(t),
            a = +l.opacity,
            c = "none" === l.transform ? "" : l.transform,
            u = a * (1 - s);
        return {
            delay: e,
            duration: n,
            easing: o,
            css: (t, e) => `\n\t\t\ttransform: ${c} translate(${(1 - t) * i}px, ${(1 - t) * r}px);\n\t\t\topacity: ${a - u * e}`
        }
    }
    class bt extends yt {
        constructor(t) {
            super(),
                wt(this, t, null, null, s, {})
        }
    }
    function $t(e) {
        let n,
            o;
        return {
            c() {
                n = x("div"),
                    o = x("canvas"),
                    z(o, "class", "max-w-full"),
                    F(o, "width", e[1] + "px"),
                    z(o, "width", e[1]),
                    z(o, "height", e[2])
            },
            m(t, i) {
                y(t, n, i),
                    w(n, o),
                    e[9](o)
            },
            p(t, [e]) {
                2 & e && F(o, "width", t[1] + "px"),
                    2 & e && z(o, "width", t[1]),
                    4 & e && z(o, "height", t[2])
            },
            i: t,
            o: t,
            d(t) {
                t && v(n),
                    e[9](null)
            }
        }
    }
    function Et(t, e, n) {
        let {
            page: o
        } = e;
        const i = O();
        let r,
            s,
            l;
        function a() {
            i("measure", {
                scale: r.clientWidth / s
            })
        }
        async function c() {
            const t = await o,
                e = r.getContext("2d"),
                i = t.getViewport({
                    scale: 1,
                    rotation: 0
                });
            n(1, s = i.width),
                n(2, l = i.height),
                await t.render({
                    canvasContext: e,
                    viewport: i
                }).promise,
                a(),
                window.addEventListener("resize", a)
        }
        var u;
        return N(c),
            u = () => {
                window.removeEventListener("resize", a)
            },
            W().$$.on_destroy.push(u),
            t.$set = t => {
                "page" in t && n(3, o = t.page)
            },
            [r, s, l, o, i, void 0, void 0, a, c, function (t) {
                G[t ? "unshift" : "push"](() => {
                    n(0, r = t)
                })
            }
            ]
    }
    class Lt extends yt {
        constructor(t) {
            super(),
                wt(this, t, Et, $t, s, {
                    page: 3
                })
        }
    }
    function kt(t) {
        let e,
            n;
        function o(o) {
            e = o.clientX,
                n = o.clientY;
            const s = o.target;
            t.dispatchEvent(new CustomEvent("panstart", {
                detail: {
                    x: e,
                    y: n,
                    target: s
                }
            })),
                window.addEventListener("mousemove", i),
                window.addEventListener("mouseup", r)
        }
        function i(o) {
            const i = o.clientX - e,
                r = o.clientY - n;
            e = o.clientX,
                n = o.clientY,
                t.dispatchEvent(new CustomEvent("panmove", {
                    detail: {
                        x: e,
                        y: n,
                        dx: i,
                        dy: r
                    }
                }))
        }
        function r(o) {
            e = o.clientX,
                n = o.clientY,
                t.dispatchEvent(new CustomEvent("panend", {
                    detail: {
                        x: e,
                        y: n
                    }
                })),
                window.removeEventListener("mousemove", i),
                window.removeEventListener("mouseup", r)
        }
        function s(o) {
            if (o.touches.length > 1)
                return;
            const i = o.touches[0];
            e = i.clientX,
                n = i.clientY;
            const r = i.target;
            t.dispatchEvent(new CustomEvent("panstart", {
                detail: {
                    x: e,
                    y: n,
                    target: r
                }
            })),
                window.addEventListener("touchmove", l, {
                    passive: !1
                }),
                window.addEventListener("touchend", a)
        }
        function l(o) {
            if (o.preventDefault(), o.touches.length > 1)
                return;
            const i = o.touches[0],
                r = i.clientX - e,
                s = i.clientY - n;
            e = i.clientX,
                n = i.clientY,
                t.dispatchEvent(new CustomEvent("panmove", {
                    detail: {
                        x: e,
                        y: n,
                        dx: r,
                        dy: s
                    }
                }))
        }
        function a(o) {
            const i = o.changedTouches[0];
            e = i.clientX,
                n = i.clientY,
                t.dispatchEvent(new CustomEvent("panend", {
                    detail: {
                        x: e,
                        y: n
                    }
                })),
                window.removeEventListener("touchmove", l),
                window.removeEventListener("touchend", a)
        }
        return t.addEventListener("mousedown", o),
            t.addEventListener("touchstart", s), {
            destroy() {
                t.removeEventListener("mousedown", o),
                    t.removeEventListener("touchstart", s)
            }
        }
    }
    const _t = [{
        name: "pdfjsLib",
        src: "https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.min.js"
    }, {
        name: "PDFLib",
        src: "https://unpkg.com/pdf-lib@1.4.0/dist/pdf-lib.min.js"
    }, {
        name: "download",
        src: "https://unpkg.com/downloadjs@1.4.7"
    }, {
        name: "makeTextPDF",
        src: "/js/makeTextPDF.js"
    }
    ],
        zt = {};
    function Ht(t) {
        if (zt[t])
            return zt[t];
        const e = _t.find(e => e.name === t);
        if (!e)
            throw new Error(`Script ${t} not exists.`);
        return St(e)
    }
    function St({
        name: t,
        src: e
    }) {
        return zt[t] || (zt[t] = new Promise((n, o) => {
            const i = document.createElement("script");
            i.src = e,
                i.onload = () => {
                    n(window[t]),
                        console.log(t + " is loaded.")
                },
                i.onerror = () => {
                    o(`The script ${t} didn't load correctly.`),
                        alert("Some scripts did not load correctly. Please reload and try again.")
                },
                document.body.appendChild(i)
        })),
            zt[t]
    }

    const Ft = {
        Courier: {
            correction: (t, e) => (t * e - t) / 2 + t / 6
        },
        Helvetica: {
            correction: (t, e) => (t * e - t) / 2 + t / 10
        },
        "Times-Roman": {
            correction: (t, e) => (t * e - t) / 2 + t / 7
        }
    },
        Mt = {
            ...Ft,
            "TexKai": {
                src: "/fonts/CK.ttf",
                correction: (t, e) => (t * e - t) / 2
            }
        };

    function Ct(t) {
        if (Ft[t])
            return Ft[t];
        const e = Mt[t];
        if (!e)
            throw new Error(`Font '${t}' not exists.`);
        return Ft[t] = fetch(e.src).then(t => t.arrayBuffer()).then(n => {
            const o = new FontFace(t, n);
            return o.display = "swap",
                o.load().then(() => document.fonts.add(o)), {
                ...e,
                buffer: n
            }
        }),
            Ft[t]
    }

    function jt(t) {
        return new Promise((e, n) => {
            const o = new FileReader;
            o.onload = () => e(o.result),
                o.onerror = n,
                o.readAsArrayBuffer(t)
        })
    }

    function Pt(e) {
        let n,
            o,
            r,
            s,
            l,
            a,
            c,
            u;
        return {
            c() {
                n = x("div"),
                    o = x("div"),
                    o.innerHTML = '<div data-direction="left" class="resize-border h-full w-1 left-0 top-0 border-l cursor-ew-resize svelte-y5b9ho"></div> \n    <div data-direction="top" class="resize-border w-full h-1 left-0 top-0 border-t cursor-ns-resize svelte-y5b9ho"></div> \n    <div data-direction="bottom" class="resize-border w-full h-1 left-0 bottom-0 border-b cursor-ns-resize svelte-y5b9ho"></div> \n    <div data-direction="right" class="resize-border h-full w-1 right-0 top-0 border-r cursor-ew-resize svelte-y5b9ho"></div> \n    <div data-direction="left-top" class="resize-corner left-0 top-0 cursor-nwse-resize transform\n      -translate-x-1/2 -translate-y-1/2 md:scale-25 svelte-y5b9ho"></div> \n    <div data-direction="right-top" class="resize-corner right-0 top-0 cursor-nesw-resize transform\n      translate-x-1/2 -translate-y-1/2 md:scale-25 svelte-y5b9ho"></div> \n    <div data-direction="left-bottom" class="resize-corner left-0 bottom-0 cursor-nesw-resize transform\n      -translate-x-1/2 translate-y-1/2 md:scale-25 svelte-y5b9ho"></div> \n    <div data-direction="right-bottom" class="resize-corner right-0 bottom-0 cursor-nwse-resize transform\n      translate-x-1/2 translate-y-1/2 md:scale-25 svelte-y5b9ho"></div>',
                    s = E(),
                    l = x("div"),
                    l.innerHTML = '<img class="w-full h-full" src="/img/delete.svg" alt="delete object">',
                    a = E(),
                    c = x("canvas"),
                    z(o, "class", "absolute w-full h-full cursor-grab svelte-y5b9ho"),
                    C(o, "cursor-grabbing", "move" === e[5]),
                    C(o, "operation", e[5]),
                    z(l, "class", "absolute left-0 top-0 right-0 w-12 h-12 m-auto rounded-full bg-white\n    cursor-pointer transform -translate-y-1/2 md:scale-25"),
                    z(c, "class", "w-full h-full"),
                    z(n, "class", "absolute left-0 top-0 select-none"),
                    F(n, "width", e[0] + e[8] + "px"),
                    F(n, "height", e[1] + e[9] + "px"),
                    F(n, "transform", "translate(" + (e[2] + e[6]) + "px,\n  " + (e[3] + e[7]) + "px)")
            },
            m(t, f, h) {
                y(t, n, f),
                    w(n, o),
                    w(n, s),
                    w(n, l),
                    w(n, a),
                    w(n, c),
                    e[22](c),
                    h && i(u),
                    u = [d(r = kt.call(null, o)), k(o, "panstart", e[12]), k(o, "panmove", e[10]), k(o, "panend", e[11]), k(l, "click", e[13])]
            },
            p(t, [e]) {
                32 & e && C(o, "cursor-grabbing", "move" === t[5]),
                    32 & e && C(o, "operation", t[5]),
                    257 & e && F(n, "width", t[0] + t[8] + "px"),
                    514 & e && F(n, "height", t[1] + t[9] + "px"),
                    204 & e && F(n, "transform", "translate(" + (t[2] + t[6]) + "px,\n  " + (t[3] + t[7]) + "px)")
            },
            i: t,
            o: t,
            d(t) {
                t && v(n),
                    e[22](null),
                    i(u)
            }
        }
    }
    function Tt(t, e, n) {
        let {
            payload: o
        } = e, {
            file: i
        } = e, {
            width: r
        } = e, {
            height: s
        } = e, {
            x: l
        } = e, {
            y: a
        } = e, {
            pageScale: c = 1
        } = e;
        const u = O();
        let d,
            f,
            h,
            p = "",
            g = [],
            m = 0,
            w = 0,
            y = 0,
            v = 0;
        async function x() {
            n(4, h.width = r, h),
                n(4, h.height = s, h),
                h.getContext("2d").drawImage(o, 0, 0);
            let t = 1;
            r > 500 && (t = 500 / r),
                s > 500 && (t = Math.min(t, 500 / s)),
                u("update", {
                    width: r * t,
                    height: s * t
                }),
                ["image/jpeg", "image/png"].includes(i.type) || h.toBlob(t => {
                    u("update", {
                        file: t
                    })
                })
        }
        return N(x),
            t.$set = t => {
                "payload" in t && n(14, o = t.payload),
                    "file" in t && n(15, i = t.file),
                    "width" in t && n(0, r = t.width),
                    "height" in t && n(1, s = t.height),
                    "x" in t && n(2, l = t.x),
                    "y" in t && n(3, a = t.y),
                    "pageScale" in t && n(16, c = t.pageScale)
            },
            [r, s, l, a, h, p, m, w, y, v, function (t) {
                const e = (t.detail.x - d) / c,
                    o = (t.detail.y - f) / c;
                "move" === p ? (n(6, m = e), n(7, w = o)) : "scale" === p && (g.includes("left") && (n(6, m = e), n(8, y = -e)), g.includes("top") && (n(7, w = o), n(9, v = -o)), g.includes("right") && n(8, y = e), g.includes("bottom") && n(9, v = o))
            }, function (t) {
                "move" === p ? (u("update", {
                    x: l + m,
                    y: a + w
                }), n(6, m = 0), n(7, w = 0)) : "scale" === p && (u("update", {
                    x: l + m,
                    y: a + w,
                    width: r + y,
                    height: s + v
                }), n(6, m = 0), n(7, w = 0), n(8, y = 0), n(9, v = 0), g = []),
                    n(5, p = "")
            }, function (t) {
                if (d = t.detail.x, f = t.detail.y, t.detail.target === t.currentTarget)
                    return n(5, p = "move");
                n(5, p = "scale"),
                    g = t.detail.target.dataset.direction.split("-")
            }, function () {
                u("delete")
            }, o, i, c, d, f, g, u, x, function (t) {
                G[t ? "unshift" : "push"](() => {
                    n(4, h = t)
                })
            }
            ]
    }
    class Dt extends yt {
        constructor(t) {
            super(),
                wt(this, t, Tt, Pt, l, {
                    payload: 14,
                    file: 15,
                    width: 0,
                    height: 1,
                    x: 2,
                    y: 3,
                    pageScale: 16
                })
        }
    }
    function Rt(t) {
        let e,
            n;
        const o = t[2].default,
            i = a(o, t, t[1], null);
        return {
            c() {
                e = x("div"),
                    i && i.c()
            },
            m(o, r) {
                y(o, e, r),
                    i && i.m(e, null),
                    t[3](e),
                    n = !0
            },
            p(t, [e]) {
                i && i.p && 2 & e && i.p(c(o, t, t[1], null), u(o, t[1], e, null))
            },
            i(t) {
                n || (lt(i, t), n = !0)
            },
            o(t) {
                at(i, t),
                    n = !1
            },
            d(n) {
                n && v(e),
                    i && i.d(n),
                    t[3](null)
            }
        }
    }
    function At(t, e, n) {
        let o, {
            $$slots: i = {},
            $$scope: r
        } = e;
        return t.$set = t => {
            "$$scope" in t && n(1, r = t.$$scope)
        },
            t.$$.update = () => {
                1 & t.$$.dirty && o && document.body.appendChild(o)
            },
            [o, r, i, function (t) {
                G[t ? "unshift" : "push"](() => {
                    n(0, o = t)
                })
            }
            ]
    }
    class Bt extends yt {
        constructor(t) {
            super(),
                wt(this, t, At, Rt, s, {})
        }
    }
    function Wt(t) {
        let e,
            n;
        const o = t[0].default,
            i = a(o, t, t[1], null);
        return {
            c() {
                e = x("div"),
                    i && i.c(),
                    z(e, "class", "fixed z-10 top-0 left-0 right-0 h-12")
            },
            m(t, o) {
                y(t, e, o),
                    i && i.m(e, null),
                    n = !0
            },
            p(t, e) {
                i && i.p && 2 & e && i.p(c(o, t, t[1], null), u(o, t[1], e, null))
            },
            i(t) {
                n || (lt(i, t), n = !0)
            },
            o(t) {
                at(i, t),
                    n = !1
            },
            d(t) {
                t && v(e),
                    i && i.d(t)
            }
        }
    }
    function Nt(t) {
        let e;
        const n = new Bt({
            props: {
                $$slots: {
                    default:
                        [Wt]
                },
                $$scope: {
                    ctx: t
                }
            }
        });
        return {
            c() {
                ht(n.$$.fragment)
            },
            m(t, o) {
                pt(n, t, o),
                    e = !0
            },
            p(t, [e]) {
                const o = {};
                2 & e && (o.$$scope = {
                    dirty: e,
                    ctx: t
                }),
                    n.$set(o)
            },
            i(t) {
                e || (lt(n.$$.fragment, t), e = !0)
            },
            o(t) {
                at(n.$$.fragment, t),
                    e = !1
            },
            d(t) {
                gt(n, t)
            }
        }
    }
    function Ot(t, e, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = e;
        return t.$set = t => {
            "$$scope" in t && n(1, i = t.$$scope)
        },
            [o, i]
    }
    class Xt extends yt {
        constructor(t) {
            super(),
                wt(this, t, Ot, Nt, s, {})
        }
    }
    function Yt(t) {
        function e(e) {
            Array.from(e.touches).some(e => t.contains(e.target)) || t.dispatchEvent(new CustomEvent("tapout"))
        }
        function n(e) {
            t.contains(e.target) || t.dispatchEvent(new CustomEvent("tapout"))
        }
        return window.addEventListener("touchstart", e),
            window.addEventListener("mousedown", n), {
            destroy() {
                window.removeEventListener("touchstart", e),
                    window.removeEventListener("mousedown", n)
            }
        }
    }
    const Gt = () => { };
    function Ut(t, e, n) {
        const o = t.slice();
        return o[36] = e[n],
            o
    }
    function qt(t) {
        let e;
        const n = new Xt({
            props: {
                $$slots: {
                    default:
                        [Jt]
                },
                $$scope: {
                    ctx: t
                }
            }
        });
        return {
            c() {
                ht(n.$$.fragment)
            },
            m(t, o) {
                pt(n, t, o),
                    e = !0
            },
            p(t, e) {
                const o = {};
                56 & e[0] | 256 & e[1] && (o.$$scope = {
                    dirty: e,
                    ctx: t
                }),
                    n.$set(o)
            },
            i(t) {
                e || (lt(n.$$.fragment, t), e = !0)
            },
            o(t) {
                at(n.$$.fragment, t),
                    e = !1
            },
            d(t) {
                gt(n, t)
            }
        }
    }
    function It(e) {
        let n,
            o,
            i,
            r = e[36] + "";
        return {
            c() {
                n = x("option"),
                    o = $(r),
                    n.__value = i = e[36],
                    n.value = n.__value
            },
            m(t, e) {
                y(t, n, e),
                    w(n, o)
            },
            p: t,
            d(t) {
                t && v(n)
            }
        }
    }
    function Jt(t) {
        let e,
            n,
            o,
            r,
            s,
            l,
            a,
            c,
            u,
            f,
            h,
            p,
            g,
            m,
            b,
            $,
            L,
            _,
            F,
            C,
            j,
            P,
            T,
            D,
            R,
            A = t[9],
            B = [];
        for (let e = 0; e < A.length; e += 1)
            B[e] = It(Ut(t, A, e));
        return {
            c() {
                e = x("div"),
                    n = x("div"),
                    o = x("img"),
                    s = E(),
                    l = x("input"),
                    a = E(),
                    c = x("div"),
                    u = x("img"),
                    h = E(),
                    p = x("input"),
                    g = E(),
                    m = x("div"),
                    b = x("img"),
                    L = E(),
                    _ = x("div"),
                    F = x("select");
                for (let t = 0; t < B.length; t += 1)
                    B[t].c();
                C = E(),
                    j = x("div"),
                    j.innerHTML = '<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757\n                6.586 4.343 8z"></path></svg>',
                    P = E(),
                    T = x("div"),
                    T.innerHTML = '<img class="w-full h-full" src="/img/delete.svg" alt="delete object">',
                    o.src !== (r = "/img/line_height.svg") && z(o, "src", "/img/line_height.svg"),
                    z(o, "class", "w-6 mr-2"),
                    z(o, "alt", "Line height"),
                    z(l, "type", "number"),
                    z(l, "min", "1"),
                    z(l, "max", "10"),
                    z(l, "step", "0.1"),
                    z(l, "class", "h-6 w-12 text-center flex-shrink-0 rounded-sm"),
                    z(n, "class", "mr-2 flex items-center"),
                    u.src !== (f = "/img/text.svg") && z(u, "src", "/img/text.svg"),
                    z(u, "class", "w-6 mr-2"),
                    z(u, "alt", "Font size"),
                    z(p, "type", "number"),
                    z(p, "min", "12"),
                    z(p, "max", "120"),
                    z(p, "step", "1"),
                    z(p, "class", "h-6 w-12 text-center flex-shrink-0 rounded-sm"),
                    z(c, "class", "mr-2 flex items-center"),
                    b.src !== ($ = "/img/text-family.svg") && z(b, "src", "/img/text-family.svg"),
                    z(b, "class", "w-4 mr-2"),
                    z(b, "alt", "Font family"),
                    z(F, "class", "font-family svelte-dfawvu"),
                    void 0 === t[5] && K(() => t[34].call(F)),
                    z(j, "class", "pointer-events-none absolute inset-y-0 right-0 flex\n            items-center px-2 text-gray-700"),
                    z(_, "class", "relative w-32 md:w-40"),
                    z(m, "class", "mr-2 flex items-center"),
                    z(T, "class", "w-5 h-5 rounded-full bg-white cursor-pointer"),
                    z(e, "class", "h-full flex justify-center items-center bg-gray-300 border-b\n      border-gray-400")
            },
            m(r, f, v) {
                y(r, e, f),
                    w(e, n),
                    w(n, o),
                    w(n, s),
                    w(n, l),
                    S(l, t[4]),
                    w(e, a),
                    w(e, c),
                    w(c, u),
                    w(c, h),
                    w(c, p),
                    S(p, t[3]),
                    w(e, g),
                    w(e, m),
                    w(m, b),
                    w(m, L),
                    w(m, _),
                    w(_, F);
                for (let t = 0; t < B.length; t += 1)
                    B[t].m(F, null);
                M(F, t[5]),
                    w(_, C),
                    w(_, j),
                    w(e, P),
                    w(e, T),
                    v && i(R),
                    R = [k(l, "input", t[32]), k(p, "input", t[33]), k(F, "change", t[34]), k(F, "change", t[19]), k(T, "click", t[20]), d(D = Yt.call(null, e)), k(e, "tapout", t[18]), k(e, "mousedown", t[17]), k(e, "touchstart", t[17], {
                        passive: !0
                    })]
            },
            p(t, e) {
                if (16 & e[0] && H(l.value) !== t[4] && S(l, t[4]), 8 & e[0] && H(p.value) !== t[3] && S(p, t[3]), 512 & e[0]) {
                    let n;
                    for (A = t[9], n = 0; n < A.length; n += 1) {
                        const o = Ut(t, A, n);
                        B[n] ? B[n].p(o, e) : (B[n] = It(o), B[n].c(), B[n].m(F, null))
                    }
                    for (; n < B.length; n += 1)
                        B[n].d(1);
                    B.length = A.length
                }
                32 & e[0] && M(F, t[5])
            },
            d(t) {
                t && v(e),
                    function (t, e) {
                        for (let n = 0; n < t.length; n += 1)
                            t[n] && t[n].d(e)
                    }
                        (B, t),
                    i(R)
            }
        }
    }
    function Kt(t) {
        let e,
            n,
            o,
            r,
            s,
            l,
            a,
            c,
            u,
            f = t[8] && qt(t);
        return {
            c() {
                f && f.c(),
                    e = E(),
                    n = x("div"),
                    o = x("div"),
                    s = E(),
                    l = x("div"),
                    z(o, "class", "absolute w-full h-full cursor-grab border border-dotted\n    border-gray-500 svelte-dfawvu"),
                    C(o, "cursor-grab", !t[8]),
                    C(o, "cursor-grabbing", "move" === t[8]),
                    C(o, "editing", ["edit", "tool"].includes(t[8])),
                    z(l, "contenteditable", "true"),
                    z(l, "spellcheck", "false"),
                    z(l, "class", "outline-none whitespace-no-wrap"),
                    F(l, "font-size", t[3] + "px"),
                    F(l, "font-family", "'" + t[5] + "', serif"),
                    F(l, "line-height", t[4]),
                    F(l, "-webkit-user-select", "text"),
                    z(n, "class", "absolute left-0 top-0 select-none"),
                    F(n, "transform", "translate(" + (t[0] + t[6]) + "px, " + (t[1] + t[7]) + "px)")
            },
            m(h, p, g) {
                f && f.m(h, p),
                    y(h, e, p),
                    y(h, n, p),
                    w(n, o),
                    w(n, s),
                    w(n, l),
                    t[35](l),
                    c = !0,
                    g && i(u),
                    u = [d(r = kt.call(null, o)), k(o, "panstart", t[12]), k(o, "panmove", t[10]), k(o, "panend", t[11]), k(l, "focus", t[13]), k(l, "keydown", t[16]), k(l, "paste", _(t[15])), d(a = Yt.call(null, n)), k(n, "tapout", t[14])]
            },
            p(t, i) {
                t[8] ? f ? (f.p(t, i), 256 & i[0] && lt(f, 1)) : (f = qt(t), f.c(), lt(f, 1), f.m(e.parentNode, e)) : f && (rt(), at(f, 1, 1, () => {
                    f = null
                }), st()),
                    256 & i[0] && C(o, "cursor-grab", !t[8]),
                    256 & i[0] && C(o, "cursor-grabbing", "move" === t[8]),
                    256 & i[0] && C(o, "editing", ["edit", "tool"].includes(t[8])),
                    (!c || 8 & i[0]) && F(l, "font-size", t[3] + "px"),
                    (!c || 32 & i[0]) && F(l, "font-family", "'" + t[5] + "', serif"),
                    (!c || 16 & i[0]) && F(l, "line-height", t[4]),
                    (!c || 195 & i[0]) && F(n, "transform", "translate(" + (t[0] + t[6]) + "px, " + (t[1] + t[7]) + "px)")
            },
            i(t) {
                c || (lt(f), c = !0)
            },
            o(t) {
                at(f),
                    c = !1
            },
            d(o) {
                f && f.d(o),
                    o && v(e),
                    o && v(n),
                    t[35](null),
                    i(u)
            }
        }
    }
    function Vt(t, e, n) {
        let {
            size: o
        } = e, {
            text: i
        } = e, {
            lineHeight: r
        } = e, {
            x: s
        } = e, {
            y: l
        } = e, {
            fontFamily: a
        } = e, {
            pageScale: c = 1
        } = e;
        const u = Object.keys(Mt),
            d = O();
        let f,
            h,
            p,
            g = o,
            m = r,
            w = a,
            y = 0,
            v = 0,
            x = "";
        function b() {
            let t;
            for (; t = Array.from(p.childNodes).find(t => !["#text", "BR"].includes(t.nodeName));)
                p.removeChild(t)
        }
        function $() {
            n(2, p.innerHTML = i, p),
                p.focus()
        }
        function E() {
            const t = p.childNodes,
                e = [];
            let n = "";
            for (let o = 0; o < t.length; o++) {
                const i = t[o];
                "BR" === i.nodeName ? (e.push(n), n = "") : n += i.textContent
            }
            return e.push(n),
                e
        }
        return N($),
            t.$set = t => {
                "size" in t && n(21, o = t.size),
                    "text" in t && n(22, i = t.text),
                    "lineHeight" in t && n(23, r = t.lineHeight),
                    "x" in t && n(0, s = t.x),
                    "y" in t && n(1, l = t.y),
                    "fontFamily" in t && n(24, a = t.fontFamily),
                    "pageScale" in t && n(25, c = t.pageScale)
            },
            [s, l, p, g, m, w, y, v, x, u, function (t) {
                n(6, y = (t.detail.x - f) / c),
                    n(7, v = (t.detail.y - h) / c)
            }, function (t) {
                if (0 === y && 0 === v)
                    return p.focus();
                d("update", {
                    x: s + y,
                    y: l + v
                }),
                    n(6, y = 0),
                    n(7, v = 0),
                    n(8, x = "")
            }, function (t) {
                f = t.detail.x,
                    h = t.detail.y,
                    n(8, x = "move")
            }, function () {
                n(8, x = "edit")
            }, async function () {
                "edit" === x && "tool" !== x && (p.blur(), b(), d("update", {
                    lines: E(),
                    width: p.clientWidth
                }), n(8, x = ""))
            }, async function (t) {
                const e = t.clipboardData.getData("text");
                var n;
                document.execCommand("insertHTML", !1, e),
                    await new Promise(t => setTimeout(t, n)),
                    b()
            }, function (t) {
                const e = Array.from(p.childNodes);
                if (13 === t.keyCode) {
                    t.preventDefault();
                    const n = window.getSelection(),
                        o = n.focusNode,
                        i = n.focusOffset;
                    if (o === p)
                        p.insertBefore(document.createElement("br"), e[i]);
                    else if (o instanceof HTMLBRElement)
                        p.insertBefore(document.createElement("br"), o);
                    else if (o.textContent.length !== i)
                        document.execCommand("insertHTML", !1, "<br>");
                    else {
                        let t = o.nextSibling;
                        t ? p.insertBefore(document.createElement("br"), t) : (t = p.appendChild(document.createElement("br")), t = p.appendChild(document.createElement("br"))),
                            n.collapse(t, 0)
                    }
                }
            }, function () {
                n(8, x = "tool")
            }, async function () {
                "tool" === x && "edit" !== x && (d("update", {
                    lines: E(),
                    lineHeight: m,
                    size: g,
                    fontFamily: w
                }), n(8, x = ""))
            }, function () {
                d("selectFont", {
                    name: w
                })
            }, function () {
                d("delete")
            }, o, i, r, a, c, f, h, d, b, $, E, function () {
                m = H(this.value),
                    n(4, m)
            }, function () {
                g = H(this.value),
                    n(3, g)
            }, function () {
                w = function (t) {
                    const e = t.querySelector(":checked") || t.options[0];
                    return e && e.__value
                }
                    (this),
                    n(5, w),
                    n(9, u)
            }, function (t) {
                G[t ? "unshift" : "push"](() => {
                    n(2, p = t)
                })
            }
            ]
    }
    class Qt extends yt {
        constructor(t) {
            super(),
                wt(this, t, Vt, Kt, l, {
                    size: 21,
                    text: 22,
                    lineHeight: 23,
                    x: 0,
                    y: 1,
                    fontFamily: 24,
                    pageScale: 25
                }, [-1, -1])
        }
    }
    function Zt(e) {
        let n,
            o,
            r,
            s,
            l,
            a,
            c,
            u,
            f;
        return {
            c() {
                n = x("div"),
                    o = x("div"),
                    o.innerHTML = '<div data-direction="left-top" class="absolute left-0 top-0 w-10 h-10 bg-green-400 rounded-full\n      cursor-nwse-resize transform -translate-x-1/2 -translate-y-1/2 md:scale-25"></div> \n    <div data-direction="right-bottom" class="absolute right-0 bottom-0 w-10 h-10 bg-green-400 rounded-full\n      cursor-nwse-resize transform translate-x-1/2 translate-y-1/2 md:scale-25"></div>',
                    s = E(),
                    l = x("div"),
                    l.innerHTML = '<img class="w-full h-full" src="/img/delete.svg" alt="delete object">',
                    a = E(),
                    c = b("svg"),
                    u = b("path"),
                    z(o, "class", "absolute w-full h-full cursor-grab border border-gray-400\n    border-dashed svelte-119320q"),
                    C(o, "cursor-grabbing", "move" === e[5]),
                    C(o, "operation", e[5]),
                    z(l, "class", "absolute left-0 top-0 right-0 w-12 h-12 m-auto rounded-full bg-white\n    cursor-pointer transform -translate-y-1/2 md:scale-25"),
                    z(u, "stroke-width", "5"),
                    z(u, "stroke-linejoin", "round"),
                    z(u, "stroke-linecap", "round"),
                    z(u, "stroke", "black"),
                    z(u, "fill", "none"),
                    z(u, "d", e[3]),
                    z(c, "width", "100%"),
                    z(c, "height", "100%"),
                    z(n, "class", "absolute left-0 top-0 select-none"),
                    F(n, "width", e[0] + e[8] + "px"),
                    F(n, "height", (e[0] + e[8]) / e[9] + "px"),
                    F(n, "transform", "translate(" + (e[1] + e[6]) + "px, " + (e[2] + e[7]) + "px)")
            },
            m(t, h, p) {
                y(t, n, h),
                    w(n, o),
                    w(n, s),
                    w(n, l),
                    w(n, a),
                    w(n, c),
                    w(c, u),
                    e[22](c),
                    p && i(f),
                    f = [d(r = kt.call(null, o)), k(o, "panstart", e[12]), k(o, "panmove", e[10]), k(o, "panend", e[11]), k(l, "click", e[13])]
            },
            p(t, [e]) {
                32 & e && C(o, "cursor-grabbing", "move" === t[5]),
                    32 & e && C(o, "operation", t[5]),
                    8 & e && z(u, "d", t[3]),
                    257 & e && F(n, "width", t[0] + t[8] + "px"),
                    257 & e && F(n, "height", (t[0] + t[8]) / t[9] + "px"),
                    198 & e && F(n, "transform", "translate(" + (t[1] + t[6]) + "px, " + (t[2] + t[7]) + "px)")
            },
            i: t,
            o: t,
            d(t) {
                t && v(n),
                    e[22](null),
                    i(f)
            }
        }
    }
    function te(t, e, n) {
        let {
            originWidth: o
        } = e, {
            originHeight: i
        } = e, {
            width: r
        } = e, {
            x: s
        } = e, {
            y: l
        } = e, {
            pageScale: a = 1
        } = e, {
            path: c
        } = e;
        const u = O();
        let d,
            f,
            h,
            p = "",
            g = 0,
            m = 0,
            w = 0,
            y = "";
        const v = o / i;
        async function x() {
            h.setAttribute("viewBox", `0 0 ${o} ${i}`)
        }
        return N(x),
            t.$set = t => {
                "originWidth" in t && n(14, o = t.originWidth),
                    "originHeight" in t && n(15, i = t.originHeight),
                    "width" in t && n(0, r = t.width),
                    "x" in t && n(1, s = t.x),
                    "y" in t && n(2, l = t.y),
                    "pageScale" in t && n(16, a = t.pageScale),
                    "path" in t && n(3, c = t.path)
            },
            [r, s, l, c, h, p, g, m, w, v, function (t) {
                const e = (t.detail.x - d) / a,
                    o = (t.detail.y - f) / a;
                if ("move" === p)
                    n(6, g = e), n(7, m = o);
                else if ("scale" === p) {
                    if ("left-top" === y) {
                        let t = 1 / 0;
                        t = Math.min(e, o * v),
                            n(6, g = t),
                            n(8, w = -t),
                            n(7, m = t / v)
                    }
                    if ("right-bottom" === y) {
                        let t = -1 / 0;
                        t = Math.max(e, o * v),
                            n(8, w = t)
                    }
                }
            }, function (t) {
                "move" === p ? (u("update", {
                    x: s + g,
                    y: l + m
                }), n(6, g = 0), n(7, m = 0)) : "scale" === p && (u("update", {
                    x: s + g,
                    y: l + m,
                    width: r + w,
                    scale: (r + w) / o
                }), n(6, g = 0), n(7, m = 0), n(8, w = 0), y = ""),
                    n(5, p = "")
            }, function (t) {
                if (d = t.detail.x, f = t.detail.y, t.detail.target === t.currentTarget)
                    return n(5, p = "move");
                n(5, p = "scale"),
                    y = t.detail.target.dataset.direction
            }, function () {
                u("delete")
            }, o, i, a, d, f, y, u, x, function (t) {
                G[t ? "unshift" : "push"](() => {
                    n(4, h = t)
                })
            }
            ]
    }
    class ee extends yt {
        constructor(t) {
            super(),
                wt(this, t, te, Zt, l, {
                    originWidth: 14,
                    originHeight: 15,
                    width: 0,
                    x: 1,
                    y: 2,
                    pageScale: 16,
                    path: 3
                })
        }
    }
    function ne(e) {
        let n,
            o,
            r,
            s,
            l,
            a,
            c,
            u,
            f,
            h;
        return {
            c() {
                n = x("div"),
                    o = x("div"),
                    r = x("button"),
                    r.textContent = "Cancel",
                    s = E(),
                    l = x("button"),
                    l.textContent = "Done",
                    a = E(),
                    c = b("svg"),
                    u = b("path"),
                    z(r, "class", " w-24 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4\n      rounded mr-4"),
                    z(l, "class", "w-24 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4\n      rounded"),
                    z(o, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex"),
                    z(u, "stroke-width", "5"),
                    z(u, "stroke-linejoin", "round"),
                    z(u, "stroke-linecap", "round"),
                    z(u, "d", e[1]),
                    z(u, "stroke", "black"),
                    z(u, "fill", "none"),
                    z(c, "class", "w-full h-full pointer-events-none"),
                    z(n, "class", "relative w-full h-full select-none")
            },
            m(t, p, g) {
                y(t, n, p),
                    w(n, o),
                    w(o, r),
                    w(o, s),
                    w(o, l),
                    w(n, a),
                    w(n, c),
                    w(c, u),
                    e[16](n),
                    g && i(h),
                    h = [k(r, "click", e[6]), k(l, "click", e[5]), d(f = kt.call(null, n)), k(n, "panstart", e[2]), k(n, "panmove", e[3]), k(n, "panend", e[4])]
            },
            p(t, [e]) {
                2 & e && z(u, "d", t[1])
            },
            i: t,
            o: t,
            d(t) {
                t && v(n),
                    e[16](null),
                    i(h)
            }
        }
    }
    function oe(t, e, n) {
        const o = O();
        let i,
            r = 0,
            s = 0,
            l = "",
            a = 1 / 0,
            c = 0,
            u = 1 / 0,
            d = 0,
            f = [],
            h = !1;
        return [i, l, function (t) {
            if (t.detail.target !== i)
                return h = !1;
            h = !0,
                r = t.detail.x,
                s = t.detail.y,
                a = Math.min(a, r),
                c = Math.max(c, r),
                u = Math.min(u, s),
                d = Math.max(d, s),
                f.push(["M", r, s]),
                n(1, l += `M${r},${s}`)
        }, function (t) {
            h && (r = t.detail.x, s = t.detail.y, a = Math.min(a, r), c = Math.max(c, r), u = Math.min(u, s), d = Math.max(d, s), f.push(["L", r, s]), n(1, l += `L${r},${s}`))
        }, function () {
            h = !1
        }, function () {
            if (!f.length)
                return;
            const t = - (a - 10),
                e = - (u - 10);
            o("finish", {
                originWidth: c - a + 20,
                originHeight: d - u + 20,
                path: f.reduce((n, o) => n + o[0] + (o[1] + t) + "," + (o[2] + e), "")
            })
        }, function () {
            o("cancel")
        }, r, s, a, c, u, d, h, o, f, function (t) {
            G[t ? "unshift" : "push"](() => {
                n(0, i = t)
            })
        }
        ]
    }
    class ie extends yt {
        constructor(t) {
            super(),
                wt(this, t, oe, ne, s, {})
        }
    }
    function re(t, e, n) {
        const o = t.slice();
        return o[42] = e[n],
            o
    }
    function se(t, e, n) {
        const o = t.slice();
        return o[39] = e[n],
            o[41] = n,
            o
    }
    function le(e) {
        let n,
            o,
            i;
        const r = new ie({});
        return r.$on("finish", e[27]),
            r.$on("cancel", e[28]), {
            c() {
                n = x("div"),
                    ht(r.$$.fragment),
                    z(n, "class", "fixed z-10 top-0 left-0 right-0 border-b border-gray-300 bg-white\n      shadow-lg"),
                    F(n, "height", "50%")
            },
            m(t, e) {
                y(t, n, e),
                    pt(r, n, null),
                    i = !0
            },
            p: t,
            i(t) {
                i || (lt(r.$$.fragment, t), K(() => {
                    o || (o = ut(n, xt, {
                        y: -200,
                        duration: 500
                    }, !0)),
                        o.run(1)
                }), i = !0)
            },
            o(t) {
                at(r.$$.fragment, t),
                    o || (o = ut(n, xt, {
                        y: -200,
                        duration: 500
                    }, !1)),
                    o.run(0),
                    i = !1
            },
            d(t) {
                t && v(n),
                    gt(r),
                    t && o && o.end()
            }
        }
    }
    function ae(e) {
        let n;
        return {
            c() {
                n = x("div"),
                    n.innerHTML = '<span class=" font-bold text-3xl text-gray-500">Drag something here</span>',
                    z(n, "class", "w-full flex-grow flex justify-center items-center")
            },
            m(t, e) {
                y(t, n, e)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && v(n)
            }
        }
    }
    function ce(t) {
        let e,
            n,
            o,
            i,
            r,
            s,
            l,
            a,
            c,
            u = [],
            d = new Map,
            f = t[2];
        const h = t => t[39];
        for (let e = 0; e < f.length; e += 1) {
            let n = se(t, f, e),
                o = h(n);
            d.set(o, u[e] = pe(o, n))
        }
        return {
            c() {
                e = x("div"),
                    n = x("img"),
                    i = E(),
                    r = x("input"),
                    s = E(),
                    l = x("div");
                for (let t = 0; t < u.length; t += 1)
                    u[t].c();
                n.src !== (o = "/img/edit.svg") && z(n, "src", "/img/edit.svg"),
                    z(n, "class", "mr-2"),
                    z(n, "alt", "a pen, edit pdf name"),
                    z(r, "placeholder", "Rename your PDF here"),
                    z(r, "type", "text"),
                    z(r, "class", "flex-grow bg-transparent"),
                    z(e, "class", "flex justify-center px-5 w-full md:hidden"),
                    z(l, "class", "w-full")
            },
            m(o, d, f) {
                y(o, e, d),
                    w(e, n),
                    w(e, i),
                    w(e, r),
                    S(r, t[1]),
                    y(o, s, d),
                    y(o, l, d);
                for (let t = 0; t < u.length; t += 1)
                    u[t].m(l, null);
                a = !0,
                    f && c(),
                    c = k(r, "input", t[29])
            },
            p(t, e) {
                if (2 & e[0] && r.value !== t[1] && S(r, t[1]), 254012 & e[0]) {
                    const n = t[2];
                    rt(),
                        u = ft(u, e, h, 1, t, n, d, l, dt, pe, null, se),
                        st()
                }
            },
            i(t) {
                if (!a) {
                    for (let t = 0; t < f.length; t += 1)
                        lt(u[t]);
                    a = !0
                }
            },
            o(t) {
                for (let t = 0; t < u.length; t += 1)
                    at(u[t]);
                a = !1
            },
            d(t) {
                t && v(e),
                    t && v(s),
                    t && v(l);
                for (let t = 0; t < u.length; t += 1)
                    u[t].d();
                c()
            }
        }
    }
    function ue(t) {
        let e;
        const n = new ee({
            props: {
                path: t[42].path,
                x: t[42].x,
                y: t[42].y,
                width: t[42].width,
                originWidth: t[42].originWidth,
                originHeight: t[42].originHeight,
                pageScale: t[3][t[41]]
            }
        });
        return n.$on("update", (function (...e) {
            return t[35](t[42], ...e)
        })),
            n.$on("delete", (function (...e) {
                return t[36](t[42], ...e)
            })), {
            c() {
                ht(n.$$.fragment)
            },
            m(t, o) {
                pt(n, t, o),
                    e = !0
            },
            p(e, o) {
                t = e;
                const i = {};
                20 & o[0] && (i.path = t[42].path),
                    20 & o[0] && (i.x = t[42].x),
                    20 & o[0] && (i.y = t[42].y),
                    20 & o[0] && (i.width = t[42].width),
                    20 & o[0] && (i.originWidth = t[42].originWidth),
                    20 & o[0] && (i.originHeight = t[42].originHeight),
                    12 & o[0] && (i.pageScale = t[3][t[41]]),
                    n.$set(i)
            },
            i(t) {
                e || (lt(n.$$.fragment, t), e = !0)
            },
            o(t) {
                at(n.$$.fragment, t),
                    e = !1
            },
            d(t) {
                gt(n, t)
            }
        }
    }
    function de(t) {
        let e;
        const n = new Qt({
            props: {
                text: t[42].text,
                x: t[42].x,
                y: t[42].y,
                size: t[42].size,
                lineHeight: t[42].lineHeight,
                fontFamily: t[42].fontFamily,
                pageScale: t[3][t[41]]
            }
        });
        return n.$on("update", (function (...e) {
            return t[33](t[42], ...e)
        })),
            n.$on("delete", (function (...e) {
                return t[34](t[42], ...e)
            })),
            n.$on("selectFont", t[13]), {
            c() {
                ht(n.$$.fragment)
            },
            m(t, o) {
                pt(n, t, o),
                    e = !0
            },
            p(e, o) {
                t = e;
                const i = {};
                20 & o[0] && (i.text = t[42].text),
                    20 & o[0] && (i.x = t[42].x),
                    20 & o[0] && (i.y = t[42].y),
                    20 & o[0] && (i.size = t[42].size),
                    20 & o[0] && (i.lineHeight = t[42].lineHeight),
                    20 & o[0] && (i.fontFamily = t[42].fontFamily),
                    12 & o[0] && (i.pageScale = t[3][t[41]]),
                    n.$set(i)
            },
            i(t) {
                e || (lt(n.$$.fragment, t), e = !0)
            },
            o(t) {
                at(n.$$.fragment, t),
                    e = !1
            },
            d(t) {
                gt(n, t)
            }
        }
    }
    function fe(t) {
        let e;
        const n = new Dt({
            props: {
                file: t[42].file,
                payload: t[42].payload,
                x: t[42].x,
                y: t[42].y,
                width: t[42].width,
                height: t[42].height,
                pageScale: t[3][t[41]]
            }
        });
        return n.$on("update", (function (...e) {
            return t[31](t[42], ...e)
        })),
            n.$on("delete", (function (...e) {
                return t[32](t[42], ...e)
            })), {
            c() {
                ht(n.$$.fragment)
            },
            m(t, o) {
                pt(n, t, o),
                    e = !0
            },
            p(e, o) {
                t = e;
                const i = {};
                20 & o[0] && (i.file = t[42].file),
                    20 & o[0] && (i.payload = t[42].payload),
                    20 & o[0] && (i.x = t[42].x),
                    20 & o[0] && (i.y = t[42].y),
                    20 & o[0] && (i.width = t[42].width),
                    20 & o[0] && (i.height = t[42].height),
                    12 & o[0] && (i.pageScale = t[3][t[41]]),
                    n.$set(i)
            },
            i(t) {
                e || (lt(n.$$.fragment, t), e = !0)
            },
            o(t) {
                at(n.$$.fragment, t),
                    e = !1
            },
            d(t) {
                gt(n, t)
            }
        }
    }
    function he(t, e) {
        let n,
            o,
            i,
            r,
            s;
        const l = [fe, de, ue],
            a = [];
        function c(t, e) {
            return "image" === t[42].type ? 0 : "text" === t[42].type ? 1 : "drawing" === t[42].type ? 2 : -1
        }
        return ~(o = c(e)) && (i = a[o] = l[o](e)), {
            key: t,
            first: null,
            c() {
                n = L(),
                    i && i.c(),
                    r = L(),
                    this.first = n
            },
            m(t, e) {
                y(t, n, e),
                    ~o && a[o].m(t, e),
                    y(t, r, e),
                    s = !0
            },
            p(t, e) {
                let n = o;
                o = c(t),
                    o === n ? ~o && a[o].p(t, e) : (i && (rt(), at(a[n], 1, 1, () => {
                        a[n] = null
                    }), st()), ~o ? (i = a[o], i || (i = a[o] = l[o](t), i.c()), lt(i, 1), i.m(r.parentNode, r)) : i = null)
            },
            i(t) {
                s || (lt(i), s = !0)
            },
            o(t) {
                at(i),
                    s = !1
            },
            d(t) {
                t && v(n),
                    ~o && a[o].d(t),
                    t && v(r)
            }
        }
    }
    function pe(t, e) {
        let n,
            o,
            r,
            s,
            l,
            a,
            c,
            u = [],
            d = new Map;
        const f = new Lt({
            props: {
                page: e[39]
            }
        });
        f.$on("measure", (function (...t) {
            return e[30](e[41], ...t)
        }));
        let h = e[4][e[41]];
        const p = t => t[42].id;
        for (let t = 0; t < h.length; t += 1) {
            let n = re(e, h, t),
                o = p(n);
            d.set(o, u[t] = he(o, n))
        }
        function g(...t) {
            return e[37](e[41], ...t)
        }
        function m(...t) {
            return e[38](e[41], ...t)
        }
        return {
            key: t,
            first: null,
            c() {
                n = x("div"),
                    o = x("div"),
                    ht(f.$$.fragment),
                    r = E(),
                    s = x("div");
                for (let t = 0; t < u.length; t += 1)
                    u[t].c();
                l = E(),
                    z(s, "class", "absolute top-0 left-0 transform origin-top-left"),
                    F(s, "transform", "scale(" + e[3][e[41]] + ")"),
                    F(s, "touch-action", "none"),
                    z(o, "class", "relative shadow-lg"),
                    C(o, "shadow-outline", e[41] === e[5]),
                    z(n, "class", "p-5 w-full flex flex-col items-center overflow-hidden"),
                    this.first = n
            },
            m(t, e, d) {
                y(t, n, e),
                    w(n, o),
                    pt(f, o, null),
                    w(o, r),
                    w(o, s);
                for (let t = 0; t < u.length; t += 1)
                    u[t].m(s, null);
                w(n, l),
                    a = !0,
                    d && i(c),
                    c = [k(n, "mousedown", g), k(n, "touchstart", m, {
                        passive: !0
                    })]
            },
            p(t, n) {
                e = t;
                const i = {};
                if (4 & n[0] && (i.page = e[39]), f.$set(i), 106524 & n[0]) {
                    const t = e[4][e[41]];
                    rt(),
                        u = ft(u, n, p, 1, e, t, d, s, dt, he, null, re),
                        st()
                }
                (!a || 12 & n[0]) && F(s, "transform", "scale(" + e[3][e[41]] + ")"),
                    36 & n[0] && C(o, "shadow-outline", e[41] === e[5])
            },
            i(t) {
                if (!a) {
                    lt(f.$$.fragment, t);
                    for (let t = 0; t < h.length; t += 1)
                        lt(u[t]);
                    a = !0
                }
            },
            o(t) {
                at(f.$$.fragment, t);
                for (let t = 0; t < u.length; t += 1)
                    at(u[t]);
                a = !1
            },
            d(t) {
                t && v(n),
                    gt(f);
                for (let t = 0; t < u.length; t += 1)
                    u[t].d();
                i(c)
            }
        }
    }
    function ge(t) {
        let e,
            n,
            o,
            r,
            s,
            l,
            a,
            c,
            u,
            d,
            f,
            h,
            p,
            g,
            m,
            b,
            L,
            H,
            F,
            M,
            j,
            P,
            T,
            D,
            R,
            A,
            B,
            W,
            N,
            O,
            X,
            Y,
            G = t[6] ? "Guardando" : "Guardar";
        const U = new bt({});
        let q = t[7] && le(t);
        const I = [ce, ae],
            J = [];
        function K(t, e) {
            return t[2].length ? 0 : 1
        }
        return N = K(t),
            O = J[N] = I[N](t), {
            c() {
                ht(U.$$.fragment),
                    e = E(),
                    n = x("main"),
                    o = x("div"),
                    r = x("input"),
                    s = E(),
                    l = x("input"),
                    a = E(),
                    c = x("label"),
                    c.textContent = "Cargar PDF",
                    u = E(),
                    d = x("div"),
                    f = x("label"),
                    f.innerHTML = '<img src="/img/image.svg" alt="An icon for adding images">',
                    h = E(),
                    p = x("label"),
                    p.innerHTML = '<img src="/img/notes.svg" alt="An icon for adding text">',
                    g = E(),
                    m = x("label"),
                    m.innerHTML = '<img src="/img/gesture.svg" alt="An icon for adding drawing">',
                    b = E(),
                    L = x("div"),
                    H = x("img"),
                    M = E(),
                    j = x("input"),
                    P = E(),
                    T = x("button"),
                    D = $(G),
                    R = E(),
                    A = x("a"),
                    A.innerHTML = '<img src="/img/GitHub-Mark-32px.png" alt="A GitHub icon leads to personal GitHub page">',
                    B = E(),
                    q && q.c(),
                    W = E(),
                    O.c(),
                    z(r, "type", "file"),
                    z(r, "name", "pdf"),
                    z(r, "id", "pdf"),
                    z(r, "class", "hidden"),
                    z(l, "type", "file"),
                    z(l, "id", "image"),
                    z(l, "name", "image"),
                    z(l, "class", "hidden"),
                    z(c, "class", "whitespace-no-wrap bg-blue-500 hover:bg-blue-700 text-white\n      font-bold py-1 px-3 md:px-4 rounded mr-3 cursor-pointer md:mr-4"),
                    z(c, "for", "pdf"),
                    z(f, "class", "flex items-center justify-center h-full w-8 hover:bg-gray-500\n        cursor-pointer"),
                    z(f, "for", "image"),
                    C(f, "cursor-not-allowed", t[5] < 0),
                    C(f, "bg-gray-500", t[5] < 0),
                    z(p, "class", "flex items-center justify-center h-full w-8 hover:bg-gray-500\n        cursor-pointer"),
                    z(p, "for", "text"),
                    C(p, "cursor-not-allowed", t[5] < 0),
                    C(p, "bg-gray-500", t[5] < 0),
                    z(m, "class", "flex items-center justify-center h-full w-8 hover:bg-gray-500\n        cursor-pointer"),
                    C(m, "cursor-not-allowed", t[5] < 0),
                    C(m, "bg-gray-500", t[5] < 0),
                    z(d, "class", "relative mr-3 flex h-8 bg-gray-400 rounded-sm overflow-hidden\n      md:mr-4"),
                    H.src !== (F = "/img/edit.svg") && z(H, "src", "/img/edit.svg"),
                    z(H, "class", "mr-2"),
                    z(H, "alt", "a pen, edit pdf name"),
                    z(j, "placeholder", "Renombra tu PDF aca..."),
                    z(j, "type", "text"),
                    z(j, "class", "flex-grow bg-transparent"),
                    z(L, "class", "justify-center mr-3 md:mr-4 w-full max-w-xs hidden md:flex"),
                    z(T, "class", "w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3\n      md:px-4 mr-3 md:mr-4 rounded"),
                    C(T, "cursor-not-allowed", 0 === t[2].length || t[6] || !t[0]),
                    C(T, "bg-blue-700", 0 === t[2].length || t[6] || !t[0]),
                    z(A, "href", "https://github.com/JavierCanon"),
                    z(o, "class", "fixed z-10 top-0 left-0 right-0 h-12 flex justify-center items-center\n    bg-gray-200 border-b border-gray-300"),
                    z(n, "class", "flex flex-col items-center py-16 bg-gray-100 min-h-screen")
            },
            m(v, x, $) {
                pt(U, v, x),
                    y(v, e, x),
                    y(v, n, x),
                    w(n, o),
                    w(o, r),
                    w(o, s),
                    w(o, l),
                    w(o, a),
                    w(o, c),
                    w(o, u),
                    w(o, d),
                    w(d, f),
                    w(d, h),
                    w(d, p),
                    w(d, g),
                    w(d, m),
                    w(o, b),
                    w(o, L),
                    w(L, H),
                    w(L, M),
                    w(L, j),
                    S(j, t[1]),
                    w(o, P),
                    w(o, T),
                    w(T, D),
                    w(o, R),
                    w(o, A),
                    w(n, B),
                    q && q.m(n, null),
                    w(n, W),
                    J[N].m(n, null),
                    X = !0,
                    $ && i(Y),
                    Y = [k(window, "dragenter", _(t[24])), k(window, "dragover", _(t[25])), k(window, "drop", _(t[8])), k(r, "change", t[8]), k(l, "change", t[9]), k(p, "click", t[10]), k(m, "click", t[11]), k(j, "input", t[26]), k(T, "click", t[18])]
            },
            p(t, e) {
                32 & e[0] && C(f, "cursor-not-allowed", t[5] < 0),
                    32 & e[0] && C(f, "bg-gray-500", t[5] < 0),
                    32 & e[0] && C(p, "cursor-not-allowed", t[5] < 0),
                    32 & e[0] && C(p, "bg-gray-500", t[5] < 0),
                    32 & e[0] && C(m, "cursor-not-allowed", t[5] < 0),
                    32 & e[0] && C(m, "bg-gray-500", t[5] < 0),
                    2 & e[0] && j.value !== t[1] && S(j, t[1]),
                    (!X || 64 & e[0]) && G !== (G = t[6] ? "Guardando" : "Guardar") && function (t, e) {
                        e = "" + e,
                            t.data !== e && (t.data = e)
                    }
                        (D, G),
                    69 & e[0] && C(T, "cursor-not-allowed", 0 === t[2].length || t[6] || !t[0]),
                    69 & e[0] && C(T, "bg-blue-700", 0 === t[2].length || t[6] || !t[0]),
                    t[7] ? q ? (q.p(t, e), 128 & e[0] && lt(q, 1)) : (q = le(t), q.c(), lt(q, 1), q.m(n, W)) : q && (rt(), at(q, 1, 1, () => {
                        q = null
                    }), st());
                let o = N;
                N = K(t),
                    N === o ? J[N].p(t, e) : (rt(), at(J[o], 1, 1, () => {
                        J[o] = null
                    }), st(), O = J[N], O || (O = J[N] = I[N](t), O.c()), lt(O, 1), O.m(n, null))
            },
            i(t) {
                X || (lt(U.$$.fragment, t), lt(q), lt(O), X = !0)
            },
            o(t) {
                at(U.$$.fragment, t),
                    at(q),
                    at(O),
                    X = !1
            },
            d(t) {
                gt(U, t),
                    t && v(e),
                    t && v(n),
                    q && q.d(),
                    J[N].d(),
                    i(Y)
            }
        }
    }
    function me(t, e, n) {
        const o = function () {
            let t = 0;
            return function () {
                return t++
            }
        }
            ();
        let i,
            r = "",
            s = [],
            l = [],
            a = [],
            c = "Times-Roman",
            u = -1,
            d = !1,
            f = !1;
        async function h(t) {
            try {
                const e = await async function (t) {
                    const e = await Ht("pdfjsLib"),
                        n = new Blob([t]),
                        o = window.URL.createObjectURL(n);
                    return e.getDocument(o).promise
                }
                    (t);
                n(1, r = t.name),
                    n(0, i = t);
                const o = e.numPages;
                n(2, s = Array(o).fill().map((t, n) => e.getPage(n + 1))),
                    n(4, a = s.map(() => [])),
                    n(3, l = Array(o).fill(1))
            } catch (t) {
                throw console.log("Failed to add pdf."),
                t
            }
        }
        async function p(t) {
            try {
                const i = await function (t) {
                    return new Promise((e, n) => {
                        const o = new FileReader;
                        o.onload = () => e(o.result),
                            o.onerror = n,
                            o.readAsDataURL(t)
                    })
                }
                    (t),
                    r = await (e = i, new Promise((t, n) => {
                        const o = new Image;
                        if (o.onload = () => t(o), o.onerror = n, e instanceof Blob) {
                            const t = window.URL.createObjectURL(e);
                            o.src = t
                        } else
                            o.src = e
                    })),
                    s = o(), {
                        width: l,
                        height: c
                    } = r,
                    d = {
                        id: s,
                        type: "image",
                        width: l,
                        height: c,
                        x: 0,
                        y: 0,
                        payload: r,
                        file: t
                    };
                n(4, a = a.map((t, e) => e === u ? [...t, d] : t))
            } catch (t) {
                console.log("Fail to add image.", t)
            }
            var e
        }

        function g(t = "Escribe aca el texto") {
            const e = o();
            Ct(c);
            const i = {
                id: e,
                text: t,
                type: "text",
                size: 16,
                width: 0,
                lineHeight: 1.4,
                fontFamily: c,
                x: 0,
                y: 0
            };
            n(4, a = a.map((t, e) => e === u ? [...t, i] : t))
        }

        function m(t, e, i, r = 1) {
            const s = {
                id: o(),
                path: i,
                type: "drawing",
                x: 0,
                y: 0,
                originWidth: t,
                originHeight: e,
                width: t * r,
                scale: r
            };
            n(4, a = a.map((t, e) => e === u ? [...t, s] : t))
        }
        function w(t) {
            n(5, u = t)
        }
        function y(t, e) {
            n(4, a = a.map((n, o) => o == u ? n.map(n => n.id === t ? {
                ...n,
                ...e
            }
                : n) : n))
        }
        function v(t) {
            n(4, a = a.map((e, n) => n == u ? e.filter(e => e.id !== t) : e))
        }
        function x(t, e) {
            n(3, l[e] = t, l)
        }
        N(async () => {
            try {
                const t = await fetch("/test.pdf"),
                    e = await t.blob();
                await h(e),
                    n(5, u = 0),
                    setTimeout(() => {
                        Ct(c),
                            _t.forEach(St)
                    }, 5e3)
            } catch (t) {
                console.log(t)
            }
        });
        return [i, r, s, l, a, u, d, f, async function (t) {
            const e = (t.target.files || t.dataTransfer && t.dataTransfer.files)[0];
            if (e && "application/pdf" === e.type) {
                n(5, u = -1);
                try {
                    await h(e),
                        n(5, u = 0)
                } catch (t) {
                    console.log(t)
                }
            }
        }, async function (t) {
            const e = t.target.files[0];
            e && u >= 0 && p(e),
                t.target.value = null
        }, function () {
            u >= 0 && g()
        }, function () {
            u >= 0 && n(7, f = !0)
        }, m, function (t) {
            const e = t.detail.name;
            Ct(e),
                c = e
        }, w, y, v, x, async function () {
            if (i && !d && s.length) {
                n(6, d = !0);
                try {
                    await async function (t, e, n) {
                        const o = await Ht("PDFLib"),
                            i = await Ht("download"),
                            r = await Ht("makeTextPDF");
                        let s;
                        try {
                            s = await o.PDFDocument.load(await jt(t))
                        } catch (t) {
                            throw console.log("Failed to load PDF."),
                            t
                        }
                        const l = s.getPages().map(async (t, n) => {
                            const i = e[n],
                                l = t.getHeight(),
                                a = i.map(async e => {
                                    if ("image" === e.type) {
                                        let n, {
                                            file: o,
                                            x: i,
                                            y: r,
                                            width: a,
                                            height: c
                                        } = e;
                                        try {
                                            return n = "image/jpeg" === o.type ? await s.embedJpg(await jt(o)) : await s.embedPng(await jt(o)),
                                                () => t.drawImage(n, {
                                                    x: i,
                                                    y: l - r - c,
                                                    width: a,
                                                    height: c
                                                })
                                        } catch (t) {
                                            return console.log("Failed to embed image.", t),
                                                Gt
                                        }
                                    } else {
                                        if ("text" === e.type) {
                                            let {
                                                x: n,
                                                y: o,
                                                lines: i,
                                                lineHeight: a,
                                                size: c,
                                                fontFamily: u,
                                                width: d
                                            } = e;
                                            const f = c * a * i.length,
                                                h = await Ct(u),
                                                [p] = await s.embedPdf(await r({
                                                    lines: i,
                                                    fontSize: c,
                                                    lineHeight: a,
                                                    width: d,
                                                    height: f,
                                                    font: h.buffer || u,
                                                    dy: h.correction(c, a)
                                                }));
                                            return () => t.drawPage(p, {
                                                width: d,
                                                height: f,
                                                x: n,
                                                y: l - o - f
                                            })
                                        }
                                        if ("drawing" === e.type) {
                                            let {
                                                x: n,
                                                y: i,
                                                path: r,
                                                scale: s
                                            } = e;
                                            const {
                                                pushGraphicsState: a,
                                                setLineCap: c,
                                                popGraphicsState: u,
                                                setLineJoin: d,
                                                LineCapStyle: f,
                                                LineJoinStyle: h
                                            } = o;
                                            return () => {
                                                t.pushOperators(a(), c(f.Round), d(h.Round)),
                                                    t.drawSvgPath(r, {
                                                        borderWidth: 5,
                                                        scale: s,
                                                        x: n,
                                                        y: l - i
                                                    }),
                                                    t.pushOperators(u())
                                            }
                                        }
                                    }
                                });
                            (await Promise.all(a)).forEach(t => t())
                        });
                        await Promise.all(l);
                        try {
                            i(await s.save(), n, "application/pdf")
                        } catch (t) {
                            throw console.log("Failed to save PDF."),
                            t
                        }
                    }
                        (i, a, r)
                } catch (t) {
                    console.log(t)
                }
                finally {
                    n(6, d = !1)
                }
            }
        }, c, o, h, p, g, function (e) {
            X(t, e)
        }, function (e) {
            X(t, e)
        }, function () {
            r = this.value,
                n(1, r)
        }, t => {
            const {
                originWidth: e,
                originHeight: o,
                path: i
            } = t.detail;
            let r = 1;
            e > 500 && (r = 500 / e),
                m(e, o, i, r),
                n(7, f = !1)
        }, () => n(7, f = !1), function () {
            r = this.value,
                n(1, r)
        }, (t, e) => x(e.detail.scale, t), (t, e) => y(t.id, e.detail), t => v(t.id), (t, e) => y(t.id, e.detail), t => v(t.id), (t, e) => y(t.id, e.detail), t => v(t.id), t => w(t), t => w(t)]
    }
    return Ht("pdfjsLib"),
        new class extends yt {
            constructor(t) {
                super(),
                    wt(this, t, me, ge, s, {}, [-1, -1])
            }
        }
            ({
                target: document.body
            })
}
    ();


