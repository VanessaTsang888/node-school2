// Array list of integers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter the above array list to print out the evenNumbers only.
const filtered = numbers.filter(function evenNumbers (number) {
    // all evenNumbers modulus (%) 2 is 0.
    return number % 2 === 0;
})
// Print the result from filtered statement which is to get the evenNumbers only.
console.log(filtered);