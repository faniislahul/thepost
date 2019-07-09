import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/Reducers';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotARoute from './pages/NotARoute';
import GeneratePassword from './pages/GeneratePassword';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/generate" component={GeneratePassword} />
              <Route component={NotARoute} />
            </Switch>
          </div>
            
        </Router>
      </Provider>
    );
  }
  
}
export default App;
