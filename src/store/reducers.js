// 导入action
import { INIT_STATE, TEST_SAGA } from './actionsType';

import Immutable from 'immutable';

let defaultState = Immutable.Map({
	val: 1,
	bool: true
});

// 导入reducer
export const f = (state = defaultState, action = {}) => {
	switch (action.type) {
		case INIT_STATE:
			return state.set('val', action.value);
		case TEST_SAGA:
			return state.set('val', action.value);
		default:
			return state;
	}
};
