import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: '1 1 auto',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    backgroundColor: '#282c34',
    alignItems: 'center',
  },
  logo: {
    pointerEvents: 'none'
  }
}));

export default function Dashboard() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <img src="/logo-vertical-340w.png" className={classes.logo} alt="logo" />
    </div>
  )
}
