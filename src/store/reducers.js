// 导入action
import { INIT_STATE, TEST_SAGA } from './actionsType';
let defaultState = {
	val: 1,
	bool: true
};

// 导入reducer
export const f = (state = defaultState, action = {}) => {
	switch (action.type) {
		case INIT_STATE:
			return { ...state, ...{ val: action.value } };
		case TEST_SAGA:
			console.log('TEST_SAGA');
			return { ...state, ...{ val: action.value } };
		default:
			return state;
	}
};
// // 导入reducer
// export const sagaTest = (state = defaultState, action = {}) => {
// 	switch (action.type) {
// 		case INIT_STATE:
// 			return { ...state, ...{ val: action.value } };
// 		default:
// 			return state;
// 	}
// };
