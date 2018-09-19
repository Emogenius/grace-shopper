import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {createProduct} from '../../store/productReducer'

class AllProducts extends Component {
  render() {
    const products = this.props.products
    const isFetching = this.props.isFetching
    const currentUser = this.props.user.current

    if (isFetching || !products) {
      return <div className="loader" />
    } else {
      return (
        <div className="">
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
                  {/* // <div className="w-100" /> */}
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
    products: state.product.products,
    isFetching: state.product.isFetching
  }
}

export default connect(mapStateToProps)(AllProducts)
