import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTeacher = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTeacher = { name, university, degree };

    axios
      .post("http://localhost:3002/crud/teacher/create", newTeacher)
      .then((response) => {
        alert(`Teacher ${name} created successfully.`);
        navigate("/listTeacher");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Create Teacher</h2>
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
          <label>University</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Degree</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? ""}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
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
            value="Create Teacher"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTeacher;
