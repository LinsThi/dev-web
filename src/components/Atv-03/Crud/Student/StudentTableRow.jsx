import axios from "axios";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  const handleDeleteStudent = useCallback(() => {
    if (window.confirm(`Do you want to remove student from id ${_id}?`)) {
      axios
        .delete(`http://localhost:3002/crud/student/delete/${_id}`)
        .then((_) => alert("Student " + name + " removed successfuly"))
        .catch((error) => console.log(error));

      window.location.reload();
    }
  }, [_id, name]);

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td>
        <Link to={`/editStudent/${_id}`} className="btn btn-warning">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDeleteStudent}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default StudentTableRow;
