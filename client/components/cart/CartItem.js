import React, {Component} from 'react'
//import {connect} from 'react-redux'
import {removeFromCart, addToCart, getCart, requestCart} from '../../store'

export const CartItem = function(props) {
  //const {product, handleDelete, handleChange} = props
  //console.log('props in cart item', props)
  return (
    <div>
      <h1>{props.product.title}</h1>
      <h2> {props.product.quantity}</h2>
    </div>
  )
}

// class CartItem extends Component {

//   render() {
//     console.log('cartItems props', this.props)
//     return (
//       <div>
//         <h1>{props.product.title}</h1>
//         <h2> {props.product.quantity}</h2>
//       </div>
//     )
//   }
// }
// const mapStateToProps = state => {
//   return {
//     ...state
//   }
// }
// export default connect(mapStateToProps, null)(CartItem)
