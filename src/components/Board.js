import React from 'react';

const Board = ({ onMove, board, winCoord }) => {

  // the 'board' and 'onMove' handler are passed in from the props of the Game which
  // holds this component and control the state 
  // we will simply render the 'board' in its current state and call the 'onMove'
  // handler function given to us when a player clicks on a Square
  return (
      <div>
          {board.map((row, rInd) => {
              return (
                  <div className="board-row" key={rInd} >
                    {
                        row.map((col, cInd) => {
                            return (
                                <div className={winCoord.includes(rInd.toString() + cInd.toString()) ? "win square" : "square"}
                                    onClick={ col === ''? () => onMove({row: rInd,col: cInd}) : () => {}} 
                                    key={cInd}>
                                  <img src={col === "X" && "/assets/x-icon.svg" 
                                            || col === "O" && "/assets/o-icon.svg"  } />
                                </div>
                            )
                        })
                    }
                  </div>
              )
          })}
      </div>
  )
};

export default Board;