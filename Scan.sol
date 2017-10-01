pragma solidity ^0.4.15;

contract Scan {

    string public ScanUrl;
    string public ScanFirstName;
    string public ScanLastName;

    bool public ScanIsValid;

    function setValidationStatus(bool isValid) {
        ScanIsValid = isValid;
    }

    function getICImageUri() returns (string) {
        return ScanUrl;
    }

    function getFirstName() returns (string) {
        return ScanFirstName;
    }

    function getLastName() returns (string) {
        return ScanLastName;
    }

    function getValidationStatus() returns (bool) {
        return ScanIsValid;
    }

    function setFirstName(string FirstName) {
        ScanFirstName = FirstName;
    }

    function setLastName(string LastName) {
        ScanLastName = LastName;
    }

    function setICImageUri(string Url) {
        ScanUrl = Url;
    }

}
