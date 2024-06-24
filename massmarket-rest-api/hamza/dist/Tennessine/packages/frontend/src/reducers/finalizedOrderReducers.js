// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
export const SET_ORDER = "SET_ORDER";
export const finalizedOrderReducer = (state, action) => {
    const _state = new Map(state);
    switch (action.type) {
        case SET_ORDER:
            _state.set(action.payload.eventId, action.payload.order);
            return _state;
        default:
            return state;
    }
};
//# sourceMappingURL=finalizedOrderReducers.js.map