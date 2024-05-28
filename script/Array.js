// ======How to create an array======
// Array literal
let numbers = [9, 3, 8, 11, 24]
console.log(numbers);
// Add a new
numbers.push(20, 'Mordy');
console.log(numbers);
// Remove the last elements
numbers.pop()
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
// find an element
console.log(numbers.find(value => value == 9));
// 
console.log(numbers.findIndex(value => value == 9 ));
// console.log('=====Retur)
let data = new Array(1, 6, 5, 9, 11)
function middleElement(arr) {
    let index = Math.trunc((arr.length - 1)/2)
    if (index % 2 ==0) {
        console.log(arr[index]);
    } else {
        console.log(arr[index]), (arr[index + 1]);;
    }
}
middleElement(data)

// // Array constructor
// let data = new Array('Mordy', 'Test', 25, 17)
// // Array.of()
// let myArr1 = Array.of(9, 2, 4)
// // Array.from
// let myArr2 = Array.from(numbers)
// // Array.fill()
// let emoji =  new Array(4).fill('🎭')

// let oddNumbers = [5, 7]
// // how to combine arrays
// let combArr = numbers.concat(oddNumbers)
// console.log(combArr);
// // Using spread operator
// let combArr2 = [...numbers, ...oddNumbers]
// console.log(combArr2);
// console.log('sorting');
// 
// numbers.sort(function(a, b){return a-b});
// numbers.sort((a, b) => a - b);

// console.log(numbers)
// let sortNumbers = 
//     numbers.toSorted((c, n)=> c-n)
// console.log(sortedNumbers);
// make use of filter == search

console.log('filter()');
console.log(numbers.filter(value => value% 2 >= 1));

// MAP
console.log('Original array');
console.log(numbers);
console.log('map()');
console.log(numbers.map(double));

function double(c) {
    return c * 2
}