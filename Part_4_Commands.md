# Part 4: Commands

## Go to the project


    $ cd ~/DevoxxMA2019/devoxxma2019-greetings-truffle


## Open code on Visual Studio Code


    $ code .


## Enable websockets in truffle-config.js


    module.exports = {
         // See <http://truffleframework.com/docs/advanced/configuration>
         // to customize your Truffle configuration!
         networks: {
              ganache: {
                host: '127.0.0.1',
                port: 7545,
                network_id: '*',
                websockets: true
              }
         }
    };


## Add an event in contracts/Greetings.sol


    pragma solidity >=0.5.0 <0.6.0;
    
    contract Greetings {
        string message;
    
        // Events
        event GreetingsChangedEvent (
            address indexed _account,
            string _greetings
        );
    
        constructor() public {
            message = "Hello from Devoxx Morocco 2019!";
        }
    
        function setGreetings(string memory _message) public {
            message = _message;
            emit GreetingsChangedEvent(msg.sender, _message);
        }
    
        function getGreetings() public view returns (string memory) {
            return message;
        }
    }


## Open the Truffle console


    $ truffle console --network ganache
    truffle(ganache)> 


## Migrate the smart contract


    truffle(ganache)> migrate --reset -compile-all


## Get the Accounts


    truffle(ganache)> accounts = await web3.eth.getAccounts()


## Get the instance to the contract


    truffle(ganache)> app = await Greetings.deployed()


## Watch events


    truffle(ganache)> logEvent = app.GreetingsChangedEvent({fromBlock:'latest', toBlock:'latest'}).on('data', event => {console.log(event);})


## Change Greetings with Promievents


    truffle(ganache)> receipt = await app.setGreetings("New message", {from: accounts[1], gas: 500000}).on("transactionHash", hash => {console.log("hash", hash);}).on("receipt", receipt => {console.log("receipt", receipt);}).once("confirmation", (num, receipt) => {console.log("num", num);})
    ...
    returnValues:
    ...


## Inspect events on Ganache
![](https://paper-attachments.dropbox.com/s_FFDD014BD994F34BAC98AE5DF07025E53AB55A56EA777412D74A6A198A1DB435_1572777346571_image.png)



## Remove event listeners


    truffle(ganache)> logEvent.removeAllListeners()


## Call with no events


    truffle(ganache)> receipt = await app.setGreetings("New message", {from: accounts[1], gas: 500000}).on("transactionHash", hash => {console.log("hash", hash);}).on("receipt", receipt => {console.log("receipt", receipt);}).once("confirmation", (num, receipt) => {console.log("num", num);})
    ...
    returnValues:
    ...

The section **returnValues** is not there.

## Watch events again


    truffle(ganache)> logEvent = app.GreetingsChangedEvent({fromBlock:'latest', toBlock:'latest'}).on('data', event => {console.log("Changed by: " + event.returnValues._account); console.log("New message: " + event.returnValues._greetings);})


## Change Greetings message


    truffle(ganache)> await app.setGreetings("Hello from Agadir!", {from: accounts[1], gas: 500000})
    Changed by: 0xD2B7Bd94BF8EDd9Bef3f23FD17129624c617b322
    New message: Hello from Agadir!


## Check on Ganache


![User-uploaded image: image.png](https://paper-attachments.dropbox.com/s_FFDD014BD994F34BAC98AE5DF07025E53AB55A56EA777412D74A6A198A1DB435_1572779701355_image.png)



## Update test/GreetingdTest.js


    // Test case: should check events
    it("should emit an event when a new article is sold", async () => {
        const receipt = await chainListInstance.sellArticle(
            articleName,
            articleDescription,
            web3.utils.toWei(parseFloat(articlePrice).toString(), "ether"),
            { from: seller }
        );
    
        assert.equal(
          receipt.logs.length,
          1,
          'one event should have been triggered'
        );
        assert.equal(
          receipt.logs[0].event,
          'GreetingsChangedEvent',
          'event should be GreetingsChangedEvent'
        );
        assert.equal(
          receipt.logs[0].args._account,
          accounts[1],
          'the caller must be ' + accounts[1]
        );
        assert.equal(
          receipt.logs[0].args._greetings,
          newMessage,
          'the new message must be ' + newMessage
        );
    
        assert.equal(
            web3.utils.fromWei(receipt.logs[0].args._price, "ether"),
            articlePrice,
            "event article price must be " + articlePrice
        );
    });


## Run the test


    truffle(ganache)> test
    ...
## Completed project

Clone the project with the tag step1:


    https://github.com/chainskills/devoxxma2019-greetings-truffle
    
    git clone git@github.com:chainskills/devoxxma2019-greetings-truffle.git --branch step3 --single-branch

