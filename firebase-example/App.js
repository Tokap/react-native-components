// --- Package Imports
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import * as firebase from 'firebase';
import {
  FIREBASE_API,
  FIREBASE_AUTH,
  FIREBASE_URL,
  FIREBASE_BUCKET,
} from './environment-variables.js'


const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: FIREBASE_AUTH,
  databaseURL: FIREBASE_URL,
  storageBucket: FIREBASE_BUCKET,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// --- Component Imports
import QuestionRadio from './components/QuestionRadio'
import QuestionInput from './components/QuestionInput'
import QuestionSlider from './components/QuestionSlider'

export default class App extends Component<> {
  // TODO: Remove from core component after testing
  constructor(props) {
    super(props)
    // Set Starting State
    this.state = { itemsRef: {} };

    this.listenForItems = this.listenForItems.bind(this)
  }

  componentDidMount() {
    const myApp = firebaseApp.database().ref('items')
    // Set Firebase App to State
    this.setState({ itemsRef: myApp })
    // Set Listener
    firebaseApp.database().ref('/tests/two').once('value')
    .then((snapshot) => console.log('Once Snapshot: ', snapshot))
    .catch(err => console.error('Error: ', err))

    // fetch('http://www.google.com')
    // .then((snapshot) => console.log('Fetch Google: ', snapshot))

    this.listenForItems(myApp);
  }

  // Testing Listener
  // This only works with no Auth - we need to fix that
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      snap.forEach((child) => {
        console.log('A new child: ', child)
        console.log('A new child Val: ', child.val())
      });

    });
  }

  render() {
    // Ref logs as just the DB URL
    // const firebaseRef = firebaseApp.database().ref();

    return (
      <View style={styles.container}>
        <QuestionRadio />
        <QuestionInput />
        <QuestionSlider />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
