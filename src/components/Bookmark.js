import React from "react";
import { Row, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

function Bookmark(props) {
  const MAX_LINK_NAME_LENGTH = 120;
  const formatLinkName = (linkName) => {
    if (linkName && linkName.length > MAX_LINK_NAME_LENGTH)
      return linkName.substr(0, MAX_LINK_NAME_LENGTH) + "...";
    else return linkName;
  };

  const { linkHref, linkName } = props;
  const formattedLinkName = formatLinkName(linkName);
  const deleteLink = () => props.deleteLink(linkHref);

  return (
    <Row className="mt-0">
      <table>
        <tr>
          <td>
            <Button
              size="sm"
              variant="outline-primary"
              href={linkHref}
              target="_blank"
            >
              {formattedLinkName}
            </Button>
          </td>
          <td>
            <Button variant="danger" size="sm" onClick={deleteLink}>
              X
            </Button>
          </td>
        </tr>
      </table>
    </Row>
  );
}

export default Bookmark;
