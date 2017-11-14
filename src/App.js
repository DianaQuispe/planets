import React, { Component } from "react";
import "./App.css";
import { connect } from "redux-zero/react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { search, getJSON } from "./actions.js";

const App = ({ datos }) => {
  const mapeo = datos.map((a, b) => {
    return <Grid>
        <Row>
          <Col sm={10} smOffset={2}>
            <div key={b}>
              <p><b>NOMBRE DEL PLANETAS</b> {a.pl_name}</p>

              <p><b>ORBITA</b> {a.pl_orbper}</p>

              <p><b>TELESCOPIO</b>{a.pl_telescope}</p>
            </div>
          </Col>
        </Row>
      </Grid>;
  });
  console.log("datos", datos);
  getJSON();
  return (
    <Grid className='text-center'>
      <Row>
        <Col sm={12}>
          <Button  onClick={() => search()}>PLANETAS</Button>  <br/>
          {mapeo}
        </Col>
      </Row>
    </Grid>
  );
};

const mapToProps = ({ datos }) => ({ datos });

export default connect(mapToProps)(App);
