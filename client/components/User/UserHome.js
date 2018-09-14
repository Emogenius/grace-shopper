import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../store/userReducer'
// import EditProduct from './EditProduct'
// import {addToCart, getCart} from '../../store/cartReducer'

class UserHome extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome, {this.props.name}!</h1>
        <h2> email: {this.props.email}</h2>
        <h3>phone: {this.props.phoneNumber}</h3>
        <h2> stuff you've reviewed </h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    name: state.user.fullName,
    email: state.user.email,
    phoneNumber: state.user.phoneNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotUser: id => dispatch(getUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
