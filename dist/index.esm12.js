import { j as s } from "./index.esm23.js";
import { memo as k, useRef as H, useState as N, useCallback as b } from "react";
import { useTheme as G } from "./index.esm19.js";
import { cn as w } from "./index.esm25.js";
const O = k(({
  className: g,
  children: n,
  cols: l = 3,
  gap: d = 4,
  maxWidth: i = "7xl",
  rowHeight: e = "uniform"
}) => {
  const { themeObject: m } = G(), c = () => ({
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
  })[l] || "md:grid-cols-3", x = () => ({
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "7xl": "max-w-7xl",
    none: "max-w-none"
  })[i] || "max-w-7xl";
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: w(
        "mx-auto grid grid-cols-1",
        e === "uniform" ? "md:auto-rows-[18rem]" : "",
        `gap-${d}`,
        c(),
        x(),
        g
      ),
      children: n
    }
  );
});
O.displayName = "BentoGrid";
const A = k(({
  className: g,
  title: n,
  description: l,
  header: d,
  icon: i,
  hoverEffect: e = "magnet",
  intensity: m = 1,
  onClick: c,
  colSpan: x = 1,
  rowSpan: h = 1,
  style: T,
  backgroundContent: f,
  footer: v
}) => {
  const { themeObject: q, theme: u } = G(), p = H(null), [B, o] = N(""), [L, _] = N(!1), S = b((t) => {
    if (!p.current || e === "none") return;
    const r = p.current.getBoundingClientRect(), z = t.clientX - r.left, D = t.clientY - r.top, j = r.width / 2, y = r.height / 2, M = (z - j) / j, C = (D - y) / y;
    if (e === "tilt") {
      const a = 10 * m;
      o(`perspective(1000px) rotateX(${C * -a}deg) rotateY(${M * a}deg)`);
    } else if (e === "float")
      o("translateY(-10px)");
    else if (e === "magnet") {
      const a = 12 * m;
      o(`translate(${M * a}px, ${C * a}px)`);
    } else e === "glow" && o("scale(1.02)");
  }, [e, m]), Y = b(() => {
    o(""), _(!1);
  }, []), $ = b(() => {
    _(!0);
  }, []), R = () => ({
    enterprise: "bg-white border border-gray-200 shadow-lg",
    techDark: "bg-gray-900 border border-gray-800 shadow-xl gradient-border-1",
    glass: "glass-effect border border-white/30 backdrop-blur-lg",
    neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none",
    glow: "bg-gray-900/90 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
    "3d": "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform-gpu shadow-xl"
  })[u] || "bg-white border border-gray-200 shadow-lg", X = () => ["enterprise", "neumorphicLight", "3d"].includes(u) ? "text-gray-900 dark:text-white" : "text-white", I = () => e !== "glow" ? "" : {
    enterprise: "hover:shadow-blue-glow",
    techDark: "hover:shadow-purple-glow",
    glass: "hover:shadow-white-glow",
    neumorphicLight: "hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]",
    glow: "hover:shadow-multi-glow",
    "3d": "hover:shadow-blue-glow dark:hover:shadow-blue-glow"
  }[u] || "hover:shadow-lg", W = () => {
    const t = {
      1: "",
      2: "md:col-span-2"
    }, r = {
      1: "",
      2: "md:row-span-2"
    };
    return w(t[x], r[h]);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: p,
      className: w(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition-all duration-300 will-change-transform",
        R(),
        X(),
        I(),
        W(),
        c && "cursor-pointer",
        g
      ),
      style: {
        transform: B,
        transition: L ? "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)" : "transform 0.5s ease-out",
        ...T
      },
      onMouseMove: S,
      onMouseLeave: Y,
      onMouseEnter: $,
      onClick: c,
      children: [
        f && /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 overflow-hidden rounded-xl", children: f }),
        d && /* @__PURE__ */ s.jsx("div", { className: "relative overflow-hidden rounded-lg bg-gray-900 dark:bg-black aspect-[2/1]", children: d }),
        /* @__PURE__ */ s.jsxs("div", { className: "transition duration-200 group-hover/bento:translate-x-2 z-10", children: [
          i && /* @__PURE__ */ s.jsx("div", { className: "mb-2 text-xs font-medium text-blue-500 dark:text-blue-400", children: i }),
          n && /* @__PURE__ */ s.jsx("div", { className: "mb-2 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200", children: n }),
          l && /* @__PURE__ */ s.jsx("div", { className: "font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300", children: l })
        ] }),
        v && /* @__PURE__ */ s.jsx("div", { className: "mt-auto pt-2", children: v })
      ]
    }
  );
});
A.displayName = "BentoGridItem";
export {
  O as BentoGrid,
  A as BentoGridItem
};
//# sourceMappingURL=index.esm12.js.map
