import { useEffect, useState } from "react";
import Card from "./components/Card"
import ThemeButton from "./components/ThemeButton"
import { ThemeProvider } from "./context/theme"

function App() {
  
  const [themeMode, setThemeMode] = useState("light");
  // Functions to change the theme mode
  // These functions will be provided to the context consumers
  // They will update the themeMode state and apply the corresponding class to the HTML element
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Function to apply light theme
  // This function will update the themeMode state to "light" and apply the corresponding class
  // to the HTML element
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Effect to apply the theme class to the HTML element based on the themeMode state
  // This effect will run whenever the themeMode state changes
  // It will remove any existing theme classes and add the new one
  // This ensures that the theme is applied correctly when the component mounts or when the themeMode
  useEffect(() =>{
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
