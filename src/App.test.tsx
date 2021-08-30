/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { render, screen } from '@testing-library/react';
import { render, screen } from './test-utils/testing-library-utils';
import App from './App';

describe('App Component ...', () => {
  beforeEach(() => {
    render(<App />, {});
  });

  test('renders Title ...', () => {
    // screen.debug(); // "посмотреть"))
    const Title = screen.getByText('React API - TMDB');
    expect(Title).toBeInTheDocument();
  });

  test('... and it has correct class', () => {
    const Title = screen.getByText('React API - TMDB');
    expect(Title).toHaveClass('title'); // падает и если у элемента вообще нет класса))
  });
});
