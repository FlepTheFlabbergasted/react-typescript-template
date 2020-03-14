// This file configures the test environment before running tests. This file is automatically picked up by CRA
import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Disable all logging when testing, switch between enableAll/disableAll to see logs
const log = require("loglevel").disableAll();

configure({ adapter: new EnzymeAdapter() });