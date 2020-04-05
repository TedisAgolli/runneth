/*global chrome*/
const addNewBookmark = (folderName, link, setSavedLinks) => {
  chrome.storage.sync.get(folderName, function (result) {
    console.log("add new");

    const currentLinks = Array.isArray(result[folderName])
      ? result[folderName]
      : [];
    const newLinks = [...currentLinks, link];
    chrome.storage.sync.set({ [folderName]: newLinks }, function () {
      console.log("Value is set to " + link);
      setSavedLinks(newLinks);
    });
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
        console.log(currentLinks);
        setSavedLinks(currentLinks);
      });
    });
  };
};
export { addNewBookmark, getSavedLinks, deleteLinkInFolder };
