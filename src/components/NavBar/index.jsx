/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import About from "../Atv-01/About";
import Home from "../Atv-01/Home";

import CreateStudent from "../Atv-02/Crud/Student/CreateStudent";
import ListStudent from "../Atv-02/Crud/Student/ListStudent";
import EditStudent from "../Atv-02/Crud/Student/EditStudent";

import CreateTeacher from "../Atv-02/Crud/Teacher/CreateTeacher";
import ListTeacher from "../Atv-02/Crud/Teacher/ListTeacher";
import EditTeacher from "../Atv-02/Crud/Teacher/EditTeacher";

export default function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/createStudent" className="dropdown-item">
                    Create Student
                  </Link>
                </li>
                <li>
                  <Link to="/listStudent" className="dropdown-item">
                    List Student
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/createTeacher" className="dropdown-item">
                    Create Teacher
                  </Link>
                </li>
                <li>
                  <Link to="/listTeacher" className="dropdown-item">
                    List Teacher
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createTeacher" element={<CreateTeacher />} />
        <Route path="listTeacher" element={<ListTeacher />} />
        <Route path="editTeacher/:id" element={<EditTeacher />} />
      </Routes>
    </div>
  );
}
