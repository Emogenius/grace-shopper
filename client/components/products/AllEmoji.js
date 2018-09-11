import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProducts} from '../store/productReducer'

class AllEmoji extends Component {
  render() {
    const products = this.props.product.products
    if (!products) {
      return (
        <div>
          {' '}
          <h1> no emojis yet </h1>{' '}
        </div>
      )
    } else {
      return (
        <ul>
          {products.map(prod => {
            return (
              <li key={prod.id}>
                <h2>{prod.name}</h2>
                <image src={prod.imageUrl} />
                <Link to={'products/{prod.id}'}>
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
  return {products: state.product.products}
}
const mapDispatchToProps = dispatch => {
  return {
    gotProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllEmoji)
