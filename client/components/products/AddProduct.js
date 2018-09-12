import React from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/productReducer'

class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      price: '',
      inventoryQuantity: '',
      imageUrl: ''
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
    this.props.create(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label htmlFor="description" className="col-sm-2 col-form-label">
            description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <label htmlFor="price" className="col-sm-2 col-form-label">
            price
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.price}
          />

          <label
            htmlFor="inventoryQuantity"
            className="col-sm-2 col-form-label"
          >
            InventoryQuantity
          </label>
          <input
            type="text"
            name="inventoryQuantity"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.inventoryQuantity}
          />

          <label htmlFor="imageUrl" className="col-sm-2 col-form-label">
            imageUrl
          </label>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const {history} = ownProps
  return {
    create: data => dispatch(createProduct(data, history))
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)
