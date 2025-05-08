import { j as o } from "./index.esm23.js";
import { memo as we, forwardRef as v, useState as f, useRef as N, useEffect as Te } from "react";
import { createPortal as ke } from "react-dom";
import { cva as $ } from "class-variance-authority";
import { useSafeTheme as R } from "./index.esm24.js";
import { cn as d } from "./index.esm21.js";
const Fe = $(
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
), _e = $(
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
), C = {
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
}, Ne = we(v(({
  children: l,
  isOpen: r,
  onClose: i,
  className: c,
  theme: u,
  size: p,
  position: e,
  depth: g = "medium",
  animation: M = "zoom",
  closeOnOutsideClick: P = !0,
  showCloseButton: A = !0,
  ariaLabelledby: H,
  ariaDescribedby: O,
  overlayClassName: q,
  bodyClassName: K,
  closeButtonClassName: G,
  initialFocus: x,
  lockScroll: w = !0,
  portalTarget: T,
  showGlareEffect: k = !1,
  show3DEffect: L = !1,
  effectIntensity: J = "medium",
  ...Q
}, y) => {
  const { theme: U } = R(), n = u || U || "enterprise", [b, j] = f(!1), [h, z] = f(!1), [W, X] = f(0), [Z, E] = f(0), [D, ee] = f({ x: 50, y: 50 }), m = N(null), Y = N(null), F = N(null), _ = () => {
    j(!0), setTimeout(() => {
      i(), j(!1);
    }, 200);
  }, te = (t) => {
    P && Y.current === t.target && _();
  }, I = (t) => {
    t.key === "Escape" && _();
  }, a = (() => {
    if (M === "slide") {
      const t = e || "center", s = t === "top" ? "top" : t === "bottom" ? "bottom" : t === "left" ? "left" : t === "right" ? "right" : "top";
      return C.slide[s];
    }
    return C[M] || C.fade;
  })(), re = () => {
    switch (J) {
      case "subtle":
        return { maxRotation: 3, glareOpacity: 0.05 };
      case "medium":
        return { maxRotation: 5, glareOpacity: 0.1 };
      case "strong":
        return { maxRotation: 10, glareOpacity: 0.15 };
      default:
        return { maxRotation: 5, glareOpacity: 0.1 };
    }
  }, { maxRotation: S, glareOpacity: ae } = re(), oe = (t) => {
    if (!L || !m.current) return;
    const s = m.current.getBoundingClientRect(), ye = s.left + s.width / 2, be = s.top + s.height / 2, V = (t.clientX - ye) / (s.width / 2), B = (t.clientY - be) / (s.height / 2), he = B * -S, fe = V * S;
    if (X(he), E(fe), k) {
      const xe = (V + 1) * 50, ve = (B + 1) * 50;
      ee({ x: xe, y: ve });
    }
  }, ne = () => {
    X(0), E(0);
  };
  if (Te(() => (r && !h && (z(!0), F.current = document.activeElement, setTimeout(() => {
    x && x.current ? x.current.focus() : m.current && m.current.focus();
  }, 0), w && (document.body.style.overflow = "hidden"), document.addEventListener("keydown", I)), () => {
    (r || h) && (F.current instanceof HTMLElement && F.current.focus(), w && (document.body.style.overflow = ""), document.removeEventListener("keydown", I), h && z(!1));
  }), [r, x, w]), !r && !b)
    return null;
  const se = typeof T == "string" ? document.querySelector(T) : T || document.body, le = Fe({
    theme: n,
    size: p,
    position: e,
    depth: g,
    className: c
  }), ie = d(
    _e({ theme: n }),
    b ? a.leave : a.enter,
    b ? a.leaveTo : a.enterTo,
    h ? "" : a.enterFrom,
    q
  ), ce = d(
    "absolute top-3 right-3 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary z-10",
    n === "enterprise" && "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
    n === "techDark" && "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50",
    n === "glass" && "text-white/70 hover:text-white hover:bg-white/20",
    n === "neumorphicLight" && "text-gray-500 hover:text-gray-700 hover:shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff]",
    n === "glow" && "text-white/80 hover:text-white hover:bg-white/10",
    n === "3d" && "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50",
    G
  ), de = () => L ? {
    transform: `perspective(1000px) rotateX(${W}deg) rotateY(${Z}deg)`,
    transition: "transform 0.1s ease-out"
  } : {}, me = () => k ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundImage: `radial-gradient(circle at ${D.x}% ${D.y}%, rgba(255, 255, 255, ${ae}), transparent 80%)`,
    borderRadius: "inherit",
    zIndex: 0
  } : {}, ue = de(), pe = me(), ge = /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: Y,
      className: ie,
      onClick: te,
      "aria-hidden": "true",
      children: /* @__PURE__ */ o.jsxs(
        "div",
        {
          ref: (t) => {
            y && (typeof y == "function" ? y(t) : y.current !== void 0 && (y.current = t)), m.current !== t && (m.current = t);
          },
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": H,
          "aria-describedby": O,
          className: d(
            le,
            b ? a.leave : a.enter,
            b ? a.leaveTo : a.enterTo,
            h ? "" : a.enterFrom,
            n === "glow" && "animate-glow"
          ),
          style: ue,
          onMouseMove: oe,
          onMouseLeave: ne,
          tabIndex: -1,
          ...Q,
          children: [
            k && /* @__PURE__ */ o.jsx("div", { style: pe }),
            A && /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: ce,
                onClick: _,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ o.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: d("p-6 relative z-1", K), children: l })
          ]
        }
      )
    }
  );
  return ke(ge, se);
}));
Ne.displayName = "Modal";
const Ce = v(({
  className: l,
  theme: r,
  children: i,
  ...c
}, u) => {
  const { theme: p } = R(), e = r || p || "enterprise", g = d(
    "mb-4 pb-3 text-xl font-semibold leading-6",
    e === "enterprise" && "border-b border-gray-200 text-gray-900",
    e === "techDark" && "border-b border-gray-700 text-white",
    e === "glass" && "border-b border-white/20 text-white",
    e === "neumorphicLight" && "border-b border-gray-200 text-gray-700",
    e === "glow" && "border-b border-blue-500/30 text-white",
    e === "3d" && "border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white",
    l
  );
  return /* @__PURE__ */ o.jsx("header", { ref: u, className: g, ...c, children: i });
});
Ce.displayName = "ModalHeader";
const Re = v(({
  className: l,
  children: r,
  ...i
}, c) => /* @__PURE__ */ o.jsx("div", { ref: c, className: d("py-2", l), ...i, children: r }));
Re.displayName = "ModalBody";
const Me = v(({
  className: l,
  theme: r,
  children: i,
  ...c
}, u) => {
  const { theme: p } = R(), e = r || p || "enterprise", g = d(
    "mt-6 pt-3 flex justify-end space-x-3",
    e === "enterprise" && "border-t border-gray-200",
    e === "techDark" && "border-t border-gray-700",
    e === "glass" && "border-t border-white/20",
    e === "neumorphicLight" && "border-t border-gray-200",
    e === "glow" && "border-t border-blue-500/30",
    e === "3d" && "border-t border-gray-200 dark:border-gray-700",
    l
  );
  return /* @__PURE__ */ o.jsx("footer", { ref: u, className: g, ...c, children: i });
});
Me.displayName = "ModalFooter";
export {
  Ne as Modal,
  Re as ModalBody,
  Me as ModalFooter,
  Ce as ModalHeader,
  Fe as modalVariants
};
//# sourceMappingURL=index.esm17.js.map
