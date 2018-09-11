import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {gotCategory, getCategory} from '../../store/productReducer'
import SingleEmoji from './SingleEmoji'

class Category extends Component {
  componentDidMount() {
    this.props.gotCategory()
    // this.handleChange = this.handleChange.bind(this);
  }
  render() {
    const products = this.props.category
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
                  <h2>{prod.name}</h2>
                  <image src={prod.imageUrl} />
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
  return {products: state.product.category}
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategory: () => dispatch(getCategory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
