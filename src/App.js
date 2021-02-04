import "./App.css";
import { useEffect, useState } from "react";
import Jobs from "./components/Jobs";

function App() {
  async function getJobs() {
    const res = await fetch("https://job-listing-server.herokuapp.com/");
    var jobs = await res.json();
    // jobs && jobs.map((job) => console.log(job.title));
    //console.log(jobs);
    setJobList(jobs);
  }
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <div className="App">
      <div className="page-top">
        <h1>Job Guru</h1>
      </div>
      <div className="search-box">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            name="titleInput"
          />
          <input type="submit" className="btn btn-success" value="Submit" />
        </form>
      </div>

      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
