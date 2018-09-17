import React, {Component} from 'react'
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
    // JSON.stringify(keys)
    let lists = keys.map(id => {
      return localStorage.getItem(id)
    })
    console.log(lists, 'json object here ??????')
    let newlist = lists.map(items => {
      if (items === 'undefined') return
      console.log(items, 'json item ---------------------')
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

  handleChange(evt) {
    let arr = []
    for (var i = 0; i < localStorage.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    let obj = {}
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].id === +evt.target.id) {
        arr[j].quantity = +evt.target.value
        if (arr[j].quantity > +evt.target.value) {
          console.log('-----', arr[j].inventoryQuantity)
          arr[j].inventoryQuantity -= arr[j].quantity - evt.target.value
          console.log(arr[j].inventoryQuantity)
        } else {
          console.log('++++')
          arr[j].inventoryQuantity += arr[j].quantity - evt.target.value
        }
        //need to also chang the inventory Quantity
        obj = {...arr[j]}
      }
    }

    // set localStorage with teh new DATA
    console.log(obj, '<<<<<<')
    console.log(arr, '<<<<< my new arr-----let it work please !!!')
    // console.log(evt.target, '--------------', evt.target.quantity)
    // let key = JSON.stringify(event.target.quantity)
    //let obj = localStorage.getItem(evt.target.quantity)

    //localStorage.setItem(, evt.target.value))
  }

  render() {
    let myCart = this.state.newlist
    myCart = myCart.filter(each => {
      return each !== undefined
    })
    console.log(myCart, 'mycart . individual id not fuound -----')
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
                  {listItem.imageUrl} <h2>{listItem.title}</h2>
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
                  </select>
                  {/* <select
                    name="quantity"
                    onChange={() => {
                      this.handleChange(listItem)
                    }}
                    value={listItem.quantity}
                  >
                    <option value={listItem.quantity}>
                      {listItem.quantity}
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value="3">3</option>
                    ))}
                  </select> */}
                  {/* <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onChange = {() => this.handleChange(listItem.id)}
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
                  </div> */}
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
