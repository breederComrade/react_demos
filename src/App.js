import React, { Component } from 'react';
import RouterConfig from './routes';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<RouterConfig />
			</Provider>
		);
	}
}

export default App;
