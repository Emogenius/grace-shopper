import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {gotEmoji, getEmoji} from '../../store/productReducer'

class SingleEmoji extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.gotEmoji(id)
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const emoji = this.props.selectedEmoji
    if (emoji === undefined) {
      return (
        <div>
          {' '}
          <h1> haven't found this emoji yet!</h1>{' '}
        </div>
      )
    } else {
      return !emoji.id ? (
        <h4> chillOut </h4>
      ) : (
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
  return {...state, selectedEmoji: state.products.selectedEmoji}
}
const mapDispatchToProps = dispatch => {
  return {
    gotEmoji: id => dispatch(getEmoji(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmoji)
