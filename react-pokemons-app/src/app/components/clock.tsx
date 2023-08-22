import { useEffect, useState } from "react";
import { useNow } from "./useNow";
import styles from './clock.module.css';


function Clock() {
  const now = useNow(1000);

  return (
    <>
    <div className={styles.active}>
        {now.toLocaleTimeString()}
    </div>
    </>
  );
}

export default Clock;
