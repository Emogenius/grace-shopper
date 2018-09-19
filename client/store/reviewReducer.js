import axios from 'axios'
//import history from '../history'
//---------------------- ACTION TYPES -----------------------
const GOT_ALL_REVIEWS = 'GOT_ALL_REVIEWS'
const GOT_PRODUCT_REVIEW = 'GOT_PRODUCT_REVIEW'
const GOT_USER_REVIEW = 'GOT_USER_REVIEW'
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW'
const REWRITE_REVIEW = 'REWRITE_REVIEW'
const DELETE_REVIEW = 'DELETE_REVIEW'
//---------------------- ACTION CREATORS -----------------------
export const gotProductReviews = reviews => ({
  type: GOT_PRODUCT_REVIEW,
  reviews
})
export const gotUserReviews = reviews => ({
  type: GOT_USER_REVIEW,
  reviews
})
export const gotAllReviews = reviews => ({
  type: GOT_ALL_REVIEWS,
  reviews
})
export const addNewReview = review => ({
  type: ADD_NEW_REVIEW,
  review
})
export const rewriteReview = review => ({
  type: REWRITE_REVIEW,
  review
})
export const deleteReview = reviewId => ({
  type: DELETE_REVIEW,
  review: reviewId
})
//---------------------- THUNK CREATOR -----------------------
export const getAllReviews = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/reviews')
      dispatch(gotAllReviews(data))
    } catch (err) {
      console.error(err)
    }
  }
}
export const getUserReviews = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/reviews/user/:userId`)
      dispatch(gotUserReviews(data))
    } catch (err) {
      console.error(err)
    }
  }
}
export const getProductReviews = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/reviews/product/:productId`)
      dispatch(gotProductReviews(data))
    } catch (err) {
      console.error(err)
    }
  }
}
export const createReview = (review, history) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/reviews`, review)
      dispatch(addNewReview(data))
      history.push(`/reviews/${data.productId}`)
    } catch (err) {
      console.error(err)
    }
  }
}
export const updateReview = (review, ownProps) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/reviews/${review.id}`, review)
      dispatch(rewriteReview(data))
      ownProps.history.push('/home')
    } catch (err) {
      console.error(err)
    }
  }
}
export const removeReview = review => {
  return async dispatch => {
    try {
      await axios.delete(`/api/reviews/${review.id}`)
      dispatch(deleteReview(review))
    } catch (err) {
      console.error(err)
    }
  }
}
//---------------------- INITIAL STATE -----------------------
const initialState = {
  reviews: [],
  selectedUser: [],
  selectedProduct: [],
  selectedReview: [],
  isFetching: true
}
//---------------------- REDUCER -----------------------
const ReviewReducer = (state = initialState, action) => {
  let newData
  switch (action.type) {
    case GOT_ALL_REVIEWS:
      return {...state, reviews: action.reviews, isFetching: false}
    case GOT_USER_REVIEW:
      return {...state, selectedUser: action.reviews, isFetching: false}
    case GOT_PRODUCT_REVIEW:
      return {...state, selectedProduct: action.reviews, isFetching: false}
    case ADD_NEW_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.review],
        isFetching: false
      }
    case REWRITE_REVIEW:
      return {...state, selectedReview: action.review, isFetching: false}
    case DELETE_REVIEW:
      newData = state.reviews.filter(each => {
        return each.reviewId !== action.reviewId
      })
      return {...state, reviews: newData, isFetching: false}
    default:
      return state
  }
}
export default ReviewReducer
