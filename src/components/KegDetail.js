import React from "react";
import PropTypes from "prop-types";
import pintPic from "./../img/pint.png";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  let pintClass = "pintPic";
  let disabled = false;
  let kegFullnessMessage = null;
  if (keg.pintsRemaining === 0) {
    disabled = true;
    kegFullnessMessage = "Out of stock! Sorry :(";
    pintClass = "pintPic kegEmpty";
  } else if (keg.pintsRemaining < 10) {
    kegFullnessMessage = "Low supply!";
    pintClass = "pintPic kegLow";
  }
  return (
    <React.Fragment>
      <img src={pintPic} alt="A frothy tankard of ale" className={pintClass} />
      <h1>Keg Detail</h1>
      <h3><strong>{props.keg.name}</strong> - from <em>{keg.brand}</em></h3>
      <p><em>{props.keg.alcoholContent}% ABV</em> - ${keg.price}/pint</p>
      <p>{props.keg.pintsRemaining} pints left!</p>
      <p><strong>{kegFullnessMessage}</strong></p>
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