import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main app component', () => {
  render(<App />);
  const headerElement = screen.getByText(/hha exchange/i);
  expect(headerElement).toBeInTheDocument();
});
