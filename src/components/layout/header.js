import React, { useState } from "react"
import { Link } from "gatsby"
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

  offset: {
    ...theme.mixins.toolbar,
    width: "100%",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0",
    },
  },
  link: {
    color: "inherit",
  },
  active: {
    "& button": {
      "background-color": theme.palette.primary.dark,
    },
  },
}))

const LinkButton = ({ to, children }) => {
  const classes = useStyles()

  return (
    <Link to={to} className={classes.link} activeClassName={classes.active}>
      <IconButton color="inherit" aria-label="open drawer">
        {children}
      </IconButton>
    </Link>
  )
}

const GridLinkItems = () => (
  <>
    <Grid item>
      <LinkButton to="/">
        <HomeIcon />
      </LinkButton>
    </Grid>

    <Grid item>
      <LinkButton to="/skills">
        <BuildIcon />
      </LinkButton>
    </Grid>

    <Grid item>
      <LinkButton to="/contact">
        <EmailIcon />
      </LinkButton>
    </Grid>
  </>
)

const Header = () => {
  const classes = useStyles()
  const [isMenuOpen, setMenuOpen] = useState()
  const toggleMenu = () => setMenuOpen(prevState => !prevState)

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" noWrap>
                2J
              </Typography>
            </Grid>

            <Hidden xsDown>
              <Grid item>
                <Grid container justify="space-between">
                  <GridLinkItems />
                </Grid>
              </Grid>

              <Grid item>
                <Grid container alignContent="center">
                  <Grid item></Grid>
                  <IconButton color="inherit" aria-label="open drawer">
                    <TwitterIcon />
                  </IconButton>

                  <Grid item>
                    <IconButton color="inherit" aria-label="open drawer">
                      <GitHubIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>

          <Hidden smUp>
            <IconButton
              color="inherit"
              onClick={toggleMenu}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>

        <Hidden smUp>
          <Grow in={isMenuOpen} unmountOnExit>
            <Grid container spacing={3} justify="space-between">
              <GridLinkItems />
            </Grid>
          </Grow>
        </Hidden>
      </AppBar>

      <div className={classes.offset} />
    </>
  )
}

export default Header
