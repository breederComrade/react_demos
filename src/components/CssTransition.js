import React from 'react';
import { CSSTransition } from 'react-transition-group';

class CssTransition extends React.Component {
	state = {
		show: false,
		entered: false
	};

	render() {
		const { show } = this.state;
		return (
			<div>
				<button
					onClick={() => {
						this.setState((state) => ({
							show: !state.show
						}));
					}}
				>
					Toggle
				</button>
				<CSSTransition in={show} timeout={3000} unmountOnExit />
			</div>
		);
	}
}
export default CssTransition;
