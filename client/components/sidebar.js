import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {getCategory} from '../../store/productReducer'

const Sidebar = () => {
  // }
  //   // componentDidMount() {
  //   //   // console.log('props in category component', this.props.product)
  //   //   // const categoryId = this.props.match.params.categoryId
  //   //   // this.props.gotCategory(categoryId)
  //   // }
  //   render() {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <h1>category is!</h1>
        </li>
      </ul>
    </div>
  )
}
// const mapStateToProps = state => {
//   return {...state, category: state.product.category}
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     gotCategory: categoryId => dispatch(getCategory(categoryId))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default Sidebar
