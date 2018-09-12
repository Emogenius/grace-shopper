import axios from 'axios'
//import history from '../history'

//---------------------- ACTION TYPES -----------------------
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_EMOJI = 'GOT_EMOJI'
const GOT_CATEGORY = 'GOT_CATEGORY'
const NEW_PRODUCT = 'NEW_PRODUCT'

//---------------------- ACTION CREATORS -----------------------
export const gotProducts = products => ({
  type: GOT_PRODUCTS,
  products
})
export const gotEmoji = emoji => ({
  type: GOT_EMOJI,
  emoji
})
export const gotCategory = category => ({
  type: GOT_CATEGORY,
  category
})

export const newProduct = product => ({
  type: NEW_PRODUCT,
  product
})

//---------------------- THUNK CREATOR -----------------------

export const getProducts = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/products')
    dispatch(gotProducts(data))
  }
}
export const getEmoji = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(gotEmoji(data))
    } catch (err) {
      console.log('not setting stuff')
      console.error(err)
    }
  }
}
export const getCategory = categoryId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/category/${categoryId}`)
      dispatch(gotCategory(data))
    } catch (err) {
      console.log('not setting stuff')
      console.error(err)
    }
  }
}
export const createProduct = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/products/newProduct`, product)
      dispatch(newProduct(data))
      history.push(`/aircrafts/${data.id}`)
    } catch (err) {
      console.error(err)
    }
  }
}
//---------------------- INITIAL STATE -----------------------
const initialState = {
  products: [],
  category: [],
  selectedEmoji: {},
  isFetching: true
}
//---------------------- REDUCER -----------------------
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {...state, products: action.products, isFetching: false}
    case GOT_EMOJI:
      return {...state, selectedEmoji: action.emoji, isFetching: false}
    case GOT_CATEGORY:
      return {...state, category: action.category, isFetching: false}
    case NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
        isFetching: false
      }
    default:
      return state
  }
}

export default productReducer
