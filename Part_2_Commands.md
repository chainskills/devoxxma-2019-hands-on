# Part 2: Commands

## Create project folders


    $ cd ~ 
    $ mkdir -p ~/DevoxxMA2019/devoxxma2019-greetings-truffle; cd "$_"


## Create project with Truffle


    $ truffle init
## Open code on Visual Studio Code


    $ code .
## Create ‘contracts/Greetings.sol’ smart contract


    pragma solidity >=0.5.0 <0.6.0;
    
    contract Greetings {
        string message;
    
        constructor() public {
            message = "Hello from Devoxx Morocco 2019!";
        }
    
        function setGreetings(string memory _message) public {
            message = _message;
        }
    
        function getGreetings() public view returns (string memory) {
            return message;
        }
    }


## Create deployment script ‘migrations/2_deploy_contracts.js’


    const Greetings = artifacts.require("Greetings.sol");
    
    module.exports = function(deployer) {
      deployer.deploy(Greetings);
    }; 


## Optimize Solidity in ‘truffle-config.js’


    // Configure your compilers
      compilers: {
        solc: {
          ...
          settings: {
            // See the solidity docs for advice about optimization and evmVersion
            optimizer: {
              enabled: false,
              runs: 200
            }
          }
          ...
        }
      }


## Open Truffle consoles


    $ cd ~/DevoxxMA2019/devoxxma2019-greetings-truffle

**First console:**


    $ truffle develop
    Truffle Develop started at http://127.0.0.1:9545/ 

**Second console:**


    $ truffle develop --log
    Connected to existing Truffle Develop session at http://127.0.0.1:9545/
## Build and deploy the smart contract

From 1st console.


    truffle(develop)> migrate --compile-all --reset

Check 2nd console.


## Get deployment address of the contract


    truffle(develop)> Greetings.address


## Get accounts


    truffle(develop)> accounts = await web3.eth.getAccounts()


## Get instance of the contract


    truffle(develop)> app = await Greetings.deployed()
    undefined

Alternative using web3.js


    truffle(develop)> app = new web3.eth.Contract(Greetings.abi, Greetings.address)


## Get Greetings message


    truffle(develop)> await app.getGreetings()
    'Hello from Devoxx Morocco 2019!'

Alternative using web3.js:


    truffle(develop)> await app.methods.getGreetings().call()
    'Hello from Devoxx Morocco 2019!'


## Change the greetings message


    truffle(develop)> receipt = await app.setGreetings("Hello ChainSkills!", {from: accounts[0]}).on('transactionHash', hash => {console.log(hash);})

Alternative using web3.js:


    truffle(develop)> receipt = await app.methods.setGreetings("Hello ChainSkills!").send({from: accounts[0]}).on('transactionHash', hash => {console.log(hash);})
    


## Get New greetings message


    truffle(develop)> await app.getGreetings()
    'Hello ChainSkills!'

Alternative using web3.js:


    truffle(develop)> await app.methods.getGreetings().call()
    'Hello ChainSkills!'


## Exit console


    truffle(develop)> .exit


## Exit logs

The console log can be closed using ^C or by closing its terminal window:


    ...
      develop:ganache eth_getTransactionReceipt +0ms
      develop:ganache eth_call +1m
    ^C
    $ 


## Ganache: create workspace


![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572712416375_image.png)



![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572712416375_image.png)

![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572713878469_image.png)

## Ganache: accounts


![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572714671116_image.png)

## Configure Truffle for Ganache in ‘truffle-config.js’


    module.exports = {
    ...
      networks: {
        ganache: {
          host: "localhost",
          port: 7545,
          network_id: "*" // Match any network id
        }
      }
    };


    NOTE
    Do not call this network "develop" or "development" because these names are reserved by Truffle for its own development environements.

Deploy contract to Ganache



    $ cd ~/DevoxxMA2019/devoxxma2019-greetings-truffle
    
    $ truffle migrate --compile-all --reset --network ganache


## Impact on balance


![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572714732417_image.png)



## Contract is deployed


![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572715234271_image.png)

![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572715285759_image.png)


Check the transaction

![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572714778416_image.png)

## Interact from Truffle


    $ truffle console --network ganache
    truffle(ganache)> 



    truffle(develop)> Greetings.address
    '0x4A225baF880d5Ef17F18A6Bbe60c0a1c5d52005A'
    truffle(ganache)> accounts = await web3.eth.getAccounts()
    truffle(ganache)> app = await Greetings.deployed()
    truffle(develop)> await app.getGreetings()
    'Hello from Devoxx Morocco 2019!'
    truffle(ganache)> receipt = await app.setGreetings("Hello ChainSkills!", {from: accounts[0]}).on('transactionHash', hash => {console.log(hash)})
    0x99766371fdd3380c4fea42f43c541d9b48ed9d99274f1442f7ff41dc4b463b27
    truffle(develop)> await app.getGreetings()
    'Hello ChainSkills!'
    truffle(develop)> .exit


## Search for the transaction hash in Ganache


![](https://paper-attachments.dropbox.com/s_A36C364382546D218C858E077A56EE50CF2182504C9524EA93A41C78745CB57E_1572715152798_image.png)



## Completed project

Clone the project with the tag step1:


    https://github.com/chainskills/devoxxma2019-greetings-truffle
    
    git clone git@github.com:chainskills/devoxxma2019-greetings-truffle.git --branch step1 --single-branch

