import { useState, useEffect } from "react";

function useDebouncedValue(value: Function, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(delayDebounceFn);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebouncedValue;