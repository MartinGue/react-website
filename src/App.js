import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Diensten from "./components/pages/Diensten/Diensten";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer.js/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/diensten" component={Diensten} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
