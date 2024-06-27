import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Home Component', () => {
    test('renders without crashing', () => {
        render(<Home />);
    });

    test('displays the main heading', () => {
        render(<Home />);
        const headingElement = screen.getByRole('heading', { name: "Welcome to Vancouver Fest"});
        expect(headingElement).toBeInTheDocument();
    });

    test('displays the introduction text', () => {
        render(<Home />);
        const introText = screen.getByText("Welcome to Vancouver Fest");
        expect(introText).toBeInTheDocument();
    });

});