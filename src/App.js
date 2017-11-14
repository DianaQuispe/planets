  import React, { Component } from "react";
  import "./App.css";
  import { connect } from "redux-zero/react";
  import { Grid, Row, Col, Button } from "react-bootstrap";
  import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
  import { search, getJSON } from "./actions.js";


  const App = ({ datos }) => {
      const mapeo = datos.map((a, b) => {
        return <div key={b}>
                    <p>{a.pl_name}</p>

            <p>{a.pl_orbper}</p>

            <p>{a.pl_telescope}</p>
          </div>;
      });
    console.log('datos',datos)
    getJSON();
    return <Grid>
        <Row>
          <Col sm={12}>
            <button onClick={() => search()}>sera</button>
            {mapeo}
            {/* <div> {datos.length != 0 ? <All/> : <br/>}</div> */}
          </Col>
        </Row>
      </Grid>;
  };

  const mapToProps = ({ datos }) => ({ datos });

  export default connect(mapToProps)(App);
