import axios from 'axios'
import history from '../history'

//---------------------- ACTION TYPES -----------------------
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
//const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const REQUEST_CART = 'REQUEST_CART'
const GET_CART = 'GET_CART'

//---------------------- ACTION CREATORS -----------------------
//EXAMPLE
// const getUser = user => ({type: GET_USER, user})
const addToCart = product => ({
  type: ADD_ITEM_TO_CART,
  product
})

const removeFromCart = product => ({
  type: REMOVE_PRODUCT_FROM_CART,
  product
})

const getCart = () => ({
  type: GET_CART,
  cartList
})

const requestCart = () => ({
  type: REQUEST_CART
})

//---------------------- THUNK CREATOR -----------------------
//EXAMPLE
// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }

//---------------------- INITIAL STATE -----------------------
const initialState = {
  list: [],
  isFetching: false
}

//---------------------- REDUCER -----------------------
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART: {
      return {
        ...state,
        list: action.cartList,
        isFetching: false
      }
    }
    case REQUEST_CART: {
      return {
        ...state,
        isFetching: true
      }
    }
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        list: [...state.list, action.product]
      }
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        list: state.list.filter(item => item.id === action.product.id)
      }
    }
    default:
      return state
  }
}
