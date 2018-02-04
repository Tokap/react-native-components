import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class QuestionInput extends Component<> {
  constructor(props) {
    super(props)
    this.state = {
      amountTotal: 0,
      tipPercentage: 0.15,
      tipTotal: 0,
    };

    // Don't forget you need to bind the Functions here
    this.calculateTip = this.calculateTip.bind(this)
  }

  // Support Functions
  calculateTip(value) {
    const newValue = Number(value)

    this.setState({
      amountTotal: newValue,
      tipTotal: newValue * this.state.tipPercentage,
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>
          Amount Total:
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.calculateTip}>
        </TextInput>

        <Text>Total Tip:</Text>
        <Text style={styles.tipCalculation}>{this.amountTotal}</Text>

      </View>
    );
  }
}

// Reusable Style Objects for Style Sheet - Should be central
const boldText = { fontWeight: 'bold' }
const leftAlign = { textAlign: 'left' }
const rightAlign = { textAlign: 'right' }
const bottomPadding = { paddingBottom: 2, marginBottom: 10 }

// Convert Into Formatted Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    width: '90%',
    borderColor: '#60b7e2',
    borderWidth: 1,
  },
  tipCalculation: { ...boldText },
});
