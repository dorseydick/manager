import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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

  componentWillMount() {

  }

  render() {
      return (
        <Provider store={createStore(reducers)}>
          <View>
            <LoginForm />
          </View>
        </Provider>
    );
  }
}

export default App;
