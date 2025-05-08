import { j as l } from "./index.esm23.js";
import { useRef as N, useState as D, useEffect as K } from "react";
import { cva as O } from "class-variance-authority";
import { useTheme as Q } from "./index.esm19.js";
const U = O(
  // Base styles
  "relative transition-transform duration-200 transform-gpu will-change-transform bg-background-secondary overflow-hidden",
  {
    variants: {
      // Card variants
      variant: {
        // Default card
        default: "border border-border",
        // Elevated card with shadow
        elevated: "border border-border shadow-lg",
        // Glass effect card
        glass: "backdrop-blur-md bg-white/10 border border-white/20",
        // Premium glass card
        "glass-premium": "backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg",
        // Gradient card
        gradient: "bg-gradient-to-br from-primary-light/10 to-accent-purple/10 border border-white/10",
        // Dark card
        dark: "bg-gray-900 border border-gray-800 shadow-xl",
        // Neumorphic light
        "neumorphic-light": "bg-[#e0e5ec] text-gray-700 border-none shadow-[5px_5px_15px_#b8b9be,-5px_-5px_15px_#ffffff]",
        // Neumorphic dark
        "neumorphic-dark": "bg-[#2a2d3e] text-gray-100 border-none shadow-[5px_5px_15px_#1e2030,-5px_-5px_15px_#363b50]"
      },
      // Card intensity - controls the strength of 3D effect
      intensity: {
        subtle: "motion-intensity-subtle",
        // Custom class for JS manipulation
        medium: "motion-intensity-medium",
        // Custom class for JS manipulation
        strong: "motion-intensity-strong"
        // Custom class for JS manipulation
      },
      // Card roundedness
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-[28px]"
      },
      // Card glow effect
      glow: {
        none: "",
        subtle: "motion-card-glow-subtle",
        // Custom class for JS manipulation
        medium: "motion-card-glow-medium",
        // Custom class for JS manipulation
        strong: "motion-card-glow-strong"
        // Custom class for JS manipulation
      },
      // Card highlight effect (shine)
      highlight: {
        none: "",
        subtle: "motion-card-highlight-subtle",
        // Custom class for JS manipulation
        medium: "motion-card-highlight-medium",
        // Custom class for JS manipulation
        strong: "motion-card-highlight-strong"
        // Custom class for JS manipulation
      },
      // Additional effects
      effect: {
        none: "",
        float: "animate-float",
        shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent overflow-hidden",
        border: "motion-card-border",
        // Custom class for JS manipulation
        "multi-border": "motion-card-multi-border"
        // Custom class for JS manipulation
      }
    },
    defaultVariants: {
      variant: "default",
      intensity: "medium",
      rounded: "lg",
      glow: "none",
      highlight: "none",
      effect: "none"
    }
  }
), W = (e, t, r, n, i, f, u) => {
  let m = t || "default", g = r || "medium", h = n || "lg", o = i || "none", a = f || "none", s = u || "none";
  return e === "techDark" && !t ? (m = "dark", r || (g = "medium"), n || (h = "xl"), i || (o = "medium"), f || (a = "subtle"), u || (s = "none")) : e === "glass" && !t && (m = "glass-premium", r || (g = "medium"), n || (h = "xl"), i || (o = "subtle"), f || (a = "medium"), u || (s = "none")), {
    variant: m,
    intensity: g,
    rounded: h,
    glow: o,
    highlight: a,
    effect: s
  };
}, ee = (e) => {
  switch (e) {
    case "subtle":
      return 10;
    case "medium":
      return 20;
    case "strong":
      return 35;
    default:
      return 20;
  }
}, te = (e) => {
  switch (e) {
    case "subtle":
      return 0.5;
    case "medium":
      return 1;
    case "strong":
      return 1.5;
    default:
      return 0;
  }
}, re = (e) => {
  switch (e) {
    case "subtle":
      return 0.1;
    case "medium":
      return 0.2;
    case "strong":
      return 0.3;
    default:
      return 0;
  }
}, ae = ({
  // Card appearance props
  variant: e,
  intensity: t,
  rounded: r,
  glow: n,
  highlight: i,
  effect: f,
  className: u = "",
  style: m = {},
  children: g,
  // Card behavior props
  resetOnLeave: h = !0,
  disableRotation: o = !1,
  disableScale: a = !1,
  disableGlow: s = !1,
  disableHighlight: x = !1,
  glowColor: R = "rgba(100, 130, 255, 0.4)",
  // Other props
  ...F
}) => {
  const { theme: H } = Q(), b = N(null), _ = N(null), k = N(null), [X, Y] = D({ x: 0, y: 0 }), [v, S] = D(!1), {
    variant: L,
    intensity: T,
    rounded: Z,
    glow: V,
    highlight: z,
    effect: B
  } = W(H, e, t, r, n, i, f), C = ee(T), p = te(V), w = re(z), P = U({
    variant: L,
    intensity: T,
    rounded: Z,
    glow: s ? "none" : V,
    highlight: x ? "none" : z,
    effect: B,
    className: u
  }), q = (d) => {
    if (!b.current || o) return;
    const c = b.current.getBoundingClientRect(), j = (d.clientX - c.left) / c.width - 0.5, I = (d.clientY - c.top) / c.height - 0.5;
    Y({ x: j, y: I });
  }, A = () => {
    h && Y({ x: 0, y: 0 }), S(!1);
  }, G = () => {
    S(!0);
  };
  return K(() => {
    if (!b.current) return;
    const { x: d, y: $ } = X, c = b.current, j = o ? 0 : d * C, I = o ? 0 : -$ * C, J = v && !a ? 1.02 : 1;
    if (c.style.transform = `
      perspective(1000px) 
      rotateX(${I}deg) 
      rotateY(${j}deg)
      scale(${J})
    `, _.current && !s && p > 0) {
      const y = _.current, M = 50 + d * 50, E = 50 + $ * 50;
      y.style.background = `radial-gradient(
        circle at ${M}% ${E}%, 
        ${R}, 
        transparent ${60 / p}%
      )`, y.style.opacity = v ? p.toString() : "0";
    }
    if (k.current && !x && w > 0) {
      const y = k.current, M = 50 + d * 100, E = 50 + $ * 100;
      y.style.background = `radial-gradient(
        circle at ${M}% ${E}%, 
        rgba(255, 255, 255, ${w}), 
        transparent 25%
      )`, y.style.opacity = v ? "1" : "0";
    }
  }, [X, v, C, p, w, o, a, s, x, R]), /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: b,
      className: `${P} transform-gpu`,
      onMouseMove: q,
      onMouseLeave: A,
      onMouseEnter: G,
      style: {
        transformStyle: "preserve-3d",
        ...m
      },
      ...F,
      children: [
        !s && p > 0 && /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: _,
            className: "absolute inset-0 opacity-0 transition-opacity duration-300 rounded-inherit z-[-1]",
            style: { borderRadius: "inherit" }
          }
        ),
        !x && w > 0 && /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: k,
            className: "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-overlay",
            style: { borderRadius: "inherit" }
          }
        ),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "relative z-10 motion-card-content",
            style: {
              transform: o ? "none" : "translateZ(20px)",
              transformStyle: "preserve-3d"
            },
            children: g
          }
        )
      ]
    }
  );
}, de = ({
  className: e = "",
  children: t,
  ...r
}) => {
  const n = `p-5 ${e}`;
  return /* @__PURE__ */ l.jsx("div", { className: n, ...r, children: t });
}, ce = ({
  className: e = "",
  children: t,
  depth: r = 20,
  disableDepth: n = !1,
  ...i
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: `relative ${e}`,
    style: {
      transform: n ? "none" : `translateZ(${r}px)`,
      transformStyle: "preserve-3d"
    },
    ...i,
    children: t
  }
);
export {
  ae as MotionCard,
  de as MotionCardContent,
  ce as MotionCardLayer,
  U as motionCardVariants
};
//# sourceMappingURL=index.esm10.js.map
