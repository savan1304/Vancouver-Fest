import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');

describe('Navbar Component', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Navbar with Home, Cafes, and Festivals links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/cafes/i)).toBeInTheDocument();
    expect(screen.getByText(/festivals/i)).toBeInTheDocument();
  });


  test('renders logout button when authenticated', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });

    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
