import React, { Component } from 'react';
import { Provider } from 'react-firebase';
import { initializeApp } from 'firebase'
import './App.css';

import Main from './component/Main';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC0MXdClv5-FMBcW6PV2ffo1Bnsfa5ecgE",
    authDomain: "react-junk.firebaseapp.com",
    databaseURL: "https://react-junk.firebaseio.com",
    projectId: "react-junk",
    storageBucket: "react-junk.appspot.com",
    messagingSenderId: "71515323054"
})

class App extends Component {
  render() {
    return (
      <div className="App">
        [App Component]
        <Provider firebaseApp={firebaseApp}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
