/*global chrome*/
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FileView from "./FileView";

function SavedBookmarks(props) {
  const [folderInFocus, setFolderInFocus] = useState(null);

  return (
    <Container>
      <Row>
        <Col>
          <FileView folder={folderInFocus}></FileView>
        </Col>
      </Row>
    </Container>
  );
}

export default SavedBookmarks;
