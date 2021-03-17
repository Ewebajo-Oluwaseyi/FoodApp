import React, {useState} from 'react';

import {Link} from 'react-router-dom'
import { withNamespaces } from 'react-i18next';
import {connect} from 'react-redux'

import logoDark from '../../assests/images/images.png'
import Food from '../../assests/images/food.jpg'

import LanguageDopdown from '../TopbarDropdown/LanguageDropdown'

import NotificationDropdown from '../TopbarDropdown/NotificationDropdown';

import ProfileMenu from '../TopbarDropdown/ProfileMenu'

import {showRightSidebarAction,toggleLeftmenu,changeSidebarType} from '../../store/actions'



const Header = (props) => {

    const [search, setsearch] = useState(false);
    const isMobile =  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function tToggle(){
        props.toggleLeftmenu(!props.leftMenu);
        if(props.leftSideBarType === 'default'){
            props.changeSidebarType("condensed", isMobile)
        } else if(props.leftSideBarType === "condensed"){
            props.changeSidebarType("default", isMobile)
        }
    }
    return (
        <React.Fragment>
            <header>
                <div id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                 
                                <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                <img src={Food} alt="" height="40" />
                                </span>
                                <span className="logo-lg">
                                <img src={Food} alt="" height="60" />
                                </span>
                                </Link>            
                            </div>   
                            <button type="button" onClick={() => {tToggle()}} className=" btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                                <i className="fa fa-fw fa-bars"></i>
                            </button>
                            
                        </div>
                        <div className="d-flex">
                            <div className="dropdown d-inline-block ml-2">
                               
                                <div className={search ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"}
                                    aria-labelledby="page-header-search-dropdown">
                                     <form className="p-3">
                                         <div className="form-group m-0">
                                             <div className="input-group">
                                                 <input type="text" className="form-control" placeholder="Search.." aria-label="Recipient's username"></input>
                                                 <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                                 </div>
                                             </div>
                                         </div>
                                         </form>               
                                </div>
                            </div>
                            <LanguageDopdown/>

                           
                            <NotificationDropdown/>
                            <ProfileMenu/>
                            
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const { layoutType,showRightSidebar,leftMenu,leftSideBarType } = state.Layout;
  return { layoutType,showRightSidebar,leftMenu,leftSideBarType };
}

export default connect(mapStateToProps, {showRightSidebarAction,toggleLeftmenu,changeSidebarType})(withNamespaces()(Header))
