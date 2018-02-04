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

import QuestionRadio from './components/QuestionRadio'
import QuestionInput from './components/QuestionInput'

export default class App extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        <QuestionRadio />
        <QuestionInput />
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
