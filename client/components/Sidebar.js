import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getCategoryList, getCategory} from '../store/productReducer'
import {SearchBar} from './'

const Sidebar = props => {
  const catList = props.categoryList
  return (
    <div id="sidebar" className="row border border-primary rounded">
      <h2 className="col-12">Categories:</h2>
      <ul className="nav col-12 flex-lg-column justify-content-center">
        {catList.map(item => (
          <li className="nav-item" key={item.id}>
            <a
              href="#"
              className="nav-link"
              onClick={() => props.handleClick(item.id, props.history)}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            view all emojis
          </Link>
        </li>
        <SearchBar />
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    categoryList: state.product.categoryList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategoryList: () => dispatch(getCategoryList()),
    handleClick: (categoryId, history) =>
      dispatch(getCategory(categoryId, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
