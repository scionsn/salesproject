import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar';
import {Showstaff}   from './components/showstaff';
import { Showcampaign } from './components/showcampaign';
import { Showperform } from './components/staffperform';
import { Home } from './components/home';
import Showleads from './components/leadinfo';
import { Prodlist } from './components/productlist';

function App() {
  return (
    <div className="container">
    <Router>
<Navbar/>
<Route exact path="/" component={Home}></Route>
  <Route path="/showstaff" component={Showstaff}></Route>
<Route path="/showcampaign" component={Showcampaign}></Route>
<Route path="/staffperform" component={Showperform}></Route>
<Route path="/leadinfo" component={Showleads}></Route>
<Route path="/prodinfo" component={Prodlist}></Route>


</Router>
    </div>
  );
}

export default App;
