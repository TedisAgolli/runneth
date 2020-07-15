import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import NewBookmark from "./NewBookmark";
import FileView from "./FileView";
import browserAPI from "./BrowserApi/CacheAccessor";

function MainView() {
  const [savedLinks, setSavedLinks] = useState([]);
  const setSavedAndUpdateBadge = (newSavedLinks) => {
    setSavedLinks(newSavedLinks);
    browserAPI.setBadge(newSavedLinks.length.toString());
  };
  const [folderInFocus, setFolderInFocus] = useState("folder");
  useEffect(() => {
    browserAPI.getSavedLinks(folderInFocus, setSavedAndUpdateBadge);
    setSavedAndUpdateBadge(savedLinks);
  }, []);
  return (
    <Container id="main">
      <Row className="mb-2">
        <NewBookmark
          savedLinks={savedLinks}
          setSavedLinks={setSavedAndUpdateBadge}
        />
      </Row>
      <Row>
        <FileView
          deleteLink={browserAPI.deleteLinkInFolder(
            folderInFocus,
            setSavedAndUpdateBadge
          )}
          savedLinks={savedLinks}
        ></FileView>
      </Row>
    </Container>
  );
}

export default MainView;
