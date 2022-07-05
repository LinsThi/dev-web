/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { AuthProvider } from "./components/Atv-05/context/AuthContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <NavBar />
    </AuthProvider>
  );
}

export default App;
