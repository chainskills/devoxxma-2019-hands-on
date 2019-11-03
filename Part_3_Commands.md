# Part 3: Commands

## Go to the project


    $ cd ~/DevoxxMA2019/devoxxma2019-greetings-truffle


## Open code on Visual Studio Code


    $ code .


## Create test/GreetingsTest.js


    const greetingsContract = artifacts.require('Greetings');
    
    // test suite
    contract('Greetings -> using Truffle abstraction', async accounts => {
      let contractInstance;
      const defaultMessage = 'Hello from Devoxx Morocco 2019!';
      const newMessage = 'Hello from Agadir!';
    
      before('setup contract for each test', async () => {
        contractInstance = await greetingsContract.deployed();
      });
    
      it('should let us get the initial message', async () => {
        // check that we have properly deployed our contract
        assert.equal(
          await contractInstance.getGreetings(),
          defaultMessage,
          'The default greetings message shoud be ' + defaultMessage
        );
      });
    
      it('should let us change the initial message', async () => {
        // change the greetings message
        await contractInstance.setGreetings(newMessage, {
          from: accounts[1]
        });
    
        // check that we have properly deployed our contract
        assert.equal(
          await contractInstance.getGreetings(),
          newMessage,
          'The new greetings message shoud be ' + newMessage
        );
      });
    });


## Run the test suite


    % truffle test --network ganache 


## Test script compliant with Mocha

**Change timeout in ‘truffle-config.js’**


    ...
     // Set default mocha options here, use special reporters etc.
      mocha: {
        timeout: 100000
      },
    ...

**Create Mocha test suite test/GreetingsTest-Mocha.js**



    const Greetings = artifacts.require('Greetings');
    
    // test suite
    describe('Greetings -> compliant with Mocha', () => {
      let accounts;
      let contractInstance;
      const defaultMessage = 'Hello from Devoxx Morocco 2019!';
      const newMessage = 'Hello from Agadir!';
    
      before(async () => {
        accounts = await web3.eth.getAccounts();
        contractInstance = await Greetings.new();
      });
    
      it('should let us get the initial message', async () => {
        // check that we have properly deployed our contract
        assert.equal(
          await contractInstance.getGreetings(),
          defaultMessage,
          'The default greetings message shoud be ' + defaultMessage
        );
      });
    
      it('should let us change the initial message', async () => {
        // change the greetings message
        await contractInstance.setGreetings(newMessage, {
          from: accounts[1]
        });
    
        // check that we have properly deployed our contract
        assert.equal(
          await contractInstance.getGreetings(),
          newMessage,
          'The new greetings message shoud be ' + newMessage
        );
      });
    });


## Run the test suite


    % truffle test --network ganache 


## Run a specific test suite


    % truffle test test/Greetings.js --network ganache 


## Completed project

Clone the project with the tag step1:


    https://github.com/chainskills/devoxxma2019-greetings-truffle
    
    git clone git@github.com:chainskills/devoxxma2019-greetings-truffle.git --branch step2 --single-branch

