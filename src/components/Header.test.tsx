import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with title', () => {
    render(<Header/>);
    expect(screen.getByText('RxJS To-Do App')).toBeInTheDocument();
  });
});
