import { j as a } from "./index.esm23.js";
import { memo as R, forwardRef as T, useState as n, useRef as E } from "react";
import { cva as te } from "class-variance-authority";
import { useTheme as D, ThemeProvider as re } from "./index.esm19.js";
import { cn as oe } from "./index.esm21.js";
const se = te(
  // Base styles for all HoverCard3D components
  "relative overflow-hidden transition-all duration-300 perspective-1000 transform-gpu",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary border border-border shadow-md rounded-lg",
        techDark: "bg-background-primary border border-transparent gradient-border-1 shadow-lg rounded-xl",
        glass: "glass-effect border border-border backdrop-blur-md rounded-xl"
      },
      // Size variants
      size: {
        sm: "p-4 max-w-sm",
        md: "p-6 max-w-md",
        lg: "p-8 max-w-lg"
      },
      // Intensity of the 3D effect
      intensity: {
        subtle: "",
        // CSS variables will control the intensity
        medium: "",
        strong: ""
      },
      // Additional hover effects
      hoverEffect: {
        glow: "",
        shimmer: "overflow-hidden",
        lift: "",
        none: ""
      }
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        hoverEffect: "glow",
        className: "hover:shadow-lg transition-shadow"
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        hoverEffect: "glow",
        className: "hover:shadow-blue-glow transition-all"
      },
      {
        theme: "techDark",
        hoverEffect: "shimmer",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer"
      },
      // Glass theme specifics
      {
        theme: "glass",
        hoverEffect: "glow",
        className: "hover:shadow-white-glow transition-all border-opacity-30"
      }
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      intensity: "medium",
      hoverEffect: "none"
    }
  }
), ne = () => {
  try {
    return D();
  } catch {
    return console.warn("ThemeProvider not found, using default theme"), { theme: "enterprise" };
  }
}, f = R(T(({
  children: e,
  className: i,
  theme: c,
  size: l,
  intensity: t,
  hoverEffect: p,
  glareEnabled: g = !0,
  rotateReverse: j = !1,
  glareOpacity: k = 0.1,
  glareColor: N = "255, 255, 255",
  maxRotation: d = 20,
  // Maximum rotation in degrees
  perspective: m = 1e3,
  // Perspective value
  ...$
}, s) => {
  const { theme: C } = ne(), H = c || C || "enterprise", [P, v] = n(0), [z, b] = n(0), [S, V] = n(50), [I, L] = n(50), [h, w] = n(!1), u = E(null), x = E(null), W = () => {
    switch (t) {
      case "subtle":
        return { maxRotation: d * 0.5, perspective: m * 1.2 };
      case "medium":
        return { maxRotation: d, perspective: m };
      case "strong":
        return { maxRotation: d * 1.5, perspective: m * 0.8 };
      default:
        return { maxRotation: d, perspective: m };
    }
  }, { maxRotation: y, perspective: B } = W(), Z = (r) => {
    if (!u.current) return;
    const o = u.current.getBoundingClientRect(), K = o.left + o.width / 2, O = o.top + o.height / 2, M = (r.clientX - K) / (o.width / 2), X = (r.clientY - O) / (o.height / 2), Y = j ? -1 : 1, Q = X * y * Y, U = M * -y * Y;
    if (v(Q), b(U), g && x.current) {
      const _ = (M + 1) * 50, ee = (X + 1) * 50;
      V(_), L(ee);
    }
  }, q = () => w(!0), A = () => {
    w(!1), v(0), b(0);
  }, F = {
    transform: h ? `perspective(${B}px) rotateX(${P}deg) rotateY(${z}deg)` : "",
    transition: h ? "transform 0.1s ease" : "transform 0.5s ease-out"
  }, G = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    background: `radial-gradient(circle at ${S}% ${I}%, rgba(${N}, ${k}), transparent)`,
    transform: "translateZ(1px)",
    opacity: h ? 1 : 0,
    transition: "opacity 0.5s ease-out"
  }, J = se({
    theme: H,
    size: l,
    intensity: t,
    hoverEffect: p,
    className: i
  });
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: (r) => {
        s && (typeof s == "function" ? s(r) : s.current !== void 0 && (s.current = r)), u.current = r;
      },
      className: oe(J),
      style: F,
      onMouseMove: Z,
      onMouseEnter: q,
      onMouseLeave: A,
      ...$,
      children: [
        e,
        g && /* @__PURE__ */ a.jsx("div", { ref: x, style: G })
      ]
    }
  );
}));
f.displayName = "HoverCard3D";
const ae = R(T(({
  theme: e = "enterprise",
  children: i,
  ...c
}, l) => {
  let t = !1;
  try {
    D(), t = !0;
  } catch {
    t = !1;
  }
  return t ? /* @__PURE__ */ a.jsx(f, { ref: l, theme: e, ...c, children: i }) : /* @__PURE__ */ a.jsx(re, { theme: e, children: /* @__PURE__ */ a.jsx(f, { ref: l, theme: e, ...c, children: i }) });
}));
ae.displayName = "HoverCard3DWithTheme";
export {
  f as HoverCard3D,
  ae as HoverCard3DWithTheme,
  se as hoverCard3DVariants
};
//# sourceMappingURL=index.esm15.js.map
