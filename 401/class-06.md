# Read 6: Authentication

## Securing Passwords

[Source](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

1. Explain to a non-technical friend how you would safely hash and store a password.

- Safely hash and store a password by using a strong and secure hashing algorithm like bcrypt, generating a hash from the password, and securely storing it in a database.

2. What is Bcrypt?

- Bcrypt is a popular password hashing algorithm that is designed to be slow and computationally intensive, using a salt to enhance security.

3. Why might you use something like Bcrypt?

- Bcrypt is commonly used to enhance password security by making it resistant to brute-force attacks, protecting passwords even in the event of a database compromise, and allowing for the adjustment of the hashing cost factor.


## Basic Auth

[Source](https://en.wikipedia.org/wiki/Basic_access_authentication)

1. What is Basic Authentication?

- Basic Authentication is a method used in HTTP transactions to provide a username and password for authentication. It is a simple mechanism that allows a user agent, such as a web browser, to authenticate itself to a server by sending the credentials in the HTTP headers.

2. What properties are necessary in the header of a Basic Auth request?

- The header of a Basic Auth request should include the "Authorization" field. This field consists of the authentication method, which is "Basic" in this case, followed by a space. The encoded username and password are then appended to the field. For example: "Authorization: Basic ".

3. How are `username:password` in Basic Auth encoded?

- In Basic Auth, the "username:password" combination is encoded using Base64 encoding. First, the username and password are combined with a single colon (":") separator. The resulting string is then encoded into an octet sequence using Base64. The server may also suggest using UTF-8 encoding for this process by sending the "charset" parameter in the "WWW-Authenticate" header. The final encoded string is prepended with the authentication method, resulting in the complete Authorization header.


## OWASP auth cheatsheet

[Source]()

1. Define the authentication process to a non-technical recruiter.

- The authentication process is the way we verify the identity of someone or something accessing our system. It involves confirming that the user or entity is who they claim to be by asking for a username or ID, along with private information that only they should know. This helps ensure that only authorized individuals can access our system.

2. How should your error messaging respond (both HTTP and HTML)? Why?

- Error messaging in authentication should respond with a generic error message regardless of whether the user ID or password was incorrect, the account does not exist, or the account is locked or disabled. This helps prevent attackers from easily guessing valid user IDs or passwords by disguising whether the error is due to an incorrect ID, incorrect password, or non-existent account. It also helps protect user privacy by not revealing specific details about the authentication process.

3. Bookmark this link also and consider OWASP fundamentals any time you interact with authentication. Applications developed with security in mind from inception have fewer vulnerabilities throughout their lifecycle.

- By following OWASP guidelines and best practices, we can ensure that our authentication implementation is more secure and resilient to potential attacks.


## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)