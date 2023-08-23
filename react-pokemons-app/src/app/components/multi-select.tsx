import styles from './multi-select.module.css';
import {
  memo,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

type Props = {
  items: string[];
  selected: string[];
  onSelect(selection: string[]): void;
  renderItem?(item: string): ReactNode;
  renderValues?(selection: string[]): ReactNode;
};

function MultiSelect({
  items = [],
  selected = [],
  onSelect,
  renderItem,
  renderValues,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function listener(event: MouseEvent) {
      if (!hostRef.current?.contains(event.target as HTMLElement)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    };
  }, []);

  function handleClickValues(event: ReactMouseEvent<HTMLDivElement>) {
    console.log('click div values');
    setMenuOpen(!menuOpen);
  }

  function handleClickItem(item: string) {
    if (selected.includes(item)) {
      onSelect(selected.filter((el) => el !== item));
    } else {
      onSelect([...selected, item]);
    }
  }

  return (
    <div className={styles.host} ref={hostRef}>
      <div className={styles.values} onClick={handleClickValues}>
        {selected.length
          ? renderValues
            ? renderValues(selected)
            : selected.join(', ')
          : 'Select...'}
      </div>
      {menuOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div
              className={classNames(styles.item, {
                [styles.selected]: selected.includes(item),
              })}
              key={item}
            >
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={selected.includes(item)}
                  onChange={() => handleClickItem(item)}
                />
                <span>{renderItem ? renderItem(item) : item}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(MultiSelect);
