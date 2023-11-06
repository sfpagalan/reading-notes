# Read 36: Application State with Redux

## Dan Abramov Redux Tutorials

[Source](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

1. What is the first principle of Redux?

- The first principle of Redux is to have a single immutable state tree.

2. what is a store and what do we use our reducers for within that store?

- A store in Redux is where the application state is stored, and reducers are used within that store to manage state updates in response to actions.

3. Name three Redux store methods given to us by createStore and describe their use.

- Three Redux store methods provided by createStore are getState() to retrieve the current state, dispatch(action) to trigger state updates, and subscribe(listener) to subscribe to changes in the state and execute a callback function.

4. Explain to a non-technical recruiter what `combineReducers()` does and why it is useful.

- combineReducers() is a ​Redux function that combines multiple reducers into a single reducer. It is useful because it allows you to divide the state management responsibilities into smaller, independent functions, making the codebase more modular and maintainable.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)