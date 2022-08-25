import { render, screen } from '@testing-library/react';
import Scores from '../../Components/information/Scores'
import graduate from '../graduate-user-test.json';



test('renders InfoScores text element', () => {
    render(<Scores scoresProp={graduate.graduateUser[0]} />);
    const textElement = screen.getByText(/Scores/i);
    expect(textElement).toBeInTheDocument();
});

test('renders InfoScores textbox', () => {
    render(<Scores scoresProp={graduate.graduateUser[0]} />);
    const inputElement = screen.getByText(/oracle java se : pass/i);
    expect(inputElement).toBeTruthy();
});