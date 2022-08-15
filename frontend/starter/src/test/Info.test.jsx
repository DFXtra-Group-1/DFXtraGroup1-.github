import { render, screen } from '@testing-library/react';
import Info from '../Components/Info';

test('renders Info text element', () => {
    render(<Info />);
    const textElement = screen.getByText(/your information/i);
    expect(textElement).toBeInTheDocument();
});