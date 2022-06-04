import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FirebaseServiceStudent from "../../../../services/Student";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    FirebaseServiceStudent.searchStudent((student) => {
      setName(student.name);
      setCourse(student.course);
      setIra(student.ira);
    }, params.id);
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedStudent = { name, course, ira };

    FirebaseServiceStudent.updateStudent(
      () => {
        alert(`Student ${name} updated successfully.`);
        navigate("/listStudent");
      },
      params.id,
      updatedStudent
    );
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Edit Student</h2>
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
            value="Edit Student"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
