import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import MultiClamp from "react-multi-clamp";

function Bookmark(props) {
  const { linkHref, linkName } = props;
  let [isHovered, setIsHovered] = useState(false);

  const deleteLink = () => props.deleteLink(linkHref);
  const onTitleHover = () => {
    setIsHovered(true);
  };
  const onTitleLeave = () => {
    setIsHovered(false);
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
              style={{
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {isHovered ? (
                linkName
              ) : (
                <MultiClamp ellipsis="..." clamp={2}>
                  {linkName}
                </MultiClamp>
              )}
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
