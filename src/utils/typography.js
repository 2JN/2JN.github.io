import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1,
  headerFontFamily: ["Roboto", "serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    html: {
      overflow: "auto",
    },
  }),
})

typography.injectStyles()

export default typography
