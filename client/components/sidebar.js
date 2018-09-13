import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getCategoryList, getCategory} from '../store/productReducer'

const Sidebar = props => {
  console.log('SIDEBAR PROPS', props)
  const catList = props.categoryList
  return (
    <div className="sidebar">
      <h2>categories:</h2>
      <ul className="sidebar-nav">
        {catList.map(item => (
          <li key={item.id}>
            {/* <a href="/cart" className="p-2 bd-highlight">
        <img src="/images/shopping.png" />
      </a> */}
            <a
              onClick={() => props.handleClick(item.id, props.history)}
              // to={`/products/category/${item.id}`}
            >
              <h3>{item.name}</h3>
            </a>
          </li>
        ))}
      </ul>
      <Link to="/products">
        {' '}
        <h3>view all emojis</h3>
      </Link>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {...state, category: state.product.category}
// }
const mapStateToProps = state => {
  return {
    ...state,
    categoryList: state.product.categoryList,
    category: state.product.category
    // isFetching: state.product.isFetching
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategoryList: () => dispatch(getCategoryList()),
    //gotCategory: categoryId => dispatch(getCategory(categoryId)),
    handleClick: (categoryId, history) =>
      dispatch(getCategory(categoryId, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
