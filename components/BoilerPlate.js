import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  boldText,
} from './styles/core-objects'


export default class NewComponent extends Component<> {
  constructor(props) {
    super(props)
    // Set Starting State
    this.state = {
      someThing: 'defaultValue'
    };
    // Don't forget you need to bind the Functions here
    this.calculateSomething = this.calculateSomething.bind(this)
  }

  calculateSomething (value) {
    this.setState({
      someThing: value,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          The Thing:
        </Text>

        <Text>
          {this.state.someThing}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...boldText,
    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  }
})
