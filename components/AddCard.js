import React, {Component} from 'react';
import {addCardToDeck} from '../actions/decksActions';
import {connect} from 'react-redux';
import styles from '../utils/styles';
import {
	TextInput,
	TouchableOpacity,
	Text,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	View
} from 'react-native';

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
		const deck = this.props.decksReducer.get('deck') || {};
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
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View style={styles.container}>
						<TextInput
							value={card.question}
							style={styles.inputField}
							placeholder="Enter Question"
							clearButtonMode="while-editing"
							onChangeText={text => this.onChange(text, 'question')}
						/>
						<TextInput
							value={card.answer}
							style={styles.inputField}
							placeholder="Enter Answer"
							clearButtonMode="while-editing"
							onChangeText={text => this.onChange(text, 'answer')}
						/>
						
						<TouchableOpacity
							onPress={this.onSubmit}
							style={styles.inverseSubmitBtn}>
							<Text style={styles.inverseSubmitBtn}>Submit</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
	addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
