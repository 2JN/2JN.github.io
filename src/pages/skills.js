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
    <strong>CONTACT ME</strong>
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
              <Grid item xs={12} lg={6}></Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
    </Layout>
  )
}
