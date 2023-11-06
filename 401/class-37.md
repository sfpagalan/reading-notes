# Read 37: Redux - Combined Reducers

## Multiple Reducers Example

[Source](https://www.youtube.com/watch?v=gBER4Or86hE)

1. Why create multiple reducers?

- Multiple reducers are created in Redux to handle different pieces of information in the state. This helps in organizing the code and managing different parts of the application state separately.

2. How would you combine multiple reducers?

- To combine multiple reducers in Redux, we can use the combineReducers function provided by the ​Redux library. This function takes an object of reducers as input and returns a single root reducer.

3. How will you manage state as an immutable object? why?

- In Redux, it is recommended to manage state as an immutable object. This means that instead of directly mutating the state, we should create a new state object when making changes. Immutable state helps maintain the predictability and maintainability of the code by preventing unintentional mutations and simplifying debugging processes.

## Redux Docs: Using Combined Reducers

[Source](https://redux.js.org/usage/structuring-reducers/using-combinereducers/)

1. `combineReducers` is a utility function to simplify the most common use case when writing ___ _____ .

- combineReducers is a utility function to simplify the most common use case when writing Redux reducers.

2. Explain how `combineReducers` assembles the new state tree.

- combineReducers assembles the new state tree by calling each slice reducer with its current slice of state and the current action. Each slice reducer has the opportunity to respond and update its own slice of state. The updated slices from all slice reducers are then combined into the new state object.

3. How would you define initial state in an app using `combineReducers`?

- First, Provide preloadedState as the second argument to the createStore function, which initializes the store with previously persisted state. Alternatively, the root reducer can return the initial state value when the state argument is undefined, allowing to define the initial state within the reducer itself.

## Redux Docs: Combined Reducer Syntax

[Source](https://redux.js.org/api/combinereducers/)

1. Why will you want to split your reducing functions as your app becomes more complex?

- Splitting the reducing functions becomes necessary as the app becomes more complex because it helps in organizing and managing independent parts of the state. It allows different reducers to handle different sections of the state, making it easier to manage the overall state of the application.

2. The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.

- The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function that can be passed to createStore.

3. What is a popular convention when naming reducers?

- A popular convention when naming reducers is to name them after the state slices they manage. This convention allows the use of ES6 property shorthand notation when combining reducers.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)