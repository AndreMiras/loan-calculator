import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const elements = screen.getAllByText('Loan Calculator');
  expect(elements.length).toBeGreaterThanOrEqual(1);
});
