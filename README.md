A template repo to kickstart any React+TypeScript project!
Also includes web socket and protobuf stuff, because I seem to use them a bunch.

## Overview

### Technologies Used
- Framework
  - [React](https://reactjs.org/): JS lib for interactive UIs using encapsulated components
    - [CRA](https://create-react-app.dev/docs/getting-started/) (Create React App): Build setup with no configuration
  - [TypeScript](https://www.typescriptlang.org/): Syntactical superset of JS, adds types, robustness and intellisense
  - [Redux](https://react-redux.js.org/) (React Redux): A predicatable state container for JS apps. This helps implement a [single source of truth](https://medium.com/@juanguardado/redux-single-source-of-truth-e1fe1fb6ffec) for our application state.
- Communication
  - [Protobuf](https://developers.google.com/protocol-buffers): Language-neutral, platform-neutral extensible mechanism for serializing structured data.
  - [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API): Two-way interactive communication session between the user's browser and a server
- Testing
  - [Jest](https://jestjs.io/en/) is a JavaScript unit testing framework (CRA comes bundled with Jest)
    - [jest-dom](https://github.com/testing-library/jest-dom) gives us custom jest matchers to test the state of the DOM
  - [Enzyme](https://airbnb.io/enzyme/) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.

## Install and Start
1. Download and install [npm (node-packet-manager)](https://nodejs.org/en/download/) (through NodeJS)
2. Run `npm install && npm update` to download and update all external libs
3. Run `npm run gen` to generate protobuf message files (*_pb.js)
4. Run `npm start --watch` to start the app. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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
* [vscode-proto3](https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3)

## Testing
Testing is done using Jest and Enzyme. Jest acts as a test runner, assertion library, and mocking library. Enzyme adds some great additional utility methods for rendering a React component (or multiple components), finding elements, and interacting with elements.

* Run `npm test` to run tests and create testing [snapshots](https://jestjs.io/docs/en/snapshot-testing)
* Run `npm test -- -u` to run tests and update snapshots (If you've updated the UI you need to update the snapshots for the tests to pass)
* Run `npm run test-cov` to run tests with code coverage. Open [webclient/coverage/lcov-report/index.html](coverage/lcov-report/index.html) to view the report more extensively in the browser.
* Run `npm test -- -t '<describeString> <itString>'` to run single tests within suites.

## Development

### IDE
I've used [Visual Studio Code](https://code.visualstudio.com/) for this project and I highly recommend it.

#### Recommended Extensions
- [TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.ts-extension-pack)
  - Includes a lot of good stuff, examples:
  - `Ctrl+Alt+o` Organize imports according to convention and removes imports that are unused
  - Automatically fixes the imports on the file that is being moved and also files that are importing the component you are moving
  - Path intellisense
- [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)
  - `Ctrl+Alt+D` and again `Ctrl+Alt+D` Generates documentation for whatever the caret is on or inside of

### Issues

#### Importing Google Protobuf
[React doesn't seem to respect the EsLintConfig in package.json](https://github.com/facebook/create-react-app/issues/2339).
So it tries to include the generated "*_pb.js" files and that causes compilation erros. A fix to this is to put the comment "eslint-disable" in the beginning of the generated file.

Therefore use `npm run gen` to generate the *_pb.js file instead of directly using [protoc](https://github.com/protocolbuffers/protobuf#protocol-compiler-installation).

See [rpc issue 96](https://github.com/improbable-eng/grpc-web/issues/96) and [protobuf issue 3931](https://github.com/protocolbuffers/protobuf/issues/3931) for
more info/discussions.

## Deployment
`npm run build` builds the app for production to the [build](build/index.html) folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).