const FAKE_SAVED_LINKS = [
  {
    linkHref: "https://www.aisodjsadas.com",
    linkName: "Google".repeat(12),
  },
  {
    linkHref: "https://news.ycombinator.com/",
    linkName: "HN",
  },
];

const addNewBookmark = (folderName, link, setSavedLinks) => {
  console.log("adding new");
  setSavedLinks(FAKE_SAVED_LINKS);
};

const getSavedLinks = (folderName, setSavedLinks) => {
  setSavedLinks(FAKE_SAVED_LINKS);
};

const deleteLinkInFolder = (folder, setSavedLinks) => {
  return (link) => {
    let currentLinks = FAKE_SAVED_LINKS;
    console.log("deleting", currentLinks, link);
    currentLinks = currentLinks.filter(
      (savedLink) => savedLink.linkHref !== link
    );
    console.log(currentLinks);
    setSavedLinks(currentLinks);
  };
};

const getActivePageInfo = (setActivePageInfo) => {
  const info = {
    linkHref: "https://www.google.com",
    linkName: "Google",
  };
  setActivePageInfo(info);
};

const setBadge = (count) => {
  console.log("Badge not implemented", count);
};
export {
  addNewBookmark,
  getSavedLinks,
  deleteLinkInFolder,
  getActivePageInfo,
  setBadge,
};
