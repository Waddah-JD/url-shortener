import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  formFullUrlValueSelector,
  formErrorSelector,
  formIsSubmittingSelector,
} from "../selectors/index";
import { changeNewUrlFormValue, submitNewUrl } from "../actions/urls";

const NewUrlForm = () => {
  const formFullUrlValue = useSelector(formFullUrlValueSelector);
  const formError = useSelector(formErrorSelector);
  const formIsSubmitting = useSelector(formIsSubmittingSelector);
  const dispatch = useDispatch();
  const submitNewUrlHandler = (fullUrl) => {
    dispatch(submitNewUrl(fullUrl));
  };
  const changeNewUrlFormValueHandler = (fullUrl) =>
    dispatch(changeNewUrlFormValue(fullUrl));
  return (
    <>
      <h2>Add a new a URL:</h2>
      <form>
        <input
          name="fullUrl"
          type="text"
          value={formFullUrlValue}
          onChange={(e) => changeNewUrlFormValueHandler(e.target.value)}
          placeholder="insert full url here"
        />
        <br />
        <button
          disabled={formIsSubmitting}
          onClick={(e) => {
            e.preventDefault();
            submitNewUrlHandler(formFullUrlValue);
          }}
        >
          Submit
        </button>
      </form>
      {formError && <p>{formError}</p>}
      {formIsSubmitting && <p>Submitting...</p>}
    </>
  );
};

export default NewUrlForm;
