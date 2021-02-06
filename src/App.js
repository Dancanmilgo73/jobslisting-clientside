import "./App.css";
import { useEffect, useState } from "react";
import Jobs from "./components/Jobs";

const initialValues = {
  searchInput: "",
  Seniority: "",
  Location: "",
  selectedRadio: "",
};

function App() {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  async function getJobs() {
    setLoading(true);
    const res = await fetch("https://job-listing-server.herokuapp.com/");

    var jobs = await res.json();
    // jobs && jobs.map((job) => console.log(job.title));
    //console.log(jobs);
    setJobList(jobs);
    setLoading(false);
  }
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);
  //handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  //handle clear search
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("formId").reset();
    document.getElementById("selectField").reset();
  };
  /* 
  const handleClick = (e) => {
    e.preventDefault();
    setValues({ ...values });
  }; */

  return (
    <div className="App">
      <div className="page-top">
        <h1>Job Guru</h1>
      </div>
      <div className="search-box" id="search">
        <form id="formId">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            name="searchInput"
            onChange={handleChange}
          />
          <button
            className="btn btn-success"
            onClick={handleClick}
            type="submit"
          >
            <i className="bi bi-arrow-clockwise">Clear Search</i>
          </button>
        </form>
      </div>
      <div>
        <form id="selectField">
          <div className="select-field">
            <select onChange={handleChange} defaultValue="" name="Seniority">
              <option value="">Seniority</option>
              <option value="Entry_level">Entry Level</option>
              <option value="Mid_level">Mid-level</option>
              <option value="Senior_level">Senior-level</option>
            </select>
            <select onChange={handleChange} defaultValue="" name="Location">
              <option value="">Location</option>
              <option value="World">World</option>
              <option value="Remote">Remote</option>
              <option value="Kenya">Kenya</option>
            </select>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="selectedRadio"
                value="Full time"
                onChange={handleChange}
              />
              <label className="form-check-label">Full Time</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="selectedRadio"
                value="Part time"
                onChange={handleChange}
              />
              <label className="form-check-label">Part Time</label>
            </div>
          </div>
        </form>
      </div>
      <Jobs
        jobs={jobList}
        search={values.searchInput}
        seniority={values.Seniority}
        location={values.Location}
        type={values.selectedRadio}
        loading={loading}
      />
    </div>
  );
}

export default App;
