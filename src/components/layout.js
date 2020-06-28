import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import Header from "./header"
import Footer from "./footer"

const theme = createMuiTheme({})

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />

    {children}
    <Footer />
  </ThemeProvider>
)

export default Layout
