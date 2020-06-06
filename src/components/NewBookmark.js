/*global chrome*/
import React, { useState, useEffect } from "react";
import { Row, Button, Container } from "react-bootstrap";
import browserAPI from "./BrowserApi/CacheAccessor";
import "./css/table-style.css";

function NewBookmark(props) {
  const MAX_NUM_BOOKMARKS = 5;
  let [linkHref, setLinkHref] = useState(null);
  let [linkName, setLinkName] = useState(null);
  const setActivePageInfo = (info) => {
    setLinkHref(info.linkHref);
    setLinkName(info.linkName);
  };

  const linkAlreadyExists = (savedLinks, currentLink) => {
    const filteredLinks = savedLinks.filter(
      (savedLink) => savedLink.linkHref === currentLink
    );
    return filteredLinks.length > 0;
  };

  let isDisabled =
    linkAlreadyExists(props.savedLinks, linkHref) ||
    props.savedLinks.length >= MAX_NUM_BOOKMARKS ||
    linkName === null ||
    linkName.trim() === "";

  useEffect(() => browserAPI.getActivePageInfo(setActivePageInfo), linkHref);

  const saveBookmark = () => {
    let folderName = "folder";
    browserAPI.addNewBookmark(
      folderName,
      { linkHref, linkName },
      props.setSavedLinks
    );
  };

  const handleLinkNameChange = (e) => {
    setLinkName(e.currentTarget.value);
  };

  return (
    <Container>
      <Row>
        <table class="newBookmarkTable">
          <tr>
            <td>
              <input
                type="text"
                id="linkToSave"
                value={linkName}
                onChange={handleLinkNameChange}
              ></input>
            </td>
            <td>
              <Button
                variant="warning"
                size="sm"
                disabled={isDisabled}
                onClick={saveBookmark}
              >
                Add
              </Button>
            </td>
          </tr>
        </table>
      </Row>
    </Container>
  );
}

export default NewBookmark;
