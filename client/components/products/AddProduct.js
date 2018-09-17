import React from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/productReducer'

class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      price: 0,
      inventoryQuantity: 0,
      imageUrl: '',
      quantity: 0,
      categoryId: 0
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
    this.props.create({...this.state})
  }

  //add categoryId
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Product Name:
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div>
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Product Detail:
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Enter Product Description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <div>
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Price:
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Enter Product Price"
            onChange={this.handleChange}
            value={this.state.price}
          />
        </div>

        <div>
          <label
            htmlFor="inventoryQuantity"
            className="col-sm-2 col-form-label"
          >
            Inventory Quantity:
          </label>
          <input
            type="text"
            name="inventoryQuantity"
            className="form-control"
            placeholder="Enter Product Inventory Quantity"
            onChange={this.handleChange}
            value={this.state.inventoryQuantity}
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="col-sm-2 col-form-label">
            imageUrl:
          </label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
            placeholder="Enter Product imageUrl"
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const {history} = ownProps
  return {
    create: data => dispatch(createProduct(data, history))
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)
