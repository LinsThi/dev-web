import * as React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ReactLoading from "react-loading";
import { useCallback } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    (event) => {
      setLoading(true);

      async function login() {
        console.log("aaaa");
        event.preventDefault();
        await signIn(email, password);
        setLoading(false);
      }

      if ((email !== "") & (password !== "")) login();
    },
    [email, password, signIn]
  );

  return (
    <div className="content">
      <main style={{ width: "30%", margin: 100 }}>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Login: </label>
            <input
              type="text"
              className="form-control"
              value={email == null || email === undefined ? "" : email}
              name="login"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Senha: </label>
            <input
              type="password"
              className="form-control"
              value={password ?? ""}
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-group" style={{ paddingTop: 20 }}>
            {loading ? (
              <ReactLoading type="spin" color="blue" height={30} width={30} />
            ) : (
              <input type="submit" value="Submit" className="btn btn-primary" />
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default Home;
