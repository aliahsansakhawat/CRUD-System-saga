import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_WITH_ID,
  CREATE_USER_REQUEST,
  fetchUserFailure,
  fetchUserSuccess,
  fetchUserRequest,
  DELETE_USER_REQUEST,
} from "./actions/actions";

function* fetchUsersSaga() {
  try {
    const response = yield call(() => axios.get("http://localhost:3001/users"));
    yield put(fetchUserSuccess(response.data));
  } catch (err) {
    yield put(fetchUserFailure(err.message));
  }
}
// for userWithId
function* fetchUserByIdSaga(action) {
  try {
    const response = yield call(() =>
      axios.get(`http://localhost:3001/users/${action.payload}`)
    );

    // 👇 Log the fetched user data
    console.log("Fetched user by ID:", response.data);

    yield put({ type: FETCH_USER_WITH_ID, payload: response.data });
  } catch (err) {
    console.error("Fetch user by ID error:", err.message);
    yield put(fetchUserFailure(err.message));
  }
}
// for creat a user
function* createUserSaga(action) {
  try {
    yield call(axios.post, "http://localhost:3001/users", action.payload);
    yield put(fetchUserRequest());
  } catch (error) {
    console.log(error);
  }
}
// for delete
function* deleteUserRequest(action) {
  try {
    yield call(axios.delete, `http://localhost:3001/users/${action.payload}`);
    yield put(fetchUserRequest());
  } catch (error) {
    console.log(error);
  }
}
function* rootSaga() {
  yield all([
    takeLatest(FETCH_USER_REQUEST, fetchUsersSaga),
    takeLatest(FETCH_USER_WITH_ID, fetchUserByIdSaga),
    takeLatest(CREATE_USER_REQUEST, createUserSaga),
    takeLatest(DELETE_USER_REQUEST, deleteUserRequest),
  ]);
}

export default rootSaga;
