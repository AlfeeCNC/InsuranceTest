'use strict';
var express = require('express');
var router = express.Router();

var Web3 = require('web3');
const testnet = 'https://ropsten.infura.io/v3/b4946971370c4cde80aa1dfaeb1989a0';
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
var contractAddress = '0xaff5fb89c81f9b5566d49347e4880e3cf4a7e21c';
var contractABI = [{ "constant": false, "inputs": [{ "name": "CopyMatch", "type": "address" }], "name": "proxy_ActiveStrategy", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signature", "type": "bytes" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_nonce", "type": "uint256" }], "name": "transferPreSigned", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "hash", "type": "bytes32" }, { "name": "sig", "type": "bytes" }], "name": "recover", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "getNonce", "outputs": [{ "name": "nonce", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "CopyMatch", "type": "address" }], "name": "proxy_inActiveStrategy", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signature", "type": "bytes" }, { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_nonce", "type": "uint256" }], "name": "approvePreSigned", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "Initial_Supply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "CopyMatch", "type": "address" }, { "name": "addrCopyTrader", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "endAmount", "type": "uint256" }], "name": "proxy_endCommit", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signature", "type": "bytes" }, { "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_nonce", "type": "uint256" }], "name": "decreaseApprovalPreSigned", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signature", "type": "bytes" }, { "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_nonce", "type": "uint256" }], "name": "increaseApprovalPreSigned", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signature", "type": "bytes" }, { "name": "_to", "type": "address" }, { "name": "_controlId", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_nonce", "type": "uint256" }, { "name": "CopyMatch", "type": "address" }, { "name": "addrCopyTrader", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "amount", "type": "uint256" }, { "name": "otherData", "type": "string" }, { "name": "endAmount", "type": "uint256" }], "name": "controlPreSigned", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "CopyMatch", "type": "address" }, { "name": "addrCopyTrader", "type": "address" }, { "name": "id", "type": "uint256" }, { "name": "amount", "type": "uint256" }, { "name": "otherData", "type": "string" }], "name": "proxy_createCommit", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_token", "type": "address" }, { "name": "_functionSig", "type": "bytes4" }, { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_nonce", "type": "uint256" }], "name": "recoverPreSignedHash", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "ControlPreSigned_Transfer_Fee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": true, "name": "delegate", "type": "address" }, { "indexed": false, "name": "_controlId", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "fee", "type": "uint256" }], "name": "ControlPreSigned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "TransferPreSigned_Transfer_Fee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": true, "name": "delegate", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "fee", "type": "uint256" }], "name": "TransferPreSigned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": true, "name": "delegate", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "fee", "type": "uint256" }], "name": "ApprovalPreSigned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "existingOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "transferOwner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }]
var contract = new web3.eth.Contract(contractABI, contractAddress);

router.post('/', function (req, res) {
    var pool = req.connection;
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM user_info WHERE user_id = ?', [req.session.user_id], function (err, rows) {
            if (err) {
                res.render('error', {
                    message: err.message,
                    error: err
                });
            }
            else {
                var wallet_address = rows[0].user_wallet_address;
                var num_of_tokens = contract.balanceOf.call(wallet_address);
                num_of_tokens = num_of_tokens / Math.pow(10, 18);
                var tag = 0;

                if (num_of_tokens < req.body.tokens_to_cash) {
                    var warn_not_enough_token = "Your account does not have enough tokens";
                    tag = 1;
                }

                var num_of_wei = web3.eth.getBalance(wallet_address); //Will give value in.
                num_of_wei = web3.toDecimal(num_of_wei);
                num_of_wei = web3.fromWei(num_of_wei, 'ether');
                if (num_of_wei < 0.001) {
                    var warn_not_enough_ether = "Your account does not have enough ethers to pay transaction fee";
                    tag = 1;
                }

                contract.getNonce(wallet_address, function (error, nonce) {
                    if (!error) {
                        nonce = Number(nonce) + Number(1)
                        res.render('currency_exchange/tokens_to_cash/confirm_tokens_to_cash', {
                            session: req.session.user_id,//???????P???_TOP NAV BAR ?????????Logout & Member Info
                            total_exchange: req.body.tokens_to_cash,
                            warn_not_enough_token: warn_not_enough_token,
                            warn_not_enough_ether: warn_not_enough_ether,
                            tag: tag,
                            nonce: nonce

                        });
                    } else {
                        console.log(error);
                    }
                });


            }

        })

        connection.release();
    });

});

module.exports = router;