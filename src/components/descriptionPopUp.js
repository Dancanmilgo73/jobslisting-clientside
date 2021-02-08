function DescriptionPopUp({ job }) {
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <div>
      {/* button trigger */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#jobModal${job.id}`}
      >
        More Info
      </button>

      {/* Modal  */}
      <div
        className="modal fade"
        id={`jobModal${job.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <div className="modal-header-top">
                  {job.title}
                  <img
                    src={job.company_logo}
                    className="modal-img-top"
                    alt=""
                  />
                </div>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div dangerouslySetInnerHTML={createMarkup(job.description)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DescriptionPopUp;
