import React from 'react'
import {connect} from 'react-redux'
import {rewriteReview} from '../../store/reviewReducer'
import StarRatingComponent from 'react-star-rating-component'

class EditReview extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
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
    console.log(this.state)
    event.preventDefault()
    this.props.updateReview({...this.state})
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
          <label htmlFor="rating"> rating: </label>
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
    ...state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateReview: data => dispatch(rewriteReview(data, ownProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReview)
