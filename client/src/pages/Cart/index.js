import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, Col, Container, Media, Row} from 'reactstrap'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { withNamespaces } from "react-i18next";
import stateWrapper from "../../containers/provider";
import Amala from "../../assests/images/Amala.jpg";
import Yam from "../../assests/images/yam.jpg";
import Jollof from "../../assests/images/jollof.jpg";
import order from '../Order/order';
import Payment from '../Payment/Payment'



const Dashboard = (props) => {
   

    const[state, setState] = useState({
        order: '',
        total: 0,
        success: ""
    })

    useEffect(() => {
        
              props.orderStore.fetchOrder();
              let orderData = props.orderStore.state.sessionData.orders;
            
              setState({...state, order: orderData})
        
            
            
    }, [props.orderStore, state])


        function handleDelete(_id) {
            console.log(_id)
            props.orderStore.deleteOrder(_id)

            setState({
                ...state,
                success: "Deleted",
              });
               
        }
        

        function  handleSubmit(e) {
            props.history.push("/payment");
            
            localStorage.setItem("total", e)
        }
    

    return(
        <React.Fragment>
            <div className="page-content">
                <Container>
                    <Breadcrumbs title={props.t("Cart")}
                    breadcrumbItem={props.t("Cart")}/>

                    {state.success == "Deleted" ? (
                    <div>
                    <div
                    className="alert-dismissible fade show mb-0 alert alert-info alert-dismissible fade show"
                    role="alert"
                    >
                    <i className="mdi mdi-alert-circle-outline mr-2"></i> Item deleted from Cart
                    </div>
                    <div className="mb-4"></div>
                    </div>
                    ) : (
                        ""
                        )}
                    
                    <Row>
                        <Col md="6">
                          
                                {state.order && state.order.map((Food, key) => (
                                    <Col  key={"_col_" + key}>
                                      <Card className="mini-stats-wid">
                                          <CardBody>
                                              <Media>
                                                  <Media body>
                                                    <p className="text-muted font-weight-medium">
                                                        {Food.food}
                                                    </p>
                                                    <h4 className="mb-0">${Food.price}</h4>
                                                    <p className="mb-0">{Food.quantity} packs</p>
                                                  </Media>
                                                  <div className="mini-stat-icon avatar-sm rounded-circle align-self-center ">
                                                    <span>
                                                       
                                                        {Food.food === "Amala" && <img src={Amala} alt="" 
                                                        height="50"/>  }
                                                        {Food.food === "Jollof Rice" && <img src={Jollof} alt="" 
                                                        height="50"/>  }
                                                        {Food.food === "Yam and egg" && <img src={Yam} alt="" 
                                                        height="50"/>  }
                                                    </span>
                                                    
                                                  </div>
                                                  <button onClick={() => handleDelete(Food._id)} className="btn btn-warning waves-effect waves-light m-3">
                                                        Delete
                                                    </button>
                                              </Media>
                                          </CardBody>
                                          </Card>          
                                    </Col>
                                ))}
                                </Col>
                                
                                <Col md="4">
                                    <Card className="mini-stats-wid">
                                        <CardBody>
                                            <Media>
                                                <Media body>
                                                    <p className="text-muted font-weight-medium">
                                                        Total</p>
                                                    <h4 className="mb-0">${state.order && state.order.reduce((sum, c) => 
                                                          sum + c.price * c.quantity, 0
                                                    )}</h4>
                                                </Media>
                                                <div className="align-self-center">
                                                    <Link to="/payment"
                                                         type="submit"
                                                         className="btn btn-warning waves-effect waves-light"
                                                         onClick={()=> handleSubmit((state.order && state.order.reduce((sum, c) => 
                                                            sum + c.price * c.quantity , 0)))}          
                                                    >
                                      
                                                        Proceed to payments
                                                    </Link>
                                                </div>
                                            </Media>
                                        </CardBody>
                                    </Card>
                                </Col>
                                                        

                       
                    </Row>
                    {state.order.food &&
                        <div className="align-self-center my-2">
                        <Link to="/order"
                             type="submit"
                             className="btn btn-warning waves-effect waves-light"
                           
                        >
          
                            Add More to Cart
                        </Link>
                    </div> 
                    }
                             
                </Container>
            </div>
        </React.Fragment>
    )
}


export default (withNamespaces()(stateWrapper(Dashboard)));