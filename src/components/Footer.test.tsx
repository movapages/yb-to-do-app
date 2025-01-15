import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the footer with copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/2025 RxJS To-Do App/i)).toBeInTheDocument();
  });
});

