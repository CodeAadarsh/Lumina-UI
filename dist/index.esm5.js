import { j as r } from "./index.esm23.js";
import { useTheme as u } from "./index.esm19.js";
import { Sun as o, Palette as b, Moon as f } from "lucide-react";
const p = {
  enterprise: o,
  techDark: f,
  glass: b,
  default: o
  // Fallback for 'default' theme
}, y = ({
  className: s = "",
  showLabel: n = !1,
  size: a = "md"
}) => {
  const { theme: e, setTheme: c } = u(), l = {
    sm: "h-8 w-8 p-1.5",
    md: "h-10 w-10 p-2",
    lg: "h-12 w-12 p-2.5"
  }, d = p[e] || o, h = () => {
    const t = ["enterprise", "techDark", "glass"], i = (t.indexOf(e) + 1) % t.length;
    return t[i];
  }, m = () => {
    c(h());
  }, g = () => {
    switch (e) {
      case "techDark":
        return "bg-background-secondary border border-border-strong text-foreground-primary hover:bg-background-tertiary shadow-blue-glow";
      case "glass":
        return "glass-effect backdrop-blur-sm border border-white/10 text-foreground-primary hover:bg-white/10 shadow-white-glow";
      default:
        return "bg-background-secondary border border-border text-foreground-primary hover:bg-background-tertiary";
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: m,
        className: `rounded-full transition-all ${l[a]} ${g()} ${s}`,
        title: `Toggle theme (current: ${e})`,
        children: /* @__PURE__ */ r.jsx(d, { className: "w-full h-full" })
      }
    ),
    n && /* @__PURE__ */ r.jsxs("span", { className: "ml-2 text-foreground-secondary text-sm", children: [
      e.charAt(0).toUpperCase() + e.slice(1),
      " Theme"
    ] })
  ] });
};
export {
  y as default
};
//# sourceMappingURL=index.esm5.js.map
