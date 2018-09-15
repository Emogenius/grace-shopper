import React, {Component} from 'react'
import {stringify} from 'querystring'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor() {
    super()
    this.state = {newlist: []}
    this.handleDelete = this.handleDelete.bind(this)
    // this.handleChange = this.handleChange.bind(this)
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

  // handleChange(productId) {
  //   this.props.updateQuantity(productId)
  // }

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
                <div>
                  {listItem.imageUrl} <h2>{listItem.title}</h2>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {listItem.quantity}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        1
                      </a>
                      <a className="dropdown-item" href="#">
                        2
                      </a>
                      <a className="dropdown-item" href="#">
                        3
                      </a>
                    </div>
                  </div>
                  Emooo Price: {listItem.price}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => this.handleDelete(listItem.id)}
                  >
                    remove item
                  </button>
                </div>
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

// const mapStateToProps = state => {
//   return {
//     list: state.cart.list,
//     isFetching: state.cart.isFetching
//   }
// }

export default Cart
