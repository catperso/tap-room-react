import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value || keg.name, 
      brand: event.target.brand.value || keg.brand, 
      price: event.target.price.value || keg.price, 
      alcoholContent: event.target.alcoholContent.value || keg.alcoholContent,
      pintsRemaining: keg.pintsRemaining,
      id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update that keg!" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;