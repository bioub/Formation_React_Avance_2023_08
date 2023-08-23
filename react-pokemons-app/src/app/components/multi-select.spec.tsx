import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import MultiSelect from './multi-select';

test('MultiSelect renders "Select...', () => {
  render(<MultiSelect items={[]} selected={[]} onSelect={() => {}} />);
  expect(screen.getByText(/select/i)).toBeInTheDocument();
});

test('MultiSelect renders items when we click on "Select...', () => {
  render(<MultiSelect items={['Toto']} selected={[]} onSelect={() => {}} />);
  fireEvent.click(screen.getByText(/select/i));

  expect(screen.getByText(/toto/i)).toBeVisible();
});

test('MultiSelect calls onSelect when we click on items', () => {
  const spy = vitest.fn();

  render(<MultiSelect items={['Toto']} selected={[]} onSelect={spy} />);
  fireEvent.click(screen.getByText(/select/i));
  fireEvent.click(screen.getByText(/toto/i));

  expect(spy).toHaveBeenCalledWith(['Toto']);
});
