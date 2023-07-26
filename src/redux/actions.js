export const saveToken = (data) => {
    return {
        type: "login/saveToken",
        payload: data,
    };
};
export const saveAccount = (data) => {
    return {
        type: "login/saveAccount",
        payload: data,
    };
};
