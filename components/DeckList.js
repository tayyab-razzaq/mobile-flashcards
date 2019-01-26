import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllDecks, getDeck} from '../actions/decksActions';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../utils/styles';

class DeckList extends Component {
	
	componentDidMount() {
		this.props.getAllDecks();
	}
	
	onDeckClick = (e, id) => {
		e.preventDefault();
		this.props.getDeck(id).then(() => {
			const { navigate } = this.props.navigation;
			navigate('Deck');
		});
	};
	
	render() {
		const decks = this.props.decksReducer.get('decks');
		
		const decksList = Object.keys(decks).map(deckKey => {
			const deckObj = decks[deckKey];
			const {questions} = deckObj;
			const questionsCount = questions.length;
			
			return (
				<React.Fragment key={deckKey}>
					<TouchableOpacity
						style={styles.deckHolder}
						onPress={e => this.onDeckClick(e, deckKey)}>
						<View>
							<Text style={styles.deckTitle}>{deckObj.title}</Text>
							<Text style={styles.questionsCount}>{`${questionsCount} Cards`}</Text>
						</View>
					</TouchableOpacity>
				</React.Fragment>
			);
		});
		
		return <View style={styles.container}>{decksList}</View>;
	}
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
	getAllDecks: () => dispatch(getAllDecks()),
	getDeck: id => dispatch(getDeck(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
