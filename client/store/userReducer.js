import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER'
const GOT_ALL_USERS = 'GOT_ALL_USERS'
const REMOVE_USER = 'REMOVE_USER'
// adduser? updateuser?

/**
 * INITIAL STATE
 */
const initialState = {
  current: {},
  all: []
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GOT_USER, user})
const getAllUsers = users => ({type: GOT_ALL_USERS, users})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getAllUsers(data))
    } catch (err) {
      console.error(err)
    }
  }
}

/**
 * REDUCER
 */
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
    case REMOVE_USER:
      return {
        ...state,
        current: {}
      }
    default:
      return state
  }
}
