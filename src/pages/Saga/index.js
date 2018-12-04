import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

/* 
  发送dispatch 

*/
class Saga extends Component {
	componentDidMount() {
		//  发送请求
		axios.post('api/fuck').then((res) => {
			console.log(res);
		});
	}
	render() {
		console.log(this.props);
		const { val } = this.props;
		return (
			<div className="Saga">
				<button
					onClick={this.props.onBtnClick.bind(this, {
						type: 'TEST_SAGA',
						value: 'fff'
					})}
				>
					发送saga
				</button>
				<div>{val}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('state', state);

	return {
		val: state.f.val
	};
};
const mapActionToProps = (dispatch) => {
	return {
		onBtnClick: (action) => {
			console.log('fff', action);
			dispatch(action);
		}
	};
};

export default connect(mapStateToProps, mapActionToProps)(Saga);
