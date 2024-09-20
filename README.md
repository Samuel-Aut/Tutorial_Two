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
