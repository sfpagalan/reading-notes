# Read 4: Data Modeling

## nosql vs sql

[Source](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

1. What type of database is the best fit for the complex query intensive environment?

- The best fit for a complex query intensive environment is a SQL database. SQL databases have powerful query languages that allow for complex queries to be easily performed.

2. What type of database is the best fit for hierarchical data storage?

- The best fit for hierarchical data storage is a NoSQL database. ​`NoSQL databases` follow a key-value pair way of storing data, which is well-suited for hierarchical data structures.

3. Describe the differences in scalability between a SQl and NoSQL database as though you were speaking to a non-technical friend.

- SQL databases are vertically scalable, which means they can handle increased load by upgrading the hardware on a single server.
- NoSQL databases are horizontally scalable, which means they can handle increased traffic by adding more servers to the database infrastructure.

## sql modeling techniques

[Source](https://www.essentialsql.com/get-ready-to-learn-sql-7-simplified-data-modeling/)

1. Among data tables, what is a one-to-many relationship and how do we “relate” them?

- we use a foreign key in the second table that references the primary key of the first table.

2. Prior to designing your relational database, it might be useful to ___ a ___ of the database tables and their relationships.

- create a diagram

3. Explain the difference between a primary and foreign key.

- a unique identifier for a record in a table. It ensures that each record is uniquely identified and serves as a reference point for other tables.

## sql vs nosql Video

[Source](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

1. How do we treat keywords and parameters differently in SQL syntax?

- , ​keywords are reserved words that have specific meanings and functionalities in the language. They are used to define the structure of the query and identify specific operations to be performed.
- ​parameters are variables that hold values and are used to provide dynamic input to the query. Parameters can be used to filter, sort, or manipulate data in a query.

2. Define normalization within the context of schemas and data.

- Normalization in the context of ​schemas and data refers to the process of organizing and structuring a database efficiently to minimize redundancy and improve data integrity. It involves breaking down a larger table into smaller, more manageable tables and establishing relationships between them.

3. Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.

- one-to-one, one-to-many, and many-to-many relationships can be understood as different types of relationships between entities in a database.
- one-to-one relationship is like a pair of socks. Each entity in one table is related to exactly one entity in another table, and vice versa. It's a direct and unique relationship.
- one-to-many relationship is like a parent and children. One entity in one table can be associated with multiple entities in another table, but each entity in the second table can only be related to one entity in the first table. It's a hierarchical relationship.
- many-to-many relationship is like a party invitation. Multiple entities in one table can be associated with multiple entities in another table. It's a more complex relationship that requires an intermediary table to connect the two entities.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)