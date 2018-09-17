import React, {Component} from 'react'
import {stringify} from 'querystring'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor() {
    super()
    this.state = {newlist: [], total: 0}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let keys = Object.keys(localStorage)
    let total = 0
    let lists = keys.map(id => {
      return localStorage.getItem(id)
    })

    let newlist = lists.map(items => {
      if (items === 'undefined') return
      return JSON.parse(items)
    })
    let totalArr = newlist.map(each => {
      return each.quantity * each.price
    })
    for (let i = 0; i < totalArr.length; i++) {
      total += totalArr[i]
    }
    this.setState({newlist: newlist, total: total})
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

  handleChange(evt) {
    let arr = []
    for (var i = 0; i < localStorage.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    let obj = {}
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].id === +evt.target.id) {
        arr[j].inventoryQuantity += arr[j].quantity - evt.target.value
        arr[j].quantity = +evt.target.value
        obj = {...arr[j]}
      }
    }
    let id = +evt.target.id
    id = JSON.stringify(id)
    obj = JSON.stringify(obj)
    localStorage.setItem(id, obj)

    //----------------get total --------------
    let keys = Object.keys(localStorage)
    let total = 0
    let lists = keys.map(id => {
      return localStorage.getItem(id)
    })

    let newlist = lists.map(items => {
      if (items === 'undefined') return
      return JSON.parse(items)
    })
    let totalArr = newlist.map(each => {
      return each.quantity * each.price
    })
    for (let i = 0; i < totalArr.length; i++) {
      total += totalArr[i]
    }
    this.setState({newlist: newlist, total: total})
  }

  render() {
    let myCart = this.state.newlist
    let total = this.state.total
    myCart = myCart.filter(each => {
      return each !== undefined
    })
    const choices = [{value: 1}, {value: 2}, {value: 3}, {value: 4}]
    let answer = this.state.newlist.quantity
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
                  <img src={listItem.imageUrl} />
                  <h2>{listItem.title}</h2>
                  <select
                    name={listItem.id}
                    id={listItem.id}
                    onChange={this.handleChange}
                    value={answer}
                  >
                    <option value={listItem.quantity}>
                      {listItem.quantity}
                    </option>
                    {choices.map(choice => (
                      <option key={choice.value} value={choice.value}>
                        {choice.value}
                      </option>
                    ))}
                    {/* {listItem.inventoryQuantity > 0 ? null : (
                      <div className="alert alert-warning">
                        <strong>Warning!</strong> Not enough quantity
                      </div>
                    )} */}
                  </select>
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

        <p>ORDER Total:{total}</p>
        <Link to="/checkout">
          <button type="button" className="btn btn-outline-dark">
            Checkout
          </button>
        </Link>
      </main>
    )
  }
}

export default Cart
