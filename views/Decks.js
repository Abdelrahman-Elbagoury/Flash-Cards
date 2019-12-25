import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView,StyleSheet } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import DeckCard from '../components/DeckCard';


class Decks extends Component {

  render() {
    const { decksArray } = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar />
        <ScrollView style={styles.viewContainer}>
          {decksArray.length === 1
            ? <Text style={styles.title}>1 Deck</Text>
            : <Text style={styles.title}>{ decksArray.length } Decks</Text>}
          {decksArray.map(deck => (
              <DeckCard deck={deck} allowNavigation={true} key={deck.id} />
          ))}

        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(decks) {

  const decksArray = Object.keys(decks)
    .map(key => decks[key])
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    decksArray
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
  }
});

export default connect(mapStateToProps)(Decks);
