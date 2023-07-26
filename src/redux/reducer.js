const initValue = {
    token: localStorage.getItem("token"),
    account: {},
};
const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case "login/saveToken":
            return {
                ...state,
                token: action.payload,
            };
        case "login/saveAccount":
            return {
                ...state,
                account: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
