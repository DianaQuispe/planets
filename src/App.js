  import React, { Component } from "react";
  import "./App.css";
  import { connect } from "redux-zero/react";
  import { Grid, Row, Col, Button } from "react-bootstrap";
  import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
  import { search, getJSON } from "./actions.js";
import {planetas} from './actions';

  const App = ({ datos }) => {
    const mapeo = datos.map((a, b) => {
      return <Row>
          <Col sm={6}>
            <div className="planets" key={b}>
              <p>
                <b>NAME:</b> {a.pl_name}
              </p>

              <p>
                <b>ORB:</b> {a.pl_orbper}
              </p>

              <p>
                <b>DISCOVERED:</b>in {a.pl_disc} with {a.pl_telescope}
              </p>
            </div>
          </Col>

          <Col sm={6}>
            <img src={a.src} width="250" height="150" />
            <br />
          </Col>
        </Row>;
});
    console.log("datos", datos);
    getJSON();
    return <Grid className="text-center">
        <Row>
          <Col sm={9}>
            <br />
            <br />
            <h1>Exoplanet Explorer</h1>
            <p>Learn more about planets around others stars!!</p>
          </Col>
          <Col sm={3}>
            <Button bsSize="large" bsStyle="warning" onClick={() => search()}>
              PLANETAS
            </Button> <br /> <br />
          </Col>
        </Row>
        {mapeo}
      </Grid>;
  };

  const mapToProps = ({ datos }) => ({ datos });

  export default connect(mapToProps)(App);
