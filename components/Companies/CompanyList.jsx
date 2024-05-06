import React, { useEffect, useState } from "react";
import JoblyApi from "../../src/api";
import CompanyCard from "./CompanyCard";
import SearchBox from "../SearchBox";

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    JoblyApi.getAllCompanies().then((res) => setCompanies(res));
  }, []);

  return (
    <>
      <SearchBox />
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
