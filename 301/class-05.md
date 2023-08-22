# Read 05: Putting it all together

## React Docs - Thinking in React

[Source]()

1. What is the `single responsibility principle` and how does it apply to components?

- It's a software design principle stating that a component or class should have only one reason to change.

2. What does it mean to build a ‘static’ version of your application?

- Creating a 'static' version means building a non-interactive version of your application, often with mock data and fixed content, to focus on layout and design.

3. Once you have a static application, what do you need to add?

- After the static version, you add code to make it interactive. This involves integrating dynamic features, user input, and data fetching.

4. What are the three questions you can ask to determine if something is state?

- Does it change over time?
- Is it affected by user input?
- Does it need to be remembered for future interactions?

5. How can you identify where state needs to live?

- Look for data that changes, involves user input, or impacts the app's behavior. Find where this data is used and where it logically fits in the component hierarchy.

## Higher-Order Functions

[Source]()

1. What is a “higher-order function”?

- It's a function that takes one or more functions as arguments and/or returns a function as its result.

2. Explore the `greaterThan` function as defined in the reading. In your own words, what is line 2 of this function doing?

- A new function that compares whether a given value is greater than the argument passed to the greaterThan function. It creates a closure that remembers the value to compare against.

3. Explain how either `map` or `reduce` operates, with regards to higher-order functions.

- Map: It transforms each element in a list using a given function and returns a new list with the transformed values.
- Reduce: It iterates over a list, applying a function that accumulates values, and returns a single value as the result of the accumulation.

[Home](https://sfpagalan.github.io/reading-notes/)
