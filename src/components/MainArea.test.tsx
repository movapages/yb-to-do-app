import React from 'react';
import {render, screen} from '@testing-library/react';
import MainArea from './MainArea';

describe('MainArea Component', () => {
  it('renders the main content area with children', () => {
    render(
      <MainArea>
        <p>Test Content</p>
      </MainArea>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});

