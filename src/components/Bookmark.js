import React from "react";
import { Row, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

function Bookmark(props) {
  const formatLink = (link) => {
    if (link && link.length > 21) return link.substr(0, 21) + "...";
    else return link;
  };

  const { linkHref, linkName } = props;
  const otherLink = linkName.substr(0, 53) + "...";
  const formattedLinkName = formatLink(linkName);
  const deleteLink = () => props.deleteLink(linkHref);

  const tooltip = <Tooltip>{otherLink}</Tooltip>;
  return (
    <Row className="mt-0">
      <table>
        <tr>
          <td>
            <OverlayTrigger
              id={linkHref}
              placement="top"
              overlay={tooltip}
              popperConfig={{
                modifiers: {
                  preventOverflow: {
                    boundariesElement: "viewport",
                    enabled: false,
                  },
                },
              }}
            >
              <Button
                size="sm"
                variant="outline-primary"
                href={linkHref}
                target="_blank"
              >
                {formattedLinkName}
              </Button>
            </OverlayTrigger>
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
