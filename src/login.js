import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { context } from "./context";

export default function Login() {

  const context2=useContext(context);
  const [username, setUsername] = useState("");

  function validateForm() {
    return username.length >= 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
    context.changeLoggin();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Login</Form.Label>
          <br />
          <br />
          <Form.Label>Username: </Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button type="submit" disabled={!validateForm()}>
          {
            username.length>=5 ?<Link to={`/post/`}>login</Link>:"Error"
          }
        </Button>
      </Form>
    </div>
  );
}
