import { put } from "redux-saga/effects";

import { submitNewUrlSuccess, submitNewUrlFail } from "../actions/urls";

export default function* ({ payload }) {
  const url = "http://localhost:42666/";

  const result = yield fetch(url, {
    method: "POST",
    body: JSON.stringify({ fullUrl: payload }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }).then((response) => response.json());

  if (result.status === "success") {
    yield put(submitNewUrlSuccess(result.url));
  } else {
    yield put(submitNewUrlFail(result.error));
  }
}
