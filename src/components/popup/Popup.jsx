import React from "react";
import './popup.css'
import { useSelector } from 'react-redux';
import { useRef } from 'react';


const Popup = props => {

  const bankCard = useSelector(state => state.bankCard);
  const bankCardRef = useRef()

  return (
    <div>
      {bankCard ? <div><div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}

        </div>
      </div></div>



        : <div> <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <p> Please add your card to continue!</p>
            <input type='text' id='bank-card' name='bank-card' ref={bankCardRef} /><br />
          </div>
        </div> </div>}

    </div>
  );

};

export default Popup;


/*
return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}

      </div>
    </div>
  );
*/