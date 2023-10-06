# Read 18: AWS: API, Dynamo and Lambda

## AWS API Gateway Overview

[Source](https://www.serverless.com/guides/amazon-api-gateway)

1. What is Amazon API Gateway?

- Amazon API Gateway is a managed service that allows developers to define the HTTP endpoints of a ​REST API or a ​WebSocket API and connect them with the corresponding backend business logic.

2. Why is Amazon API Gateway an important part of the Serverless ecosystem?

- API Gateway is an essential part of the ​Serverless ecosystem as it enables the execution of ​Serverless functions directly in response to HTTP requests, allowing for a truly serverless architecture for web applications.

3. How does API Gateway integrate with other AWS services?

- API Gateway integrates with other AWS services such as AWS Lambda, AWS SNS, and Amazon Cognito, enabling fully managed authentication, authorization, and detailed metrics for API requests.

## AWS API Gateway

[Source](https://aws.amazon.com/api-gateway/)

1. What are the some benefits of using Amazon API Gateway?

- Some benefits of using ​Amazon API Gateway include efficient ​API development with ​support for ​multiple versions, ​performance at any scale with low-latency API requests, cost savings with tiered pricing, easy monitoring through the API Gateway dashboard, and flexible security controls with IAM and Amazon Cognito.

2. What two API types might you choose from?

- The two API types you can choose from are HTTP APIs and REST APIs. HTTP APIs are optimized for serverless workloads and HTTP backends and are more cost-effective. REST APIs are suitable when API proxy functionality and management features are required in a single solution.

## AWS DynamoDB Guide

[Source](https://www.dynamodbguide.com/what-is-dynamo-db/)

1. What is DynamoDB?

- ​DynamoDB is a hosted NoSQL database offered by ​Amazon Web Services (​AWS). It provides reliable performance, a managed experience, and a small, simple API. It is suitable for applications with large data volumes and strict latency requirements.

2. Under what circumstances would you recommend DynamoDB over MongoDB?

- Applications with large data sets and strict latency requirements: DynamoDB offers predictable latency even for large data sets, whereas MongoDB's performance can be affected by JOINs and advanced SQL operations.
- Data sets with simple, known access patterns: DynamoDB's simple key-value access patterns make it a fast and reliable choice, especially for applications generating recommendations for users.

## AWS DynamoDB

[Source](https://aws.amazon.com/dynamodb/)

1. Explain to a non-technical friend how DynamoDB works.

    In `the world of One Piece`, think of DynamoDB as a specialized `"Nico Robin Library."`

    `Nico Robin`, a character in One Piece, has the unique ability to create extra limbs from her body, allowing her to quickly access and manipulate information in a very organized and efficient manner. Her "library" contains countless books, each labeled with a unique identifier.
    - `Key-Value Pairs`: In DynamoDB, data is stored in key-value pairs. Similarly, in the Nico Robin Library, each book corresponds to a unique piece of information, and the book's title serves as the key.
    - `Data Retrieval`: When you need to retrieve specific information from the Nico Robin Library, you simply tell her the title of the book (the key), and she quickly retrieves it from her library. This is similar to how DynamoDB uses keys to quickly find and retrieve data.
    - `Scalability`: Just as DynamoDB can handle a large amount of data and traffic, Nico Robin's library can magically expand to accommodate an ever-increasing collection of books and information. It can adapt to the needs of the moment without slowing down.
    - `Security and Reliability`: The Nico Robin Library takes security seriously. It has magical safeguards to protect its contents, and Nico Robin can create duplicate books as backups. Additionally, if one part of her library were to somehow become inaccessible, she can retrieve the same information from other parts, ensuring data availability, much like DynamoDB's data replication.

## Dynamoose

[Source](https://dynamoosejs.com/getting_started/Introduction)

1. What is Dynamoose?

- Dynamoose is a modeling tool for ​Amazon's ​DynamoDB, inspired by ​Mongoose.

2. What are some key features of Dynamoose?

- Key features of Dynamoose include type safety, high-level API, easy-to-use syntax, single table design support, data transformation, strict data modeling, support for transactions, powerful conditional/filtering, callback & promise support, and multi-region support.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)