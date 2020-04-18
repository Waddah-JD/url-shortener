import actionTypes from "../actions/actionTypes";

const defaultState = {
  form: {
    values: { fullUrl: "" },
    isSubmiting: false,
    error: undefined,
  },
  urls: {
    recentlyAdded: [],
    previouslyAdded: [],
    loading: false,
    error: undefined,
  },
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
        urls: {
          ...state.urls,
          recentlyAdded: [...state.urls.recentlyAdded, action.payload],
        },
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
    case actionTypes.GET_ALL_URLS:
      return { ...state, urls: { ...state.urls, loading: true } };
    case actionTypes.GET_ALL_URLS_SUCCESS:
      return {
        ...state,
        urls: {
          ...state.urls,
          loading: false,
          previouslyAdded: action.payload,
        },
      };
    case actionTypes.GET_ALL_URLS_FAIL:
      return {
        ...state,
        urls: { ...state.urls, loading: false, error: action.payload },
      };
    default:
      return state;
  }
};
