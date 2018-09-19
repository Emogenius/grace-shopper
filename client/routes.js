import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {getProducts, getCategoryList} from './store/productReducer'
import {fetchAllUsers} from './store/userReducer'
import {getAllReviews} from './store/reviewReducer'
import PropTypes from 'prop-types'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {
  Login,
  Signup,
  UserHome,
  AllProducts,
  Category,
  SingleProduct,
  AddProduct,
  EditProduct,
  ListOrders,
  ListReviews,
  AllUser,
  AllOrders,
  EditOrder,
  Cart,
  CheckOut,
  AddReview
} from './components'
import HomePage from './HomePage'
import {me} from './store'
import {getOrders} from './store/orderReducer'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.products()
    this.props.categoryList()
    this.props.allUsers()
    this.props.reviews()
    this.props.orders()
  }

  render() {
    const {isLoggedIn} = this.props
    // console.log('key', process.env.STRIPE_PUBLISHABLE_KEY)
    return (
      <Switch>
        {/*--------------- Routes to all visitors------------ */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={AllProducts} />
        <Route
          exact
          path="/products/category/:categoryId"
          component={Category}
        />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route
          exact
          path="/checkout"
          render={() => (
            <StripeProvider apiKey="pk_test_bmkjpUhNBrtmnYPdTdrNSkLa">
              <Elements>
                <CheckOut />
              </Elements>
            </StripeProvider>
          )}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
          exact
          path="/reviews/addReview/:prod.id/"
          component={AddReview}
        />

        {/* testing routes ---------------------------------- */}
        {/* <Route exact path="/addProduct" component={AddProduct} /> */}
        <Route exact path="/products/:id/edit" component={EditProduct} />
        {isLoggedIn && (
          <Switch>
            {/* --------------- Routes to user ONLY ------------  */}
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/:userId/listOrders" component={ListOrders} />
            <Route exact path="/:userId/listReviews" component={ListReviews} />
            {/* <Route
              exact
              path="/reviews/addReview/:prod.id"
              component={AddReview}
            /> */}

            {/* --------------- Routes to ADMIN ONLY ------------  */}
            <Route exact path="/products/:id/edit" component={EditProduct} />
            <Route exact path="/addProduct" component={AddProduct} />
            <Route exact path="/allUsers" component={AllUser} />
            <Route exact path="/orders" component={AllOrders} />
            <Route exact path="/orders/:id" component={EditOrder} />
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
    isLoggedIn: !!state.user.current.id,
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
    reviews: () => dispatch(getAllReviews()),
    orders: () => dispatch(getOrders())
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
