import axios from 'axios'
//import history from '../history'

//---------------------- ACTION TYPES -----------------------
const GOT_PRODUCTS = 'GOT_PRODUCTS'

//---------------------- ACTION CREATORS -----------------------
export const gotProducts = products => ({
  type: GOT_PRODUCTS,
  products
})

//---------------------- THUNK CREATOR -----------------------

export const getProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(gotProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//---------------------- INITIAL STATE -----------------------
const initialState = {
  isFetching: false
}
//---------------------- REDUCER -----------------------
const productReducer = (state = initialState, action) => {
  let newData
  switch (action.type) {
    case GOT_PRODUCTS:
      return {...state, products: action.products, isFetching: false}
    default:
      return state
  }
}

export default productReducer
