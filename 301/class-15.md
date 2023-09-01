# Read 15: Authentication

## What is OAuth

[Source](https://www.csoonline.com/article/562635/what-is-oauth-how-the-open-authorization-framework-works.html)

1. What is OAuth?

- OAuth is an open-standard authorization protocol that allows secure access to assets without sharing the initial logon credential.

2. Give an example of what using OAuth would look like.

- An example of using OAuth is logging into a website using another website's logon.

3. How does OAuth work? What are the steps that it takes to authenticate the user?

- OAuth works through a series of steps, involving the user's authentication, authorization transaction approval, and the provision of an access token.

4. What is OpenID?

- ​OpenID is an authentication technology that serves as a single sign-in for humans logging into machines, while OAuth is for machines logging into machines on behalf of humans.

## Authorization and Authentication flows

[Source](https://auth0.com/docs/get-started/authentication-and-authorization-flow)

1. What is the difference between authorization and authentication?

- Authentication verifies the identity of a ​`user`, confirming that they are who they claim to be. Authorization, on the other hand, determines what actions and resources a user is allowed to access once authenticated.

2. What is Authorization Code Flow?

- Authorization Code Flow is an OAuth 2.0 flow used for securing web applications or APIs. It involves the exchange of an authorization code for an access token, providing a more secure way for user authentication and authorization.

3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?

- Authorization Code Flow with Proof Key for Code Exchange (PKCE) is an enhanced version of the Authorization Code Flow. It adds an extra layer of security by using a dynamically generated secret called a code verifier to protect against certain types of attacks.

4. What is Implicit Flow with Form Post?

- Implicit Flow with Form Post is an older OAuth 2.0 flow primarily used for browser-based applications. It is less secure than the Authorization Code Flow and is not recommended for new applications. In this flow, the access token is returned directly in the URL fragment.

5. What is Client Credentials Flow?

- Client Credentials Flow is an OAuth 2.0 flow used for server-to-server communication. It allows a client application to authenticate itself and obtain an access token directly from the authorization server, without involving a user.

6. What is Device Authorization Flow?

- Device Authorization Flow (also known as Device Flow) is an OAuth 2.0 flow designed for devices with limited input capabilities. It allows users to authenticate on a separate device (e.g., a smartphone) and then authorizes the limited-capability device to access the resources.

7. What is Resource Owner Password Flow?

- Resource Owner Password Flow (ROPC) is an OAuth 2.0 flow where the user credentials (username and password) are directly sent to the authorization server to obtain an access token. It is generally discouraged due to security risks, but it can be used in specific cases where other flows are not feasible.


## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)