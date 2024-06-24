// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import React from "react";
import Image from "next/image";
const BigArrowRightButton = ({ onClick }) => {
    return (<div className="bg-blue-800	rounded-full w-12 h-12 p-3" onClick={onClick}>
      <Image src="/assets/Big-Arrow-Right.svg" width={24} height={24} alt="left-arrow-icon" unoptimized={true} // TODO: pre-scale images
    />
    </div>);
};
export default BigArrowRightButton;
//# sourceMappingURL=BigArrowRightButton.js.map