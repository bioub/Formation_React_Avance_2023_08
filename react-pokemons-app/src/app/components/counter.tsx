type Props = {
  count: number;
  onIncrement(): void;
};

function Counter({ count, onIncrement }: Props) {
  return <button onClick={() => onIncrement()}>{count}</button>
}

export default Counter;
