import React from "react";
import { Container } from "react-bootstrap";
import Bookmark from "./Bookmark";

function FileView(props) {
  const displayLinks = (links) => {
    links = links ? links : [];
    links = links.map((link) => {
      return <Bookmark deleteLink={props.deleteLink} link={link}></Bookmark>;
    });
    return links;
  };

  return <Container>{displayLinks(props.savedLinks)}</Container>;
}

export default FileView;
