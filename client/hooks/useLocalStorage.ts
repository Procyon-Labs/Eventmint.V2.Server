import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void, () => void] {
  const isClient = typeof window !== 'undefined';

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (isClient) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.error(error);
    }
    return initialValue;
  });

  const setValue = (value: T) => {
    try {
      if (isClient) {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = () => {
    try {
      if (isClient) {
        window.localStorage.removeItem(key);
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeItem];
}

export default useLocalStorage;
