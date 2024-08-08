# Learning Playwright (Component)

The focus of this is example is on showing component testing with Vue. To keep this as reproducible for anyone as possible, I took the standard Vue template project and broke it up into components. See the Implementation section below.

[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-1c8620.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright - GitHub](https://img.shields.io/badge/GitHub-Playwright-1c8620.svg?logo=github)](https://github.com/microsoft/playwright/tree/main)
[![Playwright - Stack Overflow](https://img.shields.io/badge/stackoverflow-Playwright-e87922.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright)

## 🟢 Prerequisites

Make sure you have [Node.js](https://nodejs.org/en). The LTS version should be fine. You will also need the `npm` package manager (which comes with Node.js) or `yarn`. A development environment or IDE with TypeScript/JavaScript support will help. [Visual Studio Code](https://code.visualstudio.com/) is a good choice.

## 📦 Execution

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

# 💻 Implementation

The general idea is that the standard "Hello World" example has been broken up. Rather than a single component, I have multiple components. The original example has the page title as part of the page. I now have that as a distinct component called `Title`.

This means the `App` component test checks for the actual title, by mounting the full component app, but the `Title` component test only checks if a message property can be passed. This requires only mounting the `Title` component.

I also refactored the counter into its own component called `Count`. The tests for this check for the state of the counter after it is mounted and clicked.

## ⚖ License

The code used in this project is licensed under the [MIT license](https://github.com/jeffnyman/playwright-vue-component/blob/main/LICENSE).
