const Greetings = artifacts.require('Greetings.sol');

module.exports = function(deployer) {
  deployer.deploy(Greetings, web3.utils.toBN(10000000000000000), true);
};
