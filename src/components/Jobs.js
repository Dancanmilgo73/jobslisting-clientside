import React from "react";
import Job from "./Job";

function Jobs({ jobs }) {
  return (
    <div className="outer">
      <div className="JobsList">
        {jobs.map((job) => (
          <li key={job.description}>
            <Job job={job} />
          </li>
        ))}
      </div>
    </div>
  );
}
export default Jobs;
