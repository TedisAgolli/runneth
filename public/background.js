// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.from === "popup" && msg.subject === "openTab") {
    console.log("HEEEEEEEEEEY");

    chrome.tabs.create({ url: "https://google.com" });
  }
});
