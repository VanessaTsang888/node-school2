// Variable pets defined and referenced to array of animals.
const pets = ['cat', 'dog', 'rat'];

// For loop that changes each string in the array so that they are plural.
for (let i = 0; i <= 2; i++) {
    pets[i] = pets[i] + 's';
}
// Print out the pets array to the terminal.
console.log(pets);