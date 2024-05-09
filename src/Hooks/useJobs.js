import { useEffect, useState } from "react";
import JoblyApi from "../api";

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
