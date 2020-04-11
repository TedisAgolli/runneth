import React from "react";
import { Row, Button } from "react-bootstrap";

function Link(props) {
  const linkHref = props.linkHref;
  const linkName = props.linkName;
  const deleteLink = () => props.deleteLink(linkHref);

  return (
    <Row className="mt-2">
      <a href={linkHref}>{linkName}</a>
      <Button variant="danger" onClick={deleteLink}>
        Delete
      </Button>
    </Row>
  );
}

export default Link;
