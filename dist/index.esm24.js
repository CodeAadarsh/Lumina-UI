import { useTheme as e } from "./index.esm19.js";
function n() {
  try {
    return e();
  } catch {
    return {
      theme: "default",
      themeObject: {},
      // Empty fallback
      setTheme: () => {
        console.warn("ThemeProvider not found in component tree. Theme cannot be changed.");
      },
      themes: ["default"]
    };
  }
}
export {
  n as useSafeTheme
};
//# sourceMappingURL=index.esm24.js.map
