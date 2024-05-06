import React, { useEffect, useState } from "react";
import JoblyApi from "../src/api";
import CompanyCard from "./CompanyCard";

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    JoblyApi.getAllCompanies().then((res) => setCompanies(res));
  }, []);

  console.log(companies);

  return (
    <>
      {companies.map((company) => (
        <CompanyCard
          key={company.handle}
          name={company.name}
          description={company.description}
        />
      ))}
    </>
  );
};

export default CompanyList;
