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
      imageUrl: product.imageUrl,
      categoryId: product.categoryId
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
        </div>

        <div>
          <label htmlFor="description"> description </label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <div>
          <label htmlFor="price"> price </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.price}
          />
        </div>

        <div>
          <label htmlFor="inventoryQuantity"> inventoryQuantity </label>
          <input
            type="text"
            name="inventoryQuantity"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.inventoryQuantity}
          />
        </div>

        <div>
          <label htmlFor="imageUrl"> ImageUrl </label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.imageUrl}
          />
        </div>

        <div>
          <label htmlFor="category" className="col-sm-2 col-form-label">
            Category:
            <h6>
              1: food
              <br />
              2: animal
              <br />
              3: emotion
              <br />
              4: activity
            </h6>
          </label>
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
    update: data => dispatch(updateProduct(data))
  }
}

export default connect(null, mapDispatchToProps)(EditProduct)
