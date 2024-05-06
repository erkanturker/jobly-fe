import React, { useEffect, useState } from "react";
import JoblyApi from "../../src/api";
import SearchBox from "../SearchBox";
import JobDetailCard from "./JobDetailCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    JoblyApi.getAllJobs().then((res) => setJobs(res));
  }, []);

  return (
    <>
      <SearchBox />
      {jobs.map(({ id, title, companyName, salary, equity }) => (
        <JobDetailCard
          title={title}
          companyName={companyName}
          salary={salary}
          equity={equity}
          key={id}
        />
      ))}
    </>
  );
};

export default JobList;
