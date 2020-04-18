import { put } from "redux-saga/effects";

import { getAllUrlsSuccess, getAllUrlsFail } from "../actions/urls";

export default function* () {
  const url = process.env.REACT_APP_API_ENDPOINT;

  const result = yield fetch(url, {
    method: "GET",
  }).then((response) => response.json());

  if (result.status === "success") {
    yield put(getAllUrlsSuccess(result.urls));
  } else {
    yield put(getAllUrlsFail(result.error));
  }
}
