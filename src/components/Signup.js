import { useState, useEffect } from "react";
import React from "react";

const Signup = () => {
  const [loading, setLoading] = useState("");
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [result, setResult] = useState({});

  async function postFormFetch() {
    console.log(input);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    try {
      setLoading("true");
      const response = await fetch(`http://127.0.0.1:8080/signup`, settings);
      const json = await response.json();
      if (response.status !== 200) throw Error(json.message);
      return json;
    } catch (error) {
      alert(error);
      setLoading("null");
    }
  }

  // useEffect(() => {
  //   postFormFetch();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    postFormFetch();
  };

  const handleInputChange = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="main">
      <div className="signup-wrap">
        <div className="h2">
          <h2>Sign up</h2>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrap">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.name}
              required
            />
            <br />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              name="username"
              placeholder="Username"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.username}
              required
            />
            <br />
          </div>
          <div className="input-wrap">
            <input
              type="email"
              name="email"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.email}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-wrap">
            <input
              type="password"
              name="password"
              placeholder="Password"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.password}
            />
          </div>
          <div className="signup-button-container">
            <button className="signup-buttom" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
