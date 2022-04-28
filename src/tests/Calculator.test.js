// import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Calculator from '../components/Calculator';

it(' renders div', () => {
  // const div = document.createElement('div');
  render(<Calculator />);
  screen.debug();
});
