import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';

import { NavSearch, SearchWrapper } from '../../style.js';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: false
		};
	}
	render() {
		return (
			<SearchWrapper>
				{/*//对输入框添加样式*/}
				<CSSTransition
					in={this.state.focused} //通常将一个react的组件state赋值给它，通过改变state，从而开启和关闭动画
					timeout={2000} //动画时长
					classNames="yu" //类名前缀，会自动加载预设的类，从而设置类名对应的过渡动画(别忘了加ssssss)
				>
					<NavSearch //这是一个输入框
						className={this.state.focused ? 'focused' : ''}
						onFocus={this.handleInputFocus}
						onBlur={this.handleInoutBlur}
					/>
				</CSSTransition>
				{/*这是一个放大镜的图标，使用阿里矢量图标，具体用法参考官网*/}
				<i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe61e;</i>
			</SearchWrapper>
		);
	}
	//获得焦点时，使focused为true,从而添加上focused这个类选择器对应的样式
	handleInputFocus = () => {
		this.setState({
			focused: true
		});
	};
	//失去焦点时，使focused为false,从而去除focused这个类选择器对应的样式
	handleInoutBlur = () => {
		this.setState({
			focused: false
		});
	};
}

export default Header;
