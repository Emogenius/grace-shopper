import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'
import EditReview from '../reviews/EditReview'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateClick: false,
      orderClick: false,
      reviewClick: false
    }
    this.updateForm = this.updateForm.bind(this)
    this.orderList = this.orderList.bind(this)
    this.reviewList = this.reviewList.bind(this)
  }

  updateForm() {
    if (!this.state.updateClick) {
      this.setState({updateClick: true})
    } else {
      this.setState({updateClick: false})
    }
  }

  orderList() {
    if (!this.state.orderClick) {
      this.setState({orderClick: true})
    } else {
      this.setState({orderClick: false})
    }
  }

  reviewList() {
    if (!this.state.reviewClick) {
      this.setState({reviewClick: true})
    } else {
      this.setState({reviewClick: false})
    }
  }
  render() {
    console.log('hello------')
    const user = this.props.user
    const orders = this.props.orders
    const revs = this.props.reviews.filter(rev => rev.userId === this.props.id)
    return (
      <div>
        <div>
          <h1>Welcome, {this.props.user.fullName}!</h1>
          <h2>email: {this.props.user.email}</h2>
          <h2>mailing address: {this.props.user.address}</h2>
          <h2>phone: {this.props.user.phoneNumber}</h2>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => {
            this.reviewList()
          }}
        >
          My Reviews
        </button>

        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => {
            this.orderList()
          }}
        >
          My Orders
        </button>

        {user.isAdmin ? (
          <div>
            <Link to="/orders">
              <button type="button" className="btn btn-outline-danger">
                List All User's Orders
              </button>
            </Link>

            <Link to="/allUsers">
              <button type="button" className="btn btn-outline-danger">
                List All Users
              </button>
            </Link>
          </div>
        ) : null}

        {this.state.reviewClick ? (
          <div>
            <h3> reviews:</h3>
            <ul>
              {revs.map(rev => (
                <li key={rev.id}>
                  <h3>
                    <em> {rev.product.title}</em>
                  </h3>
                  <h3> "{rev.title}"</h3>
                  <h4>{rev.description}</h4>
                  <h1>
                    <StarRatingComponent
                      name="rate1"
                      starColor="DeepPink"
                      starCount={5}
                      value={rev.rating}
                    />
                  </h1>
                  <h3> rating: {rev.rating}</h3>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      this.updateForm()
                    }}
                  >
                    Edit
                  </button>
                  {this.state.updateClick ? (
                    <EditReview review={rev} updateForm={this.updateForm} />
                  ) : null}
                  <button type="button" className="btn btn-outline-danger">
                    {/* onClick={() => {
                      this.props.remove(review.id)
                    }} */}
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {this.state.orderClick ? (
          <div>
            <h3> Orders:</h3>
            <ul>
              {orders.map(each => (
                <li key={each.id}>
                  <h3>
                    Order #: {each.id} {'      '} Status: {each.isFulfill}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    ...state,
    user: state.user.current,
    id: state.user.current.id,
    selectedUser: state.reviews.selectedUser,
    reviews: state.reviews.reviews,
    orders: state.orders.orders.filter(each => {
      return each.userId === state.user.current.id
    })
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
