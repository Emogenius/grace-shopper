import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../../store'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(query) {}

  handleChange() {}

  render() {
    return (
      <div id="search-bar" className="">
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.value}
          />
          <button
            onClick={this.handleClick(this.state.value)}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    filteredProducts: state.filteredProducts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
