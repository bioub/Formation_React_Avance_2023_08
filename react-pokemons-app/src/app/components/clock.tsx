import { useEffect, useState } from "react";

function Clock() {
    const [now, setNow] = useState(new Date());
  //  return React.createElement('div', { className: 'Clock' }, (new Date).toLocaleTimeString());

  useEffect(() => {
      setInterval(() => {
        setNow(new Date())
      }, 1000);
  }, [])

  return (
    <div className="Clock">
        {now.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
