import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  constructor() {
    super();
    const config = {
      apiKey: 'AIzaSyB1LChyxJUnVjKlLeQKfKeAgpUxVY-xni4',
      authDomain: 'manager-b2527.firebaseapp.com',
      databaseURL: 'https://manager-b2527.firebaseio.com',
      projectId: 'manager-b2527',
      storageBucket: 'manager-b2527.appspot.com',
      messagingSenderId: '437637153260'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
