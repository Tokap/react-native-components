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

export default class QuestionRadio extends Component<> {
  constructor(props) {
    super(props)
    // Set initial state
    this.state = {
      value: '',
    };

    // Don't forget you need to bind the Functions here
    this.parseRadioValue = this.parseRadioValue.bind(this)
    this.checkActiveStyle = this.checkActiveStyle.bind(this)
  }

  // Support Functions
  parseRadioValue() {
    const dictionary = {
      0: 'Self Loathing',
      1: 'Manic Motivation',
    }

    return dictionary[this.state.value]
  }

  checkActiveStyle(i) {
    // Handle special case for first button
    if (i === 0 && this.state.value === 0) {
      return styles.activeFirstButton
    }

    // Basic default styling for first button
    if (i === 0) {
      return styles.firstButton
    }

    // Otherwise, if active return active styling
    if (i === this.state.value) {
      return styles.radioActive
    }

    // Else, return white fill
    return styles.radioInactive
  }

  // Render the thing
  render() {
    const radioProps = [
      { label: 'Self Loathing', value: 0 },
      { label: 'Manic Motivation', value: 1 }
    ];

    return (
      <View style={styles.container}>

        <Text style={styles.questionHeader}>What is your Strongest Attribute?</Text>

        <RadioForm
          formHorizontal={false}
          animation={true}
          initial={-1}
        >
          {radioProps.map((obj, i) => {
            return (<RadioButton labelHorizontal={true} key={i} >
              <RadioButtonInput
                animation={true}
                obj={obj}
                index={i}
                isSelected={this.state.value3Index === i}
                onPress={(value) => {this.setState({value:value})}}
                borderWidth={1}
                buttonInnerColor={this.state.value === i ? 'green' : 'orange'}
                buttonOuterColor={this.state.value === i ? 'green' : 'orange'}
                buttonSize={10}
                buttonOuterSize={40}
                buttonStyle={this.checkActiveStyle(i)}
                buttonWrapStyle={{marginLeft: 10}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={(value) => {this.setState({value:value})}}
                labelStyle={styles.radioLabel}
              />
            </RadioButton>)
          })}

        </RadioForm>

        <Text>Top Attribute:</Text>

        <Text style={styles.boldText}>{this.parseRadioValue()}</Text>

      </View>
    );
  }
}

// StyleSheet - Should be extracted to External File
const boldText = { fontWeight: 'bold' }
const leftAlign = { textAlign: 'left' }
const rightAlign = { textAlign: 'right' }
const bottomPadding = { paddingBottom: 2, marginBottom: 10 }
const radioActive = { backgroundColor: 'green' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boldText: { ...boldText },
  questionHeader: { ...boldText, ...leftAlign, ...bottomPadding },
  radioButton: { ...rightAlign, marginRight: 30 },
  firstButton: { marginLeft: -35 },
  activeFirstButton: { marginLeft: -35, ...radioActive },

  radioLabel: { fontSize: 20, color: '#2ecc71' },
  radioActive: { backgroundColor: 'green' },
  radioInactive: { backgroundColor: 'white' },
});
