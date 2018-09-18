import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import {getEmoji} from '../../store/productReducer'
// import {addReview} from '../../store/cartReducer'
import StarRatingComponent from 'react-star-rating-component'

class AddReview extends Component {
  constructor(props) {
    super(props)
    const product = this.props.selectedEmoji
    this.state = {
      id: product.id,
      title: '',
      description: '',
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //   componentDidMount() {
  //     // const id = this.props.match.params.id
  //     // this.props.gotEmoji(id)
  //   }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue})
  }
  handleSubmit = event => {
    event.preventDefault()
    // this.props.update(this.state)
    // this.props.updateForm()
  }

  render() {
    console.log(this.props.product)
    //console.log(this.props.match.params.id)

    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Review </h1>
        <div className="form-group">
          <label htmlFor="title"> Title </label>
          <input type="text" name="title" className="form-control" />
        </div>

        <div>
          <label htmlFor="description"> Watcha got to say? </label>
          <input type="text" name="description" className="form-control" />
        </div>

        <div>
          <label htmlFor="rating"> How would you rate this product? </label>
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

const mapStateToProps = state => {
  return {
    ...state,
    selectedEmoji: state.product.selectedEmoji
  }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//const {history} = ownProps
//   return {
//     gotEmoji: id => dispatch(getEmoji(id))
//   }
// }

export default connect(mapStateToProps)(AddReview)

///products/addReview/${prod.id}`
