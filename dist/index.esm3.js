import { j as e } from "./index.esm23.js";
import { memo as de, forwardRef as le, useRef as ie, useState as j, useEffect as ce } from "react";
import { cva as b } from "class-variance-authority";
import { useTheme as ue } from "./index.esm19.js";
import { Check as fe, X as be, EyeOff as pe, Eye as me } from "lucide-react";
const xe = b(
  "relative transition-all duration-200",
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      }
    },
    defaultVariants: {
      fullWidth: !0
    }
  }
), ge = b(
  "block text-sm font-medium transition-all duration-200",
  {
    variants: {
      state: {
        default: "text-foreground-secondary",
        error: "text-red-500",
        success: "text-green-500",
        focused: "text-primary-base"
      },
      effect: {
        none: "mb-1.5",
        float: "transform origin-top-left absolute left-0 top-0"
      },
      variant: {
        default: "",
        filled: "",
        outline: "",
        underline: "",
        glass: "text-foreground-secondary",
        "glass-premium": "text-foreground-primary",
        "glass-frost": "text-foreground-primary/90"
      }
    },
    defaultVariants: {
      state: "default",
      effect: "none",
      variant: "default"
    }
  }
), he = b(
  // Base styles - improved focus handling and transitions
  "w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 placeholder:opacity-60",
  {
    variants: {
      // Input variants with enhanced glassmorphism options
      variant: {
        // Default input
        default: "bg-background-secondary border border-border focus:border-border-focus text-foreground-primary",
        // Filled input with improved hover/focus states
        filled: "bg-background-tertiary border border-transparent hover:bg-background-secondary focus:bg-background-secondary focus:border-border-focus text-foreground-primary",
        // Outline input with transparent background
        outline: "bg-transparent border border-border focus:border-border-focus text-foreground-primary",
        // Underline input (only bottom border)
        underline: "bg-transparent border-0 border-b-2 border-border rounded-none focus:border-border-focus text-foreground-primary",
        // Glass effect input - standard
        glass: "backdrop-blur-md bg-white/10 border border-white/10 focus:border-white/30 text-foreground-primary placeholder:text-foreground-secondary/70",
        // Premium glass effect - enhanced blur and better borders
        "glass-premium": "backdrop-blur-xl bg-white/5 border border-white/20 focus:border-white/40 text-white placeholder:text-white/60",
        // Frosted glass effect - more opacity
        "glass-frost": "backdrop-blur-xl bg-white/10 border-t border-l border-white/30 border-r border-b border-white/10 text-white placeholder:text-white/60",
        // Dark glass effect - darker background
        "glass-dark": "backdrop-blur-md bg-black/40 border border-white/10 focus:border-white/30 text-white placeholder:text-white/60",
        // Gradient glass effect
        "glass-gradient": "backdrop-blur-md bg-gradient-to-br from-primary/10 to-accent-purple/10 border border-white/20 focus:border-white/40 text-white placeholder:text-white/60",
        // Solid input
        solid: "bg-background-tertiary border border-border focus:border-border-focus text-foreground-primary",
        // Modern minimalist style
        modern: "bg-background-secondary/50 border-none shadow-sm focus:shadow-md text-foreground-primary",
        // Material design inspired
        material: "bg-transparent border-b-2 border-border px-0 focus:border-primary text-foreground-primary",
        // Neumorphic light
        "neumorphic-light": "bg-[#e0e5ec] text-gray-700 border-none shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff] focus:shadow-[inset_1px_1px_2px_#b8b9be,inset_-1px_-1px_2px_#fff]",
        // Neumorphic dark
        "neumorphic-dark": "bg-[#2a2d3e] text-gray-100 border-none shadow-[inset_2px_2px_5px_#1e2030,inset_-3px_-3px_7px_#363b50] focus:shadow-[inset_1px_1px_2px_#1e2030,inset_-1px_-1px_2px_#363b50]"
      },
      // Input padding with more options
      padding: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2.5 py-1.5 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-2.5 text-lg",
        xl: "px-5 py-3 text-xl"
      },
      // Input roundedness with more options
      rounded: {
        none: "rounded-none",
        xs: "rounded-sm",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full"
      },
      // Enhanced special effects
      effect: {
        none: "",
        glow: "focus:shadow-blue-glow focus:border-primary/70",
        "purple-glow": "focus:shadow-purple-glow focus:border-purple-500/70",
        "cyan-glow": "focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] focus:border-cyan-500/70",
        "multi-glow": "focus:shadow-multi-glow",
        gradientBorder: "gradient-border-1",
        rainbowBorder: "rainbow-border-1",
        shimmer: "overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full focus:after:animate-shimmer-contained after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
        float: "focus:-translate-y-1 focus:shadow-md",
        scale: "focus:scale-[1.02] origin-center",
        "focus-ring": "focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      },
      // Input state - combined with variant
      state: {
        default: "",
        error: "border-red-500/70 focus:border-red-500 focus:ring-red-500/50",
        success: "border-green-500/70 focus:border-green-500 focus:ring-green-500/50",
        focused: "border-primary-base"
      },
      // Input size - height control for better vertical alignment
      size: {
        xs: "h-7",
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
        xl: "h-14"
      }
    },
    compoundVariants: [
      // Glass effect with glow combinations
      {
        variant: "glass",
        effect: "glow",
        className: "focus:shadow-blue-glow focus:border-blue-400/50"
      },
      {
        variant: "glass-premium",
        effect: "glow",
        className: "focus:shadow-blue-glow focus:border-blue-400/50"
      },
      {
        variant: "glass-frost",
        effect: "purple-glow",
        className: "focus:shadow-purple-glow focus:border-purple-400/50"
      },
      {
        variant: "glass-dark",
        effect: "glow",
        className: "focus:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      },
      // Error states with appropriate focus colors
      {
        state: "error",
        effect: "glow",
        className: "focus:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
      },
      {
        state: "success",
        effect: "glow",
        className: "focus:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
      },
      // Specific variants for material design
      {
        variant: "material",
        state: "focused",
        className: "border-b-primary-base"
      },
      // Neumorphic with state combos
      {
        variant: ["neumorphic-light", "neumorphic-dark"],
        state: "error",
        className: "shadow-[inset_0_0_5px_rgba(239,68,68,0.5)]"
      },
      {
        variant: ["neumorphic-light", "neumorphic-dark"],
        state: "success",
        className: "shadow-[inset_0_0_5px_rgba(34,197,94,0.5)]"
      }
    ],
    defaultVariants: {
      variant: "default",
      padding: "md",
      rounded: "md",
      effect: "none",
      state: "default",
      size: "md"
    }
  }
), we = b(
  "mt-1.5 text-sm transition-all",
  {
    variants: {
      state: {
        default: "text-foreground-tertiary",
        error: "text-red-500",
        success: "text-green-500"
      }
    },
    defaultVariants: {
      state: "default"
    }
  }
), ye = de(le(({
  // Input appearance props
  variant: p,
  padding: T,
  rounded: m,
  effect: x,
  size: W,
  className: H = "",
  wrapperClassName: O = "",
  labelClassName: D = "",
  helperTextClassName: X = "",
  // Input functionality props
  type: t = "text",
  error: n,
  success: d,
  label: i,
  helperText: k,
  leftIcon: g,
  rightIcon: a,
  prefix: h,
  suffix: l,
  fullWidth: q = !0,
  floatingLabel: c = !1,
  clearable: V = !1,
  showPasswordToggle: A = !0,
  // Animation related props
  animated: _e = !0,
  // Event handlers with performance optimizations
  onChange: u,
  onFocus: C,
  onBlur: E,
  // Other props
  ...s
}, G) => {
  const I = ie(null), o = G || I, [w, J] = j(!1), [R, z] = j(!1), [y, _] = j(!!s.value || !!s.defaultValue), { theme: S, themeObject: ve } = ue();
  let f = p, v = m, N = x, K = W;
  S === "techDark" && !p ? (f = "filled", m || (v = "md"), x || (N = "none")) : S === "glass" && !p && (f = "glass-premium", m || (v = "lg"), x || (N = "glow"));
  const L = t === "password" && w ? "text" : t, $ = n ? "error" : d ? "success" : R ? "focused" : "default", M = $, Q = c ? "float" : "none", U = c ? `${y || R ? "text-xs transform -translate-y-7" : "text-base transform translate-y-2"} pointer-events-none absolute left-3 transition-all duration-200` : "", Y = he({
    variant: f,
    padding: T,
    rounded: v,
    effect: N,
    state: $,
    size: K,
    className: `${g || h ? "pl-10" : ""} ${t === "password" || a || l || V && y ? "pr-10" : ""} ${H}`
  }), Z = xe({
    fullWidth: q,
    className: O
  }), F = ge({
    state: M,
    effect: Q,
    variant: f,
    className: `${U} ${D}`
  }), ee = we({
    state: n ? "error" : d ? "success" : "default",
    className: X
  }), re = () => {
    J((r) => !r);
  }, te = (r) => {
    _(!!r.target.value), u && u(r);
  }, se = (r) => {
    z(!0), C && C(r);
  }, ae = (r) => {
    z(!1), E && E(r);
  }, oe = () => {
    if (o.current) {
      o.current.value = "";
      const r = new Event("change", { bubbles: !0 });
      if (o.current.dispatchEvent(r), o.current.focus(), _(!1), u) {
        const ne = { target: o.current };
        u(ne);
      }
    }
  };
  ce(() => {
    _(!!s.value);
  }, [s.value]);
  const B = d && !a && !l && t !== "password", P = n && !a && !l && t !== "password";
  return /* @__PURE__ */ e.jsxs("div", { className: Z, children: [
    i && !c && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: s.id,
        className: F,
        children: i
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      i && c && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: s.id,
          className: F,
          children: i
        }
      ),
      g && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-tertiary", children: g }),
      h && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-tertiary", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: h }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: o,
          type: L,
          className: Y,
          onChange: te,
          onFocus: se,
          onBlur: ae,
          ...s
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center gap-2", children: [
        B && /* @__PURE__ */ e.jsx(fe, { className: "h-4 w-4 text-green-500" }),
        P && /* @__PURE__ */ e.jsx("div", { className: "text-red-500", children: "!" }),
        V && y && !B && !P && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: oe,
            className: "text-foreground-tertiary hover:text-foreground-secondary transition-colors",
            tabIndex: -1,
            children: /* @__PURE__ */ e.jsx(be, { size: 16 })
          }
        ),
        t === "password" && A && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: re,
            className: "text-foreground-tertiary hover:text-foreground-secondary transition-colors",
            tabIndex: -1,
            "aria-label": w ? "Hide password" : "Show password",
            children: w ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(me, { size: 18 })
          }
        ),
        t !== "password" && a && /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none text-foreground-tertiary", children: a }),
        t !== "password" && l && !a && /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none text-foreground-tertiary text-sm", children: l })
      ] })
    ] }),
    (n || d || k) && /* @__PURE__ */ e.jsx("p", { className: ee, children: n || d || k })
  ] });
}));
ye.displayName = "Input";
export {
  ye as default
};
//# sourceMappingURL=index.esm3.js.map
