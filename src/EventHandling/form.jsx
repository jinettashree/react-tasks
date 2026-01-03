import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name:"",
    userName:"",
    password:"",
  });

  const [error, setError] = useState("");

  const handleChange = (e, field) => {
    const key = e.target.value;
    setData({...data, [field]:e.target.value});

    if (field === "password") {
      if (key.length < 5) {
        setError("Password must be at least 5 characters");
      } else {
        setError("");
      }
    }
  };

  return (
  <>
    <div className="form-fields">
      <h3>Enter User Details</h3>

      <label htmlFor="name">Name: </label>
      <input id="name" value={data.name} onChange={e => handleChange(e, "name")}/>

      <label htmlFor="userName">User Name: </label>
      <input id="userName" value={data.userName} onChange={e => handleChange(e, "userName")}/>

      <label htmlFor="password">Password: </label>
      <input id="password" type="password" value={data.password} onChange={e => handleChange(e, "password")}/>
    </div>

    {error && <p style={{color :"red"}}>{error}</p>}
  </>
  );
}