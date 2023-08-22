import { memo, ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
};

function List<T>({ items, renderItem }: Props<T>) {
  console.log('List');
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </>
  );
}

//export default memo(List, (prevProps, nextProps) => prevProps.items === nextProps.items);
export default memo(List);
