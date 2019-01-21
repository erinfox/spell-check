import React, { Component } from "react";
import { Formik } from "formik";

class TextBox extends Component {
  render() {
    const words = require("an-array-of-english-words");
    // returns all the words
    console.log(words);

    // needs to return the input value/word
    // const findInputWord = words.filter(word => word.match(value));
    // console.log(findInputWord);

    return (
      <div>
        <Formik
          initialValues={{ inputWord: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // can't figure out how to pass the inputWord, for now it just says cats
              words.find(word => word.match(values.inputWord))
                ? alert("CORRECT!")
                : alert("INCORRECT...");
              // alert("clicked");
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
