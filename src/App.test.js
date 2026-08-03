// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DataVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DataVault/i);
    expect(titleElement).toBeInTheDocument();
});
