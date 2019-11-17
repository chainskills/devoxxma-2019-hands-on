# Greetings Devoxx Morocco 2019: Payable functions (Step 5)

Sample Ethereum smart contract using Truffle 5, Ganache and web3.js 1.x.

The step 5 implements the payable functions.

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step5**.

## 2. Start your Ethereum node

Start Ganache.

Create a workspace and link it to **truffle-config.js** file.

## 3. Set initial service fee

The service fee is initialized during the deployment of the smart contract. 

You can change this value in the file **migrations/2_deploy_contracts.js**

```
const Greetings = artifacts.require('Greetings.sol');

module.exports = function(deployer) {
  deployer.deploy(Greetings, web3.utils.toBN(10000000000000000));
};
```

## 4. Compile and deploy your smart contract

```
$ truffle migrate --reset --compile-all --network ganache
```

## 5. Open the Truffle console

We will use the console from Truffle to interact with the smart contract:

```
$ truffle console --network ganache
truffle(ganache)>
```

## 6: Fetch all accounts

Before interacting with the smart contract, we have to fetch the accounts defined in Ganache:

```
truffle(ganache)> accounts = await web3.eth.getAccounts()
```

## 7: Get an instance to your deployed smart contract

We create an instance to our smart contract.

```
truffle(ganache)> app = await Greetings.deployed()
```

## 8: Get the service fee

Retrieve the service fee that will be used to change the message:

```
truffle(ganache)> serviceFee = await app.getServiceFee()
```

## 9: Change greetings message

Pay to change the greetings message an empty message to check if the smart contract throws an exception:

```
truffle(ganache)> await app.setGreetings("New message", {from: accounts[1], gas: 500000, value: web3.utils.toBN(serviceFee)})
```

## 10: Check the balance

Check the value earned in the contract:

```
truffle(ganache)> await web3.eth.getBalance(Greetings.address)
'10000000000000000'
```

## 11: Change the service fee

The service fee must be changed **only** by the contract owner (accounts[0]):

```
truffle(ganache)> await app.setServiceFee(web3.utils.toWei('0.02', "ether"))
```

Get the new service fee and change the greetings message:

```
truffle(ganache)> serviceFee = await app.getServiceFee()

truffle(ganache)> await app.setGreetings("Hello Devoxx MA", {from: accounts[1], gas: 500000, value: web3.utils.toBN(serviceFee)})

```

Get the new balance:

```
truffle(ganache)> await web3.eth.getBalance(Greetings.address)
'30000000000000000'
```

## 12: Transfer earnings

Transfer earnings to the balance of the contract owner.

First, get the balance of the contract owner:

```
truffle(ganache)> await web3.eth.getBalance(accounts[0])
'99978873000000000000'
```

Then, transfer the earnings (this function is allowed only to the contract owner):

```
truffle(ganache)> await app.transferEarning({from: accounts[0]})
```

Check the new balances (owner and contract):

```
truffle(ganache)> await web3.eth.getBalance(accounts[0])
'100008266440000000000'

truffle(ganache)> await web3.eth.getBalance(Greetings.address)
'0'
```

**Do not forget that the owner had to pay some gas to call transferEarning.**

## 13: Inspect from Ganache

Use Ganache to inspect the contract, its transactions and triggered events.

## 14: Inspect and run the unit suite

The Test suite has been updated to manage payable function.

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
