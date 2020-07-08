chrome.runtime.onStartup.addListener(function () {
  const folderName = "folder";
  chrome.storage.sync.get(folderName, (result) => {
    let currentLinks = Array.isArray(result[folderName])
      ? result[folderName]
      : [];
    chrome.browserAction.setBadgeText({ text: currentLinks.length.toString() });
  });
});
