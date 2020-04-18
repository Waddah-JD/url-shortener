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

const urlsSelector = (state) => state.urls;

export const previouslyAddedUrlsSelector = createSelector(
  urlsSelector,
  (urls) => urls.previouslyAdded
);

export const recentlyAddedUrlsSelector = createSelector(
  urlsSelector,
  (urls) => urls.recentlyAdded
);

export const urlsLoadingSelector = createSelector(
  urlsSelector,
  (urls) => urls.loading
);

export const urlsLoadingErrorSelector = createSelector(
  urlsSelector,
  (urls) => urls.error
);
