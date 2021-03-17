import React, {useEffect} from 'react';

import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import MetisMenu from 'metismenujs'
import { withNamespaces } from "react-i18next";

const SidebarContent = (props) => {

    /*useEffect(() => {
        var pathName = props.location.pathname

    const initMenu = () => {
        new MetisMenu("#side-menu");
        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu")
        var items = ul.getElementsByTagName("a")

        for(var i = 0; i < items.length; ++i){
            if(pathName === items[1].pathname){
                matchingMenuItem = items[i];
                break;
            }
            if(matchingMenuItem){
                activeParentDropdown(matchingMenuItem)
            }
        };
    }; initMenu();
    }, []);

    function activeParentDropdown(item){
        item.classList.add("active");
        
    }*/
    
    return(
    <React.Fragment>
        <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>
                
                <li>
                    <Link to="/order" className="waves-effect">
                    <i className="bx bx-food-menu"></i>
                        <span>{props.t("Order")}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="waves-effect">
                        <i className="bx bxs-cart"></i>
                        <span>{props.t("Cart")}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="waves-effect">
                    <i className="bx bxs-user-detail"></i>
                        <span>{props.t("Profile")}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/payment" className="waves-effect">
                    <i className="bx bx-money"></i>
                        <span>{props.t("Payment")}</span>
                    </Link>
                </li>
            </ul>
        </div>
    </React.Fragment>
    )
}

export default withRouter(withNamespaces()(SidebarContent));