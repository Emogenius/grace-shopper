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
    if (!products) {
      return <h1>no emojis in this category yet!</h1>
    } else {
      return (
        <div className="items">
          {currentUser.isAdmin ? (
            <button type="button" className="btn btn-outline-danger">
              <Link to="/addProduct">ADD PRODUCT</Link>
            </button>
          ) : null}

          <div className="row">
            {products.map(prod => {
              return (
                <div className="col-4" key={prod.id}>
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
                  <div className="w-100" />
                </div>
              )
            })}
          </div>
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
