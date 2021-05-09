import React, { useState, useEffect } from "react";
import NewBookmark from "./NewBookmark";
import BookmarkList from "./BookmarkList";
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
    <div>
      <NewBookmark
        savedLinks={savedLinks}
        setSavedLinks={setSavedAndUpdateBadge}
      />
      <BookmarkList
        deleteLink={browserAPI.deleteLinkInFolder(
          folderInFocus,
          setSavedAndUpdateBadge
        )}
        savedLinks={savedLinks}
      />
    </div>
  );
}

export default MainView;
