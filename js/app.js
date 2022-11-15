(() => {
    var __webpack_modules__ = {
        125: module => {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }(self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        8741: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = i;
                        },
                        3976: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                            t.default = r;
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i) {
                                if (void 0 === i) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = i;
                            };
                        },
                        3776: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var i, a;
                                function n(e, t, n) {
                                    if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                                    "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                                }
                                function r(e, a) {
                                    var n, r, o = [];
                                    if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: i[e][a][n]
                                    }); else o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: t
                                    }); else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, 
                                    r = i[l][s].length; n < r; n++) o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: i[l][s][n]
                                    }); else o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: t
                                    });
                                    return o;
                                }
                                if (u(this[0]) && e) {
                                    i = this[0].eventRegistry, a = this[0];
                                    for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                                }
                                return this;
                            }, t.on = function(e, t) {
                                function i(e, i) {
                                    n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                                    a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                                }
                                if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                                    var l = r[o].split("."), s = l[0], c = l[1] || "global";
                                    i(s, c);
                                }
                                return this;
                            }, t.trigger = function(e) {
                                if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                                    var l = a[r].split("."), s = l[0], c = l[1] || "global";
                                    if (void 0 !== document && "global" === c) {
                                        var f, d, p = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            detail: arguments[1]
                                        };
                                        if (document.createEvent) {
                                            try {
                                                if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p); else f = new CustomEvent(s, p);
                                            } catch (e) {
                                                (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                                            }
                                            e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                                        } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], 
                                        e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                                    } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                                    arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments); else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
                                }
                                return this;
                            };
                            var a, n = s(i(600)), r = s(i(9380)), o = s(i(4963)), l = s(i(8741));
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function u(e) {
                                return e instanceof Element;
                            }
                            t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                            }, a.prototype = r.default.Event.prototype);
                        },
                        600: function(e, t) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, a, n, r, o, l, s = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                                "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
                                "object" !== i(s) && "function" != typeof s && (s = {});
                                for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], 
                                s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                                s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));
                                return s;
                            };
                        },
                        4963: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a = l(i(600)), n = l(i(9380)), r = l(i(253)), o = i(3776);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = n.default.document;
                            function u(e) {
                                return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                            }
                            u.prototype = {
                                on: o.on,
                                off: o.off,
                                trigger: o.trigger
                            }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                            var c = u;
                            t.default = c;
                        },
                        9845: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                            var a, n = (a = i(9380)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, l = "ontouchstart" in n.default, s = /iemobile/i.test(r), u = /iphone/i.test(r) && !s;
                            t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(i, "\\$1");
                            };
                            var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(9845), l = i(7215), s = i(7760), u = i(4713);
                            function c(e, t) {
                                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!i) {
                                    if (Array.isArray(e) || (i = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return f(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        i && (e = i);
                                        var a = 0, n = function() {};
                                        return {
                                            s: n,
                                            n: function() {
                                                return a >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[a++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: n
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, l = !1;
                                return {
                                    s: function() {
                                        i = i.call(e);
                                    },
                                    n: function() {
                                        var e = i.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        l = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw r;
                                        }
                                    }
                                };
                            }
                            function f(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            var d = {
                                keydownEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                                    if (void 0 !== v) return v;
                                    if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                                    l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                                        e.preventDefault();
                                        var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                                        n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                                    } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                                    n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                                    s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                                    !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                                    h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                                    h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                                    n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                                        var e = n.caret.call(t, f);
                                        n.caret.call(t, f, e.begin);
                                    }), 0) : p === r.default.LEFT && setTimeout((function() {
                                        var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                                        n.translatePosition.call(t, f.inputmask.caretPos.end);
                                        t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                                    }), 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, 
                                    n.caret.call(t, f, h.begin, h.begin));
                                    t.ignorable = i.ignorables.includes(p);
                                },
                                keypressEvent: function(e, t, i, a, o) {
                                    var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.keyCode;
                                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0)), u.skipInputEvent = !0, !0;
                                    if (v) {
                                        44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                                        var m, g = t ? {
                                            begin: o,
                                            end: o
                                        } : n.caret.call(u, p), k = String.fromCharCode(v);
                                        k = c.substitutes[k] || k, d.writeOutBuffer = !0;
                                        var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                                        if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                                        d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                                        !1 !== i && (setTimeout((function() {
                                            c.onKeyValidation.call(p, v, y);
                                        }), 0), d.writeOutBuffer && !1 !== y)) {
                                            var b = n.getBuffer.call(u);
                                            (0, s.writeBuffer)(p, b, m, e, !0 !== t);
                                        }
                                        if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                    }
                                },
                                keyupEvent: function(e) {
                                    var t = this.inputmask;
                                    !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                                },
                                pasteEvent: function(e) {
                                    var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                                    i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                                    var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                                    if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                                    u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                                    window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                                        if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                        r = l + e.clipboardData.getData("text/plain") + u;
                                    }
                                    var f = r;
                                    if (i.isRTL) {
                                        f = f.split("");
                                        var d, p = c(n.getBufferTemplate.call(i));
                                        try {
                                            for (p.s(); !(d = p.n()).done; ) {
                                                var h = d.value;
                                                f[0] === h && f.shift();
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        f = f.join("");
                                    }
                                    if ("function" == typeof a.onBeforePaste) {
                                        if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                                        f || (f = r);
                                    }
                                    (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                                },
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                                    var l = this, c = l.inputmask._valueGet(!0), f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, l, void 0, void 0, !0);
                                    if (f !== c) {
                                        c = function(e, i, a) {
                                            if (o.iemobile) {
                                                var r = i.replace(n.getBuffer.call(t).join(""), "");
                                                if (1 === r.length) {
                                                    var l = i.split("");
                                                    l.splice(a.begin, 0, r), i = l.join("");
                                                }
                                            }
                                            return i;
                                        }(0, c, p);
                                        var h = function(e, a, r) {
                                            for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                            for (;d.length < h; ) d.push(k);
                                            for (;f.length < v; ) f.unshift(k);
                                            for (;p.length < v; ) p.unshift(k);
                                            var y = c.concat(f), b = d.concat(p);
                                            for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), 
                                            m) {
                                              case "insertText":
                                                b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                y[l] === k ? r.end++ : l = o;
                                                break;

                                              default:
                                                y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", 
                                                g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: r
                                            };
                                        }(c, f, p);
                                        switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), 
                                        (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), 
                                        h.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            h.data.forEach((function(e, i) {
                                                var n = new a.Event("keypress");
                                                n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var v = new a.Event("keydown");
                                            v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                                            break;

                                          default:
                                            (0, s.applyInputValue)(l, c);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                compositionendEvent: function(e) {
                                    var t = this.inputmask;
                                    t.isComposing = !1, t.$el.trigger("input");
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                                    i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                                    !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [ e, !0 ]), 
                                    t.undoValue = t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                                    s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var i = this.inputmask, a = this;
                                    if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                                        var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                                        void 0 !== r && n.caret.call(i, a, r);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), c = t.isRTL ? u.reverse().join("") : u.join("");
                                    window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), 
                                    l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                                    if (r.inputmask) {
                                        (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                                        var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                                        "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                                        !1 === l.isComplete.call(t, u) && (setTimeout((function() {
                                            a.trigger("incomplete");
                                        }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                                        (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                                        a.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                        var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                        e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                                        t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, s.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                            t.EventHandlers = d;
                        },
                        9716: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var a = l(i(2394)), n = l(i(5581)), r = i(8711), o = i(7760);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = {
                                on: function(e, t, i) {
                                    var l = e.inputmask.dependencyLib, s = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var s, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                                        if (void 0 === c && "FORM" !== this.nodeName) {
                                            var d = l.data(u, "_inputmask_opts");
                                            l(u).off(), d && new a.default(d).mask(u);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                                    t.preventDefault();
                                                    break;

                                                  case "keydown":
                                                    c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                                    break;

                                                  case "keyup":
                                                  case "compositionend":
                                                    c.isComposing && (c.skipInputEvent = !1);
                                                    break;

                                                  case "keypress":
                                                    if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                                    c.skipKeyPressEvent = !0;
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, setTimeout((function() {
                                                        e.inputmask && i.apply(u, s);
                                                    }), 0), !1);
                                                }
                                                var p = i.apply(u, arguments);
                                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                                        for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                            for (var r = a[n]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                            }
                                            delete e.inputmask.events[n];
                                        }
                                    }
                                }
                            };
                            t.EventRuler = s;
                        },
                        219: function(e, t, i) {
                            var a = d(i(2394)), n = d(i(5581)), r = d(i(7184)), o = i(8711), l = i(4713);
                            function s(e) {
                                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, s(e);
                            }
                            function u(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null == i) return;
                                    var a, n, r = [], o = !0, l = !1;
                                    try {
                                        for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                                    } catch (e) {
                                        l = !0, n = e;
                                    } finally {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw n;
                                        }
                                    }
                                    return r;
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            function f(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var p = a.default.dependencyLib, h = function() {
                                function e(t, i, a) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts);
                                }
                                var t, i, a;
                                return t = e, (i = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                            if (void 0 !== e) {
                                                if (a) {
                                                    var o = P(t).lastIndex, l = O(i.index, t);
                                                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                                } else r = e.slice(0, n.length);
                                                e = e.slice(r.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, i, a, n) {
                                        if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                                        void 0 !== n) {
                                            var r = e[a];
                                            ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), 
                                            "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                            "ampm" === a && n.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = !1, g = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return _(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return _(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ "" ],
                                mmmm: [ "" ],
                                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 2);
                                } ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 4);
                                } ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return _(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return _(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return _(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 3);
                                } ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 2);
                                } ],
                                t: [ "[ap]", y, "ampm", b, 1 ],
                                tt: [ "[ap]m", y, "ampm", b, 2 ],
                                T: [ "[AP]", y, "ampm", b, 1 ],
                                TT: [ "[AP]M", y, "ampm", b, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return u(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, k = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function y(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function b() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function x(e) {
                                var t = new RegExp("\\d+$").exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var i = g[e[0][0] + "x"].slice("");
                                    return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                                }
                                if (g[e[0]]) return g[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], i = [];
                                    for (var a in g) if (/\.*x$/.test(a)) {
                                        var n = a[0] + "\\d+";
                                        -1 === i.indexOf(n) && i.push(n);
                                    } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                                    e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function E(e, t, i) {
                                if (!m) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var a = O(t.pos, i);
                                    if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function S(e, t, i, a) {
                                var n, o, l = "";
                                for (P(i).lastIndex = 0; n = P(i).exec(e); ) if (void 0 === t) if (o = x(n)) l += "(" + o[0] + ")"; else switch (n[0]) {
                                  case "[":
                                    l += "(";
                                    break;

                                  case "]":
                                    l += ")?";
                                    break;

                                  default:
                                    l += (0, r.default)(n[0]);
                                } else if (o = x(n)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += n[0]; else l += n[0];
                                return l;
                            }
                            function _(e, t, i) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                                return e;
                            }
                            function w(e, t, i) {
                                return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function M(e, t) {
                                return S(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function O(e, t) {
                                var i, a, n = 0, r = 0;
                                for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                                    var o = new RegExp("\\d+$").exec(a[0]);
                                    if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                                        i = a, a = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: n - r,
                                    nextMatch: a,
                                    targetMatch: i
                                };
                            }
                            a.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                                        e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    i18n: {
                                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (l) return !0;
                                        if (isNaN(i) && e[t] !== i) {
                                            var s = O(t, n);
                                            if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                                                var u = g[s.targetMatch[0]][0];
                                                if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, i, a, n, r, o, s) {
                                        var u, c;
                                        if (o) return !0;
                                        if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), 
                                        void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                                        e[t + 1] = "0", a = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                            pos: t + 2
                                        })), !1 === a)) return a;
                                        if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                                            var f = g[u.targetMatch[0]];
                                            c = f[0];
                                            var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                            if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                            "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                            delete r.validPositions[h];
                                        }
                                        var m = a, k = w(e.join(""), n.inputFormat, n);
                                        return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function(e, t, i) {
                                            if (e.year !== e.rawyear) {
                                                var a = v.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                                if (2 === n.length && n === r) {
                                                    var l = new Date(v, e.month - 1, e.day);
                                                    e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = a, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(k, m, n)), m = function(e, t, i, a, n) {
                                            if (!t) return t;
                                            if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                                var r;
                                                for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                                    var o;
                                                    if ((o = x(r)) && o[3]) {
                                                        for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], 
                                                        d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                                        l.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                            t;
                                        }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                                            buffer: S(n.inputFormat, k, n).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: a.pos
                                            },
                                            pos: a.caret || a.pos
                                        } : m;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date, a)), 
                                        p(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, i) {
                                        return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
                                    },
                                    casing: function(e, t, i, a) {
                                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
                                    },
                                    insertMode: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        3851: function(e, t, i) {
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(4713);
                            n.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                            function s(e, t, i, a, n) {
                                return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                                l.test(e);
                            }
                            n.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: s
                                        },
                                        j: {
                                            validator: s
                                        },
                                        k: {
                                            validator: s
                                        },
                                        l: {
                                            validator: s
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                                        if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                                        return i;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, i, a, n, l, s) {
                                        var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, i) {
                            var a = l(i(2394)), n = l(i(5581)), r = l(i(7184)), o = i(8711);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = a.default.dependencyLib;
                            function u(e, t) {
                                for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                                return i;
                            }
                            function c(e, t, i, a) {
                                if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                                    var n = e.indexOf(i.radixPoint), r = !1;
                                    i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                                    n = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                                }
                                return r && e.push(i.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var i = 0;
                                if ("+" === e) {
                                    for (i in t.validPositions) ;
                                    i = o.seekNext.call(this, parseInt(i));
                                }
                                for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                                return i;
                            }
                            function d(e, t) {
                                var i = -1;
                                for (var a in t.validPositions) {
                                    var n = t.validPositions[a];
                                    if (n && n.match.def === e) {
                                        i = parseInt(a);
                                        break;
                                    }
                                }
                                return i;
                            }
                            function p(e, t, i, a, n) {
                                var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                                return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === i ? r + 1 : r,
                                        c: n.radixPoint
                                    },
                                    pos: i
                                } : o;
                            }
                            a.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", i = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var a, n = "[+]";
                                        if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        n;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    definitions: {
                                        0: {
                                            validator: p
                                        },
                                        1: {
                                            validator: p,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && e === n.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                                        var s = e.indexOf(n.radixPoint), u = t;
                                        if (t = function(e, t, i, a, n) {
                                            return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                                            if (!0 !== n.allowMinus) return !1;
                                            var c = !1, p = d("+", r), h = d("-", r);
                                            return -1 !== p && (c = [ p, h ]), !1 !== c ? {
                                                remove: c,
                                                caret: u - n.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(this, "+", r),
                                                    c: n.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(this, "-", r),
                                                    c: n.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: u + n.negationSymbol.back.length
                                            };
                                        }
                                        if (i === n.groupSeparator) return {
                                            caret: u
                                        };
                                        if (l) return !0;
                                        if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                                            caret: n._radixDance && t === s - 1 ? s + 1 : s
                                        };
                                        if (!1 === n.__financeInput) if (a) {
                                            if (n.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!n.digitsOptional) {
                                                if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                                                    insert: {
                                                        pos: s + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: s
                                                } : {
                                                    rewritePosition: s + 1
                                                };
                                                if (o.begin < s) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: s
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, i, a, n, r, o) {
                                        if (!1 === a) return a;
                                        if (o) return !0;
                                        if (null !== n.min || null !== n.max) {
                                            var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                                            if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                            };
                                        }
                                        return a;
                                    },
                                    onUnMask: function(e, t, i) {
                                        if ("" === t && !0 === i.nullable) return t;
                                        var a = e.replace(i.prefix, "");
                                        return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                                        "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                                        a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                                    },
                                    isComplete: function(e, t) {
                                        var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                                        r.default)(t.radixPoint), ".")), isFinite(i);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var i = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                        var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", s = n.length > 1;
                                        e = o + ("" !== l ? i + l : l);
                                        var u = 0;
                                        if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, 
                                        "" !== l || !t.digitsOptional)) {
                                            var f = Math.pow(10, u || 1);
                                            e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                            e = e.toString().replace(".", i);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(i, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                                        }
                                        return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
                                    },
                                    onBeforeWrite: function(e, t, i, a) {
                                        function n(e, t) {
                                            if (!1 !== a.__financeInput || t) {
                                                var i = e.indexOf(a.radixPoint);
                                                -1 !== i && e.splice(i, 1);
                                            }
                                            if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                            return e;
                                        }
                                        var o, l;
                                        if (a.stripLeadingZeroes && (l = function(e, t) {
                                            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                            return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                            !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                                        }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                                        delete t[u + d];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== a.min) {
                                                var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== a.min && p < a.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === a.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                                r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                                r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: n(t)
                                            }));
                                            if (a.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        var r, o, l = s(this), u = String.fromCharCode(e.keyCode).toLowerCase();
                                        if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), 
                                        l.trigger("setvalue"), !1;
                                        if (e.ctrlKey) switch (e.keyCode) {
                                          case n.default.UP:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;

                                          case n.default.DOWN:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                            if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                            "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                            l.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                            if (!0 === a._radixDance) {
                                                var f = t.indexOf(a.radixPoint);
                                                if (a.digitsOptional) {
                                                    if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                                    !1;
                                                } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                                (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                                l.trigger("setvalue", [ r, i.begin >= r.length ? f + 1 : i.begin ]), !1;
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t, i) {
                            var a;
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = ((a = i(8741)) && a.__esModule ? a : {
                                default: a
                            }).default ? window : {};
                            t.default = n;
                        },
                        7760: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var i = e ? e.inputmask : this;
                                if (s.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                                        if (n !== t) {
                                            var r = o.getLastValidPosition.call(i);
                                            -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                            p(e, a);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                var n = [], r = a.validPositions;
                                for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);
                                var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                                if ("function" == typeof i.onUnMask) {
                                    var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                                    s = i.onUnMask.call(t, u, s, i);
                                }
                                return s;
                            }, t.writeBuffer = p;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(4713), o = i(8711), l = i(7215), s = i(9845), u = i(6030);
                            function c(e, t) {
                                var i = e ? e.inputmask : this, a = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                                d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function f(e) {
                                e.length = 0;
                                for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                                return e;
                            }
                            function d(e, t, i, a, n) {
                                var s = e ? e.inputmask : this, c = s.maskset, f = s.opts, d = s.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                                f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
                                    begin: m
                                };
                                var y = [], b = s.caretPos;
                                if (h.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var a = new d.Event("_checkval");
                                        a.keyCode = e.toString().charCodeAt(0), v += e;
                                        var n = o.getLastValidPosition.call(s, void 0, !0);
                                        !function(e, t) {
                                            for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                            var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                                                var l = o.seekNext.call(s, e);
                                                s.caretPos.begin < l && (s.caretPos = {
                                                    begin: l
                                                });
                                            }
                                            return n;
                                        }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, 
                                        v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                                        s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), 
                                        s.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
                                    }
                                })), y.length > 0) {
                                    var x, P, E = o.seekNext.call(s, -1, void 0, !1);
                                    if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                                        var _ = new d.Event("_checkval");
                                        if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), 
                                        (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                                        S++;
                                    }
                                }
                                t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), 
                                f.skipOptionalPartCharacter = k;
                            }
                            function p(e, t, i, a, r) {
                                var s = e ? e.inputmask : this, u = s.opts, c = s.dependencyLib;
                                if (a && "function" == typeof u.onBeforeWrite) {
                                    var f = u.onBeforeWrite.call(s, a, t, i, u);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var d = f.refreshFromBuffer;
                                            l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                                        }
                                        void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                                !0 === r)) {
                                    var p = c(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                                        h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0, i(7149), i(3194);
                            var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), l = i(4713), s = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                            function v(e) {
                                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, v(e);
                            }
                            function m(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var g = r.default.document, k = "_inputmask_opts";
                            function y(e, t, i) {
                                if (h.default) {
                                    if (!(this instanceof y)) return new y(e, t, i);
                                    this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                    !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                    e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                    this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                    this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                                    this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                                    this.originalPlaceholder = void 0, this.isComposing = !1;
                                }
                            }
                            function b(e, t, i) {
                                var a = y.prototype.aliases[e];
                                return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                                !0) : (null === i.mask && (i.mask = e), !1);
                            }
                            y.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: p.default,
                                definitions: d.default,
                                aliases: {},
                                masksCache: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                                        var l = n.default.extend(!0, {}, t.opts);
                                        if (function(e, t, i, a) {
                                            function o(t, n) {
                                                var o = "" === a ? t : a + "-" + t;
                                                null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                                i[t] = n);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var l, s, u, c, f = e.getAttribute(a);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                                s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                                                    u = s[c];
                                                    break;
                                                }
                                                for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                                    if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                                                        u = s[c];
                                                        break;
                                                    }
                                                    o(l, u);
                                                }
                                            }
                                            n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(i).length;
                                        }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                            void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), 
                                            a.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                                    }
                                    return c.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        n.default.data(this.el, k, null);
                                        var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    s.getBufferTemplate.call(this).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    u.isComplete.call(this, s.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--) ;
                                    return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                                    var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    c.checkVal.call(this, void 0, !0, !1, i);
                                    var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    return t ? {
                                        value: a,
                                        metadata: this.getmetadata()
                                    } : a;
                                },
                                setValue: function(e) {
                                    this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: o.analyseMask
                            }, y.extendDefaults = function(e) {
                                n.default.extend(!0, y.prototype.defaults, e);
                            }, y.extendDefinitions = function(e) {
                                n.default.extend(!0, y.prototype.definitions, e);
                            }, y.extendAliases = function(e) {
                                n.default.extend(!0, y.prototype.aliases, e);
                            }, y.format = function(e, t, i) {
                                return y(t).format(e, i);
                            }, y.unmask = function(e, t) {
                                return y(t).unmaskedvalue(e);
                            }, y.isValid = function(e, t) {
                                return y(t).isValid(e);
                            }, y.remove = function(e) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, y.setValue = function(e, t) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, y.dependencyLib = n.default, r.default.Inputmask = y;
                            var x = y;
                            t.default = x;
                        },
                        5296: function(e, t, i) {
                            function a(e) {
                                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, a(e);
                            }
                            var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                            function l(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function s(e, t) {
                                if (t && ("object" === a(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                }(e);
                            }
                            function u(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return u = function(e) {
                                    if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                    var i;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, a);
                                    }
                                    function a() {
                                        return c(e, arguments, p(this).constructor);
                                    }
                                    return a.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: a,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), d(a, e);
                                }, u(e);
                            }
                            function c(e, t, i) {
                                return c = f() ? Reflect.construct : function(e, t, i) {
                                    var a = [ null ];
                                    a.push.apply(a, t);
                                    var n = new (Function.bind.apply(e, a));
                                    return i && d(n, i.prototype), n;
                                }, c.apply(null, arguments);
                            }
                            function f() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function d(e, t) {
                                return d = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e;
                                }, d(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var v = n.default.document;
                            if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                                var m = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        Object.defineProperty(e, "prototype", {
                                            value: Object.create(t && t.prototype, {
                                                constructor: {
                                                    value: e,
                                                    writable: !0,
                                                    configurable: !0
                                                }
                                            }),
                                            writable: !1
                                        }), t && d(e, t);
                                    }(c, e);
                                    var t, i, a, n, o, u = (t = c, i = f(), function() {
                                        var e, a = p(t);
                                        if (i) {
                                            var n = p(this).constructor;
                                            e = Reflect.construct(a, arguments, n);
                                        } else e = a.apply(this, arguments);
                                        return s(this, e);
                                    });
                                    function c() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, c);
                                        var t = (e = u.call(this)).getAttributeNames(), i = e.attachShadow({
                                            mode: "closed"
                                        }), a = v.createElement("input");
                                        for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                                        var o = new r.default;
                                        return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                                    }
                                    return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
                                        writable: !1
                                    }), a;
                                }(u(HTMLElement));
                                n.default.customElements.define("input-mask", m);
                            }
                        },
                        2391: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, i) {
                                var a, o, l, s, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                                function k(e, a, n) {
                                    n = void 0 !== n ? n : e.matches.length;
                                    var o = e.matches[n - 1];
                                    if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                                        fn: new RegExp(a, i.casing ? "i" : ""),
                                        static: !1,
                                        optionality: !1,
                                        newBlockMarker: void 0 === o ? "master" : o.def !== a,
                                        casing: null,
                                        def: a,
                                        placeholder: void 0,
                                        nativeDef: a
                                    }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                                        o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || t,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                            nativeDef: (p ? "'" : "") + t
                                        });
                                    }))), p = !1; else {
                                        var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                                        l && !p ? e.matches.splice(n++, 0, {
                                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                                this.test = l.validator;
                                            } : new RegExp("."),
                                            static: l.static || !1,
                                            optionality: l.optional || !1,
                                            newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                                            casing: l.casing,
                                            def: l.definitionSymbol || a,
                                            placeholder: l.placeholder,
                                            nativeDef: a,
                                            generated: l.generated
                                        }) : (e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || a,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                            nativeDef: (p ? "'" : "") + a
                                        }), p = !1);
                                    }
                                }
                                function y() {
                                    if (v.length > 0) {
                                        if (k(s = v[v.length - 1], o), s.isAlternator) {
                                            u = v.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else k(h, o);
                                }
                                function b(e) {
                                    var t = new n.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function x() {
                                    if ((l = v.pop()).openGroup = !1, void 0 !== l) if (v.length > 0) {
                                        if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                                            for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, 
                                            u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                            e = u.matches[t].matches ? u.matches[t].matches.length : 1;
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else h.matches.push(l); else y();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                                }
                                t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                                for (;a = t ? d.exec(e) : f.exec(e); ) {
                                    if (o = a[0], t) {
                                        switch (o.charAt(0)) {
                                          case "?":
                                            o = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            o = "{" + o + "}";
                                            break;

                                          case "|":
                                            if (0 === v.length) {
                                                var E = b(h.matches);
                                                E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                            }
                                        }
                                        if ("\\d" === o) o = "[0-9]";
                                    }
                                    if (p) y(); else switch (o.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || y();
                                        break;

                                      case i.escapeChar:
                                        p = !0, t && y();
                                        break;

                                      case i.optionalmarker[1]:
                                      case i.groupmarker[1]:
                                        x();
                                        break;

                                      case i.optionalmarker[0]:
                                        v.push(new n.default(!1, !0));
                                        break;

                                      case i.groupmarker[0]:
                                        v.push(new n.default(!0));
                                        break;

                                      case i.quantifiermarker[0]:
                                        var S = new n.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), w = _[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                        "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                                            min: M,
                                            max: O,
                                            jit: T
                                        };
                                        var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                        if ((a = C.pop()).isAlternator) {
                                            C.push(a), C = a.matches;
                                            var A = new n.default(!0), D = C.pop();
                                            C.push(A), C = A.matches, a = D;
                                        }
                                        a.isGroup || (a = b([ a ])), C.push(a), C.push(S);
                                        break;

                                      case i.alternatormarker:
                                        if (v.length > 0) {
                                            var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                            c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                                        } else c = P(h.matches);
                                        if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                                        u.matches.push(c), v.push(u), c.openGroup) {
                                            c.openGroup = !1;
                                            var B = new n.default(!0);
                                            B.alternatorGroup = !0, v.push(B);
                                        }
                                        break;

                                      default:
                                        y();
                                    }
                                }
                                g && x();
                                for (;v.length > 0; ) l = v.pop(), h.matches.push(l);
                                h.matches.length > 0 && (!function e(a) {
                                    a && a.matches && a.matches.forEach((function(n, r) {
                                        var o = a.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                                        t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                                        e(n);
                                    }));
                                }(h), m.push(h));
                                (i.numericInput || i.isRTL) && function e(t) {
                                    for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                                        var n = parseInt(a);
                                        if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                            var r = t.matches[a];
                                            t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                                        }
                                        void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(m[0]);
                                return m;
                            }, t.generateMaskSet = function(e, t) {
                                var i;
                                function n(e, i, n) {
                                    var o, l, s = !1;
                                    if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                                    e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                                    n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                                        var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                                        e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                                    }
                                    return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, s, n),
                                        validPositions: {},
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: i,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                                    o;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var o = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                                        })), n(o += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return i;
                            };
                            var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                            function o(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                                l.EventRuler.off(i);
                                var f = function(t, i) {
                                    "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                                    var s = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!u) if ("input" === t.tagName.toLowerCase()) {
                                        var c = document.createElement("input");
                                        c.setAttribute("type", s), u = "text" === c.type, c = null;
                                    } else u = "partial";
                                    return !1 !== u ? function(t) {
                                        var n, s;
                                        function u() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                                        }
                                        function c(e) {
                                            s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== i.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                                        return this.textContent;
                                                    }, s = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                                s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                                t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                            }, t.inputmask._valueSet = function(t, i) {
                                                s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === n && (n = function() {
                                                return this.value;
                                            }, s = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                                    var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    a.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var a = n(t);
                                                                return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                            }
                                                            return n(t);
                                                        },
                                                        set: function(e, t) {
                                                            var i = l(e, t);
                                                            return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(t) {
                                                l.EventRuler.on(t, "mouseenter", (function() {
                                                    var t = this.inputmask._valueGet(!0);
                                                    t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                                    o.applyInputValue)(this, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, u;
                                }(i, t);
                                if (!1 !== f) {
                                    e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                                    i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                                    s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                                    l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                                    l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                                    l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                                    l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                                    l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), 
                                    l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                                    l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                                    (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                                    l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                                    r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                    var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                    if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                                        (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                        var p = r.getBuffer.call(e).slice();
                                        !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                                        o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(7760), l = i(9716), s = i(9845), u = i(7215), c = i(6030);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i, a) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var i = Object(this), a = i.length >>> 0;
                                    if (0 === a) return !1;
                                    for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                                        if (i[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        8711: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, i, a, n) {
                                var r, o = this, l = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                                i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                                t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                                {
                                    begin: a ? t : u.call(o, t),
                                    end: a ? i : u.call(o, i)
                                };
                                if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                                    var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                    if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: i
                                    }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                        if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                            var c = document.createTextNode("");
                                            e.appendChild(c);
                                        }
                                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                        r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                        r.collapse(!0);
                                        var f = window.getSelection();
                                        f.removeAllRanges(), f.addRange(r);
                                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                                    r.moveStart("character", t), r.select());
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, i, r = this, l = this.maskset, s = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = l.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                                for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                                d[t] = s.extend(!0, {}, i);
                                var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                                for (t = c - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match); t--) c--;
                                return e ? {
                                    l: c,
                                    def: d[c] ? d[c].match : void 0
                                } : c;
                            }, t.determineNewCaretPosition = function(e, t, i) {
                                var n = this, u = this.maskset, c = this.opts;
                                t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (i = i || c.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: r.call(n).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = s.call(n, o.call(n));
                                        break;

                                      case "radixFocus":
                                        if (function(e) {
                                            if ("" !== c.radixPoint && 0 !== c.digits) {
                                                var t = u.validPositions;
                                                if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                                    if (e < s.call(n, -1)) return !0;
                                                    var i = r.call(n).indexOf(c.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var f = r.call(n).join("").indexOf(c.radixPoint);
                                            e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                                            break;
                                        }

                                      default:
                                        var d = e.begin, p = o.call(n, d, !0), h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                                        if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d); else {
                                            var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                            if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                                var k = s.call(n, h);
                                                (d >= k || d === h) && (h = k);
                                            }
                                            e.end = e.begin = h;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = r, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                            }, t.seekNext = s, t.seekPrevious = function(e, t) {
                                var i = this, n = e - 1;
                                if (e <= 0) return 0;
                                for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0)); ) n--;
                                return n;
                            }, t.translatePosition = u;
                            var a = i(4713), n = i(7215);
                            function r(e) {
                                var t = this.maskset;
                                return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                                void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                            }
                            function o(e, t, i) {
                                var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                                for (var l in void 0 === e && (e = -1), o) {
                                    var s = parseInt(l);
                                    o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
                                }
                                return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                            }
                            function l(e, t, i) {
                                var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                                if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                                if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (i) {
                                        var l = a.getTests.call(n, e);
                                        return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                                    }
                                    var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, s.match);
                                    return s.match.def !== u;
                                }
                                return !1;
                            }
                            function s(e, t, i) {
                                var n = this;
                                void 0 === i && (i = !0);
                                for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i)); ) r++;
                                return r;
                            }
                            function u(e) {
                                var t = this.opts, i = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                                e;
                            }
                        },
                        4713: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                                var r = this, o = this.opts, c = this.maskset, f = o.greedy;
                                n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, h, v, m, g = [], k = 0;
                                do {
                                    if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], 
                                    h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h)); else {
                                        v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
                                        var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                                        (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
                                    }
                                    k++;
                                } while (!0 !== h.static || "" !== h.def || t > k);
                                "" === g[g.length - 1] && g.pop();
                                !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
                                return o.greedy = f, g;
                            }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            };
                            function r(e, t) {
                                var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                                if ("" !== i) for (;i.length < t; ) i += "0";
                                return i;
                            }
                            function o(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function l(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === n.validPositions[e]) {
                                        var r, o = d.call(this, e), l = [];
                                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), 
                                        !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return a.placeholder.charAt(e % a.placeholder.length);
                            }
                            function s(e, t, i) {
                                return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                            }
                            function u(e, t) {
                                var i = this.opts, a = function(e, t) {
                                    var i = 0, a = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                                    })), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
                                    return i;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var n, o, l, s = r(c.call(this, e));
                                i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                                for (var u = 0; u < t.length; u++) {
                                    var f = t[u];
                                    n = r(f, s.length);
                                    var d = Math.abs(n - s);
                                    (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                                    l = f);
                                }
                                return l;
                            }
                            function c(e, t) {
                                var i = this.maskset;
                                return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                            }
                            function f(e, t, i) {
                                function a(e) {
                                    for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                                    i.push(e.charAt(n));
                                    return i.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function d(e, t, i) {
                                var a, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, d = this.el, p = s.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, k = t ? t.join("") : "";
                                function y(t, i, r, o) {
                                    function l(r, o, u) {
                                        function p(e, t) {
                                            var i = 0 === t.matches.indexOf(e);
                                            return i || t.matches.every((function(a, n) {
                                                return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                                !i;
                                            })), i;
                                        }
                                        function v(e, t, i) {
                                            var a, n;
                                            if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                                if (e.mloc[t]) return a = e, !1;
                                                var o = void 0 !== i ? i : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                                            })), a) {
                                                var r = a.locator[a.alternation];
                                                return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                            }
                                            return void 0 !== i ? v(e, t) : void 0;
                                        }
                                        function b(e, t) {
                                            var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                            if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                                i = n, a = !0;
                                                break;
                                            }
                                            if (a) {
                                                e.mloc = e.mloc || {};
                                                var r = e.locator[i];
                                                if (void 0 !== r) {
                                                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                                    void 0 !== t) {
                                                        for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                                        e.locator[i] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return !0;
                                                }
                                                e.alternation = void 0;
                                            }
                                            return !1;
                                        }
                                        function x(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                            return !0;
                                        }
                                        if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: o.reverse(),
                                                cd: k,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && u !== r) {
                                                if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                                            } else if (r.isOptional) {
                                                var P = r, E = m.length;
                                                if (r = y(r, i, o, u)) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                                                    g = !0, h = e;
                                                }
                                            } else if (r.isAlternator) {
                                                var S, _ = r, w = [], M = m.slice(), O = o.length, T = !1, C = i.length > 0 ? i.shift() : -1;
                                                if (-1 === C || "string" == typeof C) {
                                                    var A, D = h, j = i.slice(), B = [];
                                                    if ("string" == typeof C) B = C.split(","); else for (A = 0; A < _.matches.length; A++) B.push(A.toString());
                                                    if (void 0 !== s.excludes[e]) {
                                                        for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                                                            var F = s.excludes[e][L].toString().split(":");
                                                            o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                                                        }
                                                        0 === B.length && (delete s.excludes[e], B = R);
                                                    }
                                                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));
                                                    for (var N = 0; N < B.length; N++) {
                                                        A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                                                        var V = _.matches[A];
                                                        if (V && l(V, [ A ].concat(o), u)) r = !0; else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                                                        S = m.slice(), h = D, m = [];
                                                        for (var G = 0; G < S.length; G++) {
                                                            var H = S[G], K = !1;
                                                            H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);
                                                            for (var U = 0; U < w.length; U++) {
                                                                var $ = w[U];
                                                                if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                                                                    if (H.match.nativeDef === $.match.nativeDef) {
                                                                        K = !0, b($, H);
                                                                        break;
                                                                    }
                                                                    if (f(H, $, c)) {
                                                                        b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                                                                        break;
                                                                    }
                                                                    if (f($, H, c)) {
                                                                        b($, H);
                                                                        break;
                                                                    }
                                                                    if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                                                                        x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            K || w.push(H);
                                                        }
                                                    }
                                                    m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                                                } else r = l(_.matches[C] || t.matches[C], [ C ].concat(o), u);
                                                if (r) return !0;
                                            } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                                var W = t.matches[t.matches.indexOf(q) - 1];
                                                if (r = l(W, [ z ].concat(o), W)) {
                                                    if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                                    a.optionalQuantifier && p(a, W)) {
                                                        g = !0, h = e;
                                                        break;
                                                    }
                                                    return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                                                }
                                            } else if (r = y(r, i, o, u)) return !0;
                                        } else h++;
                                        var Q, Z;
                                    }
                                    for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
                                        var p = l(t.matches[u], [ u ].concat(r), o);
                                        if (p && h === e) return p;
                                        if (h > e) break;
                                    }
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1; ) x--;
                                        void 0 !== b && x > -1 && (v = function(e, t) {
                                            var i, a = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                            }))), a;
                                        }(x, b), k = v.join(""), h = x);
                                    }
                                    if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];
                                    for (var P = v.shift(); P < p.length; P++) if (y(p[P], v, [ P ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: [],
                                    mloc: {},
                                    cd: k
                                }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                                r = s.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                                for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);
                                for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, i, a, l) {
                                var u = this, c = this.maskset, f = this.opts;
                                if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                                u.isRTL)) {
                                    var d = i.end;
                                    i.end = i.begin, i.begin = d;
                                }
                                var p, h = o.getLastValidPosition.call(u, void 0, !0);
                                i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                                t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                                if (!1 !== (p = m.call(u, i))) {
                                    if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                                        var v = s.call(u, !0);
                                        if (v) {
                                            var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                                            (t !== r.default.DELETE || i.begin > g) && i.begin;
                                        }
                                    }
                                    !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                                        begin: c.p,
                                        end: c.p
                                    }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
                                }
                            }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, 
                            t.revalidateMask = m;
                            var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(8711), l = i(6030);
                            function s(e, t, i, a, r, l) {
                                var u, c, f, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), w = P.extend(!0, {}, S.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                                if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                                -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
                                    if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
                                    u = T, c = S.validPositions[u].alternation, p = f;
                                }
                                if (void 0 !== c) {
                                    m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                                    n.getDecisionTaker)(p) + ":" + p.alternation);
                                    var C = [], A = -1;
                                    for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                                    A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), 
                                    delete S.validPositions[h];
                                    for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                                        for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                                        k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                            caretPos: h
                                        });
                                        if (M) break;
                                        if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                                        S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        var D = (0, n.getDecisionTaker)(p);
                                        if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                                    }
                                }
                                return O && !1 === E.keepStatic || delete S.excludes[m], O;
                            }
                            function u(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                switch (a.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = n.validPositions[i - 1];
                                    e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof a.casing) {
                                        var l = Array.prototype.slice.call(arguments);
                                        l.push(n.validPositions), e = a.casing.apply(this, l);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, i = this.opts, a = this.maskset;
                                if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                                if ("*" !== i.repeat) {
                                    var r = !1, l = o.determineLastRequiredPosition.call(t, !0), s = o.seekPrevious.call(t, l.l);
                                    if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                        r = !0;
                                        for (var u = 0; u <= s; u++) {
                                            var c = n.getTestTemplate.call(t, u).match;
                                            if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                                r = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return r;
                                }
                            }
                            function f(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function d(e, t, i, a, r, l, p) {
                                var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                                i = !0 === i;
                                var x = e;
                                function P(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return t.pos - e.pos;
                                        })).forEach((function(e) {
                                            m.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function E(t, i, r) {
                                    var l = !1;
                                    return n.getTests.call(g, t).every((function(s, c) {
                                        var d = s.match;
                                        if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                                            c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                            pos: t
                                        }))) {
                                            var p = void 0 !== l.c ? l.c : i, h = t;
                                            return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                            !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                                                input: u.call(g, p, d, h)
                                            }), a, h) && (l = !1), !1);
                                        }
                                        return !0;
                                    })), l;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, _ = k.extend(!0, {}, b.validPositions);
                                if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, 
                                delete b.tests[w]);
                                if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), 
                                !0 === S) {
                                    if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
                                        var M = b.validPositions[x];
                                        if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                            if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                                                var O = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                                O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                                                    S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: o.seekNext.call(g, x)
                                        };
                                    }
                                    !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
                                    var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
                                var D = P(S);
                                void 0 !== g.maxLength && o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _), D = !1);
                                return D;
                            }
                            function p(e, t, i) {
                                for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
                                    if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
                                        r = !0;
                                        break;
                                    }
                                    if (o[l].match && o[l].match.def === t.match.nativeDef) {
                                        r = void 0;
                                        break;
                                    }
                                }
                                return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), 
                                r;
                            }
                            function h(e, t, i) {
                                var a, n, r = this, s = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                                if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, 
                                e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (a = e; a < t; a++) delete s.validPositions[a];
                                    n = e;
                                }
                                var p = new c.Event("keypress");
                                for (a = e; a < t; a++) {
                                    p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
                                    var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                                    !1 !== h && void 0 !== h && (n = h.forwardPosition);
                                }
                                u.skipOptionalPartCharacter = f;
                            }
                            function v(e, t, i) {
                                var a = this, r = this.maskset, l = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                                for (var s = e; s < t; s++) if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
                                    var u = n.getTests.call(a, s).slice();
                                    "" === u[u.length - 1].match.def && u.pop();
                                    var c, f = n.determineTestTemplate.call(a, s, u);
                                    if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                                        input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
                                    })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                                        var p = r.validPositions[t].input;
                                        return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
                                    }
                                }
                            }
                            function m(e, t, i, a) {
                                var r = this, l = this.maskset, s = this.opts, u = this.dependencyLib;
                                function c(e, t, i) {
                                    var a = t[e];
                                    if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return n && r;
                                    }
                                    return !1;
                                }
                                var f = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                                if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                                    var g, k = u.extend(!0, {}, l.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                                    for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];
                                    var b, x, P = a, E = P;
                                    for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                                        if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                            begin: h,
                                            end: v
                                        }))) {
                                            for (;"" !== n.getTest.call(r, E).match.def; ) {
                                                if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                                                    "+" === b.match.def && o.getBuffer.call(r, !0);
                                                    var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                                                    if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                                } else m = !1;
                                                if (m) {
                                                    void 0 === t && b.match.static && g === e.begin && f++;
                                                    break;
                                                }
                                                if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                                                E++;
                                            }
                                            "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                                        }
                                        if (!m) break;
                                    }
                                    if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                                    !1;
                                } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));
                                return o.resetMaskSet.call(r, !0), f;
                            }
                        },
                        5581: function(e) {
                            e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
                        }
                    }, t = {};
                    function i(a) {
                        var n = t[a];
                        if (void 0 !== n) return n.exports;
                        var r = t[a] = {
                            exports: {}
                        };
                        return e[a](r, r.exports, i), r.exports;
                    }
                    var a = {};
                    return function() {
                        var e, t = a;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = void 0, i(3851), i(219), i(207), i(5296);
                        var n = ((e = i(2394)) && e.__esModule ? e : {
                            default: e
                        }).default;
                        t.default = n;
                    }(), a;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (0 === error) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        __webpack_require__(125);
        const inputMasks = document.querySelectorAll("input");
        if (inputMasks.length) flsModules.inputmask = Inputmask().mask(inputMasks);
        Inputmask({
            mask: "+999[9][9][9][9][9][9][9][9][9][9][9][9][9][9]"
        }).mask("#tel-mask");
        Inputmask({
            mask: "[A][a][a][a][a][a][a][a][a][a][a][a][a][a][a][a][a][a][a][a]"
        }).mask("#name-mask");
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = dom(eventPath[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                if (false === swiper.params.pagination.enabled) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Autoplay({swiper, extendParams, on, emit}) {
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                if (!swiper.size) {
                    swiper.autoplay.running = false;
                    swiper.autoplay.paused = false;
                    return;
                }
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                clearTimeout(timeout);
                timeout = utils_nextTick((() => {
                    let autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (false === autoplayResult) run();
                }), delay);
            }
            function start() {
                if ("undefined" !== typeof timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit("autoplayStart");
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof timeout) return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = void 0;
                }
                swiper.autoplay.running = false;
                emit("autoplayStop");
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                }));
            }
            function onVisibilityChange() {
                const document = ssr_window_esm_getDocument();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop(); else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop(); else {
                    emit("autoplayPause");
                    pause();
                }
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                emit("autoplayResume");
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", onMouseEnter);
                    swiper.$el.on("mouseleave", onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off("mouseenter", onMouseEnter);
                swiper.$el.off("mouseleave", onMouseLeave);
            }
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                    attachMouseEvents();
                }
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) stop(); else pause();
            }));
            on("touchEnd", (() => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            }));
            on("destroy", (() => {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            }));
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        function initSliders() {
            if (document.querySelector(".reviews__slider")) new core(".reviews__slider", {
                modules: [ Navigation, Autoplay, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: false,
                speed: 1500,
                loop: true,
                autoplay: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".reviews__pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: ".reviews__button-prev",
                    nextEl: ".reviews__button-next"
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if ("prx" === paramsWatch.threshold) {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const goTop = document.querySelector(".go-to-top");
            const topShow = goTop.hasAttribute("data-scroll-show");
            const topShowTimer = goTop.dataset.scrollShow ? goTop.dataset.scrollShow : 500;
            const topPoint = goTop.dataset.scroll ? goTop.dataset.scroll : 1;
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                clearTimeout(timer);
                if (scrollTop >= topPoint) {
                    !goTop.classList.contains("_top-scroll") ? goTop.classList.add("_top-scroll") : null;
                    if (topShow) {
                        if (scrollTop > scrollDirection) goTop.classList.contains("_top-show") ? goTop.classList.remove("_top-show") : null; else !goTop.classList.contains("_top-show") ? goTop.classList.add("_top-show") : null;
                        timer = setTimeout((() => {
                            !goTop.classList.contains("_top-show") ? goTop.classList.add("_top-show") : null;
                        }), topShowTimer);
                    }
                } else {
                    goTop.classList.contains("_top-scroll") ? goTop.classList.remove("_top-scroll") : null;
                    if (topShow) goTop.classList.contains("_top-show") ? goTop.classList.remove("_top-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        "object" == typeof navigator && function(e, t) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t();
        }(void 0, (function() {
            "use strict";
            !function() {
                if ("undefined" != typeof window) try {
                    var e = new window.CustomEvent("test", {
                        cancelable: !0
                    });
                    if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default");
                } catch (e) {
                    var t = function(e, t) {
                        var i, s;
                        return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (i = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), 
                        s = i.preventDefault, i.preventDefault = function() {
                            s.call(this);
                            try {
                                Object.defineProperty(this, "defaultPrevented", {
                                    get: function() {
                                        return !0;
                                    }
                                });
                            } catch (e) {
                                this.defaultPrevented = !0;
                            }
                        }, i;
                    };
                    t.prototype = window.Event.prototype, window.CustomEvent = t;
                }
            }();
            var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
            function t(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e;
            }
            function i(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
                    Object.defineProperty(e, s.key, s);
                }
            }
            function s(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e;
            }
            function n(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }))), i.push.apply(i, s);
                }
                return i;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(i), !0).forEach((function(t) {
                        s(e, t, i[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                    }));
                }
                return e;
            }
            !function(e) {
                var t = function() {
                    try {
                        return !!Symbol.iterator;
                    } catch (e) {
                        return !1;
                    }
                }(), i = function(e) {
                    var i = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            };
                        }
                    };
                    return t && (i[Symbol.iterator] = function() {
                        return i;
                    }), i;
                }, s = function(e) {
                    return encodeURIComponent(e).replace(/%20/g, "+");
                }, n = function(e) {
                    return decodeURIComponent(String(e).replace(/\+/g, " "));
                };
                (function() {
                    try {
                        var t = e.URLSearchParams;
                        return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set && "function" == typeof t.prototype.entries;
                    } catch (e) {
                        return !1;
                    }
                })() || function() {
                    var n = function(e) {
                        Object.defineProperty(this, "_entries", {
                            writable: !0,
                            value: {}
                        });
                        var t = typeof e;
                        if ("undefined" === t) ; else if ("string" === t) "" !== e && this._fromString(e); else if (e instanceof n) {
                            var i = this;
                            e.forEach((function(e, t) {
                                i.append(t, e);
                            }));
                        } else {
                            if (null === e || "object" !== t) throw new TypeError("Unsupported input's type for URLSearchParams");
                            if ("[object Array]" === Object.prototype.toString.call(e)) for (var s = 0; s < e.length; s++) {
                                var a = e[s];
                                if ("[object Array]" !== Object.prototype.toString.call(a) && 2 === a.length) throw new TypeError("Expected [string, any] as entry at index " + s + " of URLSearchParams's input");
                                this.append(a[0], a[1]);
                            } else for (var r in e) e.hasOwnProperty(r) && this.append(r, e[r]);
                        }
                    }, a = n.prototype;
                    a.append = function(e, t) {
                        e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [ String(t) ];
                    }, a.delete = function(e) {
                        delete this._entries[e];
                    }, a.get = function(e) {
                        return e in this._entries ? this._entries[e][0] : null;
                    }, a.getAll = function(e) {
                        return e in this._entries ? this._entries[e].slice(0) : [];
                    }, a.has = function(e) {
                        return e in this._entries;
                    }, a.set = function(e, t) {
                        this._entries[e] = [ String(t) ];
                    }, a.forEach = function(e, t) {
                        var i;
                        for (var s in this._entries) if (this._entries.hasOwnProperty(s)) {
                            i = this._entries[s];
                            for (var n = 0; n < i.length; n++) e.call(t, i[n], s, this);
                        }
                    }, a.keys = function() {
                        var e = [];
                        return this.forEach((function(t, i) {
                            e.push(i);
                        })), i(e);
                    }, a.values = function() {
                        var e = [];
                        return this.forEach((function(t) {
                            e.push(t);
                        })), i(e);
                    }, a.entries = function() {
                        var e = [];
                        return this.forEach((function(t, i) {
                            e.push([ i, t ]);
                        })), i(e);
                    }, t && (a[Symbol.iterator] = a.entries), a.toString = function() {
                        var e = [];
                        return this.forEach((function(t, i) {
                            e.push(s(i) + "=" + s(t));
                        })), e.join("&");
                    }, e.URLSearchParams = n;
                }();
                var a = e.URLSearchParams.prototype;
                "function" != typeof a.sort && (a.sort = function() {
                    var e = this, t = [];
                    this.forEach((function(i, s) {
                        t.push([ s, i ]), e._entries || e.delete(s);
                    })), t.sort((function(e, t) {
                        return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
                    })), e._entries && (e._entries = {});
                    for (var i = 0; i < t.length; i++) this.append(t[i][0], t[i][1]);
                }), "function" != typeof a._fromString && Object.defineProperty(a, "_fromString", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: function(e) {
                        if (this._entries) this._entries = {}; else {
                            var t = [];
                            this.forEach((function(e, i) {
                                t.push(i);
                            }));
                            for (var i = 0; i < t.length; i++) this.delete(t[i]);
                        }
                        var s, a = (e = e.replace(/^\?/, "")).split("&");
                        for (i = 0; i < a.length; i++) s = a[i].split("="), this.append(n(s[0]), s.length > 1 ? n(s[1]) : "");
                    }
                });
            }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e), 
            function(e) {
                if (function() {
                    try {
                        var t = new e.URL("b", "http://a");
                        return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams;
                    } catch (e) {
                        return !1;
                    }
                }() || function() {
                    var t = e.URL, i = function(t, i) {
                        "string" != typeof t && (t = String(t)), i && "string" != typeof i && (i = String(i));
                        var s, n = document;
                        if (i && (void 0 === e.location || i !== e.location.href)) {
                            i = i.toLowerCase(), (s = (n = document.implementation.createHTMLDocument("")).createElement("base")).href = i, 
                            n.head.appendChild(s);
                            try {
                                if (0 !== s.href.indexOf(i)) throw new Error(s.href);
                            } catch (e) {
                                throw new Error("URL unable to set base " + i + " due to " + e);
                            }
                        }
                        var a = n.createElement("a");
                        a.href = t, s && (n.body.appendChild(a), a.href = a.href);
                        var r = n.createElement("input");
                        if (r.type = "url", r.value = t, ":" === a.protocol || !/:/.test(a.href) || !r.checkValidity() && !i) throw new TypeError("Invalid URL");
                        Object.defineProperty(this, "_anchorElement", {
                            value: a
                        });
                        var o = new e.URLSearchParams(this.search), l = !0, c = !0, h = this;
                        [ "append", "delete", "set" ].forEach((function(e) {
                            var t = o[e];
                            o[e] = function() {
                                t.apply(o, arguments), l && (c = !1, h.search = o.toString(), c = !0);
                            };
                        })), Object.defineProperty(this, "searchParams", {
                            value: o,
                            enumerable: !0
                        });
                        var u = void 0;
                        Object.defineProperty(this, "_updateSearchParams", {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: function() {
                                this.search !== u && (u = this.search, c && (l = !1, this.searchParams._fromString(this.search), 
                                l = !0));
                            }
                        });
                    }, s = i.prototype;
                    [ "hash", "host", "hostname", "port", "protocol" ].forEach((function(e) {
                        !function(e) {
                            Object.defineProperty(s, e, {
                                get: function() {
                                    return this._anchorElement[e];
                                },
                                set: function(t) {
                                    this._anchorElement[e] = t;
                                },
                                enumerable: !0
                            });
                        }(e);
                    })), Object.defineProperty(s, "search", {
                        get: function() {
                            return this._anchorElement.search;
                        },
                        set: function(e) {
                            this._anchorElement.search = e, this._updateSearchParams();
                        },
                        enumerable: !0
                    }), Object.defineProperties(s, {
                        toString: {
                            get: function() {
                                var e = this;
                                return function() {
                                    return e.href;
                                };
                            }
                        },
                        href: {
                            get: function() {
                                return this._anchorElement.href.replace(/\?$/, "");
                            },
                            set: function(e) {
                                this._anchorElement.href = e, this._updateSearchParams();
                            },
                            enumerable: !0
                        },
                        pathname: {
                            get: function() {
                                return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                            },
                            set: function(e) {
                                this._anchorElement.pathname = e;
                            },
                            enumerable: !0
                        },
                        origin: {
                            get: function() {
                                var e = {
                                    "http:": 80,
                                    "https:": 443,
                                    "ftp:": 21
                                }[this._anchorElement.protocol], t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "");
                            },
                            enumerable: !0
                        },
                        password: {
                            get: function() {
                                return "";
                            },
                            set: function(e) {},
                            enumerable: !0
                        },
                        username: {
                            get: function() {
                                return "";
                            },
                            set: function(e) {},
                            enumerable: !0
                        }
                    }), i.createObjectURL = function(e) {
                        return t.createObjectURL.apply(t, arguments);
                    }, i.revokeObjectURL = function(e) {
                        return t.revokeObjectURL.apply(t, arguments);
                    }, e.URL = i;
                }(), void 0 !== e.location && !("origin" in e.location)) {
                    var t = function() {
                        return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "");
                    };
                    try {
                        Object.defineProperty(e.location, "origin", {
                            get: t,
                            enumerable: !0
                        });
                    } catch (i) {
                        setInterval((function() {
                            e.location.origin = t();
                        }), 100);
                    }
                }
            }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
            var r = {
                addCSS: !0,
                thumbWidth: 15,
                watch: !0
            };
            function o(e, t) {
                return function() {
                    return Array.from(document.querySelectorAll(t)).includes(this);
                }.call(e, t);
            }
            var l = function(e) {
                return null != e ? e.constructor : null;
            }, c = function(e, t) {
                return !!(e && t && e instanceof t);
            }, h = function(e) {
                return null == e;
            }, u = function(e) {
                return l(e) === Object;
            }, d = function(e) {
                return l(e) === String;
            }, p = function(e) {
                return Array.isArray(e);
            }, m = function(e) {
                return c(e, NodeList);
            }, g = d, f = p, b = m, y = function(e) {
                return c(e, Element);
            }, v = function(e) {
                return c(e, Event);
            }, w = function(e) {
                return h(e) || (d(e) || p(e) || m(e)) && !e.length || u(e) && !Object.keys(e).length;
            };
            function T(e, t) {
                if (1 > t) {
                    var i = function(e) {
                        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
                    }(t);
                    return parseFloat(e.toFixed(i));
                }
                return Math.round(e / t) * t;
            }
            var k = function() {
                function e(t, i) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e), y(t) ? this.element = t : g(t) && (this.element = document.querySelector(t)), 
                    y(this.element) && w(this.element.rangeTouch) && (this.config = a({}, r, {}, i), 
                    this.init());
                }
                return function(e, t, s) {
                    t && i(e.prototype, t), s && i(e, s);
                }(e, [ {
                    key: "init",
                    value: function() {
                        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", 
                        this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", 
                        this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
                    }
                }, {
                    key: "listeners",
                    value: function(e) {
                        var t = this, i = e ? "addEventListener" : "removeEventListener";
                        [ "touchstart", "touchmove", "touchend" ].forEach((function(e) {
                            t.element[i](e, (function(e) {
                                return t.set(e);
                            }), !1);
                        }));
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        if (!e.enabled || !v(t)) return null;
                        var i, s = t.target, n = t.changedTouches[0], a = parseFloat(s.getAttribute("min")) || 0, r = parseFloat(s.getAttribute("max")) || 100, o = parseFloat(s.getAttribute("step")) || 1, l = s.getBoundingClientRect(), c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                        return 0 > (i = 100 / l.width * (n.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 
                        50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + T(i / 100 * (r - a), o);
                    }
                }, {
                    key: "set",
                    value: function(t) {
                        e.enabled && v(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), 
                        function(e, t) {
                            if (e && t) {
                                var i = new Event(t, {
                                    bubbles: !0
                                });
                                e.dispatchEvent(i);
                            }
                        }(t.target, "touchend" === t.type ? "change" : "input"));
                    }
                } ], [ {
                    key: "setup",
                    value: function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = null;
                        if (w(t) || g(t) ? s = Array.from(document.querySelectorAll(g(t) ? t : 'input[type="range"]')) : y(t) ? s = [ t ] : b(t) ? s = Array.from(t) : f(t) && (s = t.filter(y)), 
                        w(s)) return null;
                        var n = a({}, r, {}, i);
                        if (g(t) && n.watch) {
                            var l = new MutationObserver((function(i) {
                                Array.from(i).forEach((function(i) {
                                    Array.from(i.addedNodes).forEach((function(i) {
                                        y(i) && o(i, t) && new e(i, n);
                                    }));
                                }));
                            }));
                            l.observe(document.body, {
                                childList: !0,
                                subtree: !0
                            });
                        }
                        return s.map((function(t) {
                            return new e(t, i);
                        }));
                    }
                }, {
                    key: "enabled",
                    get: function() {
                        return "ontouchstart" in document.documentElement;
                    }
                } ]), e;
            }();
            const C = e => null != e ? e.constructor : null, E = (e, t) => Boolean(e && t && e instanceof t), S = e => null == e, A = e => C(e) === Object, P = e => C(e) === String, M = e => C(e) === Function, x = e => Array.isArray(e), N = e => E(e, NodeList), L = e => S(e) || (P(e) || x(e) || N(e)) && !e.length || A(e) && !Object.keys(e).length;
            var _ = S, I = A, $ = e => C(e) === Number && !Number.isNaN(e), O = P, j = e => C(e) === Boolean, R = M, D = x, q = N, H = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument, F = e => E(e, Event), V = e => E(e, KeyboardEvent), U = e => E(e, TextTrack) || !S(e) && P(e.kind), B = e => E(e, Promise) && M(e.then), W = e => {
                if (E(e, window.URL)) return !0;
                if (!P(e)) return !1;
                let t = e;
                e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
                try {
                    return !L(new URL(t).hostname);
                } catch (e) {
                    return !1;
                }
            }, z = L;
            const K = (() => {
                const e = document.createElement("span"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, i = Object.keys(t).find((t => void 0 !== e.style[t]));
                return !!O(i) && t[i];
            })();
            function Y(e, t) {
                setTimeout((() => {
                    try {
                        e.hidden = !0, e.offsetHeight, e.hidden = !1;
                    } catch (e) {}
                }), t);
            }
            const Q = {
                isIE: Boolean(window.document.documentMode),
                isEdge: window.navigator.userAgent.includes("Edge"),
                isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
            };
            function X(e, t) {
                return t.split(".").reduce(((e, t) => e && e[t]), e);
            }
            function J(e = {}, ...t) {
                if (!t.length) return e;
                const i = t.shift();
                return I(i) ? (Object.keys(i).forEach((t => {
                    I(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                        [t]: {}
                    }), J(e[t], i[t])) : Object.assign(e, {
                        [t]: i[t]
                    });
                })), J(e, ...t)) : e;
            }
            function G(e, t) {
                const i = e.length ? e : [ e ];
                Array.from(i).reverse().forEach(((e, i) => {
                    const s = i > 0 ? t.cloneNode(!0) : t, n = e.parentNode, a = e.nextSibling;
                    s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
                }));
            }
            function Z(e, t) {
                H(e) && !z(t) && Object.entries(t).filter((([, e]) => !_(e))).forEach((([t, i]) => e.setAttribute(t, i)));
            }
            function ee(e, t, i) {
                const s = document.createElement(e);
                return I(t) && Z(s, t), O(i) && (s.innerText = i), s;
            }
            function te(e, t, i, s) {
                H(t) && t.appendChild(ee(e, i, s));
            }
            function ie(e) {
                q(e) || D(e) ? Array.from(e).forEach(ie) : H(e) && H(e.parentNode) && e.parentNode.removeChild(e);
            }
            function se(e) {
                if (!H(e)) return;
                let {length: t} = e.childNodes;
                for (;t > 0; ) e.removeChild(e.lastChild), t -= 1;
            }
            function ne(e, t) {
                return H(t) && H(t.parentNode) && H(e) ? (t.parentNode.replaceChild(e, t), e) : null;
            }
            function ae(e, t) {
                if (!O(e) || z(e)) return {};
                const i = {}, s = J({}, t);
                return e.split(",").forEach((e => {
                    const t = e.trim(), n = t.replace(".", ""), a = t.replace(/[[\]]/g, "").split("="), [r] = a, o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                    switch (t.charAt(0)) {
                      case ".":
                        O(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                        break;

                      case "#":
                        i.id = t.replace("#", "");
                        break;

                      case "[":
                        i[r] = o;
                    }
                })), J(s, i);
            }
            function re(e, t) {
                if (!H(e)) return;
                let i = t;
                j(i) || (i = !e.hidden), e.hidden = i;
            }
            function oe(e, t, i) {
                if (q(e)) return Array.from(e).map((e => oe(e, t, i)));
                if (H(e)) {
                    let s = "toggle";
                    return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t);
                }
                return !1;
            }
            function le(e, t) {
                return H(e) && e.classList.contains(t);
            }
            function ce(e, t) {
                const {prototype: i} = Element;
                return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                    return Array.from(document.querySelectorAll(t)).includes(this);
                }).call(e, t);
            }
            function he(e) {
                return this.elements.container.querySelectorAll(e);
            }
            function ue(e) {
                return this.elements.container.querySelector(e);
            }
            function de(e = null, t = !1) {
                H(e) && (e.focus({
                    preventScroll: !0
                }), t && oe(e, this.config.classNames.tabFocus));
            }
            const pe = {
                "audio/ogg": "vorbis",
                "audio/wav": "1",
                "video/webm": "vp8, vorbis",
                "video/mp4": "avc1.42E01E, mp4a.40.2",
                "video/ogg": "theora"
            }, me = {
                audio: "canPlayType" in document.createElement("audio"),
                video: "canPlayType" in document.createElement("video"),
                check(e, t, i) {
                    const s = Q.isIPhone && i && me.playsinline, n = me[e] || "html5" !== t;
                    return {
                        api: n,
                        ui: n && me.rangeInput && ("video" !== e || !Q.isIPhone || s)
                    };
                },
                pip: !(Q.isIPhone || !R(ee("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || ee("video").disablePictureInPicture)),
                airplay: R(window.WebKitPlaybackTargetAvailabilityEvent),
                playsinline: "playsInline" in document.createElement("video"),
                mime(e) {
                    if (z(e)) return !1;
                    const [t] = e.split("/");
                    let i = e;
                    if (!this.isHTML5 || t !== this.type) return !1;
                    Object.keys(pe).includes(i) && (i += `; codecs="${pe[e]}"`);
                    try {
                        return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
                    } catch (e) {
                        return !1;
                    }
                },
                textTracks: "textTracks" in document.createElement("video"),
                rangeInput: (() => {
                    const e = document.createElement("input");
                    return e.type = "range", "range" === e.type;
                })(),
                touch: "ontouchstart" in document.documentElement,
                transitions: !1 !== K,
                reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
            }, ge = (() => {
                let e = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get: () => (e = !0, null)
                    });
                    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
                } catch (e) {}
                return e;
            })();
            function fe(e, t, i, s = !1, n = !0, a = !1) {
                if (!e || !("addEventListener" in e) || z(t) || !R(i)) return;
                const r = t.split(" ");
                let o = a;
                ge && (o = {
                    passive: n,
                    capture: a
                }), r.forEach((t => {
                    this && this.eventListeners && s && this.eventListeners.push({
                        element: e,
                        type: t,
                        callback: i,
                        options: o
                    }), e[s ? "addEventListener" : "removeEventListener"](t, i, o);
                }));
            }
            function be(e, t = "", i, s = !0, n = !1) {
                fe.call(this, e, t, i, !0, s, n);
            }
            function ye(e, t = "", i, s = !0, n = !1) {
                fe.call(this, e, t, i, !1, s, n);
            }
            function ve(e, t = "", i, s = !0, n = !1) {
                const a = (...r) => {
                    ye(e, t, a, s, n), i.apply(this, r);
                };
                fe.call(this, e, t, a, !0, s, n);
            }
            function we(e, t = "", i = !1, s = {}) {
                if (!H(e) || z(t)) return;
                const n = new CustomEvent(t, {
                    bubbles: i,
                    detail: {
                        ...s,
                        plyr: this
                    }
                });
                e.dispatchEvent(n);
            }
            function Te() {
                this && this.eventListeners && (this.eventListeners.forEach((e => {
                    const {element: t, type: i, callback: s, options: n} = e;
                    t.removeEventListener(i, s, n);
                })), this.eventListeners = []);
            }
            function ke() {
                return new Promise((e => this.ready ? setTimeout(e, 0) : be.call(this, this.elements.container, "ready", e))).then((() => {}));
            }
            function Ce(e) {
                B(e) && e.then(null, (() => {}));
            }
            function Ee(e) {
                return D(e) ? e.filter(((t, i) => e.indexOf(t) === i)) : e;
            }
            function Se(e, t) {
                return D(e) && e.length ? e.reduce(((e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e)) : null;
            }
            function Ae(e) {
                return !(!window || !window.CSS) && window.CSS.supports(e);
            }
            const Pe = [ [ 1, 1 ], [ 4, 3 ], [ 3, 4 ], [ 5, 4 ], [ 4, 5 ], [ 3, 2 ], [ 2, 3 ], [ 16, 10 ], [ 10, 16 ], [ 16, 9 ], [ 9, 16 ], [ 21, 9 ], [ 9, 21 ], [ 32, 9 ], [ 9, 32 ] ].reduce(((e, [t, i]) => ({
                ...e,
                [t / i]: [ t, i ]
            })), {});
            function Me(e) {
                if (!(D(e) || O(e) && e.includes(":"))) return !1;
                return (D(e) ? e : e.split(":")).map(Number).every($);
            }
            function xe(e) {
                if (!D(e) || !e.every($)) return null;
                const [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
                return [ t / n, i / n ];
            }
            function Ne(e) {
                const t = e => Me(e) ? e.split(":").map(Number) : null;
                let i = t(e);
                if (null === i && (i = t(this.config.ratio)), null === i && !z(this.embed) && D(this.embed.ratio) && ({ratio: i} = this.embed), 
                null === i && this.isHTML5) {
                    const {videoWidth: e, videoHeight: t} = this.media;
                    i = [ e, t ];
                }
                return xe(i);
            }
            function Le(e) {
                if (!this.isVideo) return {};
                const {wrapper: t} = this.elements, i = Ne.call(this, e);
                if (!D(i)) return {};
                const [s, n] = xe(i), a = 100 / s * n;
                if (Ae(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${a}%`, 
                this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                    const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i = (e - a) / (e / 50);
                    this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`;
                } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                return {
                    padding: a,
                    ratio: i
                };
            }
            function _e(e, t, i = .05) {
                const s = e / t, n = Se(Object.keys(Pe), s);
                return Math.abs(n - s) <= i ? Pe[n] : [ e, t ];
            }
            const Ie = {
                getSources() {
                    if (!this.isHTML5) return [];
                    return Array.from(this.media.querySelectorAll("source")).filter((e => {
                        const t = e.getAttribute("type");
                        return !!z(t) || me.mime.call(this, t);
                    }));
                },
                getQualityOptions() {
                    return this.config.quality.forced ? this.config.quality.options : Ie.getSources.call(this).map((e => Number(e.getAttribute("size")))).filter(Boolean);
                },
                setup() {
                    if (!this.isHTML5) return;
                    const e = this;
                    e.options.speed = e.config.speed.options, z(this.config.ratio) || Le.call(e), Object.defineProperty(e.media, "quality", {
                        get() {
                            const t = Ie.getSources.call(e).find((t => t.getAttribute("src") === e.source));
                            return t && Number(t.getAttribute("size"));
                        },
                        set(t) {
                            if (e.quality !== t) {
                                if (e.config.quality.forced && R(e.config.quality.onChange)) e.config.quality.onChange(t); else {
                                    const i = Ie.getSources.call(e).find((e => Number(e.getAttribute("size")) === t));
                                    if (!i) return;
                                    const {currentTime: s, paused: n, preload: a, readyState: r, playbackRate: o} = e.media;
                                    e.media.src = i.getAttribute("src"), ("none" !== a || r) && (e.once("loadedmetadata", (() => {
                                        e.speed = o, e.currentTime = s, n || Ce(e.play());
                                    })), e.media.load());
                                }
                                we.call(e, e.media, "qualitychange", !1, {
                                    quality: t
                                });
                            }
                        }
                    });
                },
                cancelRequests() {
                    this.isHTML5 && (ie(Ie.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), 
                    this.media.load(), this.debug.log("Cancelled network requests"));
                }
            };
            function $e(e, ...t) {
                return z(e) ? e : e.toString().replace(/{(\d+)}/g, ((e, i) => t[i].toString()));
            }
            const Oe = (e = "", t = "", i = "") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()), je = (e = "") => e.toString().replace(/\w\S*/g, (e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()));
            function Re(e = "") {
                let t = e.toString();
                return t = function(e = "") {
                    let t = e.toString();
                    return t = Oe(t, "-", " "), t = Oe(t, "_", " "), t = je(t), Oe(t, " ", "");
                }(t), t.charAt(0).toLowerCase() + t.slice(1);
            }
            function De(e) {
                const t = document.createElement("div");
                return t.appendChild(e), t.innerHTML;
            }
            const qe = {
                pip: "PIP",
                airplay: "AirPlay",
                html5: "HTML5",
                vimeo: "Vimeo",
                youtube: "YouTube"
            }, He = {
                get(e = "", t = {}) {
                    if (z(e) || z(t)) return "";
                    let i = X(t.i18n, e);
                    if (z(i)) return Object.keys(qe).includes(e) ? qe[e] : "";
                    const s = {
                        "{seektime}": t.seekTime,
                        "{title}": t.title
                    };
                    return Object.entries(s).forEach((([e, t]) => {
                        i = Oe(i, e, t);
                    })), i;
                }
            };
            class Fe {
                constructor(e) {
                    t(this, "get", (e => {
                        if (!Fe.supported || !this.enabled) return null;
                        const t = window.localStorage.getItem(this.key);
                        if (z(t)) return null;
                        const i = JSON.parse(t);
                        return O(e) && e.length ? i[e] : i;
                    })), t(this, "set", (e => {
                        if (!Fe.supported || !this.enabled) return;
                        if (!I(e)) return;
                        let t = this.get();
                        z(t) && (t = {}), J(t, e);
                        try {
                            window.localStorage.setItem(this.key, JSON.stringify(t));
                        } catch (e) {}
                    })), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key;
                }
                static get supported() {
                    try {
                        if (!("localStorage" in window)) return !1;
                        const e = "___test";
                        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
                    } catch (e) {
                        return !1;
                    }
                }
            }
            function Ve(e, t = "text") {
                return new Promise(((i, s) => {
                    try {
                        const s = new XMLHttpRequest;
                        if (!("withCredentials" in s)) return;
                        s.addEventListener("load", (() => {
                            if ("text" === t) try {
                                i(JSON.parse(s.responseText));
                            } catch (e) {
                                i(s.responseText);
                            } else i(s.response);
                        })), s.addEventListener("error", (() => {
                            throw new Error(s.status);
                        })), s.open("GET", e, !0), s.responseType = t, s.send();
                    } catch (e) {
                        s(e);
                    }
                }));
            }
            function Ue(e, t) {
                if (!O(e)) return;
                const i = O(t);
                let s = !1;
                const n = () => null !== document.getElementById(t), a = (e, t) => {
                    e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
                };
                if (!i || !n()) {
                    const n = Fe.supported, r = document.createElement("div");
                    if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), n) {
                        const e = window.localStorage.getItem(`cache-${t}`);
                        if (s = null !== e, s) {
                            const t = JSON.parse(e);
                            a(r, t.content);
                        }
                    }
                    Ve(e).then((e => {
                        if (!z(e)) {
                            if (n) try {
                                window.localStorage.setItem(`cache-${t}`, JSON.stringify({
                                    content: e
                                }));
                            } catch (e) {}
                            a(r, e);
                        }
                    })).catch((() => {}));
                }
            }
            const Be = e => Math.trunc(e / 60 / 60 % 60, 10);
            function We(e = 0, t = !1, i = !1) {
                if (!$(e)) return We(void 0, t, i);
                const s = e => `0${e}`.slice(-2);
                let n = Be(e);
                const a = (r = e, Math.trunc(r / 60 % 60, 10));
                var r;
                const o = (e => Math.trunc(e % 60, 10))(e);
                return n = t || n > 0 ? `${n}:` : "", `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(o)}`;
            }
            const ze = {
                getIconUrl() {
                    const e = new URL(this.config.iconUrl, window.location), t = window.location.host ? window.location.host : window.top.location.host, i = e.host !== t || Q.isIE && !window.svg4everybody;
                    return {
                        url: this.config.iconUrl,
                        cors: i
                    };
                },
                findElements() {
                    try {
                        return this.elements.controls = ue.call(this, this.config.selectors.controls.wrapper), 
                        this.elements.buttons = {
                            play: he.call(this, this.config.selectors.buttons.play),
                            pause: ue.call(this, this.config.selectors.buttons.pause),
                            restart: ue.call(this, this.config.selectors.buttons.restart),
                            rewind: ue.call(this, this.config.selectors.buttons.rewind),
                            fastForward: ue.call(this, this.config.selectors.buttons.fastForward),
                            mute: ue.call(this, this.config.selectors.buttons.mute),
                            pip: ue.call(this, this.config.selectors.buttons.pip),
                            airplay: ue.call(this, this.config.selectors.buttons.airplay),
                            settings: ue.call(this, this.config.selectors.buttons.settings),
                            captions: ue.call(this, this.config.selectors.buttons.captions),
                            fullscreen: ue.call(this, this.config.selectors.buttons.fullscreen)
                        }, this.elements.progress = ue.call(this, this.config.selectors.progress), this.elements.inputs = {
                            seek: ue.call(this, this.config.selectors.inputs.seek),
                            volume: ue.call(this, this.config.selectors.inputs.volume)
                        }, this.elements.display = {
                            buffer: ue.call(this, this.config.selectors.display.buffer),
                            currentTime: ue.call(this, this.config.selectors.display.currentTime),
                            duration: ue.call(this, this.config.selectors.display.duration)
                        }, H(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), 
                        !0;
                    } catch (e) {
                        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), 
                        this.toggleNativeControls(!0), !1;
                    }
                },
                createIcon(e, t) {
                    const i = "http://www.w3.org/2000/svg", s = ze.getIconUrl.call(this), n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`, a = document.createElementNS(i, "svg");
                    Z(a, J(t, {
                        "aria-hidden": "true",
                        focusable: "false"
                    }));
                    const r = document.createElementNS(i, "use"), o = `${n}-${e}`;
                    return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), 
                    r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(r), 
                    a;
                },
                createLabel(e, t = {}) {
                    const i = He.get(e, this.config);
                    return ee("span", {
                        ...t,
                        class: [ t.class, this.config.classNames.hidden ].filter(Boolean).join(" ")
                    }, i);
                },
                createBadge(e) {
                    if (z(e)) return null;
                    const t = ee("span", {
                        class: this.config.classNames.menu.value
                    });
                    return t.appendChild(ee("span", {
                        class: this.config.classNames.menu.badge
                    }, e)), t;
                },
                createButton(e, t) {
                    const i = J({}, t);
                    let s = Re(e);
                    const n = {
                        element: "button",
                        toggle: !1,
                        label: null,
                        icon: null,
                        labelPressed: null,
                        iconPressed: null
                    };
                    switch ([ "element", "icon", "label" ].forEach((e => {
                        Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
                    })), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), 
                    Object.keys(i).includes("class") ? i.class.split(" ").some((e => e === this.config.classNames.control)) || J(i, {
                        class: `${i.class} ${this.config.classNames.control}`
                    }) : i.class = this.config.classNames.control, e) {
                      case "play":
                        n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                        break;

                      case "mute":
                        n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                        break;

                      case "captions":
                        n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", 
                        n.iconPressed = "captions-on";
                        break;

                      case "fullscreen":
                        n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", 
                        n.iconPressed = "exit-fullscreen";
                        break;

                      case "play-large":
                        i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", 
                        n.icon = "play";
                        break;

                      default:
                        z(n.label) && (n.label = s), z(n.icon) && (n.icon = e);
                    }
                    const a = ee(n.element);
                    return n.toggle ? (a.appendChild(ze.createIcon.call(this, n.iconPressed, {
                        class: "icon--pressed"
                    })), a.appendChild(ze.createIcon.call(this, n.icon, {
                        class: "icon--not-pressed"
                    })), a.appendChild(ze.createLabel.call(this, n.labelPressed, {
                        class: "label--pressed"
                    })), a.appendChild(ze.createLabel.call(this, n.label, {
                        class: "label--not-pressed"
                    }))) : (a.appendChild(ze.createIcon.call(this, n.icon)), a.appendChild(ze.createLabel.call(this, n.label))), 
                    J(i, ae(this.config.selectors.buttons[s], i)), Z(a, i), "play" === s ? (D(this.elements.buttons[s]) || (this.elements.buttons[s] = []), 
                    this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a;
                },
                createRange(e, t) {
                    const i = ee("input", J(ae(this.config.selectors.inputs[e]), {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: .01,
                        value: 0,
                        autocomplete: "off",
                        role: "slider",
                        "aria-label": He.get(e, this.config),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": 0
                    }, t));
                    return this.elements.inputs[e] = i, ze.updateRangeFill.call(this, i), k.setup(i), 
                    i;
                },
                createProgress(e, t) {
                    const i = ee("progress", J(ae(this.config.selectors.display[e]), {
                        min: 0,
                        max: 100,
                        value: 0,
                        role: "progressbar",
                        "aria-hidden": !0
                    }, t));
                    if ("volume" !== e) {
                        i.appendChild(ee("span", null, "0"));
                        const t = {
                            played: "played",
                            buffer: "buffered"
                        }[e], s = t ? He.get(t, this.config) : "";
                        i.innerText = `% ${s.toLowerCase()}`;
                    }
                    return this.elements.display[e] = i, i;
                },
                createTime(e, t) {
                    const i = ae(this.config.selectors.display[e], t), s = ee("div", J(i, {
                        class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                        "aria-label": He.get(e, this.config)
                    }), "00:00");
                    return this.elements.display[e] = s, s;
                },
                bindMenuItemShortcuts(e, t) {
                    be.call(this, e, "keydown keyup", (i => {
                        if (![ "Space", "ArrowUp", "ArrowDown", "ArrowRight" ].includes(i.key)) return;
                        if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
                        const s = ce(e, '[role="menuitemradio"]');
                        if (!s && [ "Space", "ArrowRight" ].includes(i.key)) ze.showMenuPanel.call(this, t, !0); else {
                            let t;
                            "Space" !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? (t = e.nextElementSibling, 
                            H(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling, H(t) || (t = e.parentNode.lastElementChild)), 
                            de.call(this, t, !0));
                        }
                    }), !1), be.call(this, e, "keyup", (e => {
                        "Return" === e.key && ze.focusFirstMenuItem.call(this, null, !0);
                    }));
                },
                createMenuItem({value: e, list: t, type: i, title: s, badge: n = null, checked: a = !1}) {
                    const r = ae(this.config.selectors.inputs[i]), o = ee("button", J(r, {
                        type: "button",
                        role: "menuitemradio",
                        class: `${this.config.classNames.control} ${r.class ? r.class : ""}`.trim(),
                        "aria-checked": a,
                        value: e
                    })), l = ee("span");
                    l.innerHTML = s, H(n) && l.appendChild(n), o.appendChild(l), Object.defineProperty(o, "checked", {
                        enumerable: !0,
                        get: () => "true" === o.getAttribute("aria-checked"),
                        set(e) {
                            e && Array.from(o.parentNode.children).filter((e => ce(e, '[role="menuitemradio"]'))).forEach((e => e.setAttribute("aria-checked", "false"))), 
                            o.setAttribute("aria-checked", e ? "true" : "false");
                        }
                    }), this.listeners.bind(o, "click keyup", (t => {
                        if (!V(t) || "Space" === t.key) {
                            switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
                              case "language":
                                this.currentTrack = Number(e);
                                break;

                              case "quality":
                                this.quality = e;
                                break;

                              case "speed":
                                this.speed = parseFloat(e);
                            }
                            ze.showMenuPanel.call(this, "home", V(t));
                        }
                    }), i, !1), ze.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o);
                },
                formatTime(e = 0, t = !1) {
                    if (!$(e)) return e;
                    return We(e, Be(this.duration) > 0, t);
                },
                updateTimeDisplay(e = null, t = 0, i = !1) {
                    H(e) && $(t) && (e.innerText = ze.formatTime(t, i));
                },
                updateVolume() {
                    this.supported.ui && (H(this.elements.inputs.volume) && ze.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), 
                    H(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
                },
                setRange(e, t = 0) {
                    H(e) && (e.value = t, ze.updateRangeFill.call(this, e));
                },
                updateProgress(e) {
                    if (!this.supported.ui || !F(e)) return;
                    let t = 0;
                    const i = (e, t) => {
                        const i = $(t) ? t : 0, s = H(e) ? e : this.elements.display.buffer;
                        if (H(s)) {
                            s.value = i;
                            const e = s.getElementsByTagName("span")[0];
                            H(e) && (e.childNodes[0].nodeValue = i);
                        }
                    };
                    if (e) switch (e.type) {
                      case "timeupdate":
                      case "seeking":
                      case "seeked":
                        s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), 
                        "timeupdate" === e.type && ze.setRange.call(this, this.elements.inputs.seek, t);
                        break;

                      case "playing":
                      case "progress":
                        i(this.elements.display.buffer, 100 * this.buffered);
                    }
                    var s, n;
                },
                updateRangeFill(e) {
                    const t = F(e) ? e.target : e;
                    if (H(t) && "range" === t.getAttribute("type")) {
                        if (ce(t, this.config.selectors.inputs.seek)) {
                            t.setAttribute("aria-valuenow", this.currentTime);
                            const e = ze.formatTime(this.currentTime), i = ze.formatTime(this.duration), s = He.get("seekLabel", this.config);
                            t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i));
                        } else if (ce(t, this.config.selectors.inputs.volume)) {
                            const e = 100 * t.value;
                            t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
                        } else t.setAttribute("aria-valuenow", t.value);
                        Q.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%");
                    }
                },
                updateSeekTooltip(e) {
                    var t, i;
                    if (!this.config.tooltips.seek || !H(this.elements.inputs.seek) || !H(this.elements.display.seekTooltip) || 0 === this.duration) return;
                    const s = this.elements.display.seekTooltip, n = `${this.config.classNames.tooltip}--visible`, a = e => oe(s, n, e);
                    if (this.touch) return void a(!1);
                    let r = 0;
                    const o = this.elements.progress.getBoundingClientRect();
                    if (F(e)) r = 100 / o.width * (e.pageX - o.left); else {
                        if (!le(s, n)) return;
                        r = parseFloat(s.style.left, 10);
                    }
                    r < 0 ? r = 0 : r > 100 && (r = 100);
                    const l = this.duration / 100 * r;
                    s.innerText = ze.formatTime(l);
                    const c = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find((({time: e}) => e === Math.round(l)));
                    c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`), s.style.left = `${r}%`, 
                    F(e) && [ "mouseenter", "mouseleave" ].includes(e.type) && a("mouseenter" === e.type);
                },
                timeUpdate(e) {
                    const t = !H(this.elements.display.duration) && this.config.invertTime;
                    ze.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), 
                    e && "timeupdate" === e.type && this.media.seeking || ze.updateProgress.call(this, e);
                },
                durationUpdate() {
                    if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
                    if (this.duration >= 2 ** 32) return re(this.elements.display.currentTime, !0), 
                    void re(this.elements.progress, !0);
                    H(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                    const e = H(this.elements.display.duration);
                    !e && this.config.displayDuration && this.paused && ze.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), 
                    e && ze.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), 
                    this.config.markers.enabled && ze.setMarkers.call(this), ze.updateSeekTooltip.call(this);
                },
                toggleMenuButton(e, t) {
                    re(this.elements.settings.buttons[e], !t);
                },
                updateSetting(e, t, i) {
                    const s = this.elements.settings.panels[e];
                    let n = null, a = t;
                    if ("captions" === e) n = this.currentTrack; else {
                        if (n = z(i) ? this[e] : i, z(n) && (n = this.config[e].default), !z(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                        if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
                    }
                    if (H(a) || (a = s && s.querySelector('[role="menu"]')), !H(a)) return;
                    this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = ze.getLabel.call(this, e, n);
                    const r = a && a.querySelector(`[value="${n}"]`);
                    H(r) && (r.checked = !0);
                },
                getLabel(e, t) {
                    switch (e) {
                      case "speed":
                        return 1 === t ? He.get("normal", this.config) : `${t}&times;`;

                      case "quality":
                        if ($(t)) {
                            const e = He.get(`qualityLabel.${t}`, this.config);
                            return e.length ? e : `${t}p`;
                        }
                        return je(t);

                      case "captions":
                        return Qe.getLabel.call(this);

                      default:
                        return null;
                    }
                },
                setQualityMenu(e) {
                    if (!H(this.elements.settings.panels.quality)) return;
                    const t = "quality", i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                    D(e) && (this.options.quality = Ee(e).filter((e => this.config.quality.options.includes(e))));
                    const s = !z(this.options.quality) && this.options.quality.length > 1;
                    if (ze.toggleMenuButton.call(this, t, s), se(i), ze.checkMenu.call(this), !s) return;
                    const n = e => {
                        const t = He.get(`qualityBadge.${e}`, this.config);
                        return t.length ? ze.createBadge.call(this, t) : null;
                    };
                    this.options.quality.sort(((e, t) => {
                        const i = this.config.quality.options;
                        return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
                    })).forEach((e => {
                        ze.createMenuItem.call(this, {
                            value: e,
                            list: i,
                            type: t,
                            title: ze.getLabel.call(this, "quality", e),
                            badge: n(e)
                        });
                    })), ze.updateSetting.call(this, t, i);
                },
                setCaptionsMenu() {
                    if (!H(this.elements.settings.panels.captions)) return;
                    const e = "captions", t = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i = Qe.getTracks.call(this), s = Boolean(i.length);
                    if (ze.toggleMenuButton.call(this, e, s), se(t), ze.checkMenu.call(this), !s) return;
                    const n = i.map(((e, i) => ({
                        value: i,
                        checked: this.captions.toggled && this.currentTrack === i,
                        title: Qe.getLabel.call(this, e),
                        badge: e.language && ze.createBadge.call(this, e.language.toUpperCase()),
                        list: t,
                        type: "language"
                    })));
                    n.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: He.get("disabled", this.config),
                        list: t,
                        type: "language"
                    }), n.forEach(ze.createMenuItem.bind(this)), ze.updateSetting.call(this, e, t);
                },
                setSpeedMenu() {
                    if (!H(this.elements.settings.panels.speed)) return;
                    const e = "speed", t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                    this.options.speed = this.options.speed.filter((e => e >= this.minimumSpeed && e <= this.maximumSpeed));
                    const i = !z(this.options.speed) && this.options.speed.length > 1;
                    ze.toggleMenuButton.call(this, e, i), se(t), ze.checkMenu.call(this), i && (this.options.speed.forEach((i => {
                        ze.createMenuItem.call(this, {
                            value: i,
                            list: t,
                            type: e,
                            title: ze.getLabel.call(this, "speed", i)
                        });
                    })), ze.updateSetting.call(this, e, t));
                },
                checkMenu() {
                    const {buttons: e} = this.elements.settings, t = !z(e) && Object.values(e).some((e => !e.hidden));
                    re(this.elements.settings.menu, !t);
                },
                focusFirstMenuItem(e, t = !1) {
                    if (this.elements.settings.popup.hidden) return;
                    let i = e;
                    H(i) || (i = Object.values(this.elements.settings.panels).find((e => !e.hidden)));
                    const s = i.querySelector('[role^="menuitem"]');
                    de.call(this, s, t);
                },
                toggleMenu(e) {
                    const {popup: t} = this.elements.settings, i = this.elements.buttons.settings;
                    if (!H(t) || !H(i)) return;
                    const {hidden: s} = t;
                    let n = s;
                    if (j(e)) n = e; else if (V(e) && "Escape" === e.key) n = !1; else if (F(e)) {
                        const s = R(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(s);
                        if (a || !a && e.target !== i && n) return;
                    }
                    i.setAttribute("aria-expanded", n), re(t, !n), oe(this.elements.container, this.config.classNames.menu.open, n), 
                    n && V(e) ? ze.focusFirstMenuItem.call(this, null, !0) : n || s || de.call(this, i, V(e));
                },
                getMenuSize(e) {
                    const t = e.cloneNode(!0);
                    t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), 
                    e.parentNode.appendChild(t);
                    const i = t.scrollWidth, s = t.scrollHeight;
                    return ie(t), {
                        width: i,
                        height: s
                    };
                },
                showMenuPanel(e = "", t = !1) {
                    const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                    if (!H(i)) return;
                    const s = i.parentNode, n = Array.from(s.children).find((e => !e.hidden));
                    if (me.transitions && !me.reducedMotion) {
                        s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                        const e = ze.getMenuSize.call(this, i), t = e => {
                            e.target === s && [ "width", "height" ].includes(e.propertyName) && (s.style.width = "", 
                            s.style.height = "", ye.call(this, s, K, t));
                        };
                        be.call(this, s, K, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`;
                    }
                    re(n, !0), re(i, !1), ze.focusFirstMenuItem.call(this, i, t);
                },
                setDownloadUrl() {
                    const e = this.elements.buttons.download;
                    H(e) && e.setAttribute("href", this.download);
                },
                create(e) {
                    const {bindMenuItemShortcuts: t, createButton: i, createProgress: s, createRange: n, createTime: a, setQualityMenu: r, setSpeedMenu: o, showMenuPanel: l} = ze;
                    this.elements.controls = null, D(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                    const c = ee("div", ae(this.config.selectors.controls.wrapper));
                    this.elements.controls = c;
                    const h = {
                        class: "plyr__controls__item"
                    };
                    return Ee(D(this.config.controls) ? this.config.controls : []).forEach((r => {
                        if ("restart" === r && c.appendChild(i.call(this, "restart", h)), "rewind" === r && c.appendChild(i.call(this, "rewind", h)), 
                        "play" === r && c.appendChild(i.call(this, "play", h)), "fast-forward" === r && c.appendChild(i.call(this, "fast-forward", h)), 
                        "progress" === r) {
                            const t = ee("div", {
                                class: `${h.class} plyr__progress__container`
                            }), i = ee("div", ae(this.config.selectors.progress));
                            if (i.appendChild(n.call(this, "seek", {
                                id: `plyr-seek-${e.id}`
                            })), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                                const e = ee("span", {
                                    class: this.config.classNames.tooltip
                                }, "00:00");
                                i.appendChild(e), this.elements.display.seekTooltip = e;
                            }
                            this.elements.progress = i, t.appendChild(this.elements.progress), c.appendChild(t);
                        }
                        if ("current-time" === r && c.appendChild(a.call(this, "currentTime", h)), "duration" === r && c.appendChild(a.call(this, "duration", h)), 
                        "mute" === r || "volume" === r) {
                            let {volume: t} = this.elements;
                            if (H(t) && c.contains(t) || (t = ee("div", J({}, h, {
                                class: `${h.class} plyr__volume`.trim()
                            })), this.elements.volume = t, c.appendChild(t)), "mute" === r && t.appendChild(i.call(this, "mute")), 
                            "volume" === r && !Q.isIos) {
                                const i = {
                                    max: 1,
                                    step: .05,
                                    value: this.config.volume
                                };
                                t.appendChild(n.call(this, "volume", J(i, {
                                    id: `plyr-volume-${e.id}`
                                })));
                            }
                        }
                        if ("captions" === r && c.appendChild(i.call(this, "captions", h)), "settings" === r && !z(this.config.settings)) {
                            const s = ee("div", J({}, h, {
                                class: `${h.class} plyr__menu`.trim(),
                                hidden: ""
                            }));
                            s.appendChild(i.call(this, "settings", {
                                "aria-haspopup": !0,
                                "aria-controls": `plyr-settings-${e.id}`,
                                "aria-expanded": !1
                            }));
                            const n = ee("div", {
                                class: "plyr__menu__container",
                                id: `plyr-settings-${e.id}`,
                                hidden: ""
                            }), a = ee("div"), r = ee("div", {
                                id: `plyr-settings-${e.id}-home`
                            }), o = ee("div", {
                                role: "menu"
                            });
                            r.appendChild(o), a.appendChild(r), this.elements.settings.panels.home = r, this.config.settings.forEach((i => {
                                const s = ee("button", J(ae(this.config.selectors.buttons.settings), {
                                    type: "button",
                                    class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                    role: "menuitem",
                                    "aria-haspopup": !0,
                                    hidden: ""
                                }));
                                t.call(this, s, i), be.call(this, s, "click", (() => {
                                    l.call(this, i, !1);
                                }));
                                const n = ee("span", null, He.get(i, this.config)), r = ee("span", {
                                    class: this.config.classNames.menu.value
                                });
                                r.innerHTML = e[i], n.appendChild(r), s.appendChild(n), o.appendChild(s);
                                const c = ee("div", {
                                    id: `plyr-settings-${e.id}-${i}`,
                                    hidden: ""
                                }), h = ee("button", {
                                    type: "button",
                                    class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                });
                                h.appendChild(ee("span", {
                                    "aria-hidden": !0
                                }, He.get(i, this.config))), h.appendChild(ee("span", {
                                    class: this.config.classNames.hidden
                                }, He.get("menuBack", this.config))), be.call(this, c, "keydown", (e => {
                                    "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), l.call(this, "home", !0));
                                }), !1), be.call(this, h, "click", (() => {
                                    l.call(this, "home", !1);
                                })), c.appendChild(h), c.appendChild(ee("div", {
                                    role: "menu"
                                })), a.appendChild(c), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = c;
                            })), n.appendChild(a), s.appendChild(n), c.appendChild(s), this.elements.settings.popup = n, 
                            this.elements.settings.menu = s;
                        }
                        if ("pip" === r && me.pip && c.appendChild(i.call(this, "pip", h)), "airplay" === r && me.airplay && c.appendChild(i.call(this, "airplay", h)), 
                        "download" === r) {
                            const e = J({}, h, {
                                element: "a",
                                href: this.download,
                                target: "_blank"
                            });
                            this.isHTML5 && (e.download = "");
                            const {download: t} = this.config.urls;
                            !W(t) && this.isEmbed && J(e, {
                                icon: `logo-${this.provider}`,
                                label: this.provider
                            }), c.appendChild(i.call(this, "download", e));
                        }
                        "fullscreen" === r && c.appendChild(i.call(this, "fullscreen", h));
                    })), this.isHTML5 && r.call(this, Ie.getQualityOptions.call(this)), o.call(this), 
                    c;
                },
                inject() {
                    if (this.config.loadSprite) {
                        const e = ze.getIconUrl.call(this);
                        e.cors && Ue(e.url, "sprite-plyr");
                    }
                    this.id = Math.floor(1e4 * Math.random());
                    let e = null;
                    this.elements.controls = null;
                    const t = {
                        id: this.id,
                        seektime: this.config.seekTime,
                        title: this.config.title
                    };
                    let i = !0;
                    R(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), 
                    this.config.controls || (this.config.controls = []), H(this.config.controls) || O(this.config.controls) ? e = this.config.controls : (e = ze.create.call(this, {
                        id: this.id,
                        seektime: this.config.seekTime,
                        speed: this.speed,
                        quality: this.quality,
                        captions: Qe.getLabel.call(this)
                    }), i = !1);
                    let s;
                    i && O(this.config.controls) && (e = (e => {
                        let i = e;
                        return Object.entries(t).forEach((([e, t]) => {
                            i = Oe(i, `{${e}}`, t);
                        })), i;
                    })(e)), O(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), 
                    H(s) || (s = this.elements.container);
                    if (s[H(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), H(this.elements.controls) || ze.findElements.call(this), 
                    !z(this.elements.buttons)) {
                        const e = e => {
                            const t = this.config.classNames.controlPressed;
                            Object.defineProperty(e, "pressed", {
                                enumerable: !0,
                                get: () => le(e, t),
                                set(i = !1) {
                                    oe(e, t, i);
                                }
                            });
                        };
                        Object.values(this.elements.buttons).filter(Boolean).forEach((t => {
                            D(t) || q(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
                        }));
                    }
                    if (Q.isEdge && Y(s), this.config.tooltips.controls) {
                        const {classNames: e, selectors: t} = this.config, i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`, s = he.call(this, i);
                        Array.from(s).forEach((e => {
                            oe(e, this.config.classNames.hidden, !1), oe(e, this.config.classNames.tooltip, !0);
                        }));
                    }
                },
                setMediaMetadata() {
                    try {
                        "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                            title: this.config.mediaMetadata.title,
                            artist: this.config.mediaMetadata.artist,
                            album: this.config.mediaMetadata.album,
                            artwork: this.config.mediaMetadata.artwork
                        }));
                    } catch (e) {}
                },
                setMarkers() {
                    var e, t;
                    if (!this.duration || this.elements.markers) return;
                    const i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter((({time: e}) => e > 0 && e < this.duration));
                    if (null == i || !i.length) return;
                    const s = document.createDocumentFragment(), n = document.createDocumentFragment();
                    let a = null;
                    const r = `${this.config.classNames.tooltip}--visible`, o = e => oe(a, r, e);
                    i.forEach((e => {
                        const t = ee("span", {
                            class: this.config.classNames.marker
                        }, ""), i = e.time / this.duration * 100 + "%";
                        a && (t.addEventListener("mouseenter", (() => {
                            e.label || (a.style.left = i, a.innerHTML = e.label, o(!0));
                        })), t.addEventListener("mouseleave", (() => {
                            o(!1);
                        }))), t.addEventListener("click", (() => {
                            this.currentTime = e.time;
                        })), t.style.left = i, n.appendChild(t);
                    })), s.appendChild(n), this.config.tooltips.seek || (a = ee("span", {
                        class: this.config.classNames.tooltip
                    }, ""), s.appendChild(a)), this.elements.markers = {
                        points: n,
                        tip: a
                    }, this.elements.progress.appendChild(s);
                }
            };
            function Ke(e, t = !0) {
                let i = e;
                if (t) {
                    const e = document.createElement("a");
                    e.href = i, i = e.href;
                }
                try {
                    return new URL(i);
                } catch (e) {
                    return null;
                }
            }
            function Ye(e) {
                const t = new URLSearchParams;
                return I(e) && Object.entries(e).forEach((([e, i]) => {
                    t.set(e, i);
                })), t;
            }
            const Qe = {
                setup() {
                    if (!this.supported.ui) return;
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !me.textTracks) return void (D(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && ze.setCaptionsMenu.call(this));
                    var e, t;
                    if (H(this.elements.captions) || (this.elements.captions = ee("div", ae(this.config.selectors.captions)), 
                    e = this.elements.captions, t = this.elements.wrapper, H(e) && H(t) && t.parentNode.insertBefore(e, t.nextSibling)), 
                    Q.isIE && window.URL) {
                        const e = this.media.querySelectorAll("track");
                        Array.from(e).forEach((e => {
                            const t = e.getAttribute("src"), i = Ke(t);
                            null !== i && i.hostname !== window.location.href.hostname && [ "http:", "https:" ].includes(i.protocol) && Ve(t, "blob").then((t => {
                                e.setAttribute("src", window.URL.createObjectURL(t));
                            })).catch((() => {
                                ie(e);
                            }));
                        }));
                    }
                    const i = Ee((navigator.languages || [ navigator.language || navigator.userLanguage || "en" ]).map((e => e.split("-")[0])));
                    let s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                    "auto" === s && ([s] = i);
                    let n = this.storage.get("captions");
                    if (j(n) || ({active: n} = this.config.captions), Object.assign(this.captions, {
                        toggled: !1,
                        active: n,
                        language: s,
                        languages: i
                    }), this.isHTML5) {
                        const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                        be.call(this, this.media.textTracks, e, Qe.update.bind(this));
                    }
                    setTimeout(Qe.update.bind(this), 0);
                },
                update() {
                    const e = Qe.getTracks.call(this, !0), {active: t, language: i, meta: s, currentTrackNode: n} = this.captions, a = Boolean(e.find((e => e.language === i)));
                    this.isHTML5 && this.isVideo && e.filter((e => !s.get(e))).forEach((e => {
                        this.debug.log("Track added", e), s.set(e, {
                            default: "showing" === e.mode
                        }), "showing" === e.mode && (e.mode = "hidden"), be.call(this, e, "cuechange", (() => Qe.updateCues.call(this)));
                    })), (a && this.language !== i || !e.includes(n)) && (Qe.setLanguage.call(this, i), 
                    Qe.toggle.call(this, t && a)), this.elements && oe(this.elements.container, this.config.classNames.captions.enabled, !z(e)), 
                    D(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && ze.setCaptionsMenu.call(this);
                },
                toggle(e, t = !0) {
                    if (!this.supported.ui) return;
                    const {toggled: i} = this.captions, s = this.config.classNames.captions.active, n = _(e) ? !i : e;
                    if (n !== i) {
                        if (t || (this.captions.active = n, this.storage.set({
                            captions: n
                        })), !this.language && n && !t) {
                            const e = Qe.getTracks.call(this), t = Qe.findTrack.call(this, [ this.captions.language, ...this.captions.languages ], !0);
                            return this.captions.language = t.language, void Qe.set.call(this, e.indexOf(t));
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), 
                        oe(this.elements.container, s, n), this.captions.toggled = n, ze.updateSetting.call(this, "captions"), 
                        we.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
                    }
                    setTimeout((() => {
                        n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
                    }));
                },
                set(e, t = !0) {
                    const i = Qe.getTracks.call(this);
                    if (-1 !== e) if ($(e)) if (e in i) {
                        if (this.captions.currentTrack !== e) {
                            this.captions.currentTrack = e;
                            const s = i[e], {language: n} = s || {};
                            this.captions.currentTrackNode = s, ze.updateSetting.call(this, "captions"), t || (this.captions.language = n, 
                            this.storage.set({
                                language: n
                            })), this.isVimeo && this.embed.enableTextTrack(n), we.call(this, this.media, "languagechange");
                        }
                        Qe.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Qe.updateCues.call(this);
                    } else this.debug.warn("Track not found", e); else this.debug.warn("Invalid caption argument", e); else Qe.toggle.call(this, !1, t);
                },
                setLanguage(e, t = !0) {
                    if (!O(e)) return void this.debug.warn("Invalid language argument", e);
                    const i = e.toLowerCase();
                    this.captions.language = i;
                    const s = Qe.getTracks.call(this), n = Qe.findTrack.call(this, [ i ]);
                    Qe.set.call(this, s.indexOf(n), t);
                },
                getTracks(e = !1) {
                    return Array.from((this.media || {}).textTracks || []).filter((t => !this.isHTML5 || e || this.captions.meta.has(t))).filter((e => [ "captions", "subtitles" ].includes(e.kind)));
                },
                findTrack(e, t = !1) {
                    const i = Qe.getTracks.call(this), s = e => Number((this.captions.meta.get(e) || {}).default), n = Array.from(i).sort(((e, t) => s(t) - s(e)));
                    let a;
                    return e.every((e => (a = n.find((t => t.language === e)), !a))), a || (t ? n[0] : void 0);
                },
                getCurrentTrack() {
                    return Qe.getTracks.call(this)[this.currentTrack];
                },
                getLabel(e) {
                    let t = e;
                    return !U(t) && me.textTracks && this.captions.toggled && (t = Qe.getCurrentTrack.call(this)), 
                    U(t) ? z(t.label) ? z(t.language) ? He.get("enabled", this.config) : e.language.toUpperCase() : t.label : He.get("disabled", this.config);
                },
                updateCues(e) {
                    if (!this.supported.ui) return;
                    if (!H(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                    if (!_(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
                    let t = e;
                    if (!t) {
                        const e = Qe.getCurrentTrack.call(this);
                        t = Array.from((e || {}).activeCues || []).map((e => e.getCueAsHTML())).map(De);
                    }
                    const i = t.map((e => e.trim())).join("\n");
                    if (i !== this.elements.captions.innerHTML) {
                        se(this.elements.captions);
                        const e = ee("span", ae(this.config.selectors.caption));
                        e.innerHTML = i, this.elements.captions.appendChild(e), we.call(this, this.media, "cuechange");
                    }
                }
            }, Xe = {
                enabled: !0,
                title: "",
                debug: !1,
                autoplay: !1,
                autopause: !0,
                playsinline: !0,
                seekTime: 10,
                volume: 1,
                muted: !1,
                duration: null,
                displayDuration: !0,
                invertTime: !0,
                toggleInvert: !0,
                ratio: null,
                clickToPlay: !0,
                hideControls: !0,
                resetOnEnd: !1,
                disableContextMenu: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
                blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                quality: {
                    default: 576,
                    options: [ 4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240 ],
                    forced: !1,
                    onChange: null
                },
                loop: {
                    active: !1
                },
                speed: {
                    selected: 1,
                    options: [ .5, .75, 1, 1.25, 1.5, 1.75, 2, 4 ]
                },
                keyboard: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                captions: {
                    active: !1,
                    language: "auto",
                    update: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    iosNative: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: [ "play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen" ],
                settings: [ "captions", "quality", "speed" ],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime}s",
                    play: "Play",
                    pause: "Pause",
                    fastForward: "Forward {seektime}s",
                    seek: "Seek",
                    seekLabel: "{currentTime} of {duration}",
                    played: "Played",
                    buffered: "Buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    mute: "Mute",
                    unmute: "Unmute",
                    enableCaptions: "Enable captions",
                    disableCaptions: "Disable captions",
                    download: "Download",
                    enterFullscreen: "Enter fullscreen",
                    exitFullscreen: "Exit fullscreen",
                    frameTitle: "Player for {title}",
                    captions: "Captions",
                    settings: "Settings",
                    pip: "PIP",
                    menuBack: "Go back to previous menu",
                    speed: "Speed",
                    normal: "Normal",
                    quality: "Quality",
                    loop: "Loop",
                    start: "Start",
                    end: "End",
                    all: "All",
                    reset: "Reset",
                    disabled: "Disabled",
                    enabled: "Enabled",
                    advertisement: "Ad",
                    qualityBadge: {
                        2160: "4K",
                        1440: "HD",
                        1080: "HD",
                        720: "HD",
                        576: "SD",
                        480: "SD"
                    }
                },
                urls: {
                    download: null,
                    vimeo: {
                        sdk: "https://player.vimeo.com/api/player.js",
                        iframe: "https://player.vimeo.com/video/{0}?{1}",
                        api: "https://vimeo.com/api/oembed.json?url={0}"
                    },
                    youtube: {
                        sdk: "https://www.youtube.com/iframe_api",
                        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                    },
                    googleIMA: {
                        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    fastForward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    download: null,
                    fullscreen: null,
                    pip: null,
                    airplay: null,
                    speed: null,
                    quality: null,
                    loop: null,
                    language: null
                },
                events: [ "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick" ],
                selectors: {
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        fastForward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        download: '[data-plyr="download"]',
                        fullscreen: '[data-plyr="fullscreen"]',
                        pip: '[data-plyr="pip"]',
                        airplay: '[data-plyr="airplay"]',
                        settings: '[data-plyr="settings"]',
                        loop: '[data-plyr="loop"]'
                    },
                    inputs: {
                        seek: '[data-plyr="seek"]',
                        volume: '[data-plyr="volume"]',
                        speed: '[data-plyr="speed"]',
                        language: '[data-plyr="language"]',
                        quality: '[data-plyr="quality"]'
                    },
                    display: {
                        currentTime: ".plyr__time--current",
                        duration: ".plyr__time--duration",
                        buffer: ".plyr__progress__buffer",
                        loop: ".plyr__progress__loop",
                        volume: ".plyr__volume--display"
                    },
                    progress: ".plyr__progress",
                    captions: ".plyr__captions",
                    caption: ".plyr__caption"
                },
                classNames: {
                    type: "plyr--{0}",
                    provider: "plyr--{0}",
                    video: "plyr__video-wrapper",
                    embed: "plyr__video-embed",
                    videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                    embedContainer: "plyr__video-embed__container",
                    poster: "plyr__poster",
                    posterEnabled: "plyr__poster-enabled",
                    ads: "plyr__ads",
                    control: "plyr__control",
                    controlPressed: "plyr__control--pressed",
                    playing: "plyr--playing",
                    paused: "plyr--paused",
                    stopped: "plyr--stopped",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    cues: "plyr__cues",
                    marker: "plyr__progress__marker",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    uiSupported: "plyr--full-ui",
                    noTransition: "plyr--no-transition",
                    display: {
                        time: "plyr__time"
                    },
                    menu: {
                        value: "plyr__menu__value",
                        badge: "plyr__badge",
                        open: "plyr--menu-open"
                    },
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        fallback: "plyr--fullscreen-fallback"
                    },
                    pip: {
                        supported: "plyr--pip-supported",
                        active: "plyr--pip-active"
                    },
                    airplay: {
                        supported: "plyr--airplay-supported",
                        active: "plyr--airplay-active"
                    },
                    tabFocus: "plyr__tab-focus",
                    previewThumbnails: {
                        thumbContainer: "plyr__preview-thumb",
                        thumbContainerShown: "plyr__preview-thumb--is-shown",
                        imageContainer: "plyr__preview-thumb__image-container",
                        timeContainer: "plyr__preview-thumb__time-container",
                        scrubbingContainer: "plyr__preview-scrubbing",
                        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                    }
                },
                attributes: {
                    embed: {
                        provider: "data-plyr-provider",
                        id: "data-plyr-embed-id",
                        hash: "data-plyr-embed-hash"
                    }
                },
                ads: {
                    enabled: !1,
                    publisherId: "",
                    tagUrl: ""
                },
                previewThumbnails: {
                    enabled: !1,
                    src: ""
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    speed: !0,
                    transparent: !1,
                    customControls: !0,
                    referrerPolicy: null,
                    premium: !1
                },
                youtube: {
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    customControls: !0,
                    noCookie: !1
                },
                mediaMetadata: {
                    title: "",
                    artist: "",
                    album: "",
                    artwork: []
                },
                markers: {
                    enabled: !1,
                    points: []
                }
            }, Je = "picture-in-picture", Ge = "inline", Ze = {
                html5: "html5",
                youtube: "youtube",
                vimeo: "vimeo"
            }, et = "audio", tt = "video";
            const it = () => {};
            class st {
                constructor(e = !1) {
                    this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
                }
                get log() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : it;
                }
                get warn() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : it;
                }
                get error() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : it;
                }
            }
            class nt {
                constructor(e) {
                    t(this, "onChange", (() => {
                        if (!this.enabled) return;
                        const e = this.player.elements.buttons.fullscreen;
                        H(e) && (e.pressed = this.active);
                        const t = this.target === this.player.media ? this.target : this.player.elements.container;
                        we.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0);
                    })), t(this, "toggleFallback", ((e = !1) => {
                        if (e ? this.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", 
                        oe(this.target, this.player.config.classNames.fullscreen.fallback, e), Q.isIos) {
                            let t = document.head.querySelector('meta[name="viewport"]');
                            const i = "viewport-fit=cover";
                            t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
                            const s = O(t.content) && t.content.includes(i);
                            e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter((e => e.trim() !== i)).join(","));
                        }
                        this.onChange();
                    })), t(this, "trapFocus", (e => {
                        if (Q.isIos || !this.active || "Tab" !== e.key) return;
                        const t = document.activeElement, i = he.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i, n = i[i.length - 1];
                        t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), 
                        e.preventDefault());
                    })), t(this, "update", (() => {
                        if (this.enabled) {
                            let e;
                            e = this.forceFallback ? "Fallback (forced)" : nt.native ? "Native" : "Fallback", 
                            this.player.debug.log(`${e} fullscreen enabled`);
                        } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                        oe(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
                    })), t(this, "enter", (() => {
                        this.enabled && (Q.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !nt.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? z(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                            navigationUI: "hide"
                        }));
                    })), t(this, "exit", (() => {
                        if (this.enabled) if (Q.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), 
                        Ce(this.player.play()); else if (!nt.native || this.forceFallback) this.toggleFallback(!1); else if (this.prefix) {
                            if (!z(this.prefix)) {
                                const e = "moz" === this.prefix ? "Cancel" : "Exit";
                                document[`${this.prefix}${e}${this.property}`]();
                            }
                        } else (document.cancelFullScreen || document.exitFullscreen).call(document);
                    })), t(this, "toggle", (() => {
                        this.active ? this.exit() : this.enter();
                    })), this.player = e, this.prefix = nt.prefix, this.property = nt.property, this.scrollPosition = {
                        x: 0,
                        y: 0
                    }, this.forceFallback = "force" === e.config.fullscreen.fallback, this.player.elements.fullscreen = e.config.fullscreen.container && function(e, t) {
                        const {prototype: i} = Element;
                        return (i.closest || function() {
                            let e = this;
                            do {
                                if (ce.matches(e, t)) return e;
                                e = e.parentElement || e.parentNode;
                            } while (null !== e && 1 === e.nodeType);
                            return null;
                        }).call(e, t);
                    }(this.player.elements.container, e.config.fullscreen.container), be.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, (() => {
                        this.onChange();
                    })), be.call(this.player, this.player.elements.container, "dblclick", (e => {
                        H(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen");
                    })), be.call(this, this.player.elements.container, "keydown", (e => this.trapFocus(e))), 
                    this.update();
                }
                static get native() {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
                }
                get usingNative() {
                    return nt.native && !this.forceFallback;
                }
                static get prefix() {
                    if (R(document.exitFullscreen)) return "";
                    let e = "";
                    return [ "webkit", "moz", "ms" ].some((t => !(!R(document[`${t}ExitFullscreen`]) && !R(document[`${t}CancelFullScreen`])) && (e = t, 
                    !0))), e;
                }
                static get property() {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
                }
                get enabled() {
                    return (nt.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
                }
                get active() {
                    if (!this.enabled) return !1;
                    if (!nt.native || this.forceFallback) return le(this.target, this.player.config.classNames.fullscreen.fallback);
                    const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
                    return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
                }
                get target() {
                    return Q.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
                }
            }
            function at(e, t = 1) {
                return new Promise(((i, s) => {
                    const n = new Image, a = () => {
                        delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
                    };
                    Object.assign(n, {
                        onload: a,
                        onerror: a,
                        src: e
                    });
                }));
            }
            const rt = {
                addStyleHook() {
                    oe(this.elements.container, this.config.selectors.container.replace(".", ""), !0), 
                    oe(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
                },
                toggleNativeControls(e = !1) {
                    e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
                },
                build() {
                    if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), 
                    void rt.toggleNativeControls.call(this, !0);
                    H(this.elements.controls) || (ze.inject.call(this), this.listeners.controls()), 
                    rt.toggleNativeControls.call(this), this.isHTML5 && Qe.setup.call(this), this.volume = null, 
                    this.muted = null, this.loop = null, this.quality = null, this.speed = null, ze.updateVolume.call(this), 
                    ze.timeUpdate.call(this), ze.durationUpdate.call(this), rt.checkPlaying.call(this), 
                    oe(this.elements.container, this.config.classNames.pip.supported, me.pip && this.isHTML5 && this.isVideo), 
                    oe(this.elements.container, this.config.classNames.airplay.supported, me.airplay && this.isHTML5), 
                    oe(this.elements.container, this.config.classNames.isIos, Q.isIos), oe(this.elements.container, this.config.classNames.isTouch, this.touch), 
                    this.ready = !0, setTimeout((() => {
                        we.call(this, this.media, "ready");
                    }), 0), rt.setTitle.call(this), this.poster && rt.setPoster.call(this, this.poster, !1).catch((() => {})), 
                    this.config.duration && ze.durationUpdate.call(this), this.config.mediaMetadata && ze.setMediaMetadata.call(this);
                },
                setTitle() {
                    let e = He.get("play", this.config);
                    if (O(this.config.title) && !z(this.config.title) && (e += `, ${this.config.title}`), 
                    Array.from(this.elements.buttons.play || []).forEach((t => {
                        t.setAttribute("aria-label", e);
                    })), this.isEmbed) {
                        const e = ue.call(this, "iframe");
                        if (!H(e)) return;
                        const t = z(this.config.title) ? "video" : this.config.title, i = He.get("frameTitle", this.config);
                        e.setAttribute("title", i.replace("{title}", t));
                    }
                },
                togglePoster(e) {
                    oe(this.elements.container, this.config.classNames.posterEnabled, e);
                },
                setPoster(e, t = !0) {
                    return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), 
                    this.elements.poster.removeAttribute("hidden"), ke.call(this).then((() => at(e))).catch((t => {
                        throw e === this.poster && rt.togglePoster.call(this, !1), t;
                    })).then((() => {
                        if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
                    })).then((() => (Object.assign(this.elements.poster.style, {
                        backgroundImage: `url('${e}')`,
                        backgroundSize: ""
                    }), rt.togglePoster.call(this, !0), e))));
                },
                checkPlaying(e) {
                    oe(this.elements.container, this.config.classNames.playing, this.playing), oe(this.elements.container, this.config.classNames.paused, this.paused), 
                    oe(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e => {
                        Object.assign(e, {
                            pressed: this.playing
                        }), e.setAttribute("aria-label", He.get(this.playing ? "pause" : "play", this.config));
                    })), F(e) && "timeupdate" === e.type || rt.toggleControls.call(this);
                },
                checkLoading(e) {
                    this.loading = [ "stalled", "waiting" ].includes(e.type), clearTimeout(this.timers.loading), 
                    this.timers.loading = setTimeout((() => {
                        oe(this.elements.container, this.config.classNames.loading, this.loading), rt.toggleControls.call(this);
                    }), this.loading ? 250 : 0);
                },
                toggleControls(e) {
                    const {controls: t} = this.elements;
                    if (t && this.config.hideControls) {
                        const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                        this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
                    }
                },
                migrateStyles() {
                    Object.values({
                        ...this.media.style
                    }).filter((e => !z(e) && O(e) && e.startsWith("--plyr"))).forEach((e => {
                        this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), 
                        this.media.style.removeProperty(e);
                    })), z(this.media.style) && this.media.removeAttribute("style");
                }
            };
            class ot {
                constructor(e) {
                    t(this, "firstTouch", (() => {
                        const {player: e} = this, {elements: t} = e;
                        e.touch = !0, oe(t.container, e.config.classNames.isTouch, !0);
                    })), t(this, "setTabFocus", (e => {
                        const {player: t} = this, {elements: i} = t, {key: s, type: n, timeStamp: a} = e;
                        if (clearTimeout(this.focusTimer), "keydown" === n && "Tab" !== s) return;
                        "keydown" === n && (this.lastKeyDown = a);
                        const r = a - this.lastKeyDown <= 20;
                        ("focus" !== n || r) && ((() => {
                            const e = t.config.classNames.tabFocus;
                            oe(he.call(t, `.${e}`), e, !1);
                        })(), "focusout" !== n && (this.focusTimer = setTimeout((() => {
                            const e = document.activeElement;
                            i.container.contains(e) && oe(document.activeElement, t.config.classNames.tabFocus, !0);
                        }), 10)));
                    })), t(this, "global", ((e = !0) => {
                        const {player: t} = this;
                        t.config.keyboard.global && fe.call(t, window, "keydown keyup", this.handleKey, e, !1), 
                        fe.call(t, document.body, "click", this.toggleMenu, e), ve.call(t, document.body, "touchstart", this.firstTouch), 
                        fe.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0);
                    })), t(this, "container", (() => {
                        const {player: e} = this, {config: t, elements: i, timers: s} = e;
                        !t.keyboard.global && t.keyboard.focused && be.call(e, i.container, "keydown keyup", this.handleKey, !1), 
                        be.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t => {
                            const {controls: n} = i;
                            n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                            let a = 0;
                            [ "touchstart", "touchmove", "mousemove" ].includes(t.type) && (rt.toggleControls.call(e, !0), 
                            a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout((() => rt.toggleControls.call(e, !1)), a);
                        }));
                        const n = () => {
                            if (!e.isVimeo || e.config.vimeo.premium) return;
                            const t = i.wrapper, {active: s} = e.fullscreen, [n, a] = Ne.call(e), r = Ae(`aspect-ratio: ${n} / ${a}`);
                            if (!s) return void (r ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, 
                            t.style.margin = null));
                            const [o, l] = [ Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) ], c = o / l > n / a;
                            r ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? l / a * n + "px" : null, 
                            t.style.margin = c ? "0 auto" : null);
                        }, a = () => {
                            clearTimeout(s.resized), s.resized = setTimeout(n, 50);
                        };
                        be.call(e, i.container, "enterfullscreen exitfullscreen", (t => {
                            const {target: s} = e.fullscreen;
                            if (s !== i.container) return;
                            if (!e.isEmbed && z(e.config.ratio)) return;
                            n();
                            ("enterfullscreen" === t.type ? be : ye).call(e, window, "resize", a);
                        }));
                    })), t(this, "media", (() => {
                        const {player: e} = this, {elements: t} = e;
                        if (be.call(e, e.media, "timeupdate seeking seeked", (t => ze.timeUpdate.call(e, t))), 
                        be.call(e, e.media, "durationchange loadeddata loadedmetadata", (t => ze.durationUpdate.call(e, t))), 
                        be.call(e, e.media, "ended", (() => {
                            e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
                        })), be.call(e, e.media, "progress playing seeking seeked", (t => ze.updateProgress.call(e, t))), 
                        be.call(e, e.media, "volumechange", (t => ze.updateVolume.call(e, t))), be.call(e, e.media, "playing play pause ended emptied timeupdate", (t => rt.checkPlaying.call(e, t))), 
                        be.call(e, e.media, "waiting canplay seeked playing", (t => rt.checkLoading.call(e, t))), 
                        e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                            const i = ue.call(e, `.${e.config.classNames.video}`);
                            if (!H(i)) return;
                            be.call(e, t.container, "click", (s => {
                                ([ t.container, i ].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), 
                                this.proxy(s, (() => {
                                    Ce(e.play());
                                }), "play")) : this.proxy(s, (() => {
                                    Ce(e.togglePlay());
                                }), "play")));
                            }));
                        }
                        e.supported.ui && e.config.disableContextMenu && be.call(e, t.wrapper, "contextmenu", (e => {
                            e.preventDefault();
                        }), !1), be.call(e, e.media, "volumechange", (() => {
                            e.storage.set({
                                volume: e.volume,
                                muted: e.muted
                            });
                        })), be.call(e, e.media, "ratechange", (() => {
                            ze.updateSetting.call(e, "speed"), e.storage.set({
                                speed: e.speed
                            });
                        })), be.call(e, e.media, "qualitychange", (t => {
                            ze.updateSetting.call(e, "quality", null, t.detail.quality);
                        })), be.call(e, e.media, "ready qualitychange", (() => {
                            ze.setDownloadUrl.call(e);
                        }));
                        const i = e.config.events.concat([ "keyup", "keydown" ]).join(" ");
                        be.call(e, e.media, i, (i => {
                            let {detail: s = {}} = i;
                            "error" === i.type && (s = e.media.error), we.call(e, t.container, i.type, !0, s);
                        }));
                    })), t(this, "proxy", ((e, t, i) => {
                        const {player: s} = this, n = s.config.listeners[i];
                        let a = !0;
                        R(n) && (a = n.call(s, e)), !1 !== a && R(t) && t.call(s, e);
                    })), t(this, "bind", ((e, t, i, s, n = !0) => {
                        const {player: a} = this, r = a.config.listeners[s], o = R(r);
                        be.call(a, e, t, (e => this.proxy(e, i, s)), n && !o);
                    })), t(this, "controls", (() => {
                        const {player: e} = this, {elements: t} = e, i = Q.isIE ? "change" : "input";
                        if (t.buttons.play && Array.from(t.buttons.play).forEach((t => {
                            this.bind(t, "click", (() => {
                                Ce(e.togglePlay());
                            }), "play");
                        })), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", (() => {
                            e.lastSeekTime = Date.now(), e.rewind();
                        }), "rewind"), this.bind(t.buttons.fastForward, "click", (() => {
                            e.lastSeekTime = Date.now(), e.forward();
                        }), "fastForward"), this.bind(t.buttons.mute, "click", (() => {
                            e.muted = !e.muted;
                        }), "mute"), this.bind(t.buttons.captions, "click", (() => e.toggleCaptions())), 
                        this.bind(t.buttons.download, "click", (() => {
                            we.call(e, e.media, "download");
                        }), "download"), this.bind(t.buttons.fullscreen, "click", (() => {
                            e.fullscreen.toggle();
                        }), "fullscreen"), this.bind(t.buttons.pip, "click", (() => {
                            e.pip = "toggle";
                        }), "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", (t => {
                            t.stopPropagation(), t.preventDefault(), ze.toggleMenu.call(e, t);
                        }), null, !1), this.bind(t.buttons.settings, "keyup", (t => {
                            [ "Space", "Enter" ].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), 
                            t.stopPropagation(), ze.toggleMenu.call(e, t)) : ze.focusFirstMenuItem.call(e, null, !0));
                        }), null, !1), this.bind(t.settings.menu, "keydown", (t => {
                            "Escape" === t.key && ze.toggleMenu.call(e, t);
                        })), this.bind(t.inputs.seek, "mousedown mousemove", (e => {
                            const i = t.progress.getBoundingClientRect(), s = 100 / i.width * (e.pageX - i.left);
                            e.currentTarget.setAttribute("seek-value", s);
                        })), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t => {
                            const i = t.currentTarget, s = "play-on-seeked";
                            if (V(t) && ![ "ArrowLeft", "ArrowRight" ].includes(t.key)) return;
                            e.lastSeekTime = Date.now();
                            const n = i.hasAttribute(s), a = [ "mouseup", "touchend", "keyup" ].includes(t.type);
                            n && a ? (i.removeAttribute(s), Ce(e.play())) : !a && e.playing && (i.setAttribute(s, ""), 
                            e.pause());
                        })), Q.isIos) {
                            const t = he.call(e, 'input[type="range"]');
                            Array.from(t).forEach((e => this.bind(e, i, (e => Y(e.target)))));
                        }
                        this.bind(t.inputs.seek, i, (t => {
                            const i = t.currentTarget;
                            let s = i.getAttribute("seek-value");
                            z(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
                        }), "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", (t => ze.updateSeekTooltip.call(e, t))), 
                        this.bind(t.progress, "mousemove touchmove", (t => {
                            const {previewThumbnails: i} = e;
                            i && i.loaded && i.startMove(t);
                        })), this.bind(t.progress, "mouseleave touchend click", (() => {
                            const {previewThumbnails: t} = e;
                            t && t.loaded && t.endMove(!1, !0);
                        })), this.bind(t.progress, "mousedown touchstart", (t => {
                            const {previewThumbnails: i} = e;
                            i && i.loaded && i.startScrubbing(t);
                        })), this.bind(t.progress, "mouseup touchend", (t => {
                            const {previewThumbnails: i} = e;
                            i && i.loaded && i.endScrubbing(t);
                        })), Q.isWebkit && Array.from(he.call(e, 'input[type="range"]')).forEach((t => {
                            this.bind(t, "input", (t => ze.updateRangeFill.call(e, t.target)));
                        })), e.config.toggleInvert && !H(t.display.duration) && this.bind(t.display.currentTime, "click", (() => {
                            0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, ze.timeUpdate.call(e));
                        })), this.bind(t.inputs.volume, i, (t => {
                            e.volume = t.target.value;
                        }), "volume"), this.bind(t.controls, "mouseenter mouseleave", (i => {
                            t.controls.hover = !e.touch && "mouseenter" === i.type;
                        })), t.fullscreen && Array.from(t.fullscreen.children).filter((e => !e.contains(t.container))).forEach((i => {
                            this.bind(i, "mouseenter mouseleave", (i => {
                                t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type);
                            }));
                        })), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (e => {
                            t.controls.pressed = [ "mousedown", "touchstart" ].includes(e.type);
                        })), this.bind(t.controls, "focusin", (() => {
                            const {config: i, timers: s} = e;
                            oe(t.controls, i.classNames.noTransition, !0), rt.toggleControls.call(e, !0), setTimeout((() => {
                                oe(t.controls, i.classNames.noTransition, !1);
                            }), 0);
                            const n = this.touch ? 3e3 : 4e3;
                            clearTimeout(s.controls), s.controls = setTimeout((() => rt.toggleControls.call(e, !1)), n);
                        })), this.bind(t.inputs.volume, "wheel", (t => {
                            const i = t.webkitDirectionInvertedFromDevice, [s, n] = [ t.deltaX, -t.deltaY ].map((e => i ? -e : e)), a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                            e.increaseVolume(a / 50);
                            const {volume: r} = e.media;
                            (1 === a && r < 1 || -1 === a && r > 0) && t.preventDefault();
                        }), "volume", !1);
                    })), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, 
                    this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), 
                    this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
                }
                handleKey(e) {
                    const {player: t} = this, {elements: i} = t, {key: s, type: n, altKey: a, ctrlKey: r, metaKey: o, shiftKey: l} = e, c = "keydown" === n, h = c && s === this.lastKey;
                    if (a || r || o || l) return;
                    if (!s) return;
                    if (c) {
                        const n = document.activeElement;
                        if (H(n)) {
                            const {editable: s} = t.config.selectors, {seek: a} = i.inputs;
                            if (n !== a && ce(n, s)) return;
                            if ("Space" === e.key && ce(n, 'button, [role^="menuitem"]')) return;
                        }
                        switch ([ "Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m" ].includes(s) && (e.preventDefault(), 
                        e.stopPropagation()), s) {
                          case "0":
                          case "1":
                          case "2":
                          case "3":
                          case "4":
                          case "5":
                          case "6":
                          case "7":
                          case "8":
                          case "9":
                            h || (u = parseInt(s, 10), t.currentTime = t.duration / 10 * u);
                            break;

                          case "Space":
                          case "k":
                            h || Ce(t.togglePlay());
                            break;

                          case "ArrowUp":
                            t.increaseVolume(.1);
                            break;

                          case "ArrowDown":
                            t.decreaseVolume(.1);
                            break;

                          case "m":
                            h || (t.muted = !t.muted);
                            break;

                          case "ArrowRight":
                            t.forward();
                            break;

                          case "ArrowLeft":
                            t.rewind();
                            break;

                          case "f":
                            t.fullscreen.toggle();
                            break;

                          case "c":
                            h || t.toggleCaptions();
                            break;

                          case "l":
                            t.loop = !t.loop;
                        }
                        "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), 
                        this.lastKey = s;
                    } else this.lastKey = null;
                    var u;
                }
                toggleMenu(e) {
                    ze.toggleMenu.call(this.player, e);
                }
            }
            var lt = function(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports;
            }((function(e, t) {
                e.exports = function() {
                    var e = function() {}, t = {}, i = {}, s = {};
                    function n(e, t) {
                        e = e.push ? e : [ e ];
                        var n, a, r, o = [], l = e.length, c = l;
                        for (n = function(e, i) {
                            i.length && o.push(e), --c || t(o);
                        }; l--; ) a = e[l], (r = i[a]) ? n(a, r) : (s[a] = s[a] || []).push(n);
                    }
                    function a(e, t) {
                        if (e) {
                            var n = s[e];
                            if (i[e] = t, n) for (;n.length; ) n[0](e, t), n.splice(0, 1);
                        }
                    }
                    function r(t, i) {
                        t.call && (t = {
                            success: t
                        }), i.length ? (t.error || e)(i) : (t.success || e)(t);
                    }
                    function o(t, i, s, n) {
                        var a, r, l = document, c = s.async, h = (s.numRetries || 0) + 1, u = s.before || e, d = t.replace(/[\?|#].*$/, ""), p = t.replace(/^(css|img)!/, "");
                        n = n || 0, /(^css!|\.css$)/.test(d) ? ((r = l.createElement("link")).rel = "stylesheet", 
                        r.href = p, (a = "hideFocus" in r) && r.relList && (a = 0, r.rel = "preload", r.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (r = l.createElement("img")).src = p : ((r = l.createElement("script")).src = t, 
                        r.async = void 0 === c || c), r.onload = r.onerror = r.onbeforeload = function(e) {
                            var l = e.type[0];
                            if (a) try {
                                r.sheet.cssText.length || (l = "e");
                            } catch (e) {
                                18 != e.code && (l = "e");
                            }
                            if ("e" == l) {
                                if ((n += 1) < h) return o(t, i, s, n);
                            } else if ("preload" == r.rel && "style" == r.as) return r.rel = "stylesheet";
                            i(t, l, e.defaultPrevented);
                        }, !1 !== u(t, r) && l.head.appendChild(r);
                    }
                    function l(e, t, i) {
                        var s, n, a = (e = e.push ? e : [ e ]).length, r = a, l = [];
                        for (s = function(e, i, s) {
                            if ("e" == i && l.push(e), "b" == i) {
                                if (!s) return;
                                l.push(e);
                            }
                            --a || t(l);
                        }, n = 0; n < r; n++) o(e[n], s, i);
                    }
                    function c(e, i, s) {
                        var n, o;
                        if (i && i.trim && (n = i), o = (n ? s : i) || {}, n) {
                            if (n in t) throw "LoadJS";
                            t[n] = !0;
                        }
                        function c(t, i) {
                            l(e, (function(e) {
                                r(o, e), t && r({
                                    success: t,
                                    error: i
                                }, e), a(n, e);
                            }), o);
                        }
                        if (o.returnPromise) return new Promise(c);
                        c();
                    }
                    return c.ready = function(e, t) {
                        return n(e, (function(e) {
                            r(t, e);
                        })), c;
                    }, c.done = function(e) {
                        a(e, []);
                    }, c.reset = function() {
                        t = {}, i = {}, s = {};
                    }, c.isDefined = function(e) {
                        return e in t;
                    }, c;
                }();
            }));
            function ct(e) {
                return new Promise(((t, i) => {
                    lt(e, {
                        success: t,
                        error: i
                    });
                }));
            }
            function ht(e) {
                e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, 
                we.call(this, this.media, e ? "play" : "pause"));
            }
            const ut = {
                setup() {
                    const e = this;
                    oe(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, 
                    Le.call(e), I(window.Vimeo) ? ut.ready.call(e) : ct(e.config.urls.vimeo.sdk).then((() => {
                        ut.ready.call(e);
                    })).catch((t => {
                        e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                    }));
                },
                ready() {
                    const e = this, t = e.config.vimeo, {premium: i, referrerPolicy: s, ...n} = t;
                    let a = e.media.getAttribute("src"), r = "";
                    z(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), r = e.media.getAttribute(e.config.attributes.embed.hash)) : r = function(e) {
                        const t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                        return t && 5 === t.length ? t[4] : null;
                    }(a);
                    const o = r ? {
                        h: r
                    } : {};
                    i && Object.assign(n, {
                        controls: !1,
                        sidedock: !1
                    });
                    const l = Ye({
                        loop: e.config.loop.active,
                        autoplay: e.autoplay,
                        muted: e.muted,
                        gesture: "media",
                        playsinline: !this.config.fullscreen.iosNative,
                        ...o,
                        ...n
                    }), c = z(h = a) ? null : $(Number(h)) ? h : h.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h;
                    var h;
                    const u = ee("iframe"), d = $e(e.config.urls.vimeo.iframe, c, l);
                    if (u.setAttribute("src", d), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", [ "autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope" ].join("; ")), 
                    z(s) || u.setAttribute("referrerPolicy", s), i || !t.customControls) u.setAttribute("data-poster", e.poster), 
                    e.media = ne(u, e.media); else {
                        const t = ee("div", {
                            class: e.config.classNames.embedContainer,
                            "data-poster": e.poster
                        });
                        t.appendChild(u), e.media = ne(t, e.media);
                    }
                    t.customControls || Ve($e(e.config.urls.vimeo.api, d)).then((t => {
                        !z(t) && t.thumbnail_url && rt.setPoster.call(e, t.thumbnail_url).catch((() => {}));
                    })), e.embed = new window.Vimeo.Player(u, {
                        autopause: e.config.autopause,
                        muted: e.muted
                    }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), 
                    e.media.play = () => (ht.call(e, !0), e.embed.play()), e.media.pause = () => (ht.call(e, !1), 
                    e.embed.pause()), e.media.stop = () => {
                        e.pause(), e.currentTime = 0;
                    };
                    let {currentTime: p} = e.media;
                    Object.defineProperty(e.media, "currentTime", {
                        get: () => p,
                        set(t) {
                            const {embed: i, media: s, paused: n, volume: a} = e, r = n && !i.hasPlayed;
                            s.seeking = !0, we.call(e, s, "seeking"), Promise.resolve(r && i.setVolume(0)).then((() => i.setCurrentTime(t))).then((() => r && i.pause())).then((() => r && i.setVolume(a))).catch((() => {}));
                        }
                    });
                    let m = e.config.speed.selected;
                    Object.defineProperty(e.media, "playbackRate", {
                        get: () => m,
                        set(t) {
                            e.embed.setPlaybackRate(t).then((() => {
                                m = t, we.call(e, e.media, "ratechange");
                            })).catch((() => {
                                e.options.speed = [ 1 ];
                            }));
                        }
                    });
                    let {volume: g} = e.config;
                    Object.defineProperty(e.media, "volume", {
                        get: () => g,
                        set(t) {
                            e.embed.setVolume(t).then((() => {
                                g = t, we.call(e, e.media, "volumechange");
                            }));
                        }
                    });
                    let {muted: f} = e.config;
                    Object.defineProperty(e.media, "muted", {
                        get: () => f,
                        set(t) {
                            const i = !!j(t) && t;
                            e.embed.setVolume(i ? 0 : e.config.volume).then((() => {
                                f = i, we.call(e, e.media, "volumechange");
                            }));
                        }
                    });
                    let b, {loop: y} = e.config;
                    Object.defineProperty(e.media, "loop", {
                        get: () => y,
                        set(t) {
                            const i = j(t) ? t : e.config.loop.active;
                            e.embed.setLoop(i).then((() => {
                                y = i;
                            }));
                        }
                    }), e.embed.getVideoUrl().then((t => {
                        b = t, ze.setDownloadUrl.call(e);
                    })).catch((e => {
                        this.debug.warn(e);
                    })), Object.defineProperty(e.media, "currentSrc", {
                        get: () => b
                    }), Object.defineProperty(e.media, "ended", {
                        get: () => e.currentTime === e.duration
                    }), Promise.all([ e.embed.getVideoWidth(), e.embed.getVideoHeight() ]).then((t => {
                        const [i, s] = t;
                        e.embed.ratio = _e(i, s), Le.call(this);
                    })), e.embed.setAutopause(e.config.autopause).then((t => {
                        e.config.autopause = t;
                    })), e.embed.getVideoTitle().then((t => {
                        e.config.title = t, rt.setTitle.call(this);
                    })), e.embed.getCurrentTime().then((t => {
                        p = t, we.call(e, e.media, "timeupdate");
                    })), e.embed.getDuration().then((t => {
                        e.media.duration = t, we.call(e, e.media, "durationchange");
                    })), e.embed.getTextTracks().then((t => {
                        e.media.textTracks = t, Qe.setup.call(e);
                    })), e.embed.on("cuechange", (({cues: t = []}) => {
                        const i = t.map((e => function(e) {
                            const t = document.createDocumentFragment(), i = document.createElement("div");
                            return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
                        }(e.text)));
                        Qe.updateCues.call(e, i);
                    })), e.embed.on("loaded", (() => {
                        if (e.embed.getPaused().then((t => {
                            ht.call(e, !t), t || we.call(e, e.media, "playing");
                        })), H(e.embed.element) && e.supported.ui) e.embed.element.setAttribute("tabindex", -1);
                    })), e.embed.on("bufferstart", (() => {
                        we.call(e, e.media, "waiting");
                    })), e.embed.on("bufferend", (() => {
                        we.call(e, e.media, "playing");
                    })), e.embed.on("play", (() => {
                        ht.call(e, !0), we.call(e, e.media, "playing");
                    })), e.embed.on("pause", (() => {
                        ht.call(e, !1);
                    })), e.embed.on("timeupdate", (t => {
                        e.media.seeking = !1, p = t.seconds, we.call(e, e.media, "timeupdate");
                    })), e.embed.on("progress", (t => {
                        e.media.buffered = t.percent, we.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && we.call(e, e.media, "canplaythrough"), 
                        e.embed.getDuration().then((t => {
                            t !== e.media.duration && (e.media.duration = t, we.call(e, e.media, "durationchange"));
                        }));
                    })), e.embed.on("seeked", (() => {
                        e.media.seeking = !1, we.call(e, e.media, "seeked");
                    })), e.embed.on("ended", (() => {
                        e.media.paused = !0, we.call(e, e.media, "ended");
                    })), e.embed.on("error", (t => {
                        e.media.error = t, we.call(e, e.media, "error");
                    })), t.customControls && setTimeout((() => rt.build.call(e)), 0);
                }
            };
            function dt(e) {
                e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, 
                we.call(this, this.media, e ? "play" : "pause"));
            }
            function pt(e) {
                return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
            }
            const mt = {
                setup() {
                    if (oe(this.elements.wrapper, this.config.classNames.embed, !0), I(window.YT) && R(window.YT.Player)) mt.ready.call(this); else {
                        const e = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = () => {
                            R(e) && e(), mt.ready.call(this);
                        }, ct(this.config.urls.youtube.sdk).catch((e => {
                            this.debug.warn("YouTube API failed to load", e);
                        }));
                    }
                },
                getTitle(e) {
                    Ve($e(this.config.urls.youtube.api, e)).then((e => {
                        if (I(e)) {
                            const {title: t, height: i, width: s} = e;
                            this.config.title = t, rt.setTitle.call(this), this.embed.ratio = _e(s, i);
                        }
                        Le.call(this);
                    })).catch((() => {
                        Le.call(this);
                    }));
                },
                ready() {
                    const e = this, t = e.config.youtube, i = e.media && e.media.getAttribute("id");
                    if (!z(i) && i.startsWith("youtube-")) return;
                    let s = e.media.getAttribute("src");
                    z(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
                    const n = z(a = s) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a;
                    var a;
                    const r = ee("div", {
                        id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                        "data-poster": t.customControls ? e.poster : void 0
                    });
                    if (e.media = ne(r, e.media), t.customControls) {
                        const t = e => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                        at(t("maxres"), 121).catch((() => at(t("sd"), 121))).catch((() => at(t("hq")))).then((t => rt.setPoster.call(e, t.src))).then((t => {
                            t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
                        })).catch((() => {}));
                    }
                    e.embed = new window.YT.Player(e.media, {
                        videoId: n,
                        host: pt(t),
                        playerVars: J({}, {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui && t.customControls ? 0 : 1,
                            disablekb: 1,
                            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language,
                            widget_referrer: window ? window.location.href : null
                        }, t),
                        events: {
                            onError(t) {
                                if (!e.media.error) {
                                    const i = t.data, s = {
                                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                                        150: "The owner of the requested video does not allow it to be played in embedded players."
                                    }[i] || "An unknown error occured";
                                    e.media.error = {
                                        code: i,
                                        message: s
                                    }, we.call(e, e.media, "error");
                                }
                            },
                            onPlaybackRateChange(t) {
                                const i = t.target;
                                e.media.playbackRate = i.getPlaybackRate(), we.call(e, e.media, "ratechange");
                            },
                            onReady(i) {
                                if (R(e.media.play)) return;
                                const s = i.target;
                                mt.getTitle.call(e, n), e.media.play = () => {
                                    dt.call(e, !0), s.playVideo();
                                }, e.media.pause = () => {
                                    dt.call(e, !1), s.pauseVideo();
                                }, e.media.stop = () => {
                                    s.stopVideo();
                                }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, 
                                Object.defineProperty(e.media, "currentTime", {
                                    get: () => Number(s.getCurrentTime()),
                                    set(t) {
                                        e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, we.call(e, e.media, "seeking"), 
                                        s.seekTo(t);
                                    }
                                }), Object.defineProperty(e.media, "playbackRate", {
                                    get: () => s.getPlaybackRate(),
                                    set(e) {
                                        s.setPlaybackRate(e);
                                    }
                                });
                                let {volume: a} = e.config;
                                Object.defineProperty(e.media, "volume", {
                                    get: () => a,
                                    set(t) {
                                        a = t, s.setVolume(100 * a), we.call(e, e.media, "volumechange");
                                    }
                                });
                                let {muted: r} = e.config;
                                Object.defineProperty(e.media, "muted", {
                                    get: () => r,
                                    set(t) {
                                        const i = j(t) ? t : r;
                                        r = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), we.call(e, e.media, "volumechange");
                                    }
                                }), Object.defineProperty(e.media, "currentSrc", {
                                    get: () => s.getVideoUrl()
                                }), Object.defineProperty(e.media, "ended", {
                                    get: () => e.currentTime === e.duration
                                });
                                const o = s.getAvailablePlaybackRates();
                                e.options.speed = o.filter((t => e.config.speed.options.includes(t))), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), 
                                we.call(e, e.media, "timeupdate"), we.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), 
                                e.timers.buffering = setInterval((() => {
                                    e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && we.call(e, e.media, "progress"), 
                                    e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), 
                                    we.call(e, e.media, "canplaythrough"));
                                }), 200), t.customControls && setTimeout((() => rt.build.call(e)), 50);
                            },
                            onStateChange(i) {
                                const s = i.target;
                                clearInterval(e.timers.playing);
                                switch (e.media.seeking && [ 1, 2 ].includes(i.data) && (e.media.seeking = !1, we.call(e, e.media, "seeked")), 
                                i.data) {
                                  case -1:
                                    we.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), 
                                    we.call(e, e.media, "progress");
                                    break;

                                  case 0:
                                    dt.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : we.call(e, e.media, "ended");
                                    break;

                                  case 1:
                                    t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (dt.call(e, !0), 
                                    we.call(e, e.media, "playing"), e.timers.playing = setInterval((() => {
                                        we.call(e, e.media, "timeupdate");
                                    }), 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), 
                                    we.call(e, e.media, "durationchange")));
                                    break;

                                  case 2:
                                    e.muted || e.embed.unMute(), dt.call(e, !1);
                                    break;

                                  case 3:
                                    we.call(e, e.media, "waiting");
                                }
                                we.call(e, e.elements.container, "statechange", !1, {
                                    code: i.data
                                });
                            }
                        }
                    });
                }
            }, gt = {
                setup() {
                    this.media ? (oe(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), 
                    oe(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), 
                    this.isEmbed && oe(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), 
                    this.isVideo && (this.elements.wrapper = ee("div", {
                        class: this.config.classNames.video
                    }), G(this.media, this.elements.wrapper), this.elements.poster = ee("div", {
                        class: this.config.classNames.poster
                    }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Ie.setup.call(this) : this.isYouTube ? mt.setup.call(this) : this.isVimeo && ut.setup.call(this)) : this.debug.warn("No media element found!");
                }
            };
            class ft {
                constructor(e) {
                    t(this, "load", (() => {
                        this.enabled && (I(window.google) && I(window.google.ima) ? this.ready() : ct(this.player.config.urls.googleIMA.sdk).then((() => {
                            this.ready();
                        })).catch((() => {
                            this.trigger("error", new Error("Google IMA SDK failed to load"));
                        })));
                    })), t(this, "ready", (() => {
                        var e;
                        this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), 
                        e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((() => {
                            this.clearSafetyTimer("onAdsManagerLoaded()");
                        })), this.listeners(), this.setupIMA();
                    })), t(this, "setupIMA", (() => {
                        this.elements.container = ee("div", {
                            class: this.player.config.classNames.ads
                        }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), 
                        google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), 
                        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), 
                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e => this.onAdsManagerLoaded(e)), !1), 
                        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e)), !1), 
                        this.requestAds();
                    })), t(this, "requestAds", (() => {
                        const {container: e} = this.player.elements;
                        try {
                            const t = new google.ima.AdsRequest;
                            t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, 
                            t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, 
                            t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
                        } catch (e) {
                            this.onAdError(e);
                        }
                    })), t(this, "pollCountdown", ((e = !1) => {
                        if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                        this.countdownTimer = setInterval((() => {
                            const e = We(Math.max(this.manager.getRemainingTime(), 0)), t = `${He.get("advertisement", this.player.config)} - ${e}`;
                            this.elements.container.setAttribute("data-badge-text", t);
                        }), 100);
                    })), t(this, "onAdsManagerLoaded", (e => {
                        if (!this.enabled) return;
                        const t = new google.ima.AdsRenderingSettings;
                        t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), 
                        this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e))), 
                        Object.keys(google.ima.AdEvent.Type).forEach((e => {
                            this.manager.addEventListener(google.ima.AdEvent.Type[e], (e => this.onAdEvent(e)));
                        })), this.trigger("loaded");
                    })), t(this, "addCuePoints", (() => {
                        z(this.cuePoints) || this.cuePoints.forEach((e => {
                            if (0 !== e && -1 !== e && e < this.player.duration) {
                                const t = this.player.elements.progress;
                                if (H(t)) {
                                    const i = 100 / this.player.duration * e, s = ee("span", {
                                        class: this.player.config.classNames.cues
                                    });
                                    s.style.left = `${i.toString()}%`, t.appendChild(s);
                                }
                            }
                        }));
                    })), t(this, "onAdEvent", (e => {
                        const {container: t} = this.player.elements, i = e.getAd(), s = e.getAdData();
                        switch ((e => {
                            we.call(this.player, this.player.media, `ads${e.replace(/_/g, "").toLowerCase()}`);
                        })(e.type), e.type) {
                          case google.ima.AdEvent.Type.LOADED:
                            this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, 
                            i.height = t.offsetHeight);
                            break;

                          case google.ima.AdEvent.Type.STARTED:
                            this.manager.setVolume(this.player.volume);
                            break;

                          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            this.player.ended ? this.loadAds() : this.loader.contentComplete();
                            break;

                          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            this.pauseContent();
                            break;

                          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            this.pollCountdown(), this.resumeContent();
                            break;

                          case google.ima.AdEvent.Type.LOG:
                            s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`);
                        }
                    })), t(this, "onAdError", (e => {
                        this.cancel(), this.player.debug.warn("Ads error", e);
                    })), t(this, "listeners", (() => {
                        const {container: e} = this.player.elements;
                        let t;
                        this.player.on("canplay", (() => {
                            this.addCuePoints();
                        })), this.player.on("ended", (() => {
                            this.loader.contentComplete();
                        })), this.player.on("timeupdate", (() => {
                            t = this.player.currentTime;
                        })), this.player.on("seeked", (() => {
                            const e = this.player.currentTime;
                            z(this.cuePoints) || this.cuePoints.forEach(((i, s) => {
                                t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1));
                            }));
                        })), window.addEventListener("resize", (() => {
                            this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
                        }));
                    })), t(this, "play", (() => {
                        const {container: e} = this.player.elements;
                        this.managerPromise || this.resumeContent(), this.managerPromise.then((() => {
                            this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                            try {
                                this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), 
                                this.manager.start()), this.initialized = !0;
                            } catch (e) {
                                this.onAdError(e);
                            }
                        })).catch((() => {}));
                    })), t(this, "resumeContent", (() => {
                        this.elements.container.style.zIndex = "", this.playing = !1, Ce(this.player.media.play());
                    })), t(this, "pauseContent", (() => {
                        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
                    })), t(this, "cancel", (() => {
                        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
                    })), t(this, "loadAds", (() => {
                        this.managerPromise.then((() => {
                            this.manager && this.manager.destroy(), this.managerPromise = new Promise((e => {
                                this.on("loaded", e), this.player.debug.log(this.manager);
                            })), this.initialized = !1, this.requestAds();
                        })).catch((() => {}));
                    })), t(this, "trigger", ((e, ...t) => {
                        const i = this.events[e];
                        D(i) && i.forEach((e => {
                            R(e) && e.apply(this, t);
                        }));
                    })), t(this, "on", ((e, t) => (D(this.events[e]) || (this.events[e] = []), this.events[e].push(t), 
                    this))), t(this, "startSafetyTimer", ((e, t) => {
                        this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout((() => {
                            this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
                        }), e);
                    })), t(this, "clearSafetyTimer", (e => {
                        _(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), 
                        clearTimeout(this.safetyTimer), this.safetyTimer = null);
                    })), this.player = e, this.config = e.config.ads, this.playing = !1, this.initialized = !1, 
                    this.elements = {
                        container: null,
                        displayContainer: null
                    }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, 
                    this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(((e, t) => {
                        this.on("loaded", e), this.on("error", t);
                    })), this.load();
                }
                get enabled() {
                    const {config: e} = this;
                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!z(e.publisherId) || W(e.tagUrl));
                }
                get tagUrl() {
                    const {config: e} = this;
                    if (W(e.tagUrl)) return e.tagUrl;
                    return `https://go.aniview.com/api/adserver6/vast/?${Ye({
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId
                    })}`;
                }
            }
            function bt(e = 0, t = 0, i = 255) {
                return Math.min(Math.max(e, t), i);
            }
            const yt = e => {
                const t = [];
                return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e => {
                    const i = {};
                    e.split(/\r\n|\n|\r/).forEach((e => {
                        if ($(i.startTime)) {
                            if (!z(e.trim()) && z(i.text)) {
                                const t = e.trim().split("#xywh=");
                                [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                            }
                        } else {
                            const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                            t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), 
                            i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`));
                        }
                    })), i.text && t.push(i);
                })), t;
            }, vt = (e, t) => {
                const i = {};
                return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, 
                i.width = e * t.height), i;
            };
            class wt {
                constructor(e) {
                    t(this, "load", (() => {
                        this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), 
                        this.enabled && this.getThumbnails().then((() => {
                            this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0);
                        }));
                    })), t(this, "getThumbnails", (() => new Promise((e => {
                        const {src: t} = this.player.config.previewThumbnails;
                        if (z(t)) throw new Error("Missing previewThumbnails.src config attribute");
                        const i = () => {
                            this.thumbnails.sort(((e, t) => e.height - t.height)), this.player.debug.log("Preview thumbnails", this.thumbnails), 
                            e();
                        };
                        if (R(t)) t((e => {
                            this.thumbnails = e, i();
                        })); else {
                            const e = (O(t) ? [ t ] : t).map((e => this.getThumbnail(e)));
                            Promise.all(e).then(i);
                        }
                    })))), t(this, "getThumbnail", (e => new Promise((t => {
                        Ve(e).then((i => {
                            const s = {
                                frames: yt(i),
                                height: null,
                                urlPrefix: ""
                            };
                            s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                            const n = new Image;
                            n.onload = () => {
                                s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t();
                            }, n.src = s.urlPrefix + s.frames[0].text;
                        }));
                    })))), t(this, "startMove", (e => {
                        if (this.loaded && F(e) && [ "touchmove", "mousemove" ].includes(e.type) && this.player.media.duration) {
                            if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100); else {
                                var t, i;
                                const s = this.player.elements.progress.getBoundingClientRect(), n = 100 / s.width * (e.pageX - s.left);
                                this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), 
                                this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), 
                                this.mousePosX = e.pageX, this.elements.thumb.time.innerText = We(this.seekTime);
                                const a = null === (t = this.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find((({time: e}) => e === Math.round(this.seekTime)));
                                a && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a.label}<br>`);
                            }
                            this.showImageAtCurrentTime();
                        }
                    })), t(this, "endMove", (() => {
                        this.toggleThumbContainer(!1, !0);
                    })), t(this, "startScrubbing", (e => {
                        (_(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), 
                        this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
                    })), t(this, "endScrubbing", (() => {
                        this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ve.call(this.player, this.player.media, "timeupdate", (() => {
                            this.mouseDown || this.toggleScrubbingContainer(!1);
                        }));
                    })), t(this, "listeners", (() => {
                        this.player.on("play", (() => {
                            this.toggleThumbContainer(!1, !0);
                        })), this.player.on("seeked", (() => {
                            this.toggleThumbContainer(!1);
                        })), this.player.on("timeupdate", (() => {
                            this.lastTime = this.player.media.currentTime;
                        }));
                    })), t(this, "render", (() => {
                        this.elements.thumb.container = ee("div", {
                            class: this.player.config.classNames.previewThumbnails.thumbContainer
                        }), this.elements.thumb.imageContainer = ee("div", {
                            class: this.player.config.classNames.previewThumbnails.imageContainer
                        }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                        const e = ee("div", {
                            class: this.player.config.classNames.previewThumbnails.timeContainer
                        });
                        this.elements.thumb.time = ee("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), 
                        this.elements.thumb.imageContainer.appendChild(e), H(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), 
                        this.elements.scrubbing.container = ee("div", {
                            class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                        }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
                    })), t(this, "destroy", (() => {
                        this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
                    })), t(this, "showImageAtCurrentTime", (() => {
                        this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                        const e = this.thumbnails[0].frames.findIndex((e => this.seekTime >= e.startTime && this.seekTime <= e.endTime)), t = e >= 0;
                        let i = 0;
                        this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach(((t, s) => {
                            this.loadedImages.includes(t.frames[e].text) && (i = s);
                        })), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)));
                    })), t(this, "loadImage", ((e = 0) => {
                        const t = this.showingThumb, i = this.thumbnails[e], {urlPrefix: s} = i, n = i.frames[t], a = i.frames[t].text, r = s + a;
                        if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, n, e, t, a, !1), 
                        this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement); else {
                            this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                            const i = new Image;
                            i.src = r, i.dataset.index = t, i.dataset.filename = a, this.showingThumbFilename = a, 
                            this.player.debug.log(`Loading image: ${r}`), i.onload = () => this.showImage(i, n, e, t, a, !0), 
                            this.loadingImage = i, this.removeOldImages(i);
                        }
                    })), t(this, "showImage", ((e, t, i, s, n, a = !0) => {
                        this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`), 
                        this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), 
                        this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), 
                        this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n));
                    })), t(this, "removeOldImages", (e => {
                        Array.from(this.currentImageContainer.children).forEach((t => {
                            if ("img" !== t.tagName.toLowerCase()) return;
                            const i = this.usingSprites ? 500 : 1e3;
                            if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                t.dataset.deleting = !0;
                                const {currentImageContainer: e} = this;
                                setTimeout((() => {
                                    e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`);
                                }), i);
                            }
                        }));
                    })), t(this, "preloadNearby", ((e, t = !0) => new Promise((i => {
                        setTimeout((() => {
                            const s = this.thumbnails[0].frames[e].text;
                            if (this.showingThumbFilename === s) {
                                let n;
                                n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                                let a = !1;
                                n.forEach((e => {
                                    const t = e.text;
                                    if (t !== s && !this.loadedImages.includes(t)) {
                                        a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                        const {urlPrefix: e} = this.thumbnails[0], s = e + t, n = new Image;
                                        n.src = s, n.onload = () => {
                                            this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), 
                                            i();
                                        };
                                    }
                                })), a || i();
                            }
                        }), 300);
                    })))), t(this, "getHigherQuality", ((e, t, i, s) => {
                        if (e < this.thumbnails.length - 1) {
                            let n = t.naturalHeight;
                            this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout((() => {
                                this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), 
                                this.loadImage(e + 1));
                            }), 300);
                        }
                    })), t(this, "toggleThumbContainer", ((e = !1, t = !1) => {
                        const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                        this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, 
                        this.showingThumbFilename = null);
                    })), t(this, "toggleScrubbingContainer", ((e = !1) => {
                        const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                        this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, 
                        this.showingThumbFilename = null);
                    })), t(this, "determineContainerAutoSizing", (() => {
                        (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
                    })), t(this, "setThumbContainerSizeAndPos", (() => {
                        const {imageContainer: e} = this.elements.thumb;
                        if (this.sizeSpecifiedInCSS) {
                            if (e.clientHeight > 20 && e.clientWidth < 20) {
                                const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                                e.style.width = `${t}px`;
                            } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                                const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                                e.style.height = `${t}px`;
                            }
                        } else {
                            const t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                            e.style.height = `${this.thumbContainerHeight}px`, e.style.width = `${t}px`;
                        }
                        this.setThumbContainerPos();
                    })), t(this, "setThumbContainerPos", (() => {
                        const e = this.player.elements.progress.getBoundingClientRect(), t = this.player.elements.container.getBoundingClientRect(), {container: i} = this.elements.thumb, s = t.left - e.left + 10, n = t.right - e.left - i.clientWidth - 10, a = this.mousePosX - e.left - i.clientWidth / 2, r = bt(a, s, n);
                        i.style.left = `${r}px`, i.style.setProperty("--preview-arrow-offset", a - r + "px");
                    })), t(this, "setScrubbingContainerSize", (() => {
                        const {width: e, height: t} = vt(this.thumbAspectRatio, {
                            width: this.player.media.clientWidth,
                            height: this.player.media.clientHeight
                        });
                        this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`;
                    })), t(this, "setImageSizeAndOffset", ((e, t) => {
                        if (!this.usingSprites) return;
                        const i = this.thumbContainerHeight / t.h;
                        e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", 
                        e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`;
                    })), this.player = e, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), 
                    this.mouseDown = !1, this.loadedImages = [], this.elements = {
                        thumb: {},
                        scrubbing: {}
                    }, this.load();
                }
                get enabled() {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
                }
                get currentImageContainer() {
                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
                }
                get usingSprites() {
                    return Object.keys(this.thumbnails[0].frames[0]).includes("w");
                }
                get thumbAspectRatio() {
                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
                }
                get thumbContainerHeight() {
                    if (this.mouseDown) {
                        const {height: e} = vt(this.thumbAspectRatio, {
                            width: this.player.media.clientWidth,
                            height: this.player.media.clientHeight
                        });
                        return e;
                    }
                    return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
                }
                get currentImageElement() {
                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
                }
                set currentImageElement(e) {
                    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
                }
            }
            const Tt = {
                insertElements(e, t) {
                    O(t) ? te(e, this.media, {
                        src: t
                    }) : D(t) && t.forEach((t => {
                        te(e, this.media, t);
                    }));
                },
                change(e) {
                    X(e, "sources.length") ? (Ie.cancelRequests.call(this), this.destroy.call(this, (() => {
                        this.options.quality = [], ie(this.media), this.media = null, H(this.elements.container) && this.elements.container.removeAttribute("class");
                        const {sources: t, type: i} = e, [{provider: s = Ze.html5, src: n}] = t, a = "html5" === s ? i : "div", r = "html5" === s ? {} : {
                            src: n
                        };
                        Object.assign(this, {
                            provider: s,
                            type: i,
                            supported: me.check(i, s, this.config.playsinline),
                            media: ee(a, r)
                        }), this.elements.container.appendChild(this.media), j(e.autoplay) && (this.config.autoplay = e.autoplay), 
                        this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), 
                        this.config.autoplay && this.media.setAttribute("autoplay", ""), z(e.poster) || (this.poster = e.poster), 
                        this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), 
                        this.config.playsinline && this.media.setAttribute("playsinline", "")), rt.addStyleHook.call(this), 
                        this.isHTML5 && Tt.insertElements.call(this, "source", t), this.config.title = e.title, 
                        gt.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && Tt.insertElements.call(this, "track", e.tracks), 
                        (this.isHTML5 || this.isEmbed && !this.supported.ui) && rt.build.call(this), this.isHTML5 && this.media.load(), 
                        z(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), 
                        this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), 
                        this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new wt(this))), 
                        this.fullscreen.update();
                    }), !0)) : this.debug.warn("Invalid source format");
                }
            };
            class kt {
                constructor(e, i) {
                    if (t(this, "play", (() => R(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((() => this.ads.play())).catch((() => Ce(this.media.play()))), 
                    this.media.play()) : null)), t(this, "pause", (() => this.playing && R(this.media.pause) ? this.media.pause() : null)), 
                    t(this, "togglePlay", (e => (j(e) ? e : !this.playing) ? this.play() : this.pause())), 
                    t(this, "stop", (() => {
                        this.isHTML5 ? (this.pause(), this.restart()) : R(this.media.stop) && this.media.stop();
                    })), t(this, "restart", (() => {
                        this.currentTime = 0;
                    })), t(this, "rewind", (e => {
                        this.currentTime -= $(e) ? e : this.config.seekTime;
                    })), t(this, "forward", (e => {
                        this.currentTime += $(e) ? e : this.config.seekTime;
                    })), t(this, "increaseVolume", (e => {
                        const t = this.media.muted ? 0 : this.volume;
                        this.volume = t + ($(e) ? e : 0);
                    })), t(this, "decreaseVolume", (e => {
                        this.increaseVolume(-e);
                    })), t(this, "airplay", (() => {
                        me.airplay && this.media.webkitShowPlaybackTargetPicker();
                    })), t(this, "toggleControls", (e => {
                        if (this.supported.ui && !this.isAudio) {
                            const t = le(this.elements.container, this.config.classNames.hideControls), i = void 0 === e ? void 0 : !e, s = oe(this.elements.container, this.config.classNames.hideControls, i);
                            if (s && D(this.config.controls) && this.config.controls.includes("settings") && !z(this.config.settings) && ze.toggleMenu.call(this, !1), 
                            s !== t) {
                                const e = s ? "controlshidden" : "controlsshown";
                                we.call(this, this.media, e);
                            }
                            return !s;
                        }
                        return !1;
                    })), t(this, "on", ((e, t) => {
                        be.call(this, this.elements.container, e, t);
                    })), t(this, "once", ((e, t) => {
                        ve.call(this, this.elements.container, e, t);
                    })), t(this, "off", ((e, t) => {
                        ye(this.elements.container, e, t);
                    })), t(this, "destroy", ((e, t = !1) => {
                        if (!this.ready) return;
                        const i = () => {
                            document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (ie(this.elements.buttons.play), 
                            ie(this.elements.captions), ie(this.elements.controls), ie(this.elements.wrapper), 
                            this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, 
                            this.elements.wrapper = null), R(e) && e()) : (Te.call(this), Ie.cancelRequests.call(this), 
                            ne(this.elements.original, this.elements.container), we.call(this, this.elements.original, "destroyed", !0), 
                            R(e) && e.call(this.elements.original), this.ready = !1, setTimeout((() => {
                                this.elements = null, this.media = null;
                            }), 200));
                        };
                        this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), 
                        clearTimeout(this.timers.resized), this.isHTML5 ? (rt.toggleNativeControls.call(this, !0), 
                        i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), 
                        null !== this.embed && R(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), 
                        setTimeout(i, 200));
                    })), t(this, "supports", (e => me.mime.call(this, e))), this.timers = {}, this.ready = !1, 
                    this.loading = !1, this.failed = !1, this.touch = me.touch, this.media = e, O(this.media) && (this.media = document.querySelectorAll(this.media)), 
                    (window.jQuery && this.media instanceof jQuery || q(this.media) || D(this.media)) && (this.media = this.media[0]), 
                    this.config = J({}, Xe, kt.defaults, i || {}, (() => {
                        try {
                            return JSON.parse(this.media.getAttribute("data-plyr-config"));
                        } catch (e) {
                            return {};
                        }
                    })()), this.elements = {
                        container: null,
                        fullscreen: null,
                        captions: null,
                        buttons: {},
                        display: {},
                        progress: {},
                        inputs: {},
                        settings: {
                            popup: null,
                            menu: null,
                            panels: {},
                            buttons: {}
                        }
                    }, this.captions = {
                        active: null,
                        currentTrack: -1,
                        meta: new WeakMap
                    }, this.fullscreen = {
                        active: !1
                    }, this.options = {
                        speed: [],
                        quality: []
                    }, this.debug = new st(this.config.debug), this.debug.log("Config", this.config), 
                    this.debug.log("Support", me), _(this.media) || !H(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
                    if (this.media.plyr) return void this.debug.warn("Target already setup");
                    if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
                    if (!me.check().api) return void this.debug.error("Setup failed: no support");
                    const s = this.media.cloneNode(!0);
                    s.autoplay = !1, this.elements.original = s;
                    const n = this.media.tagName.toLowerCase();
                    let a = null, r = null;
                    switch (n) {
                      case "div":
                        if (a = this.media.querySelector("iframe"), H(a)) {
                            if (r = Ke(a.getAttribute("src")), this.provider = function(e) {
                                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Ze.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Ze.vimeo : null;
                            }(r.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", 
                            r.search.length) {
                                const e = [ "1", "true" ];
                                e.includes(r.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(r.searchParams.get("loop")) && (this.config.loop.active = !0), 
                                this.isYouTube ? (this.config.playsinline = e.includes(r.searchParams.get("playsinline")), 
                                this.config.youtube.hl = r.searchParams.get("hl")) : this.config.playsinline = !0;
                            }
                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), 
                        this.media.removeAttribute(this.config.attributes.embed.provider);
                        if (z(this.provider) || !Object.values(Ze).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                        this.type = tt;
                        break;

                      case "video":
                      case "audio":
                        this.type = n, this.provider = Ze.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), 
                        this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), 
                        this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                        break;

                      default:
                        return void this.debug.error("Setup failed: unsupported type");
                    }
                    this.supported = me.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], 
                    this.listeners = new ot(this), this.storage = new Fe(this), this.media.plyr = this, 
                    H(this.elements.container) || (this.elements.container = ee("div", {
                        tabindex: 0
                    }), G(this.media, this.elements.container)), rt.migrateStyles.call(this), rt.addStyleHook.call(this), 
                    gt.setup.call(this), this.config.debug && be.call(this, this.elements.container, this.config.events.join(" "), (e => {
                        this.debug.log(`event: ${e.type}`);
                    })), this.fullscreen = new nt(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && rt.build.call(this), 
                    this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new ft(this)), 
                    this.isHTML5 && this.config.autoplay && this.once("canplay", (() => Ce(this.play()))), 
                    this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new wt(this))) : this.debug.error("Setup failed: no support");
                }
                get isHTML5() {
                    return this.provider === Ze.html5;
                }
                get isEmbed() {
                    return this.isYouTube || this.isVimeo;
                }
                get isYouTube() {
                    return this.provider === Ze.youtube;
                }
                get isVimeo() {
                    return this.provider === Ze.vimeo;
                }
                get isVideo() {
                    return this.type === tt;
                }
                get isAudio() {
                    return this.type === et;
                }
                get playing() {
                    return Boolean(this.ready && !this.paused && !this.ended);
                }
                get paused() {
                    return Boolean(this.media.paused);
                }
                get stopped() {
                    return Boolean(this.paused && 0 === this.currentTime);
                }
                get ended() {
                    return Boolean(this.media.ended);
                }
                set currentTime(e) {
                    if (!this.duration) return;
                    const t = $(e) && e > 0;
                    this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
                }
                get currentTime() {
                    return Number(this.media.currentTime);
                }
                get buffered() {
                    const {buffered: e} = this.media;
                    return $(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
                }
                get seeking() {
                    return Boolean(this.media.seeking);
                }
                get duration() {
                    const e = parseFloat(this.config.duration), t = (this.media || {}).duration, i = $(t) && t !== 1 / 0 ? t : 0;
                    return e || i;
                }
                set volume(e) {
                    let t = e;
                    O(t) && (t = Number(t)), $(t) || (t = this.storage.get("volume")), $(t) || ({volume: t} = this.config), 
                    t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, 
                    !z(e) && this.muted && t > 0 && (this.muted = !1);
                }
                get volume() {
                    return Number(this.media.volume);
                }
                set muted(e) {
                    let t = e;
                    j(t) || (t = this.storage.get("muted")), j(t) || (t = this.config.muted), this.config.muted = t, 
                    this.media.muted = t;
                }
                get muted() {
                    return Boolean(this.media.muted);
                }
                get hasAudio() {
                    return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
                }
                set speed(e) {
                    let t = null;
                    $(e) && (t = e), $(t) || (t = this.storage.get("speed")), $(t) || (t = this.config.speed.selected);
                    const {minimumSpeed: i, maximumSpeed: s} = this;
                    t = bt(t, i, s), this.config.speed.selected = t, setTimeout((() => {
                        this.media && (this.media.playbackRate = t);
                    }), 0);
                }
                get speed() {
                    return Number(this.media.playbackRate);
                }
                get minimumSpeed() {
                    return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625;
                }
                get maximumSpeed() {
                    return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
                }
                set quality(e) {
                    const t = this.config.quality, i = this.options.quality;
                    if (!i.length) return;
                    let s = [ !z(e) && Number(e), this.storage.get("quality"), t.selected, t.default ].find($), n = !0;
                    if (!i.includes(s)) {
                        const e = Se(i, s);
                        this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, 
                        n = !1;
                    }
                    t.selected = s, this.media.quality = s, n && this.storage.set({
                        quality: s
                    });
                }
                get quality() {
                    return this.media.quality;
                }
                set loop(e) {
                    const t = j(e) ? e : this.config.loop.active;
                    this.config.loop.active = t, this.media.loop = t;
                }
                get loop() {
                    return Boolean(this.media.loop);
                }
                set source(e) {
                    Tt.change.call(this, e);
                }
                get source() {
                    return this.media.currentSrc;
                }
                get download() {
                    const {download: e} = this.config.urls;
                    return W(e) ? e : this.source;
                }
                set download(e) {
                    W(e) && (this.config.urls.download = e, ze.setDownloadUrl.call(this));
                }
                set poster(e) {
                    this.isVideo ? rt.setPoster.call(this, e, !1).catch((() => {})) : this.debug.warn("Poster can only be set for video");
                }
                get poster() {
                    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
                }
                get ratio() {
                    if (!this.isVideo) return null;
                    const e = xe(Ne.call(this));
                    return D(e) ? e.join(":") : e;
                }
                set ratio(e) {
                    this.isVideo ? O(e) && Me(e) ? (this.config.ratio = xe(e), Le.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video");
                }
                set autoplay(e) {
                    this.config.autoplay = j(e) ? e : this.config.autoplay;
                }
                get autoplay() {
                    return Boolean(this.config.autoplay);
                }
                toggleCaptions(e) {
                    Qe.toggle.call(this, e, !1);
                }
                set currentTrack(e) {
                    Qe.set.call(this, e, !1), Qe.setup.call(this);
                }
                get currentTrack() {
                    const {toggled: e, currentTrack: t} = this.captions;
                    return e ? t : -1;
                }
                set language(e) {
                    Qe.setLanguage.call(this, e, !1);
                }
                get language() {
                    return (Qe.getCurrentTrack.call(this) || {}).language;
                }
                set pip(e) {
                    if (!me.pip) return;
                    const t = j(e) ? e : !this.pip;
                    R(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Je : Ge), 
                    R(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
                }
                get pip() {
                    return me.pip ? z(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Je : null;
                }
                setPreviewThumbnails(e) {
                    this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), 
                    this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), 
                    this.config.previewThumbnails.enabled && (this.previewThumbnails = new wt(this));
                }
                static supported(e, t, i) {
                    return me.check(e, t, i);
                }
                static loadSprite(e, t) {
                    return Ue(e, t);
                }
                static setup(e, t = {}) {
                    let i = null;
                    return O(e) ? i = Array.from(document.querySelectorAll(e)) : q(e) ? i = Array.from(e) : D(e) && (i = e.filter(H)), 
                    z(i) ? null : i.map((e => new kt(e, t)));
                }
            }
            var Ct;
            return kt.defaults = (Ct = Xe, JSON.parse(JSON.stringify(Ct))), kt;
        }));
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        new Plyr("#player");
        window["FLS"] = true;
        isWebp();
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        pageNavigation();
        headerScroll();
    })();
})();