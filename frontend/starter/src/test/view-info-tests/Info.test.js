import { render, screen } from '@testing-library/react';
import Info from '../../Components/information/Info'
import graduate from '../graduate-user-test.json';


test('renders Info text element', () => {
    render(<Info graduate={graduate.graduateUser[0]} />);
    const textElement = screen.getByText(/your information/i);
    expect(textElement).toBeInTheDocument();
});