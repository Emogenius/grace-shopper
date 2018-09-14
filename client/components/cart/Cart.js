import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import store, {
  removeFromCart,
  addToCart,
  getCart,
  requestCart,
  updateQuantity
} from '../../store'
import {CartItem} from './CartItem'

class Cart extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.counter = 0
  }
  componentDidMount() {
    console.log('PROPS in cart component did mount', this.props)
    this.props.getCart()
  }

  handleDelete(productId) {
    this.props.removeFromCart(productId)
  }
  handleChange(productId) {
    this.props.updateQuantity(productId)
  }

  render() {
    // console.log('STORE', store)
    console.log('CART PROPS', this.props.cart)
    const cart = this.props
    const isFetching = this.props.cart.isFetching
    const {list} = cart
    console.log('this list cart', list)
    //const list = this.props.cart.list
    return isFetching ? (
      <div>LOADING</div>
    ) : (
      <div className="items">
        <h1>Your Shopping Cart</h1>
        {list && (
          <ul>
            {list.map(listItem => (
              <li key={this.counter++}>
                {/* <h3>{listItem.title}</h3>
                <h2>{listItem.quantity}</h2> */}
                <CartItem
                  handleDelete={this.handleDelete}
                  handleChange={this.handleChange}
                  product={listItem}
                  key={this.counter}
                />
              </li>
              //  <CartItem
              //     handleDelete={this.handleDelete}
              //     handleChange={this.handleChange}
              //     product={listItem}
              //     key={listItem.id}
              //    />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    list: state.cart.list,
    isFetching: state.cart.isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: productId => dispatch(removeFromCart(productId)),
  addToCart: product => dispatch(addToCart(product)),
  getCart: () => dispatch(getCart()),
  requestCart: () => dispatch(requestCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
