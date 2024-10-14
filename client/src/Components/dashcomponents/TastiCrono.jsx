import React from 'react'

function TastiCrono(props) {

  const StartButton = (
    <div className="btn btn-one btn-success"
        onClick={props.handleStart}>
        Start
    </div>
  );
  const ActiveButtons = (
      <div className="btn-grp">
          <div className="btn btn-danger btn-two"
              onClick={props.handleReset}>
              Reset
          </div>
          <div className="btn btn-one btn-info"
              onClick={props.handlePauseResume}>
              {props.isPaused ? "Riavvia" : "Pausa"}
          </div>
      </div>
  );



  return (
    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-1">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  )
}

export default TastiCrono