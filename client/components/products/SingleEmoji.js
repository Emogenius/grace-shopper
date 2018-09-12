import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmoji} from '../../store/productReducer'

class SingleEmoji extends Component {
  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id
    this.props.gotEmoji(id)
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    console.log('this props in render single', this.props.product.selectedEmoji)
    const emoji = this.props.product.selectedEmoji
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
          <h1>{emoji.title}</h1>
          <h2>{emoji.category}</h2>
          <img src={emoji.imageUrl} />
          <h2> About me: </h2>
          <h2> {emoji.description}</h2>
          <h2> The cost of cuteness: ${emoji.price}</h2>
          <div>
            <h1> What people are saying about this emoji: </h1>
            <ul>
              {emoji.reviews.map(rev => (
                <li key={rev.id}>
                  <h3> User Review: {rev.title}</h3>
                  <h3> rating: {rev.stars} </h3>
                  <h4> date posted: {rev.date}</h4>
                  <h3>"{rev.review}"</h3>
                  <h4> author: {rev.userId}</h4>
                </li>
              ))}
            </ul>
          </div>
          {/* <Link to={'cart/{emoji.id}'} id={emoji.id}>
            <h2> buy me!</h2>
          </Link> */}
          <button className="select" id={emoji.id}>
            Buy ME!{' '}
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('this state in mapsState', state)
  return {...state, selectedEmoji: state.product.selectedEmoji}
}
const mapDispatchToProps = dispatch => {
  return {
    gotEmoji: id => dispatch(getEmoji(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmoji)
