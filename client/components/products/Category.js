import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategory} from '../../store/productReducer'
import SingleEmoji from './SingleEmoji'

class Category extends Component {
  componentDidMount() {
    const categoryId = this.props.match.params.categoryId
    this.props.gotCategory(categoryId)
    //console.log('props in category component', categoryId)
  }
  render() {
    const products = this.props.category
    if (products === undefined) {
      return (
        <div className="items">
          {' '}
          <h1> no emojis in this category yet!</h1>{' '}
        </div>
      )
    } else {
      return (
        <div className="items">
          <h1>{products.name}</h1>
          <ul>
            {products.map(prod => {
              return (
                <li key={prod.id}>
                  <h2>{prod.title}</h2>
                  <img src={prod.imageUrl} />
                  <Link to={`products/${prod.id}`}>
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
  return {category: state.product.category}
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategory: categoryId => dispatch(getCategory(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
