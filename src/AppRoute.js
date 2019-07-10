import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import * as Actions from './actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotARoute from './pages/NotARoute';
import GeneratePassword from './pages/GeneratePassword';
import CreatePost from './pages/CreatePost';


class AppRoute extends Component{
  constructor(props){
    super(props);

    this.state = {
     
    }
  }
  // ---------------------LIFE CYCLE---------------------//
  componentWillMount(){
    if(localStorage.getItem('posts') === null){
      this.loadData();
    }else{
      this.props.actions.setPostList(JSON.parse(localStorage.getItem('posts')));
      ;
    }
  }

  // ---------------------FUNCTION---------------------//
  loadData = ()=>{
    try{
        var json = require('../src/assets/data/data.json');
        localStorage.setItem('posts', JSON.stringify(json));
        this.props.actions.setPostList(json);
        json = null;
    }catch(e){
        console.log(e)
    }
  }

  // ---------------------RENDER---------------------//
  render(){
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/post/:id" component={Post} />
                <Route exact path="/posts/new" component={CreatePost} />
                <Route exact path="/generate" component={GeneratePassword} />
                <Route component={NotARoute} />
            </Switch>
            </div>
        </Router>
    );
  }
  
}
export default connect(state => ({
    state: state
  }),
    (dispatch) => ({
      actions: bindActionCreators(Actions, dispatch)
    })
  )(AppRoute);
  
