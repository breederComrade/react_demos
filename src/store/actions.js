import { INIT_STATE, TEST_SAGA } from './actionsType';

export const initState = (value) => {
	type: INIT_STATE;
	value;
};
export const initSaga = (value) => {
	type: TEST_SAGA;
	value;
};

export default {
	initState,
	initSaga
};
