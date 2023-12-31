import { cloneElement, useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

function CodeField({ children }) {
  const [count, setCount] = useState(30);

  function handleClick(e) {
    e.preventDefault();
    setCount(30);
  }

  useEffect(
    function () {
      let timer;
      if (count >= 0) {
        timer = setInterval(() => {
          setCount((c) => c - 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    },
    [count],
  );

  return (
    <div className="relative">
      {cloneElement(children, {
        children: (
          <button
            disabled={count >= 0}
            className="mr-3 text-xl duration-300 ease-out enabled:rotate-[360deg] disabled:opacity-40"
            onClick={handleClick}
          >
            <FiRefreshCw />
          </button>
        ),
      })}
      {count >= 0 && (
        <span className="absolute -bottom-5 left-3 right-3 text-right text-xs font-semibold text-stone-500">
          Resend code in {count}s
        </span>
      )}
    </div>
  );
}

export default CodeField;
