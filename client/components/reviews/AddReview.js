import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmoji, removeProduct} from '../../store/productReducer'
import EditProduct from './EditProduct'
import {addToCart} from '../../store/cartReducer'
import StarRatingComponent from 'react-star-rating-component'
import React from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../../store/productReducer'

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    const product = this.props.product
    this.state = {
      id: product.id,
      title: product.title
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.props.update(this.state)
    // this.props.updateForm()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Review </h1>
        <div className="form-group">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>

        <div>
          <label htmlFor="description"> Watcha got to say? </label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <div>
          <label htmlFor="price"> How would you rate this product? </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.price}
          />
        </div>

        <div>
          <input
            type="text"
            name="categoryId"
            className="form-control"
            placeholder="Enter Product Category"
            onChange={this.handleChange}
            value={this.state.categoryId}
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //update: data => dispatch(updateProduct(data))
  }
}

export default connect(null, mapDispatchToProps)(AddReview)

///products/addReview/${prod.id}`
