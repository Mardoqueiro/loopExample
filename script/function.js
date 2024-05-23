// Function is a set of statement to be utillises as needed
// Example 1=> function declaration
// function display() {
//     console.log("Hello World");
// }
// function greeting(firstName , lastName) {
//     console.log(`My name is ${firstName} ${lastName}`);
// }
// //Arugment
// greeting('Anushqa', 'Kandan')
// greeting('Mardoquiero', 'Dimbu')

/*
Additional function 
*/
// function addition(num1, num2) {
//     console.log(num1 + num2 );
//     console.log(1 ,3 ,5 ,6);
// }
// addition(6 , 9)
// addition(6 , 9 , 5)
// addition(6 , 9 ,3 ,8)

// function sumOfValues(...numb) {
    // console.log(numb.reduce((curr, n ) => curr + n))
//     console.log(numb.reduce)
// }
// sumOfValues(2, 3)
// sumOfValues(2, 3, 5)
// sumOfValues(2, 3, 5, 9)
// sumOfValues(2, 3, 6, 7, 9)

// function sumOfValues(...numb) {
//     // console.log(numb.reduce((curr, n ) => curr + n))
//     console.log(numb.reduce(addition))
// }
// sumOfValues('Sipho',1,'Jamin', 2, 3,'Leah', 4, 2, 3, 1,'Mardoqueiro')
// function addition(curr, nextV) {
//     return curr + nextV
// }
// function addition(...numbers) {
//     let digit = [];
//     numbers.forEach((value) =>{
//         if (!isNaN(value)) {
//             digit.push(value)
//         }
//     })
//     console.log(digit);
//     console.log(digit.reduce((c, n) => c + n));
// }
// addition('Sipho',1,'Jamin', 2, 3,'Leah', 4, 2, 3, 1,'Mardoqueiro')

// function display(numb1, numb2) {
//     console.log(numb1, numb2)
// }
// display(2, 5)

// function sumOfValues(...numb) {
//     const numericValues = numb.filter(value => typeof value === 'number');
//     console.log(numericValues.reduce(addition, 0));
// }

// function addition(curr, nextV) {
//     return curr + nextV;
// }
// sumOfValues('Sipho', 1, 'Jamin', 2, 3, 'Leah', 4, 2, 3, 1, 'Mardoqueiro');
// let numbers = [8, 9, 4, 2, 7]
// numbers.forEach((value) => {
//     console.log(value);
// })
// Number.forEach((value) => {
//     if (value == 9) {
//         console.log('Nine')
//     }
//     else {
//         console.log(value);
//     }
// })
// for Loop: Best used when you know the exact number of iterations.
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// while Loop: Best used when the number of iterations is not known in advance.
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// forEach Loop: Convenient for array iteration, providing access to each element.
// const array = ['apple', 'banana', 'cherry'];
// array.forEach(function(item, index) {
//     console.log(index + ': ' + item);
// });
// for...in Loop: Useful for iterating over the properties of an object.
// const car = {
//     name: 'Nissan',
//     model: 'GTR',
//     city: 'Tokyo'
// };
// for (let key in car) {
//     if (car.hasOwnProperty(key)) {
//         console.log(key + ': ' + car[key]);
//     }
// }
// AudioDestinationNode(3, 4)
// let addition = (num1, num2) => {
//     console.log(num1 + num2);
// }
// const data = [9, 'Peter', 'Mardoqueiro', 3, 4, 11, 'Mara', 'Mark'];

// data.forEach((people) => {
//   if ((typeof people == 'string') && (people.toLowerCase()[0] =='m')) 
//     console.log(people);
// })
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
// }