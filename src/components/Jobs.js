import React from "react";
import Job from "./Job";

function Jobs({ jobs, search, seniority, location, type }) {
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

  return (
    <div className="outer">
      <div className="JobsList">
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </div>
    </div>
  );
}
export default Jobs;
