import React, { Component } from 'react';
import axios from 'axios';
/* 
  发送dispatch 

*/
class Mock extends Component {
	componentDidMount() {
		//  发送请求
		axios.post('api/fuck').then((res) => {
			console.log(res);
		});
	}
	render() {
		return <div className="Mack">mack</div>;
	}
}

export default Mock;
