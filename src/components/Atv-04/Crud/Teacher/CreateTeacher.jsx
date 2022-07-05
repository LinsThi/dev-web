import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseServiceTeacher from "../../../../services/Teacher";
import { Toaster, toast } from "react-hot-toast";

const CreateTeacher = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const showToast = () => toast.error("PREENCHA TODOS OS CAMPOS.");
  const successToast = (name) =>
    toast.success("Teacher " + name + " created successfully");

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((name !== "") & (university !== "") & (degree !== "")) {
      const newTeacher = { name, university, degree };
      FirebaseServiceTeacher.createTeacher(newTeacher, () => {
        successToast(name);
        navigate("/listTeacher");
      });
    } else {
      showToast();
    }
  };

  return (
    <div>
      <Toaster />
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
