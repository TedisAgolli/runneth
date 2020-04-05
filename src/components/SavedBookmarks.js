/*global chrome*/
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FileView from "./FileView";
import { getSavedLinks } from "./ChromeCacheAccessor";

function SavedBookmarks(props) {
  const [folderInFocus, setFolderInFocus] = useState("folder");
  const [savedLinks, setSavedLinks] = useState([]);

  useEffect(async () => {
    getSavedLinks(folderInFocus, setSavedLinks);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <FileView savedLinks={savedLinks}></FileView>
        </Col>
      </Row>
    </Container>
  );
}

export default SavedBookmarks;
