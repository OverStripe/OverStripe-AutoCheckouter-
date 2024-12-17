document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("toggle-extension");

  chrome.storage.sync.get("enabled", (data) => {
    toggleCheckbox.checked = data.enabled || false;
  });

  toggleCheckbox.addEventListener("change", () => {
    chrome.storage.sync.set({ enabled: toggleCheckbox.checked }, () => {
      const message = toggleCheckbox.checked
        ? "Over Stripe enabled."
        : "Over Stripe disabled.";
      alert(message);
    });
  });
});
