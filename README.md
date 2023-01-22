# Authentication using Nginx Auth Request module

Authentication using nginx auth_request_module for a microservice based architecture. 

## Getting Started

This architecture allows for easier management of authentication and authorization, as well as a separation of concerns between the Auth and Users modules. It also allows for greater scalability and flexibility, as the Auth and Users modules can be developed, deployed, and maintained independently.

### Prerequisites

You need to have the latest version of node js installed and nginx setup to implement reverse proxy.

- Node Js
- Express Js
- Nginx 


### Installation

A step by step series of examples that tell you how to get a development env running.
- Step 1: clone the repository using the command

  `git clone https://github.com/ShakeelUrRehman66/nginx-auth-request`

- Step 2: Navigate to the folder where cloned the repository and install the dependancies for each module using the following command
 
  `npm install`

## Usage
- There are two modules in the folder User and Auth and here is basic explanation of each.

   The Auth module is responsible for handling user authentication and authorization. It exposes an API endpoint for validating user credentials and issuing JWT tokens.

   The Users module is responsible for handling user-related functionality, such as creating, updating, and deleting users. It also exposes an API for accessing user data.

   Nginx acts as a reverse proxy for the Auth and Users modules. It routes incoming requests to the appropriate module based on the URL path. It also uses the Nginx Auth Request module to centrally handle authentication. This means that all requests to the Users module must pass through Nginx and be authenticated by the Auth module before they are allowed through.

## Built With

- [Express Js](https://expressjs.com/) -Fast, unopinionated, minimalist web framework for Node.js
- [Nginx](https://www.nginx.com/) - Web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. 


## Authors

- **Shakeel Ur Rehman** - *Initial work* - [My Github profile](https://github.com/ShakeelUrRehman66)


