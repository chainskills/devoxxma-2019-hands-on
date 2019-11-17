pragma solidity >=0.5.0 <0.6.0;

import "./Ownable.sol";

contract Greetings is Ownable {
  string message;
  uint256 serviceFee;
  bool public enable;

  // Events
  event GreetingsChangedEvent(address indexed _account, string _greetings);
  event NewServiceFeeEvent(uint256 _serviceFee);

  // Modifiers
  modifier onlyEnable() {
    // only if the contract is enabled
    require(enable == true, "The contract is not enabled!");
    _;
  }

  constructor(uint256 _serviceFee, bool _enable) public {
    message = "Hello from Devoxx Morocco 2019!";
    serviceFee = _serviceFee;
    enable = _enable;
  }

  // kill the smart contract
  function kill() public onlyOwner {
    selfdestruct(msg.sender);
  }

  // Enable the smart contract
  function enableContract() public onlyOwner {
    enable = true;
  }

  // kill the smart contract
  function disableContract() public onlyOwner {
    enable = false;
  }

  // Setters
  function setGreetings(string memory _message) public payable onlyEnable {
    bytes memory newMessage = bytes(_message);
    require(newMessage.length > 0, "The message should not be empty!");

    require(msg.value == serviceFee, "Your service fee is not correct!");

    message = _message;

    emit GreetingsChangedEvent(msg.sender, _message);
  }

  function setServiceFee(uint256 _serviceFee) public onlyOwner {
    serviceFee = _serviceFee;

    emit NewServiceFeeEvent(_serviceFee);
  }

  function transferEarning() public onlyOwner {
    // transfer earning if any
    if (address(this).balance > 0) {
      owner.transfer(address(this).balance);
    }
  }

  // Getters
  function getServiceFee() public view returns (uint256) {
    return serviceFee;
  }

  function getGreetings() public view returns (string memory) {
    return message;
  }
}
