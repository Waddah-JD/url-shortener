import actionTypes from "../actions/actionTypes";

const defaultState = {
  form: {
    values: { fullUrl: "" },
    isSubmiting: false,
    error: undefined,
  },
  urls: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NEW_URL_FORM_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          values: { ...state.form.values, fullUrl: action.payload },
        },
      };
    case actionTypes.SUBMIT_NEW_URL:
      return { ...state, form: { ...state.form.values, isSubmiting: true } };
    case actionTypes.SUBMIT_NEW_URL_SUCCESS:
      return {
        ...state,
        form: {
          ...state.form.values,
          values: { fullUrl: "" },
          isSubmiting: false,
          error: undefined,
        },
        urls: [...state.urls, action.payload],
      };
    case actionTypes.SUBMIT_NEW_URL_FAIL:
      return {
        ...state,
        form: {
          ...state.form.values,
          values: { fullUrl: "" },
          isSubmiting: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};
