import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmoji, removeProduct} from '../../store/productReducer'
import EditProduct from './EditProduct'
import {addToCart, getCart} from '../../store/cartReducer'

class SingleEmoji extends Component {
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

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.gotEmoji(id)
    this.props.getCart()
  }

  handleAdd(product) {
    this.props.addToCart(product)
  }

  render() {
    const emoji = this.props.product.selectedEmoji
    const isFetching = this.props.isFetching

    if (isFetching) {
      return (
        <div>
          <h1> haven't found this emoji yet!</h1>
        </div>
      )
    } else {
      return (
        <div className="items">
          <h1>{emoji.title}</h1>
          <h2>{emoji.category}</h2>
          <img src={emoji.imageUrl} />
          <h2> About me: </h2>
          <h2> {emoji.description}</h2>
          <h2> The cost of cuteness: ${emoji.price}</h2>
          <div>
            <h1> What people are saying about this emoji: </h1>
            <ul>
              {emoji.review ? (
                emoji.reviews.map(rev => (
                  <li key={rev.id}>
                    <h3> User Review: {rev.title}</h3>
                    <h3> rating: {rev.stars} </h3>
                    <h4> date posted: {rev.date}</h4>
                    <h3>"{rev.review}"</h3>
                    <h4> author: {rev.userId}</h4>
                  </li>
                ))
              ) : (
                <h1>see nothing say something </h1>
              )}
            </ul>
          </div>

          <button
            type="button"
            className="btn btn-outline-dark"
            // className="select"
            id={emoji.id}
            onClick={() => this.props.addToCart(emoji)}
          >
            Buy ME!
          </button>

          {/*------ if admin will be able to see edit and delete button -------------- */}
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
            <EditProduct product={emoji} updateForm={this.updateForm} />
          ) : null}
          <Link to="/products">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => {
                this.props.remove(emoji.id)
              }}
            >
              Remove
            </button>
          </Link>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    selectedEmoji: state.product.selectedEmoji,
    isFetching: state.product.isFetching
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotEmoji: id => dispatch(getEmoji(id)),
    remove: id => dispatch(removeProduct(id)),
    addToCart: product => dispatch(addToCart(product)),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmoji)
