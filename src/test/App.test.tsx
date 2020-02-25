import React from "react";
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  it('Renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});