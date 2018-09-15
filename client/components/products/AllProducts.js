import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AllProducts extends Component {
  render() {
    const products = this.props.products
    const isFetching = this.props.isFetching
    if (isFetching) {
      return <div className="loader" />
    } else {
      return (
        <div>
          <ul className="items">
            {products.map(prod => {
              return (
                <li key={prod.id}>
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
    products: state.product.products,
    isFetching: state.product.isFetching
  }
}

export default connect(mapStateToProps)(AllProducts)
