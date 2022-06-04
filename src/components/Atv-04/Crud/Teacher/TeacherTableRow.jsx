import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import FirebaseServiceTeacher from "../../../../services/Teacher";

const TeacherTableRow = (props) => {
  const { _id, name, university, degree } = props.teacher;

  const handleDeleteTeacher = useCallback(() => {
    if (window.confirm(`Do you want to remove teacher from id ${_id}?`)) {
      FirebaseServiceTeacher.deleteTeacher(
        () => alert("Teacher " + name + " removed successfuly"),
        _id
      );
    }
  }, [_id, name]);

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td>
        <Link to={`/editTeacher/${_id}`} className="btn btn-warning">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDeleteTeacher}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TeacherTableRow;
