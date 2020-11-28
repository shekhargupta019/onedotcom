import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, BookReview } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/review/:reviewId" exact component={BookReview} />
        <Route render={() => <div>No Route found for this URL</div>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
