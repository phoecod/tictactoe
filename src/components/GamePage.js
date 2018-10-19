import React from 'react';
import {NavLink} from 'react-router-dom';
import GameInfo from './GameInfo';
import ResultModal from './resultModal';
import Board from './Board';
import {createArray,checkBoardForWin} from '../logic/logic';
import {connect} from 'react-redux';
import {setPlayers} from '../actions/players';
import Header from './Header';

const GamePage = class GamePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            board: [],
            playerTurn: {
                name: "one",
                shape: "X",
                number: 1
            },
            gameOver: false,
            winner: undefined,
            winCoords: [],
            moves: 0
        }
    }

    componentWillMount () {
        this.setState({board: createArray()});
        this.setState({winner: undefined});
        this.setState({gameOver: false});
        this.setState({moves: 0});
        this.setState({playerTurn: this.props.players[0]});
        console.log(this.state);
        console.log(this.props);
    }

    handleOnMove = (indexs) => {
        this.setState((prevState) => {
            return ({
                moves: prevState.moves + 1
            })
        });
        if (this.state.moves == 8) {
            this.setState({gameOver: true});
            this.setState({winner: undefined});
        }

        const updatedtBoard = this.state.board;
        updatedtBoard[indexs.row][indexs.col] = this.state.playerTurn.shape;
        this.setState({board: updatedtBoard});
        const winCoords = checkBoardForWin(this.state.board);
        if(winCoords != false) {
            setTimeout(() => {this.setState({gameOver: true}) }, 2000);
            
            this.setState({winner: this.state.playerTurn.number})
            this.setState({winCoords: winCoords});
        } 
        else {
            let changePlayer = this.props.players.filter((player) => {
                return player.number !== this.state.playerTurn.number
            })
            this.setState({playerTurn: changePlayer[0]});
        }
    }

    handleRestart = () => {
        this.setState({
            gameOver: false,
            winner: undefined,
            moves: 0,
            board: createArray()
        });
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="game-container">
                    <div className="board-container spacing">
                    {
                        this.state.gameOver && 
                        <ResultModal isOpen={this.state.gameOver}
                                    restartGame={this.handleRestart}
                                    winner={this.state.winner}>
                        </ResultModal>
                    }
                        <Board className="spacing" 
                                onMove={this.handleOnMove} 
                                board={this.state.board}
                                winCoord={ this.state.winner !== undefined ? this.state.winCoords : []}>
                        </Board>
                        <GameInfo playerTurn={this.state.playerTurn} players={this.props.players}></GameInfo>
                        
                    </div>
                    <div className="btn-container spacing">
                        <NavLink to="/"><button className="btn">Back</button></NavLink>
                    </div>
                </div>
            </div>
        )   
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        setPlayers: (players) => dispatch(setPlayers(players))
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}
const connectedGamePage = connect(mapStateToProps, mapDispatchtoProps)(GamePage);

export default connectedGamePage;