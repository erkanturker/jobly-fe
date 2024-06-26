import React, { useEffect, useState } from "react";
import CompanyJobCard from "./CompanyJobCard";
import JoblyApi from "../../api";
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
    <div className="col-md-7">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.jobs.map(({ id, title, salary, equity }) => (
        <CompanyJobCard
          key={id}
          id={id}
          title={title}
          salary={salary}
          equity={equity}
        />
      ))}
    </div>
  );
};

export default CompanyDetail;
