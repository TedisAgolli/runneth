// Update the relevant fields with the new data.
const setDOMInfo = info => {
  document.getElementById("linkToSave").value = info.linkToSave;
};

const saveBookmark = () => {
  let link = document.getElementById("linkToSave").value;
  let folder = "folder";
  console.log(link, folder);
};

// Once the DOM is ready...
window.addEventListener("DOMContentLoaded", () => {
  // ...query for the active tab...
  document.getElementById("saveBtn").onclick = saveBookmark;
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: "popup", subject: "DOMInfo" },
        setDOMInfo
      );
    }
  );
});
