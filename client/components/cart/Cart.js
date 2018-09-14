import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  removeFromCart,
  addToCart,
  getCart,
  requestCart,
  updateQuantity
} from '../../store'
import {CartItem} from '../index'

class Cart extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
  }

  handleDelete(productId) {
    this.props.removeFromCart(productId)
  }
  handleChange(productId) {
    this.props.updateQuantity(productId)
  }

  render() {
    const {list, isFetching} = this.props
    return isFetching ? (
      <div>LOADING</div>
    ) : (
      <main className="col">
        <h1>Your Shopping Cart</h1>
        {list && (
          <ul>
            {list.map(listItem => (
              <CartItem
                handleDelete={this.handleDelete}
                handleChange={this.handleChange}
                product={listItem}
                key={listItem.id}
              />
            ))}
          </ul>
        )}
      </main>
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
  getCart: () => dispatch(getCart()),
  requestCart: () => dispatch(requestCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
