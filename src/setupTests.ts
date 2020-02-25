/**
 * This file configures the test environment before running tests, it sets up:
 *
 *  - Boilerplate code/imports that every test could need:
 *    - jest-dom/extend-expect: renders your components to document.body, this adds jest-dom's custom assertions
 *      (https://github.com/testing-library/jest-dom)
 *
 *  - Enzyme (JavaScript testing utility for React) to use the enzyme-adapter-react-xx
 *
 *  - jest-canvas-mock to be able to mock (and include) the HTML canvas element in unit tests
 *    (https://www.npmjs.com/package/jest-canvas-mock). See https://github.com/pixijs/pixi.js/issues/4769 for more info
 *
 * Testing functionality implemented from
 * https://dev.to/thetrevorharmon/configuring-jest-and-enzyme-in-create-react-app-on-typescript-17mj
 */
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });