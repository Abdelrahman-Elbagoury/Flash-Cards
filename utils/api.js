// fake api copied from another project

import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

export async function fetchAllDecks() {

  let decksJson = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

  if (decksJson !== null) {
    return JSON.parse(decksJson);
  } else {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(Data));
    return Data;
  }
}

const Data = {
  CapitalCities: {
    id: 'CapitalCities',
    title: 'Capital Cities',
    created: '2019-07-22',
    questions: [
      {
        question: 'What is the capital of Canada?',
        answer: 'Ottawa'
      },
      {
        question: 'What is the capital of China?',
        answer: 'Beijing'
      },
      {
        question: 'What is the capital of Poland?',
        answer: 'Warsaw'
      },
      {
        question: 'What is the capital of Germany?',
        answer: 'Berlin'
      }
    ]
  },
  React: {
    id: 'React',
    title: 'React',
    created: '2019-07-21',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }
};

