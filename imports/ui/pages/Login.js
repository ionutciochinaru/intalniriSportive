import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Login</h4>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <ControlLabel>Adresă Email</ControlLabel>
                <FormControl
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  <span className="pull-left">Parolă</span>
                  <Link className="pull-right" to="/recover-password">Ai uitat parola ?</Link>
                </ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Login</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
