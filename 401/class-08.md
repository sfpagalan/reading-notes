# Read 8: Access Control (ACL)

## 5 steps to RBAC

[Source](https://www.csoonline.com/article/3060780/security/5-steps-to-simple-role-based-access-control.html)
<!-- the link above does not work. answered by looking for other sources -->
Below is a new source i found online.
[Source](https://www.cybersecurity-insiders.com/implementing-role-based-access-controls-for-third-party-access/)

1. What is Role Based Access Control (RBAC) and why do we care?

- `Role-Based Access Control` (RBAC) is a security model that grants access to resources based on the roles assigned to users. It is important because it helps organizations protect their `​IT assets` by enforcing `​least privilege`, `​separating duties`, and implementing `​data abstraction`, ensuring that users only have access to what they need to perform their tasks.

2. Describe a Role/Permission heirarchy that you might implement using RBAC.

- In an RBAC implementation, a `​role/permission hierarchy` might include different levels of access based on the responsibilities of individuals within an organization. For example, there could be roles such as `​administrator` with full access, `​manager` with restricted access to certain resources, and `​employee` with limited access to specific functions.

3. What approach might you take to implement RBAC?

- When implementing RBAC, a recommended approach is to start by conducting an assessment of the organization's requirements, identifying roles and their associated permissions. Then, define policies and procedures for `​role assignment`, `​role review`, and `​access provisioning`. Implementing RBAC can involve using a `​directory service` like `​Active Directory`, `​fine-grained access controls`, and `​privileged access management systems`.

## wiki - RBAC

[Source](https://en.wikipedia.org/wiki/Role-based_access_control)

1. If Authentication is “you are who you say you are,” what is Authorization?

- `​Authorization` is the process of determining what actions an authenticated user is allowed to perform or access based on their roles or permissions.

2. Name three primary rules defined for RBAC.

- Role assignment: Users can access certain functions based on their assigned role.
- Role authorization: Users can only take on roles for which they are authorized.
- Permission authorization: Users can only exercise permissions that are authorized for their active role.

3. Describe RBAC to a non-technical friend.

- RBAC is a way to control who can do what in a computer system. It simplifies user management by assigning roles to users, and these roles determine what actions they can perform.
- Think of RBAC like roles in a play. Each actor has a specific role, and based on that role, they are allowed to perform certain actions on the stage.


## RBAC tutorial

[Source](https://www.youtube.com/watch?v=C4NP8Eon3cA)

1. What Are access rights Associated with? The User? or The Role? Explain.

- ​Access rights are associated with the role in ​RBAC. ​Users are assigned one or more roles, and their access rights are based on these roles.

2. Access Rights, or Authorization, is activated after a user successfully does what?

- Access rights, or ​authorization, are activated after a user successfully authenticates or verifies their ​identity.

3. Explain how RBAC might benefit a business.

- RBAC can benefit a business by simplifying policy management, automatically providing access rights for new employees based on their role, and enforcing the principle of least privilege to enhance security and control access to resources.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)