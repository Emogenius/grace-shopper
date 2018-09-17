import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategory} from '../../store/productReducer'

class Category extends Component {
  componentDidMount() {
    const categoryId = this.props.match.params.categoryId
    this.props.gotCategory(categoryId)
  }

  render() {
    const products = this.props.category
    const currentUser = this.props.user.current
    if (products === undefined) {
      return (
        <div className="items">
          {' '}
          <h1>no emojis in this category yet!</h1>{' '}
        </div>
      )
    } else {
      return (
        <div className="items">
          {currentUser.isAdmin ? (
            <button type="button" className="btn btn-outline-warning">
              <Link to="/addProduct">ADD PRODUCT</Link>
            </button>
          ) : null}

          <h1>{products.name}</h1>
          <ul>
            {products.map(prod => {
              return (
                <li key={prod.id}>
                  <h2>{prod.title}</h2>
                  <h3>Price: 💰{prod.price}</h3>
                  <img src={prod.imageUrl} />
                  <div>
                    <button type="button" className="btn btn-outline-dark">
                      <Link to={`/products/${prod.id}`}>
                        <h3>Pick Me!</h3>
                      </Link>
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    category: state.product.category
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategory: categoryId => dispatch(getCategory(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
