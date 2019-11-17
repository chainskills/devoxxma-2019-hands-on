# Greetings Devoxx Morocco 2019: Front-end with React and Drizzle - Implementation (Step 9)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 9 connects the front-end application to the smart contract in order to obtain a real Decentralised Application driven through Web3 and Drizzle.

# 1. Open the project

Clone the repository: https://github.com/chainskills/devoxxma-2019-hands-on.git

Open the folder **step9**.

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

Start Ganache and switch to the workspace created for the Greetings project.

Open the settings and add this project by selecting the **truffle-config.js** file.

Save and restart Ganache.

## 4. Metamask

Ensure that Metamask is connected to the same network as Ganache.

## 5. Compile and deploy your smart contract

Go to the **client** folder and migrate the smart contract:

```
./client $ npm run migrate
```

## 6. Run the Dapp

Run the dapp:

```
./client $ npm start
```

## 7. Interact with the contract

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

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
