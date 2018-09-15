import axios from 'axios'
import history from '../history'

//---------------------- ACTION TYPES -----------------------
const REQUEST_RESULTS = 'REQUEST_RESULTS'
const GOT_RESULTS = 'GOT_RESULTS'

//---------------------- ACTION CREATORS -----------------------
export const requestedResults = () => ({
  type: REQUEST_RESULTS
})

export const gotResults = results => ({
  type: GOT_RESULTS,
  results
})

//---------------------- THUNK CREATOR -----------------------

export const getResults = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/search')
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
