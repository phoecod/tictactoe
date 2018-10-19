import React from 'react';
import ReactModal from 'react-modal';
import {NavLink} from 'react-router-dom';

const ResultModal = (props) => {
    return (
        <ReactModal className="modal-container" isOpen={props.isOpen}>
            <h3 className="modal-title">{props.winner === undefined ? "It's a Tie!" :`Victory to Player ${props.winner}`}</h3>
            {props.winner && <img className="icons victory-icon" src="/assets/victory-icon.svg" ></img>}
            <div className="spacing">
                <button className="btn" onClick={() => {props.restartGame()}}className="btn">Restart</button>
                <NavLink to="/" ><button className="btn">Quit</button></NavLink>
            </div>
        </ReactModal>
    )
}

export default ResultModal;