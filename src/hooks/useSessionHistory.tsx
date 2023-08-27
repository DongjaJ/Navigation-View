import { useState } from 'react';

export default function useSessionHistory<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const data = sessionStorage.getItem(key);
      return data ? JSON.parse(data) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  function saveToSessionStorage<T>(data: T) {
    try {
      setStoredValue(data);
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  return [storedValue, saveToSessionStorage];
}
