// Task 1
function toJadenCase(string){
    let result = string.split(" ");
    return result.map(function(str){
        return str[0].toUpperCase() + str.substring(1);
    }).join(" ");
    
}

console.log(toJadenCase('How can mirrors be real if our eyes aren"t real')); // How Can Mirrors Be Real If Our Eyes Aren"t Real

// Task 2
function oddOrEven(items){
    let sum = 0;
    items.forEach(function(item){
        sum += item
    })
    if (sum % 2 === 0){
        return "even";
    }
    return "odd";
}

console.log(oddOrEven([0, 1, 5])); // 'even'
console.log(oddOrEven([0, 1, 3])); // 'even'
console.log(oddOrEven([0, -1, -5])); // 'even'
console.log(oddOrEven([0, 1, 4])); // 'odd'
console.log(oddOrEven([0, -1, 2])); // 'odd'
console.log(oddOrEven([0])); // 'even'
