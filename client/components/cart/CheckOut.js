import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'
import {createOrder} from '../../store/orderReducer'
//import {stringify} from 'querystring'

class CheckOut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 0,
      fullName: '',
      isFulfilled: false,
      items: [],
      quantity: 1,
      total: 0,
      email: '',
      shippingAddress: '',
      billingAddress: '',
      complete: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
   componentDidMount() {
  //   console.log('this user', this.props.user)
    this.setState({userId: this.props.user.current.id})
    let keys = Object.keys(localStorage)
    let total = 0
    let lists = keys.map(id => {
      return localStorage.getItem(id)
    })

    let items = lists.map(product => {
      if (product === 'undefined') return
      return JSON.parse(product)
    })
    let totalArr = items.map(each => {
      return each.quantity * each.price
    })
    for (let i = 0; i < totalArr.length; i++) {
      total += totalArr[i]
    }
    this.setState({
      items: items,
      total: total * 100,
      name: this.props.user.current.fullName
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    let {token} = await this.props.stripe.createToken()

    let response = await axios.post('/api/orders/checkout', {
      ...this.state,
      token: 'tok_visa'
    })
    if (response.ok) {
      this.setState({complete: true})
      // console.log('Purchase complete!')
    }

    // Put in a thunk!
    let order = this.state
    // console.log('ORDER (STATE): ', order.items)
    this.props.createOrder(order)
  }

  render() {
    // console.log('this.state on form', this.state)
    if (this.state.complete) return <h1>Purchase complete!</h1>
    return (
      <form>
        <div className="checkout">
          <p>Ready to purchase?</p>
          <CardElement />
        </div>
        <h1> Shipping &amp; Payment Information </h1>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Ship to:</label>
          <input
            name="fullName"
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Name of recipient"
            value={this.state.fullName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkoutEmail">Email:</label>
          <input
            name="email"
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="checkoutEmail"
            placeholder="Email of recipient"
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Shipping Address:</label>
          <input
            name="shippingAddress"
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Street address, apt#,city, state, zipcode"
            value={this.state.shippingAddress}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Billing Address:</label>
          <input
            name="billingAddress"
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Street address, apt#, city, state, zipcode"
            value={this.state.billingAddress}
          />
        </div>
        <button type="button" onClick={this.handleSubmit}>
          Confirm Order &amp; Pay
        </button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state,
    user: state.user
    // products: state.product.products,
    // isFetching: state.product.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: data => {
      // console.log('DATA------------', data)
      dispatch(createOrder(data))
    }
  }
}
export default injectStripe(
  connect(mapStateToProps, mapDispatchToProps)(CheckOut)
)
