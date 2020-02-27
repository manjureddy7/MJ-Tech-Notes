import React, { useState } from 'react';

import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const AUTHENTICATE_USER = gql`
mutation authenticateUser($email: String!, $password: String!){
  authenticateUser(input: {email: $email, password: $password}){
    email
  }
}
`;

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [authenticateUser, { data }] = useMutation(AUTHENTICATE_USER);
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          authenticateUser({
            variables: {
              email,
              password
            }
          });
          localStorage.setItem("user", data);
          if (data && data.authenticateUser && data.authenticateUser.email) {
            props.history.push('/');
          } else {
            setErrorMsg("Invalid Username/Password")
          }
        }}
      >
        <div className="field">
          <label className="label">Email:</label>
          <div className="control">
            <input
              className="input"
              name="email"
              type="text"
              placeholder="Please enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password:</label>
          <div className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
        <div>
          {errorMsg}
        </div>
      </form>
    </>
  )
}

export default withRouter(SignIn);