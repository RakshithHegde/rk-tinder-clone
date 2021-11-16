import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header*/}

        <Router>
          <Switch>
            <Route path="/chats">
              <Header backButton="/" />
              <h2>Hi I am chat page</h2>
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>

          {/*Tinder Cards */}
          {/* Buttons below tinder cards*/}
          {/* Chats screen*/}
          {/* Individual chat screen*/}
        </Router>
      </header>
    </div>
  );
}

export default App;
