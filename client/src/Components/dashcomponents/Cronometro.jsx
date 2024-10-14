import React from 'react'
import logo from "../../assets/images/pulseFit_logo.svg"
import Timer from './Timer';
import TastiCrono from './TastiCrono';
import { useState } from 'react';

function Cronometro() {



  function closeCrono(){
    document.getElementById('cronometro').classList.remove("d-block")
  }

  const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };


  return (

              <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="cronometro">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} width="50"></img>
                    <h2 className="modal-title text-white mx-3">CRONOMETRO</h2>
                    <i className='bi bi-alarm px-2 fs-4 text-danger' onClick={()=>closeCrono()}></i>Chiudi

                  </div>
                  <Timer time={time} />
                  <TastiCrono active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}/>

              </div>
            </div>
            </div>

  )
}

export default Cronometro