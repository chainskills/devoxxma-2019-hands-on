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