import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name Of Brew' />
        <input
          type='text'
          name='brand'
          placeholder='Brewery' />
        <input
          type='number'
          name='price'
          placeholder='Price per pint' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='%ABV' />
        <button type='submit' className="btn btn-success">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;