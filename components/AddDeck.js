import React, { Component } from 'react';
import { saveNewDeck, getDeck } from '../actions/decksActions';
import { connect } from 'react-redux';
import styles from '../utils/styles';
import {
	TouchableOpacity,
	Text,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from 'react-native';

class AddDeck extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: '',
			error: null
		};
	}
	
	static navigationOptions = {
		title: 'Add Deck',
	};
	
	onSubmit = () => {
		const decks = this.props.decksReducer.get('decks') || {};
		const { title } = this.state;
		if (title in decks) {
			this.setState({error: 'Deck already exists'});
			return;
		}
		if (title.trim() === '') {
			this.setState({error: 'cannot add deck with empty name'});
			return;
		}
		this.props.saveNewDeck(title).then(() => {
			this.setState({ title: '', error: null });
			this.props.getDeck(title).then(() => {
				const { navigate } = this.props.navigation;
				navigate('Deck');
			});
		});
	};
	
	render() {
		const { title, error } = this.state;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View>
						<View>
							<Text style={styles.deckTitleQuestion}>
								What is the title of new Deck ?
							</Text>
						</View>
						<View>
							<TextInput
								style={styles.inputField}
								value={title}
								placeholder="enter deck title"
								clearButtonMode="while-editing"
								onChangeText={text => this.setState({ title: text })}
							/>
							{
								error ?
									<Text style={{...styles.content, ...styles.redColor}}>{error}</Text>
									: null
							}
						</View>
						<View>
							<TouchableOpacity
								onPress={this.onSubmit}
								style={styles.inverseSubmitBtn}>
								<Text style={styles.inverseSubmitBtn}>Submit</Text>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const mapStateToProps = ({ decksReducer }) => ({ decksReducer });

const mapDispatchToProps = dispatch => ({
	saveNewDeck: title => dispatch(saveNewDeck(title)),
	getDeck: title => dispatch(getDeck(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
