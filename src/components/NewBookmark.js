/*global chrome*/
import React, { useState, useEffect } from "react";
import { Row, Button, Container } from "react-bootstrap";
import { addNewBookmark, getActivePageInfo } from "./FakeCacheAccessor";

function NewBookmark(props) {
  let isDisabled = props.savedLinks.length == 5;
  let [linkHref, setLinkHref] = useState(null);
  let [linkName, setLinkName] = useState(null);
  const setActivePageInfo = (info) => {
    setLinkHref(info.linkHref);
    setLinkName(info.linkName);
  };

  useEffect(() => getActivePageInfo(setActivePageInfo), linkHref);

  const saveBookmark = () => {
    let folderName = "folder";
    addNewBookmark(folderName, { linkHref, linkName }, props.setSavedLinks);
  };

  return (
    <Container>
      <Row>
        <input type="text" id="linkToSave" value={linkName}></input>
        <Button disabled={isDisabled} onClick={saveBookmark}>
          Add
        </Button>
      </Row>
    </Container>
  );
}

export default NewBookmark;
