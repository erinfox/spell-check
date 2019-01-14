import React from "react";
import { Formik } from "formik";

const Basic = () => (
  <div>
    <Formik
      initialValues={{ inputWord: "" }}
      // validate={values => {
      //   let errors = {};
      //   if (!values.inputWord) {
      //     errors.inputWord = "Required";
      //   }
      //   {
      //     errors.inputWord = "Invalid word";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          alert("clicked");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="inputWord"
            name="inputWord"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.inputWord}
          />
          {/* {errors.inputWord && touched.inputWord && errors.inputWord} */}
          <br />
          <button type="submit" disabled={isSubmitting}>
            Check my spelling
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
