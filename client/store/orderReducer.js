import axios from 'axios'

const GOT_ORDER = 'GOT_ORDER'
const GOT_GUEST = 'GOT_GUEST'
export const gotOrder = order => ({
  type: GOT_ORDER,
  order
})
export const gotGuest = guest => ({
  type: GOT_GUEST,
  guest
})
export const getOrder = order => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders', order)
      dispatch(gotOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getGuest = guest => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/users/`, guest)
      dispatch(gotGuest(data))
    } catch (err) {
      console.error(err)
    }
  }
}
const initialState = {}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ORDER:
      return {
        ...state
        // products: action.products,
        // isFetching: false
      }
    case GOT_GUEST:
      return {
        ...state
        // selectedEmoji: action.emoji,
        // isFetching: false
      }
    default:
      return state
  }
}
export default orderReducer
