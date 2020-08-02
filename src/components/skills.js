import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Grow from "@material-ui/core/Grow"

import avatar from "../assets/images/avatar.svg"

const useStyles = makeStyles(
  theme =>
    console.log(theme) || {
      typography: {
        textAlign: "center",
        [theme.breakpoints.up("lg")]: {
          textAlign: "left",
        },
      },
      imgContainer: {
        textAlign: "center",
      },
      paper: {
        padding: theme.spacing(3),
      },
      skills: {
        backgroundColor: theme.palette.text.primary,

        "& i": { fontStyle: "normal" },
      },
    }
)

const Skills = () => {
  const classes = useStyles()

  return (
    <main>
      <Container>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} lg={6} className={classes.skills}>
              <Typography variant="subtitle1" component="i" color="textPrimary">
                JS
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </main>
  )
}

export default Skills
