import { j as r } from "./index.esm23.js";
import { useState as j, useRef as S, useEffect as k } from "react";
import { cva as C } from "class-variance-authority";
import { useTheme as Q } from "./index.esm19.js";
import { ChevronLeft as U, ChevronRight as Y } from "lucide-react";
const Z = C(
  // Base styles
  "relative overflow-hidden",
  {
    variants: {
      // Carousel variants
      variant: {
        // Default carousel
        default: "bg-background-primary",
        // Elevated carousel
        elevated: "bg-background-primary shadow-lg rounded-lg",
        // Glass effect carousel
        glass: "backdrop-blur-md bg-white/10 rounded-lg border border-white/20",
        // Glass premium carousel
        "glass-premium": "backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 shadow-lg",
        // Dark mode carousel
        dark: "bg-gray-900 rounded-lg border border-gray-800"
      },
      // Sizes for the carousel
      size: {
        sm: "max-w-md",
        md: "max-w-2xl",
        lg: "max-w-4xl",
        xl: "max-w-6xl",
        full: "w-full"
      },
      // Rounded corners
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl"
      },
      // Padding options
      padding: {
        none: "p-0",
        sm: "p-1",
        md: "p-2",
        lg: "p-4"
      },
      // Special effects
      effect: {
        none: "",
        glow: "shadow-blue-glow",
        "purple-glow": "shadow-purple-glow",
        "multi-glow": "shadow-multi-glow",
        float: "animate-float"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "lg",
      padding: "none",
      effect: "none"
    }
  }
), T = C(
  // Base styles
  "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-all",
  {
    variants: {
      // Button variants based on parent carousel variant
      variant: {
        // Default buttons
        default: "bg-background-secondary hover:bg-background-tertiary text-foreground-primary",
        // Elevated buttons
        elevated: "bg-background-secondary hover:bg-background-tertiary text-foreground-primary shadow-md",
        // Glass effect buttons
        glass: "backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/20",
        // Glass premium buttons
        "glass-premium": "backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border border-white/10",
        // Dark mode buttons
        dark: "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700"
      },
      // Button sizes
      size: {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12"
      },
      // Position: prev or next
      position: {
        prev: "left-2",
        next: "right-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      position: "prev"
    }
  }
), I = C(
  // Base styles
  "absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 p-1.5 rounded-full",
  {
    variants: {
      // Container variants based on parent carousel variant
      variant: {
        // Default container
        default: "bg-background-secondary/80",
        // Elevated container
        elevated: "bg-background-secondary/80 shadow-sm",
        // Glass effect container
        glass: "backdrop-blur-md bg-white/10 border border-white/20",
        // Glass premium container
        "glass-premium": "backdrop-blur-xl bg-white/10 border border-white/10",
        // Dark mode container
        dark: "bg-gray-800/80"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ee = C(
  // Base styles
  "w-2 h-2 rounded-full transition-all",
  {
    variants: {
      // Indicator variants based on parent carousel variant
      variant: {
        // Default indicator
        default: "bg-foreground-tertiary",
        // Elevated indicator
        elevated: "bg-foreground-tertiary",
        // Glass effect indicator
        glass: "bg-white/50",
        // Glass premium indicator
        "glass-premium": "bg-white/50",
        // Dark mode indicator
        dark: "bg-gray-500"
      },
      // Active state
      active: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      // Active state for each variant
      { variant: "default", active: !0, className: "bg-primary w-4" },
      { variant: "elevated", active: !0, className: "bg-primary w-4" },
      { variant: "glass", active: !0, className: "bg-white w-4" },
      { variant: "glass-premium", active: !0, className: "bg-white w-4" },
      { variant: "dark", active: !0, className: "bg-gray-200 w-4" }
    ],
    defaultVariants: {
      variant: "default",
      active: !1
    }
  }
), te = (i, o, d, n, g, c) => {
  let m = o, y = d, u = n, b = g, h = c;
  return i === "techDark" && !o ? (m = "dark", n || (u = "xl"), c || (h = "none")) : i === "glass" && !o && (m = "glass-premium", n || (u = "xl"), g || (b = "sm"), c || (h = "glow")), {
    variant: m,
    size: y,
    rounded: u,
    padding: b,
    effect: h
  };
}, ie = ({
  // Carousel appearance props
  variant: i,
  size: o,
  rounded: d,
  padding: n,
  effect: g,
  className: c = "",
  style: m = {},
  // Carousel configuration props
  children: y,
  autoPlay: u = !1,
  autoPlayInterval: b = 5e3,
  showArrows: h = !0,
  showIndicators: A = !0,
  loop: V = !0,
  initialIndex: v = 0,
  navButtonSize: $ = "md",
  gap: p = 0,
  // Other props
  ...L
}) => {
  const { theme: B } = Q(), [a, f] = j(v), [z, W] = j(0), [s, D] = j(0), l = S(null), w = S(null), {
    variant: x,
    size: P,
    rounded: X,
    padding: F,
    effect: G
  } = te(B, i, o, d, n, g);
  k(() => {
    if (!l.current) return;
    const e = Array.from(l.current.children);
    if (D(e.length), e.length > 0 && w.current) {
      const t = w.current.offsetWidth;
      W(t), e.forEach((N) => {
        N.style.minWidth = `${t}px`, N.style.maxWidth = `${t}px`;
      });
    }
    v > 0 && v < e.length && f(v);
  }, [y, v]), k(() => {
    if (!l.current || z === 0) return;
    const e = -a * (z + p);
    l.current.style.transform = `translateX(${e}px)`;
  }, [a, z, p]), k(() => {
    if (!u || s <= 1) return;
    const e = setInterval(() => {
      E();
    }, b);
    return () => clearInterval(e);
  }, [u, b, a, s]), k(() => {
    const e = () => {
      if (!w.current || !l.current) return;
      const t = w.current.offsetWidth;
      W(t), Array.from(l.current.children).forEach((R) => {
        R.style.minWidth = `${t}px`, R.style.maxWidth = `${t}px`;
      });
      const O = -a * (t + p);
      l.current.style.transform = `translateX(${O}px)`;
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [a, p]);
  const _ = () => {
    a > 0 ? f(a - 1) : V && s > 0 && f(s - 1);
  }, E = () => {
    a < s - 1 ? f(a + 1) : V && s > 0 && f(0);
  }, q = (e) => {
    e >= 0 && e < s && f(e);
  }, H = Z({
    variant: x,
    size: P,
    rounded: X,
    padding: F,
    effect: G,
    className: c
  }), J = T({
    variant: x,
    size: $,
    position: "prev"
  }), K = T({
    variant: x,
    size: $,
    position: "next"
  }), M = I({
    variant: x
  });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: w,
      className: H,
      style: m,
      ...L,
      children: [
        h && s > 1 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: J,
              onClick: _,
              "aria-label": "Previous slide",
              children: /* @__PURE__ */ r.jsx(U, {})
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: K,
              onClick: E,
              "aria-label": "Next slide",
              children: /* @__PURE__ */ r.jsx(Y, {})
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: l,
            className: "flex transition-transform duration-300 ease-in-out",
            style: { gap: `${p}px` },
            children: y
          }
        ),
        A && s > 1 && /* @__PURE__ */ r.jsx("div", { className: M, children: Array.from({ length: s }).map((e, t) => /* @__PURE__ */ r.jsx(
          "button",
          {
            className: ee({
              variant: x,
              active: t === a
            }),
            onClick: () => q(t),
            "aria-label": `Go to slide ${t + 1}`,
            "aria-current": t === a ? "true" : "false"
          },
          t
        )) })
      ]
    }
  );
}, le = ({
  className: i = "",
  children: o,
  ...d
}) => {
  const n = `relative h-full flex-shrink-0 ${i}`;
  return /* @__PURE__ */ r.jsx("div", { className: n, ...d, children: o });
}, de = ({
  className: i = "",
  position: o = "bottom",
  children: d,
  ...n
}) => {
  const c = `absolute ${{
    bottom: "bottom-0 left-0 right-0",
    top: "top-0 left-0 right-0",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0"
  }[o]} p-4 ${i}`;
  return /* @__PURE__ */ r.jsx("div", { className: c, ...n, children: d });
};
export {
  ie as Carousel,
  de as CarouselCaption,
  le as CarouselSlide
};
//# sourceMappingURL=index.esm14.js.map
