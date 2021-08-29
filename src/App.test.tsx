import React from 'react';
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

test('Hobbit упоминается 2 раза (на самом деле где заголовки?)', async () => {
  render(<App />, {});
  // screen.debug();
  const Hobbit = await screen.findAllByText(/Hobbit/i);
  expect(Hobbit).toHaveLength(2);
});
