import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import {getJSON} from './actions.js'


const App = ({datos}) => {
  return(
    <Grid>
      <Row>
        <Col sm={12}>
        <button onClick={() =>search()} >sera</button>
        <div> {datos.length!=0?datos[0].pl_name:<br/>}      
        </div>
        </Col>
      </Row>
    </Grid>
  )
}

const mapToProps = ({ datos }) => ({ datos});

export default connect(mapToProps)(App);
