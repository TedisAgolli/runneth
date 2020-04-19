const addNewBookmark = (folderName, link, setSavedLinks) => {
  console.log("adding new");
  setSavedLinks([link]);
};

const getSavedLinks = (folderName, setSavedLinks) => {
  console.log(folderName);
  setSavedLinks([
    {
      linkHref: "https://www.google.com",
      linkName: "Google".repeat(6),
    },
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
  const info = {
    linkHref: "https://www.google.com",
    linkName: "Google".repeat(6),
  };
  setActivePageInfo(info);
};
export { addNewBookmark, getSavedLinks, deleteLinkInFolder, getActivePageInfo };
