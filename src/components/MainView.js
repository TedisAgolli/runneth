import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import NewBookmark from "./NewBookmark";
import FileView from "./FileView";
import { getSavedLinks, deleteLinkInFolder } from "./ChromeCacheAccessor";

function MainView() {
  const [savedLinks, setSavedLinks] = useState([]);
  const [folderInFocus, setFolderInFocus] = useState("folder");
  useEffect(async () => {
    getSavedLinks(folderInFocus, setSavedLinks);
  }, []);
  return (
    <Container id="main">
      <Row className="mb-2">
        <NewBookmark savedLinks={savedLinks} setSavedLinks={setSavedLinks} />
      </Row>
      <Row>
        <FileView
          deleteLink={deleteLinkInFolder(folderInFocus, setSavedLinks)}
          savedLinks={savedLinks}
        ></FileView>
      </Row>
    </Container>
  );
}

export default MainView;
