import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/Reducers';
import AppRoute from './AppRoute';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
     
    }
  }

  // ---------------------RENDER---------------------//
  render(){
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
  
}
export default App;
