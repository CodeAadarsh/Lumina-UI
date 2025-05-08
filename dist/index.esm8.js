import { j as $ } from "./index.esm23.js";
import { useRef as p, useState as S, useEffect as N } from "react";
import { cva as B } from "class-variance-authority";
import { cn as O } from "./index.esm21.js";
import { useSafeTheme as G } from "./index.esm24.js";
const H = B(
  // Base styles for all Spotlight components
  "relative overflow-hidden",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white text-gray-900",
        techDark: "bg-gray-950 text-white",
        glass: "backdrop-blur-lg text-white",
        neumorphicLight: "bg-[#e0e5ec] text-gray-800",
        glow: "bg-gray-950 text-white",
        "3d": "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      },
      // Size variants
      size: {
        sm: "min-h-40",
        md: "min-h-64",
        lg: "min-h-96",
        full: "min-h-screen"
      },
      // Spotlight size variants
      spotSize: {
        sm: "",
        // small spotlight
        md: "",
        // medium spotlight
        lg: ""
        // large spotlight
      },
      // Spotlight intensity variants
      intensity: {
        low: "",
        medium: "",
        high: ""
      },
      // Animation variants
      animation: {
        none: "",
        pulse: "",
        breathe: "",
        rainbow: ""
      },
      // Spotlight color variants
      color: {
        blue: "",
        purple: "",
        cyan: "",
        pink: "",
        amber: "",
        multi: ""
      },
      // Spotlight type variants
      type: {
        radial: "",
        directional: "",
        beam: ""
      }
    },
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      spotSize: "md",
      intensity: "medium",
      animation: "none",
      color: "blue",
      type: "radial"
    }
  }
), m = (i, g) => {
  var d;
  const u = {
    blue: {
      enterprise: "rgba(59, 130, 246, 0.15)",
      techDark: "rgba(59, 130, 246, 0.2)",
      glass: "rgba(59, 130, 246, 0.15)",
      neumorphicLight: "rgba(59, 130, 246, 0.15)",
      glow: "rgba(59, 130, 246, 0.25)",
      "3d": "rgba(59, 130, 246, 0.15)"
    },
    purple: {
      enterprise: "rgba(139, 92, 246, 0.15)",
      techDark: "rgba(139, 92, 246, 0.2)",
      glass: "rgba(139, 92, 246, 0.15)",
      neumorphicLight: "rgba(139, 92, 246, 0.15)",
      glow: "rgba(139, 92, 246, 0.25)",
      "3d": "rgba(139, 92, 246, 0.15)"
    },
    cyan: {
      enterprise: "rgba(6, 182, 212, 0.15)",
      techDark: "rgba(6, 182, 212, 0.2)",
      glass: "rgba(6, 182, 212, 0.15)",
      neumorphicLight: "rgba(6, 182, 212, 0.15)",
      glow: "rgba(6, 182, 212, 0.25)",
      "3d": "rgba(6, 182, 212, 0.15)"
    },
    pink: {
      enterprise: "rgba(236, 72, 153, 0.15)",
      techDark: "rgba(236, 72, 153, 0.2)",
      glass: "rgba(236, 72, 153, 0.15)",
      neumorphicLight: "rgba(236, 72, 153, 0.15)",
      glow: "rgba(236, 72, 153, 0.25)",
      "3d": "rgba(236, 72, 153, 0.15)"
    },
    amber: {
      enterprise: "rgba(245, 158, 11, 0.15)",
      techDark: "rgba(245, 158, 11, 0.2)",
      glass: "rgba(245, 158, 11, 0.15)",
      neumorphicLight: "rgba(245, 158, 11, 0.15)",
      glow: "rgba(245, 158, 11, 0.25)",
      "3d": "rgba(245, 158, 11, 0.15)"
    }
  };
  return i === "multi" ? "multi" : ((d = u[i]) == null ? void 0 : d[g]) || u.blue[g];
}, J = (i) => {
  switch (i) {
    case "sm":
      return 200;
    case "lg":
      return 600;
    default:
      return 400;
  }
}, K = (i, g) => {
  const u = {
    low: 0.7,
    medium: 1,
    high: 1.5
  }[i] || 1, d = {
    enterprise: 1,
    techDark: 1.2,
    glass: 0.8,
    neumorphicLight: 0.9,
    glow: 1.5,
    "3d": 1.1
  }[g] || 1;
  return u * d;
}, ee = ({
  children: i,
  className: g,
  theme: u,
  size: d,
  spotSize: v,
  intensity: M,
  animation: s,
  color: h,
  type: n,
  ...R
}) => {
  const { theme: A } = G(), o = u || A, c = p(null), l = p(null), b = p(null), D = p(0), [L, F] = S({ x: -1e3, y: -1e3 }), [q, C] = S(!1), [P, T] = S(0), V = H({
    theme: o,
    size: d,
    spotSize: v,
    intensity: M,
    animation: s,
    color: h,
    type: n,
    className: g
  }), f = m(h, o), j = J(v), z = K(M, o), E = (e) => {
    if (!c.current) return;
    const r = c.current.getBoundingClientRect(), a = e.clientX - r.left, t = e.clientY - r.top;
    if (F({ x: a, y: t }), C(!0), c.current.querySelector(".spotlight-content")) {
      const k = c.current.querySelector(".spotlight-content"), w = r.width / 2, x = r.height / 2, y = (a - w) / r.width * 10, Y = (t - x) / r.height * 10;
      k.style.transform = `translate3d(${y}px, ${Y}px, 0)`;
    }
  }, I = () => {
    var e;
    if (C(!1), (e = c.current) != null && e.querySelector(".spotlight-content")) {
      const r = c.current.querySelector(".spotlight-content");
      r.style.transform = "translate3d(0, 0, 0)";
    }
  };
  N(() => {
    if (s === "none") return;
    let e = Date.now();
    const r = () => {
      if (!l.current) {
        b.current = requestAnimationFrame(r);
        return;
      }
      const a = Date.now() - e;
      if (s === "pulse") {
        const t = 1 + Math.sin(a / 1e3) * 0.2;
        l.current.style.transform = `translate(-50%, -50%) scale(${t})`;
      } else if (s === "breathe") {
        const t = 0.5 + Math.sin(a / 1500) * 0.3;
        l.current.style.opacity = t;
      } else if (s === "rainbow" && h === "multi") {
        const t = a / 50 % 360;
        n === "radial" ? l.current.style.background = `radial-gradient(circle at center, 
            hsla(${t}, 100%, 60%, 0.25), 
            transparent 70%)` : n === "directional" ? l.current.style.background = `linear-gradient(45deg, 
            hsla(${t}, 100%, 60%, 0.25), 
            hsla(${t + 60}, 100%, 60%, 0.1))` : n === "beam" && (l.current.style.background = `linear-gradient(90deg, 
            transparent, 
            hsla(${t}, 100%, 60%, 0.25), 
            transparent)`);
      }
      b.current = requestAnimationFrame(r), a > 1e3 && (T((t) => (t + 1) % 1e3), e = Date.now());
    };
    return b.current = requestAnimationFrame(r), () => {
      b.current && cancelAnimationFrame(b.current);
    };
  }, [s, n, h, P]);
  const X = () => {
    const e = {
      position: "absolute",
      top: `${L.y}px`,
      left: `${L.x}px`,
      width: `${j}px`,
      height: `${j}px`,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      opacity: q ? 1 : 0,
      transition: "opacity 0.3s ease"
    };
    if (h === "multi" && s !== "rainbow") {
      const r = [
        m("blue", o),
        m("purple", o),
        m("cyan", o),
        m("pink", o)
      ], a = r[D.current % r.length];
      q && setTimeout(() => {
        D.current += 1;
      }, 2e3), n === "radial" ? e.background = `radial-gradient(circle at center, ${a}, transparent 70%)` : n === "directional" ? e.background = `linear-gradient(45deg, ${a}, rgba(255, 255, 255, 0) 80%)` : n === "beam" && (e.width = "100%", e.height = "200px", e.background = `linear-gradient(90deg, transparent, ${a}, transparent)`);
    } else h === "multi" && s === "rainbow" ? n === "radial" ? e.background = "radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)" : n === "directional" ? e.background = "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1))" : n === "beam" && (e.width = "100%", e.height = "200px", e.background = "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)") : n === "radial" ? e.background = `radial-gradient(circle at center, ${f}, transparent 70%)` : n === "directional" ? e.background = `linear-gradient(45deg, ${f}, rgba(255, 255, 255, 0) 80%)` : n === "beam" && (e.width = "100%", e.height = "200px", e.background = `linear-gradient(90deg, transparent, ${f}, transparent)`);
    if (z !== 1) {
      const r = (a) => {
        const t = a.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (t) {
          const k = t[1], w = t[2], x = t[3], y = parseFloat(t[4]) * z;
          return `rgba(${k}, ${w}, ${x}, ${y})`;
        }
        return a;
      };
      e.background.includes("radial-gradient") ? e.background = e.background.replace(/rgba\([^)]+\)/, r) : e.background.includes("linear-gradient") && (e.background = e.background.replace(/rgba\([^)]+\)/, r));
    }
    return e;
  };
  return /* @__PURE__ */ $.jsxs(
    "div",
    {
      ref: c,
      className: O(V),
      onMouseMove: E,
      onMouseLeave: I,
      ...R,
      children: [
        /* @__PURE__ */ $.jsx(
          "div",
          {
            ref: l,
            style: X()
          }
        ),
        /* @__PURE__ */ $.jsx("div", { className: "relative z-10 spotlight-content transition-transform duration-200", children: i })
      ]
    }
  );
};
export {
  ee as Spotlight,
  H as spotlightVariants
};
//# sourceMappingURL=index.esm8.js.map
