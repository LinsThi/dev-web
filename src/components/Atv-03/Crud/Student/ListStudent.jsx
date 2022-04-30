import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import StudentTableRow from "./StudentTableRow";

const ListStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/crud/student/list")
      .then((response) => setStudents(response.data));
  }, []);

  const generateTable = useCallback(() => {
    if (!students) return;
    return students.map((student, i) => {
      return <StudentTableRow student={student} key={i} />;
    });
  }, [students]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List Student</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>IRA</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable}</tbody>
      </table>
    </div>
  );
};

export default ListStudent;
