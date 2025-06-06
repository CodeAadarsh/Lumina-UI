const a = {
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
}, f = {
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
}, o = {
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
}, r = {
  enterprise: a,
  techDark: f,
  glass: o
}, s = "techDark", g = (e) => r[e] || r[s];
export {
  s as defaultTheme,
  a as enterpriseTheme,
  g as getTheme,
  o as glassTheme,
  f as techDarkTheme,
  r as themes
};
//# sourceMappingURL=index.esm20.js.map
