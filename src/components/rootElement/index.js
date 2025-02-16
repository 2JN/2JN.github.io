import React from "react";

import "../../styles/global.css";

import ThemeProvider from "../../context/themeContext";

const RootElement = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

export default RootElement;
