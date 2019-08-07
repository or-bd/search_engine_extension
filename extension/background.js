chrome.extension.onConnect.addListener((port) => {
  port.onMessage.addListener((request, sender) => {
    if (request.keyword.text) {
      const queryUrl = `https://www.bing.com/search?q=${request.keyword.text}`;
      chrome.tabs.create({ url: queryUrl, active: true });
    }
  });
});
