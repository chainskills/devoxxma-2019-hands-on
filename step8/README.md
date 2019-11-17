# Greetings Devoxx Morocco 2019: Front-end with React and Drizzle - Setup (Step 8)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 8 starts the implementation of the Decentralised Application with React and [Drizzle](https://www.trufflesuite.com/drizzle).

Drizzle is a collection of libraries that will transform a web application into a decentralised application (Dapp).

This version of the Dapp contains a first implementation of Drizzle. Actions are not yet linked to the smart contract. We retrieve and display only the account address and its balance.

## Prerequisites: Install tools and frameworks

To interact with the Greetings smart contract through the Dapp, you have to install the browser extension **Metamask** that is available for Chrome and Firefox:

- **Metamask**: https://metamask.io/
  - Ethereum Wallet and extension to tranform your browser into a Dapp browser.

When you install Metamask, keep the seed phrase (12 words) in a safe place. If you expose your seed phrase, anyone would be able to create same accounts as your and to get access to your wallets and to sign transactions on your behalf.

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step8**.

## 2. Install dependecies

From the root folder, run the following command to install dependencies used to beautify the Solidity code (prettier-solidity):

```
$ npm install
```

From the **client** folder, install all required dependencies such as React and Drizzle:

```
$ cd client
./client $ npm install
```

## 3. Start your Ethereum node

Start Ganache.

Create a workspace and link it to **truffle-config.js** file.

## 4. Configure Metamask

From Metamask, open Settings and add a network linked to Ganache:

- **Network Name**: Ganache (or any other name)
- **RPC URL**: http://127.0.0.1:7545

Then, import Ganache accounts (at least two of them) into Metamask. You will have to copy the private key from Ganache. Ensure that you have imported at least the first account. You can give rename them: Ganache-1, Ganache-2, etc.

Ensure that you have switched the Metamask network to Ganache.

## 5. Compile and deploy your smart contract

The file **package.json** located into the **client** folder contains scripts to compile and deploy the smart contract (**migrate**) and to copy the building artefacts (**contracts**) that will be required by the front-end application.

The script **migrate** do both actions: migrate + copy

```
./client $ npm run migrate
```

## 6. Run the Dapp

Run the dapp:

```
./client $ npm start
```

Switch accounts from Metamask.

You should see that the account address and the balance change accordingly.

Do not try to change the greetings message because this implementation is not already done.

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
