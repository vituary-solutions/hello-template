import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import Greeting from '../Greeting';
import {getGreetingName} from "../../service/hello-service";
import {useAuth0} from "../../react-auth0-spa";

jest.mock('../../service/hello-service')
jest.mock('../../react-auth0-spa')

test('renders resolved greeting', async () => {
  getGreetingName.mockResolvedValue(Promise.resolve("World"))
  useAuth0.mockImplementation(() => ({isAuthenticated: true, getTokenSilently: () => Promise.resolve("Token")}))
  const { getByText } = render(<Greeting />);
  await waitForDomChange(getByText)
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});

test('renders guest by default', async () => {
  useAuth0.mockImplementation(() => ({isAuthenticated: false}))
  const { getByText } = render(<Greeting />);
  const textElement = getByText(/Hello Guest/i);
  expect(textElement).toBeInTheDocument();
});
