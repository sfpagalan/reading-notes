# Read 19: AWS: Events

## AWS SQS vs SNS

[Source](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

1. What is the difference betweeen SQS and SNS?

    - The main difference between `​SQS` and `​SNS` is that SNS is a distributed `​publish-subscribe service`, while SQS is a `​distributed queuing service`. In SNS, messages are pushed to subscribers as they are sent by publishers, whereas in SQS, receivers have to poll for messages.

2. What are some use cases for both SNS and SQS?

    - Use cases for SNS include sending `​push notifications` to mobile devices, email recipients, and other distributed services. It can also be used for SMS messaging and supports various endpoints. On the other hand, SQS is useful for decoupling and scaling microservices, distributed systems, and serverless applications. It ensures reliable message delivery and allows for the separation of components in a system.

## AWS SNS and SQS

[Source](https://www.youtube.com/watch?v=mXk0MNjlO7A)

1. Describe how to use SQS and SNS in a “fanout” pattern.
    - SNS is set up with a topic where messages are published.
    - SQS queues are subscribed to this topic, creating multiple SQS subscriptions.
    - When a message is published to the SNS topic, it gets distributed to all the subscribed SQS queues simultaneously.
    - Each SQS queue can then process the message independently, allowing for parallel, scalable processing.

2. Explain how “push notifications” work, using SNS.

    - You configure SNS to act as a messaging hub for sending notifications to subscribed endpoints, such as mobile devices, ​email addresses, or other systems.
    - When a certain event or condition occurs, you publish a notification to the SNS topic.
    - SNS then delivers the notification to all subscribed endpoints instantly, using various delivery protocols (e.g., ​SMS, email, mobile push notifications).
    - The receiving devices or systems process and display the notification to the user in real-time, providing immediate updates or alerts.

## SQS and SNS Basics

[Source](https://www.youtube.com/watch?v=UesxWuZMZqI)

1. How might a large scale, distributed application make use of a Queue system like SQS?

    - Load balancing:
        The application can distribute incoming requests across multiple instances by using a queue to manage and process tasks in a scalable manner.
    - Asynchronous processing:
        Long-running or resource-intensive tasks can be offloaded to a queue, allowing the application to continue processing other tasks without waiting for the completion of each individual task.
    - Decoupling components:
        By using a queue, different components of the application can communicate and exchange messages asynchronously, removing dependencies and enabling independent scaling and fault tolerance.
    - Event-driven architecture:
        Events or notifications can be pushed to a queue, allowing other components of the application to react and process those events, enabling a loosely coupled and scalable architecture. Overall, a queue system like SQS can help enhance the performance, scalability, fault tolerance, and flexibility of a large-scale distributed application.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)