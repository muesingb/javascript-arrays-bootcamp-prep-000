//is an array containing "snickers", "hundred grand", "kitkat", and "skittles"
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//adds an element to the beginning of an array, does not alter the original array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
};
//adds an element to the beginning of an array, alters the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
  return array
};
//adds an element to the end of an array, does not alter the original array
function addElementToEndOfArray(array, element) {
  return [...array, element]
};
//adds an element to the end of an array, alters the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
};
//accesses the element in array at the given index
function accessElementInArray(array, index) {
  return array[index]
};
//returns the array with the first element removed, alters the original array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
};
//removes the first element from the array, does not alter the original array
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
};
//returns the array with the last element removed, alters the original array
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
};
//removes the last element from the array, does not alter the original array
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
};
