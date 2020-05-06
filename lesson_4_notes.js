/*
Write a program that uses this array to create an object 
where the names are the keys and the values are the positions in the array 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObject = {};

flintstones.forEach((name, index) => {
  flintstonesObject[name] = index;
});

console.log(flintstonesObject);
*/

////////////

/* add all of the ages from the Munster family object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let youngestMunster;
let agesArr = Object.values(ages);

youngestMunster = Math.min(...agesArr);
console.log(youngestMunster);

ages['Sven'] = 3;
console.log(ages);


youngestMunster = Math.min(...agesArr);


console.log(agesArr);
console.log(youngestMunster);
*/

//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

let charsInStatement = statement.toLowerCase().split('').filter(char => char !== ' ');
let statementTally = {};

charsInStatement.forEach(char => {
  statementTally[char] = statementTally[char] || 0;
  statementTally[char] += 1;
});

console.log(statementTally);



