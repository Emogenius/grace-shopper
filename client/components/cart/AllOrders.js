import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AllOrders = props => {
  console.log(props, 'all orders props here ')
  return (
    <h1>
      {' '}
      LIST OF ALL THE ORDERS (PENDING/NOT PENDING)---> VIEW/EDIT BY ADMIN ONLY
      (admin can close the pending order to finish)
    </h1>
  )
}
const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps)(AllOrders)
