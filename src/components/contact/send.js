import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Grow from "@material-ui/core/Grow"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import useSWR from "swr"
import axios from "axios"

import chat from "../../assets/images/chat.svg"

const fetcher = (url, data) => axios.post(url, data).then(res => res)

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: "center",
  },
  imgContainer: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(3),
  },
}))

const Send = ({ data }) => {
  const classes = useStyles()
  const { data: res, error } = useSWR(
    ["https://formspree.io/mzbjqvnr", data],
    fetcher
  )

  if (error)
    return (
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} lg={6}>
            <Typography
              gutterBottom
              variant="h2"
              component="h1"
              color="textPrimary"
              className={classes.typography}
            >
              Sorry, something went wrong, please try again later.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.imgContainer}>
            <Grow in timeout={1000}>
              <img src={error} alt="error" />
            </Grow>
          </Grid>
        </Grid>
      </Paper>
    )

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={5} justify="center" alignItems="center">
        {res ? (
          <Grid item xs={12} lg={6}>
            <Typography
              gutterBottom
              variant="h2"
              component="h1"
              color="textPrimary"
              className={classes.typography}
            >
              Thank You for Your Time
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              color="textPrimary"
              className={classes.typography}
            >
              I will contact you soon.
            </Typography>
          </Grid>
        ) : (
          <Grid item xs={12} sm={6} className={classes.imgContainer}>
            <Grow in timeout={500}>
              <CircularProgress />
            </Grow>
          </Grid>
        )}
        <Grid item xs={12} sm={6} className={classes.imgContainer}>
          <Grow in timeout={1000}>
            <img src={chat} alt="chat" />
          </Grow>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Send
