# Read 16: AWS: Cloud Servers

## AWS EC2

[Source](https://aws.amazon.com/ec2/)

1. What is an EC2 Instance?

- An ​EC2 Instance is a virtual server in the cloud provided by ​Amazon Web Services (AWS). It allows users to rent ​virtual machines and run various applications and ​workloads on them.

2. Name 2 use cases for EC2.

- Running ​cloud-native and ​enterprise applications: EC2 provides ​secure, ​reliable, ​high-performance, and ​cost-effective compute infrastructure to meet the demanding needs of ​businesses.
- Migrating and building applications: EC2 offers ​tools and services like ​AWS Migration Tools, ​AWS Managed Services, and ​Amazon Lightsail to simplify the process of migrating and building applications on the cloud.

3. Provide 1 reason to use ECS instead of a service such as Heroku, Digital Ocean, or Render.com.

- Amazon Elastic Container Service (ECS) instead of services like ​Heroku, ​Digital Ocean, or ​Render.com is the tight ​integration with other ​AWS services. ECS seamlessly integrates with other AWS services like ​Amazon ECR (​Elastic Container Registry), ​AWS Fargate, and ​AWS CloudFormation, which allows for easier ​management and ​deployment of ​containerized applications within the ​AWS ecosystem.

## EC2 For Humans

[Source](https://www.youtube.com/watch?v=lZMkgOMYYIg)

1. Where can we find EC2 on the AWS Console?

- ​EC2 can be found on the ​AWS Console by logging into your ​AWS account, navigating to the "​Services" dropdown menu, and selecting "EC2" under the "​Compute" section.

2. Explain the general difference between T2 Micro and XL.

- T2 Micro and XL refer to different instance types available on EC2. T2 Micro is a smaller instance type with lower resources, suitable for low-demand applications or small workloads. XL, on the other hand, denotes an extra-large instance type with higher resources, capable of handling larger workloads or applications that require more processing power.

3. Explain a “Compute Cycle” to a non-technical friend.

- In the world of `One Piece`, think of a compute cycle as a battle sequence in which the Straw Hat Pirates are facing off against the `Shichubukai`. Each move/attack they make, whether it's `Zoro's Oni Giri`, `Sanji's Concassé shot`, or `Luffy's Gomu Gomu no Gatling` (which is like a computer performs a series of actions to process data, Luffy executes a series of rapid and repetitive punches as part of his special attack.), is a compute cycle.

- Just like the Sanji follows a recipe to create a dish, the Straw Hat Pirates follow their own set of instructions, strategies, and techniques (similar to a computer program) to defeat their opponent and achieve victory. The more complex and intense the battle, the more compute cycles (moves and actions) are required.

## Elastic Beanstalk

[Source](https://www.youtube.com/watch?v=SrwxAScdyT0)

1. What is Elastic Beanstalk?

- ​Elastic Beanstalk is a service provided by ​AWS (​Amazon Web Services) that simplifies the deployment, management, and scaling of web applications and services. It abstracts the underlying infrastructure and automates various tasks, allowing developers to focus on building their applications rather than managing servers.

2. Describe the relationship between EC2 and Elastic Beanstalk.

- ​EC2 (​Elastic Compute Cloud) is a component of AWS that provides virtual servers in the cloud. Elastic Beanstalk leverages EC2 instances to run and scale the web applications. It automatically provisions and manages the EC2 instances based on the application's requirements, allowing developers to deploy and run their applications without directly managing the underlying EC2 infrastructure.

3. Name some benefits of using Elastic Beanstalk.

- Simplified deployment: Elastic Beanstalk automates the deployment process, making it easier and faster to launch applications.
- Scalability: Elastic Beanstalk provides built-in scaling capabilities, automatically adjusting the resources to handle changes in traffic and demand.
- Cost-effective: Elastic Beanstalk allows users to pay only for the necessary AWS resources for their applications, without any additional charges for using the service itself.

## Things I want to know more about

[Home](https://sfpagalan.github.io/reading-notes/)