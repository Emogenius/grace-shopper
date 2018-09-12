import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeFromCart, addToCart, getCart, requestCart} from '../../store'

const CartItem = props => {
  const props = this.props
  const {classes, product, handleDelete, handleChange} = props
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.imageUrl} />
      <Typography variant="body2" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <InputLabel class>Quantity</InputLabel>
        <TextField value={product.quantity} className="" />
      </Typography>
      <IconButton size="mini" className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </Card>
  )
}

export default CartItem
