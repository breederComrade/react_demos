import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Saga from './pages/Saga';
import Mock from './pages/Mock';
// import Detail from './pages/Detail';

export default class RouteConfig extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/saga" exact component={Saga} />
					<Route path="/mock" exact component={Mock} />
				</Switch>
			</HashRouter>
		);
	}
}
