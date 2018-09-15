import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CartItem} from '../index'
import {stringify} from 'querystring'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor() {
    super()
    this.state = {newlist: []}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let keys = Object.keys(localStorage)
    JSON.stringify(keys)
    let lists = keys.map(id => {
      return localStorage.getItem(id)
    })
    let newlist = lists.map(items => {
      return JSON.parse(items)
    })
    this.setState({newlist: newlist})
  }

  handleDelete(productId) {
    let product = JSON.parse(productId)
    localStorage.removeItem(product)
    let keys = Object.keys(localStorage)
    JSON.stringify(keys)
    let lists = keys.map(id => {
      return localStorage.getItem(id)
    })
    let newlist = lists.map(items => {
      return JSON.parse(items)
    })
    this.setState({newlist: newlist})
  }

  handleChange(productId) {
    this.props.updateQuantity(productId)
  }

  render() {
    const myCart = this.state.newlist
    return myCart.length < 1 ? (
      <div>LOADING</div>
    ) : (
      <main className="col">
        <h1>Your Shopping Cart</h1>
        {myCart && (
          <ul>
            {myCart.map(listItem => (
              <div key={listItem.id}>
                <CartItem
                  handleDelete={this.handleDelete}
                  handleChange={this.handleChange}
                  product={listItem}
                  key={listItem.id}
                />
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => this.handleDelete(listItem.id)}
                >
                  remove item
                </button>
              </div>
            ))}
          </ul>
        )}

        <Link to="/checkout">
          <button type="button" className="btn btn-outline-dark">
            Checkout
          </button>
        </Link>
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

export default connect(mapStateToProps, null)(Cart)
