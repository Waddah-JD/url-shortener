import { takeLatest, all } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";
import submitNewUrl from "./submitNewUrl";

function* currencyListChangesSubscriber() {
  yield takeLatest(actionTypes.SUBMIT_NEW_URL, submitNewUrl);
}

export default function* rootSaga() {
  yield all([currencyListChangesSubscriber()]);
}
