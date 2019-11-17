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
