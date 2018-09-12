import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategory} from '../../store/productReducer'
import SingleEmoji from './SingleEmoji'

class Category extends Component {
  componentDidMount() {
    console.log('props in category component', this.props)
    const cat = this.props.match.params.category
    this.props.gotCategory(cat)
  }
  render() {
    const products = this.props.product.category
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
  return {...state, category: state.product.category}
}
const mapDispatchToProps = dispatch => {
  return {
    getCategory: cat => dispatch(getCategory(cat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
