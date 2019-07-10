import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import {Link} from 'react-router-dom';

import {FaMoon} from 'react-icons/fa';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    // ---------------------FUNCTION---------------------//
    setDarkMode = ()=>{
        this.props.actions.setDarkMode(!this.props.state.default.darkMode)
    }
    // ---------------------RENDER---------------------//
    render(){
        return(
            <div className="header" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                <Link to="/"><h1>The Posts</h1></Link>
                <div className="link">
                    <Link to="/posts/new">Add Post</Link>
                    <Link to="/generate">Generate Password</Link>
                    
                    <span><FaMoon /></span>
                    <Switch 
                        height={20}
                        width={36}
                        onChange={this.setDarkMode} 
                        checked={this.props.state.default.darkMode} 
                        checkedIcon={false}
                        uncheckedIcon={false}
                        className="react-switch" />
                </div>
                
            </div>
        )
    }
}


export default connect(state => ({
    state: state
  }),
    (dispatch) => ({
      actions: bindActionCreators(Actions, dispatch)
    })
  )(Header);
  