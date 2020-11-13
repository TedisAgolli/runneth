import React from "react";
import { Container } from "react-bootstrap";
import Bookmark from "./Bookmark";

function FileView(props) {
  const displayLinks = (links) => {
    links = links ? links : [];
    links = links.map((link) => {
      return (
        <Bookmark
          key={link.linkHref}
          deleteLink={props.deleteLink}
          linkHref={link.linkHref}
          linkName={link.linkName}
        ></Bookmark>
      );
    });
    return links;
  };

  return (
    <Container style={{ maxWidth: "300px" }}>
      {displayLinks(props.savedLinks)}
    </Container>
  );
}

export default FileView;
