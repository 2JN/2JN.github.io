import React, { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();

export const actions = {
  DARK_MODE: "DARK_MODE",
};

const ThemeProvider = ({ children }) => {
  const initialState = {
    darkMode: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actions.DARK_MODE:
        return { ...state, darkMode: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (localDarkMode === null) localStorage.setItem("darkMode", darkMode);
    else darkMode = JSON.parse(localDarkMode);

    dispatch({ type: actions.DARK_MODE, payload: darkMode });
  }, []);

  useEffect(() => {
    if (state.darkMode) {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
      localStorage.setItem("darkMode", true);
    } else {
      document.querySelector("html").classList.add("light");
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
