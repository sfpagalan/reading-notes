# Read 27: useState() Hook

## Thinking in React
[Source]()

1. Summarize the five steps of thinking in react.

- The process of building a React app involves several steps. First, we need to break the UI into a component hierarchy by identifying the different components and subcomponents. Then, we build a static version of the app by creating reusable components that render the UI based on the data model. After that, we identify the minimal representation of UI state, which includes the search text and checkbox value in this example. The state is stored in a common parent component called FilterableProductTable. Next, we determine where the state should live, which in this case, is in the FilterableProductTable component. Finally, we add inverse data flow to allow the form components to update the state in the FilterableProductTable, thus making the app interactive. By following these steps, we can effectively build a React app.

## State: A Component’s Memory
[Source]()

1. What is one reason a local variable isn’t sufficient for managing a React component?

- A local variable isn't sufficient for managing a ​React component because it doesn't persist between renders and changes to it won't trigger re-rendering of the component.

2. What is the argument to the useState hook, and what are the two parts of its return array?

- The argument to the ​useState hook is the initial value of the state variable. The two parts of its return array are the current state value and the function to update the state.

3. How can Component A access state from Component B?

- Component A cannot directly access the state of ​Component B. To share state between components, you can lift the state up to a common parent component and pass it to both components as props.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)