import axios from 'axios'
import history from '../history'

//---------------------- ACTION TYPES -----------------------

//---------------------- INITIAL STATE -----------------------
const initialState = {
  products: [],
  category: [],
  isFetching: true
}

//---------------------- ACTION CREATORS -----------------------
//EXAMPLE
// const getUser = user => ({type: GET_USER, user})

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

//---------------------- REDUCER -----------------------
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
