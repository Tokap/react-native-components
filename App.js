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
import MultiPageForm from './components/MultiPageForm'

export default class App extends Component<> {
  constructor(props) {
    super(props)
    this.state = { trackedState: {}, formData: {} };
  }

  componentDidMount() {
    // Load Required Data on Component Mounting
  }

  render() {
    return <MultiPageForm />
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
