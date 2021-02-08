import "./Job.css";

import DescriptionPopUp from "./descriptionPopUp";

function Job({ job }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={job.company_logo} className="card-img-top" alt="" />
      <div className="card-top text-muted">
        <>{job.created_at}</>
        <>{job.type}</>
      </div>
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text text-muted">{job.company}</p>
        <p className="text-primary">{job.location}</p>
        <div className="card-buttons">
          <DescriptionPopUp job={job} />

          <a
            href={job.url}
            className=" btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}

export default Job;
