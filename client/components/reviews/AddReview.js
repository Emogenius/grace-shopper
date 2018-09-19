import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import {getEmoji} from '../../store/productReducer'
import {createReview} from '../../store/reviewReducer'
import StarRatingComponent from 'react-star-rating-component'

class AddReview extends Component {
  constructor(props) {
    super(props)
    const product = this.props.selectedEmoji
    const user = this.props.user
    this.state = {
      productId: product.id,
      title: '',
      description: '',
      rating: 0,
      userId: user.id
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    // console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue})
  }
  handleSubmit = event => {
    // console.log(this.state)
    event.preventDefault()
    this.props.addNewReview({...this.state})
  }

  render() {
    // console.log(this.props.product)
    //console.log(this.props.match.params.id)

    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Review </h1>
        <div className="form-group">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            className="form-control"
            value={this.state.title}
          />
        </div>

        <div>
          <label htmlFor="description"> Watcha got to say? </label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            className="form-control"
            value={this.state.description}
          />
        </div>

        <div>
          <label htmlFor="rating"> How would you rate this product? </label>
          <StarRatingComponent
            name="rating"
            starCount={5}
            starColor={'DeepPink'}
            value={this.state.rating}
            onChange={this.handleChange}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>

        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    selectedEmoji: state.product.selectedEmoji,
    user: state.user.current
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const {history} = ownProps
  return {
    gotEmoji: id => dispatch(getEmoji(id)),
    addNewReview: review => dispatch(createReview(review, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)

///products/addReview/${prod.id}`
