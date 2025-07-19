import { createContext, useContext } from "react";

// Create a context for theme management
// This context will provide the current theme mode and functions to change it
export const ThemeContext = createContext({
    themeMode: "light", // Default theme mode
    darkTheme: () => {}, // Function to apply dark theme
    lightTheme: () => {}, // Function to apply light theme
});


// Export the ThemeProvider to wrap the application
// This allows components to access the theme context
export const ThemeProvider = ThemeContext.Provider;

//hook to use the ThemeContext
export default function useTheme() {
    return useContext(ThemeContext);
}