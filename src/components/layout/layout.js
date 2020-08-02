import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import Header from "./header"
import Footer from "./footer"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1e88e5",
    },
  },
  mierda: "mierda",
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          minHeight: "100%",
          display: "flex",
        },
        "#___gatsby": {
          width: "100%",
        },
        "#gatsby-focus-wrapper": {
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        },
        main: {
          width: "100%",
        },
      },
    },
  },
})

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />

    {children}
    <Footer />
  </ThemeProvider>
)

export default Layout
