import React from "react";
import PropTypes from "prop-types";
import kegTapPic from "./../img/kegtap.jpg";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="row">
        <h3 className="tapListHeader">{props.headerText}</h3>
        <div className="col-6">
          <form onSubmit={props.formSubmissionHandler} className="form-control">
            <label for='name' className="form-label">Brew Name</label>
            <input
              className="form-control"
              type='text'
              name='name'
              placeholder='Name Of Brew' />
            <label for='brand' className='form-label'>Brewery Name</label>
            <input
              className="form-control"
              type='text'
              name='brand'
              placeholder='Brewery' />
            <label for="price" className="form-label">Price per Pint</label>
            <input
              className="form-control"
              type='number'
              name='price'
              min="0"
              placeholder='$$$' />
            <label for="alcoholContent" className="form-label">Alcohol Percentage</label>
            <input
              className="form-control"
              type='number'
              name='alcoholContent'
              placeholder='%ABV' />
            <br/>
            <button type='submit' className="btn btn-success">{props.buttonText}</button>
          </form>
        </div>
        <div className="col-6">
          <img src={kegTapPic} alt="A man tapping a keg" className="kegTapping" />
        </div>
      </div>
      <br/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;