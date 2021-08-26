/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component ...', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders Title and it has correct class', () => {
    // screen.debug(); // "посмотреть"))
    const Title = screen.getByText('Hello Vite + React + TS + ESLint (Airbnb)!');
    expect(Title).toBeInTheDocument();
    expect(Title).toHaveClass('title'); // падает и если у элемента вообще нет класса))
  });

  test('renders Add counter button', () => {
    const addButton = screen.getByRole('button', { name: 'Add 1 to counter' });
    expect(addButton).toBeInTheDocument();
  });
});
