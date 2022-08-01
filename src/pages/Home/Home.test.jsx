import { render, screen } from '@testing-library/react';
import App from './Home';

test('Open Home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Authentic Authentic Authentic!/i);
  expect(linkElement).toBeInTheDocument();
});
