import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddFile from "./components/CheckFile/AddFile";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
        <Provider store ={store}>
        <Router>
        <div className="App">
            <Header />
            <Route exact path = "/dashboard" component={Dashboard}/>
            <Route exact path = "/addFile" component={AddFile}/>
        </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
