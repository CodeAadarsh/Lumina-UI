import { j as w } from "./index.esm23.js";
import { useState as b, useEffect as P, createContext as k, useContext as x } from "react";
import { defaultTheme as m, getTheme as a } from "./index.esm20.js";
const n = k(void 0), C = ({
  children: e,
  theme: y = m,
  storageKey: t = "lumina-ui-theme"
}) => {
  const [s, u] = b(() => typeof window < "u" && localStorage.getItem(t) || y), l = a(s);
  P(() => {
    typeof window < "u" && (localStorage.setItem(t, s), f(l));
  }, [s, l, t]);
  const f = (r) => {
    var d, i, p, c;
    const o = document.documentElement;
    o.classList.remove("theme-enterprise", "theme-techDark", "theme-glass"), o.classList.add(`theme-${s}`), o.style.setProperty("--background-primary", r.colors.background.primary), o.style.setProperty("--background-secondary", r.colors.background.secondary), o.style.setProperty("--background-tertiary", r.colors.background.tertiary), o.style.setProperty("--foreground-primary", r.colors.foreground.primary), o.style.setProperty("--foreground-secondary", r.colors.foreground.secondary), o.style.setProperty("--foreground-tertiary", r.colors.foreground.tertiary), o.style.setProperty("--foreground-quaternary", r.colors.foreground.quaternary), o.style.setProperty("--border-default", r.colors.border.default), o.style.setProperty("--border-strong", r.colors.border.strong), o.style.setProperty("--border-focus", r.colors.border.focus), o.style.setProperty("--primary-lighter", r.colors.primary.lighter), o.style.setProperty("--primary-light", r.colors.primary.light), o.style.setProperty("--primary-base", r.colors.primary.base), o.style.setProperty("--primary-dark", r.colors.primary.dark), o.style.setProperty("--primary-darker", r.colors.primary.darker), o.style.setProperty("--primary-foreground", r.colors.primary.foreground), o.style.setProperty("--shadow-xs", r.shadows.xs), o.style.setProperty("--shadow-sm", r.shadows.sm), o.style.setProperty("--shadow-md", r.shadows.md), o.style.setProperty("--shadow-lg", r.shadows.lg), o.style.setProperty("--shadow-xl", r.shadows.xl), o.style.setProperty("--shadow-2xl", r.shadows["2xl"]), o.style.setProperty("--radius-xs", r.radii.xs), o.style.setProperty("--radius-sm", r.radii.sm), o.style.setProperty("--radius-md", r.radii.md), o.style.setProperty("--radius-lg", r.radii.lg), o.style.setProperty("--radius-xl", r.radii.xl), o.style.setProperty("--radius-2xl", r.radii["2xl"]), o.style.setProperty("--radius-full", r.radii.full), s === "glass" && ((d = r.effects) != null && d.backdrop) && ((i = r.effects.border) != null && i.gradient) && (o.style.setProperty("--backdrop-blur-sm", r.effects.backdrop.blur.sm), o.style.setProperty("--backdrop-blur-md", r.effects.backdrop.blur.md), o.style.setProperty("--backdrop-blur-lg", r.effects.backdrop.blur.lg), o.style.setProperty("--backdrop-blur-xl", r.effects.backdrop.blur.xl), r.shadows["blue-glow"] && o.style.setProperty("--shadow-blue-glow", r.shadows["blue-glow"]), r.shadows["purple-glow"] && o.style.setProperty("--shadow-purple-glow", r.shadows["purple-glow"]), r.shadows["white-glow"] && o.style.setProperty("--shadow-white-glow", r.shadows["white-glow"]), r.shadows["multi-glow"] && o.style.setProperty("--shadow-multi-glow", r.shadows["multi-glow"]), o.style.setProperty("--border-gradient-primary", r.effects.border.gradient.primary), o.style.setProperty("--border-gradient-rainbow", r.effects.border.gradient.rainbow)), s === "techDark" && r.colors.accent && (r.colors.accent.purple && o.style.setProperty("--accent-purple", r.colors.accent.purple.base), r.colors.accent.blue && o.style.setProperty("--accent-blue", r.colors.accent.blue.base), r.colors.accent.cyan && o.style.setProperty("--accent-cyan", r.colors.accent.cyan.base), r.colors.accent.pink && o.style.setProperty("--accent-pink", r.colors.accent.pink.base), r.shadows["blue-glow"] && o.style.setProperty("--shadow-blue-glow", r.shadows["blue-glow"]), r.shadows["purple-glow"] && o.style.setProperty("--shadow-purple-glow", r.shadows["purple-glow"]), r.shadows["multi-glow"] && o.style.setProperty("--shadow-multi-glow", r.shadows["multi-glow"]), (c = (p = r.effects) == null ? void 0 : p.border) != null && c.gradient && (o.style.setProperty("--border-gradient-primary", r.effects.border.gradient.primary), o.style.setProperty("--border-gradient-rainbow", r.effects.border.gradient.rainbow))), o.style.setProperty("--font-sans", r.typography.fontFamily.sans), o.style.setProperty("--font-mono", r.typography.fontFamily.mono), o.style.setProperty("--duration-normal", r.animations.durations.normal), o.style.setProperty("--ease-in-out", r.animations.easings.easeInOut);
  }, g = {
    theme: s,
    setTheme: (r) => {
      typeof r == "string" && a(r) && u(r);
    },
    themes: Object.keys(a("all") || {}),
    themeObject: l
  };
  return /* @__PURE__ */ w.jsx(n.Provider, { value: g, children: e });
}, I = () => {
  const e = x(n);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
export {
  C as ThemeProvider,
  I as useTheme
};
//# sourceMappingURL=index.esm19.js.map
