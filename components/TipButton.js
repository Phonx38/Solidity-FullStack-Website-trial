import { useState } from "react";
import SecondaryButton from "./secondary-button";
import { ethers } from "ethers";
import contractAbi from "../utils/abi.js";
import getKeyboardsContract from "../utils/getKeyboardsContract";

export default function TipButton({ ethereum, index }) {
  const contractAddress = "0xA4Ea45C1781998A455E842561657104a4Ae530D2";
  const contractABI = contractAbi;
  const keyboardsContract = getKeyboardsContract(ethereum);
  const [mining, setMining] = useState(false);

  const submitTip = async (e) => {
    if (!keyboardsContract) {
      console.error("KeyboardsContract object is required to submit a tip");
      return;
    }

    setMining(true);
    try {
      const tipTxn = await keyboardsContract.tip(index, {
        value: ethers.utils.parseEther("0.01"),
      });
      console.log("Tip transaction started...", tipTxn.hash);

      await tipTxn.wait();
      console.log("Sent tip!", tipTxn.hash);
    } finally {
      setMining(false);
    }
  };

  return (
    <SecondaryButton onClick={submitTip} disabled={mining}>
      {mining ? "Tipping..." : "Tip 0.01 eth!"}
    </SecondaryButton>
  );
}
