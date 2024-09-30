import React, { useState } from "react";
import _nonAuthHttp from "../../Utils/Api/_nonAuthHttp";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async () => {
    try {
      const res = await _nonAuthHttp.post("/Login", {
        username: userName,
        password: password,
      });

      if (res.data.error) {
        alert("Login error");
      } else {
        localStorage.setItem("jwtToken", res.data.output.access_token);
        sessionStorage.setItem("key", "UserLogedIN");
        sessionStorage.setItem("Name", res.data.output.user);
        sessionStorage.setItem("Email", res.data.output.email);

        navigate("/Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handelSubmit}>Login</button>
    </div>
  );
}

export default Login;
