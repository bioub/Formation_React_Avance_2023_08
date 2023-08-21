import { useEffect, useState } from "react";

export function useNow(delay: number) {
  const [now, setNow] = useState(new Date());
  //  return React.createElement('div', { className: 'Clock' }, (new Date).toLocaleTimeString());

  useEffect(() => {
      setInterval(() => {
        setNow(new Date())
      }, delay);
  }, [])

  return now;
}
