import React from "react";
import { shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../components/App';

describe('App', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('Renders children without crashing', () => {
  //   const wrapper = mount(<App />);
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });

  // it('Renders greeting', () => {
  //   const { getByText } = render(<App />);
  //   const text = getByText(/markers every/i);
  //   expect(text).toBeInTheDocument();
  // });
});