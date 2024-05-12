import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useJobs from "../../Hooks/useJobs";
import SearchBox from "../CommonJsx/SearchBox";
import JobDetailCard from "./JobDetailCard";
import LoadingSpinner from "../CommonJsx/LoadingSpinner";

const JobList = () => {
  const [query, setQuery] = useState("");
  const { data: jobs, error, isLoading } = useJobs(query);

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="col-md-7">
      <SearchBox onSearch={handleSetQuery} />

      {isLoading && <LoadingSpinner />}

      {error && <div>Error fetching companies: {error.message}</div>}

      {jobs.map(({ id, title, companyName, salary, equity }) => (
        <JobDetailCard
          title={title}
          companyName={companyName}
          salary={salary}
          equity={equity}
          key={id}
          id={id}
        />
      ))}
    </div>
  );
};

export default JobList;
