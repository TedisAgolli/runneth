const addNewBookmark = (folderName, link, setSavedLinks) => {
  console.log("adding new");
  setSavedLinks([link]);
};

const getSavedLinks = (folderName, setSavedLinks) => {
  console.log(folderName);
  setSavedLinks([
    "https://www.google.com",
    "https://news.ycombinator.com/",
    "https://news.ycombinator.com/",
  ]);
};

const deleteLinkInFolder = (folder, setSavedLinks) => {
  console.log("here");

  return (link) => {
    console.log("deleting", folder, link);
    setSavedLinks([]);
  };
};

const getActivePageInfo = (setActivePageInfo) => {
  const info = { linkHref: "https://www.google.com", linkName: "Google" };
  setActivePageInfo(info);
};
export { addNewBookmark, getSavedLinks, deleteLinkInFolder, getActivePageInfo };
