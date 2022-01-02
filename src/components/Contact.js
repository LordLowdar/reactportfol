import React, { useState } from 'react';
import { validateEmail } from './utils/help.js';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errMessage, setErrMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!errMessage) {
    }
  };
  const change = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Name"
          value={state.name}
          onChange={change}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={state.email}
          onChange={change}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={state.message}
          onChange={change}
          name="message"
        />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />{' '}
    </Form>
  );
}

export default Contact;
