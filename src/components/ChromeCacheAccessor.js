/*global chrome*/
const addNewBookmark = (folderName, link) => {
  chrome.storage.sync.get(folderName, function (result) {
    console.log("add new");

    let currentLinks = Array.isArray(result[folderName])
      ? result[folderName]
      : [];
    chrome.storage.sync.set(
      { [folderName]: [...currentLinks, link] },
      function () {
        console.log("Value is set to " + link);
      }
    );
  });
};

const getSavedLinks = (folderName, setSavedLinks) => {
  chrome.storage.sync.get(folderName, (result) => {
    let currentLinks = Array.isArray(result[folderName])
      ? result[folderName]
      : [];
    setSavedLinks(currentLinks);
  });
};

const deleteLinkInFolder = (folderName, setSavedLinks) => {
  return (link) => {
    chrome.storage.sync.get(folderName, function (result) {
      console.log("add new");

      let currentLinks = Array.isArray(result[folderName])
        ? result[folderName]
        : [];
      currentLinks.splice(currentLinks.indexOf(link), 1);
      chrome.storage.sync.set({ [folderName]: [...currentLinks] }, function () {
        console.log("Deleted" + link);
        setSavedLinks(currentLinks);
      });
    });
  };
};
export { addNewBookmark, getSavedLinks, deleteLinkInFolder };
