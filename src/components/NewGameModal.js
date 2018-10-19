import React from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import {setPlayers, removePlayers} from '../actions/players';
import {history} from '../router/AppRouter';

const NewGameModal = class NewGameModal extends React.Component  {

    constructor (props) {
        super(props);
        this.state = {
            shapes: [],
            playerOneShape: 'Select',
            playerTwoShape: 'Select',
            symbolError:  false,
            nameError: false
        }
    }
    
    componentDidMount() {
        removePlayers();
        this.setState({shapes: ['Select','X', 'O']});
        this.setState({playerNumber: 1});
    }

    setPlayerShapes = (e) => {
        const shapeValue = e.target.value;
        const shapeName = e.target.name;
        if (shapeValue !== "Select") {
            let newState = {};
            newState[shapeName] = shapeValue;
            this.setState(newState);
            if (shapeName ==="playerOneShape") {
                shapeValue === "O" ? this.setState({playerTwoShape: "X"}) : this.setState({playerTwoShape: "O"})
            } else {
                shapeValue === "O" ? this.setState({playerOneShape: "X"}) : this.setState({playerOneShape: "O"})
            }
        }
        
    }

    handleForm = (e) => {
        e.preventDefault();
        const playerOneName = e.target.playerOneName.value.trim();
        const playerTwoName = e.target.playerTwoName.value.trim();
        const oneShape = this.state.playerOneShape;
        const twoShape = this.state.playerTwoShape;
        if (oneShape !=='Select' && twoShape !=='Select' && playerOneName.length > 0 && playerTwoName.length > 0) {
            if (!this.state.symbolError) this.setState({symbolError: false});
            if (!this.state.nameError) this.setState({nameError: false});
            const players = [];
            players.push({
                        number: 1,
                        name: playerOneName,
                        shape: oneShape
                    });
            players.push({
                        number: 2,
                        name: playerTwoName,
                        shape: twoShape
                    });
            
            this.props.setPlayers(players);
            this.props.closeModal();
            history.push('/newgame');
        } else {
            if (playerOneName.length === 0 || playerTwoName.length === 0) this.setState({nameError: true});
            if (oneShape === 'Select' || twoShape === 'Select') this.setState({symbolError: true});
        }
        
    }

    render () {
        return (
            <div>
                <ReactModal className="modal-container" isOpen={this.props.isOpen}>
                    <form onSubmit={this.handleForm}>          
                        <h3 className="modal-title">Start New Game</h3>
                        <div className="player-container">
                            {this.state.nameError && <div className="spacing error">Names cannot be blank</div>}
                            <div className="player-title">player 1</div>
                            <div>
                                <span>Name: </span><input name="playerOneName"></input>
                            </div>
                            {this.state.symbolError && <div className="spacing error">Please select a symbol X or O</div>}
                            <div className="shape-container">
                                <span>Shape: </span>
                                
                                <select value={this.state.playerOneShape} onChange={this.setPlayerShapes} className="select" name="playerOneShape">
                                    { 
                                        this.state.shapes.map((shape) => {
                                            return (
                                                <option disabled={shape === "Select" && this.state.playerOneShape !=="Select" ? true : false} 
                                                        key={shape}>
                                                    {shape}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            
                        </div>
                        
                        
                        <div className="player-container">
                            <div className="player-title" >player 2</div>
                            <div >
                                <span>Name: </span><input name="playerTwoName"></input>
                            </div>
                            <div className="shape-container">
                                <span>Shape: </span>
                                <select value={this.state.playerTwoShape} onChange={this.setPlayerShapes} className="select" name="playerTwoShape">
                                    {
                                        
                                        this.state.shapes.map((shape) => {
                                            return (
                                                <option disabled={shape === "Select" && this.state.playerTwoShape !=="Select" ? true : false}
                                                        key={shape}>{shape}</option>
                                            )
                                        })
                                        
                                    }
                                </select>
                            </div>
                            
                        </div>
                        <div className="spacing">
                            <button className="btn">Add Players</button>
                            <button onClick={() => this.props.closeModal()}className="btn">Close</button>
                        </div>
                        
                    </form>
                </ReactModal>
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        setPlayers: (players) => dispatch(setPlayers(players))
    }
}

const connectedNewGameModal = connect(undefined, mapDispatchtoProps)(NewGameModal);
export default connectedNewGameModal;
