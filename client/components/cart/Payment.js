import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getGuest, getOrder} from '../../store/orderReducer'
//import Checkout from './Checkout'

//import {stringify} from 'querystring'

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      isFulfill: false,
      items: [],
      price: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    // console.log('this user', this.props.user)
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
    this.setState({items: items, total: total})
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (this.state.userId === undefined) {
      this.props.gotGuest({...this.state})
      //create
    } else {
      this.props.getOrder({...this.state})
      //   this.props.history.push('/students');
    }
  }
  render() {
    // console.log('this.state on form', this.state)

    return (
      <form>
        <h1> Shipping & Payment Information </h1>
        <div className="form-group">
          <label htmlFor="fullName">Ship to:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Name of recipient"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Street address, apt#,city, state, zipcode"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">e-mail address:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Street address, apt#, city, state, zipcode"
          />
        </div>
        <button onClick={this.handleClick}>Confirm Order & Pay</button>
        {/* <p className="App-intro"> */}
        {/* <Checkout
          name={'The Road to learn React'}
          description={'Only the Book'}
          amount={1}
        /> */}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const {history} = ownProps
  return {
    gotGuest: data => dispatch(getGuest(data, history)),
    gotOrder: data => dispatch(getOrder(data, history))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)
