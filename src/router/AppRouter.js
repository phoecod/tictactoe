import {Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import CreditsPage from '../components/CreditsPage';
import GamePage from '../components/GamePage';
import NotFoundPage from '../components/NotFoundPage';
import React from 'react';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => {
	return (
			<Router history={history}>
			<div className="App">
				<Switch>
					<Route path="/" component={LandingPage} exact={true} />
					<Route path="/credits" component={CreditsPage} />
					<Route path="/newgame" component={GamePage}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
			</Router>
	)
}

export default AppRouter;