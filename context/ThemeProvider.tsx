"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// provide a type for the context
interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

// Create a context for the theme (dark/light) and set the default value to undefined.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//  Create a function that will return the context and the theme.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  //   The handleThemeChange function will be used to change the theme by adding a class to the document element.
  // if the localStorage.theme is dark or if the user has set the dark mode in the browser, the dark mode will be used. Otherwise, the light mode will be used.
  // EXPLANATION 18:17, theme switcher and mobile navigation
  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  //   The useEffect hook will be called when the mode changes.
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  //   The ThemeContext.Provider will be used to pass the theme to the components.
  //  The value prop will be used to pass the mode and setMode functions to the components.
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// The useTheme hook will be used to access the theme from the components.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
