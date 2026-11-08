/**
 * Centralized Design System & Theme Configuration
 * Cyber Emerald / High-Tech Neon Mint Theme Tokens
 */

export const THEME = {
  name: "Cyber Emerald",
  version: "2.0.0",

  // Core Color Palette
  colors: {
    // Brand Accents
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981", // Main accent
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },
    teal: {
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
    },
    cyan: {
      400: "#22d3ee",
      500: "#06b6d4",
    },

    // Backgrounds & Surfaces
    dark: {
      bg: "#060e0a", // Deep matrix dark
      surface: "#0c1a14", // Elevated card surface
      surfaceMuted: "#12251d",
      border: "rgba(16, 185, 129, 0.2)",
      borderHover: "rgba(52, 211, 153, 0.45)",
      glow: "rgba(16, 185, 129, 0.35)",
    },
    light: {
      bg: "#f8fafc",
      surface: "#ffffff",
      border: "rgba(226, 232, 240, 0.8)",
      borderHover: "rgba(16, 185, 129, 0.4)",
    },

    // Functional Social Colors
    facebook: {
      brand: "#1877f2",
      gradient: "from-[#1877f2] via-[#0866ff] to-[#0064e0]",
      messenger: "from-[#00c6ff] to-[#0072ff]",
    },
    github: {
      brand: "#24292f",
      darkBg: "#0d1117",
    },
  },

  // Centralized Reusable CSS Component Classes
  classes: {
    // Card styles
    card: "rounded-3xl bg-white dark:bg-[#0c1a14]/90 border border-slate-200/80 dark:border-emerald-500/20 shadow-sm dark:shadow-emerald-950/20 backdrop-blur-xl transition-all duration-300",
    cardHover: "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-0.5",
    
    // Glassmorphism container
    glass: "bg-white/80 dark:bg-[#060e0a]/80 backdrop-blur-xl border border-slate-200/80 dark:border-emerald-500/20",

    // Text Gradients
    textGradientEmerald: "bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent",
    textGradientHeading: "bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent",
    
    // Section header elements
    sectionBadge: "text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2 flex items-center justify-center gap-1.5",
    sectionDivider: "w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-4 rounded-full",

    // Action Buttons
    btnPrimary: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm",
    btnSecondary: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm",
    btnFacebook: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#1877f2] to-[#0866ff] hover:from-[#166fe5] hover:to-[#075ce0] shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm",
    btnMessenger: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#00b4e6] hover:to-[#0066e6] shadow-md shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm",

    // Badges & Pills
    badgeEmerald: "px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
    badgeAmber: "px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-500/30",
    badgeTeal: "px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-500/30",

    // Form Inputs
    input: "w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0c1a14] border border-slate-200 dark:border-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-xs sm:text-sm",
  },
} as const;

export default THEME;
