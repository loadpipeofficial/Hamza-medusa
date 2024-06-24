"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chevron from "./Chevron";
const CurrencyButton = ({ toggle }) => {
    const [open, setOpen] = useState(false);
    return (<div className="flex gap-2 py-4 text-sm">
      <div id="sortOption-button" className="flex border gap-1 rounded-xl py-2 px-4 bg-primary-gray ml-auto" onClick={() => {
            toggle();
            setOpen(!open);
        }}>
        <Image src="/assets/Ethereum.svg" width={19} height={19} alt="eth-icon"/>
        <p className="flex items-center text-white px-1">USDC</p>
        <Chevron open={open}/>
      </div>
    </div>);
};
export default CurrencyButton;
//# sourceMappingURL=CurrencyButton.js.map