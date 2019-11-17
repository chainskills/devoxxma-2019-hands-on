# Greetings Devoxx Morocco 2019: Exception Handling (Step 4)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 4 implements the exceptions handled from the smart contract.

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step4**.

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

## 7: Send an empty message

Send an empty message to check if the smart contract throws an exception:

```
truffle(ganache)> await app.setGreetings("", {from: accounts[1], gas: 500000})
```

You should receive an exception error containing the error message sent by the smart contract:

```
Thrown:
{ Error: Returned error: VM Exception while processing transaction: revert The message should not be empty! -- Reason given: The message should not be empty!.    at PromiEvent (/usr/local/lib/node_modules/truffle/build/webpack:/packages/con
```

## 8: Inspect from Ganache

Use Ganache to inspect the contract, its transactions and triggered events.

## 9: Inspect and run the unit suite

The Test suite has been updated to catch exceptions.

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
