import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders Box component', () => {
  const { asFragment } = render(<Box id="1" width="100" height="100" backgroundColor="blue" removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
