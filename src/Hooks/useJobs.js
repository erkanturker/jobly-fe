import { useEffect, useState } from "react";
import JoblyApi from "../api";

/**
 * Custom React hook for fetching jobs data based on a query.
 * @param {string} query - Optional parameter for filtering jobs by title.
 * @returns {object} - Object containing fetched data, error, and loading state.
 */

const useJobs = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let result;
        if (!query) {
          result = await JoblyApi.getAllJobs();
        } else {
          result = await JoblyApi.getJobsByTitle(query);
        }
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, isLoading };
};

export default useJobs;
