// let sentence = 'I love programming'
// // String size
// let numOfChars = sentence.length
// console.log(`Number of characters: ${numOfChars}`);
// // First character
// console.log(`First character : ${sentence[0]}`);
// // Last character
// console.log(`Last character: ${sentence[numOfChars - 1]}`);
// // Check if the first character start with I vs i
// console.log(`Start with I? ${sentence.startsWith('I')}`);
// // Replace love with hate
// console.log(`Replace love with hate: ${sentence.replace('love', 'hate')}`)
// console.
//     log(`Does it end with programming? ${sentence.endsWith('programming')}`)
// console.log(`includes programming? ${sentence.includes('love')}`)
// // Split the sentence into an array of words
// // using a space as the delimiter.
// console.log(sentence.split(' '));

// // Extract a portion of the sentence
// // starting from index 2 up to (but not including) index 6.
// console.log(sentence.slice(7, 14));

// // Get the character at index 13.
// console.log(sentence.charAt(13));

// //  Concatenate the sentence with a new string
// //   " ,I love javascript".
// console.log(sentence.concat(' and javascript'));

// //Find the index of the first occurrence of the string "programming".
// console.log(sentence.indexOf('programming'));

// //  Find the index of the last occurrence of the string "love".
// console.log(sentence.lastIndexOf('o'));

// // Extract a portion of the sentence
// // starting from index 2 up to (but not including) index 6.
// console.log(sentence.substring(2, 6));

// // Convert the sentence to uppercase.
// console.log(sentence.toUpperCase());


// // Remove whitespace from the start of the sentence.
// console.log(sentence.trim());

// // Remove whitespace from the start of the sentence.
// console.log(sentence.trimStart());

// // Remove whitespace from the end of the sentence.
// console.log(sentence.trimEnd());

// console.log(`split(''):`, sentence.split());
// console.log(`slice(' '):`, sentence.slice(2, 6));
// console.log(`charAt(13):`, sentence.charAt(13));
// console.log(`concat(' ,I love javascript'):`, sentence.concat(' ,I love javascript'));
// console.log(`indexOf('love'):`, sentence.indexOf('love'));
// console.log(`lastIndexOf('love'):`, sentence.lastIndexOf('love'));
// console.log(`substring(2, 6):`, sentence.substring(2, 6));
// console.log(`toUpperCase():`, sentence.toUpperCase());
// console.log(`trim():`, sentence.trim());
// console.log(`trimStart():`, sentence.trimStart());
// console.log(`trimEnd():`, sentence.trimEnd());

// let numb1 = 2
// console.log(`Numb1: ${numb1}`);
// let numb2 = numb1++
// console.log(`Numb2: ${numb2}`);
// console.log(`Current value of Numb1 ${numb1}`)

// let numb1 = 4
// console.log(`numb1: ${numb1}`);
// let numb2 = numb1++
// console.log(`numb2: ${numb2}`);

// console.log(Math.random())

// let numb1 = 89.45874
// /* It will simply display a number; in this case, the value of x is 89.3, hence the result is 89.
// Or It will delete the decimal part of a number.
// */
// console.log(Math.trunc(numb1));
// // Round the value close to the lowest number such as 89.5 -> 89 | -89.5 -> -90
// console.log(Math.floor(numb1));
// // Round the value close to the highest number such as 89.5 -> 90 | -89.5 -> -89
// console.log(Math.ceil(numb1));
// // If the decimal number begins with five, round it to the nearest integer value.
// console.log(Math.round(numb1));
// // To round your output to two place precision.
// console.log(numb1.toFixed(2));

// let numbers = [2, 8, 10, 1, 4, 11]
// console.log(`Highest number: ${Math.max(...numbers)}`);
// console.log(`lowest number: ${Math.min(...numbers)}`);

// let arr1 = [1, 4, 5]
// let arr2 = arr1
// let arr2 = Array.from(arr1)
// arr2[0] = 10 
// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);
// Shallow copy
// deep copy
// console.log(...arr1)

// console.log('our lecturer\'s name is Joel');

// (function addition(num1, num2) {
//     console.log(num1 + num2);
// })(2, 3)
// Recursive function
// function loop(cnt, limits) {
//     if (cnt > limit) {
//         return
//     } else {
//         console.log(cnt);
//         loop(cnt + 1, limit)
//     }
// }
// loop(0, 10)

// let cnt = 1
// function repeat(limit) {
//     if(cnt < limit) {
//     console.log(cnt);
//     cnt++
//     repeat(limit--)
//     }
// }
// repeat(10)

// function repeatString(count) {
//     for(let i = 1; i <= count; i++) {
//         console.log(i);
//     }
// }
// repeatString(10);
// repeat(10)

// let person1 = {
//     firstName: 'John',
//     lastName: 'Dimbu'
// }
// let person2 = {
//     firstName
// }
// for (let i in person1) {
//     console.log(`${i} -> ${person1 [i]}`)
// }
// function personDetails(firstName, lastName) {
//     return {firstName, lastName }
// }

// let person1 = personDetails ('Mardoqueiro', 'bruce')
// let person2 = personDetails('Mapule', 'Cena')
// console.log(person1)
// console.log(person2)

// function PersonDetails
//     (name, surname, age) {
//     this.firstName = name
//     this.lastName = surname
//     this.age = age 
// }
// let person1 = new PersonDetails('Mardoqueiro', 'Dimbu', 20)
// let person2 = new PersonDetails('Mapule', 'Mabuza', 26)

// function personDetails(firstName, lastName) {
//     return {
//         firstName, 
//         lastName,
//         display() {
//             console.log (
//                     `first name: ${firstName}\nLast name: ${lastName}`
//         )}
//     }
// }

async function fetchData() {
    let response 
}