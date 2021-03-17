import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/common/Breadcrumb";

//i18n
import { withNamespaces } from "react-i18next";

import stateWrapper from "../../containers/provider";




const Payments = (props) => {
  let total = localStorage.getItem("total")

    
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Payments")}
            breadcrumbItem={props.t("Payments")}
          />

          <Row>
            <Col lg="8">
              <Card>
                <CardBody>
                  <h5>Payments</h5>
        
                  <div className="hr"></div>

                  <div className="mb-4"></div>
                  <Row>
                    <Col lg="5">
                      <div class="card-radio-custom ">
                        <span>
                          Total Amount : <b>${total}</b>
                        </span>
                      </div>
                      <div className="mb-4"></div>
                    </Col>
                  </Row>
                  

                  <div className="mb-4"></div>
                  <Row>

                    <Col lg="5">
                      <div className="custom-control custom-checkbox">
                      <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    >
                    </input>
                    <label className="custom-control-label"
                        htmlFor="customCheck1" >Pay with Credit Card</label>
                      </div>
                    
                    </Col>
                    <Col lg="5">
                      <div className="custom-control custom-checkbox">
                      <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                    >
                    </input>
                    <label className="custom-control-label"
                        htmlFor="customCheck2" >Pay with Paypal</label>
                      </div>
                   
                    </Col>
                  </Row>
                  <div className="my-4">
                        <button className="btn btn-warning waves-effect waves-light" type="submit">
                            Continue
                        </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default (withNamespaces()(stateWrapper(Payments)));
