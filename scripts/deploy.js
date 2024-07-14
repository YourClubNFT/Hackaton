// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // Get the contract to deploy
  const TheCompetenciesOfTheFuture = await hre.ethers.getContractFactory("TheCompetenciesOfTheFuture");
  
  const initialOwner = "0x49E56EB3DC3589Bd988c47408F710E132D074D5d";
  const initialCost = hre.ethers.parseEther("1");
  
  // Deploy the contract
  const tctf = await TheCompetenciesOfTheFuture.deploy(initialOwner, initialCost);
  
  await tctf.waitForDeployment();
  
  console.log("TheCompetenciesOfTheFuture deployed to:", await tctf.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
