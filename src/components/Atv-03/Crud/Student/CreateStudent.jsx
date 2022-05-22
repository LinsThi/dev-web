import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = { name, course, ira };

    axios
      .post("http://localhost:3002/crud/student/create", newStudent)
      .then((response) => {
        alert(`Student ${name} created successfully.`);
        navigate("/listStudent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-control"
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <div
          className="form-group"
          style={{
            paddingTop: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="submit"
            value="Create Student"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
