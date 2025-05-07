import Ne, { useState as $, useEffect as K, createContext as ir, useContext as Xe, memo as se, useRef as J, forwardRef as ne, useCallback as ee } from "react";
import { cva as q } from "class-variance-authority";
import { Check as lr, X as dr, EyeOff as cr, Eye as ur, Palette as gr, Moon as mr, Sun as Fe, ChevronLeft as fr, ChevronRight as br } from "lucide-react";
import { motion as oe, AnimatePresence as Ee } from "framer-motion";
import { clsx as pr } from "clsx";
import { twMerge as hr } from "tailwind-merge";
import { createPortal as xr } from "react-dom";
var ke = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function wr() {
  if (Re) return ye;
  Re = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, c, l) {
    var i = null;
    if (l !== void 0 && (i = "" + l), c.key !== void 0 && (i = "" + c.key), "key" in c) {
      l = {};
      for (var u in c)
        u !== "key" && (l[u] = c[u]);
    } else l = c;
    return c = l.ref, {
      $$typeof: t,
      type: s,
      key: i,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return ye.Fragment = r, ye.jsx = o, ye.jsxs = o, ye;
}
var ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function yr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    function t(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === w ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case D:
          return "Fragment";
        case x:
          return "Profiler";
        case N:
          return "StrictMode";
        case z:
          return "Suspense";
        case V:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case L:
            return "Portal";
          case k:
            return (d.displayName || "Context") + ".Provider";
          case R:
            return (d._context.displayName || "Context") + ".Consumer";
          case v:
            var p = d.render;
            return d = d.displayName, d || (d = p.displayName || p.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case E:
            return p = d.displayName || null, p !== null ? p : t(d.type) || "Memo";
          case h:
            p = d._payload, d = d._init;
            try {
              return t(d(p));
            } catch {
            }
        }
      return null;
    }
    function r(d) {
      return "" + d;
    }
    function o(d) {
      try {
        r(d);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var m = p.error, S = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return m.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), r(d);
      }
    }
    function s(d) {
      if (d === D) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === h)
        return "<...>";
      try {
        var p = t(d);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var d = M.A;
      return d === null ? null : d.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (_.call(d, "key")) {
        var p = Object.getOwnPropertyDescriptor(d, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function u(d, p) {
      function m() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: m,
        configurable: !0
      });
    }
    function f() {
      var d = t(this.type);
      return I[d] || (I[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function n(d, p, m, S, F, Y, W, O) {
      return m = Y.ref, d = {
        $$typeof: b,
        type: d,
        key: p,
        props: Y,
        _owner: F
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function a(d, p, m, S, F, Y, W, O) {
      var X = p.children;
      if (X !== void 0)
        if (S)
          if (j(X)) {
            for (S = 0; S < X.length; S++)
              g(X[S]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(X);
      if (_.call(p, "key")) {
        X = t(d);
        var U = Object.keys(p).filter(function(Q) {
          return Q !== "key";
        });
        S = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", G[X + S] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          X,
          U,
          X
        ), G[X + S] = !0);
      }
      if (X = null, m !== void 0 && (o(m), X = "" + m), i(p) && (o(p.key), X = "" + p.key), "key" in p) {
        m = {};
        for (var re in p)
          re !== "key" && (m[re] = p[re]);
      } else m = p;
      return X && u(
        m,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), n(
        d,
        X,
        Y,
        F,
        c(),
        m,
        W,
        O
      );
    }
    function g(d) {
      typeof d == "object" && d !== null && d.$$typeof === b && d._store && (d._store.validated = 1);
    }
    var y = Ne, b = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), k = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), M = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, j = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var P, I = {}, B = y["react-stack-bottom-frame"].bind(
      y,
      l
    )(), H = T(s(l)), G = {};
    ve.Fragment = D, ve.jsx = function(d, p, m, S, F) {
      var Y = 1e4 > M.recentlyCreatedOwnerStacks++;
      return a(
        d,
        p,
        m,
        !1,
        S,
        F,
        Y ? Error("react-stack-top-frame") : B,
        Y ? T(s(d)) : H
      );
    }, ve.jsxs = function(d, p, m, S, F) {
      var Y = 1e4 > M.recentlyCreatedOwnerStacks++;
      return a(
        d,
        p,
        m,
        !0,
        S,
        F,
        Y ? Error("react-stack-top-frame") : B,
        Y ? T(s(d)) : H
      );
    };
  }()), ve;
}
var Ie;
function vr() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? ke.exports = wr() : ke.exports = yr()), ke.exports;
}
var e = vr();
const _r = {
  name: "Enterprise",
  colors: {
    background: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      tertiary: "#f1f3f5",
      overlay: "rgba(0, 0, 0, 0.5)"
    },
    foreground: {
      primary: "#111827",
      secondary: "#4b5563",
      tertiary: "#6b7280",
      quaternary: "#9ca3af"
    },
    border: {
      default: "#e5e7eb",
      strong: "#d1d5db",
      focus: "#3b82f6"
    },
    primary: {
      lighter: "#93c5fd",
      light: "#60a5fa",
      base: "#3b82f6",
      dark: "#2563eb",
      darker: "#1d4ed8",
      foreground: "#ffffff"
    },
    success: {
      lighter: "#a7f3d0",
      light: "#6ee7b7",
      base: "#10b981",
      dark: "#059669",
      darker: "#047857",
      foreground: "#ffffff"
    },
    warning: {
      lighter: "#fde68a",
      light: "#fcd34d",
      base: "#f59e0b",
      dark: "#d97706",
      darker: "#b45309",
      foreground: "#ffffff"
    },
    danger: {
      lighter: "#fecaca",
      light: "#f87171",
      base: "#ef4444",
      dark: "#dc2626",
      darker: "#b91c1c",
      foreground: "#ffffff"
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    accent: {
      blue: {
        base: "#3b82f6",
        foreground: "#ffffff"
      },
      purple: {
        base: "#8b5cf6",
        foreground: "#ffffff"
      },
      cyan: {
        base: "#06b6d4",
        foreground: "#ffffff"
      },
      pink: {
        base: "#ec4899",
        foreground: "#ffffff"
      }
    }
  },
  radii: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px"
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
    "blue-glow": "0 0 15px 2px rgba(59, 130, 246, 0.3)",
    "purple-glow": "0 0 15px 2px rgba(139, 92, 246, 0.3)"
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    }
  },
  animations: {
    durations: {
      fastest: "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      slowest: "500ms"
    },
    easings: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },
  spacing: {
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
  }
}, kr = {
  name: "Tech Dark",
  colors: {
    background: {
      primary: "#030711",
      secondary: "#111827",
      tertiary: "#1f2937",
      overlay: "rgba(0, 0, 0, 0.7)"
    },
    foreground: {
      primary: "#f9fafb",
      secondary: "#e5e7eb",
      tertiary: "#9ca3af",
      quaternary: "#6b7280"
    },
    border: {
      default: "#374151",
      strong: "#4b5563",
      focus: "#3b82f6"
    },
    primary: {
      lighter: "#60a5fa",
      light: "#3b82f6",
      base: "#2563eb",
      dark: "#1d4ed8",
      darker: "#1e40af",
      foreground: "#ffffff"
    },
    success: {
      lighter: "#6ee7b7",
      light: "#34d399",
      base: "#10b981",
      dark: "#059669",
      darker: "#047857",
      foreground: "#ffffff"
    },
    warning: {
      lighter: "#fcd34d",
      light: "#fbbf24",
      base: "#f59e0b",
      dark: "#d97706",
      darker: "#b45309",
      foreground: "#030711"
    },
    danger: {
      lighter: "#f87171",
      light: "#ef4444",
      base: "#dc2626",
      dark: "#b91c1c",
      darker: "#991b1b",
      foreground: "#ffffff"
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030711"
    },
    accent: {
      purple: {
        base: "#8b5cf6",
        foreground: "#ffffff"
      },
      blue: {
        base: "#3b82f6",
        foreground: "#ffffff"
      },
      cyan: {
        base: "#06b6d4",
        foreground: "#ffffff"
      },
      pink: {
        base: "#ec4899",
        foreground: "#ffffff"
      }
    }
  },
  radii: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px"
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)",
    none: "none",
    "blue-glow": "0 0 15px 2px rgba(59, 130, 246, 0.3)",
    "purple-glow": "0 0 15px 2px rgba(139, 92, 246, 0.3)",
    "cyan-glow": "0 0 15px 2px rgba(6, 182, 212, 0.3)",
    "pink-glow": "0 0 15px 2px rgba(236, 72, 153, 0.3)",
    "white-glow": "0 0 15px 2px rgba(255, 255, 255, 0.2)",
    "multi-glow": "0 0 15px 2px rgba(59, 130, 246, 0.3), 0 0 30px 4px rgba(139, 92, 246, 0.2)"
  },
  typography: {
    fontFamily: {
      sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    }
  },
  animations: {
    durations: {
      fastest: "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      slowest: "500ms"
    },
    easings: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    keyframes: {
      shimmer: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" }
      },
      pulse: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 }
      },
      glow: {
        "0%, 100%": { boxShadow: "0 0 15px 2px rgba(59, 130, 246, 0.3)" },
        "50%": { boxShadow: "0 0 20px 4px rgba(59, 130, 246, 0.5)" }
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" }
      }
    }
  },
  spacing: {
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  effects: {
    backdrop: {
      blur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px"
      }
    },
    border: {
      gradient: {
        primary: "linear-gradient(145deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.3))",
        rainbow: "linear-gradient(145deg, rgba(236, 72, 153, 0.5), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.5))"
      }
    }
  }
}, Nr = {
  name: "Glassmorphism",
  colors: {
    background: {
      primary: "rgba(15, 23, 42, 0.8)",
      secondary: "rgba(30, 41, 59, 0.7)",
      tertiary: "rgba(51, 65, 85, 0.6)",
      overlay: "rgba(0, 0, 0, 0.5)"
    },
    foreground: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.8)",
      tertiary: "rgba(255, 255, 255, 0.6)",
      quaternary: "rgba(255, 255, 255, 0.4)"
    },
    border: {
      default: "rgba(255, 255, 255, 0.1)",
      strong: "rgba(255, 255, 255, 0.2)",
      focus: "rgba(59, 130, 246, 0.5)"
    },
    primary: {
      lighter: "rgba(96, 165, 250, 0.8)",
      light: "rgba(59, 130, 246, 0.8)",
      base: "rgba(37, 99, 235, 0.8)",
      dark: "rgba(29, 78, 216, 0.8)",
      darker: "rgba(30, 64, 175, 0.8)",
      foreground: "#ffffff"
    },
    success: {
      lighter: "rgba(110, 231, 183, 0.8)",
      light: "rgba(52, 211, 153, 0.8)",
      base: "rgba(16, 185, 129, 0.8)",
      dark: "rgba(5, 150, 105, 0.8)",
      darker: "rgba(4, 120, 87, 0.8)",
      foreground: "#ffffff"
    },
    warning: {
      lighter: "rgba(252, 211, 77, 0.8)",
      light: "rgba(251, 191, 36, 0.8)",
      base: "rgba(245, 158, 11, 0.8)",
      dark: "rgba(217, 119, 6, 0.8)",
      darker: "rgba(180, 83, 9, 0.8)",
      foreground: "#ffffff"
    },
    danger: {
      lighter: "rgba(248, 113, 113, 0.8)",
      light: "rgba(239, 68, 68, 0.8)",
      base: "rgba(220, 38, 38, 0.8)",
      dark: "rgba(185, 28, 28, 0.8)",
      darker: "rgba(153, 27, 27, 0.8)",
      foreground: "#ffffff"
    },
    accent: {
      blue: {
        base: "rgba(59, 130, 246, 0.8)",
        foreground: "#ffffff"
      },
      purple: {
        base: "rgba(139, 92, 246, 0.8)",
        foreground: "#ffffff"
      },
      pink: {
        base: "rgba(236, 72, 153, 0.8)",
        foreground: "#ffffff"
      },
      cyan: {
        base: "rgba(6, 182, 212, 0.8)",
        foreground: "#ffffff"
      },
      amber: {
        base: "rgba(245, 158, 11, 0.8)",
        foreground: "#ffffff"
      }
    }
  },
  radii: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px"
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
    sm: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px 0 rgba(0, 0, 0, 0.15)",
    lg: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    xl: "0 12px 24px 0 rgba(0, 0, 0, 0.25)",
    "2xl": "0 16px 32px 0 rgba(0, 0, 0, 0.3)",
    inner: "inset 0 1px 4px 0 rgba(0, 0, 0, 0.1)",
    none: "none",
    "blue-glow": "0 0 15px 2px rgba(59, 130, 246, 0.6)",
    "purple-glow": "0 0 15px 2px rgba(139, 92, 246, 0.6)",
    "cyan-glow": "0 0 15px 2px rgba(6, 182, 212, 0.6)",
    "pink-glow": "0 0 15px 2px rgba(236, 72, 153, 0.6)",
    "amber-glow": "0 0 15px 2px rgba(245, 158, 11, 0.6)",
    "white-glow": "0 0 15px 2px rgba(255, 255, 255, 0.6)",
    "multi-glow": "0 0 20px 5px rgba(59, 130, 246, 0.5), 0 0 40px 8px rgba(139, 92, 246, 0.3)"
  },
  typography: {
    fontFamily: {
      sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    }
  },
  animations: {
    durations: {
      fastest: "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      slowest: "500ms"
    },
    easings: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    keyframes: {
      shimmer: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" }
      },
      pulse: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 }
      },
      glow: {
        "0%, 100%": { boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.5)" },
        "50%": { boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.8)" }
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" }
      }
    }
  },
  spacing: {
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  effects: {
    backdrop: {
      blur: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px"
      }
    },
    border: {
      glow: {
        blue: "0 0 5px rgba(59, 130, 246, 0.8)",
        purple: "0 0 5px rgba(139, 92, 246, 0.8)",
        white: "0 0 5px rgba(255, 255, 255, 0.8)"
      },
      gradient: {
        primary: "linear-gradient(145deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.3))",
        rainbow: "linear-gradient(145deg, rgba(236, 72, 153, 0.6), rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.6))"
      }
    }
  }
}, Pe = {
  enterprise: _r,
  techDark: kr,
  glass: Nr
}, Ae = "techDark", Se = (t) => Pe[t] || Pe[Ae], We = ir(void 0), Ue = ({
  children: t,
  theme: r = Ae,
  storageKey: o = "lumina-ui-theme"
}) => {
  const [s, c] = $(() => typeof window < "u" && localStorage.getItem(o) || r), l = Se(s);
  K(() => {
    typeof window < "u" && (localStorage.setItem(o, s), i(l));
  }, [s, l, o]);
  const i = (n) => {
    var g, y;
    const a = document.documentElement;
    a.classList.remove("theme-enterprise", "theme-techDark", "theme-glass"), a.classList.add(`theme-${s}`), a.style.setProperty("--background-primary", n.colors.background.primary), a.style.setProperty("--background-secondary", n.colors.background.secondary), a.style.setProperty("--background-tertiary", n.colors.background.tertiary), a.style.setProperty("--foreground-primary", n.colors.foreground.primary), a.style.setProperty("--foreground-secondary", n.colors.foreground.secondary), a.style.setProperty("--foreground-tertiary", n.colors.foreground.tertiary), a.style.setProperty("--foreground-quaternary", n.colors.foreground.quaternary), a.style.setProperty("--border-default", n.colors.border.default), a.style.setProperty("--border-strong", n.colors.border.strong), a.style.setProperty("--border-focus", n.colors.border.focus), a.style.setProperty("--primary-lighter", n.colors.primary.lighter), a.style.setProperty("--primary-light", n.colors.primary.light), a.style.setProperty("--primary-base", n.colors.primary.base), a.style.setProperty("--primary-dark", n.colors.primary.dark), a.style.setProperty("--primary-darker", n.colors.primary.darker), a.style.setProperty("--primary-foreground", n.colors.primary.foreground), a.style.setProperty("--shadow-xs", n.shadows.xs), a.style.setProperty("--shadow-sm", n.shadows.sm), a.style.setProperty("--shadow-md", n.shadows.md), a.style.setProperty("--shadow-lg", n.shadows.lg), a.style.setProperty("--shadow-xl", n.shadows.xl), a.style.setProperty("--shadow-2xl", n.shadows["2xl"]), a.style.setProperty("--radius-xs", n.radii.xs), a.style.setProperty("--radius-sm", n.radii.sm), a.style.setProperty("--radius-md", n.radii.md), a.style.setProperty("--radius-lg", n.radii.lg), a.style.setProperty("--radius-xl", n.radii.xl), a.style.setProperty("--radius-2xl", n.radii["2xl"]), a.style.setProperty("--radius-full", n.radii.full), s === "glass" && (a.style.setProperty("--backdrop-blur-sm", n.effects.backdrop.blur.sm), a.style.setProperty("--backdrop-blur-md", n.effects.backdrop.blur.md), a.style.setProperty("--backdrop-blur-lg", n.effects.backdrop.blur.lg), a.style.setProperty("--backdrop-blur-xl", n.effects.backdrop.blur.xl), a.style.setProperty("--shadow-blue-glow", n.shadows["blue-glow"]), a.style.setProperty("--shadow-purple-glow", n.shadows["purple-glow"]), a.style.setProperty("--shadow-white-glow", n.shadows["white-glow"]), a.style.setProperty("--shadow-multi-glow", n.shadows["multi-glow"]), a.style.setProperty("--border-gradient-primary", n.effects.border.gradient.primary), a.style.setProperty("--border-gradient-rainbow", n.effects.border.gradient.rainbow)), s === "techDark" && (a.style.setProperty("--accent-purple", n.colors.accent.purple.base), a.style.setProperty("--accent-blue", n.colors.accent.blue.base), a.style.setProperty("--accent-cyan", n.colors.accent.cyan.base), a.style.setProperty("--accent-pink", n.colors.accent.pink.base), a.style.setProperty("--shadow-blue-glow", n.shadows["blue-glow"]), a.style.setProperty("--shadow-purple-glow", n.shadows["purple-glow"]), a.style.setProperty("--shadow-multi-glow", n.shadows["multi-glow"]), (y = (g = n.effects) == null ? void 0 : g.border) != null && y.gradient && (a.style.setProperty("--border-gradient-primary", n.effects.border.gradient.primary), a.style.setProperty("--border-gradient-rainbow", n.effects.border.gradient.rainbow))), a.style.setProperty("--font-sans", n.typography.fontFamily.sans), a.style.setProperty("--font-mono", n.typography.fontFamily.mono), a.style.setProperty("--duration-normal", n.animations.durations.normal), a.style.setProperty("--ease-in-out", n.animations.easings.easeInOut);
  }, f = {
    theme: s,
    setTheme: (n) => {
      typeof n == "string" && Se(n) && c(n);
    },
    themes: Object.keys(Se("all") || {}),
    themeObject: l
  };
  return /* @__PURE__ */ e.jsx(We.Provider, { value: f, children: t });
}, le = () => {
  const t = Xe(We);
  if (t === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}, jr = q(
  // Base styles
  "relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:pointer-events-none disabled:opacity-50 will-change-transform",
  {
    variants: {
      // Button variants
      variant: {
        // Base button variants
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-darker",
        secondary: "bg-background-secondary text-foreground-primary hover:bg-background-tertiary active:scale-[0.98]",
        outline: "border border-border bg-transparent hover:bg-background-secondary active:bg-background-tertiary",
        ghost: "bg-transparent text-foreground-primary hover:bg-background-secondary active:bg-background-tertiary",
        destructive: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
        // Glassmorphic button variants
        glass: "backdrop-blur-md bg-white/10 border border-white/20 text-foreground-primary hover:bg-white/15 active:bg-white/20",
        "glass-dark": "backdrop-blur-md bg-black/30 border border-white/10 text-white hover:bg-black/40 active:bg-black/50",
        "glass-frost": "backdrop-blur-xl bg-white/20 border border-white/40 text-foreground-primary hover:bg-white/25 active:bg-white/30 shadow-sm",
        "glass-deep": "backdrop-blur-xl bg-black/40 border border-white/5 text-white hover:bg-black/50 active:bg-black/60 shadow-md",
        "glass-premium": "backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 text-white hover:from-white/25 hover:to-white/10 active:from-white/15 active:to-white/5",
        "glass-gradient": "backdrop-blur-md bg-gradient-to-br from-primary/20 to-accent-purple/20 border border-primary/20 text-white hover:from-primary/30 hover:to-accent-purple/30",
        // Gradient button variants
        gradient: "bg-gradient-to-br from-primary to-accent-purple text-white hover:brightness-110 active:brightness-90",
        "gradient-blue-purple": "bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:brightness-110 active:brightness-90",
        "gradient-cyan-blue": "bg-gradient-to-br from-cyan-400 to-blue-600 text-white hover:brightness-110 active:brightness-90",
        "gradient-emerald-cyan": "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white hover:brightness-110 active:brightness-90",
        "gradient-amber-orange": "bg-gradient-to-br from-amber-500 to-orange-500 text-white hover:brightness-110 active:brightness-90",
        // Accent button variants
        "accent-blue": "bg-accent-blue text-white hover:brightness-110 active:brightness-90",
        "accent-purple": "bg-accent-purple text-white hover:brightness-110 active:brightness-90",
        "accent-cyan": "bg-accent-cyan text-white hover:brightness-110 active:brightness-90",
        "accent-pink": "bg-accent-pink text-white hover:brightness-110 active:brightness-90",
        "accent-amber": "bg-amber-500 text-white hover:brightness-110 active:brightness-90",
        "accent-emerald": "bg-emerald-500 text-white hover:brightness-110 active:brightness-90",
        // Glowing button variants
        "glow-blue": "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] active:shadow-[0_0_15px_rgba(59,130,246,0.6)]",
        "glow-purple": "bg-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] active:shadow-[0_0_15px_rgba(139,92,246,0.6)]",
        "glow-cyan": "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] active:shadow-[0_0_15px_rgba(6,182,212,0.6)]",
        "glow-emerald": "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] active:shadow-[0_0_15px_rgba(16,185,129,0.6)]",
        "glow-amber": "bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] active:shadow-[0_0_15px_rgba(245,158,11,0.6)]",
        "glow-pink": "bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] active:shadow-[0_0_15px_rgba(236,72,153,0.6)]",
        "glow-white": "bg-white text-gray-900 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] active:shadow-[0_0_15px_rgba(255,255,255,0.6)]",
        // Premium button variants
        "premium-dark": "bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 active:bg-gray-700",
        "premium-light": "bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100",
        "premium-blue": "bg-blue-900 text-white border border-blue-700 hover:bg-blue-800 active:bg-blue-700",
        "premium-purple": "bg-purple-900 text-white border border-purple-700 hover:bg-purple-800 active:bg-purple-700",
        // Neumorphic button variants
        "neumorphic-light": "bg-[#e0e5ec] text-gray-700 shadow-[6px_6px_12px_#b8bec7,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#b8bec7,_-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,_inset_-4px_-4px_8px_#ffffff] dark:bg-[#2d3748] dark:text-gray-100 dark:shadow-[5px_5px_10px_#1e2533,_-5px_-5px_10px_#3c495d] dark:hover:shadow-[3px_3px_6px_#1e2533,_-3px_-3px_6px_#3c495d] dark:active:shadow-[inset_3px_3px_6px_#1e2533,_inset_-3px_-3px_6px_#3c495d]",
        "neumorphic-dark": "bg-[#2a2d3e] text-gray-100 shadow-[6px_6px_12px_#1e2030,_-6px_-6px_12px_#363b50] hover:shadow-[4px_4px_8px_#1e2030,_-4px_-4px_8px_#363b50] active:shadow-[inset_4px_4px_8px_#1e2030,_inset_-4px_-4px_8px_#363b50] dark:bg-[#2a2d3e] dark:text-gray-100 dark:shadow-[5px_5px_10px_#1e2030,_-5px_-5px_10px_#363b50] dark:hover:shadow-[3px_3px_6px_#1e2030,_-3px_-3px_6px_#363b50] dark:active:shadow-[inset_3px_3px_6px_#1e2030,_inset_-3px_-3px_6px_#363b50]",
        // Shimmer button variants
        "shimmer-light": "bg-white text-gray-900 border border-gray-200 shadow-sm overflow-hidden",
        "shimmer-dark": "bg-gray-900 text-white border border-gray-800 shadow-sm overflow-hidden",
        "shimmer-blue": "bg-blue-600 text-white overflow-hidden",
        "shimmer-purple": "bg-purple-600 text-white overflow-hidden"
      },
      // Button sizes
      size: {
        xs: "h-7 px-2.5 text-xs",
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
        xl: "h-12 px-6 text-lg",
        "2xl": "h-14 px-8 text-xl",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0"
      },
      // Button roundedness
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full"
      },
      // Special effects
      effect: {
        none: "",
        // Glow effects
        glow: "shadow-blue-glow hover:shadow-purple-glow",
        "glow-sm": "shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        "glow-lg": "shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]",
        "glow-pulse": "animate-[glow-pulse_2s_ease-in-out_infinite]",
        // Animation effects
        float: "animate-float",
        // Shimmer effects
        shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "shimmer-fast": "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "shimmer-subtle": "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
        // Border effects
        gradientBorder: "gradient-border-1",
        rainbowBorder: "rainbow-border-1",
        // Glass effects
        glassBorder: "border border-white/20 backdrop-filter backdrop-blur-sm",
        "glassBorder-strong": "border-2 border-white/30 backdrop-filter backdrop-blur-md",
        // Scale effects
        scaleUp: "hover:scale-105 transition-transform duration-300",
        scaleDown: "hover:scale-95 transition-transform duration-300",
        // Magnetic effect (requires JS implementation)
        magnetic: "transition-transform duration-200",
        // Highlight effects
        highlight: "before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        "highlight-subtle": "before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent hover:before:translate-x-[100%] before:transition-transform before:duration-700"
      },
      // Animation variants
      animation: {
        none: "",
        pulse: "animate-pulse",
        "pulse-slow": "animate-[pulse_3s_ease-in-out_infinite]",
        float: "animate-float",
        "float-slow": "animate-[float_5s_ease-in-out_infinite]",
        fadeIn: "animate-[fadeIn_0.5s_ease-out]",
        slideUp: "animate-[slideUp_0.5s_ease-out]",
        slideDown: "animate-[slideDown_0.5s_ease-out]",
        slideIn: "animate-[slideIn_0.5s_ease-out]",
        slideRight: "animate-[slideRight_0.5s_ease-out]",
        zoomIn: "animate-[zoomIn_0.5s_ease-out]",
        blurIn: "animate-[blurIn_0.5s_ease-out]"
      },
      // Light and dark mode specific variants
      mode: {
        none: "",
        "light-only": "dark:hidden",
        "dark-only": "hidden dark:block",
        "light-optimized": "dark:opacity-90 dark:hover:opacity-100",
        "dark-optimized": "opacity-90 hover:opacity-100 dark:opacity-100"
      },
      // Full width button
      fullWidth: {
        true: "w-full"
      }
    },
    compoundVariants: [
      // Glass specific shimmer variants
      {
        variant: ["glass", "glass-frost", "glass-premium"],
        effect: "shimmer",
        className: "before:via-white/20"
      },
      // Light mode specific shimmer adjustments
      {
        variant: "shimmer-light",
        effect: "shimmer",
        className: "before:via-black/5"
      },
      // Handle shimmer on different color gradients
      {
        variant: ["gradient-blue-purple", "gradient-cyan-blue"],
        effect: "shimmer",
        className: "before:via-white/20"
      },
      // Neumorphic hover states
      {
        variant: "neumorphic-light",
        effect: "scaleDown",
        className: "hover:shadow-[3px_3px_6px_#b8bec7,_-3px_-3px_6px_#ffffff]"
      },
      // Focus ring adjustments for dark backgrounds
      {
        variant: ["primary", "accent-blue", "accent-purple", "accent-cyan", "accent-pink", "glow-blue", "glow-purple"],
        className: "focus-visible:ring-white"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      effect: "none",
      animation: "none",
      mode: "none"
    }
  }
), Cr = (t, r, o, s, c, l) => {
  let i = r, u = o, f = s, n = c, a = l;
  return t === "techDark" && !r ? (i = "accent-blue", o || (u = "md"), s || (f = "glow"), l || (a = "dark-optimized")) : t === "glass" && !r ? (i = "glass-premium", o || (u = "xl"), s || (f = "glow")) : t === "enterprise" && !r && (l || (a = "light-optimized")), {
    variant: i,
    rounded: u,
    effect: f,
    animation: n,
    mode: a
  };
}, qe = se(({
  variant: t,
  size: r,
  rounded: o,
  effect: s,
  animation: c,
  mode: l,
  className: i = "",
  children: u,
  disabled: f = !1,
  loading: n = !1,
  fullWidth: a,
  leftIcon: g,
  rightIcon: y,
  ...b
}) => {
  const { theme: L, themeObject: D } = le(), [N, x] = $({ x: 0, y: 0 }), R = J(null), {
    variant: k,
    rounded: v,
    effect: z,
    animation: V,
    mode: E
  } = Cr(L, t, o, s, c, l), h = f || n, C = jr({
    variant: k || "primary",
    size: r,
    rounded: v,
    effect: z,
    animation: V,
    mode: E,
    fullWidth: a,
    className: i
  });
  K(() => {
    if (z === "magnetic" && R.current) {
      const _ = R.current, j = (P) => {
        requestAnimationFrame(() => {
          const I = _.getBoundingClientRect(), B = P.clientX - I.left - I.width / 2, H = P.clientY - I.top - I.height / 2;
          x({
            x: B * 0.2,
            // Adjust the strength of the magnetic effect
            y: H * 0.2
          });
        });
      }, T = () => {
        x({ x: 0, y: 0 });
      };
      return _.addEventListener("mousemove", j), _.addEventListener("mouseleave", T), () => {
        _.removeEventListener("mousemove", j), _.removeEventListener("mouseleave", T);
      };
    }
  }, [z]);
  const w = z === "magnetic" ? {
    "--magnetic-x": `${N.x}px`,
    "--magnetic-y": `${N.y}px`,
    transform: "translate(var(--magnetic-x), var(--magnetic-y))"
  } : {}, M = L === "techDark" || L === "glass" ? "text-opacity-90 hover:text-opacity-100" : "";
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      ref: R,
      className: C,
      disabled: h,
      style: w,
      ...b,
      children: [
        n && /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: "mr-2 h-4 w-4 animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        !n && g && /* @__PURE__ */ e.jsx("span", { className: "mr-2", children: g }),
        /* @__PURE__ */ e.jsx("span", { className: M, children: u }),
        !n && y && /* @__PURE__ */ e.jsx("span", { className: "ml-2", children: y })
      ]
    }
  );
});
qe.displayName = "Button";
qe.animationKeyframes = `
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes slideUp {
  0% { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideIn {
  0% { transform: translateX(-10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideRight {
  0% { transform: translateX(10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes zoomIn {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes blurIn {
  0% { filter: blur(5px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Tailwind doesn't include these by default, add them to your tailwind.config.js */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
`;
const Mr = q(
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
), Tr = q(
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
), Sr = q(
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
), Dr = q(
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
), Er = se(ne(({
  // Input appearance props
  variant: t,
  padding: r,
  rounded: o,
  effect: s,
  size: c,
  className: l = "",
  wrapperClassName: i = "",
  labelClassName: u = "",
  helperTextClassName: f = "",
  // Input functionality props
  type: n = "text",
  error: a,
  success: g,
  label: y,
  helperText: b,
  leftIcon: L,
  rightIcon: D,
  prefix: N,
  suffix: x,
  fullWidth: R = !0,
  floatingLabel: k = !1,
  clearable: v = !1,
  showPasswordToggle: z = !0,
  // Animation related props
  animated: V = !0,
  // Event handlers with performance optimizations
  onChange: E,
  onFocus: h,
  onBlur: C,
  // Other props
  ...w
}, M) => {
  const _ = J(null), j = M || _, [T, P] = $(!1), [I, B] = $(!1), [H, G] = $(!!w.value || !!w.defaultValue), { theme: d, themeObject: p } = le();
  let m = t, S = o, F = s, Y = c;
  d === "techDark" && !t ? (m = "filled", o || (S = "md"), s || (F = "none")) : d === "glass" && !t && (m = "glass-premium", o || (S = "lg"), s || (F = "glow"));
  const W = n === "password" && T ? "text" : n, O = a ? "error" : g ? "success" : I ? "focused" : "default", X = O, U = k ? "float" : "none", re = k ? `${H || I ? "text-xs transform -translate-y-7" : "text-base transform translate-y-2"} pointer-events-none absolute left-3 transition-all duration-200` : "", fe = Sr({
    variant: m,
    padding: r,
    rounded: S,
    effect: F,
    state: O,
    size: Y,
    className: `${L || N ? "pl-10" : ""} ${n === "password" || D || x || v && H ? "pr-10" : ""} ${l}`
  }), be = Mr({
    fullWidth: R,
    className: i
  }), ge = Tr({
    state: X,
    effect: U,
    variant: m,
    className: `${re} ${u}`
  }), Z = Dr({
    state: a ? "error" : g ? "success" : "default",
    className: f
  }), ce = () => {
    P((de) => !de);
  }, pe = (de) => {
    G(!!de.target.value), E && E(de);
  }, we = (de) => {
    B(!0), h && h(de);
  }, Ce = (de) => {
    B(!1), C && C(de);
  }, Me = () => {
    if (j.current) {
      j.current.value = "";
      const de = new Event("change", { bubbles: !0 });
      if (j.current.dispatchEvent(de), j.current.focus(), G(!1), E) {
        const Te = { target: j.current };
        E(Te);
      }
    }
  };
  K(() => {
    G(!!w.value);
  }, [w.value]);
  const te = g && !D && !x && n !== "password", ie = a && !D && !x && n !== "password";
  return /* @__PURE__ */ e.jsxs("div", { className: be, children: [
    y && !k && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: w.id,
        className: ge,
        children: y
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      y && k && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: w.id,
          className: ge,
          children: y
        }
      ),
      L && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-tertiary", children: L }),
      N && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-tertiary", children: /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: N }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: j,
          type: W,
          className: fe,
          onChange: pe,
          onFocus: we,
          onBlur: Ce,
          ...w
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center gap-2", children: [
        te && /* @__PURE__ */ e.jsx(lr, { className: "h-4 w-4 text-green-500" }),
        ie && /* @__PURE__ */ e.jsx("div", { className: "text-red-500", children: "!" }),
        v && H && !te && !ie && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Me,
            className: "text-foreground-tertiary hover:text-foreground-secondary transition-colors",
            tabIndex: -1,
            children: /* @__PURE__ */ e.jsx(dr, { size: 16 })
          }
        ),
        n === "password" && z && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: ce,
            className: "text-foreground-tertiary hover:text-foreground-secondary transition-colors",
            tabIndex: -1,
            "aria-label": T ? "Hide password" : "Show password",
            children: T ? /* @__PURE__ */ e.jsx(cr, { size: 18 }) : /* @__PURE__ */ e.jsx(ur, { size: 18 })
          }
        ),
        n !== "password" && D && /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none text-foreground-tertiary", children: D }),
        n !== "password" && x && !D && /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none text-foreground-tertiary text-sm", children: x })
      ] })
    ] }),
    (a || g || b) && /* @__PURE__ */ e.jsx("p", { className: Z, children: a || g || b })
  ] });
}));
Er.displayName = "Input";
const zr = q(
  // Base styles
  "transition-all relative",
  {
    variants: {
      // Card variants
      variant: {
        // Default card
        default: "bg-background-secondary border border-border",
        // Elevated card with shadow
        elevated: "bg-background-secondary border border-border shadow-md",
        // Glass effect card
        glass: "backdrop-blur-md bg-white/10 border border-white/20",
        // Enhanced glassmorphism
        "glass-premium": "backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg",
        "glass-frost": "backdrop-blur-xl bg-white/5 border-t border-l border-white/20 shadow-xl",
        "glass-dark": "backdrop-blur-md bg-black/40 border border-white/10",
        // Outline card (border only)
        outline: "border border-border bg-transparent",
        // Solid card with stronger background
        solid: "bg-background-tertiary border border-border",
        // Professional gradient cards
        "gradient-subtle": "bg-gradient-to-br from-background-primary to-background-secondary border border-border",
        "gradient-blue": "bg-gradient-to-br from-blue-500/10 to-background-primary border border-blue-500/20",
        "gradient-purple": "bg-gradient-to-br from-purple-500/10 to-background-primary border border-purple-500/20",
        "gradient-cyan": "bg-gradient-to-br from-cyan-500/10 to-background-primary border border-cyan-500/20",
        "gradient-emerald": "bg-gradient-to-br from-emerald-500/10 to-background-primary border border-emerald-500/20",
        // Dark mode specific cards
        "dark-elevated": "bg-gray-900 border border-gray-800 shadow-xl",
        "dark-glass": "bg-gray-900/80 backdrop-blur-md border border-gray-800/50",
        "dark-gradient": "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/30",
        // Enhanced glow variants
        "glow-blue": "bg-background-secondary border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        "glow-purple": "bg-background-secondary border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]",
        "glow-cyan": "bg-background-secondary border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
        "glow-emerald": "bg-background-secondary border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        "glow-amber": "bg-background-secondary border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
        "glow-pink": "bg-background-secondary border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]",
        // Premium glow variants (stronger, more sophisticated)
        "premium-blue": "bg-blue-950 border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.4),_inset_0_0_20px_rgba(59,130,246,0.2)]",
        "premium-purple": "bg-purple-950 border border-purple-500/50 shadow-[0_0_20px_rgba(139,92,246,0.4),_inset_0_0_20px_rgba(139,92,246,0.2)]",
        "premium-cyan": "bg-cyan-950 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4),_inset_0_0_20px_rgba(6,182,212,0.2)]",
        "premium-emerald": "bg-emerald-950 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.4),_inset_0_0_20px_rgba(16,185,129,0.2)]",
        // Professional gradient backgrounds
        "gradient-blue-purple": "bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white border border-white/10",
        "gradient-cyan-blue": "bg-gradient-to-br from-cyan-500/90 to-blue-600/90 text-white border border-white/10",
        "gradient-emerald-cyan": "bg-gradient-to-br from-emerald-500/90 to-cyan-500/90 text-white border border-white/10",
        "gradient-amber-orange": "bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white border border-white/10",
        // Neumorphic card (light and dark variants)
        "neumorphic-light": "bg-[#e0e5ec] text-gray-700 shadow-[6px_6px_12px_#b8bec7,_-6px_-6px_12px_#ffffff]",
        "neumorphic-dark": "bg-[#2a2d3e] text-gray-100 shadow-[6px_6px_12px_#1e2030,_-6px_-6px_12px_#363b50]",
        // Enhanced shimmer - fixed to ensure overflow containment
        "shimmer-light": "bg-gray-50 border border-gray-200",
        "shimmer-dark": "bg-gray-900 border border-gray-800"
      },
      // Card padding
      padding: {
        none: "",
        xs: "p-2",
        sm: "p-3",
        md: "p-5",
        lg: "p-7",
        xl: "p-9"
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
      // Special effects
      effect: {
        none: "",
        hover: "hover:shadow-lg hover:-translate-y-1",
        "hover-subtle": "hover:shadow-md hover:-translate-y-0.5",
        "hover-glow": "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
        // Glow effects
        glow: "shadow-blue-glow",
        "glow-sm": "shadow-[0_0_10px_rgba(59,130,246,0.2)]",
        "glow-lg": "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        "glow-pulse": "animate-[glow-pulse_2s_ease-in-out_infinite]",
        "purple-glow": "shadow-purple-glow",
        "multi-glow": "shadow-multi-glow",
        // Border effects
        gradientBorder: "gradient-border-1",
        rainbowBorder: "rainbow-border-1",
        pulseBorder: "animate-[border-pulse_2s_ease-in-out_infinite]",
        // Animation effects
        float: "animate-float",
        // FIXED: Shimmer effects with proper containment
        // Adding overflow-hidden and ensuring pseudo-elements respect boundaries
        shimmer: "overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full after:animate-shimmer-contained after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
        "shimmer-fast": "overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full after:animate-[shimmer-contained_1s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
        "shimmer-subtle": "overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full after:animate-shimmer-contained after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent",
        // Glass effects
        glassBorder: "border border-white/20 backdrop-filter backdrop-blur-sm",
        "glassBorder-strong": "border-2 border-white/30 backdrop-filter backdrop-blur-md",
        // Scale effects
        scaleUp: "hover:scale-105 transition-transform duration-300",
        scaleDown: "hover:scale-95 transition-transform duration-300",
        // Highlight effects
        highlight: "overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent hover:after:translate-x-[100%] after:transition-transform after:duration-500",
        "highlight-subtle": "overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent hover:after:translate-x-[100%] after:transition-transform after:duration-700",
        // Interactive 3D effect
        "tilt-3d": "transform-style-preserve-3d transition-transform duration-300"
      },
      // Animation variants
      animation: {
        none: "",
        pulse: "animate-pulse",
        "pulse-slow": "animate-[pulse_3s_ease-in-out_infinite]",
        float: "animate-float",
        "float-slow": "animate-[float_5s_ease-in-out_infinite]",
        fadeIn: "animate-[fadeIn_0.5s_ease-out]",
        slideUp: "animate-[slideUp_0.5s_ease-out]",
        slideDown: "animate-[slideDown_0.5s_ease-out]",
        slideIn: "animate-[slideIn_0.5s_ease-out]",
        slideRight: "animate-[slideRight_0.5s_ease-out]",
        zoomIn: "animate-[zoomIn_0.5s_ease-out]",
        blurIn: "animate-[blurIn_0.5s_ease-out]"
      },
      // Border styles
      border: {
        none: "border-0",
        thin: "border border-border/50",
        default: "border border-border",
        strong: "border-2 border-border-strong",
        focus: "border border-border-focus",
        accent: "border-l-4 border border-primary",
        bottom: "border-b-2 border-b-border border-x-0 border-t-0",
        top: "border-t-2 border-t-border border-x-0 border-b-0"
      }
    },
    compoundVariants: [
      // Glass + glow combinations
      {
        variant: "glass",
        effect: "glow",
        className: "shadow-blue-glow"
      },
      {
        variant: "glass-premium",
        effect: "purple-glow",
        className: "shadow-purple-glow"
      },
      {
        variant: "glass-frost",
        effect: "glow",
        className: "shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      },
      // FIXED: Shimmer variant adjustments for light/dark themes
      {
        variant: "shimmer-light",
        effect: "shimmer",
        className: "overflow-hidden after:via-black/5"
      },
      {
        variant: "shimmer-dark",
        effect: "shimmer",
        className: "overflow-hidden after:via-white/10"
      },
      {
        variant: ["gradient-blue-purple", "gradient-cyan-blue", "gradient-emerald-cyan", "gradient-amber-orange"],
        effect: "shimmer",
        className: "overflow-hidden after:via-white/15"
      },
      // Premium glow pulse effects
      {
        variant: "premium-blue",
        effect: "glow-pulse",
        className: "animate-[glow-pulse-blue_3s_ease-in-out_infinite]"
      },
      {
        variant: "premium-purple",
        effect: "glow-pulse",
        className: "animate-[glow-pulse-purple_3s_ease-in-out_infinite]"
      },
      // Neumorphic hover effects
      {
        variant: "neumorphic-light",
        effect: "hover",
        className: "hover:shadow-[4px_4px_8px_#b8bec7,_-4px_-4px_8px_#ffffff]"
      },
      {
        variant: "neumorphic-dark",
        effect: "hover",
        className: "hover:shadow-[4px_4px_8px_#1e2030,_-4px_-4px_8px_#363b50]"
      }
    ],
    defaultVariants: {
      variant: "default",
      padding: "md",
      rounded: "lg",
      effect: "none",
      animation: "none",
      border: "default"
    }
  }
), Vr = (t, r, o, s, c, l) => {
  let i = r, u = o, f = s, n = c, a = l;
  return t === "techDark" && !r ? (i = "dark-elevated", o || (u = "lg"), s || (f = "glow-sm"), l || (a = "default")) : t === "glass" && !r && (i = "glass-premium", o || (u = "xl"), s || (f = "glow"), l || (a = "thin")), {
    variant: i,
    rounded: u,
    effect: f,
    animation: n,
    border: a
  };
}, Lr = ({
  variant: t,
  padding: r,
  rounded: o,
  effect: s,
  animation: c,
  border: l,
  className: i = "",
  children: u,
  ...f
}) => {
  const { theme: n } = le(), a = J(null), [g, y] = $({}), {
    variant: b,
    rounded: L,
    effect: D,
    animation: N,
    border: x
  } = Vr(n, t, o, s, c, l), k = [zr({
    variant: b,
    padding: r,
    rounded: L,
    effect: D,
    animation: N,
    border: x
  }), i].filter(Boolean).join(" ");
  return K(() => {
    if (D === "tilt-3d" && a.current) {
      const v = a.current, z = (E) => {
        const h = v.getBoundingClientRect(), C = E.clientX - h.left, w = E.clientY - h.top, M = h.width / 2, _ = h.height / 2, j = (w - _) / 20, T = (M - C) / 20;
        y({
          transform: `perspective(1000px) rotateX(${j}deg) rotateY(${T}deg)`
        });
      }, V = () => {
        y({
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)"
        });
      };
      return v.addEventListener("mousemove", z), v.addEventListener("mouseleave", V), () => {
        v.removeEventListener("mousemove", z), v.removeEventListener("mouseleave", V);
      };
    }
  }, [D]), /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: k,
      style: D === "tilt-3d" ? g : {},
      ...f,
      children: u
    }
  );
}, Ot = ({
  className: t = "",
  children: r,
  ...o
}) => {
  const { theme: s } = le(), l = [`px-5 py-4 ${s === "glass" ? "border-b border-white/10" : "border-b border-border"}`, t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l,
      ...o,
      children: r
    }
  );
}, Xt = ({
  className: t = "",
  children: r,
  ...o
}) => {
  const s = ["text-xl font-semibold text-foreground-primary", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "h3",
    {
      className: s,
      ...o,
      children: r
    }
  );
}, Ft = ({
  className: t = "",
  children: r,
  ...o
}) => {
  const s = ["mt-1 text-sm text-foreground-tertiary", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: s,
      ...o,
      children: r
    }
  );
}, At = ({
  className: t = "",
  children: r,
  ...o
}) => {
  const l = [/p[xytlrb]?-\d+/.test(t) ? "" : "p-5", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l,
      ...o,
      children: r
    }
  );
}, Wt = ({
  className: t = "",
  children: r,
  ...o
}) => {
  const { theme: s } = le(), l = [`px-5 py-4 ${s === "glass" ? "border-t border-white/10" : "border-t border-border"}`, t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l,
      ...o,
      children: r
    }
  );
};
Lr.animationKeyframes = `
/* FIXED: Contained shimmer animation that stays within boundaries */
@keyframes shimmer-contained {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
}

@keyframes glow-pulse-blue {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(59, 130, 246, 0.3); }
}

@keyframes glow-pulse-purple {
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.2); }
  50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6), inset 0 0 30px rgba(139, 92, 246, 0.3); }
}

@keyframes border-pulse {
  0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
  50% { border-color: rgba(59, 130, 246, 0.6); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideRight {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes zoomIn {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes blurIn {
  0% { filter: blur(5px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;
const Rr = {
  enterprise: Fe,
  techDark: mr,
  glass: gr
}, Ut = ({
  className: t = "",
  showLabel: r = !1,
  size: o = "md"
}) => {
  const { theme: s, setTheme: c } = le(), l = {
    sm: "h-8 w-8 p-1.5",
    md: "h-10 w-10 p-2",
    lg: "h-12 w-12 p-2.5"
  }, i = Rr[s] || Fe, u = () => {
    const a = ["enterprise", "techDark", "glass"], y = (a.indexOf(s) + 1) % a.length;
    return a[y];
  }, f = () => {
    c(u());
  }, n = () => {
    switch (s) {
      case "techDark":
        return "bg-background-secondary border border-border-strong text-foreground-primary hover:bg-background-tertiary shadow-blue-glow";
      case "glass":
        return "glass-effect backdrop-blur-sm border border-white/10 text-foreground-primary hover:bg-white/10 shadow-white-glow";
      default:
        return "bg-background-secondary border border-border text-foreground-primary hover:bg-background-tertiary";
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: f,
        className: `rounded-full transition-all ${l[o]} ${n()} ${t}`,
        title: `Toggle theme (current: ${s})`,
        children: /* @__PURE__ */ e.jsx(i, { className: "w-full h-full" })
      }
    ),
    r && /* @__PURE__ */ e.jsxs("span", { className: "ml-2 text-foreground-secondary text-sm", children: [
      s.charAt(0).toUpperCase() + s.slice(1),
      " Theme"
    ] })
  ] });
}, ae = () => {
  try {
    const t = Xe(Ue);
    return t === void 0 ? (console.warn("ThemeProvider not found, using default theme"), { theme: "enterprise" }) : t;
  } catch {
    return console.warn("Error accessing ThemeProvider, using default theme"), { theme: "enterprise" };
  }
};
function A(...t) {
  return t.filter(Boolean).join(" ");
}
const $r = q(
  // Base styles for all Navbar components
  "flex items-center w-full transition-all duration-500",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary text-foreground-primary border-border",
        techDark: "bg-gray-900 text-gray-100 border-gray-700",
        glass: "text-foreground-primary backdrop-blur-md",
        neumorphic: "bg-neutral-100 text-gray-800"
      },
      // Display mode variants
      display: {
        default: "",
        // Shows both text and icons
        iconsOnly: "",
        textOnly: ""
      },
      // Orientation of the navbar
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col items-start"
      },
      // Size of the navbar items
      size: {
        xs: "gap-1 text-xs",
        sm: "gap-2 text-sm",
        md: "gap-4 text-base",
        lg: "gap-6 text-lg"
      },
      // Alignment of items
      alignment: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      // Padding
      padding: {
        none: "p-0",
        xs: "px-1 py-1",
        sm: "px-2 py-2",
        md: "px-4 py-3",
        lg: "px-6 py-4"
      },
      // Border styles
      border: {
        none: "border-0",
        bottom: "border-b",
        top: "border-t",
        left: "border-l",
        right: "border-r",
        all: "border"
      },
      // Shadow styles
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        inner: "shadow-inner"
      },
      // Rounded corners
      rounded: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      },
      // Animation style
      animation: {
        none: "",
        slide: "transition-all duration-500 ease-in-out",
        fade: "transition-opacity duration-500 ease-in-out",
        scale: "transition-transform duration-500 ease-in-out",
        bounce: "transition-transform duration-500",
        elastic: "transition-all duration-700 ease-elastic",
        spring: "transition-all duration-700 ease-spring"
      },
      // Visual style 
      visualStyle: {
        default: "",
        floating: "shadow-lg",
        pill: "rounded-full",
        minimal: "bg-transparent",
        outlined: "bg-transparent border",
        gradient: "bg-gradient-to-r",
        glowing: "shadow-glow transition-all duration-500",
        neumorphicFlat: "transition-all duration-500",
        neumorphicPressed: "transition-all duration-500",
        neumorphicConvex: "bg-gradient-to-br from-white to-neutral-200 transition-all duration-500",
        glassmorphism: "backdrop-blur-md bg-opacity-70 transition-all duration-500",
        frosted: "backdrop-blur-lg bg-opacity-40 transition-all duration-500"
      },
      // Density
      density: {
        default: "",
        compact: "",
        comfortable: ""
      }
    },
    compoundVariants: [
      // Specific orientation-based styling
      {
        orientation: "vertical",
        className: "flex-col w-auto h-full"
      },
      // Density variants
      {
        density: "compact",
        size: "md",
        className: "gap-2"
      },
      {
        density: "comfortable",
        size: "md",
        className: "gap-6"
      },
      // Enterprise theme specifics
      {
        theme: "enterprise",
        shadow: "md",
        className: "border-b border-border shadow-sm"
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        shadow: "md",
        className: "border-b border-gray-700 shadow-md bg-gray-900 text-gray-100"
      },
      {
        theme: "techDark",
        visualStyle: "floating",
        className: "bg-gray-900 text-gray-100 shadow-lg"
      },
      {
        theme: "techDark",
        visualStyle: "gradient",
        className: "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100"
      },
      {
        theme: "techDark",
        visualStyle: "glowing",
        className: "bg-gray-900 text-gray-100 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
      },
      // Glass theme specifics
      {
        theme: "glass",
        className: "bg-white/30 backdrop-blur-md border-white/20"
      },
      // Glass visual style variations
      {
        theme: "glass",
        visualStyle: "floating",
        className: "bg-white/20 backdrop-blur-xl shadow-lg border border-white/20"
      },
      {
        theme: "glass",
        visualStyle: "pill",
        className: "bg-white/20 backdrop-blur-md rounded-full border border-white/20"
      },
      {
        theme: "glass",
        visualStyle: "glowing",
        className: "bg-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      },
      {
        theme: "glass",
        visualStyle: "gradient",
        className: "bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-md"
      },
      {
        theme: "glass",
        visualStyle: "glassmorphism",
        className: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
      },
      {
        theme: "glass",
        visualStyle: "frosted",
        className: "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg"
      },
      // Neumorphic theme specifics - Enhanced
      {
        theme: "neumorphic",
        rounded: "lg",
        className: "rounded-lg"
      },
      {
        theme: "neumorphic",
        visualStyle: "neumorphicFlat",
        className: "shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]"
      },
      {
        theme: "neumorphic",
        visualStyle: "neumorphicPressed",
        className: "shadow-[inset_5px_5px_10px_#d9d9d9,inset_-5px_-5px_10px_#ffffff]"
      },
      {
        theme: "neumorphic",
        visualStyle: "neumorphicConvex",
        className: "shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]"
      },
      {
        theme: "neumorphic",
        visualStyle: "glowing",
        className: "shadow-[0_0_20px_rgba(59,130,246,0.5),5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]"
      },
      {
        theme: "neumorphic",
        visualStyle: "pill",
        className: "rounded-full shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]"
      },
      {
        theme: "neumorphic",
        visualStyle: "gradient",
        className: "bg-gradient-to-r from-blue-50 to-white shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]"
      },
      // Animation variants
      {
        animation: "slide",
        orientation: "horizontal",
        className: "transition-transform duration-500 ease-in-out"
      },
      {
        animation: "slide",
        orientation: "vertical",
        className: "transition-transform duration-500 ease-in-out"
      },
      {
        animation: "bounce",
        className: "hover:[&>*]:animate-bounce-gentle"
      },
      {
        animation: "elastic",
        className: "hover:[&>*]:animate-elastic"
      },
      {
        animation: "spring",
        className: "hover:[&>*]:animate-spring"
      },
      // Visual style variants - Enterprise
      {
        visualStyle: "gradient",
        theme: "enterprise",
        className: "from-primary-light to-primary text-primary-foreground"
      },
      {
        visualStyle: "glowing",
        theme: "enterprise",
        className: "shadow-[0_0_20px_rgba(59,130,246,0.5)]"
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      display: "default",
      orientation: "horizontal",
      size: "md",
      alignment: "start",
      padding: "md",
      border: "none",
      shadow: "none",
      rounded: "lg",
      animation: "fade",
      visualStyle: "default",
      density: "default"
    }
  }
), Ir = q(
  "relative flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 whitespace-nowrap",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-foreground-secondary hover:text-foreground-primary focus:ring-primary",
        techDark: "text-gray-300 hover:text-white focus:ring-purple-500",
        glass: "text-foreground-secondary hover:text-foreground-primary focus:ring-white",
        neumorphic: "text-gray-700 hover:text-gray-900 focus:ring-blue-500"
      },
      // Display mode variants
      display: {
        default: "",
        iconsOnly: "p-2 justify-center",
        textOnly: ""
      },
      // Size of the navbar items
      size: {
        xs: "px-1 py-0.5 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg"
      },
      // Whether item is active
      active: {
        true: "",
        false: ""
      },
      // Visual style of the item
      variant: {
        text: "",
        filled: "",
        outlined: "border",
        underlined: "border-b-2 border-transparent",
        minimal: "",
        neumorphic: "transition-all duration-300",
        neumorphicInset: "transition-all duration-300",
        neumorphicConvex: "transition-all duration-300",
        glassy: "backdrop-blur-sm transition-all duration-300",
        pill: "rounded-full",
        floating: "shadow-md",
        glowing: "transition-all duration-300",
        gradient: "bg-gradient-to-r"
      },
      // Item position
      position: {
        auto: "",
        // Will align based on parent orientation
        inline: "inline-flex",
        block: "block w-full"
      },
      // Disabled state
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: ""
      },
      // Rounded corners
      rounded: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      },
      // Hover effects
      hoverEffect: {
        none: "",
        fade: "transition-opacity duration-300 hover:opacity-80",
        grow: "transition-transform duration-300 hover:scale-105",
        shrink: "transition-transform duration-300 hover:scale-95",
        glow: "transition-shadow duration-300",
        slide: "overflow-hidden relative",
        underline: "hover:underline",
        lift: "transition-all duration-300 hover:-translate-y-1",
        press: "transition-all duration-100 active:translate-y-0.5",
        tilt: "transition-transform duration-300 hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(2deg)]"
      },
      // Animation effects
      animation: {
        none: "",
        bounce: "hover:animate-bounce-gentle",
        pulse: "hover:animate-pulse",
        spin: "hover:animate-spin",
        shimmer: "overflow-hidden",
        wobble: "hover:animate-wobble",
        elastic: "hover:animate-elastic",
        blink: "hover:animate-blink",
        spring: "hover:animate-spring"
      }
    },
    compoundVariants: [
      // Display mode specifics
      {
        display: "iconsOnly",
        className: "w-10 h-10 p-0"
      },
      // Active states for different themes
      {
        theme: "enterprise",
        active: !0,
        className: "text-primary font-medium"
      },
      {
        theme: "techDark",
        active: !0,
        className: "text-purple-400 font-medium"
      },
      {
        theme: "glass",
        active: !0,
        className: "text-white font-medium"
      },
      {
        theme: "neumorphic",
        active: !0,
        className: "text-blue-600 font-medium"
      },
      // Active states for different variants
      {
        variant: "filled",
        active: !0,
        theme: "enterprise",
        className: "bg-primary text-primary-foreground"
      },
      {
        variant: "filled",
        active: !0,
        theme: "techDark",
        className: "bg-purple-600 text-white"
      },
      {
        variant: "filled",
        active: !1,
        theme: "enterprise",
        className: "bg-background-secondary hover:bg-background-tertiary"
      },
      {
        variant: "filled",
        active: !1,
        theme: "techDark",
        className: "bg-gray-800 hover:bg-gray-700"
      },
      {
        variant: "outlined",
        active: !0,
        theme: "enterprise",
        className: "border-primary"
      },
      {
        variant: "outlined",
        active: !0,
        theme: "techDark",
        className: "border-purple-500"
      },
      {
        variant: "outlined",
        active: !1,
        theme: "enterprise",
        className: "border-border hover:border-primary"
      },
      {
        variant: "outlined",
        active: !1,
        theme: "techDark",
        className: "border-gray-700 hover:border-purple-500"
      },
      {
        variant: "underlined",
        active: !0,
        theme: "enterprise",
        className: "border-primary"
      },
      {
        variant: "underlined",
        active: !0,
        theme: "techDark",
        className: "border-purple-500"
      },
      {
        variant: "underlined",
        active: !1,
        theme: "enterprise",
        className: "border-transparent hover:border-border"
      },
      {
        variant: "underlined",
        active: !1,
        theme: "techDark",
        className: "border-transparent hover:border-gray-700"
      },
      {
        variant: "minimal",
        active: !0,
        className: "font-medium"
      },
      {
        variant: "pill",
        active: !0,
        theme: "enterprise",
        className: "bg-primary text-primary-foreground"
      },
      {
        variant: "pill",
        active: !0,
        theme: "techDark",
        className: "bg-purple-600 text-white"
      },
      {
        variant: "pill",
        active: !1,
        theme: "enterprise",
        className: "hover:bg-background-secondary"
      },
      {
        variant: "pill",
        active: !1,
        theme: "techDark",
        className: "hover:bg-gray-800"
      },
      {
        variant: "floating",
        active: !0,
        theme: "enterprise",
        className: "shadow-md bg-primary text-primary-foreground"
      },
      {
        variant: "floating",
        active: !0,
        theme: "techDark",
        className: "shadow-md bg-purple-600 text-white"
      },
      {
        variant: "floating",
        active: !1,
        theme: "enterprise",
        className: "shadow-md hover:shadow-lg hover:bg-background-secondary"
      },
      {
        variant: "floating",
        active: !1,
        theme: "techDark",
        className: "shadow-md hover:shadow-lg hover:bg-gray-800"
      },
      // Neumorphic variants - Enhanced with more refined shadows and transitions
      {
        variant: "neumorphic",
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
      },
      {
        variant: "neumorphic",
        active: !0,
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] text-blue-600 font-medium"
      },
      {
        variant: "neumorphicInset",
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]"
      },
      {
        variant: "neumorphicInset",
        active: !0,
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] text-blue-600 font-medium"
      },
      {
        variant: "neumorphicConvex",
        theme: "neumorphic",
        className: "bg-gradient-to-br from-white to-neutral-200 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]"
      },
      {
        variant: "neumorphicConvex",
        active: !0,
        theme: "neumorphic",
        className: "bg-gradient-to-br from-white to-neutral-200 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] text-blue-600"
      },
      // Glass effects
      {
        variant: "glassy",
        theme: "glass",
        className: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10"
      },
      {
        variant: "glassy",
        active: !0,
        theme: "glass",
        className: "bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium"
      },
      {
        theme: "glass",
        variant: "filled",
        className: "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
      },
      {
        theme: "glass",
        variant: "outlined",
        className: "border-white/20 hover:border-white/40 backdrop-blur-sm"
      },
      {
        theme: "glass",
        variant: "floating",
        className: "bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg"
      },
      // Tech Dark glass effects
      {
        variant: "glassy",
        theme: "techDark",
        className: "bg-gray-800/60 hover:bg-gray-700/60 backdrop-blur-md border border-gray-600/30"
      },
      {
        variant: "glassy",
        active: !0,
        theme: "techDark",
        className: "bg-purple-900/40 backdrop-blur-md border border-purple-500/30 text-purple-300 font-medium"
      },
      // Hover effect variations - Enhanced
      {
        hoverEffect: "glow",
        theme: "enterprise",
        className: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      },
      {
        hoverEffect: "glow",
        theme: "techDark",
        className: "hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      },
      {
        hoverEffect: "glow",
        theme: "glass",
        className: "hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      },
      {
        hoverEffect: "glow",
        theme: "neumorphic",
        className: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3),3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]"
      },
      {
        hoverEffect: "slide",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer"
      },
      {
        hoverEffect: "tilt",
        theme: "glass",
        className: "transform-gpu"
      },
      {
        hoverEffect: "tilt",
        theme: "neumorphic",
        className: "transform-gpu"
      },
      // Animation effect variations
      {
        animation: "shimmer",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer"
      },
      {
        animation: "wobble",
        className: "transform-gpu"
      },
      {
        animation: "elastic",
        className: "transform-gpu"
      },
      {
        animation: "spring",
        className: "transform-gpu"
      },
      {
        animation: "blink",
        className: "transform-gpu"
      },
      // Gradient effects
      {
        variant: "gradient",
        theme: "enterprise",
        className: "from-primary-light to-primary text-primary-foreground"
      },
      {
        variant: "gradient",
        theme: "techDark",
        className: "from-purple-900 to-purple-600 text-white"
      },
      {
        variant: "gradient",
        theme: "glass",
        className: "from-white/10 to-white/20 backdrop-blur-sm"
      },
      {
        variant: "gradient",
        theme: "neumorphic",
        className: "from-blue-400 to-blue-600 text-white shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]"
      },
      // Display mode and icon adjustments
      {
        display: "iconsOnly",
        size: "md",
        className: "w-10 h-10 p-0"
      },
      {
        display: "iconsOnly",
        size: "sm",
        className: "w-8 h-8 p-0"
      },
      {
        display: "iconsOnly",
        size: "lg",
        className: "w-12 h-12 p-0"
      },
      {
        display: "iconsOnly",
        size: "xs",
        className: "w-6 h-6 p-0"
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      display: "default",
      size: "md",
      active: !1,
      variant: "text",
      position: "auto",
      disabled: !1,
      rounded: "md",
      hoverEffect: "none",
      animation: "none"
    }
  }
);
if (typeof document < "u") {
  const t = document.createElement("style");
  t.innerHTML = `
    @keyframes bounce-gentle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    @keyframes wobble {
      0%, 100% { transform: translateX(0); }
      15% { transform: translateX(-6px) rotate(-5deg); }
      30% { transform: translateX(5px) rotate(3deg); }
      45% { transform: translateX(-5px) rotate(-3deg); }
      60% { transform: translateX(3px) rotate(2deg); }
      75% { transform: translateX(-2px) rotate(-1deg); }
      85% { transform: translateX(2px) rotate(1deg); }
    }
    @keyframes elastic {
      0% { transform: scale(1); }
      25% { transform: scale(1.1); }
      50% { transform: scale(0.9); }
      75% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    @keyframes spring {
      0% { transform: translateY(0); }
      40% { transform: translateY(-8px); }
      60% { transform: translateY(4px); }
      80% { transform: translateY(-2px); }
      100% { transform: translateY(0); }
    }
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    .ease-elastic {
      transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    .ease-spring {
      transition-timing-function: cubic-bezier(0.68, -0.45, 0.265, 1.55);
    }
    .shadow-glow {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }
    .shadow-white-glow {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
    }
    .shadow-purple-glow {
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    .shadow-blue-glow {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }
    .animate-bounce-gentle {
      animation: bounce-gentle 2s ease infinite;
    }
    .animate-wobble {
      animation: wobble 1s ease;
    }
    .animate-elastic {
      animation: elastic 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    .animate-spring {
      animation: spring 0.8s cubic-bezier(0.68, -0.45, 0.265, 1.55);
    }
    .animate-shimmer {
      animation: shimmer 2s forwards;
    }
    .animate-blink {
      animation: blink 1s ease-in-out infinite;
    }
  `, document.head.appendChild(t);
}
const he = se(ne(({
  children: t,
  className: r,
  theme: o,
  display: s,
  orientation: c,
  size: l,
  alignment: i,
  padding: u,
  border: f,
  shadow: n,
  rounded: a,
  animation: g,
  visualStyle: y,
  density: b,
  dividers: L = !1,
  responsive: D = !1,
  collapseBreakpoint: N = "md",
  collapsible: x = !1,
  collapseIcon: R,
  expandIcon: k,
  tooltipsEnabled: v = !1,
  themeToggle: z = !1,
  glowOnHover: V = !1,
  sticky: E = !1,
  backdrop: h = !1,
  ...C
}, w) => {
  const { theme: M } = ae(), [_, j] = $(o || M || "enterprise"), [T, P] = $(x), [I, B] = $(!1), [H, G] = $(!1), [d, p] = $(0), m = J(null);
  K(() => {
    if (!D) return;
    const Z = () => {
      const pe = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536
      }[N] || 768;
      B(window.innerWidth < pe);
    };
    return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
  }, [D, N]), K(() => {
    if (!E) return;
    const Z = () => {
      const ce = window.scrollY;
      p(ce);
    };
    return window.addEventListener("scroll", Z), () => window.removeEventListener("scroll", Z);
  }, [E]);
  const S = ee(() => {
    P((Z) => !Z);
  }, []), F = ee(() => {
    j((Z) => Z === "enterprise" ? "techDark" : Z === "techDark" ? "glass" : Z === "glass" ? "neumorphic" : "enterprise");
  }, []), Y = x && T, W = D && I ? "vertical" : c, O = $r({
    theme: _,
    display: s,
    orientation: W,
    size: l,
    alignment: i,
    padding: u,
    border: f,
    shadow: d > 50 ? "md" : n,
    // Add shadow when scrolling
    rounded: a,
    animation: g,
    visualStyle: y,
    density: b,
    className: r
  }), X = Ne.Children.map(t, (Z, ce) => {
    if (!Z || ce === 0 || !L) return Z;
    const pe = W === "horizontal" ? "border-l border-opacity-30 mx-2 h-6" : "border-t border-opacity-30 w-full my-1", we = _ === "enterprise" ? "border-border" : _ === "techDark" ? "border-gray-700" : _ === "glass" ? "border-white/30" : "border-gray-300";
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("div", { className: `${pe} ${we}` }),
      Z
    ] });
  }), U = Ne.Children.map(X, (Z) => Z ? Z.type && (Z.type.displayName === "NavbarItem" || Z.type.displayName === "UltimateNavbarItem") ? Ne.cloneElement(Z, {
    display: s || Z.props.display,
    tooltipEnabled: v && s === "iconsOnly",
    theme: _
  }) : Z : null), re = () => g === "slide" && Y ? W === "horizontal" ? { transform: "translateX(-100%)" } : { transform: "translateY(-100%)" } : g === "fade" && Y ? { opacity: 0 } : g === "scale" && Y ? { transform: "scale(0.95)", opacity: 0 } : {}, Q = ee(() => {
    G(!0);
  }, []), ue = ee(() => {
    G(!1);
  }, []), fe = () => {
    if (!V) return {};
    if (H) {
      if (_ === "enterprise")
        return { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" };
      if (_ === "techDark")
        return { boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" };
      if (_ === "glass")
        return { boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" };
      if (_ === "neumorphic")
        return { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 7px 7px 14px #d1d1d1, -7px -7px 14px #ffffff" };
    }
    return {};
  }, be = () => E ? {
    position: "sticky",
    top: 0,
    zIndex: 50,
    transition: "all 0.3s ease-in-out",
    ...d > 50 && { backdropFilter: "blur(10px)" }
  } : {}, ge = {
    hidden: {
      opacity: 0,
      y: W === "horizontal" ? -20 : 0,
      x: W === "vertical" ? -20 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.45, 0, 0.55, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  return /* @__PURE__ */ e.jsxs(
    oe.nav,
    {
      ref: m || w,
      className: A(
        O,
        D && I && "flex-col items-start",
        Y && "h-10 overflow-hidden",
        "transition-all duration-500",
        h && "backdrop-blur-md"
      ),
      style: {
        ...re(),
        ...fe(),
        ...be()
      },
      onMouseEnter: Q,
      onMouseLeave: ue,
      initial: "hidden",
      animate: "visible",
      variants: ge,
      ...C,
      children: [
        (x || D && I) && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            className: A(
              "p-2 rounded-md mb-2 transition-all duration-300",
              _ === "enterprise" && "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary",
              _ === "techDark" && "text-gray-400 hover:text-white hover:bg-gray-800",
              _ === "glass" && "text-white/80 hover:text-white hover:bg-white/10",
              _ === "neumorphic" && "shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] bg-neutral-100 text-gray-700 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
            ),
            onClick: S,
            "aria-expanded": !T,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: T ? "Expand navigation" : "Collapse navigation" }),
              T ? k || /* @__PURE__ */ e.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) : R || /* @__PURE__ */ e.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
            ]
          }
        ),
        z && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            className: A(
              "p-2 rounded-md ml-auto transition-all duration-300",
              _ === "enterprise" && "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary",
              _ === "techDark" && "text-gray-400 hover:text-white hover:bg-gray-800",
              _ === "glass" && "text-white/80 hover:text-white hover:bg-white/10",
              _ === "neumorphic" && "shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] bg-neutral-100 text-gray-700 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
            ),
            onClick: F,
            "aria-label": "Toggle theme",
            children: [
              _ === "enterprise" && /* @__PURE__ */ e.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) }),
              _ === "techDark" && /* @__PURE__ */ e.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) }),
              _ === "glass" && /* @__PURE__ */ e.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" }) }),
              _ === "neumorphic" && /* @__PURE__ */ e.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" }) })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(Ee, { children: !Y && /* @__PURE__ */ e.jsx(
          oe.div,
          {
            className: "flex items-center w-full",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            children: U
          }
        ) })
      ]
    }
  );
})), Ge = se(ne(({
  children: t,
  className: r,
  theme: o,
  display: s,
  size: c,
  active: l,
  variant: i,
  position: u,
  disabled: f,
  rounded: n,
  hoverEffect: a,
  animation: g,
  icon: y,
  href: b,
  onClick: L,
  tooltip: D,
  tooltipEnabled: N = !1,
  tooltipPosition: x = "bottom",
  badge: R,
  badgeContent: k,
  badgeColor: v = "primary",
  iconAnimation: z,
  showRipple: V = !1,
  ...E
}, h) => {
  const { theme: C } = ae(), [w, M] = $(o || C || "enterprise"), [_, j] = $(!1), [T, P] = $(!1), [I, B] = $(!1), [H, G] = $([]), d = Ir({
    theme: w,
    display: s,
    size: c,
    active: l,
    variant: i,
    position: u,
    disabled: f,
    rounded: n,
    hoverEffect: a,
    animation: g,
    className: r
  }), p = () => {
    if (f) return {};
    if (i === "neumorphic" || i === "neumorphicConvex") {
      if (I)
        return {
          boxShadow: "inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff",
          transform: "translateY(1px)"
        };
      if (T)
        return {
          boxShadow: "5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff"
        };
    }
    if (i === "neumorphicInset" && T && !I)
      return {
        boxShadow: "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff"
      };
    if (a === "glow" && T) {
      if (w === "neumorphic")
        return {
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.4), 3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff"
        };
      if (w === "enterprise")
        return { boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" };
      if (w === "techDark")
        return { boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" };
      if (w === "glass")
        return { boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" };
    }
    return {};
  }, m = ee((Q) => {
    if (!V) return;
    const ue = Q.currentTarget.getBoundingClientRect(), fe = Q.clientX - ue.left, be = Q.clientY - ue.top, ge = {
      x: fe,
      y: be,
      size: Math.max(ue.width, ue.height) * 2,
      id: Date.now()
    };
    G((Z) => [...Z, ge]), setTimeout(() => {
      G((Z) => Z.filter((ce) => ce.id !== ge.id));
    }, 1e3);
  }, [V]), S = () => w === "enterprise" ? v === "primary" ? "bg-primary text-primary-foreground" : v === "success" ? "bg-green-500 text-white" : v === "warning" ? "bg-yellow-500 text-white" : v === "danger" ? "bg-red-500 text-white" : "bg-gray-500 text-white" : w === "techDark" ? v === "primary" ? "bg-purple-600 text-white" : v === "success" ? "bg-green-400 text-black" : v === "warning" ? "bg-yellow-400 text-black" : v === "danger" ? "bg-red-400 text-white" : "bg-gray-500 text-white" : w === "glass" ? v === "primary" ? "bg-white/20 backdrop-blur-sm text-white border border-white/40" : v === "success" ? "bg-green-500/70 backdrop-blur-sm text-white" : v === "warning" ? "bg-yellow-500/70 backdrop-blur-sm text-white" : v === "danger" ? "bg-red-500/70 backdrop-blur-sm text-white" : "bg-white/40 backdrop-blur-sm text-white" : w === "neumorphic" ? v === "primary" ? "bg-blue-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]" : v === "success" ? "bg-green-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]" : v === "warning" ? "bg-yellow-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]" : v === "danger" ? "bg-red-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]" : "bg-gray-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]" : "bg-gray-500 text-white", F = () => {
    if (!y) return null;
    const Q = z === "spin" ? "hover:animate-spin" : z === "pulse" ? "hover:animate-pulse" : z === "bounce" ? "hover:animate-bounce-gentle" : z === "shake" ? "hover:animate-wobble" : z === "elastic" ? "hover:animate-elastic" : z === "blink" ? "hover:animate-blink" : z === "spring" ? "hover:animate-spring" : "";
    return /* @__PURE__ */ e.jsx(
      oe.span,
      {
        className: A(
          s === "default" ? "mr-2" : "",
          "flex items-center justify-center transition-transform duration-300",
          Q
        ),
        initial: { scale: 1 },
        animate: {
          scale: g === "elastic" && T ? [1, 1.1, 0.9, 1.05, 1] : 1,
          y: g === "bounce" && T ? [0, -6, 0] : 0
        },
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        },
        children: y
      }
    );
  }, Y = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    F(),
    (s === "default" || s === "textOnly") && t,
    R && /* @__PURE__ */ e.jsx(
      oe.span,
      {
        className: A(
          "absolute -top-1 -right-1 flex items-center justify-center text-xs font-bold",
          S(),
          "rounded-full min-w-5 h-5 px-1"
        ),
        initial: { scale: 1 },
        animate: {
          scale: T ? 1.1 : 1,
          y: g === "bounce" && T ? [0, -3, 0] : 0
        },
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        },
        children: k
      }
    ),
    /* @__PURE__ */ e.jsx(Ee, { children: N && D && _ && /* @__PURE__ */ e.jsxs(
      oe.div,
      {
        className: A(
          "absolute z-50 px-2 py-1 text-xs rounded-md shadow-md",
          w === "enterprise" && "bg-background-secondary text-foreground-primary",
          w === "techDark" && "bg-gray-800 text-gray-100",
          w === "glass" && "bg-white/10 backdrop-blur-lg text-white border border-white/20",
          w === "neumorphic" && "bg-white shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] text-gray-800",
          x === "top" && "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
          x === "bottom" && "top-full mt-2 left-1/2 transform -translate-x-1/2",
          x === "left" && "right-full mr-2 top-1/2 transform -translate-y-1/2",
          x === "right" && "left-full ml-2 top-1/2 transform -translate-y-1/2"
        ),
        initial: { opacity: 0, y: x === "top" ? 5 : x === "bottom" ? -5 : 0, x: x === "left" ? 5 : x === "right" ? -5 : 0 },
        animate: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: x === "top" ? 5 : x === "bottom" ? -5 : 0, x: x === "left" ? 5 : x === "right" ? -5 : 0 },
        transition: { duration: 0.2 },
        children: [
          D || t,
          /* @__PURE__ */ e.jsx("div", { className: A(
            "absolute w-2 h-2 rotate-45",
            w === "enterprise" && "bg-background-secondary",
            w === "techDark" && "bg-gray-800",
            w === "glass" && "bg-white/10",
            w === "neumorphic" && "bg-white",
            x === "top" && "bottom-0 mb-[-4px] left-1/2 ml-[-4px]",
            x === "bottom" && "top-0 mt-[-4px] left-1/2 ml-[-4px]",
            x === "left" && "right-0 mr-[-4px] top-1/2 mt-[-4px]",
            x === "right" && "left-0 ml-[-4px] top-1/2 mt-[-4px]"
          ) })
        ]
      }
    ) }),
    V && H.map((Q) => /* @__PURE__ */ e.jsx(
      "span",
      {
        className: "absolute rounded-full bg-white/20 pointer-events-none animate-ripple",
        style: {
          left: Q.x - Q.size / 2,
          top: Q.y - Q.size / 2,
          width: Q.size,
          height: Q.size
        }
      },
      Q.id
    ))
  ] }), W = () => {
    P(!0), N && j(!0);
  }, O = () => {
    P(!1), B(!1), N && j(!1);
  }, X = (Q) => {
    B(!0), V && m(Q);
  }, U = () => {
    B(!1);
  }, re = {
    initial: { scale: 1 },
    hover: {
      scale: a === "grow" ? 1.05 : a === "shrink" ? 0.95 : 1,
      y: a === "lift" ? -4 : 0,
      boxShadow: a === "glow" ? "0 0 15px rgba(59, 130, 246, 0.5)" : "",
      transition: { duration: 0.3 }
    },
    pressed: {
      scale: 0.98,
      y: 1,
      transition: { duration: 0.1 }
    }
  };
  return b && !f ? /* @__PURE__ */ e.jsx(
    oe.a,
    {
      ref: h,
      href: b,
      className: d,
      onClick: L,
      onMouseEnter: W,
      onMouseLeave: O,
      onMouseDown: X,
      onMouseUp: U,
      style: p(),
      variants: re,
      initial: "initial",
      whileHover: "hover",
      whileTap: "pressed",
      ...E,
      children: Y
    }
  ) : /* @__PURE__ */ e.jsx(
    oe.button,
    {
      ref: h,
      type: "button",
      className: d,
      onClick: L,
      disabled: f,
      onMouseEnter: W,
      onMouseLeave: O,
      onMouseDown: X,
      onMouseUp: U,
      style: p(),
      variants: re,
      initial: "initial",
      whileHover: "hover",
      whileTap: "pressed",
      ...E,
      children: Y
    }
  );
})), Ze = se(ne(({
  children: t,
  className: r,
  title: o,
  collapsible: s = !1,
  defaultCollapsed: c = !1,
  theme: l,
  icon: i,
  rounded: u = "md",
  shadow: f = "none",
  animation: n = "fade",
  hoverEffect: a = !1,
  divider: g = !1,
  ...y
}, b) => {
  const [L, D] = $(c), [N, x] = $(!1), { theme: R } = ae(), k = l || R || "enterprise", v = ee(() => {
    D((w) => !w);
  }, []), z = ee(() => {
    x(!0);
  }, []), V = ee(() => {
    x(!1);
  }, []), E = ee(() => a ? k === "neumorphic" && N ? { boxShadow: "3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff" } : k === "enterprise" && N ? { backgroundColor: "rgba(0, 0, 0, 0.03)" } : k === "techDark" && N ? { backgroundColor: "rgba(255, 255, 255, 0.05)" } : k === "glass" && N ? { backgroundColor: "rgba(255, 255, 255, 0.1)" } : {} : {}, [k, N, a]), h = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeOut" }
      }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1, ease: "easeIn" }
      }
    }
  }, C = () => {
    if (!g) return "";
    const w = "border-t my-2";
    return k === "enterprise" ? `${w} border-border/30` : k === "techDark" ? `${w} border-gray-700/30` : k === "glass" ? `${w} border-white/20` : k === "neumorphic" ? `${w} border-gray-300/30` : `${w} border-gray-300/30`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: A(
        "w-full transition-all duration-300",
        n === "fade" && "transition-opacity",
        n === "slide" && "transition-transform",
        u === "none" ? "" : `rounded-${u}`,
        f === "none" ? "" : `shadow-${f}`,
        g && C(),
        r
      ),
      ...y,
      children: [
        o && /* @__PURE__ */ e.jsxs(
          oe.div,
          {
            className: A(
              "flex items-center text-sm font-semibold py-2 px-3",
              s && "cursor-pointer",
              u === "none" ? "" : `rounded-${u}`,
              k === "enterprise" && "text-foreground-secondary",
              k === "techDark" && "text-gray-400",
              k === "glass" && "text-white/80 backdrop-blur-sm",
              k === "neumorphic" && "text-gray-700 transition-all duration-300",
              N && k === "enterprise" && "bg-background-secondary/20",
              N && k === "techDark" && "bg-gray-800/50",
              N && k === "glass" && "bg-white/10",
              N && k === "neumorphic" && "bg-neutral-50"
            ),
            onClick: s ? v : void 0,
            onMouseEnter: z,
            onMouseLeave: V,
            style: E(),
            initial: { backgroundColor: "transparent" },
            whileHover: s ? {
              backgroundColor: k === "enterprise" ? "rgba(0, 0, 0, 0.03)" : k === "techDark" ? "rgba(255, 255, 255, 0.05)" : k === "glass" ? "rgba(255, 255, 255, 0.1)" : k === "neumorphic" ? "rgba(245, 245, 245, 1)" : "transparent"
            } : {},
            children: [
              i && /* @__PURE__ */ e.jsx(
                oe.span,
                {
                  className: "mr-2 flex items-center",
                  initial: { rotate: 0 },
                  animate: s && N ? { rotate: [0, -5, 5, 0] } : {},
                  transition: { duration: 0.5, ease: "easeInOut" },
                  children: i
                }
              ),
              o,
              s && /* @__PURE__ */ e.jsx(
                oe.svg,
                {
                  className: "ml-auto h-4 w-4 transform transition-transform duration-300",
                  initial: { rotate: L ? -90 : 0 },
                  animate: { rotate: L ? -90 : 0 },
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(Ee, { initial: !1, children: !L && /* @__PURE__ */ e.jsx(
          oe.div,
          {
            variants: h,
            initial: "collapsed",
            animate: "expanded",
            exit: "collapsed",
            className: "overflow-hidden",
            children: /* @__PURE__ */ e.jsx("div", { className: "py-1", children: t })
          }
        ) })
      ]
    }
  );
})), Je = se(ne(({
  className: t,
  orientation: r = "horizontal",
  theme: o,
  glow: s = !1,
  width: c = "normal",
  style: l = "solid",
  gradient: i = !1,
  animate: u = !1,
  ...f
}, n) => {
  const { theme: a } = ae(), g = o || a || "enterprise", [y, b] = $(!1), L = ee(() => {
    b(!0);
  }, []), D = ee(() => {
    b(!1);
  }, []), N = () => g === "enterprise" ? "border-border" : g === "techDark" ? "border-gray-700" : g === "glass" ? "border-white/30" : "border-gray-300", x = {
    initial: {
      width: r === "horizontal" ? "100%" : "1px",
      height: r === "vertical" ? "100%" : "1px"
    },
    hover: {
      width: r === "horizontal" && u ? ["100%", "95%", "100%"] : "100%",
      height: r === "vertical" && u ? ["100%", "95%", "100%"] : "100%",
      transition: {
        duration: 1.5,
        repeat: 1 / 0,
        repeatType: "reverse"
      }
    }
  };
  return /* @__PURE__ */ e.jsx(
    oe.div,
    {
      ref: n,
      className: A(
        "transition-all duration-300",
        // Width variations
        c === "thin" && r === "horizontal" && "border-t",
        c === "thin" && r === "vertical" && "border-l",
        c === "normal" && r === "horizontal" && "border-t-2",
        c === "normal" && r === "vertical" && "border-l-2",
        c === "thick" && r === "horizontal" && "border-t-4",
        c === "thick" && r === "vertical" && "border-l-4",
        // Style variations
        l === "solid" && "border-solid",
        l === "dashed" && "border-dashed",
        l === "dotted" && "border-dotted",
        // Gradient/glow specific styles
        !i && N(),
        // Neumorphic specific style
        g === "neumorphic" && r === "horizontal" && !i && "h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent",
        g === "neumorphic" && r === "vertical" && !i && "w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent",
        // Glowing effect
        s && g === "neumorphic" && "shadow-[0_0_5px_rgba(59,130,246,0.3)]",
        s && g === "enterprise" && "shadow-[0_0_5px_rgba(59,130,246,0.5)]",
        s && g === "techDark" && "shadow-[0_0_5px_rgba(139,92,246,0.5)]",
        s && g === "glass" && "shadow-[0_0_5px_rgba(255,255,255,0.5)]",
        t
      ),
      style: {
        background: i ? r === "horizontal" ? g === "enterprise" ? "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)" : g === "techDark" ? "linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)" : g === "glass" ? "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)" : "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent)" : g === "enterprise" ? "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5), transparent)" : g === "techDark" ? "linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.5), transparent)" : g === "glass" ? "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent)" : "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)" : "",
        height: r === "horizontal" ? c === "thin" ? "1px" : c === "normal" ? "2px" : "4px" : "100%",
        width: r === "vertical" ? c === "thin" ? "1px" : c === "normal" ? "2px" : "4px" : "100%"
      },
      variants: x,
      initial: "initial",
      animate: u && y ? "hover" : "initial",
      onMouseEnter: L,
      onMouseLeave: D,
      ...f
    }
  );
})), Ke = se(ne(({
  className: t,
  src: r,
  alt: o = "Logo",
  width: s = 32,
  height: c = 32,
  text: l,
  textPosition: i = "right",
  theme: u,
  glow: f = !1,
  animate: n = !1,
  textStyle: a = "default",
  onClick: g,
  href: y,
  ...b
}, L) => {
  const { theme: D } = ae(), N = u || D || "enterprise", [x, R] = $(!1), k = ee(() => {
    R(!0);
  }, []), v = ee(() => {
    R(!1);
  }, []), z = () => {
    let h = "font-semibold transition-all duration-300";
    if (a === "gradient") {
      if (N === "enterprise") return `${h} bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400`;
      if (N === "techDark") return `${h} bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600`;
      if (N === "glass") return `${h} bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`;
      if (N === "neumorphic") return `${h} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700`;
    }
    return N === "enterprise" ? `${h} text-foreground-primary` : N === "techDark" ? `${h} text-white` : N === "glass" ? `${h} text-white` : N === "neumorphic" ? `${h} text-gray-800` : h;
  }, V = () => !f || !x ? {} : N === "neumorphic" ? { filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))" } : N === "enterprise" ? { filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))" } : N === "techDark" ? { filter: "drop-shadow(0 0 4px rgba(139, 92, 246, 0.5))" } : N === "glass" ? { filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))" } : {}, E = y ? ({ children: h }) => /* @__PURE__ */ e.jsx("a", { href: y, className: "outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md", onClick: g, children: h }) : ({ children: h }) => /* @__PURE__ */ e.jsx("div", { onClick: g, children: h });
  return /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(
    oe.div,
    {
      ref: L,
      className: A(
        "flex items-center transition-all duration-300",
        i === "right" && "flex-row",
        i === "left" && "flex-row-reverse",
        i === "top" && "flex-col-reverse",
        i === "bottom" && "flex-col",
        g && "cursor-pointer",
        t
      ),
      onMouseEnter: k,
      onMouseLeave: v,
      whileHover: n ? { scale: 1.05 } : {},
      ...b,
      children: [
        r && /* @__PURE__ */ e.jsx(
          oe.img,
          {
            src: r,
            alt: o,
            width: s,
            height: c,
            className: A(
              "object-contain transition-transform duration-300",
              i === "right" && "mr-2",
              i === "left" && "ml-2",
              i === "top" && "mb-1",
              i === "bottom" && "mt-1"
            ),
            style: V(),
            animate: n && x ? {
              rotate: [0, -3, 3, 0],
              scale: [1, 1.1, 1]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" }
          }
        ),
        l && /* @__PURE__ */ e.jsx(
          oe.span,
          {
            className: z(),
            animate: n && x ? {
              y: [0, -2, 0],
              scale: a === "gradient" ? [1, 1.03, 1] : 1
            } : {},
            transition: { duration: 0.4, ease: "easeInOut" },
            children: l
          }
        )
      ]
    }
  ) });
})), Qe = se(ne(({
  className: t,
  placeholder: r = "Search...",
  theme: o,
  rounded: s = "md",
  size: c = "md",
  icon: l,
  variant: i = "default",
  onChange: u,
  value: f,
  onSearch: n,
  ...a
}, g) => {
  const { theme: y } = ae(), b = o || y || "enterprise", [L, D] = $(!1), [N, x] = $(f || "");
  K(() => {
    f !== void 0 && x(f);
  }, [f]);
  const R = ee(() => {
    D(!0);
  }, []), k = ee(() => {
    D(!1);
  }, []), v = ee((C) => {
    const w = C.target.value;
    x(w), u && u(C);
  }, [u]), z = ee((C) => {
    C.key === "Enter" && n && n(N);
  }, [N, n]), V = () => {
    const C = "relative flex items-center w-full transition-all duration-300", w = c === "sm" ? "h-8" : c === "md" ? "h-10" : c === "lg" ? "h-12" : "h-10", M = s === "none" ? "rounded-none" : s === "sm" ? "rounded-sm" : s === "md" ? "rounded-md" : s === "lg" ? "rounded-lg" : s === "xl" ? "rounded-xl" : s === "full" ? "rounded-full" : "rounded-md";
    let _ = "";
    return b === "enterprise" ? i === "default" ? _ = "bg-background-secondary border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30" : i === "outlined" ? _ = "bg-transparent border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30" : i === "filled" && (_ = "bg-background-tertiary border-none focus-within:bg-background-secondary") : b === "techDark" ? i === "default" ? _ = "bg-gray-800 border border-gray-700 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30" : i === "outlined" ? _ = "bg-transparent border border-gray-700 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30" : i === "filled" && (_ = "bg-gray-900 border-none focus-within:bg-gray-800") : b === "glass" ? i === "default" ? _ = "bg-white/10 backdrop-blur-md border border-white/20 focus-within:border-white/50 focus-within:ring-1 focus-within:ring-white/20" : i === "outlined" ? _ = "bg-transparent backdrop-blur-sm border border-white/20 focus-within:border-white/50 focus-within:ring-1 focus-within:ring-white/20" : i === "filled" && (_ = "bg-white/20 backdrop-blur-md border-none focus-within:bg-white/30") : b === "neumorphic" && (i === "default" ? _ = "bg-white shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] focus-within:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff]" : i === "outlined" ? _ = "bg-white border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/30" : i === "filled" && (_ = "bg-neutral-100 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] focus-within:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff]")), `${C} ${w} ${M} ${_}`;
  }, E = () => {
    const C = "w-full h-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder-opacity-70", w = c === "sm" ? "text-sm px-3" : c === "md" ? "text-base px-4" : c === "lg" ? "text-lg px-5" : "text-base px-4";
    let M = "";
    return b === "enterprise" ? M = "text-foreground-primary placeholder-foreground-secondary/70" : b === "techDark" ? M = "text-white placeholder-gray-400" : b === "glass" ? M = "text-white placeholder-white/70" : b === "neumorphic" && (M = "text-gray-800 placeholder-gray-500"), `${C} ${w} ${M} ${l ? "pl-10" : ""}`;
  }, h = () => {
    const C = "absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-opacity duration-300";
    let w = "";
    return b === "enterprise" ? w = "text-foreground-secondary" : b === "techDark" ? w = "text-gray-400" : b === "glass" ? w = "text-white/70" : b === "neumorphic" && (w = "text-gray-500"), `${C} ${w} ${L ? "opacity-100" : "opacity-70"}`;
  };
  return /* @__PURE__ */ e.jsxs("div", { className: A(V(), t), ...a, children: [
    l && /* @__PURE__ */ e.jsx(
      oe.div,
      {
        className: h(),
        animate: L ? { scale: [1, 1.1, 1] } : {},
        transition: { duration: 0.3 },
        children: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: g,
        type: "text",
        className: E(),
        placeholder: r,
        value: N,
        onChange: v,
        onFocus: R,
        onBlur: k,
        onKeyDown: z
      }
    ),
    N && /* @__PURE__ */ e.jsx(
      oe.button,
      {
        type: "button",
        className: A(
          "absolute right-3 opacity-70 hover:opacity-100 transition-opacity duration-300",
          b === "enterprise" && "text-foreground-secondary",
          b === "techDark" && "text-gray-400",
          b === "glass" && "text-white/70",
          b === "neumorphic" && "text-gray-500"
        ),
        onClick: () => {
          x(""), u && u({ target: { value: "" } });
        },
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] });
}));
he.displayName = "UltimateNavbar";
Ge.displayName = "UltimateNavbarItem";
Ze.displayName = "UltimateNavbarSection";
Je.displayName = "UltimateNavbarDivider";
Ke.displayName = "UltimateNavbarLogo";
Qe.displayName = "UltimateNavbarSearch";
he.Item = Ge;
he.Section = Ze;
he.Divider = Je;
he.Logo = Ke;
he.Search = Qe;
const Pr = q(
  "relative",
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
        sm: "space-y-4",
        md: "space-y-6",
        lg: "space-y-8"
      },
      // Beam position variants
      position: {
        left: "",
        right: "",
        center: ""
      },
      // Beam style variants
      beamStyle: {
        solid: "",
        gradient: "",
        dashed: "",
        dotted: "",
        glow: ""
      },
      // Beam marker variants
      marker: {
        none: "",
        circle: "",
        square: "",
        diamond: "",
        dual: ""
      }
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Position specifics
      {
        position: "left",
        className: "ml-12 md:ml-24"
      },
      {
        position: "right",
        className: "mr-12 md:mr-24"
      },
      {
        position: "center",
        className: "mx-auto"
      }
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      position: "left",
      beamStyle: "gradient",
      marker: "dual"
    }
  }
), Yr = (t) => {
  const r = {
    enterprise: ["#3b82f6", "#1d4ed8"],
    techDark: ["#8b5cf6", "#4c1d95"],
    glass: ["#ffffff", "#93c5fd"],
    neumorphicLight: ["#3b82f6", "#1d4ed8"],
    glow: ["#60a5fa", "#3b82f6"],
    "3d": ["#3b82f6", "#8b5cf6"]
  };
  return r[t] || r.enterprise;
}, Br = (t) => {
  const r = {
    enterprise: ["#3b82f6", "#1d4ed8"],
    techDark: ["#8b5cf6", "#4c1d95"],
    glass: ["#ffffff", "#93c5fd"],
    neumorphicLight: ["#3b82f6", "#1d4ed8"],
    glow: ["#60a5fa", "#3b82f6"],
    "3d": ["#3b82f6", "#8b5cf6"]
  };
  return r[t] || r.enterprise;
}, qt = ({
  children: t,
  className: r,
  contentClassName: o,
  theme: s,
  size: c,
  position: l,
  beamStyle: i,
  marker: u,
  beamWidth: f = 4,
  markerSize: n = "md",
  ...a
}) => {
  const { theme: g } = ae(), y = s || g, b = J(null), L = J(null), [D, N] = $(0), [x, R] = $(0), [k, v] = $(50), [z, V] = $(50);
  K(() => {
    if (!b.current || !L.current) return;
    N(L.current.offsetHeight);
    const T = new IntersectionObserver(
      (P) => {
        P.forEach((I) => {
          if (I.isIntersecting) {
            const B = () => {
              const H = b.current.getBoundingClientRect(), G = window.innerHeight - H.height, d = Math.min(Math.max((window.innerHeight - H.top) / G, 0), 1);
              R(d);
            };
            return window.addEventListener("scroll", B), B(), () => {
              window.removeEventListener("scroll", B);
            };
          }
        });
      },
      { threshold: 0.1 }
    );
    return T.observe(b.current), () => {
      T.disconnect();
    };
  }, []), K(() => {
    if (D <= 0) return;
    const T = 50 + (D - 100) * Math.min(x * 1.25, 0.8), P = 50 + (D - 100) * x, I = () => {
      v((B) => B + (T - B) * 0.1), V((B) => B + (P - B) * 0.1), (Math.abs(k - T) > 0.1 || Math.abs(z - P) > 0.1) && requestAnimationFrame(I);
    };
    requestAnimationFrame(I);
  }, [x, D]);
  const E = Yr(y), h = Br(y), C = () => {
    switch (i) {
      case "solid":
        return {
          stroke: E[0],
          strokeDasharray: "none"
        };
      case "dashed":
        return {
          stroke: E[0],
          strokeDasharray: "8 4"
        };
      case "dotted":
        return {
          stroke: E[0],
          strokeDasharray: "2 4"
        };
      case "glow":
        return {
          stroke: E[0],
          filter: "drop-shadow(0 0 4px " + E[0] + ")"
        };
      case "gradient":
      default:
        return {
          stroke: "url(#gradient)",
          strokeDasharray: "none"
        };
    }
  }, w = (T) => {
    const P = n === "sm" ? 4 : n === "lg" ? 8 : 6;
    switch (u) {
      case "none":
        return { display: "none" };
      case "square":
        return {
          width: P,
          height: P,
          borderRadius: "0",
          backgroundColor: h[T % h.length]
        };
      case "diamond":
        return {
          width: P,
          height: P,
          borderRadius: "0",
          transform: `translateY(${T === 0 ? k : z}px) translateX(10px) rotate(45deg)`,
          backgroundColor: h[T % h.length]
        };
      case "circle":
      case "dual":
      default:
        return {
          width: P,
          height: P,
          borderRadius: "50%",
          backgroundColor: h[T % h.length]
        };
    }
  }, M = () => l === "right" ? { right: "-4rem" } : l === "center" ? { left: "50%", transform: "translateX(-50%)" } : { left: "-4rem" }, _ = () => l === "right" ? "mr-12 md:mr-24" : l === "center" ? "mx-auto px-12 md:px-24" : "ml-12 md:ml-24", j = Pr({
    theme: y,
    size: c,
    position: l,
    beamStyle: i,
    marker: u,
    className: r
  });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: A(j),
      ...a,
      children: [
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "absolute top-0 bottom-0 w-20",
            style: M(),
            children: [
              /* @__PURE__ */ e.jsxs(
                "svg",
                {
                  className: "h-full w-full overflow-visible",
                  width: "50",
                  height: D || 100,
                  viewBox: `0 0 50 ${D || 100}`,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        d: `M 25 ${k} L 25 ${z}`,
                        strokeWidth: f,
                        strokeLinecap: "round",
                        style: C()
                      }
                    ),
                    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
                      "linearGradient",
                      {
                        id: "gradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          /* @__PURE__ */ e.jsx("stop", { stopColor: E[0] }),
                          /* @__PURE__ */ e.jsx("stop", { offset: "1", stopColor: E[1] })
                        ]
                      }
                    ) })
                  ]
                }
              ),
              u !== "none" && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-0 left-0 h-full w-full", children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0",
                    style: {
                      ...w(0),
                      transform: `translateY(${k}px) translateX(10px)`
                    }
                  }
                ),
                (u === "dual" || u === void 0) && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0",
                    style: {
                      ...w(1),
                      transform: `translateY(${z}px) translateX(10px)`
                    }
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: L,
            className: A(_(), o),
            children: t
          }
        )
      ]
    }
  );
}, Hr = q(
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
), Or = q(
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
), Gt = ({
  words: t,
  className: r,
  theme: o,
  size: s,
  weight: c,
  cursor: l,
  effect: i,
  speed: u,
  onComplete: f,
  loop: n = !1,
  delay: a = 0,
  typingDelay: g,
  ...y
}) => {
  const { theme: b } = ae(), L = o || b, [D, N] = $([]), [x, R] = $(!1), [k, v] = $(!0), z = J(null), V = J(null), E = () => {
    if (g !== void 0) return g;
    const M = {
      slow: 80,
      normal: 30,
      fast: 10
    };
    return M[u] || M.normal;
  };
  K(() => {
    if (k)
      return N([]), R(!1), z.current && clearTimeout(z.current), V.current && clearInterval(V.current), z.current = setTimeout(() => {
        const M = t.split("");
        let _ = -1;
        V.current = setInterval(() => {
          N((j) => [...j, M[_]]), _++, _ === M.length && (clearInterval(V.current), R(!0), f && f(), n && (z.current = setTimeout(() => {
            N([]), R(!1);
          }, 2e3)));
        }, E());
      }, a), () => {
        z.current && clearTimeout(z.current), V.current && clearInterval(V.current);
      };
  }, [t, k, n, a, u, f, g]);
  const h = Hr({
    theme: L,
    size: s,
    weight: c,
    cursor: l,
    effect: i,
    speed: u,
    className: r
  }), C = Or({
    theme: L,
    cursor: l,
    effect: i
  }), w = () => {
    v(!k);
  };
  return /* @__PURE__ */ e.jsxs("span", { className: A(h), onClick: w, ...y, children: [
    D.join(""),
    !x && /* @__PURE__ */ e.jsx(
      "span",
      {
        className: A(C, "ml-1 animate-blink"),
        style: {
          animation: "blink 0.8s infinite"
        }
      }
    ),
    /* @__PURE__ */ e.jsx("style", { jsx: !0, global: !0, children: `
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
}, Xr = q(
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
), Ye = q(
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
), Fr = q(
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
), Ar = q(
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
), Zt = ({
  children: t,
  className: r,
  theme: o,
  size: s,
  layout: c,
  animation: l,
  hoverEffect: i,
  avatarUrl: u,
  avatarAlt: f = "Testimonial author",
  avatarSize: n,
  avatarShape: a = "circle",
  authorName: g,
  authorTitle: y,
  rating: b = 0,
  quote: L,
  showQuoteIcons: D = !0,
  animated3D: N = !1,
  ...x
}) => {
  const { theme: R } = ae(), k = o || R, [v, z] = $(0), [V, E] = $(0), h = J(null), C = (B) => {
    if (!N || !h.current) return;
    const H = h.current.getBoundingClientRect(), G = H.left + H.width / 2, d = H.top + H.height / 2, p = (B.clientX - G) / (H.width / 2), S = (B.clientY - d) / (H.height / 2) * -5, F = p * 5;
    z(S), E(F);
  }, w = () => {
    z(0), E(0);
  }, M = () => N ? {
    transform: `perspective(1000px) rotateX(${v}deg) rotateY(${V}deg)`,
    transition: "transform 0.1s ease-out"
  } : {}, _ = (B) => {
    const H = [], d = Math.floor(B), p = B % 1 >= 0.5, m = Fr({
      theme: k,
      size: s
    });
    for (let S = 0; S < 5; S++)
      S < d ? H.push(
        /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, S)
      ) : S === d && p ? H.push(
        /* @__PURE__ */ e.jsxs("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: [
          /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "halfStarGradient", children: [
            /* @__PURE__ */ e.jsx("stop", { offset: "50%", stopColor: "currentColor" }),
            /* @__PURE__ */ e.jsx("stop", { offset: "50%", stopColor: "rgba(203, 213, 225, 0.4)" })
          ] }) }),
          /* @__PURE__ */ e.jsx("path", { fill: "url(#halfStarGradient)", d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
        ] }, S)
      ) : H.push(
        /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-gray-300 dark:text-gray-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, S)
      );
    return /* @__PURE__ */ e.jsx("div", { className: m, children: H });
  }, j = () => l === "float" ? "hover:animate-float" : l === "pulse" ? "hover:animate-pulse" : "", T = () => {
    const B = Ar({
      theme: k,
      size: n || s,
      shape: a
    }), H = D ? Ye({
      theme: k,
      position: "topLeft"
    }) : "", G = D ? Ye({
      theme: k,
      position: "bottomRight"
    }) : "";
    switch (c) {
      case "horizontal":
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          D && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { className: H, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) }),
            /* @__PURE__ */ e.jsx("svg", { className: G, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-center", children: [
            u && /* @__PURE__ */ e.jsx("div", { className: `${j()}`, children: /* @__PURE__ */ e.jsx("img", { src: u, alt: f, className: B }) }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
              b > 0 && _(b),
              L && /* @__PURE__ */ e.jsx("p", { className: "italic my-3", children: L }),
              t,
              (g || y) && /* @__PURE__ */ e.jsxs("div", { className: "mt-4", children: [
                g && /* @__PURE__ */ e.jsx("div", { className: "font-semibold", children: g }),
                y && /* @__PURE__ */ e.jsx("div", { className: "text-sm opacity-75", children: y })
              ] })
            ] })
          ] })
        ] });
      case "stacked":
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          D && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { className: H, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) }),
            /* @__PURE__ */ e.jsx("svg", { className: G, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            b > 0 && _(b),
            L && /* @__PURE__ */ e.jsx("p", { className: "italic my-4", children: L }),
            t,
            /* @__PURE__ */ e.jsx("div", { className: "mt-6 mb-4", children: u && /* @__PURE__ */ e.jsx("div", { className: `${j()} mx-auto`, children: /* @__PURE__ */ e.jsx("img", { src: u, alt: f, className: B }) }) }),
            (g || y) && /* @__PURE__ */ e.jsxs("div", { className: "mt-2", children: [
              g && /* @__PURE__ */ e.jsx("div", { className: "font-semibold", children: g }),
              y && /* @__PURE__ */ e.jsx("div", { className: "text-sm opacity-75", children: y })
            ] })
          ] })
        ] });
      default:
        return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          D && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { className: H, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) }),
            /* @__PURE__ */ e.jsx("svg", { className: G, width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z", fill: "currentColor" }) })
          ] }),
          b > 0 && _(b),
          L && /* @__PURE__ */ e.jsx("p", { className: "italic my-4", children: L }),
          t,
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mt-4", children: [
            u && /* @__PURE__ */ e.jsx("div", { className: `mr-4 ${j()}`, children: /* @__PURE__ */ e.jsx("img", { src: u, alt: f, className: B }) }),
            (g || y) && /* @__PURE__ */ e.jsxs("div", { children: [
              g && /* @__PURE__ */ e.jsx("div", { className: "font-semibold", children: g }),
              y && /* @__PURE__ */ e.jsx("div", { className: "text-sm opacity-75", children: y })
            ] })
          ] })
        ] });
    }
  }, P = Xr({
    theme: k,
    size: s,
    layout: c,
    animation: l,
    hoverEffect: i,
    className: r
  }), I = () => ({
    float: "animate-float",
    pulse: "animate-pulse",
    glow: "animate-glow",
    shimmer: "animate-shimmer"
  })[l] || "";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: h,
      className: A(P, I()),
      style: M(),
      onMouseMove: C,
      onMouseLeave: w,
      ...x,
      children: T()
    }
  );
}, Wr = q(
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
), _e = (t, r) => {
  var s;
  const o = {
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
  return t === "multi" ? "multi" : ((s = o[t]) == null ? void 0 : s[r]) || o.blue[r];
}, Ur = (t) => {
  switch (t) {
    case "sm":
      return 200;
    case "lg":
      return 600;
    default:
      return 400;
  }
}, qr = (t, r) => {
  const o = {
    low: 0.7,
    medium: 1,
    high: 1.5
  }[t] || 1, s = {
    enterprise: 1,
    techDark: 1.2,
    glass: 0.8,
    neumorphicLight: 0.9,
    glow: 1.5,
    "3d": 1.1
  }[r] || 1;
  return o * s;
}, Jt = ({
  children: t,
  className: r,
  theme: o,
  size: s,
  spotSize: c,
  intensity: l,
  animation: i,
  color: u,
  type: f,
  ...n
}) => {
  const { theme: a } = ae(), g = o || a, y = J(null), b = J(null), L = J(null), D = J(0), [N, x] = $({ x: -1e3, y: -1e3 }), [R, k] = $(!1), [v, z] = $(0), V = Wr({
    theme: g,
    size: s,
    spotSize: c,
    intensity: l,
    animation: i,
    color: u,
    type: f,
    className: r
  }), E = _e(u, g), h = Ur(c), C = qr(l, g), w = (j) => {
    if (!y.current) return;
    const T = y.current.getBoundingClientRect(), P = j.clientX - T.left, I = j.clientY - T.top;
    if (x({ x: P, y: I }), k(!0), y.current.querySelector(".spotlight-content")) {
      const B = y.current.querySelector(".spotlight-content"), H = T.width / 2, G = T.height / 2, d = (P - H) / T.width * 10, p = (I - G) / T.height * 10;
      B.style.transform = `translate3d(${d}px, ${p}px, 0)`;
    }
  }, M = () => {
    var j;
    if (k(!1), (j = y.current) != null && j.querySelector(".spotlight-content")) {
      const T = y.current.querySelector(".spotlight-content");
      T.style.transform = "translate3d(0, 0, 0)";
    }
  };
  K(() => {
    if (i === "none") return;
    let j = Date.now();
    const T = () => {
      if (!b.current) {
        L.current = requestAnimationFrame(T);
        return;
      }
      const P = Date.now() - j;
      if (i === "pulse") {
        const I = 1 + Math.sin(P / 1e3) * 0.2;
        b.current.style.transform = `translate(-50%, -50%) scale(${I})`;
      } else if (i === "breathe") {
        const I = 0.5 + Math.sin(P / 1500) * 0.3;
        b.current.style.opacity = I;
      } else if (i === "rainbow" && u === "multi") {
        const I = P / 50 % 360;
        f === "radial" ? b.current.style.background = `radial-gradient(circle at center, 
            hsla(${I}, 100%, 60%, 0.25), 
            transparent 70%)` : f === "directional" ? b.current.style.background = `linear-gradient(45deg, 
            hsla(${I}, 100%, 60%, 0.25), 
            hsla(${I + 60}, 100%, 60%, 0.1))` : f === "beam" && (b.current.style.background = `linear-gradient(90deg, 
            transparent, 
            hsla(${I}, 100%, 60%, 0.25), 
            transparent)`);
      }
      L.current = requestAnimationFrame(T), P > 1e3 && (z((I) => (I + 1) % 1e3), j = Date.now());
    };
    return L.current = requestAnimationFrame(T), () => {
      L.current && cancelAnimationFrame(L.current);
    };
  }, [i, f, u, v]);
  const _ = () => {
    const j = {
      position: "absolute",
      top: `${N.y}px`,
      left: `${N.x}px`,
      width: `${h}px`,
      height: `${h}px`,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      opacity: R ? 1 : 0,
      transition: "opacity 0.3s ease"
    };
    if (u === "multi" && i !== "rainbow") {
      const T = [
        _e("blue", g),
        _e("purple", g),
        _e("cyan", g),
        _e("pink", g)
      ], P = T[D.current % T.length];
      R && setTimeout(() => {
        D.current += 1;
      }, 2e3), f === "radial" ? j.background = `radial-gradient(circle at center, ${P}, transparent 70%)` : f === "directional" ? j.background = `linear-gradient(45deg, ${P}, rgba(255, 255, 255, 0) 80%)` : f === "beam" && (j.width = "100%", j.height = "200px", j.background = `linear-gradient(90deg, transparent, ${P}, transparent)`);
    } else u === "multi" && i === "rainbow" ? f === "radial" ? j.background = "radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)" : f === "directional" ? j.background = "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1))" : f === "beam" && (j.width = "100%", j.height = "200px", j.background = "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)") : f === "radial" ? j.background = `radial-gradient(circle at center, ${E}, transparent 70%)` : f === "directional" ? j.background = `linear-gradient(45deg, ${E}, rgba(255, 255, 255, 0) 80%)` : f === "beam" && (j.width = "100%", j.height = "200px", j.background = `linear-gradient(90deg, transparent, ${E}, transparent)`);
    if (C !== 1) {
      const T = (P) => {
        const I = P.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (I) {
          const B = I[1], H = I[2], G = I[3], d = parseFloat(I[4]) * C;
          return `rgba(${B}, ${H}, ${G}, ${d})`;
        }
        return P;
      };
      j.background.includes("radial-gradient") ? j.background = j.background.replace(/rgba\([^)]+\)/, T) : j.background.includes("linear-gradient") && (j.background = j.background.replace(/rgba\([^)]+\)/, T));
    }
    return j;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: y,
      className: A(V),
      onMouseMove: w,
      onMouseLeave: M,
      ...n,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: b,
            style: _()
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "relative z-10 spotlight-content transition-transform duration-200", children: t })
      ]
    }
  );
};
function je(...t) {
  return hr(pr(t));
}
const Kt = ({
  className: t,
  width: r = 300,
  height: o = 150,
  brushSize: s = 20,
  coverImage: c,
  coverColor: l,
  revealImage: i,
  revealContent: u,
  completionThreshold: f = 70,
  onComplete: n,
  disabled: a = !1,
  revealAll: g = !1,
  theme: y,
  variant: b = "default",
  ...L
}) => {
  const { themeObject: D, theme: N } = le(), x = y || N, R = J(null), k = J(null), v = J(!1), [z, V] = $(!1), [E, h] = $(0), [C, w] = $(null), [M, _] = $(null), j = () => {
    const p = {
      background: "#f5f5f5",
      foreground: "#333333",
      borderColor: "#e0e0e0",
      shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      brushColor: "rgba(255, 255, 255, 0)"
    };
    switch (x) {
      case "enterprise":
        return {
          background: l || "#f8f9fa",
          foreground: "#111827",
          borderColor: "#e5e7eb",
          shadow: "0 4px 10px rgba(0, 0, 0, 0.04)",
          brushColor: "rgba(255, 255, 255, 0)"
        };
      case "techDark":
        return {
          background: l || "#1f2937",
          foreground: "#f9fafb",
          borderColor: "#374151",
          shadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          brushColor: "rgba(255, 255, 255, 0)",
          glow: "0 0 15px rgba(139, 92, 246, 0.3)"
        };
      case "glass":
        return {
          background: l || "rgba(15, 23, 42, 0.3)",
          foreground: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.1)",
          shadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          brushColor: "rgba(255, 255, 255, 0)",
          blur: "8px"
        };
      case "neumorphic":
        return {
          background: l || "#e0e5ec",
          foreground: "#333333",
          borderColor: "transparent",
          shadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
          shadowInset: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
          brushColor: "rgba(255, 255, 255, 0)"
        };
      case "glow":
        return {
          background: l || "#111827",
          foreground: "#ffffff",
          borderColor: "rgba(59, 130, 246, 0.3)",
          shadow: "0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)",
          brushColor: "rgba(255, 255, 255, 0)"
        };
      default:
        return p;
    }
  }, T = (p) => {
    switch (b) {
      case "prize":
        return {
          ...p,
          background: l || (x === "techDark" ? "#6d28d9" : x === "enterprise" ? "#3b82f6" : x === "glass" ? "rgba(139, 92, 246, 0.4)" : x === "neumorphic" ? "#dee4ec" : "#4f46e5"),
          pattern: "radial-gradient(circle at center, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.1) 5.1%, rgba(255, 255, 255, 0.2) 10%, transparent 10.1%)",
          patternSize: "20px 20px"
        };
      case "ticket":
        return {
          ...p,
          pattern: "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.2) 10px, rgba(255, 255, 255, 0.2) 20px)"
        };
      case "coupon":
        return {
          ...p,
          pattern: "repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 15px, rgba(255, 255, 255, 0.1) 15px, rgba(255, 255, 255, 0.1) 30px)"
        };
      default:
        return p;
    }
  };
  K(() => {
    const p = R.current;
    if (!p) return;
    p.width = r, p.height = o;
    const m = p.getContext("2d");
    if (_(m), m) {
      const S = j(), F = T(S);
      if (m.fillStyle = F.background, m.fillRect(0, 0, r, o), F.pattern) {
        m.save();
        const Y = document.createElement("canvas"), W = Y.getContext("2d");
        Y.width = 40, Y.height = 40;
        const O = W.createLinearGradient(0, 0, 40, 40);
        O.addColorStop(0, "rgba(255, 255, 255, 0.1)"), O.addColorStop(1, "rgba(255, 255, 255, 0.2)"), W.fillStyle = O, W.fillRect(0, 0, 40, 40);
        const X = m.createPattern(Y, "repeat");
        m.fillStyle = X, m.fillRect(0, 0, r, o), m.restore();
      }
      if (c) {
        const Y = new Image();
        Y.onload = () => {
          m.drawImage(Y, 0, 0, r, o);
        }, Y.src = c;
      }
      if (b === "ticket")
        m.strokeStyle = "rgba(255, 255, 255, 0.3)", m.setLineDash([5, 5]), m.beginPath(), m.moveTo(0, 15), m.lineTo(r, 15), m.stroke(), m.beginPath(), m.moveTo(0, o - 15), m.lineTo(r, o - 15), m.stroke();
      else if (b === "coupon") {
        m.strokeStyle = "rgba(255, 255, 255, 0.3)", m.setLineDash([]);
        const Y = 8, W = Math.floor(o / (Y * 2 + 4)), O = (o - W * Y * 2) / (W + 1);
        for (let X = 0; X < W; X++) {
          const U = O + X * (O + Y * 2) + Y;
          m.beginPath(), m.arc(-8 / 2, U, Y, 0, Math.PI * 2), m.stroke(), m.beginPath(), m.arc(r + Y / 2, U, Y, 0, Math.PI * 2), m.stroke();
        }
      }
    }
    g && H();
  }, [r, o, c, l, g, x, b]), K(() => {
    const p = R.current;
    if (!p || a) return;
    const m = (U) => {
      v.current = !0;
      const re = P(U);
      w(re), I(re, re);
    }, S = (U) => {
      if (!v.current) return;
      const re = P(U);
      I(C, re), w(re), B();
    }, F = () => {
      v.current = !1;
    }, Y = () => {
      v.current = !1;
    }, W = (U) => {
      U.preventDefault(), m(U.touches[0]);
    }, O = (U) => {
      U.preventDefault(), S(U.touches[0]);
    }, X = (U) => {
      U.preventDefault(), F();
    };
    return p.addEventListener("mousedown", m), p.addEventListener("mousemove", S), p.addEventListener("mouseup", F), p.addEventListener("mouseout", Y), p.addEventListener("touchstart", W), p.addEventListener("touchmove", O), p.addEventListener("touchend", X), () => {
      p.removeEventListener("mousedown", m), p.removeEventListener("mousemove", S), p.removeEventListener("mouseup", F), p.removeEventListener("mouseout", Y), p.removeEventListener("touchstart", W), p.removeEventListener("touchmove", O), p.removeEventListener("touchend", X);
    };
  }, [a, C]), K(() => {
    E >= f && !z && (V(!0), n && n());
  }, [E, f, z, n]);
  const P = (p) => {
    const S = R.current.getBoundingClientRect();
    return {
      x: p.clientX - S.left,
      y: p.clientY - S.top
    };
  }, I = (p, m) => {
    M && (M.globalCompositeOperation = "destination-out", M.strokeStyle = "rgba(255, 255, 255, 1)", M.lineWidth = s, M.lineCap = "round", M.lineJoin = "round", M.beginPath(), M.moveTo(p.x, p.y), M.lineTo(m.x, m.y), M.stroke());
  }, B = () => {
    if (!M) return;
    const m = M.getImageData(0, 0, r, o).data;
    let S = 0;
    for (let W = 3; W < m.length; W += 4)
      m[W] === 0 && S++;
    const F = r * o, Y = S / F * 100;
    h(Y);
  }, H = ee(() => {
    M && (M.globalCompositeOperation = "destination-out", M.fillRect(0, 0, r, o), V(!0), h(100), n && n());
  }, [M, r, o, n]);
  ee(() => {
    if (!M) return;
    const p = j(), m = T(p);
    if (M.globalCompositeOperation = "source-over", M.fillStyle = m.background, M.fillRect(0, 0, r, o), c) {
      const S = new Image();
      S.onload = () => {
        M.drawImage(S, 0, 0, r, o);
      }, S.src = c;
    }
    V(!1), h(0);
  }, [M, r, o, c, x, b]);
  const G = j(), d = T(G);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: k,
      className: je(
        "relative rounded-lg overflow-hidden",
        t
      ),
      style: {
        width: r,
        height: o,
        borderRadius: "0.5rem",
        border: `1px solid ${d.borderColor}`,
        boxShadow: d.shadow,
        ...d.blur ? { backdropFilter: `blur(${d.blur})` } : {}
      },
      ...L,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center z-0 p-4",
            style: {
              color: d.foreground,
              background: x === "glass" ? "rgba(255, 255, 255, 0.1)" : x === "techDark" ? "#111827" : x === "neumorphic" ? "#e0e5ec" : x === "glow" ? "#030712" : "#ffffff"
            },
            children: i ? /* @__PURE__ */ e.jsx("img", { src: i, alt: "Revealed content", className: "max-w-full max-h-full object-contain" }) : /* @__PURE__ */ e.jsx("div", { className: "text-center", children: u })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "canvas",
          {
            ref: R,
            className: je(
              "absolute inset-0 cursor-pointer z-10",
              { "cursor-not-allowed": a }
            ),
            style: {
              opacity: z && g ? 0 : 1,
              transition: "opacity 0.5s ease-in-out"
            }
          }
        ),
        !1
      ]
    }
  );
}, Gr = q(
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
), Zr = (t, r, o, s, c, l, i) => {
  let u = r, f = o, n = s, a = c, g = l, y = i;
  return t === "techDark" && !r ? (u = "dark", o || (f = "medium"), s || (n = "xl"), c || (a = "medium"), l || (g = "subtle"), i || (y = "none")) : t === "glass" && !r && (u = "glass-premium", o || (f = "medium"), s || (n = "xl"), c || (a = "subtle"), l || (g = "medium"), i || (y = "none")), {
    variant: u,
    intensity: f,
    rounded: n,
    glow: a,
    highlight: g,
    effect: y
  };
}, Jr = (t) => {
  switch (t) {
    case "subtle":
      return 10;
    case "medium":
      return 20;
    case "strong":
      return 35;
    default:
      return 20;
  }
}, Kr = (t) => {
  switch (t) {
    case "subtle":
      return 0.5;
    case "medium":
      return 1;
    case "strong":
      return 1.5;
    default:
      return 0;
  }
}, Qr = (t) => {
  switch (t) {
    case "subtle":
      return 0.1;
    case "medium":
      return 0.2;
    case "strong":
      return 0.3;
    default:
      return 0;
  }
}, Qt = ({
  // Card appearance props
  variant: t,
  intensity: r,
  rounded: o,
  glow: s,
  highlight: c,
  effect: l,
  className: i = "",
  style: u = {},
  children: f,
  // Card behavior props
  resetOnLeave: n = !0,
  disableRotation: a = !1,
  disableScale: g = !1,
  disableGlow: y = !1,
  disableHighlight: b = !1,
  glowColor: L = "rgba(100, 130, 255, 0.4)",
  // Other props
  ...D
}) => {
  const { theme: N } = le(), x = J(null), R = J(null), k = J(null), [v, z] = $({ x: 0, y: 0 }), [V, E] = $(!1), {
    variant: h,
    intensity: C,
    rounded: w,
    glow: M,
    highlight: _,
    effect: j
  } = Zr(N, t, r, o, s, c, l), T = Jr(C), P = Kr(M), I = Qr(_), B = Gr({
    variant: h,
    intensity: C,
    rounded: w,
    glow: y ? "none" : M,
    highlight: b ? "none" : _,
    effect: j,
    className: i
  }), H = (p) => {
    if (!x.current || a) return;
    const S = x.current.getBoundingClientRect(), F = (p.clientX - S.left) / S.width - 0.5, Y = (p.clientY - S.top) / S.height - 0.5;
    z({ x: F, y: Y });
  }, G = () => {
    n && z({ x: 0, y: 0 }), E(!1);
  }, d = () => {
    E(!0);
  };
  return K(() => {
    if (!x.current) return;
    const { x: p, y: m } = v, S = x.current, F = a ? 0 : p * T, Y = a ? 0 : -m * T, W = V && !g ? 1.02 : 1;
    if (S.style.transform = `
      perspective(1000px) 
      rotateX(${Y}deg) 
      rotateY(${F}deg)
      scale(${W})
    `, R.current && !y && P > 0) {
      const O = R.current, X = 50 + p * 50, U = 50 + m * 50;
      O.style.background = `radial-gradient(
        circle at ${X}% ${U}%, 
        ${L}, 
        transparent ${60 / P}%
      )`, O.style.opacity = V ? P : 0;
    }
    if (k.current && !b && I > 0) {
      const O = k.current, X = 50 + p * 100, U = 50 + m * 100;
      O.style.background = `radial-gradient(
        circle at ${X}% ${U}%, 
        rgba(255, 255, 255, ${I}), 
        transparent 25%
      )`, O.style.opacity = V ? 1 : 0;
    }
  }, [v, V, T, P, I, a, g, y, b, L]), /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: x,
      className: `${B} transform-gpu`,
      onMouseMove: H,
      onMouseLeave: G,
      onMouseEnter: d,
      style: {
        transformStyle: "preserve-3d",
        ...u
      },
      ...D,
      children: [
        !y && P > 0 && /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: R,
            className: "absolute inset-0 opacity-0 transition-opacity duration-300 rounded-inherit z-[-1]",
            style: { borderRadius: "inherit" }
          }
        ),
        !b && I > 0 && /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: k,
            className: "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-overlay",
            style: { borderRadius: "inherit" }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative z-10 motion-card-content",
            style: {
              transform: a ? "none" : "translateZ(20px)",
              transformStyle: "preserve-3d"
            },
            children: f
          }
        )
      ]
    }
  );
}, et = q(
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
), rt = q(
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
), tt = q(
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
), at = q(
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
), ot = q(
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
), ze = se(ne(({
  children: t,
  className: r,
  theme: o,
  position: s,
  size: c,
  width: l,
  variant: i,
  logo: u,
  onLogoClick: f,
  hideOnScroll: n = !1,
  scrollThreshold: a = 50,
  mobileMenuBreakpoint: g = "md",
  transparent: y = !1,
  transparentColor: b = "white",
  ...L
}, D) => {
  const { theme: N } = ae(), x = o || N || "enterprise", [R, k] = $(!1), [v, z] = $(!1), [V, E] = $(!1), [h, C] = $(0), w = () => k((j) => !j);
  K(() => {
    const j = () => {
      window.innerWidth >= 768 && k(!1);
    };
    return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
  }, []), K(() => {
    const j = () => {
      const T = window.scrollY;
      T > a ? z(!0) : z(!1), n && (T > h && T > 100 ? E(!0) : E(!1)), C(T);
    };
    return window.addEventListener("scroll", j, { passive: !0 }), () => window.removeEventListener("scroll", j);
  }, [n, h, a]);
  const M = y && !v, _ = et({
    theme: x,
    position: s,
    size: c,
    width: l,
    variant: M ? "transparent" : i,
    className: A(r, {
      "translate-y-0": !V,
      "-translate-y-full": V
    })
  });
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      ref: D,
      className: _,
      style: {
        transition: "transform 0.3s ease",
        ...M && {
          "--transparent-color": b === "white" ? "white" : "var(--foreground-primary)"
        }
      },
      ...L,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: A(
          "flex items-center justify-between w-full",
          l === "contained" && "max-w-7xl mx-auto px-4"
        ), children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center", children: typeof u == "string" ? /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "/",
              onClick: f,
              className: "focus:outline-none",
              children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: u,
                  alt: "Logo",
                  className: "h-8 w-auto"
                }
              )
            }
          ) : u ? /* @__PURE__ */ e.jsx("div", { onClick: f, children: u }) : /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "/",
              onClick: f,
              className: A(
                "text-xl font-bold",
                M ? "text-[var(--transparent-color)]" : "text-foreground-primary"
              ),
              children: "Lumina UI"
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "hidden md:flex items-center space-x-4", children: t }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              className: at({ theme: x, open: R }),
              "aria-expanded": R,
              onClick: w,
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Toggle menu" }),
                R ? /* @__PURE__ */ e.jsx("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: ot({ theme: x, open: R }), children: /* @__PURE__ */ e.jsx("nav", { className: "flex flex-col space-y-2 py-2", children: t }) })
      ]
    }
  );
})), er = se(ne(({
  children: t,
  className: r,
  placement: o,
  size: s,
  ...c
}, l) => {
  const i = rt({
    placement: o,
    size: s,
    className: r
  });
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: l,
      className: i,
      ...c,
      children: t
    }
  );
})), rr = se(ne(({
  children: t,
  className: r,
  theme: o,
  size: s,
  active: c,
  variant: l,
  href: i,
  onClick: u,
  ...f
}, n) => {
  const { theme: a } = ae(), y = tt({
    theme: o || a || "enterprise",
    size: s,
    active: c,
    variant: l,
    className: r
  });
  return i ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ref: n,
      href: i,
      className: y,
      onClick: u,
      ...f,
      children: t
    }
  ) : /* @__PURE__ */ e.jsx(
    "button",
    {
      ref: n,
      type: "button",
      className: y,
      onClick: u,
      ...f,
      children: t
    }
  );
}));
ze.displayName = "Header";
er.displayName = "Navigation";
rr.displayName = "NavItem";
ze.Navigation = er;
ze.NavItem = rr;
const st = q(
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
), nt = () => {
  try {
    return le();
  } catch {
    return console.warn("ThemeProvider not found, using default theme"), { theme: "enterprise" };
  }
}, De = se(ne(({
  children: t,
  className: r,
  theme: o,
  size: s,
  intensity: c,
  hoverEffect: l,
  glareEnabled: i = !0,
  rotateReverse: u = !1,
  glareOpacity: f = 0.1,
  glareColor: n = "255, 255, 255",
  maxRotation: a = 20,
  // Maximum rotation in degrees
  perspective: g = 1e3,
  // Perspective value
  ...y
}, b) => {
  const { theme: L } = nt(), D = o || L || "enterprise", [N, x] = $(0), [R, k] = $(0), [v, z] = $(0), [V, E] = $(0), [h, C] = $(!1), w = J(null), M = J(null), _ = () => {
    switch (c) {
      case "subtle":
        return { maxRotation: a * 0.5, perspective: g * 1.2 };
      case "medium":
        return { maxRotation: a, perspective: g };
      case "strong":
        return { maxRotation: a * 1.5, perspective: g * 0.8 };
      default:
        return { maxRotation: a, perspective: g };
    }
  }, { maxRotation: j, perspective: T } = _(), P = (p) => {
    if (!w.current) return;
    const m = w.current.getBoundingClientRect(), S = m.left + m.width / 2, F = m.top + m.height / 2, Y = (p.clientX - S) / (m.width / 2), W = (p.clientY - F) / (m.height / 2), O = u ? -1 : 1, X = W * j * O, U = Y * -j * O;
    if (x(X), k(U), i && M.current) {
      const re = (Y + 1) * 50, Q = (W + 1) * 50;
      z(re), E(Q);
    }
  }, I = () => C(!0), B = () => {
    C(!1), x(0), k(0);
  }, H = {
    transform: h ? `perspective(${T}px) rotateX(${N}deg) rotateY(${R}deg)` : "",
    transition: h ? "transform 0.1s ease" : "transform 0.5s ease-out"
  }, G = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    background: `radial-gradient(circle at ${v}% ${V}%, rgba(${n}, ${f}), transparent)`,
    transform: "translateZ(1px)",
    opacity: h ? 1 : 0,
    transition: "opacity 0.5s ease-out"
  }, d = st({
    theme: D,
    size: s,
    intensity: c,
    hoverEffect: l,
    className: r
  });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: (p) => {
        b && (typeof b == "function" ? b(p) : b.current = p), w.current = p;
      },
      className: A(d),
      style: H,
      onMouseMove: P,
      onMouseEnter: I,
      onMouseLeave: B,
      ...y,
      children: [
        t,
        i && /* @__PURE__ */ e.jsx("div", { ref: M, style: G })
      ]
    }
  );
}));
De.displayName = "HoverCard3D";
const tr = se(ne(({
  theme: t = "enterprise",
  children: r,
  ...o
}, s) => {
  let c = !1;
  try {
    le(), c = !0;
  } catch {
    c = !1;
  }
  return c ? /* @__PURE__ */ e.jsx(De, { ref: s, theme: t, ...o, children: r }) : /* @__PURE__ */ e.jsx(Ue, { theme: t, children: /* @__PURE__ */ e.jsx(De, { ref: s, theme: t, ...o, children: r }) });
}));
tr.displayName = "HoverCard3DWithTheme";
const it = ({
  imageSrc: t,
  imageAlt: r,
  title: o,
  description: s,
  theme: c = "techDark",
  hoverEffect: l = "glow",
  intensity: i = "medium",
  className: u,
  ...f
}) => /* @__PURE__ */ e.jsx(
  tr,
  {
    theme: c,
    hoverEffect: l,
    intensity: i,
    className: `w-full overflow-hidden ${u}`,
    glareEnabled: !0,
    glareOpacity: 0.15,
    ...f,
    children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative w-full h-48 overflow-hidden rounded-t-lg", children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: r,
            className: "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-5 flex-grow", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold mb-2", children: o }),
        /* @__PURE__ */ e.jsx("p", { className: "text-foreground-secondary text-sm mb-4", children: s }),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-auto pt-4 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsx("button", { className: "px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm", children: "Learn more" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-foreground-tertiary", children: "Hover to interact" })
        ] })
      ] })
    ] })
  }
), ea = () => {
  const t = [
    {
      id: 1,
      imageSrc: "/api/placeholder/800/600",
      imageAlt: "Product design visualization",
      title: "Enterprise Solutions",
      description: "Streamlined business workflows with our enterprise-grade solutions.",
      theme: "enterprise"
    },
    {
      id: 2,
      imageSrc: "/api/placeholder/800/600",
      imageAlt: "Tech dashboard visualization",
      title: "Advanced Analytics",
      description: "Powerful data visualization and real-time insights for your business.",
      theme: "techDark"
    },
    {
      id: 3,
      imageSrc: "/api/placeholder/800/600",
      imageAlt: "Glass interface visualization",
      title: "Modern Interface",
      description: "Sleek, intuitive interfaces with cutting-edge glassmorphism design.",
      theme: "glass"
    }
  ];
  return /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 p-6", children: t.map((r) => /* @__PURE__ */ e.jsx(
    it,
    {
      imageSrc: r.imageSrc,
      imageAlt: r.imageAlt,
      title: r.title,
      description: r.description,
      theme: r.theme
    },
    r.id
  )) });
}, lt = se(({
  className: t,
  children: r,
  cols: o = 3,
  gap: s = 4
}) => {
  const { themeObject: c } = le(), l = () => ({
    "md:grid-cols-1": o === 1,
    "md:grid-cols-2": o === 2,
    "md:grid-cols-3": o === 3,
    "md:grid-cols-4": o === 4
  });
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: je(
        "mx-auto grid max-w-7xl grid-cols-1 md:auto-rows-[18rem]",
        `gap-${s}`,
        l(),
        t
      ),
      children: r
    }
  );
});
lt.displayName = "BentoGrid";
const dt = se(({
  className: t,
  title: r,
  description: o,
  header: s,
  icon: c,
  hoverEffect: l = "magnet",
  intensity: i = 1
}) => {
  const { themeObject: u, theme: f } = le(), n = J(null), [a, g] = $(""), [y, b] = $(!1), L = ee((v) => {
    if (!n.current || l === "none") return;
    const z = n.current.getBoundingClientRect(), V = v.clientX - z.left, E = v.clientY - z.top, h = z.width / 2, C = z.height / 2, w = (V - h) / h, M = (E - C) / C;
    if (l === "tilt") {
      const _ = 10 * i;
      g(`perspective(1000px) rotateX(${M * -_}deg) rotateY(${w * _}deg)`);
    } else if (l === "float")
      g("translateY(-10px)");
    else if (l === "magnet") {
      const _ = 12 * i;
      g(`translate(${w * _}px, ${M * _}px)`);
    } else l === "glow" && g("scale(1.02)");
  }, [l, i]), D = ee(() => {
    g(""), b(!1);
  }, []), N = ee(() => {
    b(!0);
  }, []), x = () => {
    switch (f) {
      case "enterprise":
        return "bg-white border border-gray-200 shadow-lg";
      case "techDark":
        return "bg-gray-900 border border-gray-800 shadow-xl gradient-border-1";
      case "glass":
        return "glass-effect border border-white/30 backdrop-blur-lg";
      case "neumorphicLight":
        return "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none";
      case "glow":
        return "bg-gray-900/90 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]";
      case "3d":
        return "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform-gpu shadow-xl";
      default:
        return "bg-white border border-gray-200 shadow-lg";
    }
  }, R = () => {
    switch (f) {
      case "enterprise":
      case "neumorphicLight":
      case "3d":
        return "text-gray-900 dark:text-white";
      default:
        return "text-white";
    }
  }, k = () => {
    if (l !== "glow") return "";
    switch (f) {
      case "enterprise":
        return "hover:shadow-blue-glow";
      case "techDark":
        return "hover:shadow-purple-glow";
      case "glass":
        return "hover:shadow-white-glow";
      case "neumorphicLight":
        return "hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]";
      case "glow":
        return "hover:shadow-multi-glow";
      case "3d":
        return "hover:shadow-blue-glow dark:hover:shadow-blue-glow";
      default:
        return "hover:shadow-lg";
    }
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: n,
      className: je(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition-all duration-300 will-change-transform",
        x(),
        R(),
        k(),
        t
      ),
      style: {
        transform: a,
        transition: y ? "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)" : "transform 0.5s ease-out"
      },
      onMouseMove: L,
      onMouseLeave: D,
      onMouseEnter: N,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden rounded-lg bg-gray-900 dark:bg-black aspect-[2/1]", children: s }),
        /* @__PURE__ */ e.jsxs("div", { className: "transition duration-200 group-hover/bento:translate-x-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "mb-2 text-xs font-medium text-blue-500 dark:text-blue-400", children: c }),
          /* @__PURE__ */ e.jsx("div", { className: "mb-2 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200", children: r }),
          /* @__PURE__ */ e.jsx("div", { className: "font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300", children: o })
        ] })
      ]
    }
  );
});
dt.displayName = "BentoGridItem";
const ct = q(
  "relative overflow-hidden",
  {
    variants: {
      theme: {
        enterprise: "bg-white",
        techDark: "bg-gray-950",
        glass: "bg-gray-900/80 backdrop-blur-lg",
        neumorphicLight: "bg-[#e0e5ec]",
        glow: "bg-gray-950",
        "3d": "bg-white dark:bg-gray-900"
      },
      size: {
        sm: "min-h-40",
        md: "min-h-64",
        lg: "min-h-96",
        full: "min-h-screen"
      },
      density: {
        low: "",
        medium: "",
        high: ""
      },
      beamSize: {
        thin: "",
        medium: "",
        thick: ""
      },
      cursorGlow: {
        none: "",
        subtle: "",
        medium: "",
        strong: ""
      },
      colorScheme: {
        blue: "",
        purple: "",
        cyan: "",
        pink: "",
        amber: "",
        multi: ""
      }
    },
    defaultVariants: {
      theme: "techDark",
      size: "full",
      density: "medium",
      beamSize: "medium",
      cursorGlow: "medium",
      colorScheme: "blue"
    }
  }
), Be = (t, r) => {
  var s;
  const o = {
    blue: {
      enterprise: ["rgba(59, 130, 246, 0.6)", "rgba(37, 99, 235, 0.5)"],
      techDark: ["rgba(59, 130, 246, 0.6)", "rgba(37, 99, 235, 0.5)"],
      glass: ["rgba(59, 130, 246, 0.4)", "rgba(37, 99, 235, 0.3)"],
      neumorphicLight: ["rgba(59, 130, 246, 0.4)", "rgba(37, 99, 235, 0.3)"],
      glow: ["rgba(59, 130, 246, 0.7)", "rgba(37, 99, 235, 0.6)"],
      "3d": ["rgba(59, 130, 246, 0.6)", "rgba(37, 99, 235, 0.5)"]
    },
    purple: {
      enterprise: ["rgba(139, 92, 246, 0.6)", "rgba(124, 58, 237, 0.5)"],
      techDark: ["rgba(139, 92, 246, 0.6)", "rgba(124, 58, 237, 0.5)"],
      glass: ["rgba(139, 92, 246, 0.4)", "rgba(124, 58, 237, 0.3)"],
      neumorphicLight: ["rgba(139, 92, 246, 0.4)", "rgba(124, 58, 237, 0.3)"],
      glow: ["rgba(139, 92, 246, 0.7)", "rgba(124, 58, 237, 0.6)"],
      "3d": ["rgba(139, 92, 246, 0.6)", "rgba(124, 58, 237, 0.5)"]
    },
    cyan: {
      enterprise: ["rgba(6, 182, 212, 0.6)", "rgba(8, 145, 178, 0.5)"],
      techDark: ["rgba(6, 182, 212, 0.6)", "rgba(8, 145, 178, 0.5)"],
      glass: ["rgba(6, 182, 212, 0.4)", "rgba(8, 145, 178, 0.3)"],
      neumorphicLight: ["rgba(6, 182, 212, 0.4)", "rgba(8, 145, 178, 0.3)"],
      glow: ["rgba(6, 182, 212, 0.7)", "rgba(8, 145, 178, 0.6)"],
      "3d": ["rgba(6, 182, 212, 0.6)", "rgba(8, 145, 178, 0.5)"]
    },
    pink: {
      enterprise: ["rgba(236, 72, 153, 0.6)", "rgba(219, 39, 119, 0.5)"],
      techDark: ["rgba(236, 72, 153, 0.6)", "rgba(219, 39, 119, 0.5)"],
      glass: ["rgba(236, 72, 153, 0.4)", "rgba(219, 39, 119, 0.3)"],
      neumorphicLight: ["rgba(236, 72, 153, 0.4)", "rgba(219, 39, 119, 0.3)"],
      glow: ["rgba(236, 72, 153, 0.7)", "rgba(219, 39, 119, 0.6)"],
      "3d": ["rgba(236, 72, 153, 0.6)", "rgba(219, 39, 119, 0.5)"]
    },
    amber: {
      enterprise: ["rgba(245, 158, 11, 0.6)", "rgba(217, 119, 6, 0.5)"],
      techDark: ["rgba(245, 158, 11, 0.6)", "rgba(217, 119, 6, 0.5)"],
      glass: ["rgba(245, 158, 11, 0.4)", "rgba(217, 119, 6, 0.3)"],
      neumorphicLight: ["rgba(245, 158, 11, 0.4)", "rgba(217, 119, 6, 0.3)"],
      glow: ["rgba(245, 158, 11, 0.7)", "rgba(217, 119, 6, 0.6)"],
      "3d": ["rgba(245, 158, 11, 0.6)", "rgba(217, 119, 6, 0.5)"]
    },
    multi: {
      enterprise: [
        "rgba(59, 130, 246, 0.6)",
        "rgba(139, 92, 246, 0.5)",
        "rgba(236, 72, 153, 0.6)",
        "rgba(6, 182, 212, 0.5)"
      ],
      techDark: [
        "rgba(59, 130, 246, 0.6)",
        "rgba(139, 92, 246, 0.5)",
        "rgba(236, 72, 153, 0.6)",
        "rgba(6, 182, 212, 0.5)"
      ],
      glass: [
        "rgba(59, 130, 246, 0.4)",
        "rgba(139, 92, 246, 0.3)",
        "rgba(236, 72, 153, 0.4)",
        "rgba(6, 182, 212, 0.3)"
      ],
      neumorphicLight: [
        "rgba(59, 130, 246, 0.4)",
        "rgba(139, 92, 246, 0.3)",
        "rgba(236, 72, 153, 0.4)",
        "rgba(6, 182, 212, 0.3)"
      ],
      glow: [
        "rgba(59, 130, 246, 0.7)",
        "rgba(139, 92, 246, 0.6)",
        "rgba(236, 72, 153, 0.7)",
        "rgba(6, 182, 212, 0.6)"
      ],
      "3d": [
        "rgba(59, 130, 246, 0.6)",
        "rgba(139, 92, 246, 0.5)",
        "rgba(236, 72, 153, 0.6)",
        "rgba(6, 182, 212, 0.5)"
      ]
    }
  };
  return ((s = o[t]) == null ? void 0 : s[r]) || o.blue[r];
}, ut = (t) => {
  const r = {
    low: 10,
    medium: 20,
    high: 30
  };
  return r[t] || r.medium;
}, gt = (t) => {
  const r = {
    thin: { min: 2, max: 4, lengthMin: 100, lengthMax: 200 },
    medium: { min: 4, max: 8, lengthMin: 150, lengthMax: 300 },
    thick: { min: 6, max: 12, lengthMin: 200, lengthMax: 400 }
  };
  return r[t] || r.medium;
}, mt = (t, r) => {
  const o = {
    size: 200,
    opacity: 0.6,
    blur: "3xl"
  };
  return t === "subtle" ? (o.opacity = 0.3, o.blur = "xl") : t === "strong" && (o.opacity = 0.8, o.size = 300, o.blur = "3xl"), r === "glass" ? o.opacity *= 0.7 : r === "glow" ? (o.opacity *= 1.3, o.size *= 1.2) : r === "neumorphicLight" && (o.opacity *= 0.5), o;
}, ra = ({
  children: t,
  className: r,
  theme: o,
  size: s,
  density: c,
  beamSize: l,
  cursorGlow: i,
  colorScheme: u,
  ...f
}) => {
  const { theme: n } = ae(), a = o || n, [g, y] = $({ x: 0, y: 0 }), b = J(null), [L, D] = $([]), [N, x] = $({ width: 0, height: 0 });
  K(() => {
    if (!b.current) return;
    const v = () => {
      const E = ut(c), h = gt(l), C = Be(u, a), w = Array.from({ length: E }, (M, _) => {
        const j = Math.random() * (h.max - h.min) + h.min, T = Math.random() * (h.lengthMax - h.lengthMin) + h.lengthMin;
        return {
          id: _,
          width: `${j}px`,
          height: `${T}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          rotate: `${Math.random() * 360}deg`,
          color: C[Math.floor(Math.random() * C.length)],
          duration: Math.random() * 5 + 10,
          delay: Math.random() * 5
        };
      });
      D(w);
    }, z = () => {
      if (!b.current) return;
      const E = b.current.getBoundingClientRect();
      x({ width: E.width, height: E.height }), v();
    };
    z();
    const V = new ResizeObserver(z);
    return V.observe(b.current), () => {
      b.current && V.unobserve(b.current);
    };
  }, [c, l, u, a]), K(() => {
    const v = (z) => {
      if (!b.current) return;
      const { clientX: V, clientY: E } = z, { left: h, top: C } = b.current.getBoundingClientRect(), w = V - h, M = E - C;
      y({ x: w, y: M });
    };
    return window.addEventListener("mousemove", v), () => {
      window.removeEventListener("mousemove", v);
    };
  }, []);
  const R = ct({
    theme: a,
    size: s,
    density: c,
    beamSize: l,
    cursorGlow: i,
    colorScheme: u,
    className: r
  }), k = () => {
    if (i === "none") return { display: "none" };
    const { size: v, opacity: z } = mt(i, a), V = Be(u, a);
    let E;
    return u === "multi" ? E = `linear-gradient(135deg, ${V.join(", ")})` : E = `linear-gradient(135deg, ${V[0]}, ${V[1]})`, {
      width: v,
      height: v,
      left: g.x - v / 2,
      top: g.y - v / 2,
      opacity: z,
      background: E
    };
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: A(R),
      ...f,
      children: [
        L.map((v) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute",
            style: {
              width: v.width,
              height: v.height,
              left: v.left,
              top: v.top,
              transform: `rotate(${v.rotate})`,
              background: v.color,
              opacity: 0.2,
              animation: `beam-animation ${v.duration}s infinite alternate ease-in-out ${v.delay}s`
            }
          },
          v.id
        )),
        i !== "none" && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `absolute rounded-full blur-${i === "subtle" ? "xl" : i === "strong" ? "3xl" : "2xl"} transition-opacity duration-300`,
            style: k()
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "relative z-10", children: t }),
        /* @__PURE__ */ e.jsx("style", { jsx: !0, global: !0, children: `
        @keyframes beam-animation {
          0% {
            opacity: 0.1;
            transform: rotate(${Math.random() * 360}deg) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: rotate(${Math.random() * 360}deg) scale(1.1);
          }
          100% {
            opacity: 0.1;
            transform: rotate(${Math.random() * 360}deg) scale(1);
          }
        }
      ` })
      ]
    }
  );
}, ft = q(
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
), bt = q(
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
), pt = q(
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
), ht = q(
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
), xt = q(
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
), He = q(
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
), ta = ({
  testimonials: t,
  className: r,
  theme: o,
  autoplay: s = !0,
  autoplaySpeed: c = 5e3,
  ...l
}) => {
  const { theme: i } = ae(), u = o || i, [f, n] = $(0), [a, g] = $(!1), y = J(null), b = () => {
    a || (g(!0), n((h) => (h + 1) % t.length), setTimeout(() => {
      g(!1);
    }, 900));
  }, L = () => {
    a || (g(!0), n((h) => (h - 1 + t.length) % t.length), setTimeout(() => {
      g(!1);
    }, 900));
  };
  K(() => (s && (y.current = setInterval(() => {
    b();
  }, c)), () => {
    y.current && clearInterval(y.current);
  }), [s, c, f, a]);
  const D = () => {
    s && y.current && (clearInterval(y.current), y.current = setInterval(() => {
      b();
    }, c));
  }, N = (h) => {
    const C = t.length;
    return h === f ? "front" : h === (f + 1) % C ? "middle" : h === (f + 2) % C ? "back" : "hidden";
  };
  K(() => {
    const h = (C) => {
      C.key === "ArrowLeft" ? (L(), D()) : C.key === "ArrowRight" && (b(), D());
    };
    return window.addEventListener("keydown", h), () => {
      window.removeEventListener("keydown", h);
    };
  }, [f, a]);
  const x = ft({
    theme: u,
    className: r
  }), R = bt({
    theme: u
  }), k = pt({
    theme: u
  }), v = xt({
    theme: u
  }), z = He({
    theme: u
  }), V = He({
    theme: u
  }), E = t[f];
  return /* @__PURE__ */ e.jsxs("div", { className: x, ...l, children: [
    /* @__PURE__ */ e.jsxs("div", { className: R, children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-4xl font-bold mb-2", children: E.name }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xl opacity-80 mb-6", children: E.title }),
        /* @__PURE__ */ e.jsx("div", { className: v, children: /* @__PURE__ */ e.jsx("p", { className: "text-2xl leading-relaxed", children: E.quote }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-4", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: z,
            onClick: () => {
              L(), D();
            },
            "aria-label": "Previous testimonial",
            children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e.jsx("path", { d: "M15 18l-6-6 6-6" }) })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: V,
            onClick: () => {
              b(), D();
            },
            "aria-label": "Next testimonial",
            children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e.jsx("path", { d: "M9 18l6-6-6-6" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: k, children: /* @__PURE__ */ e.jsx("div", { className: "relative w-full max-w-[350px] aspect-square", children: t.map((h, C) => {
      const w = N(C), M = ht({
        theme: u,
        position: w
      });
      return w === "hidden" ? null : /* @__PURE__ */ e.jsx(
        "div",
        {
          className: A(M),
          style: {
            width: "100%",
            height: "100%",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            transformOrigin: "bottom left"
          },
          children: h.image && /* @__PURE__ */ e.jsx(
            "img",
            {
              src: h.image,
              alt: h.name,
              className: "w-full h-full object-cover"
            }
          )
        },
        C
      );
    }) }) })
  ] });
}, wt = q(
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
), Oe = q(
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
), yt = q(
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
), vt = q(
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
), _t = (t, r, o, s, c, l) => {
  let i = r, u = o, f = s, n = c, a = l;
  return t === "techDark" && !r ? (i = "dark", s || (f = "xl"), l || (a = "none")) : t === "glass" && !r && (i = "glass-premium", s || (f = "xl"), c || (n = "sm"), l || (a = "glow")), {
    variant: i,
    size: u,
    rounded: f,
    padding: n,
    effect: a
  };
}, aa = ({
  // Carousel appearance props
  variant: t,
  size: r,
  rounded: o,
  padding: s,
  effect: c,
  className: l = "",
  style: i = {},
  // Carousel configuration props
  children: u,
  autoPlay: f = !1,
  autoPlayInterval: n = 5e3,
  showArrows: a = !0,
  showIndicators: g = !0,
  loop: y = !0,
  initialIndex: b = 0,
  navButtonSize: L = "md",
  gap: D = 0,
  // Other props
  ...N
}) => {
  const { theme: x } = le(), [R, k] = $(b), [v, z] = $(0), [V, E] = $(0), h = J(null), C = J(null), {
    variant: w,
    size: M,
    rounded: _,
    padding: j,
    effect: T
  } = _t(x, t, r, o, s, c);
  K(() => {
    if (!h.current) return;
    const m = Array.from(h.current.children);
    if (E(m.length), m.length > 0 && C.current) {
      const S = C.current.offsetWidth;
      z(S), m.forEach((F) => {
        F.style.minWidth = `${S}px`, F.style.maxWidth = `${S}px`;
      });
    }
    b > 0 && b < m.length && k(b);
  }, [u, b]), K(() => {
    if (!h.current || v === 0) return;
    const m = -R * (v + D);
    h.current.style.transform = `translateX(${m}px)`;
  }, [R, v, D]), K(() => {
    if (!f || V <= 1) return;
    const m = setInterval(() => {
      I();
    }, n);
    return () => clearInterval(m);
  }, [f, n, R, V]), K(() => {
    const m = () => {
      if (!C.current || !h.current) return;
      const S = C.current.offsetWidth;
      z(S), Array.from(h.current.children).forEach((W) => {
        W.style.minWidth = `${S}px`, W.style.maxWidth = `${S}px`;
      });
      const Y = -R * (S + D);
      h.current.style.transform = `translateX(${Y}px)`;
    };
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [R, D]);
  const P = () => {
    R > 0 ? k(R - 1) : y && V > 0 && k(V - 1);
  }, I = () => {
    R < V - 1 ? k(R + 1) : y && V > 0 && k(0);
  }, B = (m) => {
    m >= 0 && m < V && k(m);
  }, H = wt({
    variant: w,
    size: M,
    rounded: _,
    padding: j,
    effect: T,
    className: l
  }), G = Oe({
    variant: w,
    size: L,
    position: "prev"
  }), d = Oe({
    variant: w,
    size: L,
    position: "next"
  }), p = yt({
    variant: w
  });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: C,
      className: H,
      style: i,
      ...N,
      children: [
        a && V > 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: G,
              onClick: P,
              "aria-label": "Previous slide",
              children: /* @__PURE__ */ e.jsx(fr, {})
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: d,
              onClick: I,
              "aria-label": "Next slide",
              children: /* @__PURE__ */ e.jsx(br, {})
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: h,
            className: "flex transition-transform duration-300 ease-in-out",
            style: { gap: `${D}px` },
            children: u
          }
        ),
        g && V > 1 && /* @__PURE__ */ e.jsx("div", { className: p, children: Array.from({ length: V }).map((m, S) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: vt({
              variant: w,
              active: S === R
            }),
            onClick: () => B(S),
            "aria-label": `Go to slide ${S + 1}`,
            "aria-current": S === R ? "true" : "false"
          },
          S
        )) })
      ]
    }
  );
}, oa = ({
  className: t = "",
  children: r,
  ...o
}) => {
  const s = `relative h-full flex-shrink-0 ${t}`;
  return /* @__PURE__ */ e.jsx("div", { className: s, ...o, children: r });
}, sa = ({
  className: t = "",
  position: r = "bottom",
  children: o,
  ...s
}) => {
  const l = `absolute ${{
    bottom: "bottom-0 left-0 right-0",
    top: "top-0 left-0 right-0",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0"
  }[r]} p-4 ${t}`;
  return /* @__PURE__ */ e.jsx("div", { className: l, ...s, children: o });
}, kt = q(
  // Base styles for all HeroGrid components
  "relative grid gap-4 w-full mx-auto",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary text-foreground-primary",
        techDark: "bg-background-primary text-foreground-primary",
        glass: "text-foreground-primary backdrop-blur-md"
      },
      // Layout variants
      layout: {
        classic: "grid-cols-1 md:grid-cols-2 items-center",
        centered: "grid-cols-1 text-center items-center justify-items-center",
        asymmetric: "grid-cols-1 md:grid-cols-12 items-center",
        feature: "grid-cols-1 md:grid-cols-3 gap-8"
      },
      // Container size variants
      size: {
        sm: "max-w-4xl",
        md: "max-w-5xl",
        lg: "max-w-6xl",
        full: "max-w-full"
      },
      // Spacing variants
      spacing: {
        compact: "py-8 px-4",
        normal: "py-12 px-6",
        relaxed: "py-16 px-8",
        spacious: "py-24 px-8"
      },
      // Background style variants
      background: {
        solid: "",
        gradient: "",
        image: "bg-no-repeat bg-cover bg-center",
        pattern: "bg-repeat"
      },
      // Content alignment variants
      alignment: {
        start: "text-left justify-items-start",
        center: "text-center justify-items-center",
        end: "text-right justify-items-end"
      }
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        background: "gradient",
        className: "bg-gradient-to-r from-primary-light to-primary"
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        background: "gradient",
        className: "bg-gradient-to-r from-background-secondary to-background-primary border-b border-border-strong"
      },
      // Glass theme specifics
      {
        theme: "glass",
        background: "gradient",
        className: "bg-gradient-to-r from-background-primary/70 to-background-secondary/70 backdrop-blur-lg"
      },
      // Layout specifics
      {
        layout: "asymmetric",
        className: "[&>*:first-child]:md:col-span-7 [&>*:last-child]:md:col-span-5"
      },
      // Background image + overlay for each theme
      {
        theme: "enterprise",
        background: "image",
        className: "after:absolute after:inset-0 after:bg-primary-darker/30 after:z-0 [&>*]:relative [&>*]:z-10"
      },
      {
        theme: "techDark",
        background: "image",
        className: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-background-primary/90 after:to-background-primary/70 after:z-0 [&>*]:relative [&>*]:z-10"
      },
      {
        theme: "glass",
        background: "image",
        className: "after:absolute after:inset-0 after:backdrop-blur-xl after:bg-background-primary/40 after:z-0 [&>*]:relative [&>*]:z-10"
      }
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      layout: "classic",
      size: "lg",
      spacing: "normal",
      background: "solid",
      alignment: "start"
    }
  }
), xe = se(ne(({
  children: t,
  className: r,
  theme: o,
  layout: s,
  size: c,
  spacing: l,
  background: i,
  alignment: u,
  backgroundImage: f,
  backgroundOverlay: n = !0,
  accentColor: a,
  containerClassName: g,
  ...y
}, b) => {
  const { theme: L } = ae(), N = kt({
    theme: o || L || "enterprise",
    layout: s,
    size: c,
    spacing: l,
    background: i,
    alignment: u,
    className: r
  }), x = {
    ...f && { backgroundImage: `url(${f})` },
    ...a && { "--accent-color": a }
  };
  return /* @__PURE__ */ e.jsx(
    "section",
    {
      ref: b,
      className: N,
      style: x,
      ...y,
      children: /* @__PURE__ */ e.jsx("div", { className: A(
        "container mx-auto h-full",
        g,
        { "relative z-10": n && i === "image" }
      ), children: t })
    }
  );
}));
xe.displayName = "HeroGrid";
const Nt = ({ children: t, className: r, as: o = "h1", ...s }) => /* @__PURE__ */ e.jsx(
  o,
  {
    className: A("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4", r),
    ...s,
    children: t
  }
), jt = ({ children: t, className: r, as: o = "h2", ...s }) => /* @__PURE__ */ e.jsx(
  o,
  {
    className: A("text-xl md:text-2xl text-foreground-secondary font-medium mb-6", r),
    ...s,
    children: t
  }
), Ct = ({ children: t, className: r, ...o }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: A("flex flex-col space-y-4", r),
    ...o,
    children: t
  }
), Mt = ({ children: t, className: r, imageUrl: o, videoUrl: s, alt: c = "", ...l }) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: A("relative w-full h-full min-h-[200px]", r),
    ...l,
    children: [
      o && !s && /* @__PURE__ */ e.jsx(
        "img",
        {
          src: o,
          alt: c,
          className: "w-full h-auto object-cover rounded-lg shadow-lg"
        }
      ),
      s && /* @__PURE__ */ e.jsx(
        "video",
        {
          src: s,
          className: "w-full h-auto object-cover rounded-lg shadow-lg",
          controls: !1,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0
        }
      ),
      !o && !s && t
    ]
  }
), Tt = ({ children: t, className: r, ...o }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: A("flex flex-wrap gap-4 mt-8", r),
    ...o,
    children: t
  }
);
xe.Title = Nt;
xe.Subtitle = jt;
xe.Content = Ct;
xe.Media = Mt;
xe.Actions = Tt;
const St = q(
  // Base styles for all Modal components
  "fixed z-50 max-h-[calc(100vh-2rem)] overflow-auto perspective-1000 transform-gpu",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary border border-border shadow-lg rounded-lg text-foreground-primary",
        techDark: "bg-background-primary border border-transparent gradient-border-1 shadow-xl rounded-xl text-white",
        glass: "glass-effect border border-border backdrop-blur-lg rounded-xl text-white",
        neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none rounded-2xl text-gray-700",
        glow: "bg-gray-900/90 border border-transparent rounded-xl text-white shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
        "3d": "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white transform-gpu shadow-xl"
      },
      // Size variants
      size: {
        xs: "w-full max-w-xs",
        sm: "w-full max-w-sm",
        md: "w-full max-w-md",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-xl",
        "2xl": "w-full max-w-2xl",
        full: "w-full h-full max-w-full"
      },
      // Position variants
      position: {
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        top: "top-4 left-1/2 -translate-x-1/2",
        bottom: "bottom-4 left-1/2 -translate-x-1/2",
        left: "left-4 top-1/2 -translate-y-1/2",
        right: "right-4 top-1/2 -translate-y-1/2"
      },
      // Depth effect (3D)
      depth: {
        flat: "",
        shallow: "transform-gpu shadow-lg",
        medium: "transform-gpu shadow-xl",
        deep: "transform-gpu shadow-2xl"
      }
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        className: "border-gray-200"
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        className: "bg-gray-900/90 text-gray-100"
      },
      // Glass theme specifics
      {
        theme: "glass",
        className: "bg-white/20 border-white/30"
      },
      // Neumorphic Light theme specifics
      {
        theme: "neumorphicLight",
        className: "text-gray-700"
      },
      // Glow theme specifics
      {
        theme: "glow",
        className: "glow-effect bg-gray-900/95 text-white"
      },
      // 3D theme specifics
      {
        theme: "3d",
        depth: "deep",
        className: "transform-style-3d"
      }
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      position: "center",
      depth: "medium"
    }
  }
), Dt = q(
  "fixed inset-0 z-40 transition-opacity",
  {
    variants: {
      theme: {
        enterprise: "bg-black/50",
        techDark: "bg-black/70",
        glass: "backdrop-blur-sm bg-black/30",
        neumorphicLight: "bg-gray-900/20 backdrop-blur-sm",
        glow: "bg-black/80 backdrop-blur-sm",
        "3d": "bg-black/60"
      }
    },
    defaultVariants: {
      theme: "enterprise"
    }
  }
), me = {
  fade: {
    enter: "transition-opacity ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  },
  zoom: {
    enter: "transition-all ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "transition-all ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  },
  slide: {
    top: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 -translate-y-8",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 -translate-y-8"
    },
    bottom: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 translate-y-8",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-8"
    },
    left: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 -translate-x-8",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-8"
    },
    right: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 translate-x-8",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 translate-x-8"
    }
  },
  flip: {
    enter: "transition-all ease-out duration-300 perspective-1000",
    enterFrom: "opacity-0 rotateX(-20deg)",
    enterTo: "opacity-100 rotateX(0)",
    leave: "transition-all ease-in duration-200 perspective-1000",
    leaveFrom: "opacity-100 rotateX(0)",
    leaveTo: "opacity-0 rotateX(20deg)"
  },
  rotate: {
    enter: "transition-all ease-out duration-300 perspective-1000",
    enterFrom: "opacity-0 rotate-12",
    enterTo: "opacity-100 rotate-0",
    leave: "transition-all ease-in duration-200 perspective-1000",
    leaveFrom: "opacity-100 rotate-0",
    leaveTo: "opacity-0 -rotate-12"
  },
  bounce: {
    enter: "transition-all ease-out duration-300",
    enterFrom: "opacity-0 translate-y-12",
    enterTo: "opacity-100 translate-y-0 animate-bounce-gentle",
    leave: "transition-all ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-12"
  },
  elastic: {
    enter: "transition-all ease-elastic duration-500",
    enterFrom: "opacity-0 scale-75",
    enterTo: "opacity-100 scale-100",
    leave: "transition-all ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-75"
  }
}, Et = se(ne(({
  children: t,
  isOpen: r,
  onClose: o,
  className: s,
  theme: c,
  size: l,
  position: i,
  depth: u = "medium",
  animation: f = "zoom",
  closeOnOutsideClick: n = !0,
  showCloseButton: a = !0,
  ariaLabelledby: g,
  ariaDescribedby: y,
  overlayClassName: b,
  bodyClassName: L,
  closeButtonClassName: D,
  initialFocus: N,
  lockScroll: x = !0,
  portalTarget: R,
  showGlareEffect: k = !1,
  show3DEffect: v = !1,
  effectIntensity: z = "medium",
  ...V
}, E) => {
  const { theme: h } = ae(), C = c || h, [w, M] = $(!1), [_, j] = $(!1), [T, P] = $(0), [I, B] = $(0), [H, G] = $({ x: 50, y: 50 }), d = J(null), p = J(null), m = J(null), S = () => {
    M(!0), setTimeout(() => {
      o(), M(!1);
    }, 200);
  }, F = (te) => {
    n && p.current === te.target && S();
  }, Y = (te) => {
    te.key === "Escape" && S();
  }, O = (() => {
    if (f === "slide") {
      const te = i || "center", ie = te === "top" ? "top" : te === "bottom" ? "bottom" : te === "left" ? "left" : te === "right" ? "right" : "top";
      return {
        enter: me.slide[ie].enter,
        enterFrom: me.slide[ie].enterFrom,
        enterTo: me.slide[ie].enterTo,
        leave: me.slide[ie].leave,
        leaveFrom: me.slide[ie].leaveFrom,
        leaveTo: me.slide[ie].leaveTo
      };
    }
    return me[f] || me.fade;
  })(), X = () => {
    switch (z) {
      case "subtle":
        return { maxRotation: 3, glareOpacity: 0.05 };
      case "medium":
        return { maxRotation: 5, glareOpacity: 0.1 };
      case "strong":
        return { maxRotation: 10, glareOpacity: 0.15 };
      default:
        return { maxRotation: 5, glareOpacity: 0.1 };
    }
  }, { maxRotation: U, glareOpacity: re } = X(), Q = (te) => {
    if (!v || !d.current) return;
    const ie = d.current.getBoundingClientRect(), de = ie.left + ie.width / 2, Te = ie.top + ie.height / 2, Ve = (te.clientX - de) / (ie.width / 2), Le = (te.clientY - Te) / (ie.height / 2), ar = Le * -U, or = Ve * U;
    if (P(ar), B(or), k) {
      const sr = (Ve + 1) * 50, nr = (Le + 1) * 50;
      G({ x: sr, y: nr });
    }
  }, ue = () => {
    P(0), B(0);
  };
  if (K(() => (r && !_ && (j(!0), m.current = document.activeElement, setTimeout(() => {
    N && N.current ? N.current.focus() : d.current && d.current.focus();
  }, 0), x && (document.body.style.overflow = "hidden"), document.addEventListener("keydown", Y)), () => {
    (r || _) && (m.current && m.current.focus(), x && (document.body.style.overflow = ""), document.removeEventListener("keydown", Y), _ && j(!1));
  }), [r, N, x]), !r && !w)
    return null;
  const fe = typeof R == "string" ? document.querySelector(R) : R || document.body, be = St({
    theme: C,
    size: l,
    position: i,
    depth: u,
    className: s
  }), ge = A(
    Dt({ theme: C }),
    w ? O.leave : O.enter,
    w ? O.leaveTo : O.enterTo,
    _ ? "" : O.enterFrom,
    b
  ), Z = A(
    "absolute top-3 right-3 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary z-10",
    C === "enterprise" && "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
    C === "techDark" && "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50",
    C === "glass" && "text-white/70 hover:text-white hover:bg-white/20",
    C === "neumorphicLight" && "text-gray-500 hover:text-gray-700 hover:shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff]",
    C === "glow" && "text-white/80 hover:text-white hover:bg-white/10",
    C === "3d" && "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50",
    D
  ), ce = () => v ? {
    transform: `perspective(1000px) rotateX(${T}deg) rotateY(${I}deg)`,
    transition: "transform 0.1s ease-out"
  } : {}, pe = () => k ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundImage: `radial-gradient(circle at ${H.x}% ${H.y}%, rgba(255, 255, 255, ${re}), transparent 80%)`,
    borderRadius: "inherit",
    zIndex: 0
  } : {}, we = ce(), Ce = pe(), Me = /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: p,
      className: ge,
      onClick: F,
      "aria-hidden": "true",
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: (te) => {
            E && (typeof E == "function" ? E(te) : E.current = te), d.current = te;
          },
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": g,
          "aria-describedby": y,
          className: A(
            be,
            w ? O.leave : O.enter,
            w ? O.leaveTo : O.enterTo,
            _ ? "" : O.enterFrom,
            C === "glow" && "animate-glow"
          ),
          style: we,
          onMouseMove: Q,
          onMouseLeave: ue,
          tabIndex: -1,
          ...V,
          children: [
            k && /* @__PURE__ */ e.jsx("div", { style: Ce }),
            a && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: Z,
                onClick: S,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: A("p-6 relative z-1", L), children: t })
          ]
        }
      )
    }
  );
  return xr(Me, fe);
}));
Et.displayName = "Modal";
const zt = ne(({
  className: t,
  theme: r,
  children: o,
  ...s
}, c) => {
  const { theme: l } = ae(), i = r || l, u = A(
    "mb-4 pb-3 text-xl font-semibold leading-6",
    i === "enterprise" && "border-b border-gray-200 text-gray-900",
    i === "techDark" && "border-b border-gray-700 text-white",
    i === "glass" && "border-b border-white/20 text-white",
    i === "neumorphicLight" && "border-b border-gray-200 text-gray-700",
    i === "glow" && "border-b border-blue-500/30 text-white",
    i === "3d" && "border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white",
    t
  );
  return /* @__PURE__ */ e.jsx("header", { ref: c, className: u, ...s, children: o });
});
zt.displayName = "ModalHeader";
const Vt = ne(({
  className: t,
  ...r
}, o) => /* @__PURE__ */ e.jsx("div", { ref: o, className: A("py-2", t), ...r }));
Vt.displayName = "ModalBody";
const Lt = ne(({
  className: t,
  theme: r,
  children: o,
  ...s
}, c) => {
  const { theme: l } = ae(), i = r || l, u = A(
    "mt-6 pt-3 flex justify-end space-x-3",
    i === "enterprise" && "border-t border-gray-200",
    i === "techDark" && "border-t border-gray-700",
    i === "glass" && "border-t border-white/20",
    i === "neumorphicLight" && "border-t border-gray-200",
    i === "glow" && "border-t border-blue-500/30",
    i === "3d" && "border-t border-gray-200 dark:border-gray-700",
    t
  );
  return /* @__PURE__ */ e.jsx("footer", { ref: c, className: u, ...s, children: o });
});
Lt.displayName = "ModalFooter";
const na = "0.1.0";
export {
  ta as AnimatedTestimonialSlider,
  ra as BackgroundBeams,
  lt as BentoGrid,
  dt as BentoGridItem,
  qe as Button,
  Lr as Card,
  At as CardContent,
  Ft as CardDescription,
  Wt as CardFooter,
  Ot as CardHeader,
  Xt as CardTitle,
  aa as Carousel,
  sa as CarouselCaption,
  oa as CarouselSlide,
  ze as Header,
  xe as HeroGrid,
  De as HoverCard3D,
  tr as HoverCard3DWithTheme,
  it as ImageCard,
  ea as ImageCardExample,
  Er as Input,
  Et as Modal,
  Vt as ModalBody,
  Lt as ModalFooter,
  zt as ModalHeader,
  Qt as MotionCard,
  Kt as ScratchCard,
  Jt as Spotlight,
  Zt as Testimonial3D,
  Gt as TextGenerateEffect,
  Ue as ThemeProvider,
  Ut as ThemeToggle,
  qt as TracingBeam,
  he as UltimateNavbar,
  Ae as defaultTheme,
  _r as enterpriseTheme,
  Se as getTheme,
  Nr as glassTheme,
  kr as techDarkTheme,
  Pe as themes,
  le as useTheme,
  na as version
};
//# sourceMappingURL=index.esm.js.map
