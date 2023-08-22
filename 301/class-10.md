# Read 10: In memory storage

## Understanding the JavaScript Call Stack

[Source](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4)

1. What is a ‘call’?

- refers to the invocation of a ​function in ​JavaScript. When a function is called, it is pushed onto the ​call stack and its execution begins.

2. How many ‘calls’ can happen at once?

- Only one 'call' can happen at a time on the call stack due to JavaScript's single-threaded nature.

3. What does LIFO mean?

- stands for "Last In, First Out." It means that the last function that was pushed onto the call stack is the first one to be executed and removed once its execution is completed.

4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.

- 
function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function calculate() {
  let num1 = 2;
  let num2 = 3;
  
  let result = multiply(num1, num2);
  result = subtract(result, num1);
  result = add(result, num2);
  
  return result;
}

calculate();

5. What causes a Stack Overflow?

- A ​Stack Overflow occurs when the call stack exceeds its maximum capacity.


## JavaScript error messages

[Source](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

1. What is a ‘reference error’?

- A 'reference error' in JavaScript occurs when you try to access a variable or function that does not exist.

2. What is a ‘syntax error’?

- A 'syntax error' in JavaScript occurs when there is a mistake in the structure or syntax of your code, making it invalid.

3. What is a ‘range error’?

- A 'range error' in JavaScript occurs when you try to manipulate a value that is outside the allowed range or bounds.

4. What is a ‘type error’?

- A 'type error' in JavaScript occurs when you perform an operation on a value of the wrong type, resulting in an unexpected behavior.

5. What is a breakpoint?

- A 'breakpoint' is a point in your code that you set to pause the execution and allow you to inspect variables and step through the code line by line.

6. What does the word ‘debugger’ do in your code?

- The 'debugger' keyword in your code sets a breakpoint, triggering the debugging process and allowing you to step through the code, analyze variables, and find and fix issues.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)
