const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_STATE":
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
