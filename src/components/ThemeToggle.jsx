import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Sync with current DOM state on mount
  useEffect(() => {
    setMounted(true);
    // Check both localStorage and DOM for theme
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved === "dark" || (!saved && prefersDark);

    // Ensure DOM is in sync
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setDark(isDark);
  }, []);

  const toggle = () => {
    console.log("Theme toggle clicked, current dark:", dark);
    const html = document.documentElement;
    const next = !dark;

    // Explicitly add or remove the dark class
    if (next) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
    console.log("Theme changed to:", next ? "dark" : "light");
    console.log("HTML classes:", html.className);
  };

  // Prevent hydration mismatch by showing a loading state
  if (!mounted) {
    return (
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300
                   bg-white text-gray-800 shadow transition
                   hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
                   dark:hover:bg-gray-700"
        aria-label="Toggle dark mode"
        disabled
      >
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent"></div>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300
                 bg-white text-gray-800 shadow transition
                 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
                 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        /* Sun icon */
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.464 6.464 5.05 5.05m12.9 0-1.414 1.414M6.464 17.536l-1.414 1.414" />
        </svg>
      ) : (
        /* Moon icon */
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
