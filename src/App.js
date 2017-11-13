import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import "./App.css";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import {getJSON} from './actions.js'


const App = ({datos}) => {
  
  return(
    <div>
      salio algo 
    </div>
  )
}

const mapToProps = ({ datos }) => ({ datos});

export default connect(mapToProps)(App);
