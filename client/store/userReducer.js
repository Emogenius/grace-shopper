import axios from 'axios'
// import history from '../history'

//---------------------- ACTION TYPES -----------------------
const GOT_USER = 'GOT_USER'
const GOT_ALL_USERS = 'GOT_ALL_USERS'
const REMOVED_USER_FROM_LOGIN = 'REMOVED_USER_FROM_LOGIN'
// adduser? updateuser?

//---------------------- ACTION CREATORS -----------------------
const gotUser = user => ({type: GOT_USER, user})
const gotAllUsers = users => ({type: GOT_ALL_USERS, users})
const removedUserFromLogin = () => ({type: REMOVED_USER_FROM_LOGIN})

//---------------------- THUNK CREATOR -----------------------
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(gotUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method, history) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(gotUser({error: authError}))
  }

  try {
    dispatch(gotUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removedUserFromLogin())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(gotAllUsers(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//---------------------- INITIAL STATE -----------------------
const initialState = {
  current: {},
  all: []
}

//---------------------- REDUCER -----------------------
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        current: action.user
      }
    case GOT_ALL_USERS:
      return {
        ...state,
        all: action.users
      }
    case REMOVED_USER_FROM_LOGIN:
      return {
        ...state,
        current: {}
      }
    default:
      return state
  }
}
