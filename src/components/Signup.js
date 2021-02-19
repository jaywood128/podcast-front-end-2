import { useState, useEffect } from "react";
import React from "react";

const Signup = () => {
  const [loading, setLoading] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});

  async function postFormFetch() {
    console.log(inputs);
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.name}
          required
        />
        <br />
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.username}
          required
        />
        <br />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.email}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.password}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
