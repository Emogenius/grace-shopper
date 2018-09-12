import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function AllOrders() {
  return (
    <h1>
      {' '}
      LIST OF ALL THE ORDERS (PENDING/NOT PENDING)---> VIEW/EDIT BY ADMIN ONLY
      (admin can close the pending order to finish)
    </h1>
  )
}

export default AllOrders
