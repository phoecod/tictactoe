import React from 'react';
import { connect } from 'react-redux';

export const GameInfo = (props) => {
    return (
        <div>
            {
                props.players.map((player, ind) => {
                    return(
                        <div className={props.playerTurn.number === player.number ? "info-container highlight" : "info-container"} key={ind}>
                                <span>Player {player.number}
                                    <span className="symbol"> ({player.shape}</span>) 
                                </span>
                                <input className="name" value={player.name} ></input>
                            <br></br>
                        </div>
                    )
                })
            }
            <br/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}
const connectedGameInfo = connect(mapStateToProps, undefined)(GameInfo);
export default connectedGameInfo;
 