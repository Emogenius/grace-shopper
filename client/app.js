import React from 'react'
import {Navbar} from './components'
import {Sidebar} from './components'
import Routes from './routes'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function App({classes}) {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={9}>
          <Routes />
        </Grid>
      </Grid>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
