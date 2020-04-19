import React from "react";
import { Row, Button } from "react-bootstrap";

function Bookmark(props) {
  const formatLink = (link) => {
    if (link.length > 21) return link.substr(0, 21) + "...";
    else return link;
  };
  const linkHref = props.linkHref;
  const linkName = formatLink(props.linkName);
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
              X
            </Button>
          </td>
        </tr>
      </table>
    </Row>
  );
}

export default Bookmark;
