import React from 'react';
import Header from './Header';
import {NavLink} from 'react-router-dom';
import YouTube from '@u-wave/react-youtube';

const CreditsPage = class CreditsPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            chars: []
        }
    }
    componentWillMount () {
        fetch('http://api.tvmaze.com/people/1/castcredits').then((res) => {
            res.json().then((result) => {
                const maps = result.map((char) => {
                    const url = char._links.character.href;
                    fetch(url).then((res) => {
                        res.json().then((result) => {
                            this.setState((prevState) => {
                                const s = prevState.chars.concat(result.name);
                                return {
                                    chars: s
                                }
                            })
                        })
                    })
                })
            })
        });
    }
    
    render() {
        const style = {
            textAlign: 'center'
        };
        return (
            <div >
                <Header></Header>
                <div className="m-colflex-container">
                    <h2 style={style}>Credits</h2>
                    <div className=".m-container rowflex">
                        <YouTube
                        video="LdHi9awgnus"
                        autoplay={false}
                        width={500}
                        height={300}
                        startSeconds={93}
                        endSeconds={105}
                        />
                    </div>
                    
                    <div className="credits-container">
                        {
                            this.state.chars.map((name, ind) => {
                                return <div key={ind} className="xs-margin">{name}</div>
                            })
                        }
                    </div>
                    <NavLink className="credits-btn" to="/"><button className="btn">Back</button></NavLink>
                </div>
            </div>
        )
    }
}

export default CreditsPage;