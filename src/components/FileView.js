import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Bookmark from "./Bookmark";

function FileView(props) {
  let savedLinks = props.savedLinks;
  const displayLinks = (links) => {
    console.log(links);
    links = links ? links : [];

    links = links.map((link) => {
      return <Bookmark deleteLink={props.deleteLink} link={link}></Bookmark>;
    });

    return links;
  };

  return <Container>{displayLinks(savedLinks)}</Container>;
}

export default FileView;
