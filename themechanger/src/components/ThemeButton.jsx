import React from 'react'
import useTheme from "../context/theme";
const ThemeButton = () => {

    // Destructure the theme context to get the current theme mode and functions to change it
    const { themeMode, lightTheme, darkTheme } = useTheme();


    const onClickHandler = (e) => {
        // Get the checked status of the checkbox
        // If it is checked, apply dark mode, otherwise apply light mode
        const darkModeStatus = e.currentTarget.checked

        if (darkModeStatus) {
            darkTheme();
        }
        else {
            lightTheme();
        }
    }

  return (
    <>
     <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onClickHandler}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    </>
  )
}

export default ThemeButton