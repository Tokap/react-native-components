import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  boldText,
  leftAlign,
} from './styles/core-objects'

export default class QuestionInput extends Component<> {
  constructor(props) {
    super(props)
    this.state = {
      amountTotal: 0,
      tipPercentage: 0.15,
      rateCalc: 0,
    }

    // Don't forget you need to bind the Functions here
    this.calculateRate = this.calculateRate.bind(this)
  }

  // Support Functions
  calculateRate(value) {
    const newValue = Number(value)

    this.setState({
      amountTotal: newValue,
      rateCalc: newValue * this.state.tipPercentage,
    })
  }

  render() {
    // TODO: Remove Form Data example after process flow complete
    // let formdata = new FormData();
    // formdata.append("product[name]", 'test')

    return (
      <View style={styles.container}>

        <Text>
          Amount Total:
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.calculateRate}>
        </TextInput>

        <Text>Total Rate:</Text>
        <Text style={styles.tipCalculation}>{this.state.rateCalc}</Text>

      </View>
    );
  }
}

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
    ...leftAlign,
    color: '#333333',
    margin: 5,
    height: 50,
    width: '90%',
    borderColor: '#60b7e2',
    borderWidth: 1,
  },
  tipCalculation: { ...boldText },
});
