# Read 26: Component Based UI

## React Quick Start

[Source](https://react.dev/learn)

1. What are the building blocks of a React app?

- The building blocks of a React app are components. Components are small, reusable pieces of UI that have their own logic and appearance. They can range from small elements like buttons to larger ones like entire pages.

2. What is the difference between an HTML element and a React component?

- The main difference between an HTML element and a React component is that an HTML element represents a specific tag in the HTML markup, while a React component is a JavaScript function that can return markup. React components provide more flexibility and reusability compared to HTML elements.

3. What is JSX and why do we use it?

- JSX is a syntax extension for JavaScript used in React. It allows developers to write markup and JavaScript together, making it easier to create UI components. JSX combines the power of JavaScript with the expressiveness of HTML-like syntax, making component creation more intuitive and efficient.

4. Describe the process of embedding JavaScript expressions in JSX.

- JavaScript expressions can be embedded in JSX by wrapping them with curly braces {}. For example, {myVariable} would insert the value of the myVariable JavaScript variable into the JSX markup.

5. Does React or JSX have any special features for iteration or conditional logic?

- React and JSX provide special features for iteration and conditional logic. React allows for rendering lists by iterating over an array of data and dynamically creating components for each item. It also supports conditional rendering, which means that components can be rendered or not rendered based on certain conditions.

6. How does React know to respond to a user’s inputs?

- React knows to respond to a user's inputs through event handling. React provides a straightforward way to handle events such as clicks or input changes. When an event occurs, the corresponding event handler is triggered in the React component, and React updates the internal state of the component, triggering a re-rendering of the UI.

7. What word indicates that a React component manages data with a Hook?

- The word that indicates that a React component manages data with a Hook is use. Hooks are special functions provided by React, such as useState or useEffect. These Hooks allow components to manage state, handle side effects, and perform other functionalities.

8. How can two react components share data?

- Two React components can share data by lifting the state up to a common parent component. This means that the data and the logic for manipulating that data are moved to a higher-level component that is a parent to both components needing the shared data. The parent component then passes down the data as props to its child components, allowing them to access and use the shared data. This ensures synchronization and consistency between the components.

## Render and Commit

[Source](https://react.dev/learn/render-and-commit)

1. What are the three steps of refreshing a React UI?

- The three steps of refreshing a React UI are triggering a render, rendering the component, and committing to the DOM.

2. How do you trigger updates to a component after the initial render?

- Updates to a component can be triggered by changes in component state or props.

3. Does React recreate DOM nodes on every rerender?

- React does not recreate DOM nodes on every rerender. It efficiently updates only the necessary parts of the DOM.

4. After React has updated the DOM, what still needs to happen before the user sees the change?

- After React has updated the DOM, the changes need to be committed to the actual display for the user to see the change.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)