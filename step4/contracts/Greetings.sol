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