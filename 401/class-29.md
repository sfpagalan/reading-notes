# Read 29: Advanced State with Reducers

## Extracting State Logic into a Reducer

[Source](https://react.dev/learn/extracting-state-logic-into-a-reducer)

1. What is the motivation for adding a reducer?

- The motivation for adding a reducer is to introduce more structure and separation of concerns in the component's code, especially when the state updates become complex. It allows you to cleanly separate the logic of how state is updated from the event handlers that trigger those updates.

2. What are actions in the context of a reducer? How are they different than setting state directly?

- In the context of a reducer, actions are objects that describe a single user interaction. They provide information about what type of state update needs to be performed. Actions are different from setting state directly because they are dispatched to the reducer function instead of directly modifying the state value. This separation helps with debugging and testing.

3. What common list operation is useReduce named for, and why?

- useReducer is named for the common list operation of reducing. A reducer function takes an initial state and an action, and it returns a new state by applying the logic defined in the reducer function. This concept is similar to the "reduce" function in functional programming, which iterates over a list and applies an operation to accumulate a final value.

4. When should you switch from useState to useReducer?

- You should switch from useState to useReducer when you often encounter bugs due to incorrect state updates in a component and want to add more structure to its code. useReducer is recommended for complex state update logic. However, you don't have to use reducers for everything. You can mix and match useState and useReducer in the same component based on your specific needs.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)