# Demo with node and web3.js

# Create project folders

    $ cd ~
    $ mkdir -p DevoxxMA2019/devoxxma2019-greetings-web3-solc; cd "$_"
    $ mkdir contracts
    $ mkdir build

# Prepare Node project

    $ npm init
    keep all default values

# Check versions supported by Truffe

    $ truffle version
    Truffle v5.0.43 (core: 5.0.43)
    Solidity v0.5.8 (solc-js)
    Node v10.17.0
    Web3.js v1.2.1

# Install dependecies (solc, web3)

    $ npm install web3@1.2.1 solc@0.5.8

# Open code on Visual Studio Code

    $ code .

# Inspect package.json

    {
      "name": "hellodevoxx-solc",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "solc": "^0.5.8",
        "web3": "^1.2.1"
      }
    }

# Create the Greetings.sol smart contract

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

# Create the file compile.js

    // Load a library to work with files and folders
    const path = require("path");

    // Load a library to access the file system
    const fs = require("fs-extra");

    // Load the Solidity compiler
    const solc = require("solc");

    // Clean up the build folder
    const buildPath = path.resolve(__dirname, "build");
    fs.removeSync(buildPath);

    // Get the path of the contract
    const contractPath = path.resolve(__dirname, "contracts", "Greetings.sol");

    // Configuration for the Solidity compiler
    const params = {
        language: "Solidity",
        sources: {
            "contract": {
                content: fs.readFileSync(contractPath, 'utf-8')
            }
        },
        settings: {
            outputSelection: {
                "*": {
                    "*": ["abi", "evm.bytecode"] //ABI = Application Binary Interface, which is the API of our contract
                }
            }
        }
    };

    // Compile the contract and store the result in the output constant
    const output = JSON.parse(solc.compile(JSON.stringify(params)));

    // Use or create the build folder
    fs.ensureDirSync(buildPath);

    // Create the JSON file and store the contract's compilation result
    fs.outputJsonSync(
        path.resolve(buildPath, "Greetings.json"),
        output.contracts.contract.Greetings
    );

    // Export Greetings contract ABI and bytecode, which we will need later to deploy and interact with the contract.
    module.exports.interface = output.contracts.contract.Greetings.abi;
    module.exports.bytecode = output.contracts.contract.Greetings.evm.bytecode.object;

# Create the file deploy.js

    // Load library to interact with Ethereum nodes
    const Web3 = require("web3");

    // Get the Application Binary Interface (ABI) and bytecode from compiled contract. This will effectively run the compile script as well.
    const {interface, bytecode} = require("./compile");

    // Create a new instance of web3 plugged into Ganache
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

    // Function to deploy the contract
    const deploy = async () => {
        // Retrieve the list of accounts asynchronously, which is why we use async/await
        const accounts = await web3.eth.getAccounts();

        // Create a contract instnce using the interface to the contract (Application Binary Interface - ABI)
        // Deploy the bytecode of the contract using the first account and allowing Ganache to expend a maximum of 1 million gas units in the process
        const result = await new web3.eth.Contract(interface)
            .deploy({
                data: bytecode
            })
            .send({from: accounts[0], gas: "1000000"});

        // Keep the unique address of the deploed contract. You will need it to be able to interact with the contract
        console.log("contract address: ", result.options.address);
    };

    // Deploy the contract
    deploy();

# Deploy the contract

    $ node deploy
    contract address:  0x41307Ec332Fe70d26Dd9d1C15120B2b826491335

# Start the Node console

    node

You can clear the console using:

    > console.log('\033c')

# Get an instance to the contract

    > Web3 = require('web3')
    ...
    > web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
    ...

    > web3.eth.getAccounts().then(_accounts => {accounts = _accounts})

    > accounts
    [ '0xe5b780aE69BCE4f9473B4D5869B9e4771A5aaAEa',
      '0x7FcBa32B6d18f859C24C5aA42e594B62af6af296',
    ...

    > contractPath = path.resolve("./build/Greetings.json")

    > contractFile = fs.readFileSync(contractPath, "utf8")

    > contract = JSON.parse(contractFile)

    > contract.abi
     [ { constant: false,
        inputs: [ [Object] ],
    ...

    > instance = new web3.eth.Contract(contract.abi, "0x41307Ec332Fe70d26Dd9d1C15120B2b826491335")

# Get current message

    > instance.methods.getGreetings().call().then(console.log)
    ...
    > Hello from Devoxx Morocco 2019!

# Change the message (with Promievents)

    > instance.methods.setGreetings("Welcome to Agadir!").send({from: accounts[0]}).on('transactionHash', hash =>{console.log(hash)}).then(console.log)
    0x55ada436caefe4709d7baf9d0d8980516920a6a807167f6780632b9f07956ec7
    { transactionHash:
       '0x55ada436caefe4709d7baf9d0d8980516920a6a807167f6780632b9f07956ec7',
      transactionIndex: 0,

# Read the message

    > instance.methods.getGreetings().call().then(console.log)
    Welcome to Agadir!

# Quit the console

    .exit
