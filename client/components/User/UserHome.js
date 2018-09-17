import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <div>
        <h1>Welcome, {props.user.fullName}!</h1>
        <h2>email: {props.user.email}</h2>
        <h2>mailing address: {props.user.address}</h2>
        <h2>phone: {props.user.phoneNumber}</h2>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user.current
    // email: state.user.current.email,
    // name: state.user.current.fullName,
    // phoneNumer: state.user.current.phoneNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotReviews: id => dispatch(getReviews(id)),
    gotOrders: id => dispatch(getOrders(id))
  }
}

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
