import React, { useEffect, useState } from "react";
import JoblyApi from "../../src/api";
import SearchBox from "../SearchBox";
import JobDetailCard from "./JobDetailCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (!query) {
          data = await JoblyApi.getAllJobs();
        } else {
          data = await JoblyApi.getJobsByTitle(query);
        }
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
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
