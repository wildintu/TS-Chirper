import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chirps from './Components/Chirps';
import Forms from './Components/Forms';

const App: React.FC<IAppProps> = props => {
	return(
	<Router>
		<Switch>
			<Route exact path="/Forms" component={ Forms } />
			<Route path="/" component={ Chirps } />
		</Switch>
	</Router>
	)
	
}

export interface IAppProps {}

export interface IAppState {}

export default App;
