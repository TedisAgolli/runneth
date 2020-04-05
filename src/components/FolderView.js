/*global chrome*/
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function FolderView(props) {
  const [folders, setFolders] = useState(["1", "2"]);
  const foldersToShow = folders.map(folder => {
    return (
      <Row className="mt-2" key={folder}>
        <Button onClick={() => props.setFolderInFocus(folder)}>{folder}</Button>
      </Row>
    );
  });
  //   useEffect(() => {
  // chrome.storage.sync.get(["folders"], function(result) {
  //   console.log("Value currently is " + result.key);
  // });
  //   });

  return (
    <Container>
      <Col>{foldersToShow}</Col>
    </Container>
  );
}

export default FolderView;
