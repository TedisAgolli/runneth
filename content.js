// content.js
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   if (msg.from === "popup" && msg.subject === "DOMInfo") {
//     var domInfo = {
//       linkToSave: window.location.href
//     };
//     sendResponse(domInfo);
//   }
// });

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
