import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';


test('Renders greeting', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Hi, I'm App/i);
  expect(text).toBeInTheDocument();
});

test('Renders GenericClass greeting', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Hi, I'm a class/i);
  expect(text).toBeInTheDocument();
});