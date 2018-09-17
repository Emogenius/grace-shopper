import React from 'react'
import {connect} from 'react-redux'

const SearchBar = props => {
  console.log(props)
  return (
    <div id="search-bar" className="">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
//do products.map(product => <div><Link to="/products/{}">??</Link></div>)

export default connect()(SearchBar)
