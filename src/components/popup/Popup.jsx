import React from "react";
import './popup.css'
import { useSelector } from 'react-redux';

const Popup = props => {

  const bankCard = useSelector(state => state.bankCard);

  return (
    <div>
      {bankCard ? 
      <div>
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            {props.content}
          </div>
        </div>
      </div>
      : 
      <div>
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <p> It's required to add payment methods in your Profile to complete the process!</p>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Popup;