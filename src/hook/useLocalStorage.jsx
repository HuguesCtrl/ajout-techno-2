import { useState, useEffect } from "react";

function useLocalStorage(key, defValue) {
  const [value, setValue] = useState();
  useEffect(() => {
    const current = window.localStorage.getItem(key);
    if (current) {
      setValue(JSON.parse(current));
    } else {
      window.localStorage.setItem(key, JSON.stringify(defValue));
      setValue(defValue);
    }
  }, []);
  function updateValue(newValue) {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }
  return [value, updateValue];
}
export default useLocalStorage;
