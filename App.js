import React from 'react';
import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './store';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import DeckQuestions from './components/DeckQuestions';

const TabNavigator = createMaterialTopTabNavigator(
	{
		Decks: {screen: DeckList},
		AddDeck: {screen: AddDeck}
	},
	{
		initialRouteName: 'Decks',
	}
);

const AppNavigator = createStackNavigator(
	{
		DeckList: {screen: TabNavigator},
		Deck: {screen: Deck},
		AddCard: {screen: AddCard},
		DeckQuestions: {screen: DeckQuestions}
	},
	{
		initialRouteName: 'DeckList',
	}
);

const AppContainer = createAppContainer(AppNavigator);

const App = props => (
	<Provider store={store} {...props}>
		<AppContainer/>
	</Provider>
);
export default App;