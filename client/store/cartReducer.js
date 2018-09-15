// import axios from 'axios'
// import history from '../history'

// //---------------------- ACTION TYPES -----------------------
// const ADDED_PRODUCT_TO_CART = 'ADDED_PRODUCT_TO_CART'
// const REMOVED_PRODUCT_FROM_CART = 'REMOVED_PRODUCT_FROM_CART'
// //const INCREASED_QUANTITY = 'INCREASE_QUANTITY'
// const REQUESTED_CART = 'REQUESTED_CART'
// const GOT_CART = 'GOT_CART'
// const UPDATED_QUANTITY = 'UPDATED_QUANTITY'

// //---------------------- ACTION CREATORS -----------------------
// //EXAMPLE
// const gotUser = user => ({type: GOT_USER, user})
// const addedToCart = product => ({
//   type: ADDED_PRODUCT_TO_CART,
//   product
// })

// const removedFromCart = product => ({
//   type: REMOVED_PRODUCT_FROM_CART,
//   product
// })

// const requestedCart = () => ({
//   type: REQUESTED_CART
// })

// const updatedQuantity = product => ({
//   type: UPDATED_QUANTITY,
//   product
// })

// //---------------------- THUNK CREATOR -----------------------
// //EXAMPLE
// // export const me = () => async dispatch => {
// //   try {
// //     const res = await axios.get('/auth/me')
// //     dispatch(getUser(res.data || defaultUser))
// //   } catch (err) {
// //     console.error(err)
// //   }
// // }

// // export const removeFromCart = productId => async dispatch => {
// //   try {
// //     await axios.delete(`/api/cart/${productId}`)
// //     dispatch(removedFromCart(productId))
// //   } catch (err) {
// //     console.error(err)
// //   }
// // }

// // export const addToCart = product => dispatch => {
// //   try {
// //     dispatch(addedToCart(product))
// //   } catch (err) {
// //     console.error(err)
// //   }
// // }

// //---------------------- INITIAL STATE -----------------------
// const initialState = {
//   list: [],
//   isFetching: false
// }
// // Cart product in cart.list is defined when the product is added
// // from AllProducts or SingleProduct
// // When added, the quantity property is added, in addition to the
// // product info from the database

// //---------------------- REDUCER -----------------------
// export default function(state = initialState, action) {
//   switch (action.type) {
//     case REQUESTED_CART: {
//       return {
//         ...state,
//         isFetching: true
//       }
//     }
//     case ADDED_PRODUCT_TO_CART: {
//       action.product.quantity = 1
//       return {
//         ...state,
//         list: [...state.list, action.product]
//       }
//     }
//     case REMOVED_PRODUCT_FROM_CART: {
//       return {
//         ...state,
//         list: state.list.filter(item => item.id !== action.product.id)
//       }
//     }
//     default:
//       return state
//   }
// }
