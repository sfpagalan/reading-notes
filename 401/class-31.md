# Read 31: Context API

## Choosing the State Structure

[Source](https://react.dev/learn/choosing-the-state-structure)

1. Summarize the five principles for structuring state.

- Group Related State: If multiple variables update in tandem, merge them into one.
- No Contradictions: Design state such that its elements do not contradict or "disagree" with one another, minimizing errors.
- Skip Redundant State: Don't store information that can be computed from props or existing state during rendering.
- Eliminate Duplication: Store unique data to avoid sync issues across multiple or nested state variables.
- Flatten the State: Steer clear of deep nesting, as it complicates updates. Stick to a flat structure.

## Passing State Deeply with Context

[Source](https://react.dev/learn/passing-data-deeply-with-context)

1. What problem do Contexts aim to solve?

- Contexts aim to solve the problem of "prop drilling," where props need to be passed through multiple components in order to reach a specific component that requires the prop. Context allows for the passing of information from a parent component to any component in its subtree without the need for explicit prop passing.

2. What is one technique to try before useContext?

- One technique to try before using useContext is passing props or using JSX as children. This can be useful in simpler scenarios where the data doesn't need to be shared across many components or deeply nested in the component tree.

3. What hook complements useContext for complex applications?

- The useReducer hook complements useContext for complex applications. It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)