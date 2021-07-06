
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import FavPage from "./components/FavPage";
class App extends React.Component {

  render() {
    return(
      <>
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/favorite">
                <FavPage/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;