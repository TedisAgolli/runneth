// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.from === "popup" && msg.subject === "DOMInfo") {
    var domInfo = {
      linkToSave: window.location.href
    };
    response(domInfo);
  }
});
