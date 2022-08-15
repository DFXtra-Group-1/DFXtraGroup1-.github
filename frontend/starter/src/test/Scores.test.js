import { render, screen } from '@testing-library/react';
import Scores from '../Components/Scores';

test('renders InfoScores react link', () => {
    render(<Scores />);
    const labelElement = screen.getByLabelText(/Aptitude 93%/i);
    expect(labelElement).toBeInTheDocument();
});

test('renders InfoScores text element', () => {
    render(<Scores />);
    const textElement = screen.getByText(/Score/i);
    expect(textElement).toBeInTheDocument();
});