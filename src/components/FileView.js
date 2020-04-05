import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function FileView(props) {
  let savedLinks = props.savedLinks;
  const displayLinks = (links) => {
    console.log(links);
    links = links ? links : [];

    links = links.map((link) => {
      return (
        <Row className="mt-2">
          <a href={link}>{link}</a>
        </Row>
      );
    });

    return links;
  };

  return <Container>{displayLinks(savedLinks)}</Container>;
}

export default FileView;
