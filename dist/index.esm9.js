import { j as h } from "./index.esm23.js";
import { useRef as T, useState as S, useEffect as j, useCallback as B } from "react";
import { useTheme as _ } from "./index.esm19.js";
import { cn as G } from "./index.esm25.js";
const ae = ({
  className: J,
  width: o = 300,
  height: a = 150,
  brushSize: U = 20,
  coverImage: p,
  coverColor: b,
  revealImage: M,
  revealContent: V,
  completionThreshold: N = 70,
  onComplete: g,
  disabled: E = !1,
  revealAll: L = !1,
  theme: W,
  variant: m = "default",
  ...X
}) => {
  const { themeObject: A, theme: Y } = _(), u = W || Y, k = T(null), q = T(null), y = T(!1), [C, R] = S(!1), [O, P] = S(0), [z, I] = S(null), [r, H] = S(null), w = () => {
    const t = {
      background: "#f5f5f5",
      foreground: "#333333",
      borderColor: "#e0e0e0",
      shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      brushColor: "rgba(255, 255, 255, 0)"
    };
    switch (u) {
      case "enterprise":
        return {
          background: b || "#f8f9fa",
          foreground: "#111827",
          borderColor: "#e5e7eb",
          shadow: "0 4px 10px rgba(0, 0, 0, 0.04)",
          brushColor: "rgba(255, 255, 255, 0)"
        };
      case "techDark":
        return {
          background: b || "#1f2937",
          foreground: "#f9fafb",
          borderColor: "#374151",
          shadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          brushColor: "rgba(255, 255, 255, 0)",
          glow: "0 0 15px rgba(139, 92, 246, 0.3)"
        };
      case "glass":
        return {
          background: b || "rgba(15, 23, 42, 0.3)",
          foreground: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.1)",
          shadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          brushColor: "rgba(255, 255, 255, 0)",
          blur: "8px"
        };
      case "neumorphic":
        return {
          background: b || "#e0e5ec",
          foreground: "#333333",
          borderColor: "transparent",
          shadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
          shadowInset: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
          brushColor: "rgba(255, 255, 255, 0)"
        };
      case "glow":
        return {
          background: b || "#111827",
          foreground: "#ffffff",
          borderColor: "rgba(59, 130, 246, 0.3)",
          shadow: "0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)",
          brushColor: "rgba(255, 255, 255, 0)"
        };
      default:
        return t;
    }
  }, D = (t) => {
    switch (m) {
      case "prize":
        return {
          ...t,
          background: b || (u === "techDark" ? "#6d28d9" : u === "enterprise" ? "#3b82f6" : u === "glass" ? "rgba(139, 92, 246, 0.4)" : u === "neumorphic" ? "#dee4ec" : "#4f46e5"),
          pattern: "radial-gradient(circle at center, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.1) 5.1%, rgba(255, 255, 255, 0.2) 10%, transparent 10.1%)",
          patternSize: "20px 20px"
        };
      case "ticket":
        return {
          ...t,
          pattern: "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.2) 10px, rgba(255, 255, 255, 0.2) 20px)"
        };
      case "coupon":
        return {
          ...t,
          pattern: "repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 15px, rgba(255, 255, 255, 0.1) 15px, rgba(255, 255, 255, 0.1) 30px)"
        };
      default:
        return t;
    }
  };
  j(() => {
    const t = k.current;
    if (!t) return;
    t.width = o, t.height = a;
    const e = t.getContext("2d");
    if (!e) return;
    H(e);
    const s = w(), d = D(s);
    if (e.fillStyle = d.background, e.fillRect(0, 0, o, a), d.pattern) {
      e.save();
      const n = document.createElement("canvas"), c = n.getContext("2d");
      if (!c) {
        e.restore();
        return;
      }
      n.width = 40, n.height = 40;
      const i = c.createLinearGradient(0, 0, 40, 40);
      i.addColorStop(0, "rgba(255, 255, 255, 0.1)"), i.addColorStop(1, "rgba(255, 255, 255, 0.2)"), c.fillStyle = i, c.fillRect(0, 0, 40, 40);
      const f = e.createPattern(n, "repeat");
      f && (e.fillStyle = f, e.fillRect(0, 0, o, a)), e.restore();
    }
    if (p) {
      const n = new Image();
      n.onload = () => {
        e && e.drawImage(n, 0, 0, o, a);
      }, n.src = p;
    }
    if (m === "ticket")
      e.strokeStyle = "rgba(255, 255, 255, 0.3)", e.setLineDash([5, 5]), e.beginPath(), e.moveTo(0, 15), e.lineTo(o, 15), e.stroke(), e.beginPath(), e.moveTo(0, a - 15), e.lineTo(o, a - 15), e.stroke();
    else if (m === "coupon") {
      e.strokeStyle = "rgba(255, 255, 255, 0.3)", e.setLineDash([]);
      const n = 8, c = Math.floor(a / (n * 2 + 4)), i = (a - c * n * 2) / (c + 1);
      for (let f = 0; f < c; f++) {
        const l = i + f * (i + n * 2) + n;
        e.beginPath(), e.arc(-8 / 2, l, n, 0, Math.PI * 2), e.stroke(), e.beginPath(), e.arc(o + n / 2, l, n, 0, Math.PI * 2), e.stroke();
      }
    }
    L && Q();
  }, [o, a, p, b, L, u, m]), j(() => {
    const t = k.current;
    if (!t || E) return;
    const e = (l) => {
      y.current = !0;
      const x = F(l);
      I(x), $(x, x);
    }, s = (l) => {
      if (!y.current) return;
      const x = F(l);
      $(z, x), I(x), K();
    }, d = () => {
      y.current = !1;
    }, n = () => {
      y.current = !1;
    }, c = (l) => {
      l.preventDefault(), e(l.touches[0]);
    }, i = (l) => {
      l.preventDefault(), s(l.touches[0]);
    }, f = (l) => {
      l.preventDefault(), d();
    };
    return t.addEventListener("mousedown", e), t.addEventListener("mousemove", s), t.addEventListener("mouseup", d), t.addEventListener("mouseout", n), t.addEventListener("touchstart", c), t.addEventListener("touchmove", i), t.addEventListener("touchend", f), () => {
      t.removeEventListener("mousedown", e), t.removeEventListener("mousemove", s), t.removeEventListener("mouseup", d), t.removeEventListener("mouseout", n), t.removeEventListener("touchstart", c), t.removeEventListener("touchmove", i), t.removeEventListener("touchend", f);
    };
  }, [E, z]), j(() => {
    O >= N && !C && (R(!0), g && g());
  }, [O, N, C, g]);
  const F = (t) => {
    const e = k.current;
    if (!e) return { x: 0, y: 0 };
    const s = e.getBoundingClientRect();
    return {
      x: t.clientX - s.left,
      y: t.clientY - s.top
    };
  }, $ = (t, e) => {
    !r || !t || !e || (r.globalCompositeOperation = "destination-out", r.strokeStyle = "rgba(255, 255, 255, 1)", r.lineWidth = U, r.lineCap = "round", r.lineJoin = "round", r.beginPath(), r.moveTo(t.x, t.y), r.lineTo(e.x, e.y), r.stroke());
  }, K = () => {
    if (!r) return;
    const e = r.getImageData(0, 0, o, a).data;
    let s = 0;
    for (let c = 3; c < e.length; c += 4)
      e[c] === 0 && s++;
    const d = o * a, n = s / d * 100;
    P(n);
  }, Q = B(() => {
    r && (r.globalCompositeOperation = "destination-out", r.fillRect(0, 0, o, a), R(!0), P(100), g && g());
  }, [r, o, a, g]);
  B(() => {
    if (!r) return;
    const t = w(), e = D(t);
    if (r.globalCompositeOperation = "source-over", r.fillStyle = e.background, r.fillRect(0, 0, o, a), p) {
      const s = new Image();
      s.onload = () => {
        r && r.drawImage(s, 0, 0, o, a);
      }, s.src = p;
    }
    R(!1), P(0);
  }, [r, o, a, p, u, m]);
  const Z = w(), v = D(Z);
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: q,
      className: G(
        "relative rounded-lg overflow-hidden",
        J
      ),
      style: {
        width: o,
        height: a,
        borderRadius: "0.5rem",
        border: `1px solid ${v.borderColor}`,
        boxShadow: v.shadow,
        ...v.blur ? { backdropFilter: `blur(${v.blur})` } : {}
      },
      ...X,
      children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center z-0 p-4",
            style: {
              color: v.foreground,
              background: u === "glass" ? "rgba(255, 255, 255, 0.1)" : u === "techDark" ? "#111827" : u === "neumorphic" ? "#e0e5ec" : u === "glow" ? "#030712" : "#ffffff"
            },
            children: M ? /* @__PURE__ */ h.jsx("img", { src: M, alt: "Revealed content", className: "max-w-full max-h-full object-contain" }) : /* @__PURE__ */ h.jsx("div", { className: "text-center", children: V })
          }
        ),
        /* @__PURE__ */ h.jsx(
          "canvas",
          {
            ref: k,
            className: G(
              "absolute inset-0 cursor-pointer z-10",
              { "cursor-not-allowed": E }
            ),
            style: {
              opacity: C && L ? 0 : 1,
              transition: "opacity 0.5s ease-in-out"
            }
          }
        ),
        !1
      ]
    }
  );
};
export {
  ae as ScratchCard,
  ae as default
};
//# sourceMappingURL=index.esm9.js.map
