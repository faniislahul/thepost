import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Post extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    // ---------------------LIFE CYCLE---------------------//
    // ---------------------FUNCTION---------------------//
    // ---------------------RENDER---------------------//
    render(){
        return(
            <div></div>
        )
    }
}


export default connect(state => ({
    state: state
  }),
    (dispatch) => ({
      actions: bindActionCreators(Actions, dispatch)
    })
  )(Post);
  