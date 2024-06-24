// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import { useEffect, useState } from "react";
export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay ?? 500);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debouncedValue;
}
//# sourceMappingURL=useDebounce.js.map