// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
"use client";
import React from "react";
const SecondaryButton = React.forwardRef(({ ...props }, ref) => {
    return (<button className={`flex justify-center items-center p-2 text-white rounded-xl ${props.color ? props.color : "bg-primary-gray"} w-full disabled:bg-gray-200 disabled:text-gray-500`} ref={ref} {...props}/>);
});
SecondaryButton.displayName = "Button";
export default SecondaryButton;
//# sourceMappingURL=SecondaryButton.js.map