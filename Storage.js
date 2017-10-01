// miner.start(1)
personal.newAccount('kek');
personal.unlockAccount(eth.accounts[0], 'kek');
eth.defaultAccount = eth.accounts[0];

var storageABI = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"data","type":"uint256"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var storageContract = eth.contract(storageABI);
var storageByteCode = '0x6060604052341561000f57600080fd5b60cb8061001d6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063209652551460465780635524107714606c57600080fd5b3415605057600080fd5b6056608c565b6040518082815260200191505060405180910390f35b3415607657600080fd5b608a60048080359060200190919050506095565b005b60008054905090565b80600081905550505600a165627a7a7230582059f1f305baf928f8ca785d2709f885278a92e58e0edccacb6deca9b8666f8c130029';

var storageData = {
    from: web3.eth.accounts[0],
    data: storageByteCode,
    gas: 3000000
}

var storage = storageContract.new(storageData, function(e, contract) {
    if (e) {
        console.log('Error!', e);
        return
    }

    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
})

storage.setValue(10)
storage.getValue()
