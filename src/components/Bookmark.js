import React from "react";
import { Row, Button } from "react-bootstrap";

function Link(props) {
  const linkHref = props.linkHref;
  const linkName = props.linkName;
  const deleteLink = () => props.deleteLink(linkHref);

  return (
    <Row className="mt-2">
      <table>
        <tr>
          <td>
            <a href={linkHref}>{linkName}</a>
          </td>
          <td>
            <Button variant="danger" onClick={deleteLink}>
              Delete
            </Button>
          </td>
        </tr>
      </table>
    </Row>
  );
}

export default Link;
