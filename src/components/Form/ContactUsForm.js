import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactUsForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const getUserInput = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData, [name]: value
    });
  }

  return (
    <Form onSubmit={getUserInput}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Your name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
          value={userData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          placeholder="Type your message here"
          value={userData.message}
          onChange={handleInputChange}
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
