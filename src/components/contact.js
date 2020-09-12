import React, { useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Form from "./contact/form"
import Send from "./contact/send"

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(3),
  },
  spacing: {
    marginBottom: theme.spacing(3),
  },
}))

const Contact = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const paperIntro = clsx(classes.paper, classes.spacing)

  return (
    <main>
      <Container>
        <Paper elevation={3} className={paperIntro}>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                gutterBottom
                variant="h2"
                component="h1"
                color="textPrimary"
                className={classes.typography}
              >
                Contact me
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                color="textPrimary"
              >
                I specialize in web and mobile development, feel free to reach
                me out to discuss your projects, or any other inquires about my
                work.
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                color="textPrimary"
              >
                Just send me an email and I will contact you back.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {data ? <Send data={data} /> : <Form onSubmit={setData} />}
      </Container>
    </main>
  )
}

export default Contact
