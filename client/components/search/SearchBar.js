import React from 'react'
import {connect} from 'react-redux'

const SearchBar = props => {
  return (
    <div id="search-bar" className="">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={props.search()}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    gotCategoryList: () => dispatch(getCategoryList()),
    handleClick: (categoryId, history) =>
      dispatch(getCategory(categoryId, history))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
