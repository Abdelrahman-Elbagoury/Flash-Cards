import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { robotoMedium } from '../utils/fonts';
import NavigationService from '../navigation/navigationService';

function QuizResults(props) {

  const { totalQuestions, questionsAnsweredCorrectly, onStartQuizAgain } = props;
  const percentage = Math.round((100 / totalQuestions) * questionsAnsweredCorrectly);

  return (
    <View>
      <Text style={styles.title}>Quiz Complete</Text>
      <Text style={styles.largeText}>
        You got { questionsAnsweredCorrectly } out of { totalQuestions } correct ({ percentage }%)
      </Text>

      <TouchableOpacity
        onPress={onStartQuizAgain}
        style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>Start Quiz Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={NavigationService.goBack}
        style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>Return To Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

QuizResults.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  questionsAnsweredCorrectly: PropTypes.number.isRequired,
  onStartQuizAgain: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  largeText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: robotoMedium
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

export default QuizResults;
