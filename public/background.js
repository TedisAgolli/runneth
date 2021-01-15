chrome.runtime.onStartup.addListener(function () {
  const folderName = "folder";
  chrome.storage.sync.get(folderName, (result) => {
    let currentLinks = Array.isArray(result[folderName])
      ? result[folderName]
      : [];
    chrome.browserAction.setBadgeText({ text: currentLinks.length.toString() });
  });
});

chrome.tabs.onActivated.addListener(function (msg) {
  const folderName = "folder";
  const tabId = msg.tabId;
  chrome.tabs.get(tabId, (callback) => {
    const tabUrl = callback.url;
    if (tabUrl) {
      chrome.storage.sync.get(folderName, (result) => {
        let currentLinks = Array.isArray(result[folderName])
          ? result[folderName].map((link) => link.linkHref)
          : [];
        console.log(currentLinks);
        if (currentLinks.includes(tabUrl)) {
          chrome.browserAction.setIcon({ path: "/runneth_alt_16.png" });
          chrome.browserAction.setBadgeBackgroundColor({ color: "#D3D3D3" });
        } else {
          chrome.browserAction.setIcon({ path: "/runneth_16.png" });
          chrome.browserAction.setBadgeBackgroundColor({ color: "#3378FF" });
        }
      });
    }
  });
});
