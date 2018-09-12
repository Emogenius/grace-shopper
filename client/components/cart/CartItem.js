import React, {Component} from 'react'
import {removeFromCart, addToCart, getCart, requestCart} from '../../store'

const CartItem = props => {
  const {product, handleDelete, handleChange} = props
  return (
    <div>
      {product.title} {product.quantity}
    </div>
  )
}

export default CartItem
