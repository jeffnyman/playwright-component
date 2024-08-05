# Learning Playwright (Component)

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/en). The LTS version should be fine. You will also need the `npm` package manager (which comes with Node.js) or `yarn`. A development environment or IDE with TypeScript/JavaScript support will help. [Visual Studio Code](https://code.visualstudio.com/) is a good choice.

## Execution

Clone the repository and then set everything up:

```shell
npm ci
```

The reason for `npm ci` is covered best in this [Stack Overflow answer](https://stackoverflow.com/a/53325242).

Make sure to install the browsers that Playwright will need.

```shell
npx playwright install
```

To start up the development server:

```shell
npm run dev
```

Starting the development server to run the tests is not necessary but it will allow you to see that the application is working.

To run the component tests:

```shell
npm run test-ct
```
