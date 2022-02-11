import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value,
      pintsRemaining: 10,
      id: v4()});
    } // BEFORE COMPLETION EDIT PINTSREMAINING TO 124 INSTEAD OF 10

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Tap that keg!!" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;