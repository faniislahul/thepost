import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
class Card extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    
    // ---------------------RENDER---------------------//
    render(){
        return(
            <div className="card" data-theme={this.props.state.default.darkMode ? "dark" : "light"} onClick={()=> this.props.action(this.props.data.id)}>
                <div className="card-header">
                    <h3>{this.props.data.title}</h3>
                    <span>{this.props.data.author}</span>
                </div>
                <div className="card-content">
                    <p>{this.props.data.body.length < 200 ? this.props.data.body : `${this.props.data.body.slice(0,200)}...`}</p>
                </div>
                <div className="card-footer">
                    <p className="likes"><FaRegHeart className="icon"/><FaHeart className="icon hover"/> {this.props.data.likes}</p>
                    <p>{Moment(new Date(this.props.data.reg_dt)).fromNow()}</p>
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
  )(Card);
  