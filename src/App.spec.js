import React from 'react';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each';
import App from './App';

describe('App', () => {
  it('Render without error', () => {
    render(<App />);
  });
});
