import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3><strong>{props.keg.name}</strong> - from <em>{keg.brand}</em></h3>
      <p><em>{props.keg.alcoholContent}% ABV</em> - ${keg.price}/pint</p>
      <p>{props.keg.pintsRemaining} pints left!</p>
      <button onClick={ props.onClickingEdit } className="btn btn-warning">Edit this keg!</button>
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