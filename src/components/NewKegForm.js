import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value || "Unnamed", 
      brand: event.target.brand.value || "No brewery listed", 
      price: parseInt(event.target.price.value), 
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pintsRemaining: 124,
      id: v4()});
    }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Tap that keg!!" 
        headerText="Tap a new brew!"/>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;