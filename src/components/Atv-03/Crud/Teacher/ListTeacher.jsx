import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import TeacherTableRow from "./TeacherTableRow";

const ListTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/crud/teacher/list")
      .then((response) => setTeachers(response.data));
  }, []);

  const generateTable = useCallback(() => {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return <TeacherTableRow teacher={teacher} key={i} />;
    });
  }, [teachers]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List Teacher</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>University</th>
          <th>Degree</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListTeacher;
