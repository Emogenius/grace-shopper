import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AllOrders = props => {
  console.log(props, '<<<<<<<<<<<all product page')
  const orders = props.orders
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Order#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">isFulfill</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(each => {
          return (
            <tr key={each.id}>
              <th scope="row">{each.id}</th>
              <td>{each.user.fullName}</td>
              <td>{each.user.address}</td>
              <td>{each.isFulfill}</td>
              <td>
                <Link to={`/orders/${each.id}`}>
                  <button type="button" className="btn btn-outline-warning">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
const mapStateToProps = state => {
  return {
    orders: state.orders.orders
  }
}

export default connect(mapStateToProps)(AllOrders)
