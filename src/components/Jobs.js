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
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
        </div>
      );
    }
  }
  if (seniority.length > 0) {
    if (seniority === "Entry_level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("entry") ||
          job.title.toLowerCase().includes("junior")
      );
    }
    if (seniority === "Mid_level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("experienced") ||
          job.title.toLowerCase().includes("mid")
      );
    }
    if (seniority === "Senior_level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("senior") ||
          job.title.toLowerCase().includes("architect") ||
          job.title.toLowerCase().includes("analyst") ||
          job.title.toLowerCase().includes("principal")
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
        </div>
      );
    }
  }
  if (location.length > 0) {
    if (location === "Remote") {
      jobs = jobs.filter((job) =>
        job.location.toLowerCase().includes("remote")
      );
    }
    if (location === "Usa") {
      jobs = jobs.filter(
        (job) =>
          job.location.toLowerCase().includes("usa") ||
          job.location.toLowerCase().includes("america")
      );
    }
    if (location === "Kenya") {
      jobs = jobs.filter(
        (job) =>
          job.location.toLowerCase().includes("kenya") ||
          job.location.toLowerCase().includes("east africa")
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
        </div>
      );
    }
  }
  if (type.length > 0) {
    if (type === "Full time") {
      jobs = jobs.filter((job) =>
        job.type.toLowerCase().includes("Full time".toLowerCase())
      );
    }
    if (type === "Part time") {
      jobs = jobs.filter((job) =>
        job.type.toLowerCase().includes("Part time".toLowerCase())
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
        </div>
      );
    }
  }
  const handleClick = () => {
    setJobsPerPage((prevValue) =>
      prevValue >= jobs.length ? (prevValue = 18) : prevValue + 18
    );
  };
  const reset = () => {
    setJobsPerPage(18);
  };
  //handling the display of reset button and load more button
  let displayReset = false;
  let displayLoadMore = true;
  if (jobsPerPage > 18) {
    displayReset = true;
  }
  if (jobs.length < 19 || jobsPerPage >= jobs.length) {
    displayLoadMore = false;
  }

  return (
    <div>
      <div className="outer">
        <div className="JobsList">
          {jobs.slice(0, jobsPerPage).map((job) => (
            <Job job={job} />
          ))}
        </div>
      </div>
      <div className="paginateButtons">
        <button
          onClick={handleClick}
          className={displayLoadMore ? "btn btn-outline-info" : "no-button"}
        >
          Load More
        </button>
        <button
          onClick={reset}
          className={displayReset ? "btn btn-outline-warning" : "no-button"}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Jobs;
