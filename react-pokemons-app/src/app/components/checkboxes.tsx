import { ReactNode } from 'react';

type Props = {
  items: string[];
  selected: string[];
  renderItem?(v: string): ReactNode;
};

// TODO ce composant ne remonte pas les valeurs au clic
function Checkboxes({ items, selected, renderItem }: Props) {
  return (
    <div className="Checkboxes">
      {items.map((item) => (
        <div key={item} style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              value={item}
              checked={selected.includes(item)}
            ></input>
            <span>{renderItem ? renderItem(item) : item}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkboxes;
