import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {setupDeviceNotifications} from './utils/notifications';
import AppContainer from './routes';

class App extends React.Component {
	
	componentDidMount() {
		setupDeviceNotifications();
	}
	
	render() {
		return (
			<Provider store={store} {...this.props}>
				<AppContainer/>
			</Provider>
		);
	}
}

export default App;