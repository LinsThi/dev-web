import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import FirebaseServiceStudent from "../../../../services/Student";

const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  const handleDeleteStudent = useCallback(() => {
    if (window.confirm(`Do you want to remove student from id ${_id}?`)) {
      FirebaseServiceStudent.deleteStudent(
        () => alert("Student " + name + " removed successfuly"),
        _id
      );
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
