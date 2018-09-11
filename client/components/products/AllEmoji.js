import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProducts, gotProducts} from '../../store/productReducer'

class AllEmoji extends Component {
  componentDidMount() {
    this.props.gotProducts()
    // this.handleChange = this.handleChange.bind(this);
  }
  render() {
    const products = this.props.products
    console.log(products)
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
                <h2>"{prod.title}"</h2>
                <h3>Description: {prod.description}</h3>
                <h3>Price: {prod.price} $$</h3>
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
