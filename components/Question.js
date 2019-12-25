import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { robotoMedium, robotoRegular } from '../utils/fonts';

class Question extends Component {
  state = {
    showAnswerArea: false
  };
  handleAnswerPress = () => {
    this.setState({ showAnswerArea: true });
  };
  handleQuestion = (answeredCorrectly) => {
    const { onQuestionAnswered } = this.props;
    this.setState({ showAnswerArea: false });
    onQuestionAnswered(answeredCorrectly);
  };

  render() {
    const { questionObject } = this.props;

    return (
      <View>
        <Text style={styles.title}>Question</Text>
        <Text style={styles.largeText}>{ questionObject.question }</Text>
        {!this.state.showAnswerArea && (
          <View>
            <TouchableOpacity
              onPress={this.handleAnswerPress}
              style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.showAnswerArea && (
          <View>
            <Text style={styles.heading}>Answer</Text>
            <Text style={styles.largeText}>{ questionObject.answer }</Text>
            <View style={styles.buttonsContainer}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestion(true)}
                  style={styles.btnSuccess}>
                  <Text style={styles.btnSuccessText}>Correct</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestion(false)}
                  style={styles.btnError}>
                  <Text style={styles.btnErrorText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

Question.propTypes = {
  questionObject: PropTypes.object.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  largeText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: robotoMedium
  },
  smallText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: robotoRegular
  },
  heading: {
    marginTop: 8,
    fontSize: 32,
    fontFamily: robotoMedium
  },
  btnSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  btnError: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'orange'
  },
  btnSuccessText: {
    color: 'white',
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  btnErrorText: {
    color: 'white',
    fontSize: 14,
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    color: 'black'
  },
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 10
  },
  btnSecondaryText: {
    color: 'purple',
    fontSize: 14,
    textTransform: 'uppercase'
  }
});

export default Question;

