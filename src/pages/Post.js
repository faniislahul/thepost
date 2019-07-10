import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';
import Header from '../components/Header';


class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            isFetching: true,
            post: null
        }
    }
    // ---------------------LIFE CYCLE---------------------//
    componentDidMount(){
        this.loadData();
    }


    // ---------------------FUNCTION---------------------//
    loadData = ()=>{
        
        let post = this.props.state.default.posts.filter((post)=> post.id.toString() === this.props.match.params.id)
        
        if(post.length === 0){
            this.props.history.replace('/404')
        }

        this.setState({
            post: post[0],
            isFetching: false,
        })
    }

    
    // ---------------------RENDER---------------------//
    render(){
        if(this.state.isFetching){
            return(
                <div><span>Loading..</span></div>
            )
        }
        let {post} = this.state;
        return(
            <div className="pages" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                <Header />
                <div className="post-detail" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                    <h1>{post.title}</h1>
                    <div className="extra">
                        <span>{post.author}</span><span>•</span><span>{Moment(new Date(post.reg_dt)).fromNow()}</span>
                    </div>
                    <div className="text" dangerouslySetInnerHTML={{__html: post.body}}></div>
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
  )(Post);
  