/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ReactLoading from "react-loading";

import About from "../Atv-01/About";
import Home from "../Atv-05/components/Home";

import CreateStudent from "../Atv-04/Crud/Student/CreateStudent";
import ListStudent from "../Atv-04/Crud/Student/ListStudent";
import EditStudent from "../Atv-04/Crud/Student/EditStudent";

import CreateTeacher from "../Atv-04/Crud/Teacher/CreateTeacher";
import ListTeacher from "../Atv-04/Crud/Teacher/ListTeacher";
import EditTeacher from "../Atv-04/Crud/Teacher/EditTeacher";
import { PrivateRoutes, PrivateRouteWithoutLogin } from "../Atv-05/routes";
import { useAuth } from "../Atv-05/context/AuthContext";
import { useState } from "react";

export default function NavBar() {
  const [loading, setLoading] = useState(false);
  const { signed, handleLogout } = useAuth();
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

        {signed && (
          <div>
            Olá,{" "}
            {JSON.parse(sessionStorage.getItem("@AuthFirebase:user")).email}
            {loading ? (
              <ReactLoading type="spin" color="blue" height={30} width={30} />
            ) : (
              <button
                style={{ marginLeft: 20 }}
                className="btn btn-danger"
                onClick={() => {
                  setLoading(true);
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<PrivateRouteWithoutLogin />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route
          path="about"
          element={
            <PrivateRoutes>
              <About />
            </PrivateRoutes>
          }
        />

        <Route
          path="createStudent"
          element={
            <PrivateRoutes>
              <CreateStudent />
            </PrivateRoutes>
          }
        />

        <Route
          path="listStudent"
          element={
            <PrivateRoutes>
              <ListStudent />
            </PrivateRoutes>
          }
        />

        <Route
          path="editStudent/:id"
          element={
            <PrivateRoutes>
              <EditStudent />
            </PrivateRoutes>
          }
        />

        <Route
          path="createTeacher"
          element={
            <PrivateRoutes>
              <CreateTeacher />
            </PrivateRoutes>
          }
        />

        <Route
          path="listTeacher"
          element={
            <PrivateRoutes>
              <ListTeacher />
            </PrivateRoutes>
          }
        />

        <Route
          path="editTeacher/:id"
          element={
            <PrivateRoutes>
              <EditTeacher />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
}
