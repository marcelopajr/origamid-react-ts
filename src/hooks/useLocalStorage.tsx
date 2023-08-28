import { useState, useEffect } from "react";

export default function useLocalStorage(
  key: string,
  initial: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
