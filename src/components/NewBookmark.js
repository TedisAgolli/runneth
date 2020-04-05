/*global chrome*/
import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import { addNewBookmark } from "./ChromeCacheAccessor";

function NewBookmark(props) {
  // Update the relevant fields with the new data.
  const setDOMInfo = (info) => {
    document.getElementById("linkToSave").value = info.linkToSave;
  };

  //
  // Once the DOM is ready...
  window.addEventListener("DOMContentLoaded", () => {
    // ...query for the active tab...
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
    addNewBookmark(folderName, link);
  };

  return (
    <Container>
      <Row>
        <input type="text" id="linkToSave"></input>
        <Button onClick={saveBookmark}>Add</Button>
      </Row>
    </Container>
  );
}

export default NewBookmark;
