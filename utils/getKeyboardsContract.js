import { ethers } from "ethers";

import contractAbi from "../utils/abi.js";

const contractAddress = "0xA4Ea45C1781998A455E842561657104a4Ae530D2";
const contractABI = contractAbi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
