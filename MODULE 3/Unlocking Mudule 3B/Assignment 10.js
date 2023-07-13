//create a function that filters out negetive numbers
var numbers = [2,5,7,-4, -5,-7,-8,-9]
numbers=numbers.filter(function(x){
    return x < 1
});
console.log(numbers);