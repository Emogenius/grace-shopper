import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <nav className="navbar">
    <Link className="navbar-brand" to="/">
      Emogenius
    </Link>
    <div id="mini-cart">
      <Link className="" to="/cart">
        <img src="/images/shopping.png" />
      </Link>
    </div>
    {isLoggedIn ? (
      <div className="btn-group-sm">
        {/* The navbar will show these links after you log in */}
        <Link to="/home" className="btn btn-outline-primary">
          Home
        </Link>
        <a href="#" onClick={handleClick} className="btn btn-outline-primary">
          Logout
        </a>
      </div>
    ) : (
      <div className="btn-group-sm">
        {/* The navbar will show these links before you log in */}
        <Link to="/login" className="btn btn-outline-primary">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign Up!
        </Link>
      </div>
    )}
    {/* <Link to="/viewAll">View All Products</Link>
      <Link to="/:categoryId">{list of Category}</Link> */}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.current.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
