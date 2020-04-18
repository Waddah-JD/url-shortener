import { takeLatest, all, put } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";
import { getAllUrls as getAllUrlsAction } from "../actions/urls";

import submitNewUrl from "./submitNewUrl";
import getAllUrls from "./getAllUrls";

function* init() {
  yield put(getAllUrlsAction());
}

function* currencyListChangesSubscriber() {
  yield takeLatest(actionTypes.SUBMIT_NEW_URL, submitNewUrl);
}

function* getAllUrlsSubscriber() {
  yield takeLatest(actionTypes.GET_ALL_URLS, getAllUrls);
}

export default function* rootSaga() {
  yield all([init(), getAllUrlsSubscriber(), currencyListChangesSubscriber()]);
}
