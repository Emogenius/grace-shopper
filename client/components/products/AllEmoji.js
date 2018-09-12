import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AllEmoji extends Component {
  render() {
    const products = this.props.products
    const isFetching = this.props.isFetching
    if (isFetching) {
      return <h1> no emojis yet </h1>
    } else {
      return (
        <ul>
          {products.map(prod => {
            return (
              <li key={prod.id}>
                <h2>"{prod.title}"</h2>
                {/* <h3>Price: {prod.price} $$</h3> */}
                <img src={prod.imageUrl} />
                <Link to={`/products/${prod.id}`}>
                  <h3> pick me!</h3>
                </Link>
              </li>
            )
          })}
        </ul>
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

export default connect(mapStateToProps)(AllEmoji)
