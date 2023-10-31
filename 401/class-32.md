# Read 32: Context API - Behaviors

## Scaling Up with Reducer and Context

[Source](https://react.dev/learn/scaling-up-with-reducer-and-context)

1. How do useReducer and useContext work together to simplify state management in a React application? (At least two paragraphs of prose.)

- The combination of useReducer and useContext in a React application simplifies state management by eliminating the need for prop drilling and providing a clean and efficient way to manage the state of complex screens.

    1. Create the context: Use the useReducer hook to get the current state and the dispatch function. Then create separate contexts (TasksContext and TasksDispatchContext) to pass down the state and dispatch function to child components.
    2. Put state and dispatch into context: Import the contexts into the TaskApp component and provide the tasks and dispatch values obtained from useReducer. This makes these values available to all components below TaskApp in the component tree.
    3. Use context anywhere in the tree: Import the TasksContext and TasksDispatchContext in any component that needs access to the state or wants to dispatch actions. By using these contexts, you can access the state and dispatch actions without the need for ​prop drilling.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)