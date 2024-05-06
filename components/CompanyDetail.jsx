import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../src/api";
import { useParams } from "react-router-dom";

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    JoblyApi.getCompany(`${handle}`).then((res) => setCompany(res));
  }, []);

  // Wait until company is loaded before rendering
  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.jobs.map(({ title, salary, equity }) => (
        <JobCard title={title} salary={salary} equity={equity} />
      ))}
    </div>
  );
};

export default CompanyDetail;
