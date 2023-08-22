import { useEffect, useState } from "react";
import { useNow } from "./useNow";
import styles from './clock.module.css';


function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
      const interval = setInterval(() => {
        setNow(new Date())
      }, 1000);
      return ()=> {
        clearInterval(interval)
      }
  }, [])


  return (
    <>
    <div className={styles.active}>
        {now.toLocaleTimeString()}
    </div>
    </>
  );
}

export default Clock;
