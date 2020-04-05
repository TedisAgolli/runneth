const addNewBookmark = (folderName, link) => {
  console.log("adding new");
};

const getSavedLinks = (folderName, setSavedLinks) => {
  console.log(folderName);
  setSavedLinks([
    "https://www.google.com",
    "https://news.ycombinator.com/",
    "https://news.ycombinator.com/",
  ]);
};

const deleteLinkInFolder = (folder) => {
  return (link) => {
    console.log("deleting", folder, link);
  };
};
export { addNewBookmark, getSavedLinks, deleteLinkInFolder };
