var value = 100;

function addTwoNumbers(numberOne,NumberTwo){
    return numberOne+NumberTwo;
}
    function multiplyTwoNumber(numberOne,NumberTwo){
        return numberOne * NumberTwo;

    }

module.exports.add = addTwoNumbers;
module.exports.multiply = multiplyTwoNumber;
module.exports.value = value;
console.log(module);