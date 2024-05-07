import { useEffect, useState } from "react";
import JoblyApi from "../api";

const useCompanies = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let result;
        if (!query) {
          result = await JoblyApi.getAllCompanies();
        } else {
          result = await JoblyApi.getCompanyByName(query);
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

export default useCompanies;
