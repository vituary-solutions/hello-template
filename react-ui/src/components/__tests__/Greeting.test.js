import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import Greeting from '../Greeting';
import {useAppContext} from "../../context/application-context";

jest.mock('../../context/application-context')

test('renders resolved greeting', async () => {
  const getGreetingName = jest.fn()
  getGreetingName.mockResolvedValue(Promise.resolve("World"))
  useAppContext.mockImplementation(() => ({isAuthConfigured: true, helloService: {getGreetingName}}))
  const { getByText } = render(<Greeting />);
  await waitForDomChange(getByText)
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});

test('renders guest by default', async () => {
  useAppContext.mockImplementation(() => ({isAuthConfigured: false}))
  const { getByText } = render(<Greeting />);
  const textElement = getByText(/Hello Guest/i);
  expect(textElement).toBeInTheDocument();
});
