import React, { useEffect, useState } from "react";
import JoblyApi from "../../src/api";
import CompanyCard from "./CompanyCard";
import SearchBox from "../SearchBox";

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (!query) {
          data = await JoblyApi.getAllCompanies();
        } else {
          data = await JoblyApi.getCompanyByName(query);
        }
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchData();
  }, [query]);

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBox onSearch={handleSetQuery} />
      {companies.map((company) => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      ))}
    </>
  );
};

export default CompanyList;
