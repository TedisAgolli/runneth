/*global chrome*/
import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import { addNewBookmark } from "./ChromeCacheAccessor";

function NewBookmark(props) {
  let isDisabled = props.savedLinks.length == 5;
  const setDOMInfo = (info) => {
    document.getElementById("linkToSave").value = info.linkToSave;
  };

  window.addEventListener("DOMContentLoaded", () => {
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
    );
  });

  const saveBookmark = () => {
    let link = document.getElementById("linkToSave").value;
    let folderName = "folder";
    addNewBookmark(folderName, link, props.setSavedLinks);
  };

  return (
    <Container>
      <Row>
        <input type="text" id="linkToSave"></input>
        <Button disabled={isDisabled} onClick={saveBookmark}>
          Add
        </Button>
      </Row>
    </Container>
  );
}

export default NewBookmark;
