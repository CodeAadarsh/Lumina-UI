import { j as e } from "./index.esm23.js";
import { memo as k, forwardRef as N, useState as b, useEffect as M } from "react";
import { cva as p } from "class-variance-authority";
import { useSafeTheme as C } from "./index.esm24.js";
import { cn as w } from "./index.esm21.js";
const F = p(
  // Base styles for all Header components
  "w-full py-4 px-4 md:px-6 transition-all",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary border-b border-border shadow-sm",
        techDark: "bg-background-primary border-b border-border",
        glass: "backdrop-blur-md border-b border-border/30"
      },
      // Position variants
      position: {
        static: "relative",
        sticky: "sticky top-0 z-50",
        fixed: "fixed top-0 left-0 right-0 z-50"
      },
      // Size variants
      size: {
        sm: "py-2",
        md: "py-4",
        lg: "py-6"
      },
      // Container width
      width: {
        full: "w-full",
        contained: "w-full max-w-7xl mx-auto"
      },
      // Extra visual styles
      variant: {
        default: "",
        transparent: "bg-transparent border-transparent",
        colored: "",
        elevated: "shadow-md"
      }
    },
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        variant: "colored",
        className: "bg-primary text-primary-foreground"
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        variant: "elevated",
        className: "shadow-lg bg-background-primary/90 backdrop-blur-sm"
      },
      // Glass theme specifics
      {
        theme: "glass",
        variant: "default",
        className: "bg-background-primary/70 backdrop-blur-md"
      },
      {
        theme: "glass",
        variant: "transparent",
        className: "bg-transparent backdrop-blur-md"
      },
      {
        theme: "glass",
        variant: "colored",
        className: "bg-primary/80 text-primary-foreground backdrop-blur-md"
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      position: "static",
      size: "md",
      width: "full",
      variant: "default"
    }
  }
), G = p(
  "hidden md:flex items-center space-x-1",
  {
    variants: {
      placement: {
        center: "justify-center",
        end: "justify-end",
        start: "justify-start",
        between: "justify-between"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      placement: "end",
      size: "md"
    }
  }
), J = p(
  "relative transition-colors duration-200 font-medium hover:text-foreground-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded",
  {
    variants: {
      theme: {
        enterprise: "text-foreground-secondary hover:text-foreground-primary",
        techDark: "text-foreground-secondary hover:text-foreground-primary",
        glass: "text-foreground-secondary hover:text-foreground-primary"
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2",
        lg: "px-4 py-3 text-lg"
      },
      active: {
        true: "",
        false: ""
      },
      variant: {
        default: "",
        subtle: "hover:bg-background-secondary/50",
        solid: "hover:bg-background-secondary",
        pill: "rounded-full"
      }
    },
    compoundVariants: [
      // Active state for enterprise theme
      {
        theme: "enterprise",
        active: !0,
        className: "text-primary font-semibold"
      },
      // Active state for tech dark theme
      {
        theme: "techDark",
        active: !0,
        className: "text-primary font-semibold"
      },
      // Active state for glass theme
      {
        theme: "glass",
        active: !0,
        className: "text-foreground-primary font-semibold"
      },
      // Pill variant active states
      {
        variant: "pill",
        active: !0,
        className: "bg-background-secondary"
      },
      // Solid variant active states
      {
        variant: "solid",
        active: !0,
        className: "bg-background-secondary"
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      active: !1,
      variant: "default"
    }
  }
), K = p(
  "md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary",
  {
    variants: {
      theme: {
        enterprise: "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary",
        techDark: "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary/50",
        glass: "text-foreground-secondary hover:text-foreground-primary hover:bg-white/10"
      },
      open: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        theme: "enterprise",
        open: !0,
        className: "text-foreground-primary bg-background-secondary"
      },
      {
        theme: "techDark",
        open: !0,
        className: "text-foreground-primary bg-background-secondary/50"
      },
      {
        theme: "glass",
        open: !0,
        className: "text-foreground-primary bg-white/10"
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      open: !1
    }
  }
), P = p(
  "md:hidden absolute left-0 right-0 z-20 p-4 transition-all duration-300 transform origin-top shadow-lg border-t border-border",
  {
    variants: {
      theme: {
        enterprise: "bg-background-primary",
        techDark: "bg-background-primary",
        glass: "bg-background-primary/90 backdrop-blur-md"
      },
      open: {
        true: "translate-y-0 opacity-100 visible",
        false: "-translate-y-4 opacity-0 invisible"
      }
    },
    defaultVariants: {
      theme: "enterprise",
      open: !1
    }
  }
), D = k(N(({
  children: t,
  className: o,
  theme: i,
  position: d,
  size: l,
  width: s,
  variant: n,
  logo: a,
  onLogoClick: c,
  hideOnScroll: m = !1,
  scrollThreshold: f = 50,
  mobileMenuBreakpoint: E = "md",
  transparent: g = !1,
  transparentColor: H = "white",
  ...Y
}, R) => {
  const { theme: W } = C(), x = i || W || "enterprise", [h, j] = b(!1), [O, V] = b(!1), [z, L] = b(!1), [I, U] = b(0), q = () => j((r) => !r);
  M(() => {
    const r = () => {
      window.innerWidth >= 768 && j(!1);
    };
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), M(() => {
    const r = () => {
      const u = window.scrollY;
      u > f ? V(!0) : V(!1), m && (u > I && u > 100 ? L(!0) : L(!1)), U(u);
    };
    return window.addEventListener("scroll", r, { passive: !0 }), () => window.removeEventListener("scroll", r);
  }, [m, I, f]);
  const v = g && !O, A = F({
    theme: x,
    position: d,
    size: l,
    width: s,
    variant: v ? "transparent" : n,
    className: w(o, {
      "translate-y-0": !z,
      "-translate-y-full": z
    })
  }), y = (r) => {
    c && (r.preventDefault(), c(r));
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      ref: R,
      className: A,
      style: {
        transition: "transform 0.3s ease",
        ...v && {
          "--transparent-color": H === "white" ? "white" : "var(--foreground-primary)"
        }
      },
      ...Y,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: w(
          "flex items-center justify-between w-full",
          s === "contained" && "max-w-7xl mx-auto px-4"
        ), children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center", children: typeof a == "string" ? /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "/",
              onClick: y,
              className: "focus:outline-none",
              children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: a,
                  alt: "Logo",
                  className: "h-8 w-auto"
                }
              )
            }
          ) : a ? /* @__PURE__ */ e.jsx("div", { onClick: y, children: a }) : /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "/",
              onClick: y,
              className: w(
                "text-xl font-bold",
                v ? "text-[var(--transparent-color)]" : "text-foreground-primary"
              ),
              children: "Lumina UI"
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "hidden md:flex items-center space-x-4", children: t }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              className: K({ theme: x, open: h }),
              "aria-expanded": h,
              onClick: q,
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Toggle menu" }),
                h ? /* @__PURE__ */ e.jsx("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: P({ theme: x, open: h }), children: /* @__PURE__ */ e.jsx("nav", { className: "flex flex-col space-y-2 py-2", children: t }) })
      ]
    }
  );
})), B = k(N(({
  children: t,
  className: o,
  placement: i,
  size: d,
  ...l
}, s) => {
  const n = G({
    placement: i,
    size: d,
    className: o
  });
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: s,
      className: n,
      ...l,
      children: t
    }
  );
})), S = k(N(({
  children: t,
  className: o,
  theme: i,
  size: d,
  active: l,
  variant: s,
  href: n,
  onClick: a,
  ...c
}, m) => {
  const { theme: f } = C(), g = J({
    theme: i || f || "enterprise",
    size: d,
    active: l,
    variant: s,
    className: o
  });
  return n ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ref: m,
      href: n,
      className: g,
      onClick: a,
      ...c,
      children: t
    }
  ) : /* @__PURE__ */ e.jsx(
    "button",
    {
      ref: m,
      type: "button",
      className: g,
      onClick: a,
      ...c,
      children: t
    }
  );
}));
D.displayName = "Header";
B.displayName = "Navigation";
S.displayName = "NavItem";
const T = D;
T.Navigation = B;
T.NavItem = S;
export {
  T as Header,
  F as headerVariants,
  J as navItemVariants,
  G as navVariants
};
//# sourceMappingURL=index.esm11.js.map
