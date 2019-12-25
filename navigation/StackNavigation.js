import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabNavigation from './TabNavigation';
import Decks from '../views/Decks';
import Deck from '../views/Deck';
import AddDeck from '../views/AddDeck';
import AddCard from '../views/AddCard';
import Quiz from '../views/Quiz';

const StackNavigator = createStackNavigator({
  Primary: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Decks: {
    screen: Decks
  },
  Deck: {
    screen: Deck,
    navigationOptions : {
      title: 'Deck',
      headerStyle: {
        backgroundColor: 'purple'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard,
    navigationOptions : {
      title: 'Add Card',
      headerStyle: {
        backgroundColor: 'purple'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions : {
      title: 'Quiz',
      headerStyle: {
        backgroundColor: 'purple'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
});

const StackNavigation = createAppContainer(StackNavigator);

export default StackNavigation;


