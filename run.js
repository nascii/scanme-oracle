/* SOMEWHERE IN THE WORLD */
var fs = require('fs');
var Web3 = require('web3');
var scan = require('scan');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

var eth = web3.eth;
var personal = web3.personal;

personal.newAccount('kek');
personal.unlockAccount(eth.accounts[0], 'kek');
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

scanContract.setFirstName('Vasya', {from: eth.accounts[0]});
scanContract.setLastName('Pupkin', {from: eth.accounts[0]});
scanContract.setICImageUri('ic_image_uri": "https://www.aph.com/community/wp-content/uploads/2014/10/cut.jpg', {from: eth.accounts[0]});

/* IN PROCESSING */

var firstName = scanContract.getFirstName({from: eth.accounts[0]})
var lastName = scanContract.getLastName({from: eth.accounts[0]})
var ICImageUri = scanContract.getICImageUri({from: eth.accounts[0]})

var requestData = {
    "user_info": {
        "first_name": firstName,
        "last_name": last_name
    },
    "ic_image_uri": ICImageUri
}

scan(requestData)
    .then((res) => {
        scanContract.setValidationStatus(res.data.is_valid, {from: eth.accounts[0]})
    })
    .catch(e => console.error(e));
