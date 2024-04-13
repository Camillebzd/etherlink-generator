import { ethers } from "hardhat";

async function main() {
  const etherlinkGenerator = await ethers.deployContract("EtherlinkGenerator");

  await etherlinkGenerator.waitForDeployment();

  console.log("Deployed:", etherlinkGenerator.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
