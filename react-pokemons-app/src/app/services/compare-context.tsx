import { createContext, PropsWithChildren, useState } from "react";

type Context = {
  ids: number[],
  selectId(id: number): void;
}

export const CompareContext = createContext<Context>({
  ids: [],
  selectId(id: number) {}
});

type Props = {}

export function CompareProvider({ children }: PropsWithChildren<Props>) {
  const [ids, setIds] = useState<number[]>([]);

  function selectId(selectedId: number) {
    if (ids.includes(selectedId)) {
      setIds(ids.filter((id) => selectedId !== id))
    } else if (ids.length < 2) {
      setIds([...ids, selectedId]);
    }
  }

  return (
    <CompareContext.Provider value={{ ids, selectId}}>
      {children}
    </CompareContext.Provider>
  );
}
