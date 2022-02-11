import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let kegFullnessMessage = null;
  if (props.pintsRemaining === 0) {
    kegFullnessMessage = "Out of stock! Sorry :(";
  } else if (props.pintsRemaining < 10) {
    kegFullnessMessage = "Low supply!";
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3><strong>{props.name}</strong> - from <em>{props.brand}</em></h3>
        <p><em>{props.alcoholContent}% ABV</em> - ${props.price}/pint</p>
        <p>{props.pintsRemaining} pints left!</p>
        <p>{kegFullnessMessage}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pintsRemaining: PropTypes.number
};

export default Keg;