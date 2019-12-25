import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavigationService from '../navigation/navigationService';

import DeckCard from '../components/DeckCard';

class Deck extends Component {

  state = {
    showNoQuestionsError: false
  };

  handleStartQuiz = () => {

    const { deck, questionsCount } = this.props;

    if (questionsCount === 0){
      this.setState({ showNoQuestionsError: true });
    } else {
      NavigationService.navigate('Quiz', {
        deckId: deck.id
      });
    }
  };

  handleAddCard = () => {

    const { deck } = this.props;

    this.setState({ showNoQuestionsError: false });

    NavigationService.navigate('AddCard', {
      deckId: deck.id
    });

  };

  render() {

    const { deck } = this.props;
    const { showNoQuestionsError } = this.state;

    return (
      <View style={[styles.viewContainer, { marginTop: 8}]}>

        <DeckCard deck={deck} allowNavigation={false} />

        <Text style={styles.title}>Deck</Text>

        <TouchableOpacity
          onPress={this.handleAddCard}
          style={styles.btnSecondary}>
          <Text style={styles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.handleStartQuiz}
          style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>Start Quiz</Text>
        </TouchableOpacity>

        {showNoQuestionsError && (
          <Text style={styles.inputErrorText}>Add one or more cards before taking the quiz</Text>
        )}


      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    deck: decks[deckId],
    questionsCount: decks[deckId].questions.length
  };
}

const styles = StyleSheet.create({
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
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 10
  },
  btnPrimaryText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  btnSecondaryText: {
    color: 'purple',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  inputErrorText: {
    marginTop: 4,
    marginBottom: 4,
    color: 'red',
    fontSize: 14
  }
});

export default connect(mapStateToProps)(Deck);
