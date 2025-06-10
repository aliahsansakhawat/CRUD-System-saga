// actions type
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const FETCH_USER_WITH_ID = "FETCH_USER_WITH_ID";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";

// action creators

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });

export const fetchUserSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUserWithId = (id) => ({
  type: FETCH_USER_WITH_ID,
  payload: id,
});
export const createUserRequest = (user) => ({
  type: CREATE_USER_REQUEST,
  payload: user,
});

export const deleteUserRequest = (id) => ({
  type: DELETE_USER_REQUEST,
  payload: id,
});
