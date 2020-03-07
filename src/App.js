import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import PokeDetails from "./components/PokeDetails";
import AppState from "./context/AppState";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route exact path="/pokemon/:name" component={PokeDetails} />
          </Switch>
        </div>
      </Router>
    </AppState>
  );
};

export default App;
