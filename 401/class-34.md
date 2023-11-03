# Read 34: API Integration

## Review API Server Build

[Source](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)

1. Explain the different between a query string parameter and a path parameter.

- A query string parameter is added to the URL after a question mark (?), such as ?category=electronics, and it is used to specify additional information for filtering or searching data. On the other hand, a path parameter is a part of the URL itself, typically indicated by a placeholder value, such as /products/{id}, where {id} can be replaced with an actual value. Path parameters are used to identify a specific resource or entity.

2. What would our API URL with a path id parameter be given the following information:
    1. Domain: http://our-site.com
    2. v3
    3. model name: stuff
    4. id: things

- The API URL with a path id parameter given the provided information would be: http://our-site.com/v3/stuff/things.

3. We have created a dynamic API with an “interface”. Describe how that interface works to a non-technical friend.

- In simple terms, the dynamic API with an "interface" is a system that allows different parts of a web application to communicate and exchange information. It acts as a bridge between the front end (client-side) and the back end (server-side) of the application. This interface defines a set of rules and conventions that both sides follow to send and receive data. It ensures that the client-side can request information and perform actions on the server-side and receive the appropriate response. The API interface helps to organize and manage the flow of data, making it easier for the application to function smoothly.

## Review Auth Server Build

[Source](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/)

1. Describe how you would use middleware to implement basic and bearer auth.

- For basic authentication, we would use the basic-auth middleware. This middleware would extract the username and password from the request and validate them against a user database or any other authentication source.
For bearer authentication, we would use the express-jwt ​middleware. This middleware would check the incoming requests for a valid ​JWT (JSON Web Token) in the Authorization header. It would verify the token's signature and validate its expiration, and then authenticate the user based on the information contained in the token.

2. Describe the handshake necessary to implement OAuth.

- Implementing ​OAuth involves a handshake process between the client application, the user, and the server providing the OAuth service. Here are the steps of the handshake:

The client application redirects the user to the server's OAuth authorization endpoint.
The user is presented with a login page on the server's domain and provides their credentials.
The server authenticates the user and asks for their consent to grant the client application access to their data.
If the user consents, the server generates an authorization code and redirects the user back to the client application with this code.
The client application exchanges this authorization code with the server for an access token.
The server verifies the authorization code, and if valid, issues an access token to the client application.
The client application can use this access token to make authorized requests to the server's protected resources on behalf of the user.

3. Describe how Role Based Access Control works to a non-technical friend.

- Role Based Access Control (RBAC) is a system that manages and controls user permissions based on their assigned roles. Here's a non-technical explanation:

Imagine you have a group of people working together on a project. Each person has different responsibilities and tasks they can perform.
In RBAC, each person is assigned a specific role based on their position or job function, like an "admin," "manager," or "user."
Each role has a set of permissions associated with it, defining what actions or operations can be performed.
When someone tries to access a resource or perform an action, the system checks their assigned role and verifies if they have the necessary permission.
If they have the required permission for that role, they can proceed. Otherwise, they will be denied access.
This way, RBAC ensures that only authorized individuals can perform certain actions or access specific parts of a system, maintaining security and control within the organization.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)