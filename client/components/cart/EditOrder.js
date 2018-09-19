import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import RadioForm from './RadioForm'

class EditOrder extends React.Component {
  constructor() {
    super()
    this.state = {
      updateClick: false
    }
    this.updateForm = this.updateForm.bind(this)
  }

  updateForm() {
    if (!this.state.updateClick) {
      this.setState({updateClick: true})
    } else {
      this.setState({updateClick: false})
    }
  }

  render() {
    console.log(this.props, '<<<<<<')
    const order = this.props.order
    if (!order) return <p>loading</p>
    return (
      <div>
        <h1>{order.user.fullName}</h1>
        <p>{order.user.address}</p>
        <p>{order.user.phoneNumber}</p>

        <div>
          {order.products.map(each => {
            return (
              <p key={each.id}>
                ITEM: {each.title} Quantity: {each.quantity} Price:{each.price}
              </p>
            )
          })}
        </div>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => {
            this.updateForm()
          }}
        >
          Edit
        </button>
        {this.state.updateClick ? (
          <RadioForm order={order} updateForm={this.updateForm} />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id
  return {
    order: state.orders.orders.find(order => {
      return order.id === id
    })
  }
}

export default connect(mapStateToProps)(EditOrder)
