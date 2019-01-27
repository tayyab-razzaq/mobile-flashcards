import { StyleSheet } from 'react-native';

const white = '#FFF';
const black = '#000';
const lightGrey = '#C6C6C6';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center'
	},
	deckTitle: {
		paddingTop: 20,
		fontSize: 24,
	},
	questionsCount: {
		color: lightGrey,
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
		borderWidth: 0.5,
		padding: 10,
	},
	regularBtn: {
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: black,
		padding: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 10
	},
	addCardBtn: {
		backgroundColor: white,
		color: black
	},
	startQuizBtn: {
		backgroundColor: black,
		color: white
	},
	inputField: {
		padding: 10,
		fontSize: 20,
		height: 40,
		borderWidth: 1,
		marginRight: 30,
		marginLeft: 30,
		borderRadius: 10,
	},
	submitBtn: {
		flex: 1,
		alignItems: 'center',
		borderColor: black,
		borderRadius: 5,
		borderWidth: 1,
		padding: 20,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40
	},
	inverseSubmitBtn: {
		alignItems: 'center',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40,
		backgroundColor: black,
		color: white
	},
});

export default styles;