import React, { Component } from 'react';
import { addCard } from '../actions';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { robotoMedium } from '../utils/fonts';

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
    showQuestionRequiredError: false,
    showAnswerRequiredError: false
  };

  resetState = () => {
    this.setState({
      question: '',
      answer: '',
      showQuestionRequiredError: false,
      showAnswerRequiredError: false
    });
  };

  onSubmit = () => {

    const { addCard, goBack } = this.props;
    const { question, answer } = this.state;
    const questionNoWhitespace = question.replace(/\s/g, '');
    const answerNoWhitespace = answer.replace(/\s/g, '');

    let validationFailed = false;

    if (!questionNoWhitespace.length) {
      this.setState({ showQuestionRequiredError: true });
      validationFailed = true;
    } else {
      this.setState({ showQuestionRequiredError: false });
    }

    if (!answerNoWhitespace.length) {
      this.setState({ showAnswerRequiredError: true });
      validationFailed = true;
    } else {
      this.setState({ showAnswerRequiredError: false });
    }

    if (validationFailed) {
      return;
    }

    addCard(question, answer);
    goBack();

    this.resetState();
  };

  onQuestionChange = (value) => {
    this.setState({ question: value });
  };

  onAnswerChange = (value) => {
    this.setState({ answer: value });
  };

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={styles.viewContainer}>

          <Text style={styles.title}>Add Card</Text>
          <Text style={styles.tagline}>Add a new card to the deck of flashcards</Text>


          <Text style={styles.label}>Your question</Text>
          <TextInput value={this.state.question} onChangeText={this.onQuestionChange} style={styles.textInput} />

          {this.state.showQuestionRequiredError && (
            <Text style={styles.inputErrorText}>Please enter your question</Text>
          )}

          <Text style={styles.label}>The answer</Text>
          <TextInput value={this.state.answer} onChangeText={this.onAnswerChange} style={styles.textInput} />

          {this.state.showAnswerRequiredError && (
            <Text style={styles.inputErrorText}>Please enter the answer</Text>
          )}

          <TouchableOpacity onPress={this.onSubmit} style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Add card</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

function mapDispatchToProps(dispatch, { navigation }) {

  return {
    addCard: (question, answer) => {
      const { deckId } = navigation.state.params;
      const questionDetails = {
        deckId,
        question,
        answer
      };

      dispatch(addCard(questionDetails));
    },
    goBack: () => navigation.goBack()
  };

}

export default connect(null, mapDispatchToProps)(AddCard);

const styles = StyleSheet.create({
  tagline: {
    fontSize: 16
  },
  label:{
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: robotoMedium
  },
  tagline: {
    color: 'black',
    fontSize: 16
  },
  label:{
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: robotoMedium
  },
  viewContainer: {
    marginLeft: 16,
    marginRight: 16
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    color: 'black'
  },
  btnPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'purple'
  },
  btnPrimaryText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  inputErrorText: {
    marginTop: 4,
    marginBottom: 4,
    color: 'red',
    fontSize: 14
  },
  textInput: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16
  }
});

