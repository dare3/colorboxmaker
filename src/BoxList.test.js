import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList component', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});


test('removes a box when the remove button is clicked', () => {
  const { getByText, queryByText } = render(<BoxList />);
  
  // Add a box first to remove it
  fireEvent.click(getByText(/Add Box/i)); // Assuming initial values are set in NewBoxForm

  // Now there should be a box
  expect(getByText(/X/i)).toBeInTheDocument();

  // Click the remove button
  fireEvent.click(getByText(/X/i));

  // Now the box should be gone
  expect(queryByText(/X/i)).not.toBeInTheDocument();
});
