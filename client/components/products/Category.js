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

          <div className="products card-deck flex-wrap d-flex justify-content-around">
            {products.map(prod => {
              return (
                <div className="m-1 card bg-transparent" key={prod.id}>
                  <div className="align-content-between align-items-center card-body d-flex flex-column">
                    <img className="mx-auto card-img-top" src={prod.imageUrl} />
                    <h5 className="card-title">{prod.title}</h5>
                  </div>
                  <div className="card-footer text-center w-100">
                    <h6 className="text-muted card-subtitle">
                      Price: 💰{prod.price}
                    </h6>
                    <Link
                      className="mt-auto btn btn-success"
                      to={`/products/${prod.id}`}
                    >
                      Pick Me!
                    </Link>
                  </div>
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
