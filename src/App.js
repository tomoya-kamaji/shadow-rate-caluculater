import React, { Component } from 'react';
import './App.css';
import showResults from "./showResults";
import MyForm from "./MyForm";
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Grid style={{padding: 15}}>
          <Row>
            <Col sm={10}>
              <h3>フォーム画面</h3>
              <MyForm onSubmit={showResults}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;