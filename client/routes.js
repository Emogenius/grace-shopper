import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  getProducts,
  getCategory,
  getEmoji,
  getCategoryList
} from './store/productReducer'
import {fetchAllUsers} from './store/userReducer'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  AllEmoji,
  Category,
  SingleEmoji,
  AddProduct,
  EditProduct,
  ListOrders,
  ListReviews,
  AllUser,
  AllOrders,
  Cart
} from './components'
import HomePage from './HomePage'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.products()
    this.props.categoryList()
    this.props.getCategory()
    this.props.allUsers()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/*--------------- Routes to all visitors------------ */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={AllEmoji} />
        <Route
          exact
          path="/products/category/:categoryId"
          component={Category}
        />
        <Route exact path="/products/:id" component={SingleEmoji} />
        {/* <Route exact path="/:userId" component={UserDetail} /> */}
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {/* testing routes ---------------------------------- */}
        <Route exact path="/newProduct" component={AddProduct} />
        <Route exact path="/products/:id/edit" component={EditProduct} />
        {isLoggedIn && (
          <Switch>
            {/* --------------- Routes to user ONLY ------------  */}
            <Route path="/home" component={UserHome} />
            {/* <Route exact path="/:userId" component={UserDetail} /> */}
            <Route exact path="/:userId/listOrders" component={ListOrders} />
            <Route exact path="/:userId/listReviews" component={ListReviews} />

            {/* --------------- Routes to ADMIN ONLY ------------  */}
            <Route exact path="products/:id/edit" component={EditProduct} />
            <Route exact path="/newProduct" component={AddProduct} />
            <Route exact path="/allUsers" component={AllUser} />
            <Route exact path="/allOrders" component={AllOrders} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    category: state.product.category
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    products: () => dispatch(getProducts()),
    categoryList: () => dispatch(getCategoryList()),
    allUsers: () => dispatch(fetchAllUsers()),
    getCategory: id => dispatch(getCategory(id))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
