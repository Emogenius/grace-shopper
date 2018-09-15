import React, {Component} from 'react'

const CartItem = props => {
  const {product} = props
  //need to try to make imageUrl work to show in the cart
  return (
    <div>
      {product.imageUrl} {product.title} {product.quantity}
    </div>
  )
}

export default CartItem
