import React, {Component} from 'react';
import {addCardToDeck} from '../actions/decksActions';
import {connect} from 'react-redux';
import styles from '../utils/styles';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

class AddCard extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			card: {
				question: '',
				answer: '',
			},
		};
	}
	
	static navigationOptions = {
		title: 'Add Card',
	};
	
	onChange = (text, property) => {
		const {card} = this.state;
		card[property] = text;
		this.setState({card});
	};
	
	onSubmit = () => {
		const deck = this.props.decksReducer.get('deck');
		const {title, questions} = deck;
		const {card} = this.state;
		const sameQuestions = questions.filter(
			questionCard => questionCard.question === card.question
		);
		if (sameQuestions.length > 0) {
			return;
		}
		this.props.addCardToDeck(title, card).then(() => {
			const {goBack} = this.props.navigation;
			goBack();
		});
	};
	
	render() {
		const {card} = this.state;
		return (
			<View style={styles.container}>
				<View style={{flex: 1, backgroundColor: '#ccc', justifyContent: 'space-around'}}>
					<TextInput
						value={card.question}
						style={styles.inputField}
						placeholder="enter question"
						clearButtonMode="while-editing"
						onChangeText={text => this.onChange(text, 'question')}
					/>
					<TextInput
						value={card.answer}
						style={styles.inputField}
						placeholder="enter answer"
						clearButtonMode="while-editing"
						onChangeText={text => this.onChange(text, 'answer')}
					/>
				</View>
				<View style={{flex: 2}}>
					<TouchableOpacity
						onPress={this.onSubmit}
						style={styles.inverseSubmitBtn}>
						<Text style={styles.inverseSubmitBtn}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
	addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
