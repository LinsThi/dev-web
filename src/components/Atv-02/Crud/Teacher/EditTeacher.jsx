import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { teachers } from "./data.js";

const EditTeacher = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();

  useEffect(() => {
    const teacher = teachers[params.id];
    setName(teacher.name);
    setUniversity(teacher.university);
    setDegree(teacher.degree);
  }, [params.id]);

  const handleSubmit = (event) => {
    alert(`Nome: ${name} \nUniversidade: ${university}\nTitulação: ${degree}`);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Edit Teacher</h2>
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
            value="Edit Teacher"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTeacher;
