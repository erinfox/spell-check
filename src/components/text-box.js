import React, { Component } from "react";
import { Formik } from "formik";

class TextBox extends Component {
  render() {
    const words = require("an-array-of-english-words");
    // console.log(words);

    return (
      <div>
        <Formik
          initialValues={{ inputWord: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              words.find(word => word.match(values.inputWord))
                ? alert("CORRECT!")
                : alert("INCORRECT...");
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
                id="inputWord"
                placeholder="Enter a word..."
                type="text"
                value={values.inputWord}
                onChange={handleChange}
              />
              <br />
              <button type="submit" disabled={isSubmitting}>
                Check my spelling
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default TextBox;
