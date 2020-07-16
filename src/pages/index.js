import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Grow from "@material-ui/core/Grow"

import Layout from "../components/layout"
import avatar from "../assets/images/avatar.svg"

const useStyles = makeStyles(theme => ({
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
}))

const ContactButton = () => (
  <Button variant="contained" color="primary" size="large">
    CONTACT ME
  </Button>
)

export default function Home() {
  const classes = useStyles()

  return (
    <Layout>
      <main>
        <Container>
          <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={12} lg={6}>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h1"
                  color="textPrimary"
                  className={classes.typography}
                >
                  Hi, I'm Jonathan a web developer
                </Typography>
                <Typography
                  gutterBottom
                  component="p"
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.typography}
                >
                  Full Stack / Freelancer
                </Typography>
                <Hidden mdDown>
                  <ContactButton />
                </Hidden>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.imgContainer}>
                <Grow in timeout={1000}>
                  <img src={avatar} alt="avatar" />
                </Grow>
                <Hidden lgUp>
                  <ContactButton />
                </Hidden>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
    </Layout>
  )
}
