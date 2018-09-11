import axios from 'axios'
import history from '../history'

//---------------------- ACTION TYPES -----------------------
const ADDED_PRODUCT_TO_CART = 'ADDED_PRODUCT_TO_CART'
const REMOVED_PRODUCT_FROM_CART = 'REMOVED_PRODUCT_FROM_CART'
//const INCREASED_QUANTITY = 'INCREASE_QUANTITY'
const REQUESTED_CART = 'REQUESTED_CART'
const GOT_CART = 'GOT_CART'

//---------------------- ACTION CREATORS -----------------------
//EXAMPLE
// const getUser = user => ({type: GET_USER, user})
const addToCart = product => ({
  type: ADD_ITEM_TO_CART,
  product
})

const removeFromCart = product => ({
  type: REMOVED_PRODUCT_FROM_CART,
  product
})

const getCart = () => ({
  type: GOT_CART,
  cartList
})

const requestCart = () => ({
  type: REQUESTED_CART
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

// export const getCart = () => async dispatch => {
//   try {
//     const res = await
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
    case GOT_CART: {
      return {
        ...state,
        list: action.cartList,
        isFetching: false
      }
    }
    case REQUESTED_CART: {
      return {
        ...state,
        isFetching: true
      }
    }
    case ADDED_PRODUCT_TO_CART: {
      return {
        ...state,
        list: [...state.list, action.product]
      }
    }
    case REMOVED_PRODUCT_FROM_CART: {
      return {
        ...state,
        list: state.list.filter(item => item.id === action.product.id)
      }
    }
    default:
      return state
  }
}
