// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
export const REMOVE_ORDER_ITEM = "REMOVE_ORDER_ITEM";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const UPDATE_ORDER_ITEM = "UPDATE_ORDER_ITEM";
export const SET_ALL_ORDER_ITEMS = "SET_ALL_ORDER_ITEMS";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const UPDATE_ORDER_HASH = "UPDATE_ORDER_HASH";
export const SET_ORDER_SIG = "SET_ORDER_SIG";
export const orderReducer = (state, action) => {
    const _state = new Map(state);
    switch (action.type) {
        case UPDATE_ORDER_ITEM:
            _state.set(action.payload.orderId, orderStateReducer(_state.get(action.payload.orderId) || { items: {} }, action));
            return _state;
        case SET_ALL_ORDER_ITEMS:
            return action.payload.allOrderItems;
        case UPDATE_ORDER_STATUS:
        case REMOVE_ORDER_ITEM:
        case UPDATE_ORDER_HASH:
        case CLEAR_ORDER:
        case SET_ORDER_SIG:
            _state.set(action.payload.orderId, orderStateReducer(_state.get(action.payload.orderId) || { items: {} }, action));
            return _state;
        default:
            return _state;
    }
};
function orderStateReducer(state, action) {
    switch (action.type) {
        case UPDATE_ORDER_ITEM:
        case REMOVE_ORDER_ITEM:
            return {
                ...state,
                items: orderItemReducer({ ...state.items }, action),
            };
        case UPDATE_ORDER_STATUS:
            return {
                ...state,
                status: action.payload.status,
            };
        case UPDATE_ORDER_HASH:
            return {
                ...state,
                txHash: action.payload.txHash,
            };
        case CLEAR_ORDER:
            return {
                ...state,
                items: {},
            };
        case SET_ORDER_SIG:
            return {
                ...state,
                signature: action.payload.signature,
            };
        default:
            return { ...state };
    }
}
function orderItemReducer(state, action) {
    switch (action.type) {
        case UPDATE_ORDER_ITEM:
            return {
                ...state,
                [action.payload.itemId]: action.payload.saleQty,
            };
        case REMOVE_ORDER_ITEM:
            delete state[action.payload.itemId];
            return { ...state };
        default:
            return { ...state };
    }
}
//# sourceMappingURL=orderReducers.js.map