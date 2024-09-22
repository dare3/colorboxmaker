import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm component', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test('submits the form and adds a box', () => {
  const addBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBox} />);

  fireEvent.change(getByLabelText(/Width/i), { target: { value: '100' } });
  fireEvent.change(getByLabelText(/Height/i), { target: { value: '100' } });
  fireEvent.change(getByLabelText(/Background Color/i), { target: { value: 'red' } });
  fireEvent.click(getByText(/Add Box/i));

  expect(addBox).toHaveBeenCalledWith({
    width: '100',
    height: '100',
    backgroundColor: 'red',
  });
});
