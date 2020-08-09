import React, { useState } from "react"
import clsx from "clsx"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  skillsContainer: {
    display: "flex",

    "& section": {
      padding: `0 ${theme.spacing(3)}px`,
    },
  },
  skills: {
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,

    minWidth: "225px",
    clipPath: "circle(10% at 48px 32px)",
    transition: "all ease-in-out .3s",

    "&.active": {
      clipPath: "circle(75%)",
      borderRadius: "20px",
    },

    "& img": {
      width: "48px",
      height: "auto",
      cursor: "pointer",
    },
  },
  skillItem: {
    "& span": {
      fontWeight: "bold",
    },
  },
}))

const Skill = ({ styles, imgSrc, subset }) => {
  const classes = useStyles(styles)
  const [isOpen, setOpen] = useState()
  const toggle = () => setOpen(prevState => !prevState)

  const skill = clsx(classes.skills, styles)

  return (
    <section className={classes.skillsContainer}>
      <article className={clsx(skill, isOpen && "active")}>
        <img src={imgSrc} onClick={toggle} />

        <section>
          <List aria-label="skill">
            {subset.map(item => (
              <ListItem>
                <ListItemText primary={item} className={classes.skillItem} />
              </ListItem>
            ))}
          </List>
        </section>
      </article>
    </section>
  )
}

export default Skill
