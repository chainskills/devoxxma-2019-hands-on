# Greetings Devoxx Morocco 2019: Deactivate the contract (Step 6)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 6 allows the contract owner to enable or disable the contract.

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step6**.

## 2. Start your Ethereum node

Start Ganache.

Create a workspace and link it to **truffle-config.js** file.

## 3. Compile and deploy your smart contract

```
$ truffle migrate --reset --compile-all --network ganache
```

## 4. Open the Truffle console

We will use the console from Truffle to interact with the smart contract:

```
$ truffle console --network ganache
truffle(ganache)>
```

## 5: Fetch all accounts

Before interacting with the smart contract, we have to fetch the accounts defined in Ganache:

```
truffle(ganache)> accounts = await web3.eth.getAccounts()
```

## 6: Get an instance to your deployed smart contract

We create an instance to our smart contract.

```
truffle(ganache)> app = await Greetings.deployed()
```

## 7: Get the service fee

Retrieve the service fee that will be used to change the message:

```
truffle(ganache)> serviceFee = await app.getServiceFee()
```

## 8: Get the greetings message

Retrieve the greetings message already defined in the contract:

```
truffle(ganache)> await app.getGreetings()
'Hello from Devoxx Morocco 2019!'
```

## 9: Disable the contract

The contract owner disable the contract to not allow the change of the greetings message:

```
truffle(ganache)> await app.disableContract({from: accounts[0], gas: 500000})
```

If you try to change the greetings:

```
await app.setGreetings("Are you enable?", {from: accounts[2], gas: 500000, value: web3.utils.toBN(serviceFee)})
```

You should get an exception:

```
{ Error: Returned error: VM Exception while processing transaction: revert The contract is not enabled! -- Reason given: The contract is not enabled!.
```

## 10: Transfer earnings

Even if the contract is disabled, some functions are still available for the contract owner, such as the transfer of values earned and stored in the balance of the contract.

```
truffle(ganache)> await app.transferEarning({from: accounts[0]})
```

## 11: Enable the contract

The contract owner can re-enable the contract:

```
truffle(ganache)> await app.enableContract({from: accounts[0], gas: 500000})
```

## 12: Change the greetings message

The contract is enable again. We can change the greetings message:

```
truffle(ganache)> await app.setGreetings("Are you enable?", {from: accounts[2], gas: 500000, value: web3.utils.toBN(serviceFee)})
```

## 13: Inspect from Ganache

Use Ganache to inspect the contract, its transactions and triggered events.

## 14: Inspect and run the unit suite

The Test suite has been updated to manage enable and disable functions.

## 15: Kill the contract

A function **kill** is defined to self destruct the contract and "wipe" the code and the state variables.

This function **kill** is only available for the contract owner.

A call to **selfdestruct** is not really recommended because the contract can still receive values with no way to get it back from the contract.

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
