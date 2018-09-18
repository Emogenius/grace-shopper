import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './userReducer'
import product from './productReducer'
import cart from './cartReducer'
import reviews from './reviewReducer'
import orders from './orderReducer'

const reducer = combineReducers({
  user,
  product,
  cart,
  reviews,
  orders
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)

export default store
export * from './userReducer'
export * from './cartReducer'
