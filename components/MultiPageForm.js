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

import QuestionRadio from './QuestionRadio'
import QuestionInput from './QuestionInput'
import QuestionSlider from './QuestionSlider'
import { stats } from '../specific-stats'

export default class MultiPageForm extends Component<> {
  constructor(props) {
    super(props)
    // Set Starting State
    this.state = {
      currentPage: 1,
      // Load testing data
      ...stats
    }

    this.pageUpdate = this.pageUpdate.bind(this)
  }

  componentDidMount() {
    // Load Required Data on Component Mounting
  }

  pageUpdate(event) {
    event.preventDefault()
    this.setState({
      currentPage: this.state.currentPage += 1
    })
  }

  render() {
    let formField
    if (this.state.currentPage === 1) {
      formField = <QuestionRadio pageUpdate = {this.pageUpdate}/>
    } else if (this.state.currentPage === 2) {
      formField = <QuestionInput pageUpdate = {this.pageUpdate}/>
    } else if (this.state.currentPage === 3) {
      formField = <QuestionSlider pageUpdate = {this.pageUpdate}/>
    }

    return (
      <View style={styles.container}>
        {formField}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  }
})
