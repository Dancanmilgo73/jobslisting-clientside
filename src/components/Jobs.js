import React from "react";
import Job from "./Job";
import { useState } from "react";

function Jobs({ jobs, search, seniority, location, type, loading }) {
  const [jobsPerPage, setJobsPerPage] = useState(18);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "7%" }}
      >
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (search.length > 0) {
    jobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (location.length > 0) {
    jobs = jobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  if (type.length > 0) {
    jobs = jobs.filter((job) =>
      job.type.toLowerCase().includes(type.toLowerCase())
    );
  }
  const handleClick = () => {
    setJobsPerPage((prevValue) =>
      prevValue >= jobs.length ? (prevValue = 18) : prevValue + 18
    );
  };
  const reset = () => {
    setJobsPerPage(18);
  };

  return (
    <div className="outer">
      <div className="JobsList">
        {jobs.slice(0, jobsPerPage).map((job) => (
          <Job job={job} />
        ))}
      </div>
      <button onClick={handleClick} className="btn btn-outline-info">
        Load More
        {jobsPerPage}
      </button>
      <button onClick={reset} className="btn btn-outline-warning">
        Reset
      </button>
    </div>
  );
}
export default Jobs;
