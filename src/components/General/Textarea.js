import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const Textarea = ({ label, placeholder, limit }) => {
  const [content, setContent] = useState("");

  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        as="textarea"
        rows={6}
        name="message"
        placeholder={placeholder}
        onChange={(e) => setFormattedContent(e.target.value)}
        value={content}
        aria-describedby="characters-counter"
      />
      <Form.Text id="characters-counter" muted>
        {/* todo: add dynamically generated id */}
        Characters: {limit - content.length}
      </Form.Text>
    </Form.Group>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  limit: PropTypes.string,
};

export default Textarea;
