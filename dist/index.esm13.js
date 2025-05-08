import { j as e } from "./index.esm23.js";
import { useState as p, useRef as A, useEffect as u } from "react";
import { cva as i } from "class-variance-authority";
import { useSafeTheme as B } from "./index.esm24.js";
import { cn as q } from "./index.esm21.js";
const E = i(
  // Base styles for all Testimonial components
  "relative w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-4 py-12",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-gray-800",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-700",
        glow: "text-white",
        "3d": "text-gray-900 dark:text-white"
      }
    },
    defaultVariants: {
      theme: "techDark"
    }
  }
), R = i(
  "w-full md:w-3/5 flex flex-col justify-center md:pr-8",
  {
    variants: {
      theme: {
        enterprise: "text-gray-800",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-700",
        glow: "text-white",
        "3d": "text-gray-900 dark:text-white"
      }
    },
    defaultVariants: {
      theme: "techDark"
    }
  }
), S = i(
  "relative w-full md:w-2/5 flex items-center justify-center py-8",
  {
    variants: {
      theme: {
        enterprise: "",
        techDark: "",
        glass: "",
        neumorphicLight: "",
        glow: "",
        "3d": ""
      }
    },
    defaultVariants: {
      theme: "techDark"
    }
  }
), M = i(
  "absolute overflow-hidden transition-all duration-900 ease-out transform-gpu rounded-3xl shadow-lg",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white border border-gray-200 shadow-xl",
        techDark: "bg-gray-900 border border-gray-800 shadow-2xl",
        glass: "glass-effect border border-white/30 shadow-xl backdrop-blur-lg",
        neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none",
        glow: "bg-gray-900/90 border border-blue-500/30 shadow-2xl shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
        "3d": "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl"
      },
      // Card position variants
      position: {
        front: "z-30 rotate-0 translate-y-0 translate-x-0 scale-100 opacity-100",
        middle: "z-20 rotate-[-8deg] translate-y-[8%] translate-x-[-8%] scale-[0.9] opacity-75",
        back: "z-10 rotate-[-16deg] translate-y-[16%] translate-x-[-16%] scale-[0.8] opacity-50",
        hidden: "opacity-0 translate-x-[60%] scale-[0.7] z-0"
      }
    },
    compoundVariants: [
      // Special styling for front card in each theme
      {
        theme: "enterprise",
        position: "front",
        className: "shadow-2xl"
      },
      {
        theme: "techDark",
        position: "front",
        className: "shadow-purple-glow"
      },
      {
        theme: "glass",
        position: "front",
        className: "shadow-white-glow border-white/50"
      },
      {
        theme: "neumorphicLight",
        position: "front",
        className: "shadow-[30px_30px_80px_#bebebe,-30px_-30px_80px_#ffffff]"
      },
      {
        theme: "glow",
        position: "front",
        className: "animate-glow border-blue-500/50"
      },
      {
        theme: "3d",
        position: "front",
        className: "shadow-2xl"
      }
    ],
    defaultVariants: {
      theme: "techDark",
      position: "front"
    }
  }
), P = i(
  "mb-8 p-6 rounded-lg",
  {
    variants: {
      theme: {
        enterprise: "bg-white/5 border border-gray-200/20",
        techDark: "bg-gray-800/30 border border-gray-700/30",
        glass: "bg-white/10 backdrop-blur-sm border border-white/10",
        neumorphicLight: "bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]",
        glow: "bg-gray-800/40 border border-blue-500/20",
        "3d": "bg-white/10 dark:bg-gray-800/40 border border-gray-200/20 dark:border-gray-700/30"
      }
    },
    defaultVariants: {
      theme: "techDark"
    }
  }
), y = i(
  "flex items-center justify-center w-10 h-10 rounded-full focus:outline-none transition-all duration-300",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white text-gray-800 border border-gray-200 shadow-md hover:shadow-lg hover:bg-gray-50",
        techDark: "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700",
        glass: "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30",
        neumorphicLight: "bg-[#e0e5ec] text-gray-700 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]",
        glow: "bg-gray-900 text-white border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        "3d": "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg"
      }
    },
    defaultVariants: {
      theme: "techDark"
    }
  }
), H = ({
  testimonials: s,
  className: _,
  theme: v,
  autoplay: g = !0,
  autoplaySpeed: x = 5e3,
  ...k
}) => {
  const { theme: j } = B(), a = v || j || "techDark", [o, b] = p(0), [l, d] = p(!1), n = A(null), h = () => {
    l || (d(!0), b((t) => (t + 1) % s.length), setTimeout(() => {
      d(!1);
    }, 900));
  }, f = () => {
    l || (d(!0), b((t) => (t - 1 + s.length) % s.length), setTimeout(() => {
      d(!1);
    }, 900));
  };
  u(() => (g && (n.current = setInterval(() => {
    h();
  }, x)), () => {
    n.current && clearInterval(n.current);
  }), [g, x, o, l]);
  const c = () => {
    g && n.current && (clearInterval(n.current), n.current = setInterval(() => {
      h();
    }, x));
  }, N = (t) => {
    const r = s.length;
    return t === o ? "front" : t === (o + 1) % r ? "middle" : t === (o + 2) % r ? "back" : "hidden";
  };
  u(() => {
    const t = (r) => {
      r.key === "ArrowLeft" ? (f(), c()) : r.key === "ArrowRight" && (h(), c());
    };
    return window.addEventListener("keydown", t), () => {
      window.removeEventListener("keydown", t);
    };
  }, [o, l]);
  const C = E({
    theme: a,
    className: _
  }), D = R({
    theme: a
  }), L = S({
    theme: a
  }), V = P({
    theme: a
  }), T = y({
    theme: a
  }), I = y({
    theme: a
  }), m = s[o];
  return /* @__PURE__ */ e.jsxs("div", { className: C, ...k, children: [
    /* @__PURE__ */ e.jsxs("div", { className: D, children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-4xl font-bold mb-2", children: m.name }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xl opacity-80 mb-6", children: m.title }),
        /* @__PURE__ */ e.jsx("div", { className: V, children: /* @__PURE__ */ e.jsx("p", { className: "text-2xl leading-relaxed", children: m.quote }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-4", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: T,
            onClick: () => {
              f(), c();
            },
            "aria-label": "Previous testimonial",
            children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e.jsx("path", { d: "M15 18l-6-6 6-6" }) })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: I,
            onClick: () => {
              h(), c();
            },
            "aria-label": "Next testimonial",
            children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e.jsx("path", { d: "M9 18l6-6-6-6" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: L, children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full max-w-[350px] aspect-square", children: s.map((t, r) => {
      const w = N(r), z = M({
        theme: a,
        position: w
      });
      return w === "hidden" ? null : /* @__PURE__ */ e.jsx(
        "div",
        {
          className: q(z),
          style: {
            width: "100%",
            height: "100%",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            transformOrigin: "bottom left"
          },
          children: t.image && /* @__PURE__ */ e.jsx(
            "img",
            {
              src: t.image,
              alt: t.name,
              className: "w-full h-full object-cover"
            }
          )
        },
        r
      );
    }) }) })
  ] });
};
export {
  H as AnimatedTestimonialSlider,
  E as testimonialSliderVariants
};
//# sourceMappingURL=index.esm13.js.map
