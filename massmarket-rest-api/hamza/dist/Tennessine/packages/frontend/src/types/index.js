// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
export var IStatus;
(function (IStatus) {
    IStatus["Failed"] = "FAILED";
    IStatus["Pending"] = "PENDING";
    IStatus["Complete"] = "COMPLETE";
})(IStatus || (IStatus = {}));
export var RelayStatus;
(function (RelayStatus) {
    RelayStatus["Available"] = "AVAILABLE";
    RelayStatus["Unavailable"] = "UNAVAILABLE";
})(RelayStatus || (RelayStatus = {}));
export var IRole;
(function (IRole) {
    IRole["Owner"] = "OWNER";
    IRole["Admin"] = "ADMIN";
    IRole["Clerk"] = "CLERK";
})(IRole || (IRole = {}));
export var SortOption;
(function (SortOption) {
    SortOption["priceLow"] = "Price Low";
    SortOption["priceHigh"] = "Price High";
    SortOption["newest"] = "Newest";
    SortOption["default"] = "Default";
    SortOption["available"] = "Available";
    SortOption["hidden"] = "Hidden";
    SortOption["unavailable"] = "Unavailable";
})(SortOption || (SortOption = {}));
// export type Store = {
//   id: number;
//   name: string;
//   thumbnail: string;
//   products: IProduct[];
//   transactions: ITransaction[];
//   contributors: IContributor[];
//   authorizedKeyCards: number[];
//   relays: IRelay[];
//   tags: ITag[];
// };
//# sourceMappingURL=index.js.map