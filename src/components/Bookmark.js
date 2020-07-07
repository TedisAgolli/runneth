import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";

function Bookmark(props) {
  const MAX_LINK_NAME_LENGTH = 42;
  const formatLinkName = (linkName) => {
    if (linkName && linkName.length > MAX_LINK_NAME_LENGTH)
      return linkName.substr(0, MAX_LINK_NAME_LENGTH) + "...";
    else return linkName;
  };

  const { linkHref, linkName } = props;
  const formattedLinkName = formatLinkName(linkName);
  let [linkNameToDisplay, setLinkNameToDisplay] = useState(formattedLinkName);

  const deleteLink = () => props.deleteLink(linkHref);
  const onTitleHover = () => {
    setLinkNameToDisplay(linkName);
  };
  const onTitleLeave = () => {
    setLinkNameToDisplay(formattedLinkName);
  };
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
              onMouseEnter={onTitleHover}
              onMouseLeave={onTitleLeave}
              style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
            >
              {linkNameToDisplay}
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
