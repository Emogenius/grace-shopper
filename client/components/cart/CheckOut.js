import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const stripe = Stripe('pk_test_bmkjpUhNBrtmnYPdTdrNSkLa')
const elements = stripe.elements()
// const CheckOut = props => {
//   //real payment ?

class CheckOut extends Component {
  constructor(props) {
    super(props)
    //this.handleSubmit=this.handleSubmit.bind(this)
  }

  render() {
    return (
      // <form>
      //   <div class="form-group">
      //     <label for="formGroupExampleInput">Ship to:</label>
      //     <input
      //       type="text"
      //       class="form-control"
      //       id="formGroupExampleInput"
      //       placeholder="Name of recipient"
      //     />
      //   </div>
      //   <div class="form-group">
      //     <label for="formGroupExampleInput2">Shipping Address</label>
      //     <input
      //       type="text"
      //       class="form-control"
      //       id="formGroupExampleInput2"
      //       placeholder="Street address, city, state, zipcode"
      //     />
      //   </div>
      //   <div class="form-group">
      //     <label for="formGroupExampleInput">Billing Address:</label>
      //     <input
      //       type="text"
      //       class="form-control"
      //       id="formGroupExampleInput"
      //       placeholder="Street address, city, state, zipcode"
      //     />
      //   </div>
      // </form>
      // <form action="/charge" method="post" id="payment-form">
      //   <div class="form-row">
      //     <label for="card-element">Credit or debit card</label>
      //     <div id="card-element" />
      //     !-- A Stripe Element will be inserted here. --
      //     <div id="card-errors" role="alert" />
      //     {/* !-- Used to display Element errors. -- */}
      //   </div>

      //   <button>Submit Payment</button>
      // </form>
      <form action="your-server-side-code" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js"
          class="stripe-button"
          data-key="pk_test_bmkjpUhNBrtmnYPdTdrNSkLa"
          data-amount="999"
          data-name="Demo Site"
          data-description="Widget"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto"
        />
      </form>
    )
  }
}

export default connect()(CheckOut)
