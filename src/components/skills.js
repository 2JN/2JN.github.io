import React from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Skill from "./skills/skill"

import sourceLogo from "../assets/images/source-code.svg"
import jsLogo from "../assets/images/javascript.svg"
import phpLogo from "../assets/images/php.svg"
import pythonLogo from "../assets/images/python.svg"

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(3),
  },
  web: {
    backgroundColor: theme.palette.background.default,
  },
  js: {
    color: "#323330",
    backgroundColor: "#f0db4f",
  },
  php: {
    color: "#323330",
    backgroundColor: "#8993beff",
  },
  python: {
    color: "#323330",
    backgroundColor: "#646464",
  },
  spacing: {
    marginBottom: theme.spacing(3),
  },
}))

const Skills = () => {
  const classes = useStyles()
  const paperIntro = clsx(classes.paper, classes.spacing)

  return (
    <main>
      <Container>
        <Paper elevation={3} className={paperIntro}>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <section>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h1"
                  color="textPrimary"
                  className={classes.header}
                >
                  Contact me
                </Typography>
                <Typography variant="body1" component="p">
                  Here I present you my skill set grouped by technologies, just
                  click on them to expand them.
                </Typography>
              </section>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <Skill
                styles={classes.web}
                imgSrc={sourceLogo}
                subset={["HTML", "CSS", "GIT"]}
              />
            </Grid>

            <Grid item>
              <Skill
                styles={classes.js}
                imgSrc={jsLogo}
                subset={["React", "Node", "Express"]}
              />
            </Grid>

            <Grid item>
              <Skill
                styles={classes.php}
                imgSrc={phpLogo}
                subset={["Laravel", "Code Igniter"]}
              />
            </Grid>

            <Grid item>
              <Skill
                styles={classes.python}
                imgSrc={pythonLogo}
                subset={["Django", "Flask"]}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </main>
  )
}

export default Skills
