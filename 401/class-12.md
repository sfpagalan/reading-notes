# Read 12: Socket.io

## Web Sockets

[Source](https://en.wikipedia.org/wiki/WebSocket)

1. What is a Web Socket?

- A `​WebSocket` is a computer communications protocol that enables full-duplex communication channels over a single `​TCP` connection. It allows real-time, two-way communication between a web browser (or `​client` application) and a web server with lower overhead than alternatives like `​HTTP` polling.

2. Describe the Web Socket request/response handshake and what happens once the connection is established.

- The `​Web Socket` request/response handshake involves the client sending an HTTP request to the server, requesting an upgrade to the WebSocket protocol. If the server supports WebSocket, it responds with a success status code, indicating the upgrade is accepted. Once the connection is established, both the client and server can send messages to each other without the need for further requests or responses.

3. Web Sockets provide a standardized way for the server to send content to a client without first receiving a ____ from that client.

- Web Sockets provide a standardized way for the server to send content to a client without first receiving a request from that client. This allows for real-time communication where the server can proactively send updates or push notifications to the client without the client explicitly requesting them.

## Socket.io Tutorial

[Source](https://www.tutorialspoint.com/socket.io/)

1. What does the event handler io.on() do?

- The event handler `io.on()` in Socket.IO is used to listen for a specific event on the server-side. It allows you to handle and respond to events sent from the client to the server.

2. Describe some possible proof of life or proof that the code works as expected

- Verify that the server is running and successfully establishing a connection with clients.
- Test the functionality of different events and event handlers to ensure they are triggering and responding as intended.
- Use logging and debugging techniques to track the flow of data and identify any potential errors or issues.
- Test the real-time aspect by sending events and messages between multiple clients and ensuring they are received and processed correctly.

3. What does socket.emit() do?

- The `socket.emit()` method in `​Socket.IO` is used to send a custom event from the server to a specific client. It allows the server to push data to the client and trigger a corresponding event handler on the `​client-side`. The client can then respond or take action based on the received event.

## Socket.io vs Web Sockets

[Source](https://www.educba.com/websocket-vs-socket-io/)

1. What is the difference between WebSocket and Socket.IO? (think Git and GitHub, or OAuth and Auth0).

- WebSocket is a low-level communication protocol that enables bidirectional and persistent communication between clients and servers over a TCP connection. It provides real-time data transfer and remains open all the time.

- Socket.IO is a library that builds on top of WebSocket to provide additional features and simplify real-time communication. Socket.IO abstracts WebSocket connections and adds features like fallback options, automatic reconnection, and room support.

2. When would you use Socket.IO?

- Socket.IO is commonly used when you need a higher-level abstraction of WebSocket and want additional features like fallback options, automatic reconnection, and room support. It is suitable for applications that require real-time communication and need to handle various client environments. Socket.IO simplifies the usage of WebSocket and provides a more convenient API for handling real-time updates.

3. When would you use WebSockets?

- WebSocket is used directly when you require low-level, bidirectional, and persistent communication between a client and a server. It is suitable for applications that demand real-time updates and can handle the complexities of WebSocket connections on their own. WebSocket allows for direct communication between a client and a server over a TCP connection and is often used in scenarios where real-time data transfer and continuous connection are essential.

## OSI Model Explained

[Source](https://www.youtube.com/watch?v=vv4y_uOneC0)

1. What are a couple of key takeaways from this video?

- The OSI Model provides a standardized way to understand and describe the different functions involved in data communication across a network.
- It helps in designing, troubleshooting, and discussing network architectures and protocols.
- 7-layered OSI
    Application Layer
    Presentation Layer
    Session Layer
    Transport layer
    Network Layer
    Data Link Layer
    Physical Layer

## TCP Handshakes Explained

[Source]()

1. Translate the gist of this video to a non-technical friend.

- Imagine you're sending a letter to a friend, but you want to make sure your friend is ready to receive it and reply. You don't just send the letter without confirming, right? That's where the TCP three-way handshake comes in.
- Hello, Can You Receive My Letter?:
    Start by sending a message to a friend saying, "Hey, I want to send you a letter, can you receive it?" This is like the first step in the handshake.
- Yes, I'm Ready for Your Letter:
    Friend responds, "Yes, I'm ready for your letter, and by the way, I'm sending you one too." This is the second step in the handshake.
- Great, Let's Exchange Letters:
    Finally, we reply, "Great, let's exchange letters!" Now we both know that we're ready to send and receive letters, so we can start exchanging them.
- The TCP three-way handshake is a way for two computers to make sure they're ready to send data to each other before they start. It's like a polite introduction before a conversation begins.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)