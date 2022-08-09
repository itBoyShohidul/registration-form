import React, { useState } from "react";
import leftImg from "./images/left.jpg";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [passValid, setPassValid] = useState(true);

  const submitHandle = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      setPassValid(false);
    } else if (passValid) {
      setSubmitted(true);
      console.log(values);
    }
  };
  return (
    <div className="App">
      <div className="left-side">
        {!submitted ? <img src={leftImg} /> : null}
        {submitted ? (
          <h2 className="success-text">
            Registration successful ! <br />
            Your data is in our console.
          </h2>
        ) : null}
      </div>
      <div className="right-side">
        <form>
          <label>First Name</label> <br />
          <input
            className="input"
            type="text"
            name="firstName"
            onChange={(e) => {
              setValues({ ...values, firstName: e.target.value });
            }}
            value={values.firstName}
          />
          <br />
          <label htmlFor="lastName">Last Name</label> <br />
          <input
            className="input"
            type="text"
            name="lastName"
            onChange={(e) => {
              setValues({ ...values, lastName: e.target.value });
            }}
            value={values.lastName}
          />
          <br />
          <label htmlFor="email">Email</label> <br />
          <input
            className="input"
            type="email"
            name="email"
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
            value={values.email}
          />
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            className="input"
            type="password"
            name="firstName"
            onChange={(e) => {
              setValues({ ...values, password: e.target.value });
            }}
            value={values.password}
          />
          <br />
          <label htmlFor="confirmPassword">Confrim Password</label> <br />
          <input
            className="input"
            type="password"
            name="confirmPassword"
            onChange={(e) => {
              setValues({ ...values, confirmPassword: e.target.value });
            }}
            value={values.confirmPassword}
          />
          {!passValid ? (
            <p className="valid">Your password does not match </p>
          ) : (
            ""
          )}
          <br />
          <div className="check">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span className="accept">I accept all terms and condition</span>
          </div>
          <button type="submit" onClick={submitHandle}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
