import React from "react";
import { teachers } from "./data";
import TeacherTableRow from "./TeacherTableRow";

const ListTeacher = () => {
  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return <TeacherTableRow teacher={teacher} key={i} />;
    });
  }

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
