import axios from 'axios'

//---------------------- ACTION TYPES -----------------------
const GOT_ORDERS = 'GOT_ORDERS'
const NEW_ORDER = 'NEW_ORDER'
const EDIT_ORDER = 'EDIT_ORDER'

//---------------------- ACTION CREATORS -----------------------
export const gotOrders = orders => ({
  type: GOT_ORDERS,
  orders
})

export const newOrder = order => ({
  type: NEW_ORDER,
  order
})

export const editOrder = order => ({
  type: EDIT_ORDER,
  order
})

//---------------------- THUNK CREATOR -----------------------

export const getOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(gotOrders(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const createOrder = order => {
  return async dispatch => {
    // console.log('ORDER--------', order)
    try {
      let cartOrder = {
        isFulfill: order.isFulfilled,
        email: order.email,
        items: order.items,
        billingAddress: order.billingAddress,
        shippingAddress: order.shippingAddress
      }
      const {data} = await axios.post(`/api/orders/`, {cartOrder})
      // console.log('REDUCER DATA-------------', data)
      dispatch(newOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const updateOrder = order => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/orders/${order.id}`, order)
      // console.log('update shpiing status here ', data)
      dispatch(editOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//---------------------- INITIAL STATE -----------------------
const initialState = {
  orders: [],
  orderToEdit: {},
  isFetching: true
}
//---------------------- REDUCER -----------------------
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ORDERS:
      return {
        ...state,
        orders: action.orders,
        isFetching: false
      }
    case NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.order],
        isFetching: false
      }
    case EDIT_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.order],
        isFetching: false
      }
    default:
      return state
  }
}

export default orderReducer
