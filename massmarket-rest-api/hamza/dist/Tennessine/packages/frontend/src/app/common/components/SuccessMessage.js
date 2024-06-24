// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import React, { useEffect } from "react";
const SuccessMessage = ({ show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timeoutId = setTimeout(() => {
                onClose();
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [show, onClose]);
    return show ? (<div className="pl-4 py-2 bg-green-200">
      <p>Your changes have been saved.</p>
    </div>) : null;
};
export default SuccessMessage;
//# sourceMappingURL=SuccessMessage.js.map