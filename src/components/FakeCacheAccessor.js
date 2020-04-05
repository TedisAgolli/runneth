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
export { addNewBookmark, getSavedLinks, deleteLinkInFolder };
