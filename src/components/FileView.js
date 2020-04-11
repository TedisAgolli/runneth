import React from "react";
import { Container } from "react-bootstrap";
import Bookmark from "./Bookmark";

function FileView(props) {
  const displayLinks = (links) => {
    links = links ? links : [];
    links = links.map((link) => {
      return (
        <Bookmark
          deleteLink={props.deleteLink}
          linkHref={link.linkHref}
          linkName={link.linkName}
        ></Bookmark>
      );
    });
    return links;
  };

  return <Container>{displayLinks(props.savedLinks)}</Container>;
}

export default FileView;
