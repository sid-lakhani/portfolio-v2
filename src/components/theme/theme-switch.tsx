"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure it only runs on client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button
      className="cursor-pointer bg-black/200 hover:bg-black/10 dark:hover:bg-white/10 duration-100 transition-colors p-2 rounded-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="text-white size-5" />
      ) : (
        <Moon className="text-gray-900 size-5 md:size-4 lg:size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
