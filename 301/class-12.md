# Read 12: CRUD

## Status Codes Based On REST Methods

[Source](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

1. In your own words, describe what each group of status code represents:

100’s = Informational
200’s = Success
300’s = Redirection
400’s = Client Errors
500’s = Server Errors

2. What is a status code 202?

- Accepted. indicates that a server has accepted the client's request for processing.

3. What is a status code 308?

- Permanent Redirect. used to indicate that the requested resource has permanently moved to a different URL.

4. What code would you use if an update didn’t return data to a client?

- the appropriate status code to use would be 204 No Content.
- This status code indicates that the update was successful, but there is no new data to send back to the client in the response body.

5. What code would you use if a resource used to exist but no longer does?

- the appropriate status code to use would be 410 Gone. 
- This status code indicates that the resource is permanently gone and will not be available again in the future.

6. What is the ‘Forbidden’ status code?

- The 'Forbidden' status code is 403 Forbidden. 
- This code indicates that the client has successfully authenticated but does not have permission to access the requested resource.

## Build A REST API With Node.js, Express, & MongoDB - Quick

[Source](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?

- For security reasons. 
- By separating sensitive information, like database credentials, into a separate configuration file, we can keep it private and prevent it from being exposed in version control systems.

2. What is middleware?

-  is a function that sits between the server and the route handler in an ​Express application.
- allows us to modify incoming requests or outgoing responses, perform additional tasks, and handle errors.

3. What does app.use(express.json()) do?

- is middleware that is used to parse incoming request bodies with ​JSON payloads.
- responsible for parsing and transforming the request data into a JavaScript object so that we can access it in our application.

4. What does the /:id mean in a route?

- is a route parameter.
- a dynamic part of the route URL, allowing us to use different values for "id" in each request.
- can be accessed in the route handler using req.params.id.

5. What is the difference between PUT and PATCH?

- both HTTP methods used for updating resources in ​RESTful APIs.
- PUT is used to completely replace the existing resource with the new data provided.
- PATCH is used to partially update the existing resource with the provided changes.

6. How do you make a default value in a schema?

- use the default property. For example, name: { type: String, default: "John Doe" } will set the default value for the "name" field as "John Doe" if no value is provided when creating a new document based on this schema.

7. What does a 500 error status code mean?

- is a server-side error response.
- It indicates that an unexpected error occurred on the server and the server cannot fulfill the request.
- It is a generic error message, indicating that there was an internal server error and the exact cause needs to be investigated.

8. What is the difference between a status 200 and a status 201?

- A status 200 means the request was successful, and the server returned the requested resource.
- A status 201 means the request was successfully created, and a new resource was created as a result.
- a status 200 is more generic, while a status 201 specifies that a new resource was created.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)