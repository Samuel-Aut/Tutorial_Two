# Tutorial_Two
 COMP726

### 1. Using remix, modify the Storage.sol contract to store and retrieve a text variable: yourName. How much gas does this use, how does this compare to storing an integer?

![2](https://github.com/user-attachments/assets/17094291-8cf8-49a9-9ff2-a631f94dabb9)

```
[vm]from: 0x5B3...eddC4to: Storage.storeName(string) 0x358...D5eE3value: 0 weidata: 0x063...00000logs: 0hash: 0x189...8faa1
status	0x1 Transaction mined and execution succeed
transaction hash	0x189934a8208e2887e8786bcfa6f7c50e378e00f01f04a96025f10acb8018faa1
block hash	0xc1f1af387a5588bb247267ca3c57a0f38744d86ceba0391ba979e0a3a9f2b08c
block number	9
from	0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
to	Storage.storeName(string) 0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3
gas	51522 gas
transaction cost	44801 gas 
execution cost	23161 gas 
input	0x063...00000
output	0x
decoded input	{
	"string name": "Samuel William"
}

```
**Gas Usage Summary**
Gas Used: 51,522 gas (total gas available for the transaction)
Transaction Cost: 44,801 gas (total cost of the transaction)
Execution Cost: 23,161 gas (cost of executing the function)

**Storing an Integer**

```
// Function to store an integer
function storeInteger(uint256 value) public {
    yourInteger = value;
}

```

In this experiment, we analyzed the gas costs associated with storing a string variable (Samuel William) and an integer in a smart contract.

**Gas Cost for Storing String: 44,801 gas**
**Gas Cost for Storing Integer: 6,680 gas**
From this comparison, it is evident that storing a string requires significantly more gas than storing an integer. This difference highlights the increased complexity and storage requirements for string data types in Ethereum smart contracts.

### 2. Where is a deployed contract stored in Ethereum? Comment on the different gas costs for a) deploying a contract, b) calling a function, and c) storing an address.


**a)** Deploying a Contract: This involves costs for saving the contract code on the blockchain. Deploying can be expensive because it includes running the contract's constructor and initially storing variables.

**b)** Calling a Function: This usually costs less than deploying because it involves running a function and possibly changing the contract's data. The cost depends on how complex the function is and how much data it changes.

**c)** Storing an Address: Saving an address in the contract's data requires gas because any changes to the Ethereum blockchain use gas. The cost depends on whether it's new data or an update. Storing an address usually costs less than storing bigger data types like strings or arrays

### 3. Above, where it says STORAGE AT 0X...., what does this mean? Are there differences between someone's Ethereum Address and where your contract is stored?

![3](https://github.com/user-attachments/assets/fa03a993-8947-4301-932d-788dd50b4e3e)

**STORAGE AT 0X...**
The phrase "STORAGE AT 0x..." refers to where a contract's data is stored on the Ethereum blockchain. Each contract has its own storage space, separate from user addresses.

**Differences:**
Ethereum Address: A unique identifier for a user or contract on Ethereum, allowing transactions and interactions with contracts.

**Contract Storage Location:** Specific to each contract, holding its data. The contract address lets you interact with the contract, while the storage location contains the actual data used by the contract.

### 4. Open Owner.sol in Remix. What does this contract do? Why would this be required?

**Owner.sol Contract**
The Owner.sol contract is used to manage who owns other contracts or assets. It typically includes functions to set and check ownership, transfer ownership, and limit access to certain actions based on who owns it.
> Purpose:

**Access Control:** Ensures only the owner can perform important actions within the contract.

**Security:** Protects against unauthorized access, which is crucial for preventing attacks or misuse.
This type of contract is essential in many decentralized applications (dApps) to enforce security measures and manage permissions effectively.

### 5. What are two development enviornments or tool packages that can help with Ethereum smart contract development (besides Remix)? Choose one of these and setup your local environment to start using it. Include a screenshot showing your dev environment.

I used Hardhat for testing project. Hardhat is a development environment for compiling, deploying, testing, and debugging Ethereum software. It's widely used due to its flexibility, support for plugins, and local Ethereum network simulation.

![4](https://github.com/user-attachments/assets/9dfd4277-3122-4f5b-9e61-3f0f5b786fca)

**1.Runb a Local Etheruem Node**

```
npx hardhat node

```
**2.Deploy a Contract** : Write a simple script  to deploy a contract.

```
npx hardhat run scripts/deploy.js --network localhost

```
**Deployment Output**

```
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Unlock time set to: 1726824197
Contract factory created.
Lock contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Locked amount: 0.001 ETH
Deployment script completed successfully.
```

**Ethereum Account Details e.g**

```
Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
```
**Transaction Details**

```
Contract deployment: Lock
Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
Transaction:         0xdac6bcfe43350ee328cbe7097d3e5974c01ef7f498bbf307acaa4a53ae8aaabe
From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
Value:               0.1 ETH
Gas used:            326100 of 30000000
Block #1:            0x8f6c2c9e2150e7deb076ff6a6719cf165b24d8b9b42442b7ed132e0d2a34c8da
```
**Hardhat Network:** Hardhat comes with a built-in local Ethereum network designed specifically for development. This network allows developers to deploy contracts, run tests, and debug code within their local environment.
**Flexible Task Runner:** Hardhat Runner, the main component, is a flexible and extensible task runner that helps manage and automate recurring tasks in smart contract and dApp development
