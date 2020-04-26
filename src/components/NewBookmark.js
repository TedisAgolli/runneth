/*global chrome*/
import React, { useState, useEffect } from "react";
import { Row, Button, Container } from "react-bootstrap";
import { getActivePageInfo, addNewBookmark } from "./ChromeCacheAccessor";

function NewBookmark(props) {
  const MAX_NUM_BOOKMARKS = 5;
  let [linkHref, setLinkHref] = useState(null);
  let [linkName, setLinkName] = useState(null);
  const setActivePageInfo = (info) => {
    setLinkHref(info.linkHref);
    setLinkName(info.linkName);
  };

  let isDisabled =
    props.savedLinks.length >= MAX_NUM_BOOKMARKS ||
    linkName === null ||
    linkName.trim() === "";

  useEffect(() => getActivePageInfo(setActivePageInfo), linkHref);

  const saveBookmark = () => {
    let folderName = "folder";
    addNewBookmark(folderName, { linkHref, linkName }, props.setSavedLinks);
  };

  const handleLinkNameChange = (e) => {
    setLinkName(e.currentTarget.value);
  };

  return (
    <Container>
      <Row>
        <table>
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
              <Button disabled={isDisabled} onClick={saveBookmark}>
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
