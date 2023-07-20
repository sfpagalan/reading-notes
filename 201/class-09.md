# Read 09: Forms and JS Events

## HTML Forms

[Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form) [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)

1. Why are forms so important in web development?

- Forms are cruicial in web developing because they make data collection easier, enable user interaction, allow users to return feedback, which is all vital to the website's functionality and user experience.

2. When designing a form, what are some key things to keep in mind when it comes to user experience?

- Factors like simplicity and clarity, layout and navigation. Having clear instructions and sending error messages.

3. List 5 form elements and explain their importance.

- label element: useful for screen reader users, will read out lout label when the user focus on the input element.
- select element: defines a drop-down list.
- option element: defines an option that can be selected.
- textarea element: defines a multi-line input field(text area).
- button element: defines a clickable button.

## Learn JS

[Introduction To Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

1. How would you describe events to a non-technical friend?

- It's like pressing a button on a remote control, this triggers a specific action. Events is an action that happens in response to something.

2. When using the addEventListener() method, what 2 arguments will you need to provide?

- What event to listen for like click, submit, or send.
- What function to be executed when specific event happens.

3. Describe the event object. Why is the target within the event object useful?

- This contains information about the event that occured. The target within the event give access that will trigger the event.

4. What is the difference between event bubbling and event capturing?

- Event bubbling is when an event happends on a nested element which will trigger the most innermost element first the to the parent elements.
- Event capturing works backwards with the events being triggered starting with the outermost element and then to the innermost element.