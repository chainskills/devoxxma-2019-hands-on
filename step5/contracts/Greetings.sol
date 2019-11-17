pragma solidity >=0.5.0 <0.6.0;

contract Greetings {
    string message;
    uint256 serviceFee;
    address payable public owner;

    // Events
    event GreetingsChangedEvent (address indexed _account, string _greetings);
    event NewServiceFeeEvent (uint256 _serviceFee);


    constructor(uint256 _serviceFee) public {
        message = "Hello from Devoxx Morocco 2019!";
        serviceFee = _serviceFee;
        owner = msg.sender;
    }

    // Setters
    function setGreetings(string memory _message) payable public {
        bytes memory newMessage = bytes(_message);
        require(newMessage.length > 0 , "The message should not be empty!");

        require(msg.value == serviceFee, "Your service fee is not correct!");
        
        message = _message;
        
        emit GreetingsChangedEvent(msg.sender, _message);
    }

    function setServiceFee(uint256 _serviceFee) public {
        require(msg.sender == owner , "Your are not the owner of this contract!");
        
        serviceFee = _serviceFee;
    
        emit NewServiceFeeEvent(_serviceFee);
    }

    function transferEarning() public {
        require(msg.sender == owner , "Your are not the owner of this contract!");
        
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