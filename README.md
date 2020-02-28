A template repo to kickstart any React+TypeScript project!
Also includes a web socket stuff cause I seem to use that a bunch.

## Install and start
1. Download and install [npm](https://nodejs.org/en/download/) (through Node js)
2. Run `npm install && npm update` to download and update all external libs
3. Run `npm run gen` to generate protobuf files (*.js and *.java)
4. Run `npm start --watch` to start the app. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To Continue developing
1. Create new GitHub repo
2. Run `git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-NEW-REPO-NAME.git`
3. run `git push -u origin master`

## Recommended VS Code Extensions
* [TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.ts-extension-pack)
* [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)

## Testing
Testing is done using Jest and Enzyme.

### Jest
* [Jest](https://jestjs.io/en/) is a JavaScript unit testing framework (CRA comes bundled with Jest)
* Acts as a test runner, assertion library, and mocking library.

#### jest-dom
* [jest-dom](https://github.com/testing-library/jest-dom) gives us custom jest matchers to test the state of the DOM

### Enzyme
* [Enzyme](https://airbnb.io/enzyme/) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.
* Adds some great additional utility methods for rendering a component (or multiple components), finding elements, and interacting with elements.

### Usage
* Run `npm test` to run tests and create testing [snapshots](https://jestjs.io/docs/en/snapshot-testing)
* Run `npm test -- -u` to run tests and update snapshots (If you've updated the UI you need to update the snapshots for the tests to pass)
* Run `npm test -- --coverage --watchAll=false` to run tests with [code coverage](https://github.com/facebook/create-react-app/issues/6888)

_______________________________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
