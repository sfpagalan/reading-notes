# Read 38: Redux - Asynchronous Actions

## async actions

[Source](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

1. Why use Redux middleware?

- Redux middleware is used to handle asynchronous logic and data fetching in a Redux app. It allows for intercepting values passed to dispatch, writing logic with side effects, and accessing getState and dispatch.

2. Consider the Redux Async Data Flow Diagram. Describe the flow in your own words.

- The Redux async data flow involves handling a user event, calling dispatch(), passing in a value that can be intercepted by middleware, making an async call, and then dispatching a real action object when the async call completes.

3. How are we accommodating async in our Redux app?

- Async is accommodated in the Redux app by using the Redux "Thunk" middleware, which allows writing functions that receive dispatch and getState as arguments, enabling asynchronous logic and data fetching.

## thunk middleware

[Source](https://github.com/reduxjs/redux-thunk)

1. Why would you need redux-thunk middleware?

- The redux-thunk middleware is useful because it allows you to write action creators that return a function instead of an action. This is beneficial for handling asynchronous logic and side effects within Redux.

2. Redux Thunk middleware allows you to write action creators that return a ____ instead of an action.

- Redux Thunk middleware allows you to write action creators that return a function instead of an action.

3. Describe how any return value from the inner thunk function will be made available.

- Any return value from the inner thunk function is made available through the dispatch method, allowing for the asynchronous flow to be managed within the Redux store.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)
