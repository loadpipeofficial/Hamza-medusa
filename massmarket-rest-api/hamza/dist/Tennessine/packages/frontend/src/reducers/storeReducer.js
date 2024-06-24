export const UPDATE_STORE_NAME = "UPDATE_STORE_NAME";
export const UPDATE_STORE_URL = "UPDATE_STORE_URL";
export const SET_STORE_DATA = "SET_STORE_DATA";
export const storeReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_STORE_NAME:
            return { ...state, name: action.payload.name };
        case UPDATE_STORE_URL:
            return { ...state, profilePictureUrl: action.payload.profilePictureUrl };
        case SET_STORE_DATA:
            return {
                name: action.payload.name,
                profilePictureUrl: action.payload.profilePictureUrl,
            };
        default:
            return state;
    }
};
//# sourceMappingURL=storeReducer.js.map