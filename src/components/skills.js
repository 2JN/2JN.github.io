import React from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Hidden from "@material-ui/core/Hidden"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"

import jsLogo from "../assets/images/javascript.svg"

const useStyles = makeStyles(
  theme =>
    console.log(theme) || {
      header: {
        textAlign: "center",
      },
      imgContainer: {
        textAlign: "center",
      },
      paper: {
        padding: theme.spacing(3),
      },
      skillsContainer: {
        display: "flex",

        "& article": {
          padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
        },

        "& section": {
          padding: `0 ${theme.spacing(3)}px`,
        },
      },
      skills: {
        "& img": {
          width: "48px",
          height: "auto",
        },
      },
      skillItem: {
        "& span": {
          fontWeight: "bold",
        },
      },
      js: {
        color: "#323330",
        backgroundColor: "#f0db4f",
      },
      spacing: {
        marginBottom: theme.spacing(3),
      },
    }
)

const Skills = () => {
  const classes = useStyles()
  const skillsJs = clsx(classes.skills, classes.js)
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
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} lg={6}>
              <section className={classes.skillsContainer}>
                <article className={skillsJs}>
                  <img src={jsLogo} />

                  <section>
                    <List aria-label="js skills">
                      <ListItem>
                        <ListItemText
                          primary="React"
                          className={classes.skillItem}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Node"
                          className={classes.skillItem}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Express"
                          className={classes.skillItem}
                        />
                      </ListItem>
                    </List>
                  </section>
                </article>
              </section>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </main>
  )
}

export default Skills
