import React, { Component } from 'react';
import Header from '../../components/Header';
import Test from '../../components/test';
import Content from './components/Content';
class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<Content />
				<Test />
			</div>
		);
	}
}
export default Home;
