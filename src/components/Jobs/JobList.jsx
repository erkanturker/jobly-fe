import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useJobs from "../../Hooks/useJobs";
import SearchBox from "../SearchBox";
import JobDetailCard from "./JobDetailCard";

const JobList = () => {
  const [query, setQuery] = useState("");
  const { data: jobs, error, isLoading } = useJobs(query);

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBox onSearch={handleSetQuery} />

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {error && <div>Error fetching companies: {error.message}</div>}

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
