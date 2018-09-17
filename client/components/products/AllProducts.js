import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {createProduct} from '../../store/productReducer'

class AllProducts extends Component {
  render() {
    const products = this.props.products
    const isFetching = this.props.isFetching
    const currentUser = this.props.user.current

    if (isFetching) {
      return <div className="loader" />
    } else {
      return (
        <div>
          {currentUser.isAdmin ? (
            <button type="button" className="btn btn-outline-warning">
              <Link to="/addProduct">ADD PRODUCT</Link>
            </button>
          ) : null}

          <ul className="items">
            {products.map(prod => {
              return (
                <div key={prod.id}>
                  <li>
                    <h2>"{prod.title}"</h2>
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
                </div>
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
    products: state.product.products,
    isFetching: state.product.isFetching
  }
}

export default connect(mapStateToProps)(AllProducts)
