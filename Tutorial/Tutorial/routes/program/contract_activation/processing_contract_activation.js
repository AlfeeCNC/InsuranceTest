'use strict';
var express = require('express');
var router = express.Router();

var Web3 = require('web3');
var Tx = require('ethereumjs-tx');
const testnet = 'https://ropsten.infura.io/v3/7a262c3183f04a258e05c4bb0d989af0';
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
var token_wallet = "0xD0A8800973cbEF2639EbF79c019c8a1611C7d810";
var token_wallet_private_key = "839868E1D213AD69FD7BD0D6212F302D526D15BB16D2E5236A7EC116716D2C4D";

var contractAddress = '0x72682d0d54c7ED7cdDdAa66E6DD7171f2B9c626C';//Token合約位址
var contractABI =[{"constant":false,"inputs":[{"name":"CopyMatch","type":"address"}],"name":"proxy_ActiveStrategy","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signature","type":"bytes"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"}],"name":"transferPreSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"sig","type":"bytes"}],"name":"recover","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getNonce","outputs":[{"name":"nonce","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"CopyMatch","type":"address"}],"name":"proxy_inActiveStrategy","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signature","type":"bytes"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"}],"name":"approvePreSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Initial_Supply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"CopyMatch","type":"address"},{"name":"addrCopyTrader","type":"address"},{"name":"id","type":"uint256"},{"name":"endAmount","type":"uint256"}],"name":"proxy_endCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signature","type":"bytes"},{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"}],"name":"decreaseApprovalPreSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signature","type":"bytes"},{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"}],"name":"increaseApprovalPreSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signature","type":"bytes"},{"name":"_to","type":"address"},{"name":"_controlId","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"CopyMatch","type":"address"},{"name":"addrCopyTrader","type":"address"},{"name":"id","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"otherData","type":"string"},{"name":"endAmount","type":"uint256"}],"name":"controlPreSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"CopyMatch","type":"address"},{"name":"addrCopyTrader","type":"address"},{"name":"id","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"otherData","type":"string"}],"name":"proxy_createCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"},{"name":"_functionSig","type":"bytes4"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"}],"name":"recoverPreSignedHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ControlPreSigned_Transfer_Fee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"delegate","type":"address"},{"indexed":false,"name":"_controlId","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"ControlPreSigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"TransferPreSigned_Transfer_Fee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"delegate","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"TransferPreSigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"delegate","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"ApprovalPreSigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"existingOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"transferOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
var contract = web3.eth.contract(contractABI).at(contractAddress);

router.post('/', function (req, res) {

    console.log(req.body);
    /*
    res.render('program/processing_contract_activation', {
        date: req.body.date,
        result: "Success",
        tx_hash: tx_hash,
        total_exchange: req.body.num_cash
    });
    */ 

    var pool = req.connection;

    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM user_information WHERE user_id = ?', [req.session.user_id], function (err, rows) {
            if (err) {
                res.render('error', {
                    message: err.message,
                    error: err
                });
            }
            else {

                var wallet_address = rows[0].user_wallet_address; //欲轉出Token之錢包
                var total_exchange = req.body.num_cash;//兌換數量(暫時以付出金額替代,因為1:1)
                var total_exchange = total_exchange * Math.pow(10, 18);//Token decimal=18
                //var count = web3.eth.getTransactionCount(token_wallet);//發幣錢包位址
                //var wallet_private_key = req.body.private_key;

                var sign = req.body.signature;
                var to = token_wallet;
                var val = total_exchange;
                var fee = req.body.fee;
                var nonce = req.body.nonce;
                var count = web3.eth.getTransactionCount(token_wallet);//發幣錢包位址 count不能放外面 不然連續交易兩次會錯(外面不會刷新)


                //Tokens Transfer
                var rawTransaction = {
                    "from": token_wallet,
                    "nonce": web3.toHex(count),
                    "gasPrice": web3.toHex(21000000000),
                    "gasLimit": web3.toHex(200000),
                    "to": contractAddress,
                    "value": "0x0",
                    "data": contract.transferPreSigned.getData(sign, to, val, fee, nonce)//轉100枚Token
                };
                //Token_wallet private_key
                var privateKey = new Buffer(token_wallet_private_key, 'hex');
                var tx = new Tx(rawTransaction);

                tx.sign(privateKey);
                var serializedTx = tx.serialize();

                web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
                    if (!err) {
                        var tx_hash = hash;
                        console.log(hash);
                        /*
                        return res.render('program/processing_contract_activation', {
                            date: req.body.date,
                            result: "Success",
                            tx_hash: tx_hash,
                            total_exchange: req.body.num_cash
                        });
                        */

                        //程式合約

                        //引入program_contractABI,因為這段太長,無法用搜尋>全部取代
                        var program_contractABI = require('../program_contractABI');
                        var program_contractABI = program_contractABI.program_contractABI;
                        var program_contract_address = rows[0].deploy_contract_address;
                        var program_contract = web3.eth.contract(program_contractABI).at(program_contract_address);

                        var count2 = count + 1;
                        var proxy = "0x72682d0d54c7ED7cdDdAa66E6DD7171f2B9c626C";
                        var holder = wallet_address;
                        var sbl = req.body.symbol;
                        var hash_strategy = req.body.hash_strategy;
                        var min_amount = req.body.min_amount;
                        var max_amount = req.body.max_amount;
                        var front_var_fee = req.body.front_var_fee;
                        var front_fix_fee = req.body.front_fix_fee;
                        var back_fee = req.body.back_fee;

                        var createStrategy_rawTransaction = {
                            "from": token_wallet,
                            "nonce": web3.toHex(count2),
                            "gasPrice": web3.toHex(21000000000),
                            "gasLimit": web3.toHex(500000),
                            "to": program_contract_address,
                            "value": "0x0",
                            "data": program_contract.createStrategy.getData(proxy, holder, sbl, hash_strategy, min_amount, max_amount, front_var_fee, front_fix_fee, back_fee)
                        };

                        var createStrategy_tx = new Tx(createStrategy_rawTransaction);

                        createStrategy_tx.sign(privateKey);
                        var createStrategy_serializedTx = createStrategy_tx.serialize();

                        web3.eth.sendRawTransaction('0x' + createStrategy_serializedTx.toString('hex'), function (err, hash2) {
                            if (!err) {
                                var tx_hash2 = hash2;
                                console.log(tx_hash2);
                                connection.query('UPDATE user_information SET is_init = ? , contract_is_active = ? WHERE user_id = ?', ["1", "1", req.session.user_id], function (err, rows) {
                                    if (err) {
                                        return res.render('error', {
                                            message: err.message,
                                            error: err
                                        });
                                    }
                                    else {
                                        return res.render('program/contract_activation/processing_contract_activation', {
                                            date: req.body.date,
                                            result: "Success",
                                            tx_hash: tx_hash,
                                            tx_init: tx_hash2,
                                            total_exchange: req.body.num_cash
                                        });
                                    }
                                });

                            }
                            else {
                                return res.render('program/contract_activation/processing_contract_activation', {
                                    date: req.body.date,
                                    result: "Fail",
                                    total_exchange: req.body.num_cash
                                });
                            }
                        })

                    }

                    else {

                        return res.render('program/contract_activation/processing_contract_activation', {
                            date: req.body.date,
                            result: "Fail",
                            total_exchange: req.body.num_cash
                        });

                    }
                });


            }
        });

        connection.release();

    });
    



});


module.exports = router;