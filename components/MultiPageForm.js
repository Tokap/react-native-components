import React, { Component } from 'react';
import {
  Button,
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
      maxPage: 3,
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
    const { currentPage, maxPage } = this.state
    const newPage = currentPage === maxPage ? 1 : currentPage + 1

    this.setState({
      currentPage: newPage
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
        <Button
          onPress={this.pageUpdate}
          title="Next Question"
          color="#833584"
          accessibilityLabel="Next Question"
        />
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
