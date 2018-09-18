import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getUserReviews} from '../../store/reviewReducer'
import StarRatingComponent from 'react-star-rating-component'
import EditReview from '../reviews/EditReview'
/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateClick: false
    }
    this.updateForm = this.updateForm.bind(this)
    //this.handleAdd = this.handleAdd.bind(this)
  }
  // const revs = props.reviews.filter(rev => rev.userId === props.id)
  updateForm() {
    if (!this.state.updateClick) {
      this.setState({updateClick: true})
    } else {
      this.setState({updateClick: false})
    }
  }
  render() {
    console.log(this.props.reviews)
    const revs = this.props.reviews.filter(rev => rev.userId === this.props.id)
    return (
      <div>
        <div>
          <h1>Welcome, {this.props.user.fullName}!</h1>
          <h2>email: {this.props.user.email}</h2>
          <h2>mailing address: {this.props.user.address}</h2>
          <h2>phone: {this.props.user.phoneNumber}</h2>
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
                    starColor={'DeepPink'}
                    starCount={5}
                    value={rev.rating}
                  />
                </h1>
                <h3> rating: {rev.rating}</h3>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => {
                    this.updateForm()
                  }}
                >
                  Edit
                </button>
                {this.state.updateClick ? (
                  <EditReview review={rev} updateForm={this.updateForm} />
                ) : null}
                <button type="button" className="btn btn-outline-warning">
                  {/* onClick={() => { */}
                  {/* //   this.props.remove(emoji.id)
                // }} */}
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // email: state.user.current.email,
    // name: state.user.current.fullName,
    ...state,
    user: state.user.current,
    id: state.user.current.id,
    selectedUser: state.reviews.selectedUser,
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotReviews: id => dispatch(getReviews(id))
    // gotOrders: id => dispatch(getOrders(id))
  }
}

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
