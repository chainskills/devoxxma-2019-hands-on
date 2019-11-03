# Part 5: Commands

## Go to the project


    $ cd ~/DevoxxMA2019/devoxxma2019-greetings-truffle


## Open code on Visual Studio Code


    $ code .


## Add exceptions handling in contracts/Greetings.sol


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
            bytes memory newMessage = bytes(_message);
            require(newMessage.length > 0 , "The message should not be empty!");
            
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


## Change the message


    truffle(ganache)>  await app.setGreetings("Hello Devoxx MA!", {from: accounts[1], gas: 50000})
    ...
    truffle(ganache)> await app.getGreetings()
    'Hello Devoxx MA!'
## Send an empty string


    truffle(ganache)> await app.setGreetings("", {from: accounts[1], gas: 50000})


## Check contract’s state


    truffle(ganache)> await app.getGreetings()
    'Hello Devoxx MA!'
## Run the test


    truffle(ganache)> test
    ...
## Completed project

Clone the project with the tag step1:


    https://github.com/chainskills/devoxxma2019-greetings-truffle
    
    git clone git@github.com:chainskills/devoxxma2019-greetings-truffle.git --branch step4 --single-branch

