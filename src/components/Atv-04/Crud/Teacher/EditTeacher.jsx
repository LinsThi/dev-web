import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FirebaseServiceTeacher from "../../../../services/Teacher";

const EditTeacher = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    FirebaseServiceTeacher.searchTeacher((teacher) => {
      setName(teacher.name);
      setUniversity(teacher.university);
      setDegree(teacher.degree);
    }, params.id);
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTeacher = { name, university, degree };

    FirebaseServiceTeacher.updateTeacher(
      () => {
        alert(`Teacher ${name} updated successfully.`);
        navigate("/listTeacher");
      },
      params.id,
      updatedTeacher
    );
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
