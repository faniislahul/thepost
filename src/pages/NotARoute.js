import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';


class NotARoute extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <div className="pages" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
              <Header />
               <div className="post-detail" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                <h1>Oops, it looks like you're getting lost.</h1>
                <button className="button" onClick={()=>this.props.history.replace('/')}>Back Home</button>
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
  )(NotARoute);
  