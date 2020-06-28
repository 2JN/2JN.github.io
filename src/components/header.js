import React, { useState } from "react"
import clsx from "clsx"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import PersonIcon from "@material-ui/icons/Person"
import BuildIcon from "@material-ui/icons/Build"
import FolderIcon from "@material-ui/icons/Folder"
import EmailIcon from "@material-ui/icons/Email"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Grow from "@material-ui/core/Grow"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginLeft: "auto",
  },
}))

const Header = () => {
  const classes = useStyles()
  const [isMenuOpen, setMenuOpen] = useState()
  const toggleMenu = () => setMenuOpen(prevState => !prevState)

  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Grid>

          <Hidden xsDown>
            <Grid item>
              <Grid container justify="space-between">
                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                  >
                    <HomeIcon />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                  >
                    <PersonIcon />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                  >
                    <BuildIcon />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                  >
                    <FolderIcon />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                  >
                    <EmailIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container alignContent="center">
                <Grid item></Grid>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  className={classes.menuButton}
                >
                  <TwitterIcon />
                </IconButton>

                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Hidden smUp>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleMenu}
            aria-label="open drawer"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden smUp>
        <Grow in={isMenuOpen} unmountOnExit>
          <Grid
            container
            spacing={3}
            justify="space-between"
            className={classes.mobileMenu}
          >
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={classes.menuButton}
              >
                <HomeIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={classes.menuButton}
              >
                <PersonIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={classes.menuButton}
              >
                <BuildIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={classes.menuButton}
              >
                <FolderIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={classes.menuButton}
              >
                <EmailIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grow>
      </Hidden>
    </AppBar>
  )
}

export default Header
