import React from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../../store/productReducer'

class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    const product = this.props.product
    this.state = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      inventoryQuantity: product.inventoryQuantity,
      imageUrl: product.imageUrl
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
    this.props.update(this.state)
    this.props.updateForm()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title"> title </label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label htmlFor="description"> description </label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <label htmlFor="price"> price </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.price}
          />

          <label htmlFor="inventoryQuantity"> inventoryQuantity </label>
          <input
            type="text"
            name="inventoryQuantity"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.inventoryQuantity}
          />

          <label htmlFor="imageUrl"> ImageUrl </label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.imageUrl}
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
    update: data => dispatch(updateProduct(data))
  }
}

export default connect(null, mapDispatchToProps)(EditProduct)
