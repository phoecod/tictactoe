const defaultState = {
	players: []
};

export default (state = defaultState.players, action) => {

	switch (action.type) {
		case 'SET_PLAYERS':
            return state.concat(action.players);
        case 'REMOVE_PLAYERS':
			return {};
		default:
			return state;
	}
}