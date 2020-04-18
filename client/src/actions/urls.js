import actionTypes from "./actionTypes";

export const changeNewUrlFormValue = (fullUrl) => {
  return { type: actionTypes.CHANGE_NEW_URL_FORM_VALUE, payload: fullUrl };
};

export const submitNewUrl = (fullUrl) => {
  return { type: actionTypes.SUBMIT_NEW_URL, payload: fullUrl };
};

export const submitNewUrlSuccess = (url) => {
  return { type: actionTypes.SUBMIT_NEW_URL_SUCCESS, payload: url };
};

export const submitNewUrlFail = (error) => {
  return { type: actionTypes.SUBMIT_NEW_URL_FAIL, payload: error };
};

export const getAllUrls = () => {
  return { type: actionTypes.GET_ALL_URLS };
};

export const getAllUrlsSuccess = (urls) => {
  return { type: actionTypes.GET_ALL_URLS_SUCCESS, payload: urls };
};

export const getAllUrlsFail = (error) => {
  return { type: actionTypes.GET_ALL_URLS_FAIL, payload: error };
};
