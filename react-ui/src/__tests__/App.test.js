import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import App from '../App';
import {getGreetingName} from '../service/hello-service'
import {useAuth0} from "../react-auth0-spa";

jest.mock('../service/hello-service')
jest.mock('../react-auth0-spa')

test('renders learn react link', async () => {
  getGreetingName.mockResolvedValue(Promise.resolve("World"))
  useAuth0.mockResolvedValue({loading: false})
  const { getByText } = render(<App />);
  await waitForDomChange(getByText)
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
