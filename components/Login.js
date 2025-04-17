import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Grid from "./Grid";
import "./Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Dummy authentication (replace with API call)
    if (username === "admin" && password === "password") {
      navigate("/secondpage");
    } else {
      setError("Invalid username or password");
    }
    setLoading(false);
  };

  return (
    <div className="top1">
      <div className="top2 p-6 bg-white shadow-lg rounded-lg max-w-sm w-full">
        <div className="login">
          
          <h2 className="log">Login</h2>

          <form className="form" onSubmit={handleLogin}>
            {/* Username Field */}
            <div className="user">
              {/* <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label> */}
              <input
                // id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password Field (Next Line) */}
            <div className="pass">
              {/* <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label> */}
              <input
                // id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Error Message */}
            {error && <p className="submit">{error}</p>}

            {/* Submit Button */}
            <button
              className="sbtn"
              type="submit"
              // className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none disabled:opacity-50"
              disabled={loading || !username || !password}
            >
              {loading ? "Logging in..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;