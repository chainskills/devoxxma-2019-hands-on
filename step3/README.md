# Greetings Devoxx Morocco 2019: Be notified with Events (Step 3)

Sample Decentralised Application (Dapp) used at Devoxx Morocco 2019.

The step 3 implements the notifications emitted by the smart contract through events.

## Set up

To intercept events sent by Ganache, the Truffle console requires that you listen Ganache through its websocket interface.

For that purpose, the entry **webSocket** must be set to true in the **truffle-config.js** file:

```
 networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      websockets: true
    }
```

## 1. Clone the project

`git clone https://github.com/chainskills/devoxxma2019-greetings-truffle/archive/step3.zip

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

You can list your accounts:

```
truffle(ganache)> accounts
```

## 6: Get an instance to your deployed smart contract

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

## 9: Set-up a listener

We define an event listener that will display information sent by the smart contract. The event **GreetingsChangedEvent** is sent when the greetings message changes:

```
truffle(ganache)> logEvent = app.GreetingsChangedEvent({fromBlock:'latest', toBlock:'latest'}).on('data', event => {console.log("Changed by: " + event.returnValues._account); console.log("New message: " + event.returnValues._greetings);})
```

## 9: Change the greetings message

Let's change the greetings message. We keep the result in **receipt** to keep clean the console:

```
truffle(ganache)> receipt = await app.setGreetings("Hello Agadir 2019", {from: accounts[0], gas: 500000})
```

You should see a similar output to this one:

```
Changed by: 0x6e28a534FC9c2811E63a9fDcf6C6E618A099c89b
New message: Hello Agadir 2019
```

# 10: Remove the listener

The listener can be removed like this:

```
truffle(ganache)> logEvent.removeAllListeners()
```

If you change the greetings message, you should not see the output "Changed by...".

# 11: Inspect from Ganache

Use Ganache to inspect the contract, its transactions and triggered events.

# 12: Inspect and run the unit suite

The Test suite has been updated to listen for events.

## Learn more

If you want to know more about all the steps required to install, build and deploy a Dapp, you can subscribe to our course available on Udemy: https://www.udemy.com/getting-started-with-ethereum-solidity-development

We have also a lean-published ebook available on leanpub: https://leanpub.com/blockchain-developer

Have fun !!!

ChainSkills Team - 2019
