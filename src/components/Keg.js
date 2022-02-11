import React from "react";
import PropTypes from "prop-types";
import kegPic from "./../img/keg.png";

function Keg(props){
  let kegFullnessMessage = null;
  let kegPicClass = "kegIcon"
  if (props.pintsRemaining === 0) {
    kegFullnessMessage = "Out of stock! Sorry :(";
    kegPicClass = "kegIcon kegEmpty";
  } else if (props.pintsRemaining < 10) {
    kegFullnessMessage = "Low supply!";
    kegPicClass = "kegIcon kegLow";
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <img src={kegPic} alt="The same pic of a keg" className={kegPicClass} />
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