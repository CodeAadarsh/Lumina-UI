import { j as X } from "./index.esm23.js";
import { forwardRef as L, useRef as O, useState as I, useEffect as v } from "react";
import { cva as W } from "class-variance-authority";
import { useTheme as q } from "./index.esm19.js";
const F = W(
  // Base styles
  "relative transition-all",
  {
    variants: {
      // Animation variants
      animation: {
        // No animation
        none: "",
        // Fade animations
        fadeIn: "opacity-0 motion-fade-in",
        fadeInUp: "opacity-0 translate-y-10 motion-fade-in-up",
        fadeInDown: "opacity-0 -translate-y-10 motion-fade-in-down",
        fadeInLeft: "opacity-0 translate-x-10 motion-fade-in-left",
        fadeInRight: "opacity-0 -translate-x-10 motion-fade-in-right",
        // Scale animations
        scaleIn: "opacity-0 scale-95 motion-scale-in",
        scaleInUp: "opacity-0 scale-95 translate-y-10 motion-scale-in-up",
        // Rotate animations
        rotateIn: "opacity-0 rotate-12 motion-rotate-in",
        rotateInLeft: "opacity-0 -rotate-12 motion-rotate-in-left",
        // 3D Animations
        flipInX: "opacity-0 rotateX-90 motion-flip-in-x",
        flipInY: "opacity-0 rotateY-90 motion-flip-in-y",
        tiltIn: "opacity-0 perspective-1000 rotateX-10 motion-tilt-in",
        // Special animations
        bounceIn: "opacity-0 scale-90 motion-bounce-in",
        blurIn: "opacity-0 blur-sm motion-blur-in",
        glowIn: "opacity-0 motion-glow-in"
      },
      // Animation duration
      duration: {
        faster: "motion-duration-300",
        fast: "motion-duration-500",
        normal: "motion-duration-700",
        slow: "motion-duration-1000",
        slower: "motion-duration-1500"
      },
      // Animation delay
      delay: {
        none: "motion-delay-0",
        small: "motion-delay-100",
        medium: "motion-delay-300",
        large: "motion-delay-500",
        extraLarge: "motion-delay-1000"
      },
      // Animation easing
      easing: {
        linear: "motion-easing-linear",
        ease: "motion-easing-ease",
        easeIn: "motion-easing-ease-in",
        easeOut: "motion-easing-ease-out",
        easeInOut: "motion-easing-ease-in-out",
        spring: "motion-easing-spring",
        bounce: "motion-easing-bounce"
      },
      // Animation stagger (for children)
      stagger: {
        none: "motion-stagger-none",
        small: "motion-stagger-50",
        medium: "motion-stagger-100",
        large: "motion-stagger-200"
      },
      // Animation once or every time in viewport
      once: {
        true: "motion-once",
        false: ""
      },
      // Animation threshold (when to start)
      threshold: {
        default: "motion-threshold-default",
        // 0.1
        half: "motion-threshold-half",
        // 0.5
        most: "motion-threshold-most",
        // 0.8
        full: "motion-threshold-full"
        // 1.0
      },
      // Animation offset (start before fully in viewport)
      offset: {
        none: "motion-offset-none",
        small: "motion-offset-50",
        medium: "motion-offset-100",
        large: "motion-offset-200"
      }
    },
    defaultVariants: {
      animation: "fadeIn",
      duration: "normal",
      delay: "none",
      easing: "easeOut",
      stagger: "none",
      once: !0,
      threshold: "default",
      offset: "none"
    }
  }
), G = (t) => {
  switch (t) {
    case "small":
      return 100;
    case "medium":
      return 300;
    case "large":
      return 500;
    case "extraLarge":
      return 1e3;
    default:
      return 0;
  }
}, J = (t) => {
  switch (t) {
    case "half":
      return 0.5;
    case "most":
      return 0.8;
    case "full":
      return 1;
    default:
      return 0.1;
  }
}, K = (t) => {
  switch (t) {
    case "small":
      return 50;
    case "medium":
      return 100;
    case "large":
      return 200;
    default:
      return 0;
  }
}, Q = (t) => {
  switch (t) {
    case "small":
      return 50;
    case "medium":
      return 100;
    case "large":
      return 200;
    default:
      return 0;
  }
}, T = (t) => {
  switch (t) {
    case "faster":
      return 300;
    case "fast":
      return 500;
    case "slow":
      return 1e3;
    case "slower":
      return 1500;
    default:
      return 700;
  }
}, z = L(({
  // Animation props
  animation: t,
  duration: e,
  delay: a,
  easing: l,
  stagger: o,
  once: n = !0,
  threshold: f,
  offset: u,
  // Component props
  children: c,
  as: p = "div",
  className: R = "",
  style: h = {},
  // Special 3D props
  perspective: x = 1e3,
  depth: d = 0,
  rotateX: $ = 0,
  rotateY: g = 0,
  rotateZ: C = 0,
  // Other props
  ...V
}, E) => {
  const { theme: D } = q(), P = O(null), y = E || P, [Y, M] = I(!1), [N, U] = I(!1), [S, Z] = I([]), [j, A] = I(0), B = F({
    animation: t,
    duration: e,
    delay: a,
    easing: l,
    stagger: o,
    once: n,
    threshold: f,
    offset: u,
    className: R
  }), b = () => {
    if (!y.current) return;
    const r = y.current.getBoundingClientRect(), w = J(f), m = K(u);
    r.top + m <= window.innerHeight * w && r.bottom >= 0 && r.left <= window.innerWidth && r.right >= 0 ? (M(!0), n && U(!0)) : n || M(!1);
  };
  v(() => {
    if (!y.current || o === "none") return;
    const s = Array.from(y.current.children);
    Z(s), s.forEach((r) => {
      r.classList.add("opacity-0"), r.style.transition = `opacity ${T(e)}ms, transform ${T(e)}ms ${l || "ease-out"}`;
    }), A(0);
  }, [o, e, l, c]), v(() => {
    if (!Y || o === "none" || S.length === 0) return;
    const s = Q(o), r = G(a), w = (m) => {
      if (m < S.length) {
        const i = S[m];
        i.classList.remove("opacity-0"), i.classList.add("opacity-100"), t != null && t.includes("Up") || t != null && t.includes("Down") ? i.style.transform = "translateY(0)" : t != null && t.includes("Left") || t != null && t.includes("Right") ? i.style.transform = "translateX(0)" : t != null && t.includes("scale") ? i.style.transform = "scale(1)" : t != null && t.includes("rotate") && (i.style.transform = "rotate(0)"), setTimeout(() => {
          A(m + 1), w(m + 1);
        }, s);
      }
    };
    j === 0 && setTimeout(() => {
      w(0);
    }, r);
  }, [Y, S, j, o, t, a]), v(() => {
    if (!y.current) return;
    const s = y.current;
    if (Y)
      s.style.transform = `
        perspective(${x}px) 
        translateZ(${d}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        rotateZ(0deg)
        scale(1)
      `, s.style.opacity = "1";
    else if (!(n && N)) {
      const r = t != null && t.includes("flipInX") ? "90deg" : t != null && t.includes("tiltIn") ? "10deg" : $ ? `${$}deg` : "0deg", w = t != null && t.includes("flipInY") ? "90deg" : g ? `${g}deg` : "0deg", m = C ? `${C}deg` : "0deg", i = t != null && t.includes("scale") || t != null && t.includes("bounce") ? "0.95" : "1";
      s.style.transform = `
          perspective(${x}px) 
          translateZ(${d}px) 
          rotateX(${r}) 
          rotateY(${w}) 
          rotateZ(${m})
          scale(${i})
        `, s.style.opacity = "0";
    }
  }, [Y, N, n, x, d, $, g, C, t]), v(() => (b(), window.addEventListener("scroll", b), window.addEventListener("resize", b), () => {
    window.removeEventListener("scroll", b), window.removeEventListener("resize", b);
  }), [n, f, u]);
  const H = p, k = {
    transformStyle: "preserve-3d",
    willChange: "transform, opacity",
    ...h
  };
  return /* @__PURE__ */ X.jsx(
    H,
    {
      ref: y,
      className: B,
      style: k,
      ...V,
      children: c
    }
  );
});
z.displayName = "ScrollMotion";
const _ = L(({
  children: t,
  className: e = "",
  style: a = {},
  ...l
}, o) => {
  const n = `transition-all ${e}`;
  return /* @__PURE__ */ X.jsx(
    "div",
    {
      ref: o,
      className: n,
      style: a,
      ...l,
      children: t
    }
  );
});
_.displayName = "ScrollMotionItem";
const tt = L(({
  // 3D specific props
  perspective: t = 1e3,
  depth: e = 50,
  rotateX: a = 0,
  rotateY: l = 0,
  rotateZ: o = 0,
  // Animation props with 3D defaults
  animation: n = "tiltIn",
  duration: f = "normal",
  easing: u = "spring",
  // Other props
  ...c
}, p) => /* @__PURE__ */ X.jsx(
  z,
  {
    ref: p,
    animation: n,
    duration: f,
    easing: u,
    perspective: t,
    depth: e,
    rotateX: a,
    rotateY: l,
    rotateZ: o,
    ...c
  }
));
tt.displayName = "ScrollMotion3D";
const et = L(({
  // Parallax specific props
  speed: t = 0.5,
  // 0-1 for normal, negative for opposite direction
  direction: e = "y",
  // 'x', 'y', or 'both'
  // Component props
  children: a,
  className: l = "",
  style: o = {},
  ...n
}, f) => {
  const u = O(null), c = f || u, [p, R] = I(0), h = () => {
    if (!c.current) return;
    const d = window.scrollY, g = c.current.getBoundingClientRect(), V = g.top + d + g.height / 2, D = d + window.innerHeight / 2 - V;
    R(D * t);
  };
  v(() => (window.addEventListener("scroll", h), h(), () => {
    window.removeEventListener("scroll", h);
  }), [t, e]);
  const x = {
    transform: e === "x" ? `translateX(${p}px)` : e === "y" ? `translateY(${p}px)` : `translate(${p}px, ${p}px)`,
    transition: "transform 0.1s linear",
    willChange: "transform",
    ...o
  };
  return /* @__PURE__ */ X.jsx(
    "div",
    {
      ref: c,
      className: l,
      style: x,
      ...n,
      children: a
    }
  );
});
et.displayName = "ParallaxScrollItem";
const st = `
/* ScrollMotion Animation Classes */
.motion-fade-in.opacity-0 {
  transition-property: opacity, transform;
}
.motion-fade-in.opacity-100 {
  opacity: 1;
}

.motion-fade-in-up.opacity-0 {
  transform: translateY(40px);
  transition-property: opacity, transform;
}
.motion-fade-in-up.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.motion-fade-in-down.opacity-0 {
  transform: translateY(-40px);
  transition-property: opacity, transform;
}
.motion-fade-in-down.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.motion-fade-in-left.opacity-0 {
  transform: translateX(40px);
  transition-property: opacity, transform;
}
.motion-fade-in-left.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.motion-fade-in-right.opacity-0 {
  transform: translateX(-40px);
  transition-property: opacity, transform;
}
.motion-fade-in-right.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.motion-scale-in.opacity-0 {
  transform: scale(0.95);
  transition-property: opacity, transform;
}
.motion-scale-in.opacity-100 {
  opacity: 1;
  transform: scale(1);
}

.motion-scale-in-up.opacity-0 {
  transform: scale(0.95) translateY(40px);
  transition-property: opacity, transform;
}
.motion-scale-in-up.opacity-100 {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.motion-rotate-in.opacity-0 {
  transform: rotate(12deg);
  transition-property: opacity, transform;
}
.motion-rotate-in.opacity-100 {
  opacity: 1;
  transform: rotate(0);
}

.motion-rotate-in-left.opacity-0 {
  transform: rotate(-12deg);
  transition-property: opacity, transform;
}
.motion-rotate-in-left.opacity-100 {
  opacity: 1;
  transform: rotate(0);
}

.motion-flip-in-x.opacity-0 {
  transform: perspective(1000px) rotateX(90deg);
  transition-property: opacity, transform;
}
.motion-flip-in-x.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateX(0);
}

.motion-flip-in-y.opacity-0 {
  transform: perspective(1000px) rotateY(90deg);
  transition-property: opacity, transform;
}
.motion-flip-in-y.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateY(0);
}

.motion-tilt-in.opacity-0 {
  transform: perspective(1000px) rotateX(10deg);
  transition-property: opacity, transform;
}
.motion-tilt-in.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateX(0);
}

.motion-bounce-in.opacity-0 {
  transform: scale(0.9);
  transition-property: opacity, transform;
}
.motion-bounce-in.opacity-100 {
  opacity: 1;
  transform: scale(1);
}

.motion-blur-in.opacity-0 {
  filter: blur(10px);
  transition-property: opacity, filter;
}
.motion-blur-in.opacity-100 {
  opacity: 1;
  filter: blur(0);
}

.motion-glow-in.opacity-0 {
  box-shadow: 0 0 0 rgba(59, 130, 246, 0);
  transition-property: opacity, box-shadow;
}
.motion-glow-in.opacity-100 {
  opacity: 1;
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
}

/* Duration Classes */
.motion-duration-300 {
  transition-duration: 300ms;
}
.motion-duration-500 {
  transition-duration: 500ms;
}
.motion-duration-700 {
  transition-duration: 700ms;
}
.motion-duration-1000 {
  transition-duration: 1000ms;
}
.motion-duration-1500 {
  transition-duration: 1500ms;
}

/* Delay Classes */
.motion-delay-0 {
  transition-delay: 0ms;
}
.motion-delay-100 {
  transition-delay: 100ms;
}
.motion-delay-300 {
  transition-delay: 300ms;
}
.motion-delay-500 {
  transition-delay: 500ms;
}
.motion-delay-1000 {
  transition-delay: 1000ms;
}

/* Easing Classes */
.motion-easing-linear {
  transition-timing-function: linear;
}
.motion-easing-ease {
  transition-timing-function: ease;
}
.motion-easing-ease-in {
  transition-timing-function: ease-in;
}
.motion-easing-ease-out {
  transition-timing-function: ease-out;
}
.motion-easing-ease-in-out {
  transition-timing-function: ease-in-out;
}
.motion-easing-spring {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.motion-easing-bounce {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;
export {
  et as ParallaxScrollItem,
  z as ScrollMotion,
  tt as ScrollMotion3D,
  _ as ScrollMotionItem,
  st as scrollMotionStyles
};
//# sourceMappingURL=index.esm18.js.map
