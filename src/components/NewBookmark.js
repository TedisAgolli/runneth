/*global chrome*/
import React, { useState, useEffect } from "react";
import { Row, Button, Container } from "react-bootstrap";
import { addNewBookmark } from "./ChromeCacheAccessor";

function NewBookmark(props) {
  let isDisabled = props.savedLinks.length == 5;
  let [linkHref, setLinkHref] = useState(null);
  let [linkName, setLinkName] = useState(null);
  const setDOMInfo = (info) => {
    setLinkHref(info.linkHref);
    setLinkName(info.linkName);
  };

  useEffect(
    () =>
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id,
            { from: "popup", subject: "DOMInfo" },
            setDOMInfo
          );
        }
      ),
    linkHref
  );

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
