import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategory} from '../reducers/products'

class Category extends Component {
  // constructor(){
  //   super()

  // }

  render() {
    const products = this.props.products.category
    if (!products) {
      return (
        <div>
          {' '}
          <h1> no emojis in this category yet!</h1>{' '}
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
  return {products: state.category}
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategory: () => dispatch(getCategory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
