import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import App from '../App';
import {getGreetingName} from '../service/hello-service'

jest.mock('../service/hello-service')

test('renders learn react link', async () => {
  getGreetingName.mockResolvedValue(Promise.resolve("World"))
  const { getByText } = render(<App />);
  await waitForDomChange(getByText)
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
