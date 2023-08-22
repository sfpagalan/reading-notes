# Read 08: API's

## API Design Best Practices

[Source](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)

1. What does REST stand for?

- REST stands for Representational State Transfer.

2. REST APIs are designed around a ____.

- resources

3. What is an identifier of a resource? Give an example.

- An identifier of a resource is a ​URI (​Uniform Resource Identifier) that uniquely identifies that resource. For example, the URI for a customer order could be "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design".

4. What are the most common HTTP verbs?

- The most common HTTP verbs used in REST APIs are GET, POST, PUT, PATCH, and DELETE.

5. What should the URIs be based on?

- URIs should be based on nouns, representing the resources, rather than verbs representing the operations on the resources.

6. Give an example of a good URI.

- https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design

7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

- considered a bad thing as it can impact performance and increase network overhead.

8. What status code does a successful GET request return?

- A successful GET request returns a status code of 200 (OK).

9. What status code does an unsuccessful GET request return?

- An unsuccessful GET request returns a status code in the 4xx or 5xx range, depending on the specific cause of failure (e.g., 404 for resource not found).

10. What status code does a successful POST request return?

- A successful POST request returns a status code of 201 (Created) or 200 (OK).

11. What status code does a successful DELETE request return?

- A successful DELETE request returns a status code of 200 (OK) or 204 (No Content).

[Home](README.md)
