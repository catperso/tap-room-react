import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  let disabled = false;
  let kegFullnessMessage = null;
  if (keg.pintsRemaining === 0) {
    disabled = true;
    kegFullnessMessage = "Out of stock! Sorry :(";
  } else if (keg.pintsRemaining < 10) {
    kegFullnessMessage = "Low supply!";
  }
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3><strong>{props.keg.name}</strong> - from <em>{keg.brand}</em></h3>
      <p><em>{props.keg.alcoholContent}% ABV</em> - ${keg.price}/pint</p>
      <p>{props.keg.pintsRemaining} pints left!</p>
      <p>{kegFullnessMessage}</p>
      <button onClick={ props.onClickingPint } className="btn btn-success" disabled={disabled}>Pour me a glass!</button>
      <button onClick={ props.onClickingEdit } className="btn btn-warning" disabled={disabled}>Edit this keg!</button>
      <button onClick={()=> onClickingDelete(keg.id) } className="btn btn-danger">Throw this keg out!</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;