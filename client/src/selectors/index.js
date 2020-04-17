import { createSelector } from "reselect";

const formSelector = (state) => state.form;

const formValuesSelector = createSelector(
  formSelector,
  (form) => form.values || {}
);
export const formFullUrlValueSelector = createSelector(
  formValuesSelector,
  (values) => values.fullUrl || ""
);

export const formIsSubmittingSelector = createSelector(
  formSelector,
  (form) => form.isSubmiting
);

export const formErrorSelector = createSelector(
  formSelector,
  (form) => form.error
);

export const urlsSelector = (state) => state.urls;
