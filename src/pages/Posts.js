import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';


class Posts extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: this.chronologicalOrder(this.props.state.default.posts),
        }
    }
    
    // ---------------------FUNCTION---------------------//
    onPostCLick = (id)=>{
        this.props.history.push(`/post/${id}`);
    }

    chronologicalOrder(arr){
        return arr.sort((a, b)=> new Date(b.reg_dt) - new Date(a.reg_dt))
    }


    // ---------------------RENDER---------------------//
    render(){
        return(
            <div className="pages" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                <Header />
                <div className="post-list">
                    {this.state.posts.map((item, index)=>{
                        return(
                            <Card key={index} data={item} action={this.onPostCLick} />
                        )

                    })}
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
  )(Posts);
  