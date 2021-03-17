import React from 'react';

import {connect} from 'react-redux';
import SimpleBar from 'simplebar-react'

import { withNamespaces } from 'react-i18next';
import {withRouter} from 'react-router-dom';

import SidebarContent from './SidebarContent'

const Sidebar = (props)=> {
    return (
        <React.Fragment>
            <div className="vertical-menu">
                <data data-simplebar className="h-100">
                    {props.type !== "condensed" ? (
                        <SimpleBar style={{maxHeight: '100%'}}>
                            <SidebarContent/>
                        </SimpleBar>
                    ) : <SidebarContent/>}
                </data>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{
      layout: state.Layout
    }
  }

export default connect(mapStateToProps,{})(withRouter(withNamespaces()(Sidebar)))
