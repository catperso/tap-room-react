import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3><strong>{props.name}</strong> - from <em>{props.brand}</em></h3>
        <p><em>{props.alcoholContent}% ABV</em> - ${props.price}/pint</p>
        <p>{props.pintsRemaining} pints left!</p>
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