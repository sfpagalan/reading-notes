# Read 03: Passing Functions as Props

## React Docs - lists and keys

[Source](https://legacy.reactjs.org/docs/lists-and-keys.html)

1. What does .map() return?

- is used to iterate through an array and create a new array by applying a given function to each element of the original array.

2. If I want to loop through an array and display each value in JSX, how do I do that in React?

- to loop through an array and display each value in JSX, you can use the .map() function along with JSX syntax.

3. Each list item needs a unique ____.

- key

4. What is the purpose of a key?

- to help with efficient updates of the UI when lists of elements are being rendered.

## The Spread Operator

[Source](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

1. What is the spread operator?

- is a JavaScript syntax (...) used to expand elements, arrays, or objects.

2. List 4 things that the spread operator can do.

- Clone arrays and objects
- Combine arrays or objects
- Pass array elements as function arguments
- Create shallow copies with modifications

3. Give an example of using the spread operator to combine two arrays.

- const shop1 = [1, 2, 3];
const shop2 = [4, 5, 6];
const combinedShop = [...shop1, ...shop2];
console.log(combinedShop);


4. Give an example of using the spread operator to add a new item to an array.

- const originalShop = [1, 2, 3];
const newItem = 4;
const newShop = [...originalShop, newItem];
console.log(newShop);

5. Give an example of using the spread operator to combine two objects into one.

- const obj1 = { key1: 'value1' };
<!-- this is an example: const obj1 = {a: 1, b: 2}; -->
const obj2 = { key2: 'value2' };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObj);


## How to Pass Functions Between Components

[Source](https://www.youtube.com/watch?v=c05OL7XbwXU)

1. In the video, what is the first step that the developer does to pass functions between components?

- create the function in the parent component that they want to pass.

2. In your own words, what does the increment function do?

- esponsible for updating a specific state value (in this case, the count of a person) by increasing it by one.

3. How can you pass a method from a parent component into a child component?

- pass it as a prop when rendering the child component. This allows the child component to access and use that method.

4. How does the child component invoke a method that was passed to it from a parent component?

- by using the prop name as a function and passing necessary values (if any).

## Things I want to know more about

React Hooks. Component communication.
