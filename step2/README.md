# Greetings Devoxx Morocco 2019: Unit testing with Mocha and Chai (Step 2)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 2 focused in the unit testing with Mocha and Chai bundled with Truffle.

The following procedure describes how to run the test with Truffle.

## Warning

**Make that you don't run your tests on the Ethereum's main net otherwise you will spend real ether with no chance to get it back**

## Prerequisites: Install tools and frameworks

All the prerequisites have been properly installed:

- node.js
- truffle
- Ganache

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step2**.

## 2. Start your Ethereum node

Start Ganache.

Create a workspace and link it to **truffle-config.js** file.

## 3. Test your project

Truffle uses Mocha and Chain to run your tests.

```
$ truffle test --network ganache
```

You can also run your tests from the console of Truffle:

```
$ truffle console --network ganache

truffle(ganache)> test

Compiling your contracts...
===========================
> Compiling ./contracts/Greetings.sol
> Compiling ./contracts/Migrations.sol



  Contract: Greetings -> using Truffle abstraction
    ✓ should let us get the initial message
    ✓ should let us change the initial message (136ms)


  2 passing (197ms)

```

**Ensure that all of your test cases passed**

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
