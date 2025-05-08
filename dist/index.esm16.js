import { j as s } from "./index.esm23.js";
import { memo as k, forwardRef as j } from "react";
import { cva as N } from "class-variance-authority";
import { useSafeTheme as v } from "./index.esm24.js";
import { cn as o } from "./index.esm21.js";
const w = N(
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
), i = k(j(({
  children: t,
  className: r,
  theme: e,
  layout: a,
  size: c,
  spacing: l,
  background: m,
  alignment: g,
  backgroundImage: n,
  backgroundOverlay: u = !0,
  accentColor: d,
  containerClassName: p,
  ...f
}, x) => {
  const { theme: b } = v(), h = w({
    theme: e || b || "enterprise",
    layout: a,
    size: c,
    spacing: l,
    background: m,
    alignment: g,
    className: r
  }), y = {
    ...n && { backgroundImage: `url(${n})` },
    ...d && { "--accent-color": d }
  };
  return /* @__PURE__ */ s.jsx(
    "section",
    {
      ref: x,
      className: h,
      style: y,
      ...f,
      children: /* @__PURE__ */ s.jsx("div", { className: o(
        "container mx-auto h-full",
        p,
        { "relative z-10": u && m === "image" }
      ), children: t })
    }
  );
}));
i.displayName = "HeroGrid";
const z = ({
  children: t,
  className: r,
  as: e = "h1",
  ...a
}) => /* @__PURE__ */ s.jsx(
  e,
  {
    className: o("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4", r),
    ...a,
    children: t
  }
), H = ({
  children: t,
  className: r,
  as: e = "h2",
  ...a
}) => /* @__PURE__ */ s.jsx(
  e,
  {
    className: o("text-xl md:text-2xl text-foreground-secondary font-medium mb-6", r),
    ...a,
    children: t
  }
), T = ({
  children: t,
  className: r,
  ...e
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: o("flex flex-col space-y-4", r),
    ...e,
    children: t
  }
), D = ({
  children: t,
  className: r,
  imageUrl: e,
  videoUrl: a,
  alt: c = "",
  ...l
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: o("relative w-full h-full min-h-[200px]", r),
    ...l,
    children: [
      e && !a && /* @__PURE__ */ s.jsx(
        "img",
        {
          src: e,
          alt: c,
          className: "w-full h-auto object-cover rounded-lg shadow-lg"
        }
      ),
      a && /* @__PURE__ */ s.jsx(
        "video",
        {
          src: a,
          className: "w-full h-auto object-cover rounded-lg shadow-lg",
          controls: !1,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0
        }
      ),
      !e && !a && t
    ]
  }
), G = ({
  children: t,
  className: r,
  ...e
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: o("flex flex-wrap gap-4 mt-8", r),
    ...e,
    children: t
  }
);
i.Title = z;
i.Subtitle = H;
i.Content = T;
i.Media = D;
i.Actions = G;
export {
  i as HeroGrid,
  w as heroGridVariants
};
//# sourceMappingURL=index.esm16.js.map
