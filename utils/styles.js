import { StyleSheet } from 'react-native';

const white = '#FFF';
const lightGrey = '#C6C6C6';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center'
	},
	deckTitle: {
		marginTop: 20,
		fontSize: 24,
	},
	questionsCount: {
		color: '#aaa',
		marginTop: 10,
		marginBottom: 20,
		textAlign: 'center'
	},
	deckHolder: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: lightGrey,
		backgroundColor: white,
		textAlign: 'center',
		border: '1px solid #ccc',
		borderWidth: 0.5,
		padding: '10px 0',
	},
});

export default styles;