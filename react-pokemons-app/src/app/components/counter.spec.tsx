import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './counter';

test('Counter renders', () => {
  render(<Counter count={12} onIncrement={() => {}} />)
});

test('Counter renders 12', () => {
  render(<Counter count={12} onIncrement={() => {}} />)
  expect(screen.queryByText(/12/i)).toBeInTheDocument();
});

test('Counter click calls onIncrement', () => {
  const onIncrement = vitest.fn();
  render(<Counter count={12} onIncrement={onIncrement} />)

  fireEvent.click(screen.getByRole('button'));

  expect(onIncrement).toHaveBeenCalled();
});
