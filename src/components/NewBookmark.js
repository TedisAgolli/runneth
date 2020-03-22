/*global chrome*/

import React from "react";

function NewBookmark(props) {
  // Update the relevant fields with the new data.
  const setDOMInfo = info => {
    document.getElementById("linkToSave").value = info.linkToSave;
  };

  const saveBookmark = () => {
    let link = document.getElementById("linkToSave").value;
    let folder = "folder";
    chrome.storage.sync.set({ key: link }, function() {
      console.log("Value is set to " + link);
    });
    //
    chrome.storage.sync.get(["key"], function(result) {
      console.log("Value currently is " + result.key);
    });
    //
    console.log(link, folder);
  };
  //
  // Once the DOM is ready...
  window.addEventListener("DOMContentLoaded", () => {
    // ...query for the active tab...
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { from: "popup", subject: "DOMInfo" },
          setDOMInfo
        );
      }
    );
  });

  return (
    <div>
      <input type="text" id="linkToSave"></input>
      <button onClick={saveBookmark}>Add</button>
    </div>
  );
}

export default NewBookmark;
