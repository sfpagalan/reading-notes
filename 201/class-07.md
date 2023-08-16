# Read 07: Object-Oriented Programming, HTML Tables

## Domain Modeling
[Source](https://github.com/codefellows/domain_modeling#domain-modeling)

1. Explain why we need domain modeling.

- it creates a common understanding among stakeholders, helps manage complexity, ancapsulates knowledge, enables iterative development and validation.

## HTML Table Basics

[Source](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

1. Why should tables not be used for page layouts?

- tables are intended for tabular data and not for structuring layout of a web page. Using tables for layout purpose goes agains the intended semantic meaning of HTML elements leading to a code that is harded to understand and maintain.

2. List and describe 3 different semantic HTML elements used in an HTML *< table >*.

- td(table data): defines a cell of a table that contains data.
- tr(table row): defined a row of cells in a table.
- th(table header): defines a cell as the header of a group of table cells.

## Introducing Constructors

[Source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)

1. What is a constructor and what are some advantages to using it?

- is a special function in JavaScript that is used to create and initialize objects.
- Advantages is: Object Initialization, Code Reusability, Encapsulation.

2. How does the term *this* differ when used in an object literal versus when used in a constructor?

- in object literal, using this inside an object refers to the current object itself and in constructor, using this inside a constructor fuction refers to the newly created instance of the object.


## Object Prototypes Using A Constructor

[Source](https://ui.dev/beginners-guide-to-javascript-prototype)

1. Explain prototypes and inheritance via an analogy from your previous work experience.
*NOTE: This is a very common front end developer interview question*

- In my case, the prototype can be compared to a foundational training program that all medical personnel go through. This program covers the shared knowledge and skill required for patient care, such as basic medical procedures, communication, techniques, and ethical guidelines.
- Inheritance represents how each role inherits the foundational knowledge and skills from the training program while also possessing their own specialized expertise and responsibilities.

[Home](README.md)
