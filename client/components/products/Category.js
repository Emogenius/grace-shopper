import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategory} from '../../store/productReducer'
import SingleEmoji from './SingleEmoji'

class Category extends Component {
  componentDidMount() {
    console.log('props in category component', this.props.product)
    const categoryId = this.props.match.params.categoryId
    this.props.gotCategory(categoryId)
  }
  render() {
    const products = this.props.product.category
    console.log('products in return', products.category)
    if (!products) {
      return (
        <div>
          {' '}
          <h1> no emojis in this category yet!</h1>{' '}
        </div>
      )
    } else {
      return (
        <div>
          <h1>{products.name}</h1>
          <ul>
            {products.map(prod => {
              return (
                <li key={prod.id}>
                  <h2>{prod.title}</h2>
                  <img src={prod.imageUrl} />
                  <Link to={'products/{prod.id}'} id={prod.id}>
                    <h3> pick me!</h3>
                  </Link>
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
  return {...state, category: state.product.category}
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategory: categoryId => dispatch(getCategory(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
