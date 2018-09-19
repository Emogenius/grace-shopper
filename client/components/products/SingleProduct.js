import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmoji, removeProduct} from '../../store/productReducer'
import EditProduct from './EditProduct'
import {addToCart} from '../../store/cartReducer'
import AddReview from '../reviews/AddReview'
import StarRatingComponent from 'react-star-rating-component'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      updateClick: false
    }
    this.updateForm = this.updateForm.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  updateForm() {
    if (!this.state.updateClick) {
      this.setState({updateClick: true})
    } else {
      this.setState({updateClick: false})
    }
  }
  newRev() {
    if (!this.state.updateRev) {
      this.setState({updateRev: true})
    } else {
      this.setState({updateRev: false})
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.gotEmoji(id)
  }

  handleAdd(product) {
    let jsonProduct = JSON.parse(product.id)
    if (localStorage.getItem(jsonProduct)) {
      product.quantity += 1
      product.inventoryQuantity -= 1
    } else {
      product.quantity = 1
      product.inventoryQuantity -= 1
    }
    let obj = JSON.stringify(product)
    localStorage.setItem(product.id, obj)
  }

  render() {
    const emoji = this.props.product.selectedEmoji
    const isFetching = this.props.isFetching
    const currentUser = this.props.user.current
    const revs = this.props.reviews.filter(rev => rev.productId === emoji.id)

    if (isFetching) {
      return <div className="loader" />
    } else {
      return (
        <div className="items">
          <h1>{emoji.title}</h1>
          <h2>{emoji.category}</h2>
          <img src={emoji.imageUrl} />
          <h4> ABOUT ME: </h4>
          <h5>
            <i>{emoji.description}</i>
          </h5>
          <h2>The cost of cuteness: 💰{emoji.price}</h2>
          <button
            type="button"
            className="btn btn-outline-dark"
            id={emoji.id}
            onClick={() => this.handleAdd(emoji)}
          >
            Buy ME!
          </button>

          <h3> reviews:</h3>
          {this.state.updateRev ? (
            <AddReview emoji={emoji.id} newRev={this.newRev} />
          ) : null}
          <Link to={`/reviews/addReview/${emoji.id}`} />
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => {
              this.newRev()
            }}
          >
            add review
          </button>
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
              </li>
            ))}
          </ul>

          {currentUser.isAdmin ? (
            <div>
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
                <EditProduct product={emoji} updateForm={this.updateForm} />
              ) : null}
              <Link to="/products">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.props.remove(emoji.id)
                  }}
                >
                  Remove
                </button>
              </Link>
            </div>
          ) : null}

          <div>
            <br />
            <h3> What people are saying about this emoji: </h3>
            <ul>
              {emoji.review ? (
                emoji.reviews.map(rev => (
                  <li key={rev.id}>
                    <h4>User Review: {rev.title}</h4>
                    <h4>Rating⭐: {rev.stars} </h4>
                    <h6>Date posted: {rev.date}</h6>
                    <h5>
                      <i>"{rev.review}"</i>
                    </h5>
                    <h6>Author: {rev.userId}</h6>
                  </li>
                ))
              ) : (
                <div>
                  <h3>See nothing? Say something!🤗 </h3>
                </div>
              )}
            </ul>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    user: state.user,
    selectedEmoji: state.product.selectedEmoji,
    isFetching: state.product.isFetching,
    reviews: state.reviews.reviews
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const {history} = ownProps
  return {
    gotEmoji: id => dispatch(getEmoji(id)),
    remove: id => dispatch(removeProduct(id)),
    addToCart: product => dispatch(addToCart(product, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
