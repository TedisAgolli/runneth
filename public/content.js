// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.from === "popup" && msg.subject === "pageInfo") {
    var domInfo = {
      linkHref: window.location.href,
      linkName: document.title,
    };
    response(domInfo);
  }
});
