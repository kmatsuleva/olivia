import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactUsForm = () => {
  const [name, setName] = useState("");

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Type your message here"
          aria-describedby="characters-counter"
        />
        <Form.Text id="characters-counter" muted>
          Characters: 2000
        </Form.Text>
      </Form.Group>
      <Button type="submit">Contact Us</Button>
    </Form>
  );
};

export default ContactUsForm;
