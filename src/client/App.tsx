import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chirps from "./Components/Chirps";
import Forms from "./Components/Forms";
import SingleChirp from "./Components/SingleChirp";

const App: React.FC<IAppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Forms" component={Forms} />
        <Route exact path="/SingleChirp/:id/admin" component={SingleChirp} />
        <Route path="/" component={Chirps} />
      </Switch>
    </Router>
  );
};

export interface IAppProps {}

export interface IAppState {}

export default App;
