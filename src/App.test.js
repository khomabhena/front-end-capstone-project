import { render, screen } from '@testing-library/react';
import App from './App';
import ReserveTable from './components/ReserveTable';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<ReserveTable />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
})