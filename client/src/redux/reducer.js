/* eslint-disable indent */
// Reducer

const initialState = {
    user: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_STATE":
            return { ...state };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default reducer;
