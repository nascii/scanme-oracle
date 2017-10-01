pragma solidity ^0.4.17;

contract Storage {
    uint256 storedData;

    function setValue(uint256 data) {
        storedData = data;
    }

    function getValue() constant returns (uint256) {
        return storedData;
    }
}
