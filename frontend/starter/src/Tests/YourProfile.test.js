import { render, screen } from '@testing-library/react';
import YourProfile from '../Components/profileView/YourProfile';

test('renders the YourProfile testId', () => {
    render(<YourProfile />);
    const idElement = screen.getByTestId('uuid');
    expect(idElement).toBeInTheDocument();
});
