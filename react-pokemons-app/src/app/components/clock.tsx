import { useEffect, useState } from "react";
import { useNow } from "./useNow";

function Clock() {
  const now = useNow(1000);

  return (
    <>
    <div className="Clock">
        {now.toLocaleTimeString()}
    </div>
    </>
  );
}

export default Clock;
