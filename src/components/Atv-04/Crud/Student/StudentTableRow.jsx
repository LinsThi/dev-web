import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import FirebaseServiceStudent from "../../../../services/Student";
import { Toaster, toast } from "react-hot-toast";

const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  const showToast = (name) =>
    toast.success("Student " + name + " removed successfully");

  const handleDeleteStudent = useCallback(() => {
    if (window.confirm(`Do you want to remove student from id ${_id}?`)) {
      FirebaseServiceStudent.deleteStudent(() => showToast(name), _id);
    }
  }, [_id, name]);

  return (
    <div>
      <Toaster />
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
    </div>
  );
};
export default StudentTableRow;
