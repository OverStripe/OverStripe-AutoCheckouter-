// Set up when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("Over Stripe installed successfully!");

  chrome.storage.sync.set({ enabled: true }, () => {
    console.log("Default setting: Extension enabled.");
  });

  chrome.action.setBadgeText({ text: "ON" });
});

// Toggle extension status on action click
chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get("enabled", (data) => {
    const newStatus = !data.enabled;
    chrome.storage.sync.set({ enabled: newStatus });

    chrome.action.setBadgeText({ text: newStatus ? "ON" : "OFF" });
    chrome.tabs.sendMessage(tab.id, { action: "toggle", enabled: newStatus });
  });
});
