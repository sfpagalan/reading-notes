# Read 3: Express REST API

## Review: ES6 Classes

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

1. Classes are a template for creating ____.

- objects

2. Can a class declaration be hoisted?

- No, class declarations have the same temporal dead zone restrictions as "let" or "const" and behave as if they are not hoisted.

3. How would you describe a constructor and contextual “this” to a non-technical friend?

- A constructor is a special function inside a class that is automatically called when we create a new object based on that class.

## Using Express Routing

[Source](https://expressjs.com/en/guide/routing.html)

1. Within Express, what does routing refer to?

- refers to how an application's endpoints (URIs) respond to client requests.

2. What is the difference between a route path and a route method?

- route path in Express defines the endpoint or URL pattern at which requests can be made. It can be a string, string pattern, or regular expression. On the other hand, the route method corresponds to the HTTP method used in the request, such as GET, POST, PUT, etc. It is used to handle the specific HTTP method for a given route path.

3. When is it appropriate to add next as a parameter to a route handler and what must you do if next has been passed to your middleware as a parameter?

- It is appropriate to add next as a parameter to a route handler or middleware when you want to pass control to the next matching route or middleware function.

## Express Routing

[Source](https://www.digitalocean.com/community/tutorials/learn-to-use-the-new-router-in-expressjs-4)

1. What is an Express Router?

- a feature in Express.js that allows us to create modular, mountable route handlers. It helps in organizing and separating different parts of our application's routes and helps in handling requests and middleware in a more efficient and structured way.

2. By what mean do we initialize express.Router() in an express server?

- The express.Router() is initialized by calling the express.Router() function in an ​Express server.

3. What do we use route middleware for?

- Route middleware in Express is used to perform certain actions or checks before a request is processed.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)