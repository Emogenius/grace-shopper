import React from 'react'
//import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getUserReviews} from '../../store/reviewReducer'
import StarRatingComponent from 'react-star-rating-component'

/**
 * COMPONENT
 */
export const UserHome = props => {
  //const {email, name} = props
  //console.log(this.state.user.current)
  console.log(props)
  const revs = props.reviews.filter(rev => rev.userId === props.id)
  console.log('revs', revs)

  return (
    <div>
      <div>
        <h1>Welcome, {props.user.fullName}!</h1>
        <h2>email: {props.user.email}</h2>
        <h2>mailing address: {props.user.address}</h2>
        <h2>phone: {props.user.phoneNumber}</h2>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    ...state,
    user: state.user.current,
    id: state.user.current.id,
    selectedUser: state.reviews.selectedUser,
    reviews: state.reviews.reviews
    // email: state.user.current.email,
    // name: state.user.current.fullName,
    // phoneNumer: state.user.current.phoneNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotUserReviews: id => dispatch(getUserReviews(id))
    // gotOrders: id => dispatch(getOrders(id))
  }
}

export default connect(mapState, mapDispatchToProps)(UserHome)

/* UserHome.propTypes = {
  email: PropTypes.string
} */
