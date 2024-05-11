/**
 * Custom Hook: useLocalStorage
 * Description: Custom React hook for managing state with local storage.
 */

import { useEffect, useState } from "react";

/**
 * Custom React hook for managing state with local storage.
 * @param {string} key - Key for accessing local storage item.
 * @param {any} firstVal - Initial value for the local storage item (default is null).
 * @returns {Array} - Array containing the stored value and a function to update the stored value.
 */
const useLocalStorage = (key, firstVal = null) => {
  // Get initial value from local storage or use the provided initial value
  const initialValue = window.localStorage.getItem(key) || firstVal;

  // State variable for storing the value retrieved from local storage
  const [storedValue, setStoredValue] = useState(initialValue);

  // Effect hook to update local storage when storedValue changes
  useEffect(() => {
    // Log the updated stored value
    console.log(`hooks useLocalStorage ${storedValue}`);

    // Update local storage based on the storedValue
    if (storedValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, storedValue);
    }
  }, [key, storedValue]);

  // Return an array containing the stored value and a function to update the stored value
  return [storedValue, setStoredValue];
};

export default useLocalStorage;
