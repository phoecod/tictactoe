import React from 'react';
import {NavLink} from 'react-router-dom';
import NewGameModal from './NewGameModal';
import Header from './Header';

const LandingPage = class LandingPage extends React.Component {
    
    constructor () {
        super();
        this.state = {
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal (){

        this.setState({showModal: false});
    }

    render() {
        return (
            <div className="viewport">
                <Header></Header>
                <div className="landing-container">
                    <NewGameModal className="modal-container" 
                                closeModal={() => this.handleCloseModal()} 
                                isOpen={this.state.showModal}
                                ariaHideApp={false}>
                    </NewGameModal>
                    <button className="btn" onClick={this.handleOpenModal}>new game</button>
                    <NavLink to="/credits" ><button className="btn">Credits</button></NavLink>
                    <NavLink to="/" ><button className="btn">Exit<img className="logout-icon" src="/assets/logout-icon.svg" /></button></NavLink>
                </div>
            </div>
        )
    }
}

export default LandingPage;