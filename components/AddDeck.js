import React, {Component} from 'react';
import {saveNewDeck} from '../actions/decksActions';
import {connect} from 'react-redux';
import styles from '../utils/styles';
import {ScrollView, TouchableOpacity, Text, View, TextInput} from 'react-native';

class AddDeck extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: '',
		};
	}
	
	static navigationOptions = {
		title: 'Add Deck'
	};
	
	onSubmit = () => {
		const decks = this.props.decksReducer.get('decks');
		const {title} = this.state;
		if (title in decks) {
			return;
		}
		this.props.saveNewDeck(title).then(() => {
			this.setState({title: ''});
			const {goBack} = this.props.navigation;
			goBack();
		});
	};
	
	render() {
		const {title} = this.state;
		return (
			<ScrollView style={styles.container}>
				<View>
					<Text style={styles.content}>What is the title of new Deck ?</Text>
				</View>
				<View>
					<TextInput
						style={styles.inputField}
						value={title}
						placeholder="enter deck title"
						clearButtonMode="while-editing"
						onChangeText={text => this.setState({title: text})}
					/>
				</View>
				<View>
					<TouchableOpacity
						onPress={this.onSubmit}
						style={styles.inverseSubmitBtn}>
						<Text style={styles.inverseSubmitBtn}>Submit</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
	saveNewDeck: title => dispatch(saveNewDeck(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
