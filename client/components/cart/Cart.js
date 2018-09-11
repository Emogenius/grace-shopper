import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeFromCart, addToCart, getCart, requestCart} from '../../store'
import {CartItem} from '../index'

class Cart extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(productId) {
    removeFromCart(productId)
  }

  render() {
    const {list, isFetching} = this.props
    return isFetching ? (
      <div>LOADING</div>
    ) : (
      <div>
        <h1>Your Shopping Cart</h1>
        <ul>{list.map(listItem => <CartItem key={listItem.productId} />)}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.cart.list,
    isFetching: state.cart.isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: productId => dispatch(removeFromCart(productId)),
  addToCart: productId => dispatch(addToCart(productId)),
  getCart: dispatch(getCart()),
  requestCart: dispatch(requestCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
