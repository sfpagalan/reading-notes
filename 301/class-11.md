# Read 11: MongoDB and Mongoose

## nosql vs sql

[Source](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

Fill in the chart below with five differences between SQL and NoSQL databases:

|   SQL                 |   NoSQL   |
|-----------------------|-----------|
|Table-based structure  |Document-based, key-value pairs, graph databases, or wide-column stores |
|Predefined schema |Dynamic schema for unstructured data |
|Vertically scalable |Horizontally scalable |
|Good for complex queries, less powerful than SQL |Less suited for complex queries |
|Not the best fit for hierarchical data storage	|Preferred for hierarchical data storage |

1. What kind of data is a good fit for an SQL database?

- follows a predefined schema, such as ​tabular data with relationships.

2. Give a real world example.

- a e-commerce website's product catalog, with tables for products, categories, and orders, all connected through relationships.

3. What kind of data is a good fit a NoSQL database?

- unstructured or semi-structured data that doesn't adhere to a fixed schema, such as ​JSON documents or ​key-value pairs.

4. Give a real world example.

- a ​social media platform's user profiles, where each profile can have varying fields and nested data structures.

5. Which type of database is best for hierarchical data storage?

- best suited for hierarchical data storage due to their flexible schema and support for nested data structures.

6. Which type of database is best for scalability?

- SQL databases are vertically scalable and can handle increased load by increasing the server's hardware capacity.
- NoSQL databases, on the other hand, are horizontally scalable and can distribute the load across multiple servers, making them better suited for scalability in terms of large-scale applications or handling big data.


## sql vs nosql (Video)

[Source](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

1. What does SQL stand for?

- Structured Query Language

2. What is a relational database?

- a type of database that organizes data into ​tables with predefined structures and enforces relationships between tables.

3. What type of structure does a relational database work with?

- a relational database works with a tabular structure, where data is stored in rows and columns within tables.

4. What is a ‘schema’?

- a 'schema' in the context of a relational database refers to the structure or blueprint that defines the organization, relationships, constraints, and attributes of the data in the database.

5. What is a NoSQL database?

- a type of database that provides a flexible and scalable approach to store and retrieve large volumes of data that doesn't require a fixed schema like traditional relational databases.

6. How does it work?

- in a NoSQL database like MongoDB, data is stored in collections, and each collection contains documents.

7. What is inside of a MongoDB database?

- inside a MongoDB database, there are collections of documents that store various types of data.

8. Which is more flexible - SQL or MongoDB? and why.

- MongoDB is generally considered more flexible than SQL databases because it allows for dynamic and evolving data structures without the need for predefined schemas.

9. What is the disadvantage of a NoSQL database?

- disadvantage of a NoSQL database, including MongoDB, is that it may not be suitable for complex querying and handling data relationships.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)