import React from 'react'
import {connect} from 'react-redux'
import {updateOrder} from '../../store/orderReducer'

class RadioForm extends React.Component {
  constructor(props) {
    super(props)
    const order = this.props.order
    this.state = {
      id: order.id,
      isFulfill: order.isFulfill
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
    this.props.edit(this.state)
    this.props.updateForm()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isFulfill"
            value="Shipped"
            onChange={this.handleChange}
          />
          <label className="form-check-label">Shipped</label>

          <input
            className="form-check-input"
            type="radio"
            name="isFulfill"
            value="Pending"
            onChange={this.handleChange}
          />
          <label className="form-check-label">Pending</label>

          <button type="submit" className="btn btn-outline-dark">
            Submit
          </button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    edit: data => dispatch(updateOrder(data))
  }
}

export default connect(null, mapDispatchToProps)(RadioForm)
