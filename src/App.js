import './App.css';

import React, { Component } from 'react'
import Navbar from './mycompo/Navbar';
import News from './mycompo/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>

        <Router>
        <Navbar />   
         <Routes>

   <Route exact  path="/" element={<News key="general" country="in" category="general" pageSize="6"/>}/>
   <Route  exact  path="/sports" element={  <News key="sports"   country="in" category="sports"  pageSize="6"/> }/>
   <Route  exact  path="/business" element={<News  key="business"  country="in" category="business"  pageSize="6"/>}/>
        </Routes> 
      </Router>
      </div>
    )
  }
}


