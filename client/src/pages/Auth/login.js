import AvField from 'availity-reactstrap-validation/lib/AvField';
import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {Container, Col, Row, Card, CardBody, Alert} from 'reactstrap';

import Profile from '../../assests/images/Nigerian-jollof.jpeg'
import logo from "../../assests/images/images.png";

import stateWrapper from "../../containers/provider";

import {loginUser, apiError} from '../../store/auth/login/actions'

import {connect} from 'react-redux'


const Login = (props) => {

    function handleValidSubmit(event, values) {
        event.preventDefault();
        console.log(values)
        props.userStore.signIn(values, props);
      }
    
    return (
        <React.Fragment>
            <div className="home-btn d-none d-sm-block">
                <Link to="/" className="text-dark">
                <i className="fas fa-home h2"></i>
                </Link>
            </div>
            <div className="account-pages my-2 pt-sm-2">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-soft-primary">
                                    <Row>
                                       <Col className="col-12" style={{backgroundImage:` URL(${Profile})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                         <div className="text-light p-4 ">
                                          <h5 className="text-light">Welcome Back!</h5>
                                          <p>Sign in</p>
                                         </div>
                                       </Col> 
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <div>
                                        <Link to="/">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src={logo}
                                                        alt=""
                                                        className="rounded"
                                                        height="34"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <AvForm className="form-horizontal"
                                        onValidSubmit={(e, v) => {
                                            handleValidSubmit(e, v);
                                          }}>
                                              {props.error && props.error ? (
                                                  <Alert color="danger">{props.error}</Alert>
                                              ) : null}
                                            <div className="form-group">
                                                <AvField
                                                    name="email"
                                                    label="Email"
                                                    value=""
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    type="email"
                                                    required
                                                />

                                            </div>
                                            <div className="form-group">
                                                <AvField
                                                    name="password"
                                                    label="Password"
                                                    value=""
                                                    type="password"
                                                    required
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                           

                                            <div className="mt-5">
                                                <button
                                                className="btn btn-warning btn-block waves-effect waves-light"
                                                type="submit"
                                                >
                                                Log In
                                                </button>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <Link className="text-warning">
                                                    <i className="mdi mdi-lock mr-1"></i> Forgot your Password?
                                                </Link>
                                            </div>
                                        </AvForm>
                                    </div>
                                </CardBody>
                                
                            </Card>     
                            <div className="mt-2 text-center">
                                    <p>
                                        Don't have an account? {" "}
                                        <Link to="/register" className="font-weight-medium text-warning">
                                        {" "}
                                        Signup now{" "}
                                        </Link>{" "}
                                    </p>
                                </div>                      
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
const mapStatetoProps = (state) => {
    const { error } = state.Login;
    return { error };
  };
export default withRouter(
    connect(mapStatetoProps, { loginUser, apiError })(stateWrapper(Login))
  );
