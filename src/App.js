import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Layout/Navbar.js";
import HomePage from "./Pages/Home/HomePage.js";
import Publications from './Pages/Publications/Publications.js'
import Teaching from './Pages/Teaching/Teaching'
import Personal from './Pages/Personal/Personal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="publicacions" path="/publications" component={Publications} />
            <Route name='teaching' path='/teaching' component={Teaching} />
            <Route name='personal' path='/personal' component={Personal} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
