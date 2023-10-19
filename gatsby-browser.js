import React from "react";

import "./src/styles/global.css";

import ThemeProvider from "./src/context/themeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
