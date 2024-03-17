import { useEffect, useState } from "react";

function useTimeout(controller, handler, time = 5) {
  const [count, setCount] = useState(time);

  useEffect(
    function () {
      if (!controller) return;
      const timeout = setTimeout(() => {
        if (count > 0) return setCount((c) => c - 1);
        handler();
        setCount(5);
      }, 1000);
      return () => clearTimeout(timeout);
    },
    [count, controller, handler],
  );
}

export default useTimeout;
