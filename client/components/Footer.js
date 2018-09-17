import React from 'react'
import {connect} from 'react-redux'

const Footer = () => {
  console.log('HELLO')
  return (
    <div className="row">
      <div id="search-bar" className="d-none d-md-block">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect()(Footer)
