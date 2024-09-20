const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);

    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 3600; // 1 hour from now
    console.log("Unlock time set to:", unlockTime);

    const lockedAmount = ethers.parseEther("0.001");

    const Lock = await ethers.getContractFactory("Lock");
    console.log("Contract factory created.");

    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
    await lock.waitForDeployment();

    console.log(`Lock contract deployed to: ${await lock.getAddress()}`);
    console.log(`Locked amount: ${ethers.formatEther(lockedAmount)} ETH`);
}

main()
    .then(() => {
        console.log("Deployment script completed successfully.");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Error during deployment:", error);
        process.exit(1);
    });