import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { robotoRegular } from '../utils/fonts';
import Decks from '../views/Decks';
import AddDeck from '../views/AddDeck';




const TabNavigator = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="newspaper" size={30} color={tintColor} />
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="add" size={30} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#00d25c' : 'white',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#FAFAFA' : 'purple',
        fontFamily: robotoRegular,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        fontSize: 13
      }
    }
  });

const TabNavigation = createAppContainer(TabNavigator);

export default TabNavigation;
