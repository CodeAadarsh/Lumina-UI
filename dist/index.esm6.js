import { j as h } from "./index.esm23.js";
import { useState as m, useRef as b, useEffect as A } from "react";
import { cva as N } from "class-variance-authority";
import { useSafeTheme as G } from "./index.esm24.js";
import { cn as p } from "./index.esm21.js";
const S = N(
  "relative inline-block",
  // Base styles
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-gray-900",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-800",
        glow: "text-white",
        "3d": "text-gray-900 dark:text-white"
      },
      // Size variants
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl"
      },
      // Weight variants
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      },
      // Cursor variants
      cursor: {
        bar: "",
        block: "",
        underscore: "",
        none: ""
      },
      // Additional effect variants
      effect: {
        none: "",
        glow: "",
        gradient: "",
        shadow: ""
      },
      // Speed variants
      speed: {
        slow: "",
        normal: "",
        fast: ""
      }
    },
    // Compound variants
    compoundVariants: [
      // Effect specifics for different themes
      {
        effect: "glow",
        theme: "enterprise",
        className: "text-shadow-blue"
      },
      {
        effect: "glow",
        theme: "techDark",
        className: "text-shadow-purple"
      },
      {
        effect: "glow",
        theme: "glass",
        className: "text-shadow-white"
      },
      {
        effect: "glow",
        theme: "neumorphicLight",
        className: "text-shadow-blue-light"
      },
      {
        effect: "glow",
        theme: "glow",
        className: "text-shadow-blue-strong"
      },
      {
        effect: "gradient",
        theme: "enterprise",
        className: "bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text"
      },
      {
        effect: "gradient",
        theme: "techDark",
        className: "bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
      },
      {
        effect: "gradient",
        theme: "glass",
        className: "bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text"
      },
      {
        effect: "gradient",
        theme: "neumorphicLight",
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      },
      {
        effect: "gradient",
        theme: "glow",
        className: "bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      },
      {
        effect: "shadow",
        theme: "enterprise",
        className: "drop-shadow-md"
      },
      {
        effect: "shadow",
        theme: "techDark",
        className: "drop-shadow-lg"
      },
      {
        effect: "shadow",
        theme: "glass",
        className: "drop-shadow-xl"
      }
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      weight: "normal",
      cursor: "bar",
      effect: "none",
      speed: "normal"
    }
  }
), M = N(
  "inline-block",
  // Base styles
  {
    variants: {
      theme: {
        enterprise: "bg-blue-500",
        techDark: "bg-purple-500",
        glass: "bg-white",
        neumorphicLight: "bg-blue-500",
        glow: "bg-blue-500",
        "3d": "bg-blue-500 dark:bg-blue-400"
      },
      cursor: {
        bar: "h-4 w-1",
        block: "h-4 w-3",
        underscore: "h-1 w-4 align-bottom mb-0.5",
        none: "hidden"
      },
      effect: {
        none: "",
        glow: "shadow-glow",
        gradient: "",
        shadow: ""
      }
    },
    compoundVariants: [
      {
        effect: "glow",
        theme: "enterprise",
        className: "shadow-blue-glow"
      },
      {
        effect: "glow",
        theme: "techDark",
        className: "shadow-purple-glow"
      },
      {
        effect: "glow",
        theme: "glass",
        className: "shadow-white-glow"
      },
      {
        effect: "glow",
        theme: "glow",
        className: "shadow-blue-glow-strong"
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      cursor: "bar",
      effect: "none"
    }
  }
), J = ({
  words: g,
  className: k,
  theme: v,
  size: y,
  weight: T,
  cursor: w,
  effect: f,
  speed: r,
  onComplete: s,
  loop: u = !1,
  delay: d = 0,
  typingDelay: o,
  ...j
}) => {
  const { theme: I } = G(), x = v || I, [V, l] = m([]), [D, n] = m(!1), [i, L] = m(!0), t = b(null), e = b(null), P = () => {
    if (o !== void 0) return o;
    const a = {
      slow: 80,
      normal: 30,
      fast: 10
    };
    return a[r] || a.normal;
  };
  A(() => {
    if (i)
      return l([]), n(!1), t.current && clearTimeout(t.current), e.current && clearInterval(e.current), t.current = window.setTimeout(() => {
        const a = g.split("");
        let c = -1;
        e.current = window.setInterval(() => {
          c++, l((z) => [...z, a[c]]), c === a.length - 1 && (e.current && clearInterval(e.current), n(!0), s && s(), u && (t.current = window.setTimeout(() => {
            l([]), n(!1);
          }, 2e3)));
        }, P());
      }, d), () => {
        t.current && clearTimeout(t.current), e.current && clearInterval(e.current);
      };
  }, [g, i, u, d, r, s, o]);
  const R = S({
    theme: x,
    size: y,
    weight: T,
    cursor: w,
    effect: f,
    speed: r,
    className: k
  }), C = M({
    theme: x,
    cursor: w,
    effect: f
  }), E = () => {
    L(!i);
  };
  return /* @__PURE__ */ h.jsxs("span", { className: p(R), onClick: E, ...j, children: [
    V.join(""),
    !D && /* @__PURE__ */ h.jsx(
      "span",
      {
        className: p(C, "ml-1 animate-blink"),
        style: {
          animation: "blink 0.8s infinite"
        }
      }
    ),
    /* @__PURE__ */ h.jsx("style", { jsx: !0, global: !0, children: `
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .text-shadow-blue {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }
        .text-shadow-purple {
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
        }
        .text-shadow-white {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        .text-shadow-blue-light {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
        }
        .text-shadow-blue-strong {
          text-shadow: 0 0 12px rgba(59, 130, 246, 0.8);
        }
        .shadow-blue-glow {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        .shadow-purple-glow {
          box-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
        }
        .shadow-white-glow {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
        .shadow-blue-glow-strong {
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
        }
      ` })
  ] });
};
export {
  J as TextGenerateEffect,
  S as textGenerateVariants
};
//# sourceMappingURL=index.esm6.js.map
