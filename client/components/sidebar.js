import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCategoryList} from '../store/productReducer'

class Sidebar extends Component {
  // }
  //   // componentDidMount() {
  //   //   // console.log('props in category component', this.props.product)
  //   //   // const categoryId = this.props.match.params.categoryId
  //   //   // this.props.gotCategory(categoryId)
  //   // }
  render() {
    //console.log('sidebar', this.props.categoryList)
    const catList = this.props.categoryList
    return (
      <div className="sidebar">
        <h2>categories:</h2>
        <ul className="sidebar-nav">
          {catList.map(item => (
            <li key={item.id}>
              {/* <a href="/cart" className="p-2 bd-highlight">
        <img src="/images/shopping.png" />
      </a> */}
              <Link to={`/products/category/${item.id}`}>
                <h3>{item.name}</h3>
              </Link>
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
}
// const mapStateToProps = state => {
//   return {...state, category: state.product.category}
// }
const mapStateToProps = state => {
  return {
    ...state,
    categoryList: state.product.categoryList
    // isFetching: state.product.isFetching
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotCategoryList: () => dispatch(getCategoryList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
