"use strict"
function getBalance ( myBalance){
        return myBalance;
}

function makeDeposit( depositAmount){
        return depositAmount;
}

function makeWithdraw ( withdrawAmount){
        return myBalance - withdrawAmount;

}

module.exports.balance = getBalance;
module.exports.deposit = makeDeposit;
module.exports.withdraw = makeWithdraw;