import React from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './store'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, handleClick} = props

  // if there is no user aka email -EP
  if (!email) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div>
        <h3>Welcome, {email}</h3>
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

// adding mapDispatch to access history and handleClick -EP
// Q: how can I change this to async await?
const mapDispatch = (dispatch, ownProps) => {
  return {
    handleClick() {
      dispatch(logout()).then(() => {
        ownProps.history.push('/')
      })
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
