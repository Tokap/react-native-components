import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Slider,
  View
} from 'react-native';

import {
  boldText,
  leftAlign,
} from './styles/core-objects'

export default class QuestionSlider extends Component<> {
  constructor(props) {
    super(props)
    // Set Starting State
    this.state = {
      value: 50
    };
    // Don't forget you need to bind the Functions here
    this.change = this.change.bind(this)
  }

  change(value) {
    this.setState({
      value: parseFloat(value),
    })
  }

  render() {
    const { value } = this.state;

    return (
      <View style={styles.container}>

        <Text style={styles.questionText}>How Much Do You Enjoy The Outdoors?</Text>
        <Text style={styles.scoreText}>{String(value)}</Text>
        <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change}
          value={value}
          style={styles.slider}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  questionText: {
    fontSize: 24,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 50,
    textAlign: 'center',
  },
  slider: {
    width: '90%'
  }
})
