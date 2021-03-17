import React, {useState, useEffect} from "react";

import {Container, Row, Col, CardBody, Label, Input, CardTitle, FormGroup, Form, Card} from 'reactstrap'

import {AvForm} from "availity-reactstrap-validation";

import stateWrapper from "../../containers/provider";

import { withNamespaces } from "react-i18next";
import Breadcrumbs from '../../components/common/Breadcrumb'

const Order = (props) => {

    const [state, setState] = useState({
        food: "",
        quantity: "",
        price: "",
        total: 0,
        
      });

      const {food, quantity, price, total} = state;

      const onChange = e => setState({
        ...state, [e.target.name] : e.target.value
    });

      function handleValidSubmit(e) {
        e.preventDefault();
        props.orderStore.addOrder(state);
        console.log(state)
        props.history.push("/cart");

        
      }
      useEffect(() => {
        const amount = quantity * price;

        setState({...state, total: amount})
        //eslint-disable-next-line
      }, [quantity, price])

    return(
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                <Breadcrumbs title={props.t("Order")}
                    breadcrumbItem={props.t("Order")}/>

                   
                <Form
                onSubmit={handleValidSubmit} 
                >
                    <Row>
                        <Col lg="8">
                            <Card>
                            <CardBody>
                                <CardTitle>
                                    PLACE YOUR ORDER
                                </CardTitle>

                               
                                       
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <Label>
                                                Pick your choice
                                            </Label>
                                            <Input
                                                name="food"
                                                value={food}
                                                onChange={onChange}
                                                type="select"
                                                className="form-control"
                                                required
                                            >
                                                <option defaultValue>Select</option>
                                                <option>Jollof Rice</option>
                                                <option>Amala</option>
                                                <option>Yam and egg</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <Label>
                                               Quantity
                                            </Label>
                                            <Input 
                                                name="quantity"
                                                value={quantity}
                                                onChange={onChange}
                                                type="text"
                                                className="col-sm-2"
                                                required
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <Label>
                                               Price
                                            </Label>
                                            <Input 
                                                name="price"
                                                value={price}
                                                onChange={onChange}
                                                type="text"
                                                className="col-sm-2"
                                                required
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                              
                                
                                
                            </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">
                                        Order Summary
                                        <div className="hr"></div>
                                    </CardTitle>
                                    <div class="font-14 text-muted card-subtitle">
                                        <Row>
                                            <Col lg="6">
                                                <p>Food: </p>
                                            </Col>
                                            <Col lg="6">
                                                <p>{food}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <p>Quantity: </p>
                                            </Col>
                                            <Col lg="6">
                                                <p>{quantity}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <p>Price: </p>
                                            </Col>
                                            <Col lg="6">
                                                <p>${price}</p>
                                            </Col>
                                        </Row>
                                        
                                    </div>
                                    <div className="hr"></div>
                                    <div class="font-14 text-muted card-subtitle my-3">
                                    <Row>
                                        <Col lg="6">
                                            <h5>Total :</h5>
                                        </Col>
                                        <Col lg="6">
                                        <p>
                                            {`$${total}`}
                                        </p>
                                        </Col>
                                    </Row>
                                    </div>
                                      
                                <div>
                                    <button className="btn btn-warning waves-effect waves-light" type="submit">
                                        Submit Order
                                    </button>
                                </div>
                                

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </Form>
                </Container> 
            </div>
        </React.Fragment>
    )
}

export default (withNamespaces()(stateWrapper(Order)));