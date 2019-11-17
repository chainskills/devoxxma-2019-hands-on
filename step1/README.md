# Greetings Devoxx Morocco 2019: Create and deploy the smart contract (Step 1)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 1 focused in the development of the smart contract, the compiling and the deployment process. We have also used the console of Truffle to interact with the contract.
Ganache was used as the personal blockchain and to inspect the contract, its transactions and the balance of the accounts.

The following procedure describes how to install, deploy and interact with the contract.

## Prerequisites: Install tools and frameworks

To build, deploy and test your Dapp locally, you need to install the following tools and frameworks:

- **node.js and npm**: https://nodejs.org/en/

  - Node.js can be installed from an installation package or through some package managers such as Homebrew on a Mac.

- **Truffle**: https://github.com/trufflesuite/truffle

  - Create and deploy your Dapp with this build framework for Ethereum.

  In this sample, we use the beta version of Truffle 5 that you can install in this way:

  ```
  npm uninstall -g truffle
  npm install -g truffle
  ```

- **Ganache**: https://github.com/trufflesuite/ganache
  - Development Ethereum node.

## 1. Clone the project

`git clone https://github.com/chainskills/devoxxma2019-greetings-truffle/archive/step1.zip

## 2. Start your Ethereum node

Start Ganache.

Create a workspace and link it to **truffle-config.js** file.

The first account will be the default account used to deploy your contract.

## 3. Configure your project

Open the file `truffle-config.js` to check that the port number used by Ganache is the same as your environment.

```
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    }
```

## 4. Compile and deploy your smart contract

```
$ truffle migrate --reset --compile-all --network ganache
```

The output will provide you useful information such as the total cost of your deployment.

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

You can list your accounts:

```
truffle(ganache)> accounts
```

## 7: Get an instance to your deployed smart contract

We create an instance to our smart contract.

```
truffle(ganache)> app = await Greetings.deployed()
```

From now on, you can use the `app` variable to interact with your smart contract.

## 8: Get the default greetings message

The constructor of the smart contract has set a default greetings message:

```
truffle(ganache)> await app.getGreetings()
'Hello from Devoxx Morocco 2019!'
```

You should see "Hello from Devoxx Morocco 2019!".

At this stage you can open the Transactions page on Ganache. You will notice that this call is free because the getGreetings() function is a constant.

## 9: Change the greetings message

Before changing the message, let's get the balance of the first account:

```
truffle(ganache)> await web3.eth.getBalance(accounts[1])
'100000000000000000000'
```

The change of the message will require some gas as we will change the state of the smart contract:

```
truffle(development)> await app.setGreetings("Hello from ChainSkills!", {from: accounts[1]})
```

If you review the Transactions page on Ganache you will find a "CONTRACT CALL" transaction.
Please inspect it to review the gas paid by the accounts[1]. The data is coded in hexadecimal.

## 10: Check the updated greetings message

The new greetings message should be displayed using the getGreetings() function call:

```
truffle(ganache)> await app.greetings()
 ChainSkills!'
```

And finally, get the balance of the account:

```
truffle(ganache)> await web3.eth.getBalance(accounts[1])
'99999312060000000000'
```

We can see that the account #1 has paid some gas to submit the transaction.

**This balance is just an example. It could differ from the one you will fetch from your instance of Ganache**

## 11: Inspect the contract from Ganache UI

From Ganache UI, create a workplace connected to your project.

Then, use Ganache to review:

- state of the contract
- the transactions
- the block
- the balance

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
