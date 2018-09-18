import React from 'react'
import {connect} from 'react-redux'
import {updateReview} from '../../store/reviewReducer'
import StarRatingComponent from 'react-star-rating-component'

class EditReview extends React.Component {
  constructor(props) {
    super(props)
    const review = this.props.review
    this.state = {
      id: review.id,
      title: review.title,
      description: review.description,
      rating: review.rating
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
    this.props.updatedReview(this.state)
    //this.props.updateForm()
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue})
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
          <label htmlFor="description"> review </label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <div>
          <label htmlFor="price"> rating: </label>
          <StarRatingComponent
            name="rate1"
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

const mapDispatchToProps = dispatch => {
  return {
    updatedReview: data => dispatch(updateReview(data))
  }
}

export default connect(null, mapDispatchToProps)(EditReview)

// </button>
// {this.state.updateClick ? (
//   <EditProduct product={emoji} updateForm={this.updateForm} />
// ) : null}
// <Link to="/products">
//   <button
//     type="button"
//     className="btn btn-outline-warning"
//     onClick={() => {
//       this.props.remove(emoji.id)
//     }}
//   >
//     Remove
//   </button>
// </Link>
