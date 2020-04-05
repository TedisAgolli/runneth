import React from "react";
import { Row, Button } from "react-bootstrap";

function Link(props) {
  const link = props.link;
  const deleteLink = () => props.deleteLink(link);

  return (
    <Row className="mt-2">
      <a href={link}>{link}</a>
      <Button variant="danger" onClick={deleteLink}>
        Delete
      </Button>
    </Row>
  );
}

export default Link;
