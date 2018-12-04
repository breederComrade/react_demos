import React from 'react';
import { Transition } from 'react-transition-group';

class Test extends React.Component {
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
				<Transition in={show} timeout={3000} unmountOnExit>
					{(state) => {
						switch (state) {
							case 'entering':
								return 'Entering…';
							case 'entered':
								return 'Entered!';
							case 'exiting':
								return 'Exiting…';
							case 'exited':
								return 'Exited!';
						}
					}}
				</Transition>
			</div>
		);
	}
}
export default Test;
