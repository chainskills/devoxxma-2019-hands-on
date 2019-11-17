# Greetings Devoxx Morocco 2019: Inheritance and function modifiers (Step 7)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 7 simplify the code of the smart contract thanks to the notion of inheritance and function modifiers.

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step7**.

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

## 5. Test the contract

We use the unit testing to ensure that this change didn't impact the features offered by the smart contract:

```
truffle(ganache)> test
```

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
