import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  jest.spyOn(console, 'warn').mockImplementation(() => { });
  render(<App />);
  const linkElement = screen.getByText(/dfx/i);
  expect(linkElement).toBeInTheDocument();
});
