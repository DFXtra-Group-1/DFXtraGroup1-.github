import { render, screen } from '@testing-library/react';
import Badges from '../Components/Badges';

test('renders Badges tests labels', () => {
    render(<Badges />);
    const labelElement = screen.getByLabelText(/Badges 1/i);
    expect(labelElement).toBeInTheDocument();
});





