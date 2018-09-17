import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {CardElement, injectStripe} from 'react-stripe-elements'

// class CheckoutForm extends Component {
//   constructor(props) {
//     super(props)
//     this.submit = this.submit.bind(this)
//   }

//   async submit(ev) {
//     console.log('User clicked submit')
//   }

//   render() {
//     return (
//       <div className="checkout">
//         <p>Would you like to complete the purchase?</p>
//         <CardElement />
//         <button onClick={this.submit}>Send</button>
//       </div>
//     )
//   }
// }

// export default injectStripe(CheckoutForm)

class CheckOut extends Component {
  constructor(props) {
    super(props)
    //this.handleSubmit=this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form>
        <h1> Shipping & Payment Information </h1>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Ship to:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Name of recipient"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Shipping Address:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Street address, apt#,city, state, zipcode"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Billing Address:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Street address, apt#, city, state, zipcode"
          />
        </div>
        <div className="form-row">
          <label htmlFor="card-element">Credit or debit card</label>
          <div id="card-element">
            -- A Stripe Element will be inserted here. --
          </div>
          <div id="card-errors" role="alert" />
        </div>
        <button>Submit Payment</button>
      </form>
    )
  }
}

export default connect()(CheckOut)

/* <form action="your-server-side-code" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_bmkjpUhNBrtmnYPdTdrNSkLa"
    data-amount="999"
    data-name="Demo Site"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto">
  </script>
</form> */
