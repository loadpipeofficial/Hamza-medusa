// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
export const ADD_KC_PUBKEY = "ADD_KC_PUBKEY";
export const pubKeyReducer = (state, action) => {
    switch (action.type) {
        case ADD_KC_PUBKEY:
            return [...state, action.payload.cardPublicKey];
        default:
            return state;
    }
};
//# sourceMappingURL=KCPubKeysReducers.js.map