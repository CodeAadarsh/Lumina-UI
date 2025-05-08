import { j as e } from "./index.esm23.js";
import { useState as _, useRef as K } from "react";
import { cva as f } from "class-variance-authority";
import { useSafeTheme as O } from "./index.esm24.js";
import { cn as P } from "./index.esm21.js";
const W = f(
  // Base styles for all Testimonial components
  "relative overflow-hidden transition-all duration-300 perspective-1000 transform-gpu",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white border border-gray-200 shadow-lg rounded-lg text-gray-800",
        techDark: "bg-gray-900 border border-transparent gradient-border-1 shadow-xl rounded-xl text-white",
        glass: "glass-effect border border-white/30 backdrop-blur-lg rounded-xl text-white",
        neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none rounded-2xl text-gray-700",
        glow: "bg-gray-900/90 border border-blue-500/30 rounded-xl text-white shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
        "3d": "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white transform-gpu shadow-xl"
      },
      // Size variants
      size: {
        sm: "p-4 max-w-sm",
        md: "p-6 max-w-md",
        lg: "p-8 max-w-lg"
      },
      // Layout variants
      layout: {
        default: "flex flex-col",
        horizontal: "flex flex-col md:flex-row md:items-center",
        stacked: "flex flex-col"
      },
      // Animation variants
      animation: {
        none: "",
        float: "hover:translate-y-[-8px]",
        pulse: "hover:scale-[1.03]",
        tilt: "",
        glow: "",
        shimmer: "overflow-hidden"
      },
      // Hover effect variants
      hoverEffect: {
        none: "",
        lift: "hover:shadow-xl transition-shadow duration-300",
        border: "",
        background: ""
      }
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Animation specifics
      {
        animation: "glow",
        theme: "enterprise",
        className: "hover:shadow-blue-glow"
      },
      {
        animation: "glow",
        theme: "techDark",
        className: "hover:shadow-purple-glow"
      },
      {
        animation: "glow",
        theme: "glass",
        className: "hover:shadow-white-glow"
      },
      {
        animation: "glow",
        theme: "glow",
        className: "hover:shadow-[0_0_20px_rgba(59,130,246,0.7),0_0_40px_rgba(59,130,246,0.4)]"
      },
      {
        animation: "shimmer",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer"
      },
      // Border effect specifics
      {
        hoverEffect: "border",
        theme: "enterprise",
        className: "border-2 border-transparent hover:border-blue-500/50 transition-colors duration-300"
      },
      {
        hoverEffect: "border",
        theme: "techDark",
        className: "border-2 border-transparent hover:border-purple-500/50 transition-colors duration-300"
      },
      {
        hoverEffect: "border",
        theme: "glass",
        className: "border-2 border-white/20 hover:border-white/60 transition-colors duration-300"
      },
      {
        hoverEffect: "border",
        theme: "neumorphicLight",
        className: "border-2 border-transparent hover:border-blue-500/20 transition-colors duration-300"
      },
      {
        hoverEffect: "border",
        theme: "glow",
        className: "border-2 border-blue-500/30 hover:border-blue-500/80 transition-colors duration-300"
      },
      // Background effect specifics
      {
        hoverEffect: "background",
        theme: "enterprise",
        className: "hover:bg-blue-50 transition-colors duration-300"
      },
      {
        hoverEffect: "background",
        theme: "techDark",
        className: "hover:bg-purple-900/20 transition-colors duration-300"
      },
      {
        hoverEffect: "background",
        theme: "glass",
        className: "hover:bg-white/30 transition-colors duration-300"
      },
      {
        hoverEffect: "background",
        theme: "neumorphicLight",
        className: "hover:bg-[#e5eaf1] transition-colors duration-300"
      },
      {
        hoverEffect: "background",
        theme: "glow",
        className: "hover:bg-blue-900/30 transition-colors duration-300"
      }
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      layout: "default",
      animation: "none",
      hoverEffect: "none"
    }
  }
), k = f(
  "absolute opacity-20",
  {
    variants: {
      theme: {
        enterprise: "text-blue-300",
        techDark: "text-purple-500",
        glass: "text-white",
        neumorphicLight: "text-blue-300",
        glow: "text-blue-500",
        "3d": "text-blue-300 dark:text-blue-700"
      },
      position: {
        topLeft: "top-4 left-4 transform -scale-x-100",
        topRight: "top-4 right-4",
        bottomLeft: "bottom-4 left-4 -scale-x-100 -scale-y-100",
        bottomRight: "bottom-4 right-4 -scale-y-100"
      }
    },
    defaultVariants: {
      theme: "enterprise",
      position: "topLeft"
    }
  }
), q = f(
  "flex",
  {
    variants: {
      theme: {
        enterprise: "text-yellow-400",
        techDark: "text-purple-500",
        glass: "text-yellow-300",
        neumorphicLight: "text-amber-500",
        glow: "text-blue-400",
        "3d": "text-yellow-500 dark:text-yellow-400"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      theme: "enterprise",
      size: "md"
    }
  }
), I = f(
  "overflow-hidden flex-shrink-0",
  {
    variants: {
      theme: {
        enterprise: "border-2 border-white ring-2 ring-gray-200",
        techDark: "border-2 border-gray-800 ring-2 ring-purple-500/30",
        glass: "border-2 border-white/50 ring-1 ring-white/20",
        neumorphicLight: "border-2 border-white shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff]",
        glow: "border-2 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
        "3d": "border-2 border-white dark:border-gray-700 shadow-md"
      },
      size: {
        sm: "w-12 h-12 rounded-full",
        md: "w-16 h-16 rounded-full",
        lg: "w-20 h-20 rounded-full"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
        hexagon: "clip-path-hex"
      }
    },
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      shape: "circle"
    }
  }
), te = ({
  children: g,
  className: M,
  theme: E,
  size: p,
  layout: j,
  animation: m,
  hoverEffect: L,
  avatarUrl: l,
  avatarAlt: b = "Testimonial author",
  avatarSize: z,
  avatarShape: Z = "circle",
  authorName: s,
  authorTitle: o,
  rating: n = 0,
  quote: i,
  showQuoteIcons: d = !0,
  animated3D: C = !1,
  ...B
}) => {
  const { theme: S } = O(), h = E || S, [D, N] = _(0), [R, H] = _(0), w = K(null), Y = (t) => {
    if (!C || !w.current) return;
    const r = w.current.getBoundingClientRect(), c = r.left + r.width / 2, x = r.top + r.height / 2, V = (t.clientX - c) / (r.width / 2), a = (t.clientY - x) / (r.height / 2) * -5, J = V * 5;
    N(a), H(J);
  }, X = () => {
    N(0), H(0);
  }, F = () => C ? {
    transform: `perspective(1000px) rotateX(${D}deg) rotateY(${R}deg)`,
    transition: "transform 0.1s ease-out"
  } : {}, u = (t) => {
    const r = [], x = Math.floor(t), V = t % 1 >= 0.5, y = q({
      theme: h,
      size: p
    });
    for (let a = 0; a < 5; a++)
      a < x ? r.push(
        /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, a)
      ) : a === x && V ? r.push(
        /* @__PURE__ */ e.jsxs("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: [
          /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "halfStarGradient", children: [
            /* @__PURE__ */ e.jsx("stop", { offset: "50%", stopColor: "currentColor" }),
            /* @__PURE__ */ e.jsx("stop", { offset: "50%", stopColor: "rgba(203, 213, 225, 0.4)" })
          ] }) }),
          /* @__PURE__ */ e.jsx("path", { fill: "url(#halfStarGradient)", d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
        ] }, a)
      ) : r.push(
        /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-gray-300 dark:text-gray-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, a)
      );
    return /* @__PURE__ */ e.jsx("div", { className: y, children: r });
  }, v = () => m === "float" ? "hover:animate-float" : m === "pulse" ? "hover:animate-pulse" : "", $ = () => {
    const t = I({
      theme: h,
      size: z || p,
      shape: Z
    }), r = d ? k({
      theme: h,
      position: "topLeft"
    }) : "", c = d ? k({
      theme: h,
      position: "bottomRight"
    }) : "";
    switch (j) {
      case "horizontal":
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          d && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { className: r, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) }),
            /* @__PURE__ */ e.jsx("svg", { className: c, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-center", children: [
            l && /* @__PURE__ */ e.jsx("div", { className: `${v()}`, children: /* @__PURE__ */ e.jsx("img", { src: l, alt: b, className: t }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
              n > 0 && u(n),
              i && /* @__PURE__ */ e.jsx("p", { className: "italic my-3", children: i }),
              g,
              (s || o) && /* @__PURE__ */ e.jsxs("div", { className: "mt-4", children: [
                s && /* @__PURE__ */ e.jsx("div", { className: "font-semibold", children: s }),
                o && /* @__PURE__ */ e.jsx("div", { className: "text-sm opacity-75", children: o })
              ] })
            ] })
          ] })
        ] });
      case "stacked":
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          d && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { className: r, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) }),
            /* @__PURE__ */ e.jsx("svg", { className: c, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            n > 0 && u(n),
            i && /* @__PURE__ */ e.jsx("p", { className: "italic my-4", children: i }),
            g,
            /* @__PURE__ */ e.jsx("div", { className: "mt-6 mb-4", children: l && /* @__PURE__ */ e.jsx("div", { className: `${v()} mx-auto`, children: /* @__PURE__ */ e.jsx("img", { src: l, alt: b, className: t }) }) }),
            (s || o) && /* @__PURE__ */ e.jsxs("div", { className: "mt-2", children: [
              s && /* @__PURE__ */ e.jsx("div", { className: "font-semibold", children: s }),
              o && /* @__PURE__ */ e.jsx("div", { className: "text-sm opacity-75", children: o })
            ] })
          ] })
        ] });
      default:
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          d && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { className: r, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) }),
            /* @__PURE__ */ e.jsx("svg", { className: c, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) })
          ] }),
          n > 0 && u(n),
          i && /* @__PURE__ */ e.jsx("p", { className: "italic my-4", children: i }),
          g,
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mt-4", children: [
            l && /* @__PURE__ */ e.jsx("div", { className: `mr-4 ${v()}`, children: /* @__PURE__ */ e.jsx("img", { src: l, alt: b, className: t }) }),
            (s || o) && /* @__PURE__ */ e.jsxs("div", { children: [
              s && /* @__PURE__ */ e.jsx("div", { className: "font-semibold", children: s }),
              o && /* @__PURE__ */ e.jsx("div", { className: "text-sm opacity-75", children: o })
            ] })
          ] })
        ] });
    }
  }, A = W({
    theme: h,
    size: p,
    layout: j,
    animation: m,
    hoverEffect: L,
    className: M
  }), G = () => ({
    float: "animate-float",
    pulse: "animate-pulse",
    glow: "animate-glow",
    shimmer: "animate-shimmer"
  })[m] || "";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: w,
      className: P(A, G()),
      style: F(),
      onMouseMove: Y,
      onMouseLeave: X,
      ...B,
      children: $()
    }
  );
};
export {
  te as Testimonial3D,
  W as testimonialVariants
};
//# sourceMappingURL=index.esm7.js.map
