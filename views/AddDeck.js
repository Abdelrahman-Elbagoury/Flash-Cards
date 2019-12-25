import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { robotoMedium } from '../utils/fonts';
import CustomStatusBar from '../components/CustomStatusBar';
import { addDeck } from '../actions';

class AddDeck extends Component {

  state = {
    title: '',
    showRequiredInputError: false,
    showUniqueNameError: false
  };

  resetState = () => {
    this.setState({
      title: '',
      showRequiredInputError: false,
      showUniqueNameError: false
    });
  };

  onSubmit = () => {

    const { decks, addDeck, goToDecks } = this.props;
    const { title } = this.state;

    const titleNoWhitespace = title.replace(/\s/g, '');

    if (!titleNoWhitespace.length) {
      this.setState({ showRequiredInputError: true, showUniqueNameError: false });
      return;
    }
    const titleAlreadyUsed = Object.keys(decks).some(key => {
      const deck = decks[key];
      return deck.title === title;
    });

    if (titleAlreadyUsed) {
      this.setState({ showRequiredInputError: false, showUniqueNameError: true });
      return;
    }

    addDeck(title);
    goToDecks();

    this.resetState();
  };

  onTitleChange = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <View style={{flex: 1}}>

        <CustomStatusBar />

        <View style={styles.viewContainer}>
          <Text style={styles.title}>Add Deck</Text>
          <Text style={styles.tagline}>Create a new deck </Text>

          <Text style={styles.label}>Title</Text>
          <TextInput value={this.state.title} onChangeText={this.onTitleChange} style={styles.textInput} />


          {this.state.showRequiredInputError && (
            <Text style={styles.inputErrorText}>Please enter a title</Text>
          )}

          {this.state.showUniqueNameError && (
            <Text style={styles.inputErrorText}>This title has already been used</Text>
          )}

          <TouchableOpacity onPress={this.onSubmit} style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Create Deck</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  };
}

function mapDispatchToProps(dispatch, { navigation }) {

  return {
    addDeck: (title) => {

      const deckId = title.replace(/\s/g, '');
      const timestamp = Math.round(new Date() / 1000);
      const dateString = new Date().toISOString().split('T')[0];

      dispatch(addDeck({
        id: deckId,
        title: title,
        timestamp: timestamp,
        created: dateString,
        questions: []
      }));
    },
    goToDecks: () => navigation.navigate('Decks')
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

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
