var fs = require('fs');
var Web3 = require('web3');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

var eth = web3.eth;

eth.personal.newAccount('kek');
eth.personal.unlockAccount(eth.accounts[0], 'kek');
eth.defaultAccount = eth.accounts[0];

// Fetch ABI
var source = fs.readFileSync('contracts.json');
var ScanContractData = JSON.parse(fs.readFileSync('contracts.json')).Scan;
var ScanContract = eth.contract(ScanContractData.abi);

var deployData = {
    from: eth.accounts[0],
    data: ScanContractData.byteCode,
    gas: 3000000
}

var scanContract = ScanContract.new(deployData, function(e, contract) {
    if (e) {
        console.log('Error!', e);
        return
    }

    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
});

storage.setValue(10)
console.log(storage.getValue())
