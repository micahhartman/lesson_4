/*
- given an object with multiple key-value pairs
- iterate over each key to select the values that equal 'fruit'
- return the output in a new object
*/

/* let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceList) {
	let produceKeys = Object.keys(produceList);
	let selectedFruits = {};

	for (let counter = 0; counter < produceKeys.length; counter++) {
		let currentKey = produceKeys[counter];
		let currentValue = produceList[currentKey];

		if (currentValue === 'Fruit') {
			selectedFruits[currentKey] = currentValue;
		}
	}
	return selectedFruits;

}
selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

*/
myArray = [1, 4, 5, 10];

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers.push(currentNum * 2);

    counter += 1;
  }

  return numbers;
  console.log(numbers)
}

doubleNumbers(myArray);