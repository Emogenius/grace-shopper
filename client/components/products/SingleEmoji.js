import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmoji} from '../../store/productReducer'

class SingleEmoji extends Component {
  render() {
    const emoji = this.props.selectedEmoji
    if (!emoji) {
      return (
        <div>
          {' '}
          <h1> no emojis in this category yet!</h1>{' '}
        </div>
      )
    } else {
      return (
        <div>
          <h1>{emoji.name}</h1>
          <h2>{emoji.category}</h2>
          <image src={emoji.imageUrl} />
          <Link to={'cart/{emoji.id}'} id={emoji.id}>
            <h3> buy me!</h3>
          </Link>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {products: state.product.selectedEmoji}
}
const mapDispatchToProps = dispatch => {
  return {
    gotEmoji: () => dispatch(getEmoji())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmoji)
