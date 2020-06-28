import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import React, { Component } from 'react';
import './App.css';
import Password from './password';

const store = createStore(reducers)


class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <div className="App">
          <Password />
        </div>
      </Provider>
    );
  }
}

export default App;

