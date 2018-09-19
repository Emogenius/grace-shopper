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
        <div className="product card bg-transparent">
          <div className="card-header d-flex flex-column justify-content-between flex-md-row">
            <h1 className="">{emoji.title}</h1>
            <h2 className="text-muted text-md-right">{emoji.category.name}</h2>
          </div>
          <div className="card-body flex-wrap d-flex flex-column justify-content-between">
            <img className="m-1 rounded" src={emoji.imageUrl} />
            <div className="m-1">
              <h2> ABOUT ME: </h2>
              <p>{emoji.description}</p>
            </div>
            <div className="m-1">
              <h3>The cost of cuteness: 💰{emoji.price}</h3>
              <button
                type="button"
                className="btn btn-success"
                id={emoji.id}
                onClick={() => this.handleAdd(emoji)}
              >
                Buy ME!
              </button>
            </div>
          </div>
          <div className="card-footer">
            <h2> Reviews:</h2>
            {this.state.updateRev ? (
              <AddReview emoji={emoji.id} newRev={this.newRev} />
            ) : null}
            <Link to={`/reviews/addReview/${emoji.id}`} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.newRev()
              }}
            >
              add review
            </button>
            <ul>
              {revs.map(rev => (
                <li key={rev.id}>
                  <h3>{rev.title}</h3>
                  <h5 className="text-muted">{rev.date}</h5>
                  <p className="card-text">{rev.description}</p>
                  <p>- {rev.user.fullName}</p>
                  <StarRatingComponent
                    name="rate1"
                    starColor="DeepPink"
                    starCount={rev.rating}
                    value={rev.rating}
                  />
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

            {/* <div>
              <p> What people are saying about this emoji: </p>
              <ul>
                {emoji.reviews ? (
                  emoji.reviews.map(rev => (
                    <li key={rev.id}>
                      <h4>User Review: {rev.title}</h4>
                      <h4>Rating⭐: {rev.rating} </h4>
                      <h6>Date posted: {rev.date}</h6>
                      <h5>
                        <em>"{rev.description}"</em>
                      </h5>
                      <h6>Author: {rev.user.fullName}</h6>
                    </li>
                  ))
                ) : (
                  <div>
                    <h3>See nothing? Say something!🤗 </h3>
                  </div>
                )}
              </ul>
            </div> */}
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
