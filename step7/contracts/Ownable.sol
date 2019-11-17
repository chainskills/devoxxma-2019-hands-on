pragma solidity >=0.5.0 <0.6.0;

contract Ownable {
    address payable public owner;

    // Modifier
    modifier onlyOwner() {
        // only allowed to the contract's owner
        require(msg.sender == owner, "Your are not the owner of this contract!");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }
}