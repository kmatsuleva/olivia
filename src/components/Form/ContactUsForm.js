import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Textarea from "../General/Textarea";

const ContactUsForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: ""
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
  };

  return (
    <Form onSubmit={getUserInput}>
      {/* todo: currently only name and email are passed in conslole, without textarea input */}
      <Form.Group>
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
      <Textarea
        label="Message"
        placeholder="Type your message here"
        limit="2000"
      />
      <Button type="submit">Contact Us</Button>
    </Form>
  );
};

export default ContactUsForm;
