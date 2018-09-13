import axios from 'axios'
//import history from '../history'

//---------------------- ACTION TYPES -----------------------
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_EMOJI = 'GOT_EMOJI'
const GOT_CATEGORY = 'GOT_CATEGORY'
const NEW_PRODUCT = 'NEW_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const GOT_CATEGORY_LIST = 'GOT_CATEGORY_LIST'

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

export const gotCategoryList = categoryList => ({
  type: GOT_CATEGORY_LIST,
  categoryList
})

export const newProduct = product => ({
  type: NEW_PRODUCT,
  product
})

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  product
})

export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  product: productId
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

export const getEmoji = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(gotEmoji(data))
    } catch (err) {
      console.error(err)
    }
  }
}
export const getCategoryList = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/category/categoryList`)
      dispatch(gotCategoryList(data))
    } catch (err) {
      console.error(err)
    }
  }
}
export const getCategory = (categoryId, history) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/category/${categoryId}`)
      dispatch(gotCategory(data))
      history.push(`/products/category/${categoryId}`)
    } catch (err) {
      console.error(err)
    }
  }
}

export const createProduct = (product, history) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/products/newProduct`, product)
      dispatch(newProduct(data))
      history.push(`/products/${data.id}`)
    } catch (err) {
      console.error(err)
    }
  }
}

export const updateProduct = product => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/products/${product.id}`, product)
      dispatch(editProduct(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const removeProduct = product => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${product}`)
      dispatch(deleteProduct(product))
    } catch (err) {
      console.error(err)
    }
  }
}
//---------------------- INITIAL STATE -----------------------
const initialState = {
  products: [],
  category: [],
  categoryList: [],
  selectedEmoji: {},
  isFetching: true
}
//---------------------- REDUCER -----------------------
const productReducer = (state = initialState, action) => {
  let newData
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
    case EDIT_PRODUCT:
      return {...state, selectedEmoji: action.product, isFetching: false}
    case DELETE_PRODUCT:
      newData = state.products.filter(each => {
        return each.productId !== action.productId
      })
      return {...state, products: newData, isFetching: false}
    case GOT_CATEGORY_LIST:
      return {...state, categoryList: action.categoryList, isFetching: false}
    default:
      return state
  }
}

export default productReducer
