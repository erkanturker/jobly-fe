/**
 * Custom Hook: useCompanies
 * Description: Custom React hook for fetching companies data based on a query.
 */

import { useEffect, useState } from "react";
import JoblyApi from "../api";

/**
 * Custom React hook for fetching companies data based on a query.
 * @param {string} query - Optional parameter for filtering companies by name.
 * @returns {object} - Object containing fetched data, error, and loading state.
 */
const useCompanies = (query) => {
  // State variables for storing fetched data, error, and loading state
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Effect hook for fetching data
  useEffect(() => {
    // Function to fetch data asynchronously
    const fetchData = async () => {
      // Set loading state to true before fetching data
      setIsLoading(true);
      try {
        let result;
        // Check if query exists
        if (!query) {
          // If no query, fetch all companies
          result = await JoblyApi.getAllCompanies();
        } else {
          // If query exists, fetch companies by name
          result = await JoblyApi.getCompanyByName(query);
        }
        // Set fetched data, reset loading state, and clear any previous errors
        setData(result);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        // If an error occurs during fetching, log error, set error state, and reset loading state
        console.error("Error fetching companies:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    // Call fetchData function when the component mounts or when the query changes
    fetchData();
  }, [query]);

  // Return an object containing fetched data, error, and loading state
  return { data, error, isLoading };
};

export default useCompanies;
