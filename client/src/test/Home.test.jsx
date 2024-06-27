import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('@auth0/auth0-react');

describe('Home Component', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: { sub: 'auth0|123', email: 'test@example.com' },
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Festivals heading', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const headingElement = screen.getByRole('heading', { name: /festivals/i });
    expect(headingElement).toBeInTheDocument();
  });
});
