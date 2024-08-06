import { Inter } from "next/font/google";

const inter = Inter({
  fallback: ["system-ui", "inter", "arial"],
  adjustFontFallback: true,
  subsets: ["latin"],
  preload: true,
});

export { inter };
