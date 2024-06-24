// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
const setMapData = (key, value, db) => {
    if (!db)
        return;
    const mapArray = Array.from([...value.entries()]);
    return db.put(key, JSON.stringify(mapArray));
};
const setItem = (key, value, db) => {
    if (!db)
        return;
    return db.put(key, JSON.stringify(value));
};
const getParsedMapData = async (key, db) => {
    try {
        const data = await db.get(key);
        if (data) {
            return new Map(JSON.parse(data));
        }
    }
    catch (error) {
        console.log({ error });
    }
    return null;
};
const getItem = async (key, db) => {
    try {
        const data = await db.get(key);
        if (data)
            return JSON.parse(data);
    }
    catch (error) {
        console.log({ error });
    }
    return null;
};
export { setMapData, getParsedMapData, setItem, getItem };
//# sourceMappingURL=level.js.map