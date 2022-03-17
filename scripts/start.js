async function main() {
  const [owner, somebodyElse] = await hre.ethers.getSigners();
  const keyBoardContractFactory = await hre.ethers.getContractFactory(
    "Keyboards"
  );
  const keyboardsContract = await keyBoardContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("Contract deployed to:", keyboardsContract.address);

  let keyBoards = await keyboardsContract.getKeyboards();
  console.log(" We got  the keyboards!", keyBoards);

  //   const keyboardTxn = await keyboardsContract.create(0, true, "sepia");
  //   await keyboardTxn.wait();

  //   const tipTxn = await keyboardsContract
  //     .connect(somebodyElse)
  //     .tip(0, { value: hre.ethers.utils.parseEther("1") });
  //   const tipTxnReceipt = await tipTxn.wait();
  //   console.log(tipTxnReceipt.events);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
