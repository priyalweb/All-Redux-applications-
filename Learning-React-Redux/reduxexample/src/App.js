import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware} from 'redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

// const store = createStore(() => [], {}, applyMiddleware());

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Welcome to React
      </header>
      <Postform />
      <hr />
      <Posts />
      <hr />
      
    </div>
    </Provider>
  );
}

export default App;
