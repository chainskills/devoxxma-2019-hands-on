# Greetings Devoxx Morocco 2019: Front-end with React and Drizzle - Test Public networks (Step 10)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 10 is focusing on the deployment to public networks:

- **Infura.io** to deploye the smart contract on Ropsten
- **Github Pages** for the front-end

Deploying to a test public network allow your uses to test your Dapp before planning the Go Live in the MainNet.

## 1. Clone the project

`git clone https://github.com/chainskills/devoxxma2019-greetings-truffle/archive/step10.zip

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

## 3. Ganache

Ganache will not be required because the smart contract will be deployed on Infura.

## 4. Infura

Go to [Infura.io](https://infura.io) and create a free account.

Create a project connected to **Ropsten**.

Copy the Project ID for futur use.

## 5. Create a seed phrase (or mnemonic)

To allow Truffle deploying your contract on Ropsten, we need a HD Wallet (Hierarchical Deterministic Wallet) to create private keys used to sign the deployment transaction.

This HD Wallet requires a mnenmonic (seed phrase) and a the package **hdwallet-provider** already defined in the package.json file.

To create a seed phrase compliant with Ethereum, proceed as follows:

- Go to https://iancoleman.io/bip39/
- Select 12 words
- Click on **GENERATE**, this will generate your seed phrase
- Select ETH as **Coin** to select Ethereum compliant addresses

**Keep the 12 words in a safe place. Do not share it publically and do not expose it to a file stored in a Git repository.**

## 6. Create .env file

In the root of the project (same level as your **truffle-config.js** file), create a file called **.env**.

**This file will contain sentitive information. Keep it in a safe place. Do not share it and do not store it in repositories such as Github. This file MUST BE ignored by Git**

In the **.env** file, create these entries and copy the information you've got from Infura and from "Mnemonic Code Converter" website:

```
MNEMONIC='enter your 12 words'
INFURA_PROJECT_ID=enter the project ID given by Infura
```

The seed phrase is enclosed by single quote.

## 7. Metamask

Remove and reinstall Metamask.

Import the seed phrase generated erlier. This will allow Metamask to create accounts derivative from your seed phrase.

Ensure that you have at least 2 accounts and rename them as:

- ropsten-1
- ropsten-2

For each account:

- select the account
- click on Deposit
- Scroll down and use the Faucet to get some fake ether on Ropsten
- Request 1 ether

## 8. Compile and deploy your smart contract

Go to the root folder and migrate the smart contract to Ropsten:

```
$ npm run migrate --compile-all --reset --network ropsten
```

Go the client folder and copy the contract artefact:

```
$ cd client
./client * npm run contracts
```

Deploy the frontend to your Github repo:

```
./client $ npm run deploy
```

A branch "gh-pages" should be created on Github.

## 9. Configure Github

Here, we will describe how to publish your frontend on Github.

Go to your Github account and select your project.

Select Settings and scroll-down until "GitHub Pages".

Select **gh-pages branch** as the source.

## 10. Run the Dapp

Run the dapp:

```
./client $ npm start
```

## 11. Interact with the contract

Through the Greeetings Dapp, interact with the smart contract:

- Switch Metamask accounts to see that additional features are only available for the contract owner
- Subscribre or Unsubsribe to events
- Change the Greetings message
- Change the service fee
- Transfer earnings
- Enable or disable the smart contract

Inspect the behaviour in Ganache:

- balances
- transactions
- events
- contract state

As the smart contract and the front-end are deployed on Infura and Github pages, you can share the link of Github pages to your users to help you in test your Dapp.

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
