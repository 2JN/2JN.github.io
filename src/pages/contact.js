import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { object, string } from "yup"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grow from "@material-ui/core/Grow"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import chat from "../assets/images/chat.svg"

const schema = object().shape({
  email: string().required().email(),
})

const sendEmail = data => {
  console.log(data)
}

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

const Contact = () => {
  const classes = useStyles()

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <Layout>
      <main>
        <Container>
          <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={5} justify="center" alignItems="center">
              <Grid item xs={12} lg={6}>
                <form onSubmit={handleSubmit(sendEmail)} action="">
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Name"
                        inputRef={register}
                        error={errors.name}
                        helperText={errors.name?.message}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        inputRef={register}
                        error={errors.email}
                        helperText={errors.email?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="subject"
                        label="Subject"
                        inputRef={register}
                        error={errors.subject}
                        helperText={errors.subject?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        fullWidth
                        label="Message"
                        name="message"
                        rows={4}
                        inputRef={register}
                        error={errors.message}
                        helperText={errors.sbuject?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="end">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Send
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.imgContainer}>
                <Grow in timeout={1000}>
                  <img src={chat} alt="chat" />
                </Grow>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
    </Layout>
  )
}

export default Contact
