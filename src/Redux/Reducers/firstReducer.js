import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_WITH_ID,
} from "../actions/actions";

const initialState = {
  loading: false,
  users: [],
  error: false,
  userWithID: '{}',
};
export const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_USER_WITH_ID:
      return { ...state, loading: false ,userWithID:action.payload};
    default:
      return state;
  }
};
