<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# VibeVest

A high-performance, full-stack stock trading simulation platform featuring a modern React frontend and a robust Node.js/Express backend. This project models core broker functionalities—including real-time watchlist monitoring, portfolio tracking (Holdings & Positions), dynamic financial data visualization, and cloud deployment.

---

## Table of Contents
1. [About the Project](#-about-the-project)
2. [Core Architecture & Features](#-core-architecture--features)
3. [Tech Stack](#-tech-stack)
4. [Key Engineering Lessons](#-key-engineering-lessons)
5. [Installation & Setup](#-installation--setup)
6. [Running Tests](#-running-tests)

---

##  About the Project

This platform allows users to track current market investments, manage custom watchlists, buy/sell simulated assets, view interactive historical trend graphs, and check live market updates through a secured dashboard environment.

---

##  Core Architecture & Features

The application is split into two distinct, communicating ecosystems:

### 1. Frontend (React.js)
1. Landing Page & Navigation: Clean, modular UI structuring including Home, About, Product, Pricing, and Support sections built with functional components.
2. Interactive Dashboard: An intuitive dashboard workspace featuring custom menu navigations to switch between views seamlessly.
3. WatchList Component: Real-time watchlists to monitor price ticks and market fluctuations.
4. Data Visualization: Integrated "Chart.js" to map and plot investment data, historical stock trends, and asset weight distribution dynamically.

### 2. Backend (Node.js & Express.js)
1. RESTful API Engine: Custom endpoints handling database CRUD actions triggered directly from the user dashboard.
2. Database & Schemas: Powered by "MongoDB and Mongoose" to structure strict data models for user accounts, permanent stock "Holdings", and intraday "Positions".
3. Live Market APIs: Seamless integration with external Stock Market Live APIs to fetch accurate market pricing data.
4. Authentication: Middleware layers to implement secure user signup, login, and session data integrity.

---

##  Tech Stack

> Frontend: React.js, React Router, HTML5, CSS3, Chart.js
> Backend: Node.js, Express.js
> Database: MongoDB, Mongoose ORM
> Testing Frame: Jest, Supertest
> Cloud Devops: Amazon Web Services (AWS)

---

## Key Engineering Lessons

Building this enterprise-grade trading simulation provided deep insights into full-stack financial engineering and cloud deployment:

### 1. Financial Data Modeling & Schema Design
 > Learned how to structure relational financial data cleanly inside a NoSQL database (MongoDB) by isolating short-term intraday "Positions" from long-term "Holdings".
 > Gained experience seeding databases with starter data packets and ensuring state synchronization between database states and frontend components.

### 2. Real-Time Data Pipelines & Visualization
> Developed techniques to safely pull and unpack real-time market data from external Live APIs.
> Mastered transforming raw backend JSON payloads into clean datasets readable by "Chart.js" to generate interactive UI graphs.

### 3. Reliability and Test-Driven Development (TDD)
> Learned the fundamental mechanics of unit testing using "Jest".
> Wrote targeted backend test suites to guarantee that sensitive mathematical calculations (like calculating total portfolio P&L or investment returns) execute accurately across edge cases.

### 4. Cloud Infrastructure & DevOps (AWS)
> Gained hands-on experience deploying full-stack web applications into production using "Amazon Web Services (AWS)".
> Configured virtual servers, managed environment variables securely in the cloud, and established stable communication channels between deployed frontends and backends.

---

##  Installation & Setup

### Prerequisites
* Node.js (v16+ recommended)
* MongoDB Atlas account or a local MongoDB community server instance

### Backend Setup
1. Open your terminal and navigate to the backend directory:
  ``` bash
   cd backend
   npm install
   npm start
```
   
2. navigate to frontend directory:
  ``` bash
   cd frontend
   npm install
   npm start
 ```

3. to run tests
  ``` bash
   cd frontend
   npm run test
   ```
>>>>>>> 508d4d9ab24bed16120c9a25702720465548ad41
