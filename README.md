<a name="readme-top"></a>

<h3 align="center">The Redux Store: E-Commerce Platform</h3>

<div align="center">

[![MongoDB](https://img.shields.io/badge/MongoDB-green.svg)](https://www.mongodb.com/)
[![Mongoose.js](https://img.shields.io/badge/mongoosejs-red.svg)](https://mongoosejs.com/)
[![Express.js](https://img.shields.io/badge/expressjs-orange.svg)](https://expressjs.com/)
[![Redux](https://img.shields.io/badge/Redux-white.svg)](https://redux.js.org/)
[![React.js](https://img.shields.io/badge/reactjs-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/nodejs-yellow.svg)](https://nodejs.org/)
[![GraphQL](https://img.shields.io/badge/graphql-indigo.svg)](https://graphql.org/)
[![Apollo](https://img.shields.io/badge/apollo-violet.svg)](https://apollographql.com/)
[![Heroku](https://img.shields.io/badge/herokujs-purple.svg)](https://heroku.com/)

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Repo Size](https://img.shields.io/github/repo-size/xndroli/Redux-Store.svg)](https://github.com/xndroli/Redux-Store/issues)
[![GitHub Issues](https://img.shields.io/github/issues/xndroli/Redux-Store.svg)](https://github.com/xndroli/Redux-Store/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/xndroli/Redux-Store.svg)](https://github.com/xndroli/Redux-Store/pulls)

</div>

---

## 🔗 Description <a name = "description"></a>

React's Context API is quickly gaining traction as a worthy alternative or perhaps even successor to other libraries that manage global state in tandem with React, such as Flux or MobX. Nonetheless, the open-source JavaScript library Redux remains the industry standard for managing complex state in a large-scale React application, and it’s very likely that you’ll encounter it on the job.

I will refactor the e-commerce platform from a previous project so that it uses [Redux](https://redux.js.org/). I won’t need to make sweeping changes to the code, but I will need to read through the Redux documentation on my own to find the information needed for a successful refactor.

I will deploy the refactored application via Heroku.

[See Deployed Application]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 Table of Contents

- [Description](#description)
- [User Story](#user_story)
- [Acceptance Criteria](#acceptance_criteria)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technology](#built_with)
- [Authors](#authors)
- [Contributing](../CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💡 User Story <a name = "user_story"></a>

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛓️ Acceptance Criteria <a name = "acceptance_criteria"></a>

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎞️ Demo <a name = "demo"></a>

This section reviews the web application's general appearance and functionality.

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

[![The Redux Store: E-Commerce Platform ](./client/public/images/reduxStore-demo-01.gif)](https://github.com/xndroli/Redux-Store/)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

[![The Redux Store: E-Commerce Platform ](./client/public/images/reduxStore-demo-02.gif)](https://github.com/xndroli/Redux-Store/)

Finally, the user can checkout by going to their shopping cart, as shown in the following animation:

[![The Redux Store: E-Commerce Platform ](./client/public/images/reduxStore-demo-03.gif)](https://github.com/xndroli/Redux-Store/)

[See Deployed Application]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🏁 Getting Started <a name = "getting_started"></a>

Clone the repo by running:

`git clone https://github.com/xndroli/Redux-Store.git`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 💾 Installation <a name = "installation"></a>

Input basic project information in include in your package by running:

`npm init`

Install the package, and any packages that it depends on by running:

`npm install`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Usage <a name="usage"></a>

Run the following command at the root of your project:

`npm start`

If you have nodemon:

`npm run watch`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛏️ Built With <a name = "built_with"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose.js](https://mongoosejs.com/) - Object Data Modeling
- [Express.js](https://expressjs.com/) - Server Framework
- [Redux](https://redux.js.org/) - Application State Management
- [React.js](https://reactjs.org/) - Front End Library
- [Node.js](https://nodejs.org/) - Server Environment

- [GraphQL](https://graphql.org/) - Data Query and Manipulation
- [Apollo Server](https://www.apollographql.com/) - GraphQL Server
- [Heroku](https://www.heroku.com/) - Platform As A Service (PaaS)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✍️ Authors <a name = "authors"></a>

- [@xndroli](https://github.com/xndroli)

See also the list of [contributors](https://github.com/xndroli/Redux-Store/contributors) who participated in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

© 2022 xndroli. All Rights Reserved.
